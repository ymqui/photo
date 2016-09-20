<!--
//Created by Album Builder Program Wed Dec 30 12:19:55 2009
var info_url   = "http://en.wikipedia.org/wiki/Amish";
var title      = "Amish Buggy";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0912amish/";
//var dir        = csdpdir+"pics/0912amish/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Clair.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "Amish马车";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
    info_url   = "http://zh.wikipedia.org/wiki/%E9%98%BF%E7%B1%B3%E4%BB%80%E4%BA%BA";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "0912amish_"+(i+1).toString();
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
