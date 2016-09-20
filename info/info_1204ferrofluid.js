<!--
//Created by Album Builder Program Sat Apr 21 14:39:03 2012
var info_url   = "http://en.wikipedia.org/wiki/Ferrofluid";
var title      = "Ferrofluid";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1204ferrofluid/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Halo.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "铁磁流体";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
    info_url   = "http://baike.baidu.com/view/1199789.htm";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<8;i++){
        this[0][i] = "1204ferrofluid_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "铁磁流体在磁场下的奇妙造型。";
    }else{
        this[1][0] = "Ferrofluid with a magnet underneath.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
