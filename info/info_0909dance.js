<!--
//Created by Album Builder Program Sun Sep 20 09:39:59 2009
var info_url   = "http://www.gibaropr.com/";
var title      = "Puerto Rican Dance";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0909dance/";
//var dir        = csdpdir+"pics/0909dance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Jamaica.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "波多黎各舞蹈";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "0909dance_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Seis舞。";
        this[1][5] = "Bomba舞，起源于非洲。舞者对应每个鼓点都得做成动作。";
        this[1][7] = "Salsa舞。";
        this[1][8] = "Plena舞。";
    }else{
        this[1][0] = "Seis dance.";
        this[1][5] = "Bomba dance, which originates in Africa.";
        this[1][6] = "In bomba dance, the dancer moves to every beat of the drum.";
        this[1][7] = "Salsa.";
        this[1][8] = "Plena dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
