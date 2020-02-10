<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "http://wghshow.com/";
var title      = (["Model Train Show","火车模型展"])[cn_ind];
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = (["Canon SLR EOS 6D, 20.2 Mega Pixels.","佳能单镜头反光式6D相机，2020万像素。"])[cn_ind];
var dir        = maindir+"pics/2002trainshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
//var midi_cr    = new Array("","");
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "2002trainshow_"+(i+1).toString();
    }
    i = 0;
    this[1][i++]  = (["Playing with the train table.","玩小火车。"])[cn_ind];
    this[1][i++]  = (["Colorful model trains.","漂亮的模型火车。"])[cn_ind];
    this[1][i++]  = (["Looking at model trains.","看模型火车。"])[cn_ind];
    this[1][i++]  = (["Thomas model trains.","托马斯模型火车。"])[cn_ind];
    this[1][i++]  = (["Looking at model trains.","看模型火车。"])[cn_ind];
    this[1][i++]  = (["Looking at model trains.","看模型火车。"])[cn_ind];
    this[1][i++]  = (["Looking at model trains.","看模型火车。"])[cn_ind];
    this[1][i++]  = (["Looking at model trains.","看模型火车。"])[cn_ind];
    this[1][i++]  = (["Playing on the wooden train tracks.","在木制火车道上玩小火车。"])[cn_ind];
    this[1][i++]  = (["Ridng the Thomas train.","坐托马斯火车。"])[cn_ind];
    this[1][i++]  = (["Ridng the Thomas train.","坐托马斯火车。"])[cn_ind];
    this[1][i++]  = (["Ridng the Thomas train.","坐托马斯火车。"])[cn_ind];
    this[1][i++]  = (["Looking at model trains.","看模型火车。"])[cn_ind];
    this[1][i++]  = (["Looking at model trains.","看模型火车。"])[cn_ind];
    this[1][i++]  = (["Practicing wheel spinning.","练习转动手摇盘。"])[cn_ind];
    this[1][i++]  = (["Riding the handcar.","坐手动车。"])[cn_ind];
    this[1][i++]  = (["Having a good time riding the handcar.","坐手动车好开心。"])[cn_ind];
    this[1][i++]  = (["Having a good time riding the handcar.","坐手动车好开心。"])[cn_ind];
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
