<!--
var info_url   = "https://kidsafterhours.com/explorers/";
var title      = (["2026 Summer Camp","2026夏令营"])[cn_ind];
var dir        = maindir+"pics/2026camp/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = (Date.now() < (new Date("2026-08-01")).getTime());
var makeface   = new Array();
var url        = "";
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]    = "20260623_1";
    this[1][i++]  = (["Playing golf at Topgolf Germantown","在德国镇顶尖高尔夫娱乐中心(Topgolf)打高尔夫球"])[cn_ind];
    this[0][i]    = "20260624_1";
    this[1][i++]  = (["Visiting National Children's Museum in Washington, D.C.","参观华盛顿特区的国家儿童博物馆"])[cn_ind];
    this[0][i]    = "20260624_2";
    this[1][i++]  = (["Visiting National Children's Museum in Washington, D.C.","参观华盛顿特区的国家儿童博物馆"])[cn_ind];
    this[0][i]    = "20260624_3";
    this[1][i++]  = (["Visiting National Children's Museum in Washington, D.C.","参观华盛顿特区的国家儿童博物馆"])[cn_ind];
    this[0][i]    = "20260625_1";
    this[1][i++]  = (["Visiting Bubble Planet in Washington, D.C.","参观华盛顿特区的泡泡星球"])[cn_ind];
    this[0][i]    = "20260625_2";
    this[1][i++]  = (["Visiting Bubble Planet in Washington, D.C.","参观华盛顿特区的泡泡星球"])[cn_ind];
    this[0][i]    = "20260625_3";
    this[1][i++]  = (["Visiting Bubble Planet in Washington, D.C.","参观华盛顿特区的泡泡星球"])[cn_ind];
    this[0][i]    = "20260625_4";
    this[1][i++]  = (["Visiting Bubble Planet in Washington, D.C.","参观华盛顿特区的泡泡星球"])[cn_ind];
    this[0][i]    = "20260629_0";
    this[1][i++]  = (["Visiting the Smithonian's National Air and Space Museum Udvar-Hazy Center in Chantilly, Virginia","参观位于弗吉尼亚州尚蒂利的国家航空航天博物馆乌德沃尔-哈齐中心"])[cn_ind];
    this[0][i]    = "20260629_1";
    this[1][i++]  = (["Visiting the Smithonian's National Air and Space Museum Udvar-Hazy Center in Chantilly, Virginia","参观位于弗吉尼亚州尚蒂利的国家航空航天博物馆乌德沃尔-哈齐中心"])[cn_ind];
    this[0][i]    = "20260701_1";
    this[1][i++]  = (["Visiting the Gunpowder Falls State Park Hammerman Area in Middle River, Maryland","在马里兰州的火药瀑布州立公园的沙滩上玩"])[cn_ind];
    this[0][i]    = "20260702_1";
    this[1][i++]  = (["Visiting the Atlantis Waterpark in Centreville, Virginia","在弗吉尼亚州森特维尔的亚特兰蒂斯水上乐园游泳"])[cn_ind];
    this[0][i]    = "20260706_1";
    this[1][i++]  = (["Ziplining at the Adventure Park in Sandy Spring, Maryland","在马里兰州桑迪斯普林的探险公园体验高空滑索"])[cn_ind];
    this[0][i]    = "20260706_2";
    this[1][i++]  = (["Ziplining at the Adventure Park in Sandy Spring, Maryland","在马里兰州桑迪斯普林的探险公园体验高空滑索"])[cn_ind];
    this[0][i]    = "20260707_1";
    this[1][i++]  = (["Visiting the Maryland Zoo in Baltimore","参观巴尔的摩的马里兰动物园"])[cn_ind];
    this[0][i]    = "20260707_2";
    this[1][i++]  = (["Visiting the Maryland Zoo in Baltimore","参观巴尔的摩的马里兰动物园"])[cn_ind];
    this[0][i]    = "20260707_3";
    this[1][i++]  = (["Visiting the Maryland Zoo in Baltimore","参观巴尔的摩的马里兰动物园"])[cn_ind];
    this[0][i]    = "20260707_4";
    this[1][i++]  = (["Visiting the Maryland Zoo in Baltimore","参观巴尔的摩的马里兰动物园"])[cn_ind];
    this[0][i]    = "20260708_1";
    this[1][i++]  = (["Visiting the Fort Smallwood Park in Pasadena, Maryland","在马里兰州的斯莫伍德堡公园玩"])[cn_ind];
    this[0][i]    = "20260708_2";
    this[1][i++]  = (["Visiting the Fort Smallwood Park in Pasadena, Maryland","在马里兰州的斯莫伍德堡公园玩"])[cn_ind];
    this[0][i]    = "20260708_3";
    this[1][i++]  = (["Visiting the Fort Smallwood Park in Pasadena, Maryland","在马里兰州的斯莫伍德堡公园玩"])[cn_ind];
    this[0][i]    = "20260709_1";
    this[1][i++]  = (["Visiting the Patapsco Valley State Park in Maryland","在马里兰州的帕塔普斯科河谷州立公园玩"])[cn_ind];
    this[0][i]    = "20260714_1";
    this[1][i++]  = (["Visiting the Zavazone in Rockville, Maryland","在马里兰州罗克维尔市的室内蹦床游乐中心玩"])[cn_ind];
    this[0][i]    = "20260714_2";
    this[1][i++]  = (["Visiting the Zavazone in Rockville, Maryland","在马里兰州罗克维尔市的室内蹦床游乐中心玩"])[cn_ind];
    this[0][i]    = "20260715_1";
    this[1][i++]  = (["Visiting the Rocky Point Park in Essex, Maryland","在马里兰州的洛基角公园的沙滩上玩"])[cn_ind];
    this[0][i]    = "20260715_2";
    this[1][i++]  = (["Visiting the Rocky Point Park in Essex, Maryland","在马里兰州的洛基角公园的沙滩上玩"])[cn_ind];
    this[0][i]    = "20260715_3";
    this[1][i++]  = (["Enjoying a cup of frozen yogurt at SweetFrog","在甜蛙(SweetFrog)冻酸奶店吃冻酸奶"])[cn_ind];
    this[0][i]    = "20260716_1";
    this[1][i++]  = (["Visiting the National Aquarium in Baltimore","参观巴尔的摩的国家水族馆"])[cn_ind];
    this[0][i]    = "20260716_2";
    this[1][i++]  = (["Taking pictures of camper friends in the National Aquarium in Baltimore","在巴尔的摩国家水族馆给夏令营的朋友们拍照"])[cn_ind];
    this[0][i]    = "20260717_1";
    this[1][i++]  = (["Bowling during the summer camp","打保龄球"])[cn_ind];

    adddate(this);
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
