<!--
//Created by Album Builder Program Mon Jan 06 22:26:40 2014
var info_url   = "http://visitsavannah.com";
var title      = "Savannah";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1312savannah/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BeautifulGoodbye.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "萨凡纳";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "1312savannah_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "福赛斯公园。";
        this[1][3] = "一家古董店。";
        this[1][7] = "经纪人街。";
        this[1][10] = "一家糖果店。";
    }else{
        this[1][0] = "Forsyth Park.";
        this[1][3] = "An antique store.";
        this[1][7] = "Factors walk.";
        this[1][10] = "A candy store.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
