<!--
//Created by Album Builder Program Tue Feb 08 18:31:55 2005
var info_url   = "";
var title      = "Yun and Huigang's wedding";
var cam_img    = "camera_nikon_d70.jpg";
var cam_tit    = "Nikon D70 SLR, 6.1 Mega Pixels.";
var dir        = maindir+"pics/0501wedding/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CheSara.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "汇钢和刘韵的婚礼";
    cam_tit    = "尼康单镜头反光式 D70， 610万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<71;i++){
        this[0][i] = "0501wedding__"+(i+1).toString();
        this[1][i] = "";
    }
}

//web counter info
var sc_project   = 591863;
var sc_partition = 4;
var sc_invisible = 1;
var sc_security  = "dabcbc4e";
//-->
