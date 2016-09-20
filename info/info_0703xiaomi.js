<!--
//Created by Album Builder Program Sat Mar 17 22:57:13 2007
var info_url   = "";
var title      = "One hundred days old Xiaomi";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0703xiaomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "InnocentEvasion.mid";
var midi_cr    = new Array("Midi All The Best","http://midiallthebest.50webs.com/");
var blocksave  = false;
 
if(window.usechinese){
    title      = "一百天大的小米";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "0703xiaomi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "百日大的小米和奶奶在一起。";
        this[1][2] = "小米和妈妈。";
        this[1][3] = "小米现在很会认人了。";
        this[1][4] = "小米还不会坐，得靠着垫子。";
    }else{
        this[1][0] = "Xiaomi with Grandma. The balloon is for her 100th day celebration.";
        this[1][2] = "Xiaomi with Mom.";
        this[1][3] = "Xiaomi can recognize people very well now.";
        this[1][4] = "She still can't sit by herself.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
