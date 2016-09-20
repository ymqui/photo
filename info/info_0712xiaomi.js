<!--
//Created by Album Builder Program Thu Feb 28 22:16:24 2008
var info_url   = "";
var title      = "Xiaomi in Xiamen";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0712xiaomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Flipper.mid";
var midi_cr    = new Array("Kid MIDI","http://www.wilstar.com/kidmidi.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "小米在厦门";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "0712xiaomi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小米在厦门和姥姥一起。";
        this[1][8] = "小米可爱看书了。";
    }else{
        this[1][0] = "Xiaomi with Grandma in Xiamen.";
        this[1][8] = "Xiaomi can read now.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
