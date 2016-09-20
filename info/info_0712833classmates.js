<!--
//Created by Album Builder Program Wed Feb 20 20:32:02 2008
var info_url   = "";
var title      = "833 Classmates Reunion";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0712833classmates/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "OneMoment.mid";
var midi_cr    = new Array("Tammy","http://www.luvscreations.com/midi.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "初中同学聚会";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0712833classmates_"+(i+1).toString();
        this[1][i] = "";
    }
    for (var i=22;i<36;i++){
        this[0][i] = "0712833classmates_"+(i+2).toString();
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
