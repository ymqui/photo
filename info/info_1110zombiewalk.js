<!--
//Created by Album Builder Program Mon Oct 24 22:22:58 2011
var info_url   = "http://www.silverspringzombiewalk.com/";
var title      = "Zombie Walk";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1110zombiewalk/";
//var dir        = csdpdir+"pics/1110zombiewalk/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Halloween.wav";
var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "僵尸上街";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<33;i++){
        this[0][i] = "1110zombiewalk_"+(i+1).toString();
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
