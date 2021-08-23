<!--
//Created by Album Builder Program Sat Jul 03 20:38:03 2021
var info_url   = "https://www.strasburgrailroad.com/";
var title      = "Strasburg Train Ride";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2107trainride/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "斯特拉斯堡火车之旅";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<24;i++){
        this[0][i] = "2107trainride_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "一早起来刷牙。";
        this[1][1] = "在蒸汽火车上。球球在来的路上流鼻血了。";
        this[1][8] = "跟火车司机挥手。";
        this[1][10] = "跟下一趟火车上的乘客挥手。";
        this[1][14] = "等着坐马车。";
        this[1][15] = "坐马车。";
        this[1][17] = "在斯特拉斯堡火车站和James哥哥和候子阿姨会面好开心。";
        this[1][18] = "在木头游乐火车里玩。";
        this[1][20] = "坐蒸汽小火车。";
        this[1][22] = "球球不喜欢太吵的汽笛声。";
    }else{
        this[1][0] = "Brushing teeth after getting up.";
        this[1][1] = "On the steam train. Nathan had a nosebleed on the way to the Strasburg Rail Road.";
        this[1][8] = "Waving hands to the train engineer.";
        this[1][10] = "Waving hands to a passing train.";
        this[1][14] = "Waiting for the horse carriage ride.";
        this[1][15] = "Taking a horse carriage ride.";
        this[1][17] = "So happy to meet James and Auntie Houzi at the Strasburg rail station.";
        this[1][18] = "Playing in the playground.";
        this[1][20] = "Taking a mini train ride.";
        this[1][22] = "Nathan doesn't like the loud steam whistle noise.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
