<!--
//Created by Album Builder Program Thu Jul 02 22:47:24 2015
var info_url   = "http://www.marumenva.com/";
var title      = "Marumen Ramen Shop";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1507marumen/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TheVoiceWithin.mid";
var midi_cr    = new Array("MIDI Zone","http://www.free-midi.org/");
 
if(window.usechinese){
    title      = "Marumen拉面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1507marumen_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "炸猪皮。";
        this[1][1] = "辣味味噌拉面。";
        this[1][2] = "辣味味噌拉面。";
        this[1][3] = "盐味拉面，很好吃。";
        this[1][4] = "酱汤拉面。";
    }else{
        this[1][0] = "Chicharrones: crispy fried pork skin.";
        this[1][1] = "Spicy miso ramen.";
        this[1][2] = "Spicy miso ramen.";
        this[1][3] = "Shio ramen.";
        this[1][4] = "Shoyu ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
