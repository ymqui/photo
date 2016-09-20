<!--
//Created by Album Builder Program Tue Jan 03 22:38:42 2012
var info_url   = "http://wharfbarandgrill.com/wharf_bar_and_grill/";
var title      = "The Wharf Bar & Grill";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1112wharfbar/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DontLetTheSun.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "码头烧烤吧";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<3;i++){
        this[0][i] = "1112wharfbar_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "油炸真鲷鱼。";
        this[1][2] = "金枪鱼烧烤。";
    }else{
        this[1][1] = "Snapper Fish Basket.";
        this[1][2] = "Wichita BBQ Tuna.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
