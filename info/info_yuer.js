<!--
//Created by Album Builder Program Sat Dec 03 17:03:32 2005
var info_url   = "";
var title      = "Yuer's photo";
var cam_img    = "";
var dir        = maindir+"pics/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SkyeBoat.mid";
var midi_cr    = new Array("Scottish Midi Page","http://www.pagebiz.com/banjo/scott/");
 
if(window.usechinese){
    title      = "钰儿的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]   = "other/200502_yuer";
    this[1][i++] = "2/2005 Yindingshan, Longyan, Fujian";
    this[0][i]   = "other/200504_yuer";
    this[1][i++] = "4/2005 Xiamen, Fujian";
    if(window.usechinese){
        i = 0;
        this[1][i++] = "2/2005 福建龙岩银顶山";
        this[1][i++] = "4/2005 福建厦门";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->