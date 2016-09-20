<!--
//Created by Album Builder Program Thu Sep 20 08:51:23 2007
var info_url   = "http://picasaweb.google.com/ppigworm/";
var title      = "Tzuching and Chungen's Wedding";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0709wedding/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IBelieve.mid";
var midi_cr    = new Array("hingsang.net","http://www.hingsang.net/midi/believe.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "崇恩和子靖的婚礼";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<81;i++){
        this[0][i] = "0709wedding_"+(i+1).toString();
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
