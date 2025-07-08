<!--
//Created by Album Builder Program Tue Jul 08 19:24:07 2025
var info_url   = "https://www.captjohn.com/whale-watch-plymouth/";
var title      = "Birding with Plymouth Whale Watching";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2507seabird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "普利茅斯观鲸远洋观鸟";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "2507seabird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "猛鹱/斯氏鹱。";
        this[1][1] = "大西洋鹱。";
        this[1][2] = "猛鹱和一只褐鲣鸟。";
        this[1][3] = "褐鲣鸟。";
        this[1][4] = "猛鹱。";
        this[1][5] = "灰鹱。";
        this[1][6] = "灰鹱。";
        this[1][7] = "猛鹱。";
        this[1][8] = "黄蹼洋海燕。";
        this[1][9] = "猛鹱。";
        this[1][10] = "黄蹼洋海燕。";
        this[1][11] = "猛鹱。";
    }else{
        this[1][0] = "Cory's/Scopoli's Shearwater.";
        this[1][1] = "Manx Shearwater.";
        this[1][2] = "Cory's Shearwater & Brown Booby.";
        this[1][3] = "Brown Booby.";
        this[1][4] = "Cory's Shearwater.";
        this[1][5] = "Sooty Shearwater.";
        this[1][6] = "Sooty Shearwater.";
        this[1][7] = "Cory's Shearwater.";
        this[1][8] = "Wilson's Storm-Petrel.";
        this[1][9] = "Cory's Shearwater.";
        this[1][10] = "Wilson's Storm-Petrel.";
        this[1][11] = "Cory's Shearwater.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
