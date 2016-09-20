<!--
//Created by Album Builder Program Fri Jan 26 21:03:16 2007
var info_url   = "http://www.washingtonautoshow.com/";
var title      = "Ladies in 2007 Washington Auto Show";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0701autoladies/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Mendelssohn_op62_5.mid";
var midi_cr    = new Array("Classical Piano Midi","http://www.piano-midi.de/");
 
if(window.usechinese){
    title      = "2007华盛顿车展上的美女";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<35;i++){
        this[0][i] = "0701autoladies_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][27] = "华盛顿Redskins橄榄球队的啦啦队员。";
    }else{
        this[1][27] = "Washington Redskins Cheerleaders.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
