<!--
//Created by Album Builder Program Mon Jul 02 21:51:11 2007
var info_url   = "http://www.folklife.si.edu/index.html";
var title      = "2007 Smithsonian Folklife Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0706folklife/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Everyday.mid";
var midi_cr    = new Array("Moose Midi","http://www.aelgviskare.net/midi/midi.htm");
 
if(window.usechinese){
    title      = "2007民俗文化节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<33;i++){
        this[0][i] = "0706folklife_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "柬埔寨舞前的准备：扎裙子。";
        this[1][1] = "还得上香。";
        this[1][3] = "舞蹈是根据民间故事改编的，讲一条鱼龙的传说。";
        this[1][6] = "云南来的表演者忙里偷闲。";
        this[1][7] = "云南普米族歌手茸芭莘那。";
        this[1][8] = "云南怒族歌手Na Da Sha。";
        this[1][9] = "藏族乐师。";
        this[1][11] = "一位巫师。";
        this[1][14] = "云南花灯舞蹈团。";
        this[1][21] = "泰国古兰纳舞蹈。";
        this[1][27] = "泰国傈僳族妇女。";
        this[1][28] = "越南戏曲表演。";
        this[1][31] = "越南民族舞蹈。";
    }else{
        this[1][0] = "A Cambodian dancer gets her skirt wrapped before performing a Makara dance.";
        this[1][1] = "Each of the dancers must light incense and pray.";
        this[1][3] = "The dance is based on the story of a fish dragon.";
        this[1][6] = "A fiddler from Yunnan enjoys a quiet moment.";
        this[1][7] = "Yunnan Pumi singer Rongba Xinna.";
        this[1][8] = "Yunnan Nu singer Na Dasha.";
        this[1][9] = "Tibetan musicians.";
        this[1][11] = "A sorcerer.";
        this[1][14] = "Flower Lantern Troupe from Yunnan, China.";
        this[1][21] = "Thailand Lanna dancer.";
        this[1][27] = "A Lisu woman from Thailand.";
        this[1][28] = "Vietnam Hat Boi opera.";
        this[1][31] = "Vietnam Khmer Robam dance drama.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
