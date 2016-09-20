<!--
//Created by Album Builder Program Mon Apr 06 18:45:06 2009
var info_url   = "";
var title      = "Room 201 Reunion in Yale.";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0904yale/";
//var dir        = csdpdir+"pics/0904yale/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Tal_vez.mid";
var midi_cr    = new Array("Luli's midi collection","	http://www.rhost.it/Luli/my_music.htm");
var blocksave  = false; 

if(window.usechinese){
    title      = "201室在耶鲁大学聚会";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<21;i++){
        this[0][i] = "0904yale_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "大班和老唐的女儿Jingjing.";
        this[1][1] = "Jingjing和妈妈。";
        this[1][3] = "小邓，老唐，大班，小傅，和老Q。";
        this[1][7] = "图书馆外。";
        this[1][8] = "图书馆里。";
        this[1][9] = "在耶鲁法学院。";
        this[1][10] = "图书馆里。";
        this[1][11] = "老唐。";
        this[1][12] = "大班。";
        this[1][13] = "小傅。";
        this[1][19] = "小邓。";
    }else{
        this[1][0] = "Ban and Jingjing.";
        this[1][1] = "Feng and Jingjing.";
        this[1][3] = "Deng, Tang, Ban, Fu, and Qiu.";
        this[1][7] = "In front of the library.";
        this[1][8] = "In the library.";
        this[1][9] = "At Yale law school.";
        this[1][10] = "Inside Sterling Memorial Library.";
        this[1][11] = "Tang.";
        this[1][12] = "Ban.";
        this[1][13] = "Fu.";
        this[1][19] = "Deng.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
