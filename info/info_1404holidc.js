<!--
//Created by Album Builder Program Sun Apr 06 19:54:03 2014
var info_url   = "http://holidc.com/";
var title      = "2014 Holi DC";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1404holidc/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BackforGood.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "2014年华盛顿印度霍利节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "1404holidc_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "霍利节是印度的传统节日，相当于中国的春节，节日期间，人们用各种颜色的粉泼撒对方，代表了好运，和祝福。";
        this[1][1] = "霍利节是印度的传统节日，相当于中国的春节，节日期间，人们用各种颜色的粉泼撒对方，代表了好运，和祝福。";
    }else{
        this[1][0] = "Holi is the Hindu spring festival, also known as the festival of colors.";
        this[1][1] = "Holi is the Hindu spring festival, also known as the festival of colors.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
