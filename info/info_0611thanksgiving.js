<!--
//Created by Album Builder Program Sun Nov 26 11:32:48 2006
var info_url   = "http://www.mcbsg.org/";
var title      = "Happy Thanksgiving";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0611thanksgiving/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "OnlyWish.mid";
var midi_cr    = new Array("Jalal Ali","http://www.jalalmusic.com");
 
if(window.usechinese){
    title      = "感恩节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<39;i++){
        this[0][i] = "0611thanksgiving_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "查经班歌唱组。";
        this[1][1] = "好吃的火鸡肉。";
        this[1][3] = "香喷喷的火鸡。";
        this[1][4] = "饭前祷告。";
        this[1][14] = "小韵在解答有关感恩节的测试题。";
        this[1][17] = "在小韵和汇钢家继续吃。";
        this[1][33] = "小韵在表扬一个单词。";
    }else{
        this[1][0] = "Choir.";
        this[1][2] = "Huigang.";
        this[1][4] = "Pray.";
        this[1][14] = "Quiz about Thanksgiving.";
        this[1][17] = "Dinner at Yun and Huigang's home.";
        this[1][33] = "Yun acting out a strange word.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
