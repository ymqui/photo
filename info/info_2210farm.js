<!--
//Created by Album Builder Program Mon Sep 05 16:01:10 2022
var info_url   = "";
var title      = "Field Trip to Summers Farm";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2210farm/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "幼儿园Summers农场秋游";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<24;i++){
        this[0][i] = "2210farm_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Rochelle老师带领全班同学在Summers农场秋游。";
        this[1][1] = "坐拖拉机参观农场。";
        this[1][3] = "在南瓜学校了解南瓜知识。";
        this[1][4] = "看农场小动物。";
        this[1][5] = "看农场小动物。";
        this[1][6] = "看农场小动物。";
        this[1][7] = "看农场小动物。";
        this[1][8] = "在弹跳充气垫上玩。";
        this[1][9] = "在弹跳充气垫上玩。";
        this[1][12] = "骑马套索。";
        this[1][13] = "看Rochelle老师骑马套索。";
        this[1][14] = "吃午餐。";
        this[1][16] = "B老师和Rochelle老师。";
        this[1][19] = "在大南瓜房里面。";
        this[1][20] = "在南瓜地里摘南瓜。";
        this[1][21] = "在南瓜地里摘南瓜。";
    }else{
        this[1][0] = "Ms Rochelle with the class at Summer's Farm.";
        this[1][1] = "Wagon ride.";
        this[1][3] = "Learning about pumpkins in the pumpkin school.";
        this[1][4] = "Petting farm animals.";
        this[1][5] = "Watching pigs.";
        this[1][6] = "Watching pigs.";
        this[1][7] = "Petting a pig.";
        this[1][8] = "Jumping pillow.";
        this[1][9] = "Jumping pillow.";
        this[1][12] = "Riding and roping.";
        this[1][13] = "Watching Ms Rochelle ride and rope.";
        this[1][14] = "Lunch.";
        this[1][16] = "Ms B and Ms Rochelle.";
        this[1][19] = "Inside the giant pumpkin.";
        this[1][20] = "Picking a pumpkin in the pumpkin patch.";
        this[1][21] = "Picking a pumpkin in the pumpkin patch.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
