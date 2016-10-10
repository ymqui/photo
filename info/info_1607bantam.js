<!--
//Created by Album Builder Program Mon Oct 10 13:13:13 2016
var info_url   = "http://www.bantamking.com/";
var title      = "Bantam King";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1607bantam/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "鸡王拉面";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1607bantam_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这家拉面馆用的是鸡汤。";
        this[1][1] = "盐味清汤拉面。";
        this[1][2] = "味增拉面。";
    }else{
        this[1][0] = "Ramen at Bantam King is served with chicken based broth.";
        this[1][1] = "Shio chintan ramen.";
        this[1][2] = "Miso ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
