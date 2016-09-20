<!--
//Created by Album Builder Program Wed Nov 01 18:42:28 2006
var info_url   = "http://www.gaithersburgmd.gov/poi/default.asp?POI_ID=309&TOC=307;309;&id=2339";
var title      = "2006 Halloween in Gaithersburg";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0610halloween/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Halloween.mid";
var midi_cr    = new Array("Halloween Midi","http://www.westnet.com/Halloween/midi/");
 
if(window.usechinese){
    title      = "盖瑟斯堡万圣之夜";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<27;i++){
        this[0][i] = "0610halloween_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "盖瑟斯堡市万圣节前夜组织了给小孩发糖果的活动。";
        this[1][26] = "万圣节快乐！";
    }else{
        this[1][0] = "Trick-or-Treat in Olde Town Gaithersburg.";
        this[1][26] = "Happy Halloween!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
