<!--
//Created by Album Builder Program Sun Nov 02 06:32:44 2025
var info_url   = "";
var title      = "Trick-or-treating";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2510tot/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "万圣节讨糖";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "2510tot_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "球球和朋友Bella与妈妈一起出门去要糖。";
        this[1][14] = "清点万圣节糖果。";
        this[1][15] = '喝“蓝色女巫汤”。';
        this[1][16] = '喝“蓝色女巫汤”。';
        this[1][17] = "玩相机。";
    }else{
        this[1][0] = "Nathan and Bella setting out for trick-or-treating with parents.";
        this[1][14] = "Sorting Halloween candy.";
        this[1][15] = 'Drinking "blue soup".';
        this[1][16] = 'Drinking "blue soup".';
        this[1][17] = "Having fun with the camera.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
