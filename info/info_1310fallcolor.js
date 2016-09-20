<!--
//Created by Album Builder Program Fri Nov 01 22:57:37 2013
var info_url   = "";
var title      = "Fall Colors";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1310fallcolor/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "NobodyKnows.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "秋色";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1310fallcolor_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "佛蒙特州猪背山。";
        this[1][1] = "仙南道尔国家公园日出。";
        this[1][2] = "维吉尼亚州的仙南道尔国家公园。";
        this[1][7] = "波托马克河日落。";
    }else{
        this[1][0] = "Hogback mountain in Vermont.";
        this[1][1] = "Sunrise over Shenandoah National Park.";
        this[1][2] = "Shenandoah National Park in Virginia.";
        this[1][7] = "Sunset over Potomac river.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
