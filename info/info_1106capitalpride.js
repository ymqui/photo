<!--
//Created by Album Builder Program Sat Jun 18 12:44:27 2011
var info_url   = "http://www.capitalpride.org/";
var title      = "DC Capital Pride Parade";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1106capitalpride/";
//var dir        = csdpdir+"pics/1106capitalpride/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "YouAreMySunshine.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "华盛顿同性恋游行";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<15;i++){
        this[0][i] = "1106capitalpride_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
    }else{
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
