<!--
var info_url   = "";
var title      = (["Pipi's Photos","皮皮的照片"])[cn_ind];
var dir        = maindir+"pics/pipi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();
var url        = "";
homeurl        = homeurl+"showphoto.html?pipi";
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
    this[0][i]    = "20250810_1";
    this[1][i++]  = (["Cutie boy","可爱的皮皮"])[cn_ind];
    this[0][i]    = ["20250813_1","20250813_2","20250813_3"];
    this[1][i++]  = (["Cutie boy","可爱的皮皮"])[cn_ind];
    this[0][i]    = ["20250820_1","20250820_2","20250820_3"];
    makeface[j++] = i;
    this[1][i++]  = (["Taking a bath","皮皮洗澡"])[cn_ind];
    this[0][i]    = ["20250822_1","20250822_2","20250822_3"];
    this[1][i++]  = (["With Grandma","和外婆在一起"])[cn_ind];
    this[0][i]    = ["20250822_4","20250822_5","20250822_6"];
    this[1][i++]  = (["With Grandma","和外婆在一起"])[cn_ind];

    adddate(this);
}

//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
