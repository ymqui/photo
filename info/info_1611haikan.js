<!--
//Created by Album Builder Program Wed Mar 15 19:59:07 2017
var info_url   = "http://www.haikandc.com/";
var title      = "Haikan Ramen";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1611haikan/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Haikan面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1611haikan_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "华盛顿的Haikan面馆，大锅屋面馆和鸡王拉面馆都是由同一个老板开的。";
        this[1][1] = "炸蟹角。";
        this[1][2] = "咸汤拉面。";
        this[1][3] = "咸汤拉面。";
        this[1][4] = "酱汤拉面。";
    }else{
        this[1][0] = "Haikan is the sister restaurant to Daikaya and Bantam King in DC.";
        this[1][1] = "Crab rangoon.";
        this[1][2] = "Shio ramen.";
        this[1][3] = "Shio ramen.";
        this[1][4] = "Shoyu ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
