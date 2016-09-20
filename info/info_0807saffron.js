<!--
//Created by Album Builder Program Sun Jul 20 11:55:32 2008
var info_url   = "http://www.saffrondance.com/";
var title      = "Belly Dance";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0807saffron/";
//var dir        = csdpdir+"pics/0807saffron/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SalemliAlalAmar.mid";
var midi_cr    = new Array("Mike Kattan","http://www.kattanweb.com/mike/music/index.asp");
 
if(window.usechinese){
    title      = "肚皮舞";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0807saffron_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Saffron是华盛顿地区的一个肚皮舞舞蹈团。";
        this[1][1] = "Saphira是这个舞蹈团的创始人和团长。";
    }else{
        this[1][0] = "Saffron Dance is a belly dance studio in the Washington, DC area.";
        this[1][1] = "Saphira is the founder and artisitc director of Saffron Dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
