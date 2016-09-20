<!--
//Created by Album Builder Program Sat Apr 14 20:28:17 2012
var info_url   = "http://www.nationalcherryblossomfestival.org/";
var title      = "Cherry Blossom Festival Parade";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1204parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Hello.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "樱花节游行";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<8;i++){
        this[0][i] = "1204parade_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][2] = "嗨。";
    }else{
        this[1][2] = "Hi.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
