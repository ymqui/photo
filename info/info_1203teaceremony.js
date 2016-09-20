<!--
//Created by Album Builder Program Tue Mar 20 22:01:04 2012
var info_url   = "http://tankokaidc.org/";
var title      = "Tea Ceremony";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1203teaceremony/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "YouTakeMyBreathAway.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "日本茶道";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<21;i++){
        this[0][i] = "1203teaceremony_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "插花";
        this[1][2] = "主人向客人鞠躬";
        this[1][3] = "给客人端上甜点";
        this[1][4] = "主人准备茶";
        this[1][9] = "客人品茶";
        this[1][13] = "主人收尾";
        this[1][15] = "再次向客人鞠躬";
        this[1][16] = "客人欣赏书法";
        this[1][18] = "甜点";
        this[1][20] = "茶是由茶末加热水拌出来的";
    }else{
        this[1][0] = "A flower display in the alcove.";
        this[1][2] = "The hosts bow to the guests.";
        this[1][3] = "The host brings sweets to the guest.";
        this[1][4] = "The host prepares a bowl of tea.";
        this[1][9] = "The guest tastes the tea.";
        this[1][13] = "The host is finishing up the ceremony.";
        this[1][15] = "A final bow to the guests.";
        this[1][16] = "The guests are appreciating the hanging scrolls.";
        this[1][18] = "Sweets.";
        this[1][20] = "The tea is made from Matcha tea powder.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
