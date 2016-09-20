<!--
//Created by Album Builder Program Sun Nov 30 19:37:44 2008
var info_url   = "";
var title      = "Thanksgiving Holiday in Pennsylvania and New York";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0811thanksgiving/";
//var dir        = csdpdir+"pics/0811thanksgiving/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Angels.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "感恩节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<28;i++){
        this[0][i] = "0811thanksgiving_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Alice。";
        this[1][1] = "舅婆和舅公。";
        this[1][2] = "舅婆，Eric，Alice，和舅公在纽约植物园。";
        this[1][4] = "Alice。";
        this[1][5] = "舅公，小阿姨，和Alice在看植物园里的文字介绍。";
        this[1][6] = "舅婆。";
        this[1][8] = "舅婆和舅公。";
        this[1][11] = "Alice在研磨生姜。";
        this[1][13] = "在一个Henry Moore的作品前合影。";
        this[1][14] = "植物园里的一个穹顶。";
        this[1][15] = "舅婆在Peddler's Village.";
        this[1][17] = "小阿姨。";
        this[1][18] = "排队看姜饼屋。";
        this[1][19] = "节日彩灯。";
        this[1][25] = "商店的窗户。";
        this[1][27] = "姜饼屋。";
    }else{
        this[1][0] = "Alice.";
        this[1][1] = "Grand Aunt and Grand Uncle.";
        this[1][2] = "Grand Aunt, Eric, Alice, and Grand Uncle in New York Botanical Garden.";
        this[1][4] = "Alice.";
        this[1][5] = "Grand Uncle, Aunt, and Alice looking at the display in the Botanical Garden.";
        this[1][6] = "Grand Aunt.";
        this[1][8] = "Grand Aunt and Grand Uncle.";
        this[1][11] = "Alice is learning how to grind ginger.";
        this[1][13] = "In front of a Henry Moore sculpture.";
        this[1][14] = "A dome in the Botanic Garden.";
        this[1][15] = "Grand Aunt in Peddler's Village.";
        this[1][17] = "Aunt.";
        this[1][18] = "Waiting in the line for the gingerbread house exhibition.";
        this[1][19] = "Lights in Peddler's Village.";
        this[1][25] = "Shop windows.";
        this[1][27] = "Gingerbread houses.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
