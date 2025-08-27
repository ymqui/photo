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
var pagelist   = [["qiqi","Qiqi's Photos","妈妈的照片"]];

document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
    this[0][i]    = "20241219_1";
    this[1][i++]  = (["4D ultrasound taken at 24 weeks","24周的四维彩超"])[cn_ind];
    this[0][i]    = "20250403_1";
    this[1][i++]  = (["Pipi right out of the hospital nursury, 3.1 Kg in weight and 50 cm in length","刚出产房，重3.1公斤，长50cm"])[cn_ind];
    this[0][i]    = "20250409_1";
    this[1][i++]  = (["Taking a bath for the first time","第一次洗澡"])[cn_ind];
    this[0][i]    = "20250409_2";
    this[1][i++]  = (["Cutie boy","可爱的皮皮"])[cn_ind];
    this[0][i]    = "20250411_1";
    this[1][i++]  = (["Yawning","困了"])[cn_ind];
    this[0][i]    = "20250414_1";
    this[1][i++]  = (["Taking a nap","打个盹"])[cn_ind];
    this[0][i]    = "20250414_2";
    this[1][i++]  = (["Swimming for the first time","第一次游泳"])[cn_ind];
    this[0][i]    = ["20250417_1","20250417_2"];
    this[1][i++]  = (["Studio photoshoot","第17天拍的艺术照"])[cn_ind];
    this[0][i]    = ["20250417_3","20250417_4"];
    this[1][i++]  = (["Studio photoshoot","第17天拍的艺术照"])[cn_ind];
    this[0][i]    = "20250610_1";
    this[1][i++]  = (["Pipi can raise his head very well now","抬头很稳了"])[cn_ind];
    this[0][i]    = "20250614_1";
    this[1][i++]  = (["Taking a nap","打个盹"])[cn_ind];
    this[0][i]    = "20250629_1";
    this[1][i++]  = (["Having a fever for the first time","第一次发烧生病了"])[cn_ind];
    this[0][i]    = "20250720_1";
    this[1][i++]  = (["Taking a walk in the stroller","小区溜达溜达"])[cn_ind];
    this[0][i]    = "20250723_1";
    this[1][i++]  = (["Cutie boy","可爱的皮皮"])[cn_ind];
    this[0][i]    = "20250810_1";
    this[1][i++]  = (["Cutie boy","可爱的皮皮"])[cn_ind];
    this[0][i]    = ["20250813_1","20250813_2","20250813_3"];
    this[1][i++]  = (["Cutie boy","可爱的皮皮"])[cn_ind];
    this[0][i]    = ["20250820_1","20250820_2","20250820_3"];
    makeface[j++] = i;
    this[1][i++]  = (["Taking a bath","洗澡很开心"])[cn_ind];
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
