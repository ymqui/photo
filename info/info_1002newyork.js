<!--
//Created by Album Builder Program Fri Feb 19 22:52:08 2010
var info_url   = "";
var title      = "Photos taken at New York";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1002newyork/";
//var dir        = csdpdir+"pics/1002newyork/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "OdeToMyFamily.mid";
var midi_cr    = new Array("Kel's Midi Page","http://members.tripod.com/~ellisbell/midi.html");
 
if(window.usechinese){
    title      = "在纽约拍的照片";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1002newyork_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "大都会博物馆。";
        this[1][2] = "纽约街头。";
        this[1][3] = "时代广场。";
        this[1][5] = "地铁入口。";
    }else{
        this[1][0] = "The Mettropolitan Museum.";
        this[1][2] = "New York street.";
        this[1][3] = "Times Square";
        this[1][5] = "Subway entrance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
