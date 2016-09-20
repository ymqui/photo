<!--
//Created by Album Builder Program Sun Oct 30 18:24:56 2005
var info_url   = "http://www.fws.gov/blackwater/";
var title      = "Birding in the Blackwater National Wildlife Refuge";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0510birding/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BirdsOfMorning.mid";
var midi_cr    = new Array("Dolphin's Dream","http://d21c.com/dolphinsdream/quietude.html");
 
if(window.usechinese){
    title      = "黑水野生动物保护中心看鸟";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0510birding__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "南下过冬的加拿大大雁。";
        this[1][1] = "雁南飞。";
        this[1][2] = "正在捕鱼的白头海雕。";
        this[1][3] = "正在捕鱼的白头海雕。";
        this[1][4] = "一群大雁降落在水面上。";
        this[1][5] = "观鸟爱好者。";
        this[1][6] = "一对观鸟的夫妇。";
        this[1][7] = "观鸟的车队。";
        this[1][8] = "保护中心内的水面，属于切瑟匹克湾的一部分。";
        this[1][9] = "波光粼粼。";
        this[1][10] = "一群大白鹭。";
        this[1][11] = "美国国鸟白头海雕。";
        this[1][12] = "白头海雕。";
        this[1][13] = "白头海雕。";
        this[1][14] = "美丽的水面。";
        this[1][15] = "美丽的水面。";
    }else{
        this[1][0] = "Canada geese.";
        this[1][1] = "Canada geese.";
        this[1][2] = "Two bald eagles catching fish.";
        this[1][3] = "Two bald eagles catching fish.";
        this[1][4] = "A group of Canada geese take a breather in the refuge during their southbound trip.";
        this[1][5] = "Birders.";
        this[1][6] = "A couple watching birds through their binoculars.";
        this[1][7] = "The motorcade going to the next spot.";
        this[1][8] = "Reeds and reflection.";
        this[1][9] = "Reflection.";
        this[1][10] = "Great egrets.";
        this[1][11] = "A bald eagle soaring in the sky.";
        this[1][12] = "Bald eagle.";
        this[1][13] = "Bald eagles.";
        this[1][14] = "Sparkling reflection.";
        this[1][15] = "Sparkling reflection.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58";
//-->
