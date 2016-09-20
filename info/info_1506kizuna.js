<!--
//Created by Album Builder Program Tue Jun 30 21:58:14 2015
var info_url   = "http://www.kizunatysons.com/";
var title      = "Kizuna Sushi & Ramen";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1506kizuna/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IllBeThere.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "绊-日式寿司拉面店";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1506kizuna_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "海帶丝色拉。";
        this[1][1] = "油炸土豆块。";
        this[1][2] = "猪骨汤拉面，汤好，面稍差。";
        this[1][3] = "猪骨汤拉面。";
        this[1][4] = "盐味拉面。";
    }else{
        this[1][0] = "Seaweed salad.";
        this[1][1] = "Smothered tater tots.";
        this[1][2] = "Tonkotsu ramen.";
        this[1][3] = "Tonkotsu ramen.";
        this[1][4] = "Shio ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
