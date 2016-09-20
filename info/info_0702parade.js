<!--
//Created by Album Builder Program Mon Feb 19 23:34:14 2007
var info_url   = "http://godc.about.com/od/annualevents/p/chineseny.htm";
var title      = "2007 DC Chinatown Spring Festival Parade";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0702parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HappyNewYear.mid";
var midi_cr    = new Array("Jalal Ali","http://www.jalalmusic.com");
 
if(window.usechinese){
    title      = "华盛顿唐人街2007春节游行喜迎金猪年";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<34;i++){
        this[0][i] = "0702parade_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "华盛顿的唐人街。";
        this[1][2] = "街头卖礼品的小贩也知道是猪年。";
        this[1][4] = "街边挤满了等待游行的人群。";
        this[1][31] = "玩摔炮的小女孩。";
        this[1][32] = "玩摔炮的小女孩。";
        this[1][33] = "华盛顿市长Adrian Fenty.";
    }else{
        this[1][0] = "The Gateway Arch welcomes visitors to Chinatown in Washington, DC.";
        this[1][2] = "Even the gift peddler knows it is Pig year.";
        this[1][4] = "Crowds waiting for the parade.";
        this[1][33] = "DC mayor Adrian Fenty.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
