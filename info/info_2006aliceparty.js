<!--
//Created by Album Builder Program Tue Jun 06 22:42:11 2006
var info_url   = "";
var title      = "Alice's 2006 Birthday Party";
var cam_img    = "camera_olympus_d490z.jpg";
var cam_tit    = "Olympus D490Z, 2.11 Mega Pixels.";
var dir        = maindir+"pics/2006aliceparty/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Dreaming.mid";
var midi_cr    = new Array("Midis for Kids","http://www.geocities.com/EnchantedForest/Dell/9501/KidsMidi2.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "Alice的生日晚会";
    cam_tit    = "奥林普斯D490Z相机，211万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<32;i++){
        this[0][i] = "2006aliceparty_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
    }else{
    }
}
 
//web counter info
//var sc_project   = 613905;
//var sc_invisible = 1;
//var sc_partition = 3;
//var sc_security  = "f5cfdd4f";
//-->
