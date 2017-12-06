<!--
//Created by Album Builder Program Fri Mar 18 08:56:45 2005
var info_url   = "";
var title      = "Yun and Huigang with family";
var cam_img    = "camera_canon_a40.jpg";
var cam_tit    = "Canon Powershot A40, 2.0 Mega Pixels.";
var dir        = maindir+"pics/050102yunmisc/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Friends.mid";
var midi_cr    = new Array("Yahoo Group","http://launch.groups.yahoo.com/group/easylisteningchristianmusic/");
 
if(window.usechinese){
    title      = "汇刚和刘韵与家人团聚";
    cam_tit    = "佳能Powershot A40, 200万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<47;i++){
        this[0][i] = "050102yunmisc__"+(i+1).toString();
        this[1][i] = "";
    }
}
//web counter info
var sc_project   = 609662;
var sc_partition = 4;
var sc_invisible = 1;
var sc_security  = "4d08f2a2";
//-->
