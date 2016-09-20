<!--
//Created by Album Builder Program Thu Dec 31 12:44:33 2009
var info_url   = "";
var title      = "Record Snowfall";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0912snow/";
//var dir        = csdpdir+"pics/0912snow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HollyAndIvy.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "大雪";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<2;i++){
        this[0][i] = "0912snow_"+(i+1).toString();
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
