<!--
//Created by Album Builder Program Wed Aug 08 21:52:16 2007
var info_url   = "http://www.ballyshaners.org/";
var title      = "Alexandria Irish Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0708irishfestival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Tammy.mid";
var midi_cr    = new Array("Ross Menoher","http://www2.spindle.net/rmenoher/midi.htm");
 
if(window.usechinese){
    title      = "亚历山大市爱尔兰节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "0708irishfestival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "放在花园里的小矮人。";
        this[1][4] = "我的午餐-热狗。";
        this[1][6] = "刨冰。";
    }else{
        this[1][0] = "A garden gnome.";
        this[1][5] = "Shaved ice stand.";
        this[1][10] = "Alexandria's pipe and drum band.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
