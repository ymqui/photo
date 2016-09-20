<!--
//Created by Album Builder Program Sun Sep 12 23:27:31 2010
var info_url   = "http://www.benschilibowl.com/";
var title      = "Ben's Chili Bowl";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1009benchilibowl/";
//var dir        = csdpdir+"pics/1009benchilibowl/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TequilaSunrise.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
 
if(window.usechinese){
    title      = "本的红辣椒碗";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1009benchilibowl_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "位于华盛顿U大街的本的红辣椒碗是有名的热狗店。";
        this[1][1] = "这里的辣椒肠和半燻肠很受欢迎。";
        this[1][4] = "这就是有名的红辣椒碗。";
        this[1][5] = "半燻肠热狗。";
    }else{
        this[1][0] = "Ben's Chili Bowl is a landmark restaurant in Washington D.C., located in U Street.";
        this[1][1] = "It is known for its chili dogs and half-smokes.";
        this[1][4] = "The famous chili bowl.";
        this[1][5] = "The half-smoke.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
