<!--
//Created by Album Builder Program Fri Dec 30 15:57:53 2022
var info_url   = "https://dinosaurworld.com/florida/";
var title      = "Dinosaur World";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/2212dino/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "参观恐龙世界";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "2212dino_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "恐龙世界是佛罗里达州坦帕市附近的一个主题公园，拥有数百只真实大小的恐龙。";
        this[1][1] = "双脊龙。";
        this[1][3] = "戟龙。";
        this[1][4] = "霸王龙。";
        this[1][5] = "腕龙。";
        this[1][6] = "霸王龙。";
        this[1][7] = "恐爪龙。";
        this[1][8] = "恐爪龙。";
        this[1][9] = "副栉龙。";
        this[1][10] = "棘龙。";
        this[1][12] = "棘龙和腕龙。";
        this[1][14] = "双脊龙。";
        this[1][15] = "雷龙。";
        this[1][16] = "高棘龙。";
        this[1][17] = "重龙。";
        this[1][19] = "三角龙。";
    }else{
        this[1][0] = "Dinosaur world is a theme park featuring hundreds of life size dinosaurs.";
        this[1][1] = "Dilophosaurus.";
        this[1][3] = "Styracosaurus.";
        this[1][4] = "T-Rex.";
        this[1][5] = "Brachiosaurus.";
        this[1][6] = "T-Rex.";
        this[1][7] = "Deinonychus.";
        this[1][8] = "Deinonychus.";
        this[1][9] = "Parasaurolophus.";
        this[1][10] = "Spinosaurus.";
        this[1][12] = "Spinosaurus and Brachiosaurus.";
        this[1][14] = "Dilophosaurus.";
        this[1][15] = "Brontosaurus.";
        this[1][16] = "Acrocanthosaurus.";
        this[1][17] = "Barosaurus.";
        this[1][19] = "Triceratops.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
