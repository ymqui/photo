<!--
//Created by Album Builder Program Mon Mar 17 20:29:13 2008
var info_url   = "http://www.pgparks.com/places/artsfac/publick.html";
var title      = "6th Annual World Dance Showcase";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0803dance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BecauseYouLovedMe.mid";
var midi_cr    = new Array("Quality Midi Files","http://server3.myebiz.com/chryspage/midi_files.html");
 
if(window.usechinese){
    title      = "世界舞蹈汇演";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "0803dance_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "印度舞蹈。";
        this[1][1] = "俄罗斯西伯利亚舞蹈。";
        this[1][3] = "大溪地舞蹈。";
        this[1][9] = "中国古典舞《踏歌》。";
        this[1][16] = "中国傣族舞蹈《赞哈》。";
    }else{
        this[1][0] = "Indian dance.";
        this[1][1] = "Russian dance: Siberian Medley.";
        this[1][3] = "Tahitian dance.";
        this[1][9] = "Chinese classical dance: Stamp in Melody.";
        this[1][16] = "Chinese Dai folk dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
