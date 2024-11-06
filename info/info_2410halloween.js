<!--
//Created by Album Builder Program Wed Nov 06 08:08:53 2024
var info_url   = "";
var title      = "Fallsmead Halloween Parade & Party";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2410halloween/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Fallsmead Halloween Parade & Party";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "2410halloween_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "20241031_001_MrsSpaugh.JPG";
        this[1][1] = "20241031_002_MrsWasser.JPG";
        this[1][2] = "20241031_003_Gia&Nathan&Ema.JPG";
        this[1][3] = "20241031_005_Nathan.JPG";
        this[1][4] = "20241031_006_MsMorris.JPG";
        this[1][5] = "20241031_014_.JPG";
        this[1][6] = "20241031_016_Nathan.JPG";
        this[1][7] = "20241031_032_.JPG";
        this[1][8] = "20241031_033_.JPG";
        this[1][9] = "20241031_036_.JPG";
        this[1][10] = "20241031_047_Nathan.JPG";
        this[1][11] = "20241031_048_Nathan.JPG";
        this[1][12] = "20241031_056_Nathan.JPG";
        this[1][13] = "20241031_066_.JPG";
    }else{
        this[1][0] = "20241031_001_MrsSpaugh.JPG";
        this[1][1] = "20241031_002_MrsWasser.JPG";
        this[1][2] = "20241031_003_Gia&Nathan&Ema.JPG";
        this[1][3] = "20241031_005_Nathan.JPG";
        this[1][4] = "20241031_006_MsMorris.JPG";
        this[1][5] = "20241031_014_.JPG";
        this[1][6] = "20241031_016_Nathan.JPG";
        this[1][7] = "20241031_032_.JPG";
        this[1][8] = "20241031_033_.JPG";
        this[1][9] = "20241031_036_.JPG";
        this[1][10] = "20241031_047_Nathan.JPG";
        this[1][11] = "20241031_048_Nathan.JPG";
        this[1][12] = "20241031_056_Nathan.JPG";
        this[1][13] = "20241031_066_.JPG";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
