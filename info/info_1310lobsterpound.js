<!--
//Created by Album Builder Program Mon Oct 07 21:18:32 2013
var info_url   = "http://youngslobsterpound.webs.com/";
var title      = "Young's Lobster Pound";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1310lobsterpound/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "NotAGirlNotYetAWoman.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "杨氏龙虾馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1310lobsterpound_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "杨氏龙虾馆在缅因的贝尔法斯特镇外。";
        this[1][1] = "又一船刚捕到的龙虾运到。";
        this[1][4] = "当地龙虾馆的特色是用海水来煮龙虾。";
    }else{
        this[1][0] = "Young's lobster pound at Belfast, Maine.";
        this[1][1] = "A shipment of new catch has arrived.";
        this[1][4] = "The lobsters are boiled in sea water.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
