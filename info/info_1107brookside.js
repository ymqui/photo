<!--
//Created by Album Builder Program Wed Aug 03 22:06:09 2011
var info_url   = "http://www.montgomeryparks.org/brookside/";
var title      = "Birding in Brookside Garden";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1107brookside/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "10000Promises.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "溪边花园观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "1107brookside_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "灰嘲鸫。";
        this[1][1] = "红翅黑鹂。";
        this[1][2] = "灰嘲鸫。";
        this[1][3] = "红翅黑鹂。";
        this[1][4] = "红翅黑鹂。";
        this[1][5] = "绿鹭。";
        this[1][6] = "绿鹭。";
        this[1][7] = "红喉北蜂鸟。成年雄鸟的脖子呈宝石红。";
    }else{
        this[1][0] = "Grey catbird.";
        this[1][1] = "Red-winged blackbird.";
        this[1][2] = "Grey catbird.";
        this[1][3] = "Red-winged blackbird.";
        this[1][4] = "Red-winged blackbird.";
        this[1][5] = "Green heron.";
        this[1][6] = "Green heron.";
        this[1][7] = "Ruby-throated hummingbird. Only the adult male has the full red gorget.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
