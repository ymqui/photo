<!--
//Created by Album Builder Program Sun Apr 14 08:39:11 2013
var info_url   = "http://tokiunderground.com";
var title      = "Toki Underground";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1304tokiunderground/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BigGirlsDontCry.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Toki Underground日式面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1304tokiunderground_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "饭店下午5点开门，总是得排长队。";
        this[1][2] = "饭店很小，只有27个位子。";
        this[1][4] = "台湾冷豆腐，酱很不错。";
        this[1][5] = "饭店的招牌面，汤不错，面太少。";
        this[1][7] = "辣泡菜面，还真有点辣。";
    }else{
        this[1][0] = "The restaurant opens at 5:00pm, and there's always a long line.";
        this[1][2] = "Toki Underground is quite small, with only 27 seats.";
        this[1][4] = "Taiwanese style cold tofu. The sauce is very tasty.";
        this[1][5] = "Toki classic ramen. Not bad.";
        this[1][7] = "Spicy kimchi ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
