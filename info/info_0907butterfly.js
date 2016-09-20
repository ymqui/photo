<!--
//Created by Album Builder Program Sun Jul 19 22:29:31 2009
var info_url   = "http://www.montgomeryparks.org/brookside/";
var title      = "Butterflies in Brookside Garden";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0907butterfly/";
//var dir        = csdpdir+"pics/0907butterfly/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ChancesAre.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "Brookside花园赏蝴蝶";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "0907butterfly_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "每年夏天，Brookside花园都举办题为“幻想的翅膀”的蝴蝶展。";
    }else{
        this[1][0] = "These butterflies are part of the "+'"Wings of Fancy"'+" butterfly exhibit in Brookside Garden.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
