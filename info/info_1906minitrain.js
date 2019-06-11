<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "";
var title      = "Wheaton Miniature Train Ride";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1906minitrain/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
//var midi_cr    = new Array("","");
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "惠顿公园坐小火车";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<8;i++){
        this[0][i] = "1906minitrain_"+(i+1).toString();
        this[1][i] = "";
    }
    i = 0;
    this[1][i++] = (["Waiting for the train ride.","等着上小火车。"])[cn_ind];
    this[1][i++] = (["Look, the carousel is over there.","看，那边是旋转木马。"])[cn_ind];
    this[1][i++] = (["Nathan starts to like the miniature train.","球球慢慢开始喜欢坐小火车。"])[cn_ind];
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
