<!--
//Created by Album Builder Program Fri Dec 30 15:37:26 2005
var info_url   = "http://www.nps.gov/bisc/index.htm";
var title      = "Biscayne National Park";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0512biscayne/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Prefug4.mid";
var midi_cr    = new Array("Bach Midi Page","http://www.bachcentral.com/midiindexcomplete.html");
 
if(window.usechinese){
    title      = "比斯凯恩国家公园";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "0512biscayne_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "南迁的白鹮。";
        this[1][1] = "白鹮。";
        this[1][2] = "棕鹈鹕。";
        this[1][3] = "远处的迈阿密市如海市蜃楼般。";
        this[1][4] = "晚舟。";
        this[1][5] = "落日。";
    }else{
        this[1][0] = "Migrating white ibis.";
        this[1][1] = "White ibis.";
        this[1][2] = "Brown pelican.";
        this[1][3] = "Miami on the distant horizon.";
        this[1][4] = "A returning fishing boat basks in the sunset.";
        this[1][5] = "Sunset.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58";
//-->
