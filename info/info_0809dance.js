<!--
//Created by Album Builder Program Fri Oct 03 23:14:29 2008
var info_url   = "http://www.nmai.si.edu/calendar/index.asp";
var title      = "Native American Indian Dance and Bolivian Tinku Dance";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0809dance/";
//var dir        = csdpdir+"pics/0809dance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "OtherSide.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "印第安舞蹈和玻利维亚舞蹈";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "0809dance_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "华盛顿印第安人博物馆。";
        this[1][1] = "印第安人舞蹈。";
        this[1][8] = "玻利维亚舞蹈。";
    }else{
        this[1][0] = "National Museum of the American Indian.";
        this[1][1] = "Native American Indian song and dances.";
        this[1][8] = "Bolivian Tinku dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
