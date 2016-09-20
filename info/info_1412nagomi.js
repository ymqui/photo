<!--
//Created by Album Builder Program Sat Dec 20 21:53:36 2014
var info_url   = "http://www.nagomidc.com/";
var title      = "Nagomi Izakaya";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1412nagomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CaptainOfHerHeart.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "和居酒屋";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1412nagomi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "三文鱼生鱼片。";
        this[1][1] = "油炸虾烧卖。";
        this[1][2] = "洋葱炒猪肉。";
        this[1][3] = "盐味拉面，味道很不错。";
        this[1][5] = "猪骨汤拉面，汤很正。";
    }else{
        this[1][0] = "Salmon sashimi.";
        this[1][1] = "Age shumai: deep fried shrimp shumai.";
        this[1][2] = "Shoga-yaki: ginger and soy sauce flavored grilled pork and onion.";
        this[1][3] = "Shio ramen. Very good.";
        this[1][5] = "Tonkotsu ramen. The soup is delicious.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
