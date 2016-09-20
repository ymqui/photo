<!--
//Created by Album Builder Program Fri Sep 12 19:45:05 2008
var info_url   = "http://jialubaby.spaces.live.com/";
var title      = "Xiaomi at 2008 MCBSG Party";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0809xiaomi/";
//var dir        = csdpdir+"pics/0809xiaomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Longer.mid";
var midi_cr    = new Array("Kel's Midi Page","http://members.tripod.com/~ellisbell/midi.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "2008迎新晚会上的小米";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "0809xiaomi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小米现在有一岁九个月大了。";
        this[1][1] = "小米和爸爸妈妈：爸爸手里的桔子，妈妈端着的饭都是给小米吃的。";
    }else{
        this[1][0] = "Xiaomi is one year and nine months old now.";
        this[1][1] = "Xiaomi and parents.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
