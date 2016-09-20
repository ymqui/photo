<!--
//Created by Album Builder Program Sun Jan 28 18:41:52 2007
var info_url   = "http://www.unitedforpeace.org/article.php?id=3489";
var title      = "Anti-war Protest in Washington DC";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0701protest/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "LayLadyLay.mid";
var midi_cr    = new Array("Bod Dylan Midi","http://www.geocities.com/SoHo/2615/bobdylanmidi.html");
 
if(window.usechinese){
    title      = "在华盛顿的特大反战示威游行";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<56;i++){
        this[0][i] = "0701protest_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这次反战示威游行是由和平联盟组织的。";
        this[1][1] = "示威者先在国会山前集会讨伐布什的伊拉克战争。";
        this[1][3] = "炸弹可以笨一点，总统一定要聪明。";
        this[1][5] = '扮演被长期关押的“恐怖分子”。';
        this[1][7] = "老太太也很不满这个战争。";
        this[1][10] = "伊战升级？走错路啦。";
        this[1][11] = '“弹劾布什。”';
        this[1][12] = "爱撒谎的布什。";
        this[1][14] = '“相信物理，不要信布什。”';
        this[1][15] = "死亡士兵的名单。";
        this[1][17] = "博物馆前也坐满了等待游行的示威者。";
        this[1][20] = "看什么呢？";
        this[1][21] = "一面和平大旗。";
        this[1][23] = "民权领袖杰西.杰克逊在游行队伍的前列。";
        this[1][24] = "皇帝的新装。";
        this[1][28] = "布什和切尼是双头魔怪。";
        this[1][53] = "免费的茶摊。";
    }else{
        this[1][0] = "The anti-war protest was organized by United for Peace.";
        this[1][23] = "Civil rights activist Jesse Jackson was among the leaders of the march.";
        this[1][41] = "Any excuse will serve a tyrant.-Aesop";
        this[1][53] = "Tea stand.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
