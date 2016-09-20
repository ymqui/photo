<!--
//Created by Album Builder Program Sat Feb 23 11:36:51 2008
var info_url   = "";
var title      = "864 Classmates Reunion";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0712864classmates/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "8thAvenue.mid";
var midi_cr    = new Array("The Melodious MIDI","http://www.fortunecity.com/tinpan/lennon/351/index.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "高中同学相聚";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "0712864classmates_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
    }else{
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
