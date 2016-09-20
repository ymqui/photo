<!--
//Created by Album Builder Program Sat Jun 18 18:26:26 2005
var info_url   = "http://www.windjammerballoons.com/festival/index.html";
var title      = "York County Balloon Festival";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0506balloon/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SurferGirl.mid";
var midi_cr    = new Array("Dan","http://www.ics.uci.edu/~dan/midi/rock/");
 
if(window.usechinese){
    title      = "热气球节";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0506balloon__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "第一个起飞的气球。";
        this[1][4] = "用劲把气球顶拉紧。";
        this[1][11] = "弯弓射大雕。";
        this[1][12] = "怪物气球。";
        this[1][17] = "绑在地上的小气球，可让游客尝试操纵热气球飞行的滋味。";
        this[1][19] = "该我了。";
        this[1][20] = "拼图：热气球飞过黄石湖。";
        this[1][21] = "拼图：热气球飞过总统头像山。";
    }else{
        this[1][0] = "The first launched balloon.";
        this[1][4] = "Hardworking balloon crew.";
        this[1][11] = "Getting the monster balloon ready.";
        this[1][12] = "What kind of monster is that?";
        this[1][17] = "Tethered balloon ride.";
        this[1][19] = "My turn.";
        this[1][20] = "Balloon flying over the Yellowstone lake(combined in photoshop).";
        this[1][21] = "Balloon flying over Mount Rushmore(combined in photoshop).";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
