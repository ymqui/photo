﻿<!--
//Created by Album Builder Program Tue May 24 21:36:46 2011
var info_url   = "http://www.skewers-cafeluna.com/";
var title      = "Cafe Luna in Washington DC";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1105cafeluna/";
//var dir        = csdpdir+"pics/1105cafeluna/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ClairDeLune.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "华盛顿的Cafe Luna餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<3;i++){
        this[0][i] = "1105cafeluna_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "烤牛排。";
        this[1][2] = "海鲜意大利粉。";
    }else{
        this[1][1] = "Grilled New York Strip Steak.";
        this[1][2] = "Shrimp & Scallops with Pasta.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
