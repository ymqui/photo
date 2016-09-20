<!--
//Created by Album Builder Program Thu Jan 03 20:44:44 2013
var info_url   = "http://www.nps.gov/brca/";
var title      = "Bryce Canyon";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1212brycecanyon/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WhiteHorse_TS.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "布赖斯峡谷";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "1212brycecanyon_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][9] = "离布赖斯峡谷不远的红谷。";
    }else{
        this[1][9] = "Red canyon nearby.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
