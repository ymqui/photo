<!--
//Created by Album Builder Program Thu Feb 18 23:30:05 2010
var info_url   = "http://en.wikipedia.org/wiki/First_North_American_blizzard_of_2010";
var title      = "Blizzard of 2010";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1002snow/";
//var dir        = csdpdir+"pics/1002snow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ItsAllComingBackToMeNow.mid";
var midi_cr    = new Array("Jerry","	http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "2010年的暴风雪";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "1002snow_"+(i+1).toString();
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
