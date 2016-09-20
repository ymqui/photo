<!--
//Created by Album Builder Program Tue Oct 07 21:09:06 2008
var info_url   = "http://www.turkishfestival.org/";
var title      = "Turkish Festival";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0810turkfestival/";
//var dir        = csdpdir+"pics/0810turkfestival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Donmelisin.mid";
var midi_cr    = new Array("Abdullah's Music Page","http://members.aol.com/cleoleyla/music.html");
 
if(window.usechinese){
    title      = "土耳其节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "0810turkfestival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "土耳其民间舞蹈。";
        this[1][23] = "肚皮舞。";
        this[1][28] = "阿塞拜疆舞蹈。";
    }else{
        this[1][0] = "Turkish folk dance.";
        this[1][23] = "Bellydance by Joy of Motion Youth Dance Company.";
        this[1][28] = "Azeri dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
