<!--
var info_url   = "https://www.goddardschool.com/washington/gaithersburg-wind-river-lane-md";
var title      = "Halloween Costume Parade";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels; 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1810parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
 
if(window.usechinese){
    title      = "万圣节游行";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素；20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1810parade_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "戈达德托儿所一年一度的万圣节游行。";
        this[1][2] = "球球扮成小尼莫鱼。";
        this[1][3] = "球球的同学。";
        this[1][4] = "妈妈向球球挥手。";
    }else{
        this[1][0] = "Goddard School's annual Halloween costume parade.";
        this[1][2] = "Nathan is a cute little Nemo.";
        this[1][3] = "Nathan's classmates.";
        this[1][4] = "Mommy is waving to Nathan.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
