﻿<!--
var info_url   = "https://www.si.edu/";
var title      = "Visiting DC Museums";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels; 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1904dcmuseum/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "参观华盛顿特区博物馆";
    info_url   = "https://baike.baidu.com/item/%E5%8F%B2%E5%AF%86%E6%A3%AE%E5%AD%A6%E4%BC%9A";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素；20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "1904dcmuseum_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在博物馆前的大广场上。";
        this[1][1] = "在国家航空航天博物馆。";
        this[1][2] = "在国家航空航天博物馆。";
        this[1][3] = "在国家航空航天博物馆。";
        this[1][4] = "在博物馆前的大广场上。";
        this[1][5] = "球球可喜欢在大草坪上跑了。";
        this[1][6] = "在博物馆前的大广场上。";
        this[1][7] = "在博物馆前的大广场上。";
        this[1][8] = "好奇的球球。";
        this[1][9] = "和爸爸玩捉迷藏。";
        this[1][10] = "在国家自然历史博物馆。";
        this[1][11] = "在国家自然历史博物馆。";
    }else{
        this[1][0] = "In the National Mall.";
        this[1][1] = "At the National Air and Space Museum.";
        this[1][2] = "At the National Air and Space Museum.";
        this[1][3] = "At the National Air and Space Museum.";
        this[1][4] = "In the National Mall.";
        this[1][5] = "Nathan loves the open space.";
        this[1][6] = "In the National Mall.";
        this[1][7] = "In the National Mall.";
        this[1][8] = "A curious Nathan.";
        this[1][9] = "Playing hide and seek with Daddy.";
        this[1][10] = "At the National Museum of Natural History.";
        this[1][11] = "At the National Museum of Natural History.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
