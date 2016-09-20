<!--
//Created by Album Builder Program Mon Sep 03 22:46:47 2007
var info_url   = "http://www.gaithersburgmd.gov/poi/default.asp?POI_ID=773&TOC=107;84;99;773";
var title      = "Gaithersburg Labor Day Parade";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0709laborday/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "KissTheRain.mid";
var midi_cr    = new Array("Midi Mix","http://www.sternton.com/midi/midimix/");
 
if(window.usechinese){
    title      = "盖堡劳动节游行";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "0709laborday_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "美国的劳动节是九月的第一个星期一。";
        this[1][2] = "国会议员Chris Van Hollen。";
        this[1][6] = "小孩围抢糖果。";
        this[1][7] = "小丑分发糖果。";
    }else{
        this[1][2] = "U.S. congressman Chris Van Hollen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
