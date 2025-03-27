<!--
//Created by Album Builder Program Wed Jun 28 05:52:30 2023
var info_url   = "";
var title      = "Vacationing in Iceland";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2306iceland/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
var pagelist   = [["2306isbird","6/2023 Birding in Iceland","6/2023 冰岛观鸟"]]
 
if(window.usechinese){
    title      = "Vacationing in Iceland";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "2306iceland_"+(i+1).toString();
        this[1][i] = "";
    }
    this[0][7] = "2306iceland_0";
    this[1][7] = "";
    for (var i=8;i<45;i++){
        this[0][i] = "2306iceland_"+i.toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "德朗斯内斯村的天然地热温泉池。";
        this[1][1] = "侯尔马维克镇的儿童游乐场。";
        this[1][2] = "西峡湾。";
        this[1][3] = "西峡湾。";
        this[1][4] = "西峡湾。";
        this[1][5] = "西峡湾的拉特拉尔角。";
        this[1][6] = "在西峡湾的拉特拉尔角"+pagelink("2306isbird&35","看海鹦")+"。";
        this[1][7] = "北极海鹦。";
        this[1][8] = "犀牛石。";
        this[1][9] = "犀牛石。";
        this[1][10] = "众神瀑布。";
        this[1][11] = "众神瀑布。";
        this[1][12] = "爬Hverfjall火山口。";
        this[1][13] = "Hverfjall火山口。";
        this[1][14] = "Hverfjall火山口。";
        this[1][15] = "在胡萨维克看鲸鱼。";
        this[1][16] = "在胡萨维克看鲸鱼。";
        this[1][17] = "黛提瀑布。";
        this[1][18] = "黛提瀑布。";
        this[1][19] = "黛提瀑布。";
        this[1][20] = "黛提瀑布。";
        this[1][21] = "塞尔福斯瀑布。";
        this[1][22] = "塞尔福斯瀑布。";
        this[1][23] = "塞尔福斯瀑布。";
        this[1][24] = "杰古沙龙冰河湖。";
        this[1][25] = "杰古沙龙冰河湖。";
        this[1][26] = "杰古沙龙冰河湖。";
        this[1][27] = "Fjallsárlón冰河湖。";
        this[1][28] = "Fjallsárlón冰河湖。";
        this[1][29] = "Fjallsárlón冰河湖。";
        this[1][30] = "Fjallsárlón冰河湖。";
        this[1][31] = "路边到处都是的鲁冰花。";
        this[1][32] = "路边到处都是的鲁冰花。";
        this[1][33] = "雷尼斯黑沙滩的玄武岩。";
        this[1][34] = "塞里雅兰瀑布。";
        this[1][35] = "塞里雅兰瀑布。";
        this[1][36] = "塞里雅兰瀑布。";
        this[1][37] = "塞里雅兰瀑布。";
        this[1][38] = "塞里雅兰瀑布。";
        this[1][39] = "位于雷克雅未克市中心的哈尔格林姆斯大教堂。";
        this[1][40] = "在雷克雅未克逛街。";
        this[1][41] = "蓝湖温泉。";
        this[1][42] = "蓝湖温泉。";
        this[1][43] = "蓝湖温泉。";
        this[1][44] = "蓝湖温泉。";
    }else{
        this[1][0] = "Drangsnes hot tub.";
        this[1][1] = "Jumping pillow at Hólmavík.";
        this[1][2] = "Westfjords.";
        this[1][3] = "Westfjords.";
        this[1][4] = "Westfjords.";
        this[1][5] = "Látrabjarg.";
        this[1][6] = pagelink("2306isbird&35","Watching an Atlantic Puffin")+" at Látrabjarg.";
        this[1][7] = "Atlantic Puffin.";
        this[1][8] = "Hvitserkur.";
        this[1][9] = "Hvitserkur.";
        this[1][10] = "Goðafoss.";
        this[1][11] = "Goðafoss.";
        this[1][12] = "Climbing the Hverfjall vocanic crater.";
        this[1][13] = "Hverfjall vocanic crater.";
        this[1][14] = "Hverfjall vocanic crater.";
        this[1][15] = "Whale watching at Húsavík.";
        this[1][16] = "Whale watching at Húsavík.";
        this[1][17] = "Dettifoss.";
        this[1][18] = "Dettifoss.";
        this[1][19] = "Dettifoss.";
        this[1][20] = "Dettifoss.";
        this[1][21] = "Selfoss.";
        this[1][22] = "Selfoss.";
        this[1][23] = "Selfoss.";
        this[1][24] = "Jökulsárlón.";
        this[1][25] = "Jökulsárlón.";
        this[1][26] = "Jökulsárlón.";
        this[1][27] = "Fjallsárlón.";
        this[1][28] = "Fjallsárlón.";
        this[1][29] = "Fjallsárlón.";
        this[1][30] = "Fjallsárlón.";
        this[1][31] = "Lupine field.";
        this[1][32] = "Lupine field.";
        this[1][33] = "Reynisfjara beach.";
        this[1][34] = "Seljalandsfoss.";
        this[1][35] = "Seljalandsfoss.";
        this[1][36] = "Seljalandsfoss.";
        this[1][37] = "Seljalandsfoss.";
        this[1][38] = "Seljalandsfoss.";
        this[1][39] = "Hallgrimskirkja in Reykjavík.";
        this[1][40] = "Reykjavík.";
        this[1][41] = "Blue Lagoon.";
        this[1][42] = "Blue Lagoon.";
        this[1][43] = "Blue Lagoon.";
        this[1][44] = "Blue Lagoon.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
