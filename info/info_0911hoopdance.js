<!--
//Created by Album Builder Program Sun Nov 15 20:08:32 2009
var info_url   = "http://www.kevinlocke.com/";
var title      = "Hoop Dance";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0911hoopdance/";
//var dir        = csdpdir+"pics/0911hoopdance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DistantDrums.mid";
var midi_cr    = new Array("Elan Michaels","http://www.angelfire.com/md/elanmichaels/MIDI.html");
 
if(window.usechinese){
    title      = "印第安圆环舞";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "0911hoopdance_"+(i+1).toString();
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
