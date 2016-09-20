<!--
//Created by Album Builder Program Sun May 08 21:23:52 2011
var info_url   = "http://www.kineticbaltimore.com/";
var title      = "2011 Baltimore Kinetic Sculpture Race";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1105bksr/";
//var dir        = csdpdir+"pics/1105bksr/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WildHorses.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "巴尔的摩人力雕塑赛车";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "1105bksr_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "爬坡。";
        this[1][6] = "下水。";
        this[1][15] = "过沙坑。";
        this[1][20] = "穿泥潭。";
    }else{
        this[1][0] = "Racing up the Battery Avenue.";
        this[1][6] = "Surviving the Canton waterfront water loop.";
        this[1][15] = "Crossing the sand pit in Patterson park.";
        this[1][20] = "The mud pit challenge in Patterson Park.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
