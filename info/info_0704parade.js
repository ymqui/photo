<!--
//Created by Album Builder Program Mon Apr 16 20:28:34 2007
var info_url   = "http://www.nationalcherryblossomfestival.org/";
var title      = "2007 Cherry Blossom Festival Parade";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0704parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AFineRomance.mid";
var midi_cr    = new Array("Rose","http://rosemck1.tripod.com/jukebox-nostalgia.html");
 
if(window.usechinese){
    title      = "2007年樱花节游行";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<28;i++){
        this[0][i] = "0704parade_"+(i+1).toString();
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
