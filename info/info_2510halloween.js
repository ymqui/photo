<!--
//Created by Album Builder Program Fri Oct 31 15:12:53 2025
var info_url   = "";
var title      = "Fallsmead Halloween Parade";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2510halloween/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Fallsmead小学2025年万圣节游行";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<8;i++){
        this[0][i] = "2510halloween_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Levin老师领着二年级的孩子们。";
        this[1][1] = "球球穿着皮卡丘服装参加游行。";
        this[1][2] = "Levin老师和二年级的孩子们。";
        this[1][3] = "球球和同学们。";
        this[1][5] = "Levin老师和二年级的孩子们。";
        this[1][6] = "球球和同学们。";
        this[1][7] = "球球和同学们。";
    }else{
        this[1][0] = "Mrs Levin leading the 2nd grade kids.";
        this[1][1] = "Mrs Levin and the 2nd grade kids.";
        this[1][2] = "Mrs Levin and the 2nd grade kids.";
        this[1][3] = "Nathan and his classmates.";
        this[1][5] = "Mrs Levin and the 2nd grade kids.";
        this[1][6] = "Nathan and his classmates.";
        this[1][7] = "Nathan and his classmates.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
