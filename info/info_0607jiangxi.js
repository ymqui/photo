<!--
//Created by Album Builder Program Sun Aug 06 22:32:20 2006
var info_url   = "";
var title      = "My Parents' Trip to Jiangxi";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0607jiangxi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AnneSong.mid";
var midi_cr    = new Array("MusicOfTheNight","http://www.afcsat.com/midi_fav.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "江西看姑妈";
    cam_tit    = "佳能Powershot A80，400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "0607jiangxi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "两位姑妈。";
        this[1][1] = "妈和姑妈。";
        this[1][2] = "表姐夫。";
        this[1][3] = "爸和两位姑妈拜祭祖宗。";
        this[1][4] = "琦琦打水。";
        this[1][5] = "妈和琦琦在大余街头。";
        this[1][6] = "琦琦。";
        this[1][7] = "妈，姑妈，琦琦和表姐纳凉。";
        this[1][8] = "表哥的女儿和她可爱的儿子。";
        this[1][9] = "爸和大表姐夫喝酒。";
        this[1][10] = "爸妈和表姐夫。";
        this[1][11] = "大表姐和姐夫。";
        this[1][12] = "送别。";
        this[1][13] = "姐在赣州。";
        this[1][14] = "爸妈在赣江边。";
        this[1][15] = "琦琦。";
        this[1][16] = "妈和琦琦在火车上。";
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