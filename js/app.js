desktopApp = {
	buttonCount: 1,
	init: function(){
		webix.env.codebase = "./";
		this.createLayout();
		this.createToolbar();
		this.startTime();
		this.createMenu();
        this.createContextMenu();
//		$$('contextmenu').attachTo($$('screens'));
        $$("contextmenu").attachTo(document.getElementsByClassName(" webix_full_screen")[0]);


		webix.attachEvent("onFocusChange", function(view){
			if(view){
				var win = view.getTopParentView();
				// filemanager case
				if(win.getParentView())
					win = win.getParentView().getTopParentView();
				var id = win.config.id;
				if(id.indexOf("_win") != -1){
					desktopApp.setActiveWindow(id);
				}
			}
		});
	},
    
    	createContextMenu: function () {
		let submenuData = [ 
			"Dish",
			"Ingredient", 
			"Menu",
			"Packaging",
			"Recipe",
			];
		var contextmenu = webix.ui({
            id: "contextmenu",
			view:"contextmenu",
			data:[
				{ value:"Add New File", submenu:submenuData},
	
				// { value:"Info" }
			],
			on: {
				onMenuItemClick: function(id){
					var context = this.getContext();
					var list = context.obj; //list item object
					var listId = context.id; //id of the clicked list item
					console.log(context);
					console.log(id);
					if(submenuData.includes(id)) {
						desktopApp.wins.showApp("aceeditor", "Adding a " + id + " file");
					}
				}
			}
		});
		// contextmenu.attachEvent()		
	},
	createLayout: function(){
		let allIcons = desktop_icons;
		let totalIcons = desktop_icons.length;
		let columns = parseInt(totalIcons/5);
		let outerArray=[];
		for(let i=0; i <= columns; i++){
			if(i==columns) {
				let innerArray = [];
				for(let j=1*5; j< totalIcons; j++) {
					innerArray.push(allIcons[j]);
				}
				outerArray.push(innerArray)

			} else {
				let innerArray = [];
				for(let j= i*5 ; j < (i+1)*5; j++){
					innerArray.push(allIcons[j]);
				}
				outerArray.push(innerArray);
			}
		}
		console.log(outerArray);
        let columnsData =[];
        for(let i=0; i<outerArray.length; i++){
            let columnObject = {
							view: "list",
							//id: "desktop",
							width: 140,
							css:"desktop-items",

							type: {
								height: 120,
								template: "<div class='desktop-item-inner'><img src='#image#'><div class='desktop-icons'> #title#</div></div>",
								css:"desktop-item"
							},
							select: "multiselect",
							drag: true,
							data: webix.copy(outerArray[i]),
							on: {
								onItemDblClick: desktopApp.wins.showApp
							}
						};
            columnObject.id = "desktop-items-row-"+i;
            columnsData.push(columnObject);
		}
		columnsData.push({});
        console.log(columnsData);
        
        
		webix.ui({
			id: "screens",
			animate: false,
			cells:[
				{
					view:"layout",
					id: "main",
					css:"desktop-layout",
					type: "clean",
                    cols: columnsData,

//                    cols:[
//                        {
//                            view: "list",
//							id: "desktop",
//							width: 105,
//							css:"desktop-items",
//
//							type: {
//								height: 110,
//								template: "<div class='desktop-item-inner'><img src='#image#'><div class='desktop-icons'> #title#</div></div>",
//								css:"desktop-item"
//							},
//							select: "multiselect",
//							drag: true,
//							data: webix.copy(outerArray[0]),
//							on: {
//								onItemDblClick: desktopApp.wins.showApp
//							}
//                        },
//                        {
//                            view: "list",
//							id: "desktop-2nd-row",
//							width: 105,
//							css:"desktop-items",
//
//							type: {
//								height: 110,
//								template: "<div class='desktop-item-inner'><img src='#image#'><div class='desktop-icons'> #title#</div></div>",
//								css:"desktop-item"
//							},
//							select: "multiselect",
//							drag: true,
//							data: webix.copy(outerArray[1]),
//							on: {
//								onItemDblClick: desktopApp.wins.showApp
//							}
//                        },
//                        {}
//                    ]
				},
				{
					id: "sign-in",
					css: "sign-in",
					rows:[
						{
						},
						{
							cols:[
								{},
								{
									paddingY: 50,
									paddingX: 60,
									css: "sing-in-form",
									rows:[
										{
											template: "<img class='user-logo' src='img/user_logo.png'/><br/>Daily Kit<div class='locked'>Locked</div>",
											height: 130, borderless: true
										},
										{
											view: "button", type: "form", label: "Sign in", width: 150, height: 45,
											click:"desktopApp.signIn()"
										}
									]
								},
								{}
							]
						},
						{}
					]
				}
			]
		});
	},
    
	signIn: function(){
		webix.$$('main').show();
		webix.$$('toolbar').show();
	},
	signOut: function(){
		desktopApp.wins.hideAllWindows();
		webix.$$("toolbar").hide();
		webix.$$("sign-in").show();
	},
	createToolbar: function(){
		webix.ui({
			view:"toolbar",
			id:"toolbar",
			paddingY:2, height:40,
			css:"toolbar-bottom",
			cols: [
				{
					view: "button",
					id: "start_button",
					css:"webix_transparent",
					type: "image",
					image: "img/start.png",
					width: 72,
					on: {
						onItemClick: function () {
							if ($$("winmenu").config.hidden === false){
								$$("winmenu").hide();
							}else{
								$$("winmenu").show();
							}
						}
					}
				},
				{},
				{ view:"template", id:"time", width:95, css:"time-template" }
			]
		});
	},
	fullScreen: function(mode){
		var el = mode? document.documentElement:document,
			rfs;
		if(mode){
			rfs = (
				el.requestFullScreen ||
				el.webkitRequestFullScreen||
				el.mozRequestFullScreen||
				el.msRequestFullScreen||
				el.msRequestFullscreen
			);
		}
		else{
			rfs = (
				el.cancelFullScreen ||
				el.webkitExitFullscreen ||
				el.mozCancelFullScreen ||
				el.msExitFullscreen
			);
		}

		if(rfs){
			rfs.call(el);
			return true;
		}
		return false;
	},
	createMenu: function(){
		webix.require("./js/views/winmenu.css");
		webix.require("./js/views/winmenu.js", function(){
			webix.ui({
				view:"popup",
				id:"winmenu",
				hidden:true,
				css:"winmenu",
				body: {
					view:"layout",
					height:497,
					width:902,
					id:"lay",
					cols:[
						{
							view:"layout",
							rows:[
								{
									view:"template",
									css:"content-user-logo",
									height:60,
									template:"<div><img class='user-logo' src='img/user_logo.png'/> <span>Yan Tsishko</span></div>"
								},
								{
									view:"label",
									css:"start-menu-title",
									label: "Most used"
								},
								{
									view:"list",
									height:280,
									width:240,
									css:"start-menu-list",
									template:"<div class='desktop-icons start-menu-item'><div class='start-menu-item-image-bg'><img class='start-menu-item-image' src='#image#' ></div><div class='start-menu-item-image-title'>#title#</div></div>",
									type:{
										height:36
									},
									select:true,
									data:webix.copy(startmenu_icons),
									on:{
										onItemClick: function(id){
											desktopApp.wins.showApp(id);
											$$("winmenu").hide();
										}
									}
								},
								{
									view:"list",
									width:240,
									id: "winmenu-options-list",
									css:"start-menu-list icon",
									template: function(obj){
										var icon = "image",
											value = "value";
										if(	obj.state){
											icon += obj.state;
											value += obj.state;
										}
										return "<div class='menu-sys-icon' style='background-image:url("+obj[icon]+")'></div>"+obj[value];
									},
									type:{
										height:36
									},
									select:true,
									data:[
										{id: "full-screen", value: "Full screen", value1: "Exit full screen", image:"img/fullscreen.png", image1:"img/fullscreen-exit.png", state:0},
										{id: "sign-out", value: "Sign out", image:"img/signout.png"}
									],
									on:{
										onItemClick: function(id){
											$$("winmenu").hide();

											if(id == "sign-out"){
												desktopApp.signOut();
											}
											else if(id == "full-screen"){
												var item = this.getItem(id);
												if(desktopApp.fullScreen(!item.state)){
													item.state = item.state?0:1;
													this.refresh(id);
												}
											}
										}
									}
								}
							]
						},
						{
							view:"layout",
							rows:[
								{
									view:"label",
									css:"start-image-menu-title",
									label: "Life at a glance",
									height:60
								},
								{
									view:"winmenu",
									borderless:true,
									data:winmenu_1,
									width:315, height:315,
									xCount:3, yCount:3,
									on:{
										onItemClick: function(id){
											desktopApp.wins.showEmptyApp(this.getItem(id));
										}
									}
								}
							]
						},
						{width:17},
						{
							view:"layout",
							rows:[
								{
									view:"label",
									css:"start-image-menu-title",
									label: "Play and Explore",
									height:60
								},
								{
									view:"winmenu",
									borderless:true,
									data:winmenu_2,
									width:315, height:315,
									xCount:3, yCount:3,
									on:{
										onItemClick: function(id){
											desktopApp.wins.showEmptyApp(this.getItem(id));
										}
									}
								}
							]
						}
					]
				},
				position:function(state){
					state.left = 0;
					state.top = document.documentElement.clientHeight - 538;

				}
			});
		});
	},
	updateTime: function(){
		var tm=new Date();
		var h=tm.getHours();
		var m= webix.Date.toFixed(tm.getMinutes());
		var s= webix.Date.toFixed(tm.getSeconds());
		var day = tm.getDate();
		var month = tm.getMonth()+1;
		var year = tm.getFullYear();
		var time = +h+":"+m+":"+s;
		var date = month+"/"+day+"/"+year;
		$$("time").setHTML("<div class='toolbar-time'>"+time+"</div><div class='toolbar-time'>"+date+"</div>");
	},
	startTime: function(){
		setInterval(this.updateTime, 100 );
	},
	deleteActiveBg: function(){
		var views = $$("toolbar").getChildViews();
		for(var i=0; i < views.length; i++) {
			var id = views[i].config.id;
			webix.html.removeCss($$(id).$view, "active");
		}
	},
	setActiveWindow: function(id){
		desktopApp.wins.setActiveStyle(id);
		var btn = $$(id.replace("win","button"));
		if(btn){
			desktopApp.deleteActiveBg();
			webix.html.addCss(btn.$view, "active");
		}
	},
	// show toolbar button for a window
	beforeWinShow: function(name){
		var id = (typeof name == "object"?(name.id+"_button"):(name+"_button"));
		var winId = (typeof name == "object"?(name.id+"_win"):(name+"_win"));
		var btn = $$(id);
		if( btn == webix.undefined){
			var template = "";
			if(typeof name == "object"){
				if(name.img){
					template = "<div class='"+name.$css+"'><img class='"+name.$css+"' src='"+name.img+"'></div>";
				}
				else if(name.icon){
					template = "<div class='"+name.$css+"'><span class='webix_icon mdi mdi-"+name.icon+"'></span></div>";
				}
			}
			else{
				template = "<img class='app_icon' src='img/"+name+".png'>";
			}

			webix.ui({
				view:"button",
				id: id,
				css:"toolbar-icon",
				type:"htmlbutton",
				label: template,
				width:40,
				on:{
					onItemClick:function(){
						$$(winId).show();
						if(winId == "scheduler_win" && $$("scheduler").getScheduler())
							$$("scheduler").getScheduler().updateView();
						else if(winId == "gantt_win" && window.gantt)
							gantt.render();

						desktopApp.deleteActiveBg();
						webix.html.addCss(btn.$view, "active");
					}
				}
			});
			btn = $$(id);
			$$("toolbar").addView(btn,this.buttonCount);
			desktopApp.deleteActiveBg();
			webix.html.addCss(btn.$view, "active");
			this.buttonCount++;
		}
		else {
			desktopApp.deleteActiveBg();
			webix.html.addCss(btn.$view, "active");
		}
	}
};







//					cols:[
//						{
//							view: "list",
//							id: "desktop",
//							width: 105,
//							css:"desktop-items",
//
//							type: {
//								height: 110,
//								template: "<div class='desktop-item-inner'><img src='#image#'><div class='desktop-icons'> #title#</div></div>",
//								css:"desktop-item"
//							},
//							select: "multiselect",
//							drag: true,
//							data: webix.copy(desktop_icons),
//							on: {
//								onItemDblClick: desktopApp.wins.showApp
//							}
//						},
//						{}
//					]
                   // cols: columnsData,


//desktopApp = {
//	buttonCount: 1,
//	init: function () {
//		webix.env.codebase = "./";
//		this.createLayout();
//		this.createToolbar();
//		this.startTime();
//		this.createMenu();
//		this.createContextMenu();
////		$$('contextmenu').attachTo($$('screens'));
//        $$("contextmenu").attachTo(document.getElementsByClassName(" webix_full_screen")[0]);
////        $$("editor").setValue("Hello");
//
//
//		// var actions = $$("screens").getMenu();
//		// actions.add({id: "myAction", icon: "file", value: "My Action"});
//
//
//		webix.attachEvent("onFocusChange", function (view) {
//			if (view) {
//				var win = view.getTopParentView();
//				// filemanager case
//				if (win.getParentView())
//					win = win.getParentView().getTopParentView();
//				var id = win.config.id;
//				if (id.indexOf("_win") != -1) {
//					desktopApp.setActiveWindow(id);
//				}
//			}
//		});
//	},
//
//	createContextMenu: function () {
//		let submenuData = [ 
//			"Dish",
//			"Ingredient", 
//			"Menu",
//			"Packaging",
//			"Recipe",
//			];
//		var contextmenu = webix.ui({
//            id: "contextmenu",
//			view:"contextmenu",
//			data:[
//				{ value:"Add New File", submenu:submenuData},
//	
//				// { value:"Info" }
//			],
//			on: {
//				onMenuItemClick: function(id){
//					var context = this.getContext();
//					var list = context.obj; //list item object
//					var listId = context.id; //id of the clicked list item
//					console.log(context);
//					console.log(id);
//					if(submenuData.includes(id)) {
//						desktopApp.wins.showApp("aceeditor", "Adding a " + id + " file");
//					}
//				}
//			}
//		});
//		// contextmenu.attachEvent()		
//	},
//
//	createLayout: function () {
//        console.log(desktop_icons);
//		webix.ui({
//			id: "screens",
//			animate: false,
//			cells: 
//            [
//				{
//					view:"layout",
//					id: "main",
//					css:"desktop-layout",
//					type: "clean",
//					cols:[
//						{
//							view: "list",
//							id: "desktop",
//							width: 105,
//							css:"desktop-items",
//
//							type: {
//								height: 110,
//								template: "<div class='desktop-item-inner'><img src='#image#'><div class='desktop-icons'> #title#</div></div>",
//								css:"desktop-item"
//							},
//							select: "multiselect",
//							drag: true,
//							data: webix.copy(desktop_icons),
//							on: {
//								onItemDblClick: desktopApp.wins.showApp
//							}
//						},
//						{}
//					]
//                    },//[
////						{
////							view: "list",
////							id: "desktop",
////							width: 105,
////							css: "desktop-items",
////
////							type: {
////								height: 110,
////								template: "<div id='desktop-screen' class='desktop-item-inner'><img src='#image#'><div class='desktop-icons'> #title#</div></div>",
////								css: "desktop-item"
////							},
////							select: "multiselect",
////							drag: true,
////							data: webix.copy(desktop_icons),
////							on: {
////								onItemDblClick: desktopApp.wins.showApp
////							}
////						},
////						{}
//                        
////					]
//				// },
//				{
//					id: "sign-in",
//					css: "sign-in",
//					rows: [
//						{
//						},
//						{
//							cols: [
//								{},
//								{
//									paddingY: 50,
//									paddingX: 60,
//									css: "sing-in-form",
//									rows: [
//										{
//											template: "<img class='user-logo' src='img/user_logo.png'/><br/>Yan Tsishko<div class='locked'>Locked</div>",
//											height: 130, borderless: true
//										},
//										{
//											view: "button", type: "form", label: "Sign in", width: 150, height: 45,
//											click: "desktopApp.signIn()"
//										}
//									]
//								},
//								{}
//							]
//						},
//						{}
//					]
//				}
//			]
//		});
//	},
//	signIn: function () {
//		webix.$$('main').show();
//		webix.$$('toolbar').show();
//	},
//	signOut: function () {
//		desktopApp.wins.hideAllWindows();
//		webix.$$("toolbar").hide();
//		webix.$$("sign-in").show();
//	},
//	createToolbar: function () {
//		webix.ui({
//			view: "toolbar",
//			id: "toolbar",
//			paddingY: 2, height: 40,
//			css: "toolbar-bottom",
//			cols: [
//				{
//					view: "button",
//					id: "start_button",
//					type: "image",
//					image: "img/start.png",
//					width: 72,
//					on: {
//						onItemClick: function () {
//							if ($$("winmenu").config.hidden === false) {
//								$$("winmenu").hide();
//							} else {
//								$$("winmenu").show();
//							}
//						}
//					}
//				},
//				{},
//				{ view: "template", id: "time", width: 95, css: "time-template" }
//			]
//		});
//	},
//	fullScreen: function (mode) {
//		var el = mode ? document.documentElement : document,
//			rfs;
//		if (mode) {
//			rfs = (
//				el.requestFullScreen ||
//				el.webkitRequestFullScreen ||
//				el.mozRequestFullScreen ||
//				el.msRequestFullScreen ||
//				el.msRequestFullscreen
//			);
//		}
//		else {
//			rfs = (
//				el.cancelFullScreen ||
//				el.webkitExitFullscreen ||
//				el.mozCancelFullScreen ||
//				el.msExitFullscreen
//			);
//		}
//
//		if (rfs) {
//			rfs.call(el);
//			return true;
//		}
//		return false;
//	},
//	createMenu: function () {
//		webix.require("./js/views/winmenu.css");
//		webix.require("./js/views/winmenu.js", function () {
//			webix.ui({
//				view: "popup",
//				id: "winmenu",
//				hidden: true,
//				css: "winmenu",
//				body: {
//					view: "layout",
//					height: 497,
//					width: 902,
//					id: "lay",
//					cols: [
//						{
//							view: "layout",
//							rows: [
//								{
//									view: "template",
//									css: "content-user-logo",
//									height: 60,
//									template: "<div><img class='user-logo' src='img/user_logo.png'/> <span>Yan Tsishko</span></div>"
//								},
//								{
//									view: "label",
//									css: "start-menu-title",
//									label: "Most used"
//								},
//								{
//									view: "list",
//									height: 280,
//									width: 240,
//									css: "start-menu-list",
//									template: "<div class='desktop-icons start-menu-item'><div class='start-menu-item-image-bg'><img class='start-menu-item-image' src='#image#' ></div><div class='start-menu-item-image-title'>#title#</div></div>",
//									type: {
//										height: 36
//									},
//									select: true,
//									data: webix.copy(startmenu_icons),
//									on: {
//										onItemClick: function (id) {
//											desktopApp.wins.showApp(id);
//											$$("winmenu").hide();
//										}
//									}
//								},
//								{
//									view: "list",
//									width: 240,
//									id: "winmenu-options-list",
//									css: "start-menu-list icon",
//									template: function (obj) {
//										var icon = "image",
//											value = "value";
//										if (obj.state) {
//											icon += obj.state;
//											value += obj.state;
//										}
//										return "<div class='menu-sys-icon' style='background-image:url(" + obj[icon] + ")'></div>" + obj[value];
//									},
//									type: {
//										height: 36
//									},
//									select: true,
//									data: [
//										{ id: "full-screen", value: "Full screen", value1: "Exit full screen", image: "img/fullscreen.png", image1: "img/fullscreen-exit.png", state: 0 },
//										{ id: "sign-out", value: "Sign out", image: "img/signout.png" }
//									],
//									on: {
//										onItemClick: function (id) {
//											$$("winmenu").hide();
//
//											if (id == "sign-out") {
//												desktopApp.signOut();
//											}
//											else if (id == "full-screen") {
//												var item = this.getItem(id);
//												if (desktopApp.fullScreen(!item.state)) {
//													item.state = item.state ? 0 : 1;
//													this.refresh(id);
//												}
//											}
//										}
//									}
//								}
//							]
//						},
//						{
//							view: "layout",
//							rows: [
//								{
//									view: "label",
//									css: "start-image-menu-title",
//									label: "Life at a glance",
//									height: 60
//								},
//								{
//									view: "winmenu",
//									borderless: true,
//									data: winmenu_1,
//									width: 315, height: 315,
//									xCount: 3, yCount: 3,
//									on: {
//										onItemClick: function (id) {
//											desktopApp.wins.showEmptyApp(this.getItem(id));
//										}
//									}
//								}
//							]
//						},
//						{ width: 17 },
//						{
//							view: "layout",
//							rows: [
//								{
//									view: "label",
//									css: "start-image-menu-title",
//									label: "Play and Explore",
//									height: 60
//								},
//								{
//									view: "winmenu",
//									borderless: true,
//									data: winmenu_2,
//									width: 315, height: 315,
//									xCount: 3, yCount: 3,
//									on: {
//										onItemClick: function (id) {
//											desktopApp.wins.showEmptyApp(this.getItem(id));
//										}
//									}
//								}
//							]
//						}
//					]
//				},
//				position: function (state) {
//					state.left = 0;
//					state.top = document.documentElement.clientHeight - 538;
//
//				}
//			});
//		});
//	},
//	updateTime: function () {
//		var tm = new Date();
//		var h = tm.getHours();
//		var m = webix.Date.toFixed(tm.getMinutes());
//		var s = webix.Date.toFixed(tm.getSeconds());
//		var day = tm.getDate();
//		var month = tm.getMonth() + 1;
//		var year = tm.getFullYear();
//		var time = +h + ":" + m + ":" + s;
//		var date = month + "/" + day + "/" + year;
//		$$("time").setHTML("<div class='toolbar-time'>" + time + "</div><div class='toolbar-time'>" + date + "</div>");
//	},
//	startTime: function () {
//		setInterval(this.updateTime, 100);
//	},
//	deleteActiveBg: function () {
//		var views = $$("toolbar").getChildViews();
//		for (var i = 0; i < views.length; i++) {
//			var id = views[i].config.id;
//			webix.html.removeCss($$(id).$view, "active");
//		}
//	},
//	setActiveWindow: function (id) {
//		desktopApp.wins.setActiveStyle(id);
//		var btn = $$(id.replace("win", "button"));
//		if (btn) {
//			desktopApp.deleteActiveBg();
//			webix.html.addCss(btn.$view, "active");
//		}
//	},
//	// show toolbar button for a window
//	beforeWinShow: function (name) {
//		var id = (typeof name == "object" ? (name.id + "_button") : (name + "_button"));
//		var winId = (typeof name == "object" ? (name.id + "_win") : (name + "_win"));
//		var btn = $$(id);
//		if (btn == webix.undefined) {
//			var template = "";
//			if (typeof name == "object") {
//				if (name.img) {
//					template = "<div class='" + name.$css + "'><img class='" + name.$css + "' src='" + name.img + "'></div>";
//				}
//				else if (name.icon) {
//					template = "<div class='" + name.$css + "'><span class='webix_icon mdi mdi-" + name.icon + "'></span></div>";
//				}
//			}
//			else {
//				template = "<img class='app_icon' src='img/" + name + ".png'>";
//			}
//
//			webix.ui({
//				view: "button",
//				id: id,
//				css: "toolbar-icon",
//				type: "htmlbutton",
//				label: template,
//				width: 40,
//				on: {
//					onItemClick: function () {
//						$$(winId).show();
//						if (winId == "scheduler_win" && $$("scheduler").getScheduler())
//							$$("scheduler").getScheduler().updateView();
//						else if (winId == "gantt_win" && window.gantt)
//							gantt.render();
//
//						desktopApp.deleteActiveBg();
//						webix.html.addCss(btn.$view, "active");
//					}
//				}
//			});
//			btn = $$(id);
//			$$("toolbar").addView(btn, this.buttonCount);
//			desktopApp.deleteActiveBg();
//			webix.html.addCss(btn.$view, "active");
//			this.buttonCount++;
//		}
//		else {
//			desktopApp.deleteActiveBg();
//			webix.html.addCss(btn.$view, "active");
//		}
//	}
//};

//
//function(desktop_icons){
//                        console.log(desktop_icons);
//                        let returnArray = [];
//                        let columns = desktop_icons/6;
//                        console.log(columns);
//                        
//                        for(let i=0; i<columns; i++){
//                            
//                            let returnObject = {
//                                view: "list",
//                                id: "desktop",
//                                width: 105,
//                                css: "desktop-items",
//
//                                type: {
//                                    height: 110,
//                                    template: "<div id='desktop-screen' class='desktop-item-inner'><img src='#image#'><div class='desktop-icons'> #title#</div></div>",
//                                    css: "desktop-item"
//                                },
//                                select: "multiselect",
//                                drag: true,
//                                data: webix.copy(desktop_icons),
//                                on: {
//                                    onItemDblClick: desktopApp.wins.showApp
//                                }
//                            }
//                            
//                            returnArray.push(returnObject);
//                            columns--;
//                        }
//                        console.log(returnArray)
//                        return returnArray;
//                    }
