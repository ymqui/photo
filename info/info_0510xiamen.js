<!--
//Created by Album Builder Program Mon Oct 03 23:31:32 2005
var info_url   = "http://www.66xm.com";
var title      = "Family Trip to Xiamen";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0510xiamen/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BalladePourAdeline.mid";
var midi_cr    = new Array("Dolphin's Dream","http://d21c.com/dolphinsdream/quietude.html");
 
if(window.usechinese){
    title      = "国庆游厦门";
    cam_tit    = "佳能Powershot A80, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<46;i++){
        this[0][i] = "0510xiamen_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "海边日出。";
        this[1][1] = "琦琦。";
        this[1][2] = "爸。";
        this[1][3] = "爷孙乐。";
        this[1][4] = "琦琦。";
        this[1][5] = "爸妈，姐，琦琦，和楠楠在轮渡。";
        this[1][6] = "从鼓浪屿看厦门岛。";
        this[1][7] = "姐和琦琦。";
        this[1][8] = "爸妈颇开心。";
        this[1][10] = "海底世界的锯鳐。";
        this[1][11] = "海底世界。";
        this[1][12] = "楠楠。";
        this[1][13] = "海豚。";
        this[1][14] = "海龙王。";
        this[1][15] = "梦一般的水母。";
        this[1][16] = "妈。";
        this[1][17] = "爸。";
        this[1][18] = "楠楠。";
        this[1][19] = "琦琦在林巧稚纪念馆。";
        this[1][20] = "琦琦学洗衣服。";
        this[1][21] = "楠楠。";
        this[1][22] = "楠楠上台和海豚表演。好象是被海豚亲了一下。";
        this[1][23] = "海豚表演。";
        this[1][24] = "琦琦在林巧稚纪念馆。";
        this[1][25] = "爸妈烧香拜佛。";
        this[1][27] = "江山石。";
        this[1][29] = "大榕树根。";
        this[1][30] = "爸妈和小红，作宝在一起。";
        this[1][31] = "小红。";
        this[1][32] = "妈怎么一人要拎两个包。";
        this[1][33] = "爸妈海边留影。";
        this[1][34] = "琦琦穿着漂亮的旗袍。";
        this[1][35] = "妈和宝贝孙儿。";
        this[1][36] = "喜欢小动物的琦琦。";
        this[1][37] = "小母女。";
        this[1][38] = "爸妈。";
        this[1][39] = "大母女。";
        this[1][40] = "妈。";
        this[1][41] = "童趣。";
        this[1][42] = "楠楠做酷状。";
        this[1][43] = "倍受外公疼爱的琦琦。";
        this[1][44] = "长胖了的作宝。";
    }else{
        this[1][0] = "Sorry, captions in Chinese only.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
