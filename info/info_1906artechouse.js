<!--
//Created by Album Builder Program Sun Jun 30 06:15:18 2019
var info_url   = "https://www.dc.artechouse.com/infinite-space";
var title      = "Infinite Space at Artechouse";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1906artechouse/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "在Artechouse参观名为无限空间的展览";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<25;i++){
        this[0][i] = "1906artechouse_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "去华盛顿的Artechouse参观艺术家Refik Anadol的名为无限空间的展览。";
        this[1][1] = "展览通过数字绘画和数据雕塑探索人的记忆和梦想。";
        this[1][2] = "球球对墙上的画面很感兴趣。";
        this[1][9] = "海浪的数字模型。";
        this[1][16] = "六面反光的无限室。";
    }else{
        this[1][0] = "Visiting DC's Artechouse for the Infinite Space Exhibition by artist Refik Anadol.";
        this[1][1] = "The exhibition explores memories and dreams through the digital painting and data sculpture.";
        this[1][2] = "Nathan is fascinated by the imagery.";
        this[1][9] = "Digital model of sea waves.";
        this[1][16] = "At the Infinity Room.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
