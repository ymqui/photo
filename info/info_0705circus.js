<!--
//Created by Album Builder Program Fri May 25 22:23:47 2007
var info_url   = "http://www.colebroscircus.com/";
var title      = "Cole Brothers Circus";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0705circus/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WalkInTheBlackForest.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "科尔兄弟马戏团";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<42;i++){
        this[0][i] = "0705circus_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "收门票的。";
        this[1][1] = "场地里卖爆玉米花的。";
        this[1][2] = "主持人兼歌手。";
        this[1][3] = "有了这些小丑，整个晚上都充满了笑声。";
        this[1][7] = "中国来的高空杂技队。";
        this[1][8] = "卖光纤灯的。";
        this[1][9] = "马上杂耍。";
        this[1][14] = "诙谐的蹦床表演。";
        this[1][15] = "精彩的高空接人。";
        this[1][19] = "小丑出来打扫卫生。";
        this[1][20] = "一只大蜘蛛。";
        this[1][21] = "可爱的小狗。";
        this[1][23] = "马术表演。";
        this[1][33] = "一群小丑做糕点，可想而知有多热闹。";
        this[1][34] = "这不就干上了。";
        this[1][41] = "炮膛飞人，前面有个大网接着。";
    }else{
        this[1][0] = "Gate keeper.";
        this[1][1] = "Popcorn vendor.";
        this[1][2] = "Announcer & singer.";
        this[1][3] = "The night is full of laughters because of these wonderful clowns.";
        this[1][7] = "Chinese acrobats.";
        this[1][15] = "Aerial daredevils.";
        this[1][19] = "The clowns are doing the cleaning.";
        this[1][20] = "A big spider!";
        this[1][21] = "Lovely poodles.";
        this[1][24] = "A beautiful horse.";
        this[1][41] = "Human cannon ball.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
