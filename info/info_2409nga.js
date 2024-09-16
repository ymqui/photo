<!--
//Created by Album Builder Program Mon Sep 16 18:56:38 2024
var info_url   = "https://www.nga.gov/exhibitions/2024/paris-1874-impressionist-moment.html";
var title      = "Paris 1874 Exhibition";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2409nga/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "巴黎1874画展";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "2409nga_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "国家美术馆举办的巴黎1874印象派时刻画展。";
        this[1][2] = "克劳德·莫奈的《日出印象》。";
        this[1][3] = "爱德华·德泰尔的《第9胸甲骑兵团在莫斯布隆冲锋》。";
        this[1][5] = "欣赏奥古斯特·兰松的《巴泽耶战役死亡战线》。";
        this[1][6] = "球球展示他的侧手翻技巧。";
    }else{
        this[1][0] = "Paris 1874: The Impressionist Moment exhibition at National Gallery of Art.";
        this[1][2] = "Impression Sunrise by Claude Monet.";
        this[1][3] = "Charge of the 9th Regiment of Cuirassiers at Morsbronn by Édouard Detaille.";
        this[1][5] = "Morts en Ligne, La Bataille de Bazeilles by Auguste Lançon.";
        this[1][6] = "Nathan showing off his cartwheel skills.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
