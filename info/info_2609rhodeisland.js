<!--
//Created by Album Builder Program Wed Sep 09 08:08:25 2026
var info_url   = "";
var title      = "Rhode Island Trip";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2609rhodeisland/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "罗德岛之旅";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "2609rhodeisland_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "游布洛克岛。";
        this[1][1] = "游布洛克岛。";
        this[1][2] = "游布洛克岛。";
        this[1][3] = "球球和妈妈在布洛克岛东南灯塔。";
        this[1][4] = "球球做侧手翻。";
        this[1][5] = "球球做手倒立。";
        this[1][6] = "布洛克岛东南的莫希根悬崖。";
        this[1][7] = "球球和妈妈在布洛克岛东南的莫希根悬崖。";
        this[1][8] = "球球和妈妈在布洛克岛东南的莫希根悬崖。";
        this[1][9] = "球球和妈妈在布洛克岛东南的莫希根悬崖。";
        this[1][10] = "布洛克岛东南的莫希根悬崖。";
        this[1][11] = "乘坐布洛克岛渡轮。";
        this[1][12] = "球球在纽波特的悬崖步道。";
        this[1][13] = "纽波特的悬崖步道。";
        this[1][14] = "球球和妈妈在纽波特的悬崖步道。";
        this[1][15] = "球球和妈妈在朱迪思角观赏银河。";
        this[1][16] = "银河。";
    }else{
        this[1][0] = "Nathan and Mom visiting the Block Island.";
        this[1][1] = "Nathan and Mom visiting the Block Island.";
        this[1][2] = "Nathan and Mom visiting the Block Island.";
        this[1][3] = "Nathan and Mom visiting the Block Island Southeast Lighthouse.";
        this[1][4] = "Nathan doing a cartwheel at the Block Island Southeast Lighthouse.";
        this[1][5] = "Nathan doing a handstand at the Block Island Southeast Lighthouse.";
        this[1][6] = "The Mohegan Bluffs on the Block Island.";
        this[1][7] = "Nathan and Mom at the Mohegan Bluffs on the Block Island.";
        this[1][8] = "Nathan and Mom at the Mohegan Bluffs on the Block Island.";
        this[1][9] = "Nathan and Mom at the Mohegan Bluffs on the Block Island.";
        this[1][10] = "The Mohegan Bluffs on the Block Island.";
        this[1][11] = "Nathan on the Block Island Ferry.";
        this[1][12] = "Nathan at the Newport Cliff Walk.";
        this[1][13] = "The Newport Cliff Walk.";
        this[1][14] = "Nathan and Mom at the Newport Cliff Walk.";
        this[1][15] = "Watching the Milky Way from Point Judith.";
        this[1][16] = "The Milky Way from Point Judith.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
