<!--
//Created by Album Builder Program Sat Aug 18 22:28:26 2007
var info_url   = "http://www.mcagfair.com";
var title      = "Montgomery County Agricultural Fair";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0708mcagfair/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Liebestraum.mid";
var midi_cr    = new Array("Ross Menoher","http://www2.spindle.net/rmenoher/midi.htm");
 
if(window.usechinese){
    title      = "马里兰州蒙高马利郡农业大会";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "0708mcagfair_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "“城市阳光下的乡村乐趣”。";
        this[1][4] = "小猪赛跑。";
        this[1][9] = "鸭子赛跑。";
        this[1][10] = "大脚怪兽车。";
        this[1][28] = "鲜榨柠檬汁。";
        this[1][29] = "漏斗糕。";
    }else{
        this[1][0] = '"Country Fun in the City Sun"'+".";
        this[1][4] = "Pig race.";
        this[1][9] = "Duck race.";
        this[1][10] = "Monster truck.";
        this[1][28] = "Lemonade stand.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
