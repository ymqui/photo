<!--
var info_url   = "https://www.goddardschool.com/washington/gaithersburg-wind-river-lane-md";
var title      = "Halloween Costume Parade";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels; 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1910parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "万圣节游行";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素；20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "1910parade_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "戈达德托儿所一年一度的万圣节游行。";
        this[1][8] = "Burke老师领着球球班同学游行。";
        this[1][9] = "球球穿着托马斯火车套装。";
        this[1][10] = "我要妈妈。";
        this[1][11] = "Sinnokrot老师带着球球的同学。";
    }else{
        this[1][0] = "Goddard School's annual Halloween costume parade.";
        this[1][8] = "Nathan's class is led by Ms. Burke.";
        this[1][9] = "Nathan is wearing a Thomas train costume.";
        this[1][10] = "I want Mommy.";
        this[1][11] = "Ms. Sinnokrot.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
