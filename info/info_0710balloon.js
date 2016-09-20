<!--
//Created by Album Builder Program Sat Oct 20 21:25:57 2007
var info_url   = "http://www.historiclongbranch.com/balloonfest/";
var title      = "Shenandoah Valley Hot Air Balloon Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0710balloon/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "InThisLife.mid";
var midi_cr    = new Array("Tammy","http://www.luvscreations.com/midi.htm");
 
if(window.usechinese){
    title      = "仙南兜山谷热气球节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "0710balloon_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "仙南兜的日出。";
        this[1][1] = "热气球节在长枝农场举行。";
        this[1][2] = "晨雾里的农场。";
        this[1][3] = "农场里只飞了两个热气球，这是其中一个。";
        this[1][8] = "其它的气球都绑在地上。";
    }else{
        this[1][0] = "Sunrise over the Shenandoah moutains.";
        this[1][1] = "The balloon festival is held at the Historic Long Branch farm.";
        this[1][2] = "Early morning fog.";
        this[1][3] = "One of two balloons launched from the farm this morning.";
        this[1][8] = "The rest of the balloons are tethered to the ground.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
