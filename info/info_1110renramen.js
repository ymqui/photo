<!--
//Created by Album Builder Program Mon Oct 24 22:11:26 2011
var info_url   = "http://rens-ramen.com/";
var title      = "Ren's Ramen";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1110renramen/";
//var dir        = csdpdir+"pics/1110renramen/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IWannaKnow.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Ren的日式拉面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<3;i++){
        this[0][i] = "1110renramen_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "酱味拉面。";
        this[1][1] = "骨汤拉面。";
    }else{
        this[1][0] = "Shoyu ramen.";
        this[1][1] = "Tonshio ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
