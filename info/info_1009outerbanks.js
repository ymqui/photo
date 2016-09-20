<!--
//Created by Album Builder Program Mon Sep 06 11:38:15 2010
var info_url   = "";
var title      = "Outer Banks of North Carilina";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1009outerbanks/";
//var dir        = csdpdir+"pics/1009outerbanks/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ByTtheSea.mid";
var midi_cr    = new Array("Tammy","http://www.luvscreations.com/midi.htm");
 
if(window.usechinese){
    title      = "北卡罗来纳州外滩";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1009outerbanks_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][3] = "日出。";
        this[1][4] = "Hatteras海角灯塔。";
        this[1][5] = "Ocracoke灯塔。";
        this[1][6] = "轮渡。";
    }else{
        this[1][3] = "Sunrise.";
        this[1][4] = "Cape Hatteras Lighthouse.";
        this[1][5] = "Ocracoke Lighthouse.";
        this[1][6] = "Ferry.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
