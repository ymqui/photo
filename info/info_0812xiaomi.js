<!--
//Created by Album Builder Program Tue Dec 23 20:28:36 2008
var info_url   = "";
var title      = "Xiaomi";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0812xiaomi/";
//var dir        = csdpdir+"pics/0812xiaomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Guantanamera.mid";
var midi_cr    = new Array("Love That Latin","	http://www.gnu-bee.com/latin.shtml");
var blocksave  = false;
 
if(window.usechinese){
    title      = "小米";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "0812xiaomi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][2] = "小米和爸爸。";
        this[1][3] = "妈妈给小米戴花。";
        this[1][4] = "小米和爸爸妈妈。";
        this[1][10] = "小米抱着圣诞礼物。";
        this[1][11] = "小米和爸爸妈妈唱圣诞歌曲。";
    }else{
        this[1][2] = "Xiaomi with Dad.";
        this[1][3] = "Xiaomi with parents.";
        this[1][4] = "Xiaomi with parents.";
        this[1][10] = "Xiaomi holding a Christmas gift.";
        this[1][11] = "Xiaomi singing Christmas carol with parents.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
