<!--
//Created by Album Builder Program Wed May 28 19:32:42 2025
var info_url   = "";
var title      = "Visiting Colonial Williamsburg";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2505williamsburg/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "游威廉斯堡";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "2505williamsburg_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "球球和妈妈在弗吉尼亚州维廉斯堡的殖民历史区。";
        this[1][1] = "球球拍的爸爸和妈妈的照片。";
        this[1][2] = "和两位身穿历史服装的向导在威廉斯堡首府大厦前合影。";
        this[1][3] = "球球在威廉斯堡首府大厦前。";
        this[1][4] = "在一个很棒的导游带领下参观首府大厦。";
        this[1][5] = "在枪匠店里举一支步枪。";
        this[1][6] = "球球跟Arius和Jason一起玩。";
        this[1][7] = "球球和Jason玩小琴。";
        this[1][8] = "铁匠铺。";
        this[1][9] = "在铁匠铺里拉锻造风箱。";
        this[1][10] = "锡店。";
        this[1][11] = "马车。";
    }else{
        this[1][0] = "Nathan and Mommy at Colonial Williamsburg's historic area in Virginia.";
        this[1][1] = "Photo of Daddy and Mommy taken by Nathan.";
        this[1][2] = "Group photo with two guides wearing historic clothing in front of the Capitol of Colonial Williamsburg.";
        this[1][3] = "Nathan in front of the Capitol building.";
        this[1][4] = "Touring the Capitol building with an excellent guide.";
        this[1][5] = "Holding a rifle at the gunsmith's shop.";
        this[1][6] = "Arius, Jason, and Nathan playing sword fight.";
        this[1][7] = "Nathan and Jason playing a harp.";
        this[1][8] = "A blacksmith's shop.";
        this[1][9] = "Nathan trying out the forge bellows in the blacksmith's shop.";
        this[1][10] = "A tin shop.";
        this[1][11] = "A horse-drawn carriage.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
