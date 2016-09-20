<!--
//Created by Album Builder Program Fri Sep 12 23:20:19 2008
var info_url   = "http://www.mcbsg.com";
var title      = "MCBSG 2008 Welcome Party";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0809mcbsg/";
//var dir        = csdpdir+"pics/0809mcbsg/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AThousandMiles.mid";
var midi_cr    = new Array("MidiFiles","http://home.hetnet.nl/~dom4/index.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "马大查经班2008迎新晚会";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<29;i++){
        this[0][i] = "0809mcbsg_"+(i+1).toString();
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
