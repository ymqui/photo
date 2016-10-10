<!--
//Created by Album Builder Program Mon Oct 10 13:22:51 2016
var info_url   = "http://okibowldc.com/home/";
var title      = "Oki Bowl DC";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1607okibowl/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Oki Bowl餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1607okibowl_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "炸章鱼腿。";
        this[1][2] = "冬荫拉面。";
        this[1][3] = "味增拉面。";
    }else{
        this[1][1] = "Fried octopus leg.";
        this[1][2] = "Tomyum ramen.";
        this[1][3] = "Miso ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
