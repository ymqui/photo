<!--
//Created by Album Builder Program Sun Jan 29 23:48:27 2006
var info_url   = "http://www.shoplakeforest.com/static/doc_040452.jsp";
var title      = "Spring Festival Celebration in Lakeforest Mall, Gaithersburg";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0601festival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WangJiangNan.mid";
var midi_cr    = new Array("中华古韵","http://bbs.calsunshine.info/sutra48517.html");
 
if(window.usechinese){
    title      = "盖城湖林商场春节表演";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素, 300D相机, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<41;i++){
        this[0][i] = "0601festival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "湖林商场张灯结彩迎新春。";
        this[1][1] = "商场内在春节这天有各种表演。";
        this[1][2] = "韩国的茶道表演。";
        this[1][3] = "韩国的茶道表演。";
        this[1][4] = "韩国的茶道表演。";
        this[1][5] = "韩国的茶道表演。";
        this[1][6] = "韩国的茶道表演。";
        this[1][7] = "韩国的茶道表演。";
        this[1][8] = "跆拳道表演。";
        this[1][9] = "剑道表演。";
        this[1][12] = "古筝表演。";
        this[1][13] = "古筝表演。";
        this[1][14] = "古筝表演。";
        this[1][15] = "小古筝手。";
        this[1][16] = "古筝手。";
        this[1][17] = "古筝表演。";
        this[1][18] = "古筝手。";
        this[1][19] = "古筝表演。";
        this[1][20] = "舞狮。";
        this[1][21] = "舞狮。";
        this[1][22] = "舞狮。";
        this[1][23] = "舞狮。";
        this[1][24] = "舞狮。";
        this[1][25] = "舞狮。";
        this[1][26] = "绸扇舞。";
        this[1][27] = "绸扇舞。";
        this[1][28] = "小演员。";
        this[1][29] = "古筝表演。";
        this[1][30] = "古筝表演。";
        this[1][31] = "古筝表演。";
        this[1][32] = "管弦乐队。";
        this[1][33] = "管弦乐队。";
        this[1][34] = "管弦乐队。";
        this[1][35] = "管弦乐队。";
        this[1][36] = "管弦乐队。";
        this[1][37] = "管弦乐队。";
        this[1][40] = "Happy New Year!";
        this[1][40] = "新年快乐！";
    }else{
        this[1][0] = "The Lakeforest Mall is beautifully decorated to celebrate the Chinese Spring Festival.";
        this[1][1] = "The celebration includes live performances from the Asian comunity.";
        this[1][2] = "The Korean tea ceremony.";
        this[1][3] = "The Korean tea ceremony.";
        this[1][4] = "The Korean tea ceremony.";
        this[1][5] = "The Korean tea ceremony.";
        this[1][6] = "The Korean tea ceremony.";
        this[1][7] = "The Korean tea ceremony.";
        this[1][8] = "Tae Kwon Do performance.";
        this[1][9] = "Sword fight demonstration.";
        this[1][12] = "Guzheng performance.";
        this[1][13] = "Guzheng performance.";
        this[1][14] = "Guzheng performance.";
        this[1][15] = "A young Guzheng player.";
        this[1][16] = "Guzheng player.";
        this[1][17] = "Guzheng performance.";
        this[1][18] = "Guzheng player.";
        this[1][19] = "Guzheng performance.";
        this[1][20] = "Lion dance.";
        this[1][21] = "Lion dance.";
        this[1][22] = "Lion dance.";
        this[1][23] = "Lion dance.";
        this[1][24] = "Lion dance.";
        this[1][25] = "Lion dance.";
        this[1][26] = "Duet folk dance.";
        this[1][27] = "Duet folk dance.";
        this[1][28] = "Solo dance.";
        this[1][29] = "Guzheng performance.";
        this[1][30] = "Guzheng performance.";
        this[1][31] = "Guzheng performance.";
        this[1][32] = "Orchestra.";
        this[1][33] = "Orchestra.";
        this[1][34] = "Orchestra.";
        this[1][35] = "Orchestra.";
        this[1][36] = "Orchestra.";
        this[1][37] = "Orchestra.";
        this[1][40] = "Happy New Year!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->