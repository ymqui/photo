<!--
//Created by Album Builder Program Sat Jun 05 22:20:39 2010
var info_url   = "";
var title      = "2010 University of Maryland Commencement";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1005commencement/";
//var dir        = csdpdir+"pics/1005commencement/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ForTheFirstTime.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "小韵的博士毕业典礼";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<23;i++){
        this[0][i] = "1005commencement_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小米一早就出来玩。";
        this[1][1] = "小米在等妈妈出场。";
        this[1][2] = "小韵入场。";
        this[1][4] = "小韵在台上。";
        this[1][5] = "导师给小韵戴上博士服的兜帽。";
        this[1][8] = "小米给妈妈喝彩。";
        this[1][11] = "和导师合影。";
        this[1][12] = "刘博士。";
        this[1][13] = "小韵和开心的妈妈。";
    }else{
        this[1][0] = "Xiaomi at the playground.";
        this[1][1] = "Waiting in the Comcast center.";
        this[1][5] = "Yun's hooding ceremony.";
        this[1][11] = "With professors.";
        this[1][12] = "Dr. Liu.";
        this[1][13] = "Yun and mom.";
        this[1][18] = "With friends.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
