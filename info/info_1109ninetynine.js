<!--
//Created by Album Builder Program Tue Sep 06 22:07:45 2011
var info_url   = "http://www.99restaurants.com/";
var title      = "Ninety Nine Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1109ninetynine/";
//var dir        = csdpdir+"pics/1109ninetynine/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Mine.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "九十九餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1109ninetynine_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "免费的爆玉米花。";
        this[1][2] = "辣鸡翅和土豆皮，土豆皮上放了培根，很好吃。";
        this[1][3] = "烤鳕鱼和意大利面。";
        this[1][4] = "烤牛腰肉和虾串。";
    }else{
        this[1][1] = "The restaurant offers free popcorn.";
        this[1][2] = "Boneless Buffalo wings & potato skins sampler.";
        this[1][3] = "Panko crusted cod & linguini.";
        this[1][4] = "Top sirloin steak & shrimp skewer.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
