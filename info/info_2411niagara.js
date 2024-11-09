<!--
//Created by Album Builder Program Fri Nov 08 19:39:06 2024
var info_url   = "https://en.wikipedia.org/wiki/Niagara_Falls";
var title      = "Niagara Falls";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2411niagara/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "尼亚加拉瀑布";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
    info_url   = "https://baike.baidu.com/item/%E5%B0%BC%E4%BA%9A%E5%8A%A0%E6%8B%89%E7%80%91%E5%B8%83";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "2411niagara_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "乘坐雾中少女号游船游览尼亚加拉大瀑布。";
        this[1][1] = "乘坐雾中少女号游船游览尼亚加拉大瀑布。";
        this[1][2] = "美国瀑布。";
        this[1][3] = "被瀑布的水溅得满身都是。";
        this[1][4] = "美国瀑布。";
        this[1][5] = "马蹄瀑布。";
        this[1][6] = "尼亚加拉河上的彩虹。";
        this[1][7] = "球球和妈妈在美国瀑布前。";
        this[1][8] = "尼亚加拉大瀑布。";
        this[1][9] = "尼亚加拉大瀑布。";
        this[1][10] = "球球在马蹄瀑布前做侧手翻。";
        this[1][11] = "横跨美国和加拿大两国的马蹄瀑布。";
    }else{
        this[1][0] = "Taking a boat tour of the Niagara Falls on the Maid of the Mist.";
        this[1][1] = "Taking a boat tour of the Niagara Falls on the Maid of the Mist.";
        this[1][2] = "The American Falls.";
        this[1][3] = "Getting splashed by water from the Falls.";
        this[1][4] = "The American Falls.";
        this[1][5] = "The Horseshoe Falls.";
        this[1][6] = "A rainbow over the Niagara River.";
        this[1][7] = "Nathan and Mom in front of the American Falls.";
        this[1][8] = "The Niagara Falls.";
        this[1][9] = "The Niagara Falls.";
        this[1][10] = "Nathan doing a cartwheel in front of the Horseshoe Falls.";
        this[1][11] = "The Horseshoe Falls.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
