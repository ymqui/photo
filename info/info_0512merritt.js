<!--
//Created by Album Builder Program Fri Dec 30 18:31:44 2005
var info_url   = "http://www.fws.gov/merrittisland/";
var title      = "Merritt Island National Wildlife Refuge";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0512merritt/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IslandOfMystery.mid";
var midi_cr    = new Array("Dolphin's Dream","http://d21c.com/dolphinsdream/quietude.html");
 
if(window.usechinese){
    title      = "美丽特岛野生动物保护区";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素, 300D相机, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<23;i++){
        this[0][i] = "0512merritt_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "印第安人河上的日出。";
        this[1][1] = "漂亮的北美黑啄木鸟。它的体型只比已快绝迹的象牙嘴啄木鸟小。";
        this[1][2] = "三只鸭。";
        this[1][3] = "粉红琵鹭。嘴象汤匙。";
        this[1][4] = "粉红琵鹭。";
        this[1][5] = "雪鹭。";
        this[1][6] = "飞行中的粉红琵鹭。";
        this[1][7] = "一群反嘴鹬。";
        this[1][8] = "彩鹮。";
        this[1][9] = "飞行中的黑头鹮鹳。黑头鹮鹳是濒危动物。";
        this[1][10] = "黑头鹮鹳。";
        this[1][11] = "大白鹭。";
        this[1][12] = "沙滩，远处可见肯尼迪航空中心的发射台。";
        this[1][13] = "歇在红树上的大蓝鹭。";
        this[1][14] = "鳄鱼。";
        this[1][15] = "肯尼迪航空中心发射台。";
        this[1][16] = "离沙滩不远的海面上常可看到海豚。";
        this[1][17] = "犰狳。";
        this[1][18] = "生存受威胁的佛罗里达丛鸦。";
        this[1][19] = "佛罗里达丛鸦，一点都不怕人。";
        this[1][20] = "佛罗里达丛鸦。";
        this[1][21] = "美洲鹈鹕。";
        this[1][22] = "美洲鹈鹕。";
    }else{
        this[1][0] = "Sunrise over the Indian River.";
        this[1][1] = "Pileated woodpecker. Its size is only second to the nearly extinct Ivory-bill among woodpeckers.";
        this[1][2] = "Three ducks.";
        this[1][3] = "Roseate spoonbills.";
        this[1][4] = "Roseate spoonbills.";
        this[1][5] = "Snowy egret.";
        this[1][6] = "A roseate spoonbill in flight.";
        this[1][7] = "A flock of avocets.";
        this[1][8] = "Glossy ibis.";
        this[1][9] = "A wood stork in flight.";
        this[1][10] = "Wood stork, an endangered species.";
        this[1][11] = "Great egret.";
        this[1][12] = "Mosquito lagoon beach with the Kendy Space Center launch complexes in sight.";
        this[1][13] = "A great blue heron perching on top of a red mangrove tree.";
        this[1][14] = "Alligators.";
        this[1][15] = "Kennedy Space Center launch complex.";
        this[1][16] = "Dolphins off the Canaveral Playalinda beach.";
        this[1][17] = "Armadillo.";
        this[1][18] = "Threatened Florida scrub jay.";
        this[1][19] = "Florida scrub jay.";
        this[1][20] = "Florida scrub jay.";
        this[1][21] = "White pelicans.";
        this[1][22] = "White pelicans.";
    }
    makeface = new Array();
    makeface[0] = 2;
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58";
//-->
