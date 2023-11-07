<!--
//Created by Album Builder Program Tue Oct 31 19:31:34 2023
var info_url   = "";
var title      = "Fallsmead Elementary School Halloween Parade";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2310parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Fallsmead小学万圣节游行";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "2310parade_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "学校领导穿着芭比盒子服装。";
        this[1][1] = "Donovan老师带着幼儿园的孩子们。";
        this[1][2] = "球球和他的同学。";
        this[1][3] = "校长Spaugh老师和副校长Bowerman老师。";
        this[1][4] = "Donovan老师。";
        this[1][5] = "妈妈的小忍者。";
    }else{
        this[1][0] = "School administrators wearing the Barbie costume.";
        this[1][1] = "Mrs. Donovan leading the kidergarten kids.";
        this[1][2] = "Nathan and his classmates.";
        this[1][3] = "Principal Ms. Spaugh and assistant principal Mr. Bowerman.";
        this[1][4] = "Mrs. Donovan.";
        this[1][5] = "Mama's little Ninja.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
