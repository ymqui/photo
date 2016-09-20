<!--
//Created by Album Builder Program Sat Feb 23 11:58:57 2008
var info_url   = "http://www.kennedy-center.org/programs/millennium/artist_detail.cfm?artist_id=HARAJUKU";
var title      = "Harajuku Evening";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0802harajuku/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "InTheAirTonight.mid";
var midi_cr    = new Array("High Quality Midi Collection","http://www.sternton.com/midi/");
 
if(window.usechinese){
    title      = "原宿之夜";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "0802harajuku_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "日本东京原宿车站附近一带的原宿区域，是青少年另类服装时尚的发源地。";
    }else{
        this[1][0] = "Harajuku is the area around Harajuku Station on the Yamanote Line in Tokyo, Japan.";
        this[1][1] = "This area is known internationally for its youth style and fashion.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
