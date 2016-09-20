<!--
//Created by Album Builder Program Sun Oct 14 21:08:33 2007
var info_url   = "http://www.buddscreek.com/";
var title      = "Motocross Maryland State Championship at Budds Creek";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0710motocross/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Words.mid";
var midi_cr    = new Array("It'sCool Midi","http://home.maine.rr.com/i/t/itscool/eln/");
 
if(window.usechinese){
    title      = "马里兰州摩托越野锦标赛";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<32;i++){
        this[0][i] = "0710motocross_"+(i+1).toString();
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
