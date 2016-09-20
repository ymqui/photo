<!--
//Created by Album Builder Program Sat Feb 14 21:43:23 2009
var info_url   = "http://js.qz.gov.cn/zwgk/zwgk/jrjs/tpxw/200902/t20090205_124282.htm";
var title      = "West Pond in Jiangshan, Zhejiang Province";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0901xitang/";
//var dir        = csdpdir+"pics/0901xitang/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Suddenly.mid";
var midi_cr    = new Array("Kel's Midi Page","http://members.tripod.com/~ellisbell/midi.html");
 
if(window.usechinese){
    title      = "江山西塘";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<8;i++){
        this[0][i] = "0901xitang_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "浙江省江山市西塘保留的古民居。西塘是江山市里西边的一个池塘。";
        this[1][6] = "西塘一带的小巷。";
    }else{
        this[1][0] = "West Pond in Jiangshan City, where several old residences are preserved.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
