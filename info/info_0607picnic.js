<!--
//Created by Album Builder Program Tue Jul 11 22:39:44 2006
var info_url   = "";
var title      = "Picnic at Lakeside North";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0607picnic/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Feelings.mid";
var midi_cr    = new Array("Midi All The Best","http://midiallthebest.50webs.com/");
var blocksave  = false;
 
if(window.usechinese){
    title      = "告别野餐";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0607picnic_"+(i+1).toString();
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
