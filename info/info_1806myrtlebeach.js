<!--
//Created by Album Builder Program Mon Mar 04 20:08:58 2019
var info_url   = "";
var title      = "Myrtle Beach Vacation";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1806myrtlebeach/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "美特尔海滩度假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1806myrtlebeach_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在路上。";
        this[1][1] = "南卡罗来纳州美特尔海滩。";
        this[1][2] = "南卡罗来纳州美特尔海滩。";
        this[1][3] = "南卡罗来纳州美特尔海滩。";
        this[1][4] = "南卡罗来纳州美特尔海滩。";
        this[1][5] = "南卡罗来纳州美特尔海滩。";
    }else{
        this[1][0] = "On the road.";
        this[1][1] = "Myrtle Beach, South Carolina.";
        this[1][2] = "Myrtle Beach, South Carolina.";
        this[1][3] = "Myrtle Beach, South Carolina.";
        this[1][4] = "Myrtle Beach, South Carolina.";
        this[1][5] = "Myrtle Beach, South Carolina.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
