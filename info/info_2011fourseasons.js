<!--
//Created by Album Builder Program Sun Oct 30 22:01:47 2011
var info_url   = "";
var title      = "Four Seasons";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/2011fourseasons/";
//var dir        = csdpdir+"pics/2011fourseasons/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BackToDecember.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "四季";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "2011fourseasons_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "春。";
        this[1][1] = "夏。";
        this[1][2] = "秋。";
        this[1][3] = "冬。";
    }else{
        this[1][0] = "Spring.";
        this[1][1] = "Summer.";
        this[1][2] = "Autumn.";
        this[1][3] = "Winter.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
