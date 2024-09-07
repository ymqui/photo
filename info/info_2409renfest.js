<!--
//Created by Album Builder Program Sat Sep 07 10:55:50 2024
var info_url   = "https://rennfest.com";
var title      = "Maryland Renaissance Festival";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2409renfest/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "马里兰文艺复兴节";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "2409renfest_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "球球和朋友Jason。";
        this[1][1] = "球球和妈妈。";
        this[1][2] = "舞蹈。";
        this[1][3] = "看吹制玻璃。";
        this[1][4] = "看制作玻璃工艺品。";
        this[1][6] = "看制作玻璃工艺品。";
        this[1][7] = "观看表演。";
        this[1][8] = "滑稽的双人表演。";
        this[1][9] = "和国王和王后合影。";
        this[1][10] = "马背长矛比武。";
        this[1][11] = "球球和海盗活雕像。";
    }else{
        this[1][0] = "Nathan and Jason.";
        this[1][1] = "Nathan and Mom.";
        this[1][2] = "Dance.";
        this[1][3] = "Watching the glass blowing demonstration.";
        this[1][4] = "Watching the glasswork.";
        this[1][6] = "Watching the glasswork.";
        this[1][7] = "Watching a stage performance.";
        this[1][8] = "Fools named O and La!La! show.";
        this[1][9] = "Group photo with the King and Queen.";
        this[1][10] = "Joust.";
        this[1][11] = "Nathan with a living statute.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
