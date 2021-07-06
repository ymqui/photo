<!--
//Created by Album Builder Program Tue Jul 06 14:56:27 2021
var info_url   = "";
var title      = "Visiting Auntie Houzi";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2107philly/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
 
if(window.usechinese){
    title      = "去候子阿姨家玩";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "2107philly_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小希姐姐跟球球介绍她的鱼缸。";
        this[1][2] = "和James哥哥赛车。";
        this[1][4] = "吃西瓜。";
        this[1][6] = "和James哥哥一起玩。";
        this[1][7] = "这么多玩具，好开心。";
        this[1][9] = "James跟球球分享他的冰棍。";
    }else{
        this[1][0] = "Adele showed her fish tank to Nathan and Maomao.";
        this[1][2] = "Nathan raced toys with James.";
        this[1][4] = "Enjoying the watermelon.";
        this[1][6] = "Playing with James.";
        this[1][7] = "Having so much fun with all the toys.";
        this[1][9] = "James shared his ice pop with Nathan.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
