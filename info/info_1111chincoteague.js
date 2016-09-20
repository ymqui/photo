<!--
//Created by Album Builder Program Sun Nov 27 10:04:01 2011
var info_url   = "http://www.fws.gov/northeast/chinco/";
var title      = "Chincoteague National Wildlife Refuge";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1111chincoteague/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AfterAll.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "清客替格岛国家野生动物保护区";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "1111chincoteague_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "大白鹭";
        this[1][1] = "双冠鸬鹚";
        this[1][2] = "未成年的黑嘴天鹅";
        this[1][3] = "大白鹭";
        this[1][4] = "苍鹭";
        this[1][5] = "大白鹭";
        this[1][6] = "苍鹭";
        this[1][7] = "苍鹭";
        this[1][8] = "苍鹭";
        this[1][9] = "大白鹭";
        this[1][10] = "大白鹭";
        this[1][11] = "大白鹭";
    }else{
        this[1][0] = "Great Egret.";
        this[1][1] = "Double-crested Cormorant.";
        this[1][2] = "Trumpeter Swan， juvenile.";
        this[1][3] = "Great Egret.";
        this[1][4] = "Great Blue Heron.";
        this[1][5] = "Great Egret.";
        this[1][6] = "Great Blue Heron.";
        this[1][7] = "Great Blue Heron.";
        this[1][8] = "Great Blue Heron.";
        this[1][9] = "Great Egret.";
        this[1][10] = "Great Egret.";
        this[1][11] = "Great Egret.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
