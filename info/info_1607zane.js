<!--
//Created by Album Builder Program Mon Oct 10 13:01:01 2016
var info_url   = "http://zanejapaneseeatery.com/";
var title      = "Zane Japanese Eatery";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1607zane/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Zane日本餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1607zane_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "烤鱿鱼。";
        this[1][1] = "火山辣拉面。";
        this[1][2] = "猪骨汤拉面。";
    }else{
        this[1][0] = "Grilled Squid.";
        this[1][1] = "Volcano ramen.";
        this[1][2] = "Tonkotsu ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
