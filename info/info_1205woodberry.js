<!--
//Created by Album Builder Program Sun May 20 20:23:28 2012
var info_url   = "http://www.woodberrykitchen.com/";
var title      = "Woodberry Kitchen";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1205woodberry/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Predictable.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "木莓厨房";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "1205woodberry_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][2] = "生蚝。";
        this[1][4] = "油炸猪皮。";
        this[1][5] = "蟹肉和奶酪做的螃蟹锅。";
        this[1][6] = "牛肉鸡蛋面。";
        this[1][7] = "北卡杆钓的鯕鳅鱼。";
        this[1][8] = "小牛排。又嫩又有味道。";
        this[1][9] = "脆皮面草莓派。";
        this[1][10] = "大黄冰激凌。";
    }else{
        this[1][2] = "Oysters.";
        this[1][3] = "Deviled egg.";
        this[1][4] = "Pork crackins.";
        this[1][5] = "Tilghman island crab pot.";
        this[1][6] = "Liberty delight beef & egg noodles.";
        this[1][7] = "Wanchese NC rod & reel mahi-mahi.";
        this[1][8] = "St. Brigid's veal tavern steak.";
        this[1][9] = "Strawberries cobbler.";
        this[1][10] = "Rhubarb sorbet.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
