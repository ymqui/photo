<!--
//Created by Album Builder Program Wed Dec 13 22:22:24 2006
var info_url   = "";
var title      = "Holiday Lights";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0612lights/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DogJingleBells.wav";
//var midi_file  = "JingleBells.mid";
//var midi_cr    = new Array("CMIDI","http://www.cmidi.com/");
 
if(window.usechinese){
    title      = "节日彩灯";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<34;i++){
        this[0][i] = "0612lights_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "波多马各河上的彩灯船游行。";
        this[1][5] = "国会前的圣诞树。";
        this[1][8] = "华盛顿植物馆前的小模型火车。";
        this[1][9] = "白宫前的圣诞树。";
        this[1][12] = "海湾边的彩灯展。";
        this[1][18] = "巴尔的摩第34街。";
        this[1][32] = "巴尔的摩市的华盛顿纪念碑。";
        this[1][33] = "圣诞快乐！";
    }else{
        this[1][0] = "Alexandria Marina Boat Parade.";
        this[1][5] = "Capitol Christmas Tree.";
        this[1][8] = "Model Train in front of the Botany Garden.";
        this[1][9] = "The National Christmas Tree in front of the White House.";
        this[1][12] = "Lights on the Bay in Sandy Point State Park.";
        this[1][18] = "The 34th Street in Baltimore.";
        this[1][32] = "The Washington Monument in Baltimore.";
        this[1][33] = "Merry Christmas!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
