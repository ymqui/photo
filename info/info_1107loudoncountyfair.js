<!--
//Created by Album Builder Program Thu Aug 04 21:24:58 2011
var info_url   = "http://loudouncountyfair.com/";
var title      = "Loundon County Fair";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1107loudoncountyfair/";
//var dir        = csdpdir+"pics/1107loudoncountyfair/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HeartOfGlass.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "劳登郡农牧会";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<15;i++){
        this[0][i] = "1107loudoncountyfair_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
    }else{
        this[1][0] = "Beef muscical cone contest.";
        this[1][2] = "Sunset before the rodeo show.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
