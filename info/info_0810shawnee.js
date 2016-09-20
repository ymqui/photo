<!--
//Created by Album Builder Program Mon Oct 20 23:38:11 2008
var info_url   = "http://www.shawneemt.com/fall/timberballoon.html";
var title      = "Timber & Balloon Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0810shawnee/";
//var dir        = csdpdir+"pics/0810shawnee/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Corazonado.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "热气球和伐木工节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<33;i++){
        this[0][i] = "0810shawnee_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "热气球光耀夜空。";
        this[1][3] = "凌晨的气球起飞。";
        this[1][7] = "小猪赛跑。";
        this[1][8] = "“热狗”赛跑。";
        this[1][10] = "链锯木雕。";
        this[1][12] = "伐木工竞技比赛中的砍木头比赛。";
        this[1][14] = "锯木比赛。";
        this[1][17] = "斧头投靶比赛。";
        this[1][19] = "推木头。";
        this[1][22] = "爬树干比赛。";
        this[1][24] = "滚圆木。";
        this[1][29] = "晨雾里的大雁。";
        this[1][30] = "南瓜。";
    }else{
        this[1][0] = "Balloon glow.";
        this[1][3] = "Balloon launch.";
        this[1][7] = "Pig race.";
        this[1][8] = '"Hot Dog"'+" race.";
        this[1][10] = "Chainsaw sculpting.";
        this[1][12] = "Underhand chopping in the lumberjack competition.";
        this[1][13] = "Springboard chopping.";
        this[1][14] = "Cross-cut sawing.";
        this[1][17] = "Axe throwing.";
        this[1][19] = "Log moving with a peavey.";
        this[1][22] = "Pole climbing.";
        this[1][24] = "Log rolling.";
        this[1][29] = "Canada geese bathed in morning fog.";
        this[1][30] = "Pumpkins.";
        this[1][31] = "Boy and goats.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
