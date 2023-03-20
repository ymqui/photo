<!--
//Created by Album Builder Program Sat Jun 30 16:20:28 2012
var info_url   = "http://www.montgomeryparks.org/brookside/";
var title      = "Birding in Brookside Garden";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1206bsbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "NeverHadADreamComeTrue.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "溪边花园观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<21;i++){
        this[0][i] = "1206bsbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "美洲金翅雀。";
        this[1][1] = "一只红翅黑鹂雄鸟。";
        this[1][3] = "一只马蜂惊跑一只雌性红翅黑鹂。";
        this[1][4] = "一只灰嘲鸫幼鸟。";
        this[1][5] = "愤怒的加拿大黑雁。";
        this[1][6] = "一只红翅黑鹂雄鸟。";
        this[1][7] = "一只红翅黑鹂雌鸟。";
        this[1][9] = "一只家燕。";
        this[1][11] = "一只旅鸫幼鸟。";
        this[1][12] = "一只棕胁唧鹀。";
        this[1][13] = "一只歌带鹀。";
        this[1][14] = "一只红翅黑鹂雌鸟。";
        this[1][17] = "夏之加拿大黑雁。";
        this[1][18] = "家燕展翅。";
        this[1][20] = "一只未成年的绿头鸭。";
    }else{
        this[1][0] = "A male American Goldfinch.";
        this[1][1] = "A male Red-winged Blackbird.";
        this[1][3] = "A female Red-winged Blackbird ruffled by a wasp.";
        this[1][4] = "A juvenile Gray Catbird.";
        this[1][5] = "A Canada Goose.";
        this[1][6] = "A male Red-winged Blackbird.";
        this[1][7] = "A female Red-winged Blackbird.";
        this[1][9] = "A Barn Swallow.";
        this[1][11] = "A juvenile American Robin.";
        this[1][12] = "An Eastern Towhee.";
        this[1][13] = "A Song Sparrow.";
        this[1][14] = "A female Red-winged Blackbird.";
        this[1][17] = "A Canada Goose.";
        this[1][18] = "A Barn Swallow.";
        this[1][20] = "A juvenile Mallard.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58"; 
//-->