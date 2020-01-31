<!--
//Created by Album Builder Program Thu Jan 30 21:06:41 2020
var info_url   = "";
var title      = "Vacationing in Texas";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2001texas/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Vacationing in Texas";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<27;i++){
        this[0][i] = "2001texas_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在休斯顿赫尔曼公园坐小火车。";
        this[1][1] = "游休斯顿赫尔曼公园。";
        this[1][2] = "看鸭子。";
        this[1][3] = "参观休斯顿太空中心。";
        this[1][4] = "好大的火箭发动机。";
        this[1][5] = "参观土星五号运载火箭。";
        this[1][6] = "开心时刻。";
        this[1][7] = "土星五号运载火箭。";
        this[1][8] = "在休斯顿太空中心乘游览车。";
        this[1][9] = "在休斯顿太空中心。";
        this[1][10] = "参观休斯顿水族馆。";
        this[1][11] = "在水族馆。";
        this[1][12] = "水族馆。";
        this[1][13] = "水族馆。";
        this[1][14] = "水族馆的白老虎。";
        this[1][15] = "看老虎。";
        this[1][16] = "在水族馆。";
        this[1][17] = "在水族馆。";
        this[1][18] = "我要小老虎。";
        this[1][19] = "小老虎新伙伴。";
        this[1][20] = "休斯顿赫尔曼公园的小火车。";
        this[1][21] = "在休斯顿赫尔曼公园坐小火车。";
        this[1][22] = "在休斯顿赫尔曼公园。";
        this[1][23] = "在休斯顿赫尔曼公园。";
        this[1][24] = "骑小自行车。";
        this[1][25] = "在圣安娜国家野生动物保护区陪爸爸观鸟。";
        this[1][26] = "和小老虎一起绑好安全带准备飞机起飞。";
    }else{
        this[1][0] = "Riding the Hermann Park mini train in Houston.";
        this[1][1] = "Hermann park in Houston.";
        this[1][2] = "Watching ducks at Hermann park.";
        this[1][3] = "At Space Center Houston.";
        this[1][4] = "At Space Center Houston.";
        this[1][5] = "Watching the Saturn V rocket.";
        this[1][6] = "Having fun at Space Center Houston.";
        this[1][7] = "Saturn V rocket at Space Center Houston.";
        this[1][8] = "Taking the tram tour at Space Center Houston.";
        this[1][9] = "At Space Center Houston.";
        this[1][10] = "Visiting the Houston downtown aquarium.";
        this[1][11] = "At the aquarium.";
        this[1][12] = "At the aquarium.";
        this[1][13] = "At the aquarium.";
        this[1][14] = "A white Bengal tiger at the aquarium.";
        this[1][15] = "Watching the tiger.";
        this[1][16] = "At the aquarium outdoor enclosure.";
        this[1][17] = "At the aquarium outdoor enclosure.";
        this[1][18] = "I have a new tiger buddy now.";
        this[1][19] = "With the new tiger buddy.";
        this[1][20] = "Mini train at Houston Hermann park.";
        this[1][21] = "Riding the mini train at Houston Hermann park.";
        this[1][22] = "At Houston Hermann park.";
        this[1][23] = "Having fun at Hermann park.";
        this[1][24] = "Test ride a bicycle.";
        this[1][25] = "Birding at Santa Ana National Wildlife Refuge.";
        this[1][26] = "Buckled up for the airplane takeoff.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
