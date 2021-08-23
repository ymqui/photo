<!--
//Created by Album Builder Program Tue Aug 17 14:44:59 2021
var info_url   = "";
var title      = "Vacationing in Pittsburgh, PA and Provincetown, MA";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2108vacation/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "在宾夕法尼亚州匹兹堡和马萨诸塞州普罗温斯敦度假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<45;i++){
        this[0][i] = "2108vacation_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "抵达宾夕法尼亚州匹兹堡的旅馆。";
        this[1][1] = "参观卡内基梅隆大学。";
        this[1][2] = "参观卡内基梅隆大学。";
        this[1][4] = "参观匹兹堡的肯尼伍德游乐园。";
        this[1][5] = "在托马斯火车公园。";
        this[1][6] = "托马斯是球球最喜欢的火车。";
        this[1][7] = "乘托马斯火车。";
        this[1][9] = "乘哈罗德直升机。";
        this[1][10] = "托马斯火车。";
        this[1][12] = "喷水灭火。";
        this[1][13] = "乘赛车。";
        this[1][14] = "乘飞机。";
        this[1][16] = "乘小摩托车。";
        this[1][17] = "乘小飞象。";
        this[1][18] = "球球可喜欢这个转盘车了。";
        this[1][21] = "乘转轮飞椅。";
        this[1][23] = "再坐一次赛车。";
        this[1][24] = "参观匹兹堡动物园和水族馆。";
        this[1][25] = "看小猫熊。";
        this[1][26] = "看倭河马。";
        this[1][27] = "在水族馆。";
        this[1][28] = "球球的新毛绒河马。";
        this[1][29] = "参观著名建筑师弗兰克·劳埃德·赖特设计的落水山庄。";
        this[1][34] = "落水山庄。";
        this[1][35] = "在马萨诸塞州普罗温斯敦的海滩上玩沙子。";
        this[1][37] = "参观麻省理工学院。";
        this[1][39] = "参观哈佛大学。";
        this[1][40] = "参观哈佛大学。";
        this[1][41] = "参观普林斯顿大学。";
    }else{
        this[1][0] = "Arriving at the hotel in Pittsburgh.";
        this[1][1] = "Visiting Carnegie Mellon University.";
        this[1][2] = "Visiting Carnegie Mellon University.";
        this[1][4] = "Visiting Kennywood Amusement Park in Pittsburgh.";
        this[1][5] = "At Thomas Town in Kennywood.";
        this[1][6] = "Thomas the tank engine is Nathan's favorite train.";
        this[1][7] = "Journey with Thomas.";
        this[1][9] = "Riding Harold the helicopter.";
        this[1][10] = "Thomas the No 1 blue engine.";
        this[1][11] = "Riding Rusty the diesel train.";
        this[1][12] = "Shooting water on Flynn's fire training.";
        this[1][13] = "Riding a race car.";
        this[1][14] = "Riding the Red Baron airplane.";
        this[1][16] = "Riding a mini motorcycle.";
        this[1][17] = "Riding a flying elephant.";
        this[1][18] = "Riding the whippersnapper.";
        this[1][21] = "Riding the whirlwind.";
        this[1][23] = "Taking another ride of the race car.";
        this[1][24] = "Visiting the Pittsburgh Zoo & PPG Aquarium.";
        this[1][25] = "Watching a red panda.";
        this[1][26] = "Watching a pygmy hippo.";
        this[1][27] = "At the aquarium.";
        this[1][28] = "Nathan's new hippo.";
        this[1][29] = "Visiting the Fallingwater, a famous house designed by Frank Lloyd Wright.";
        this[1][34] = "Beautiful Fallingwater.";
        this[1][35] = "Playing at the race point beach in Provincetown.";
        this[1][37] = "At MIT.";
        this[1][39] = "At Harvard University.";
        this[1][40] = "At Harvard University.";
        this[1][41] = "At Princeton University.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
