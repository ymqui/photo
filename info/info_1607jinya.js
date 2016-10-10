<!--
//Created by Album Builder Program Mon Oct 10 12:51:13 2016
var info_url   = "http://jinya-ramenbar.com/";
var title      = "Jinya Ramen Bar";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1607jinya/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "阵拉面";
    cam_tit    = "佳能单镜头反光式300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1607jinya_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "割包。";
        this[1][2] = "猪骨黑汤拉面。";
        this[1][4] = "辣味鸡汤拉面。";
    }else{
        this[1][1] = "Bun.";
        this[1][2] = "Tonkotsu black ramen.";
        this[1][4] = "Spicy chicken ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
