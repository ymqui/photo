<!--
//Created by Album Builder Program Sun Oct 09 11:27:12 2011
var info_url   = "http://www.hawkmountain.org/";
var title      = "Hawk Mountain";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1110hawkmtn/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AngelOfMine.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "鹰山看鹰";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<3;i++){
        this[0][i] = "1110hawkmtn_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "一只黑秃鹫。";
        this[1][1] = "红头美洲鹫。";
        this[1][2] = "纹腹鹰。";
    }else{
        this[1][0] = "A black vulture.";
        this[1][1] = "Turkey vultures.";
        this[1][2] = "Sharp-shinned hawk.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
