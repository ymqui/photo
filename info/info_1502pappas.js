<!--
//Created by Album Builder Program Mon Feb 16 14:28:00 2015
var info_url   = "http://www.pappasparkville.com/";
var title      = "Pappas Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1502pappas/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "EveningFalls.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "帕帕斯海鲜餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1502pappas_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "帕帕斯海鲜餐馆的蟹肉糕是巴尔的摩一带数一数二的。";
        this[1][1] = "烤海鲜。";
        this[1][2] = "双蟹肉糕。";
    }else{
        this[1][0] = "Pappas restaurant serves one of the best crab cakes in Baltimore.";
        this[1][1] = "Broiled seafood platter.";
        this[1][2] = "Double crab cakes.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
