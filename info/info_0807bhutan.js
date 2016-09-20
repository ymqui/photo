<!--
//Created by Album Builder Program Mon Jul 07 22:44:24 2008
var info_url   = "http://www.folklife.si.edu/festival/2008/Bhutan/index.html";
var title      = "Dances from Bhutan";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0807bhutan/";
//var dir        = csdpdir+"pics/0807bhutan/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ComfortablyNumb.mid";
var midi_cr    = new Array("Kel's Midi Page","http://members.tripod.com/~ellisbell/midi.html");
 
if(window.usechinese){
    title      = "不丹舞蹈";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0807bhutan_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "唐卡。";
    }else{
        this[1][0] = "A thangka.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
