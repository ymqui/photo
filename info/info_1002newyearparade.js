<!--
//Created by Album Builder Program Mon Feb 22 22:38:31 2010
var info_url   = "";
var title      = "DC Chinese New Year Parade";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1002newyearparade/";
//var dir        = csdpdir+"pics/1002newyearparade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HappyDays.mid";
var midi_cr    = new Array("Ross Menoher","	http://www2.spindle.net/rmenoher/midi.htm");
 
if(window.usechinese){
    title      = "华盛顿唐人街新年游行";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1002newyearparade_"+(i+1).toString();
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
