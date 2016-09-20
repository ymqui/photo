<!--
//Created by Album Builder Program Sat May 16 16:27:25 2015
var info_url   = "http://www.katanabaltimore.com/";
var title      = "Katana Sushi & Ramen";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1505katana/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "EmptyGarden.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "日本刀寿司拉面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1505katana_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这家店位于巴尔的摩广东街区一带。";
        this[1][1] = "生鱼片。";
        this[1][2] = "猪骨汤拉面，汤很不错。";
        this[1][3] = "辣汤拉面。";
    }else{
        this[1][0] = "Katana Sushi & Ramen Restaurant is located in Canton.";
        this[1][1] = "Sashimi mix.";
        this[1][2] = "Tonkotsu ramen.";
        this[1][3] = "Spicy ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
