<!--
//Created by Album Builder Program Mon Sep 05 16:01:10 2022
var info_url   = "";
var title      = "Gaithersburg Labor Day Parade";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2209parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "盖瑟斯堡劳动节游行";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "2209parade_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在盖瑟斯堡老城举行的第84届劳动节游行。";
        this[1][2] = "前电视台气象员Sue Palka是今年游行的大阅官。";
        this[1][7] = "墨西哥传统乐队。";
        this[1][8] = "中国舞龙。";
        this[1][9] = "玻利维亚民间舞蹈。";
    }else{
        this[1][0] = "The 84th annual labor day parade in old town Gaithersburg.";
        this[1][2] = "This year's Grand Marshal is Sue Palka, former channel 5 chief meteorologist.";
        this[1][7] = "Mexican mariachi band.";
        this[1][8] = "Chinese dragon dance.";
        this[1][9] = "Bolivian folk dance.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
