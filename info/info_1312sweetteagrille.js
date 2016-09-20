<!--
//Created by Album Builder Program Mon Jan 06 21:40:16 2014
var info_url   = "http://www.sweetteagrille.com/";
var title      = "Sweet Tea Grille";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1312sweetteagrille/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BothSidesNow.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "甜茶烧烤";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1312sweetteagrille_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "辣鸡翅。";
        this[1][1] = "培根两吃：油炸和糖烤。";
        this[1][3] = "鸡肉香肠秋葵饭汤，非常好吃。";
        this[1][4] = "南方油炸虾。";
        this[1][5] = "油炸绿西红柿。";
    }else{
        this[1][0] = "Sweet Tea hot wings.";
        this[1][1] = "Bacon two ways.";
        this[1][3] = "Chicken & sausage gumbo, very delicious.";
        this[1][4] = "Southern fried shrimp, with hush puppy and fried sweet potato.";
        this[1][5] = "Fried green tomatoes.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
