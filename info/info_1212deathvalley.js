﻿<!--
//Created by Album Builder Program Thu Jan 03 21:09:35 2013
var info_url   = "http://www.nps.gov/deva/";
var title      = "Death Valley";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1212deathvalley/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Sailing.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "死谷";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1212deathvalley_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "但丁观景点。";
        this[1][2] = "扎布里斯基角。";
        this[1][3] = "盐滩。";
    }else{
        this[1][0] = "Death valley seen from Dante's view.";
        this[1][2] = "Zabriskie point.";
        this[1][3] = "Badwater salt flat.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
