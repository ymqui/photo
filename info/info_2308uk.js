<!--
//Created by Album Builder Program Wed Aug 16 06:01:17 2023
var info_url   = "";
var title      = "Vacationing in the United Kingdom";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2308uk/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "英国度假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<36;i++){
        this[0][i] = "2308uk_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "伦敦地铁。";
        this[1][1] = "参观大英博物馆。";
        this[1][2] = "大英博物馆的镇馆之宝罗塞塔石碑。";
        this[1][3] = "参观大英博物馆。";
        this[1][4] = "维纳斯雕像。";
        this[1][5] = "参观大英博物馆。";
        this[1][7] = "参观大英博物馆。";
        this[1][8] = "中国清朝地图。";
        this[1][9] = "参观大英博物馆。";
        this[1][10] = "参观大英博物馆。";
        this[1][11] = "乘坐伦敦的双层公共汽车。";
        this[1][12] = "西敏的大本钟。";
        this[1][13] = "西敏桥上看伦敦眼。";
        this[1][14] = "西敏大教堂。";
        this[1][15] = "白金汉宫。";
        this[1][16] = "游温莎堡。";
        this[1][17] = "巴斯的罗马浴场。";
        this[1][18] = "参观罗马浴场。";
        this[1][19] = "巨石阵。";
        this[1][20] = "游巨石阵。";
        this[1][21] = "在帕丁顿火车站看帕丁顿小熊。";
        this[1][22] = "在帕丁顿火车站看帕丁顿小熊。";
        this[1][23] = "参观牛津大学的基督堂学院。";
        this[1][24] = "参观牛津大学的基督堂学院。";
        this[1][25] = "参观牛津大学的基督堂学院。";
        this[1][26] = "参观牛津大学的基督堂学院。";
        this[1][27] = "参观牛津大学的基督堂学院。";
        this[1][28] = "参观牛津大学的基督堂学院。";
        this[1][29] = "伦敦卡姆登区的一幅壁画。";
        this[1][30] = "伦敦卡姆登市场。";
        this[1][31] = "游多佛白崖。";
        this[1][32] = "游多佛白崖。";
        this[1][33] = "游坎特伯雷。";
        this[1][34] = "坐船游剑桥大学。";
        this[1][35] = "剑桥大学的三一学院。";
    }else{
        this[1][0] = "London underground.";
        this[1][1] = "Visiting the British Museum.";
        this[1][2] = "Rosetta Stone in the British Museum.";
        this[1][3] = "Visiting the British Museum.";
        this[1][4] = "Crouching Venus statute in the British Museum.";
        this[1][5] = "Visiting the British Museum.";
        this[1][7] = "Visiting the British Museum.";
        this[1][8] = "Map of China in Qing Dynasty.";
        this[1][9] = "Visiting the British Museum.";
        this[1][10] = "Visiting the British Museum.";
        this[1][11] = "Riding the double-decker bus in London.";
        this[1][12] = "Big Ben in Westminster.";
        this[1][13] = "London Eye.";
        this[1][14] = "Westminster Abbey.";
        this[1][15] = "Buckingham Palace.";
        this[1][16] = "Winsor Castle.";
        this[1][17] = "Roman Bath.";
        this[1][18] = "Visiting Roman Bath.";
        this[1][19] = "Stonehenge.";
        this[1][20] = "Visiting Stonehenge.";
        this[1][21] = "Paddington Bear in Paddington Station.";
        this[1][22] = "Paddington Bear in Paddington Station.";
        this[1][23] = "Visiting Christ Church in Oxford University.";
        this[1][24] = "Visiting Christ Church in Oxford University.";
        this[1][25] = "Visiting Christ Church in Oxford University.";
        this[1][26] = "Visiting Christ Church in Oxford University.";
        this[1][27] = "Visiting Christ Church in Oxford University.";
        this[1][28] = "Visiting Christ Church in Oxford University.";
        this[1][29] = "A wall painting in Camden Town, London.";
        this[1][30] = "Camden Town market.";
        this[1][31] = "Dover White Cliff.";
        this[1][32] = "Dover White Cliff.";
        this[1][33] = "Visiting Canterbury.";
        this[1][34] = "Taking a punting tour in Cambridge University.";
        this[1][35] = "Trinity College in Cambridge University.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
