var small_film_set = [
	{ id:1, title:"The Shawshank", year:1994, votes:678790, rating:9.2, rank:1},
	{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2},
	{ id:3, title:"The Godfather", year:1974, votes:319352, rating:9.0, rank:3},
	{ id:4, title:"The Good", year:1966, votes:213030, rating:8.9, rank:4},
	{ id:5, title:"My Fair Lady", year:1964, votes:533848, rating:8.9, rank:5},
	{ id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6}
];

var desktop_icons = [
//    { id:"scheduler", title:"Dhtmlx Scheduler", image:"img/scheduler.png", win:"scheduler_win"},
//    { id:"gantt", title:"Dhtmlx Gantt", image:"img/gantt.png", win:"gantt_win"},
	{ id:"filemanager", title:"Filemanager", image:"img/filemanager.png", win:"filemanager_win"},
    { id:"aceeditor", title:"AceEditor", image:"img/aceeditor.png", win:"aceeditor_win"},
    { id:"orders", title:"Order Dashboard", image:"img/orders.png", win:"orders_win"},
    { id:"recipes", title:"Recipe Manager", image:"img/recipes.png", win:"recipes_win"},
    { id:"crm", title:"crm", image:"img/crm.png", win:"crm_win"},
    { id:"merchants", title:"Merchants", image:"img/merchants.png", win:"merchants_win"},
    { id:"accounting", title:"Accounting", image:"img/accounting.png", win:"accounting_win"},
    { id:"deliveredAndRejectedOrders", title:"Delivered & Rejected Orders", image:"img/deliveredAndRejectedOrders.png", win:"deliveredAndRejectedOrders_win"},

];


var startmenu_icons = [
	{ id:"scheduler", title:"Dhtmlx Scheduler", image:"img/scheduler.png", win:"scheduler_win"},
	{ id:"gantt", title:"Dhtmlx Gantt", image:"img/gantt.png", win:"gantt_win"},
	{ id:"filemanager", title:"Filemanager", image:"img/filemanager.png", win:"filemanager_win"}
];

var start_menu = { id:"1",value:"Start", submenu:[
	"Dhtmlx sheduler",
	"Dhtmlx gantt",
	"Filemanager"
]};

var tasks =  {
	data:[
		{id:1, text:"Project #1", start_date:"01-11-2015", duration:9,order:10,
			progress:0.4, open:true},
		{id:"1.1", text:"Task #1.1", 	  start_date:"02-11-2015", duration:2, order:10,
			progress:0.6, parent:1},
		{id:"1.2", text:"Task #1.2",    start_date:"05-11-2015", duration:3, order:20,
			progress:0.6, parent:1},
		{id:"1.3", text:"Task #1.3",    start_date:"07-11-2015", duration:3, order:20,
			progress:0.2, parent:1},
		{id:2, text:"Project #2", start_date:"02-11-2015", duration:9,order:10,
			progress:0.4, open:true},
		{id:"2.1", text:"Task #2.1", 	  start_date:"03-11-2015", duration:3, order:10,
			progress:0.5, parent:2},
		{id:"2.2", text:"Task #2.2",    start_date:"06-11-2015", duration:5, order:20,
			progress:0.2, parent:2},
		{id:3, text:"Project #3", start_date:"11-11-2015", duration:10,order:10,
			progress:0, open:true},
		{id:"3.1", text:"Task #3.1", 	  start_date:"12-11-2015", duration:2, order:10,
			progress:0.6, parent:3},
		{id:"3.2", text:"Task #3.2",    start_date:"15-11-2015", duration:5, order:20,
			progress:0.6, parent:3}
	],
	links:[
		{ id:1, source:1, target:"1.1", type:"1"},
		{ id:2, source:"1.1", target:"1.2", type:"0"},
		{ id:4, source:2, target:"2.1", type:"1"},
		{ id:5, source:"2.1", target:"2.2", type:"0"},
		{ id:6, source:3, target:"3.1", type:"1"},
		{ id:7, source:"3.1", target:"3.2", type:"0"},
		{ id:8, source:"3.2", target:"3.3", type:"1"}
	]
};

// $$("element_id").attachEvent("onSomeEvent", some_function(){/* ... */});




var filemanagerData =[{value: 'mychatwidget', id: 'mychatwidget', type: 'folder', data :
                        [ { value: '.env', id: 'mychatwidget/.env', type: 'text' },
  { value: '.git', id: 'mychatwidget/.git', type: 'text' },
  { value: '.gitignore',
    id: 'mychatwidget/.gitignore',
    type: 'text' },
  { value: '.next', id: 'mychatwidget/.next', type: 'text' },
  { value: 'next.config.js',
    id: 'mychatwidget/next.config.js',
    type: 'text' },
  { value: 'node_modules',
    id: 'mychatwidget/node_modules',
    type: 'text' },
  { value: 'package-lock.json',
    id: 'mychatwidget/package-lock.json',
    type: 'text' },
  { value: 'package.json',
    id: 'mychatwidget/package.json',
    type: 'text' },
  { value: 'pages',
  id: 'mychatwidget/pages',
  data: 
   [ { value: 'index.css',
       id: 'mychatwidget/pages/index.css',
       type: 'text' },
     { value: 'index.js',
       id: 'mychatwidget/pages/index.js',
       type: 'text' } ],
  type: 'folder' }
,
  { value: 'server.js',
    id: 'mychatwidget/server.js',
    type: 'text' },
  { value: 'webpage-autochat.tar.gz',
    id: 'mychatwidget/webpage-autochat.tar.gz',
    type: 'text' } ]


                      }]
   
//	{id:"files", value:"Files", open:true,  type:"folder", date: new Date(2014,2,10,16,10), data:[
//		{ id:"documents", value:"Documents", date: new Date(2014,2,10,16,10),  type:"folder", open:true, data:[
//			{id:"recipes", value:"Recipes", type:"folder", date: new Date(2014,2,10,16,10), data:[
//				{id:"chicken-biryani", value:"Chicken Biryani.json", type:"pp", date:new Date(2014,2,10,16,10), size:"12830"},
//				{id:"mutton-biryani", value:"MuttonBiryani.json",  type:"pp", date: new Date(2014,2,10,16,10), size:"20100"},
//				{id:"veg-biryani", value:"Veg Biryani.json", type:"pp", date: new Date(2014,2,10,16,10), size:"15750"}
//			],
//		},
			// {id:"reports", value:"Reports",  type:"folder", date:new Date(2014,2,10,16,10), open:true, data:[
			// 	{id:"usa", value:"USA",  type:"folder", date: new Date(2014,2,10,16,10), data:[
			// 		{id:"salesUS", value:"Sales USA.ppt",  type:"excel", date:new Date(2014,2,10,16,10), size:"12830"},
			// 		{id:"overviewUS", value:"Overview USA.doc",  type:"doc", date: new Date(2014,2,10,16,10), size:"15030"},
			// 		{id:"pricesUS", value:"Prices USA.ppt", type:"excel",  date: new Date(2014,2,10,16,10), size:"15830"},
			// 		{id:"productsUS", value:"Products USA.ppt",  type:"excel", date: new Date(2014,2,10,16,10), size:"20830"}
			// 	]},
			// 	{id:"europe", value:"Europe",  type:"folder", date: new Date(2014,2,10,16,10), data:[
			// 		{id:"salesEurope", value:"Sales Europe.ppt",  type:"archive", date: new Date(2014,2,10,16,10), size:"12830"},
			// 		{id:"pricesEurope", value:"Prices Europe.ppt", type:"excel",  date: new Date(2014,2,10,16,10), size:"15830"},
			// 		{id:"productsEurope", value:"Products Europe.ppt", type:"excel",  date: new Date(2014,2,10,16,10), size:"20830"},
			// 		{id:"overviewEurope", value:"Overview Europe.doc",  type:"doc", date: new Date(2014,2,10,16,10), size:"15030"}
			// 	]},
			// 	{id:"asia", value:"Asia",  type:"folder", date: new Date(2014,2,10,16,10), data:[
			// 		{id:"salesAsia", value:"Sales Asia.ppt", type:"excel",  date: new Date(2014,2,10,16,10), size:"12083"},
			// 		{id:"pricesAsia", value:"Prices Asia.ppt",  type:"excel", date: new Date(2014,2,10,16,10), size:"15830"},
			// 		{id:"overviewAsia", value:"Overview Asia.doc",  type:"doc", date: new Date(2014,2,10,16,10), size:"15030"},
			// 		{id:"productsAsia", value:"Products Asia.ppt",  type:"excel", date: new Date(2014,2,10,16,10), size:"20830"}
			// 	]}
			// ]}
//		]},
		// { id:"images", value:"Images", type:"folder", date: new Date(2014,2,10,16,12), open:true, data:[
		// 	{id:"thumbnails", value:"Thumbnails", type:"folder", date: new Date(2014,2,10,16,12), data:[
		// 		{id:"thumbnails1", value:"Product 1-th.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"34.83 KB"},
		// 		{id:"thumbnails2", value:"Product 2-th.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"40.10 KB"},
		// 		{id:"thumbnails3", value:"Product 3-th.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"33.75 KB"},
		// 		{id:"thumbnails4", value:"Product 4-th.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"35.13 KB"},
		// 		{id:"thumbnails5", value:"Product 5-th.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"34.72  KB"},
		// 		{id:"thumbnails6", value:"Product 6-th.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"37.06  KB"}
		// 	]},
		// 	{id:"base", value:"Base images", type:"folder", date: new Date(2014,2,10,16,12), data:[
		// 		{id:"base1", value:"Product 1.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"74.83 KB"},
		// 		{id:"base2", value:"Product 2.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"80.10 KB"},
		// 		{id:"base3", value:"Product 3.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"73.75 KB"},
		// 		{id:"base4", value:"Product 4.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"75.13 KB"},
		// 		{id:"base5", value:"Product 5.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"74.72 KB" },
		// 		{id:"base6", value:"Product 6.jpg", type:"image", date: new Date(2014,2,10,16,12), size:"77.06 KB"}
		// 	]}
		// ]},
		// { id:"video", value:"Video", type:"folder", date: new Date(2014,2,10,16,12), data:[
		// 	{id:"video1", value:"New Year 2013.avi", icon:"file-video-o", type:"video", date: new Date(2014,2,10,16,12), size:"25030000", pId:"video" },
		// 	{id:"video2", value:"Presentation.avi", icon:"file-video-o",type:"video", date: new Date(2014,2,10,16,12), size:"11072000" , pId:"video"},
		// 	{id:"video3", value:"Conference.avi", icon:"file-video-o", type:"video", date: new Date(2014,2,10,16,12), size:"31256000", pId:"video" }
		// ]}
//	]}
//];


// filemanagerData.attachEvent("onBeforeDelete", function(id){
//     //... some code here ... 
// 	//return false to block operation
// 	if(id == 'chicken-biryani') {
// 		return false;
// 	}
// });


var winmenu_1 = [
	{ value:"Calendar", id:"calendar", icon:"calendar", color:"#107c10", x:1, y:1 },
	{ value:"Email", id:"email", icon:"email", color:"#297acc", width:2, x:2, y:1 },
	{ value:"Photos", id:"photos", img:"img/photos.png", width:2, color:"#284063", x:1, y:2 },
	{ value:"Dropbox", id:"dropbox", icon:"dropbox", color:"#297acc", x:3, y:2 },
	{ value:"Weather", id:"weather", icon:"sunglasses", color:"#1a4588", x:1, y:3 },
	{ value:"Skype", id:"skype", icon:"skype", color:"#00b1f0", x:2, y:3 },
	{ value:"Maps", id:"map", icon:"map-marker", color:"#80397b", x:3, y:3 }
];
var winmenu_2 = [
	{ value:"Games", id:"games", icon:"gamepad-variant", color:"#1a4588", x:1, y:1 },
	{ value:"Music", id:"music", icon:"headphones", color:"#dc3c00", x:2, y:1 },
	{ value:"Movies", id:"video", icon:"film", color:"#80397b", x:3, y:1 },
	{ value:"Sports", id:"sports", img:"img/sports.png", color:"#297acc", x:1, y:2  },
	{ value:"News", id:"news", img:"img/news.png",  width:2, color:"#284063", x:2, y:2 },
	{ value:"Store", id:"store", icon:"shopping", color:"#107c10", x:1, y:3 },
	{ value:"Money", id:"money", icon:"finance", color:"#1a4588", x:2, y:3 },
	{ value:"Travel", id:"travel",	icon:"briefcase", color:"#297acc", x:3, y:3 }
];


var test_data_set_2015 = "<data><event id='1261150506' start_date='2015-08-01 18:00' end_date='2015-08-03 18:00' text='Sister Act' details='Palladium' /><event id='1261150507' start_date='2015-08-02 07:00' end_date='2015-08-02 09:00' text='Cat On a Hot Tin Roof' details='Novello Theatre' /><event id='1261150508' start_date='2015-08-02 07:00' end_date='2015-08-02 09:00' text='Grease' details='Piccadilly Theatre' /><event id='1261150509' start_date='2015-08-03 17:00' end_date='2015-08-03 19:00' text='Ladbrokes.com World Darts Championships' details='Alexandra Palace' /><event id='1261150510' start_date='2015-08-05 14:00' end_date='2015-08-05 16:00' text='Calendar Girls' details='Noel Coward Theatre' /><event id='1261150511' start_date='2015-08-06 08:00' end_date='2015-08-08 08:00' text='Dirty Dancing' details='Aldwych Theatre' /><event id='1261150512' start_date='2015-08-07 15:00' end_date='2015-08-07 17:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150513' start_date='2015-08-08 15:00' end_date='2015-08-08 17:00' text='Grease' details='Piccadilly Theatre' /><event id='1261150514' start_date='2015-08-09 09:00' end_date='2015-08-09 11:00' text='The Lion King' details='Lyceum Theatre' /><event id='1261150515' start_date='2015-08-09 07:00' end_date='2015-08-09 09:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150516' start_date='2015-08-10 10:00' end_date='2015-08-12 10:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150517' start_date='2015-08-12 09:00' end_date='2015-08-12 11:00' text='Masters Snooker 2015      Afternoon session' details='Wembley Arena' /></data>";