<!--
//Created by Album Builder Program Mon Apr 12 21:41:48 2010
var info_url   = "http://www.nationalcherryblossomfestival.org/";
var title      = "2010 National Cherry Blossom Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1004cbf/";
//var dir        = csdpdir+"pics/1004cbf/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "YoungAtHeart.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
 
if(window.usechinese){
    title      = "樱花节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1004cbf_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "樱花节游行。";
        this[1][5] = "樱花节焰火。";
    }else{
        this[1][0] = "Cherry Blossom Festival parade.";
        this[1][5] = "Fireworks at southwest waterfront.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
