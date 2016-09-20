<!--
//Created by Album Builder Program Wed Apr 06 20:46:44 2011
var info_url   = "http://www.theoceanaire.com/locations/washington/Locations.aspx";
var title      = "The Oceanaire Seafood Room";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1104oceanaire/";
//var dir        = csdpdir+"pics/1104oceanaire/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WhenYouSayNothingAtAll.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
 
if(window.usechinese){
    title      = "Oceanaire海鲜餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1104oceanaire_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "生蚝。";
        this[1][1] = "智利海鲈鱼。";
        this[1][2] = "海鲜烧烤。";
        this[1][3] = "黄鳍金枪鱼。";
        this[1][4] = "烤鲜贝配意大利米饭。。";
        this[1][5] = "甜点：火焰冰山。";
    }else{
        this[1][0] = "Oysters.";
        this[1][1] = "Pan seared Chilean sea bass.";
        this[1][2] = "Seafood mixed grill.";
        this[1][3] = "Seared-rare yellowfin tuna.";
        this[1][4] = "Pan seared Maine sea scallops.";
        this[1][5] = "Dessert: baked Alaska.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
