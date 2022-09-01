<!--
//Created by Album Builder Program Wed Aug 31 19:42:05 2022
var info_url   = "";
var title      = "Trip to Canada";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2208canada/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "加拿大之行";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "2208canada_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在加拿大一边看尼亚加拉大瀑布。";
        this[1][1] = "在加拿大一边看尼亚加拉大瀑布。";
        this[1][2] = "在加拿大一边看尼亚加拉大瀑布。";
        this[1][3] = "尼亚加拉大瀑布的双层公共汽车。";
        this[1][4] = "安大略湖畔。";
        this[1][5] = "在宾夕法尼亚州的凯恩小镇吃冰淇淋。";
        this[1][6] = "在宾夕法尼亚州的凯恩小镇吃冰淇淋。";
        this[1][7] = "宾夕法尼亚州凯恩小镇的向日葵花田。";
        this[1][8] = "宾夕法尼亚州凯恩小镇的向日葵花田。";
    }else{
        this[1][0] = "Niagara Falls, Canada.";
        this[1][1] = "Niagara Falls, Canada.";
        this[1][2] = "Niagara Falls, Canada.";
        this[1][3] = "Niagara Falls, Canada.";
        this[1][4] = "Hamilton beach.";
        this[1][5] = "Country Pines Ice Cream Shop, Kane, Pennsylvania.";
        this[1][6] = "Enjoying a cup of ice cream at Country Pines Ice Cream Shop in Kane, Pennsylvania.";
        this[1][7] = "Sunflower fields in Kane, Pennsylvania.";
        this[1][8] = "Sunflower fields in Kane, Pennsylvania.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
