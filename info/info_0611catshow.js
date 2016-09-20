<!--
//Created by Album Builder Program Sat Nov 11 20:30:18 2006
var info_url   = "http://www.cfainc.org/exhibitors/show-schedule.html";
var title      = "Capital Cat Fancier Show";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0611catshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WeBelongToTheNight.mid";
var midi_cr    = new Array("Moonfairye","http://www.moonfairye.com/midicollection/midi2.htm");
 
if(window.usechinese){
    title      = "猫展";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<33;i++){
        this[0][i] = "0611catshow_"+(i+1).toString();
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
