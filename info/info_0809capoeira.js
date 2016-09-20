<!--
//Created by Album Builder Program Sun Sep 21 20:40:48 2008
var info_url   = "http://en.wikipedia.org/wiki/Capoeira";
var title      = "Capoeira";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0809capoeira/";
//var dir        = csdpdir+"pics/0809capoeira/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Africa.mid";
var midi_cr    = new Array("Kel's Midi Page","http://members.tripod.com/~ellisbell/midi.html");
 
if(window.usechinese){
    title      = "巴西拳舞-卡波耶拉";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
    info_url   = "http://zh.wikipedia.org/wiki/%E5%8D%A1%E6%B3%A2%E8%80%B6%E6%8B%89";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0809capoeira_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "卡波耶拉是巴西一种集武术和舞蹈为一体的独特的文化形式。";
    }else{
        this[1][0] = "Capoeira is a unique Brazilian folk art that combines elements from martial arts, games, and dances.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
