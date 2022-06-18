<!--
//Created by Album Builder Program Sat Jun 18 16:52:53 2022
var info_url   = "";
var title      = "NIST CCC PreK Graduation";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.1 Mega Pixels.";
var dir        = maindir+"pics/2206graduation/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "NIST托儿所学前班毕业典礼";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "2206graduation_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "蝴蝶教室的毕业典礼。";
        this[1][1] = "球球跟着Abrial老师从教室出来。";
        this[1][3] = "Abrial老师发言。";
        this[1][4] = "Abrial老师发言。";
        this[1][8] = "Penny老师。";
        this[1][9] = "Abrial老师和Penny老师给球球发毕业证书。";
        this[1][10] = "Abrial老师和Penny老师给球球发毕业证书。";
        this[1][12] = "毕业典礼上的节目表演。";
        this[1][15] = "跟妈妈跳舞。";
        this[1][17] = "班级合影。";
        this[1][18] = "班级合影。";
    }else{
        this[1][0] = "Butterfly classroom's Pre-K graduation ceremony.";
        this[1][1] = "Nathan follows Ms Abrial onto the stage.";
        this[1][3] = "Ms Abrial gives a speech to the graduates and parents.";
        this[1][4] = "Ms Abrial gives a speech to the graduates.";
        this[1][8] = "Ms Penny.";
        this[1][9] = "Nathan is receiving the diploma from Ms Abrial and Ms Penny.";
        this[1][10] = "Nathan is receiving the diploma from Ms Abrial and Ms Penny.";
        this[1][12] = "Singing and dancing to celebrate the graduation.";
        this[1][15] = "Dancing with Mommy.";
        this[1][17] = "Group photo.";
        this[1][18] = "Group photo.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
