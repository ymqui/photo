<!--
//Created by Album Builder Program Sat May 16 21:00:20 2009
var info_url   = "http://www.smithsonianeducation.org/heritage_month/apahm/apahm09/event_detail/asian_dance.html";
var title      = "An Evening of Asian Dance";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0905dance/";
//var dir        = csdpdir+"pics/0905dance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ReleaseMe.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "亚洲舞之夜";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0905dance_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "舞蹈晚会是来庆祝环太平洋亚洲传统节。";
        this[1][1] = "Nityalaya印度舞蹈学校表演的传统印度舞。";
        this[1][8] = "蒙古舞蹈。";
        this[1][10] = "蒙古萨满舞。";
        this[1][13] = "蒙古藏传佛教查玛（Tsam）舞蹈。";
        this[1][15] = "一位呼麦歌手在表演。由喉部发出的声音十分古怪迷人。";
    }else{
        this[1][0] = "The performance is to celebrate the Asian Pacific American Heritage Month.";
        this[1][1] = "Indian classical Odissi dance by Nrityalaya.";
        this[1][8] = "Mongolian dance performed by the Great Story of Mongols, Inc.";
        this[1][10] = "Mongolian Shaman dance.";
        this[1][13] = "Tsam, a mystic dance using masks, has origins in Buddhist tantric traditions.";
        this[1][15] = "A Khoomei(throat singing) singer playing the horse head fiddle.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
