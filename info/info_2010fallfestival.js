<!--
//Created by Album Builder Program Fri Oct 30 13:47:23 2020
var info_url   = "";
var title      = "Goddard School 2020 Fall Festival";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2010fallfestival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "戈达德托儿所2020年金秋节";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<15;i++){
        this[0][i] = "2010fallfestival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Sciannella老师领着大家出来。";
        this[1][1] = "看到爸爸高兴地跳起来。";
        this[1][2] = "伸手让Morales老师贴画。";
        this[1][3] = "和妈妈一起。";
        this[1][4] = "和妈妈一起。";
        this[1][5] = "好帅的火车司机。";
        this[1][6] = "和妈妈一起。";
        this[1][7] = "和朋友Brayden。";
        this[1][8] = "和妈妈一起。";
        this[1][10] = "和朋友Averie。";
        this[1][11] = "和朋友Alex。";
        this[1][12] = "和Burke老师。";
        this[1][13] = "闻小葫芦。";
        this[1][14] = "好帅的火车司机。";
    }else{
        this[1][0] = "Coming out of the gate.";
        this[1][1] = "Jumping with joy.";
        this[1][2] = "Getting a hand paint from Ms. Morales.";
        this[1][3] = "With Mommy.";
        this[1][4] = "With Mommy.";
        this[1][5] = "Handsome train engineer.";
        this[1][6] = "With Mommy.";
        this[1][7] = "With friend Brayden.";
        this[1][8] = "With Mommy.";
        this[1][10] = "With friend Averie.";
        this[1][11] = "With friend Alex.";
        this[1][12] = "With Ms. Burke.";
        this[1][13] = "Smelling a gourd.";
        this[1][14] = "Handsome train engineer.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
