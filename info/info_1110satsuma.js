<!--
//Created by Album Builder Program Mon Oct 24 21:52:53 2011
var info_url   = "http://www.yelp.com/biz/satsuma-bethesda";
var title      = "Satsuma Japanese Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1110satsuma/";
//var dir        = csdpdir+"pics/1110satsuma/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "JustCantGetEnough.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "薩摩日本餐馆";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1110satsuma_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][2] = "海带丝色拉。";
        this[1][3] = "生鱼片。";
        this[1][4] = "猪骨汤拉面。";
    }else{
        this[1][2] = "Seaweed salad.";
        this[1][3] = "Sashimi appetizer.";
        this[1][4] = "Tonkotsu ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
