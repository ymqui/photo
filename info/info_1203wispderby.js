<!--
//Created by Album Builder Program Tue Mar 20 21:32:46 2012
var info_url   = "http://www.wispresort.com/";
var title      = "Cardboard Box Derby";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1203wispderby/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Firework.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "硬纸板箱滑雪赛";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "1203wispderby_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "参赛者排队等候比赛开始。";
        this[1][2] = "搭输送带上坡。";
        this[1][11] = '"爸，快来推一下！"';
        this[1][29] = "事故导致七人受伤。";
    }else{
        this[1][0] = "Participants waiting for the start of the derby.";
        this[1][2] = "Taking the conveyor belt to the top of the slope.";
        this[1][11] = '"Dad, I need a push!"';
        this[1][29] = "This accident results in seven injuries.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
