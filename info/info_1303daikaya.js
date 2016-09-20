<!--
//Created by Album Builder Program Mon Apr 01 22:26:39 2013
var info_url   = "http://daikaya.com/";
var title      = "Daikaya Ramen Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1303daikaya/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Angels_JS.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "大锅屋日式拉面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1303daikaya_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "大锅屋是华盛顿唐人街新开的一家面店。";
        this[1][1] = "餐馆不大。";
        this[1][3] = "味增汤拉面。";
        this[1][4] = "咸汤拉面。 面很筋道，但汤稍微咸了点。";
    }else{
        this[1][0] = "Daikaya is a new ramen restaurant opened in Chinatown.";
        this[1][1] = "The restaurant is quite small inside.";
        this[1][3] = "Mugi miso ramen.";
        this[1][4] = "Shio ramen. The noodle is perfectly al dente, but the soup is a little bit too salty.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
