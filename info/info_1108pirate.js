<!--
//Created by Album Builder Program Sun Aug 14 15:27:57 2011
var info_url   = "http://www.rockhallpirates.com/";
var title      = "Rock Hall's Pirate Fantasy Weekend";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1108pirate/";
//var dir        = csdpdir+"pics/1108pirate/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "RollingInTheDeep.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "海盗节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "1108pirate_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "镇上很多房子前都摆了海盗装饰。";
        this[1][2] = "许多游客也穿了海盗装。";
        this[1][4] = "海盗船在港口集合。";
        this[1][5] = "水枪大战。";
        this[1][10] = "海盗船抢滩。";
    }else{
        this[1][0] = "The front yard of a house is decorated with a pirate skeleton.";
        this[1][1] = "More pirate themed display.";
        this[1][2] = "Visitors are encouraged to don pirate costumes.";
        this[1][4] = "Pirate dinghys gather at the harbor.";
        this[1][5] = "Water gun fight.";
        this[1][10] = "Dinghy race to the beach.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
