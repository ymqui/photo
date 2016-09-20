<!--
//Created by Album Builder Program Mon May 15 23:26:01 2006
var info_url   = "http://www.sasmm.com/celtic_festival.htm";
var title      = "7th Annual Frederick Celtic Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0605celtic/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ScotsWhaHae.mid";
var midi_cr    = new Array("Scottish Folk & Traditional Midi","http://www.laurasmidiheaven.com/International/WorldMusicScottish.shtml");
 
if(window.usechinese){
    title      = "第七届佛里德里克市凯尔特人节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<52;i++){
        this[0][i] = "0605celtic_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "开幕式上的麦克米兰风笛乐队。";
        this[1][1] = "麦克米兰风笛乐队。";
        this[1][2] = "佛里德里克市苏格兰风笛鼓乐队。";
        this[1][3] = "佛里德里克市苏格兰风笛鼓乐队。";
        this[1][4] = "苏格兰舞蹈。";
        this[1][5] = "苏格兰舞蹈。";
        this[1][6] = "苏格兰舞蹈。";
        this[1][7] = "苏格兰舞蹈。";
        this[1][8] = "苏格兰舞蹈。";
        this[1][9] = "苏格兰舞蹈。";
        this[1][10] = "苏格兰舞蹈。";
        this[1][11] = "苏格兰舞蹈。";
        this[1][12] = "苏格兰舞蹈。";
        this[1][13] = "Rant & Roar 三人乐队。";
        this[1][14] = "Rant & Roar 三人乐队。";
        this[1][15] = "Albannach，一个苏格兰民俗摇滚乐队。";
        this[1][16] = "Albannach。";
        this[1][17] = "Albannach。";
        this[1][18] = "Albannach。";
        this[1][19] = "扔重物比赛。";
        this[1][20] = "甩苏格兰锤子比赛。";
        this[1][21] = "甩苏格兰锤子比赛。";
        this[1][22] = "抛木桩比赛。";
        this[1][23] = "抛木桩比赛。";
        this[1][24] = "抛木桩比赛。";
        this[1][25] = "抛草袋比赛之前的练习。";
        this[1][26] = "抛草袋比赛之前的练习。";
        this[1][27] = "抛草袋比赛。";
        this[1][28] = "抛草袋比赛。";
        this[1][29] = "抛草袋比赛。";
        this[1][30] = "抛草袋比赛。";
        this[1][31] = "抛草袋比赛。";
        this[1][32] = "观众。";
    }else{
        this[1][0] = "MacMillan Pipe Band in the opening ceremony.";
        this[1][1] = "MacMillan Pipe Band.";
        this[1][2] = "Frederick Scottish Pipes and Drums.";
        this[1][3] = "Frederick Scottish Pipes and Drums.";
        this[1][4] = "Scottish dance.";
        this[1][5] = "Scottish dance.";
        this[1][6] = "Scottish dance.";
        this[1][7] = "Scottish dance.";
        this[1][8] = "Scottish dance.";
        this[1][9] = "Scottish dance.";
        this[1][10] = "Scottish dance.";
        this[1][11] = "Scottish dance.";
        this[1][12] = "Scottish dance.";
        this[1][13] = "Rant & Roar, a three-man band.";
        this[1][14] = "Rant & Roar.";
        this[1][15] = "Albannach, an energetic Scottish pipes & drums band.";
        this[1][16] = "Albannach.";
        this[1][17] = "Albannach.";
        this[1][18] = "Albannach.";
        this[1][19] = "Scottish highland game: Weights for Distance.";
        this[1][20] = "Scottish highland game: Scottish Hammer.";
        this[1][21] = "Scottish highland game: Scottish Hammer.";
        this[1][22] = "Scottish highland game: Caber Toss.";
        this[1][23] = "Scottish highland game: Caber Toss.";
        this[1][24] = "Scottish highland game: Caber Toss.";
        this[1][25] = "Scottish highland game: Sheaf Toss.";
        this[1][26] = "Scottish highland game: Sheaf Toss.";
        this[1][27] = "Scottish highland game: Sheaf Toss.";
        this[1][28] = "Scottish highland game: Sheaf Toss.";
        this[1][29] = "Scottish highland game: Sheaf Toss.";
        this[1][30] = "Scottish highland game: Sheaf Toss.";
        this[1][31] = "Scottish highland game: Sheaf Toss.";
        this[1][32] = "Audience.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->