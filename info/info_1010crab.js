<!--
//Created by Album Builder Program Mon Oct 04 21:12:17 2010
var info_url   = "http://www.bobrooks.com/";
var title      = "Bo Brooks Restaurant";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1010crab/";
//var dir        = csdpdir+"pics/1010crab/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "EnglishmanInNewYork.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "在巴尔的摩吃螃蟹";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1010crab_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "位于巴尔的摩内港附近的Bo Brooks饭店是吃螃蟹的好去处。";
        this[1][1] = "蟹肉汤。";
        this[1][2] = "小油炸蟹肉糕三明治。";
        this[1][3] = "吃螃蟹的道具。";
        this[1][4] = "涂满传统的老湾调味料蒸出来的螃蟹。";
    }else{
        this[1][0] = "Bo Brooks restaurant is located in the water front near the Inner Harbor of Baltimore.";
        this[1][1] = "Crab soup.";
        this[1][2] = "Crab Cake Sliders.";
        this[1][3] = "Bucket and mallet.";
        this[1][4] = "Extra large crabs steamed in traditional old bay seasoning.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
