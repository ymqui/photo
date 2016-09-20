<!--
//Created by Album Builder Program Tue Dec 12 20:06:00 2006
var info_url   = "http://www.aqua.org/";
var title      = "National Aquarium in Baltimore";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0612aquarium/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SwearItAgain.mid";
var midi_cr    = new Array("Sean's MIDI Archive","http://marge.uvm.edu/sdempse/midi/alternative.asp");
 
if(window.usechinese){
    title      = "巴尔的摩市的国家水族馆";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<35;i++){
        this[0][i] = "0612aquarium_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][5] = "有毒的蛙。";
        this[1][16] = "澳大利亚的有摺蜥蜴。";
        this[1][22] = "小丑鱼。";
        this[1][23] = "蝴蝶鱼。";
        this[1][29] = "红鹮。";
        this[1][32] = "鳐。";
    }else{
        this[1][5] = "Blue dart poison frog.";
        this[1][16] = "Frilled lizard from Australia.";
        this[1][22] = "Clownfish.";
        this[1][23] = "Butterfly fish.";
        this[1][24] = "Banggai cardinal fish.";
        this[1][29] = "Scarlet ibis.";
        this[1][32] = "Sting ray.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
