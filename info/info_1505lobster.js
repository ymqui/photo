<!--
//Created by Album Builder Program Sat May 30 14:15:05 2015
var info_url   = "";
var title      = "Maine Lobster";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1505lobster/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Heaven.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "缅因吃龙虾";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1505lobster_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "布斯贝港的凯勒餐馆。";
        this[1][1] = "烤土豆皮。";
        this[1][2] = "蛤肉汤。";
        this[1][3] = "蒸龙虾。";
        this[1][4] = "一号公路边上的瑞德食档。";
        this[1][5] = "著名的龙虾卷，肉又多又新鲜。";
        this[1][6] = "很好吃的蓝莓蛋糕。";
    }else{
        this[1][0] = "Kaler's Restaurant at Boothbay Harbor.";
        this[1][1] = "Potato skins.";
        this[1][2] = "Clam chowder.";
        this[1][3] = "Steamed lobster.";
        this[1][4] = "Red's Eats along Route 1.";
        this[1][5] = "The famous lobster roll.";
        this[1][6] = "Delicious blueberry cake.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
