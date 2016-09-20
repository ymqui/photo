<!--
//Created by Album Builder Program Sun Sep 21 21:38:58 2008
var info_url   = "http://www.qohs.org/athletics/football/";
var title      = "Qunice Orchard High School Football Game";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0809qohsfootball/";
//var dir        = csdpdir+"pics/0809qohsfootball/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AllByMyself.mid";
var midi_cr    = new Array("Quality Midi Files","http://server3.myebiz.com/chryspage/midi_files.html");
 
if(window.usechinese){
    title      = "Quince果园高中橄榄球赛";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "0809qohsfootball_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "啦啦队赛前练习。";
        this[1][1] = "运动员拉伸韧带。";
        this[1][2] = "球迷。";
        this[1][4] = "赛前啦啦队表演。";
        this[1][7] = "行进乐队。";
        this[1][9] = "运动员进场。";
        this[1][11] = "这场比赛是Quince果园高中美洲狮队对大马士革高中黄蜂队。";
        this[1][19] = "中场休息。";
    }else{
        this[1][0] = "Cheerleaders exercise before the game.";
        this[1][1] = "The players stretch before the game.";
        this[1][2] = "Fans.";
        this[1][4] = "Cheerleaders dance before the game.";
        this[1][7] = "The marching band.";
        this[1][9] = "Players entering the field.";
        this[1][11] = "The game is between the Quince Orchard Cougars and the Damascus Yellow Jackets.";
        this[1][19] = "Halftime.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
