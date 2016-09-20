<!--
//Created by Album Builder Program Thu Feb 02 18:51:32 2006
var info_url   = "";
var title      = "Family dinner at my Sister's place";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0601chunjie/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AndILoveYouSo.mid";
var midi_cr    = new Array("Yahoo Group","http://groups.yahoo.com/group/americasmostbeautifulmusic/");
 
if(window.usechinese){
    title      = "团团圆圆吃火锅";
    cam_tit    = "佳能Powershot A80, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "0601chunjie_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "琦琦准备练习古筝。";
        this[1][1] = "楠楠用压岁钱买的小狗。";
        this[1][2] = "下火锅的佳肴。";
        this[1][3] = "哥和琦琦。";
        this[1][4] = "全家人干杯。";
        this[1][5] = "楠楠现在也是个小大人了，但在嫂嫂眼里他依然是个小孩子。";
        this[1][6] = "爸爸和妈妈。";
        this[1][7] = "姐给妈倒可乐。";
        this[1][8] = "爸妈干杯。";
        this[1][9] = "琦琦吸粉丝。";
    }else{
        this[1][0] = "Captions in Chinese only.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
