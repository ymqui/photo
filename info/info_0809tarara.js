<!--
//Created by Album Builder Program Sun Sep 21 22:00:35 2008
var info_url   = "http://www.tarara.com/";
var title      = "Tarara Wine Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0809tarara/";
//var dir        = csdpdir+"pics/0809tarara/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Patience.mid";
var midi_cr    = new Array("Kel's Midi Page","http://members.tripod.com/~ellisbell/midi.html");
 
if(window.usechinese){
    title      = "Tarara葡萄酒节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "0809tarara_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][2] = "品酒。";
        this[1][5] = "酒窖里的葡萄酒桶。";
        this[1][8] = "游葡萄园。";
        this[1][10] = "踩葡萄。";
    }else{
        this[1][2] = "Wine tasting.";
        this[1][5] = "Wine barrels in the cave.";
        this[1][8] = "Vineyard tour.";
        this[1][10] = "Grape stomping.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
