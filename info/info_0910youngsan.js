<!--
//Created by Album Builder Program Sun Oct 18 16:48:05 2009
var info_url   = "http://www.koreasociety.org/arts/performing_arts/the_sound_of_ecstasy_and_nectar_of_enlightenment.html";
var title      = "Young San Ceremony-Buddhist Ritual Song & Dance from Korea";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0910youngsan/";
//var dir        = csdpdir+"pics/0910youngsan/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Garden.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "韩国佛教仪式灵山斋";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "0910youngsan_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "灵山斋是韩国佛教里最具特色的仪式。";
        this[1][1] = "仪式包括梵呗和舞蹈。";
    }else{
        this[1][0] = "Young San Ceremony is the most elaborate of the Korean Buddhist rites.";
        this[1][1] = "The ceremony includes chanting and dances.";
        this[1][2] = "The ritual is performed by the Young San Preservation Group from Korea.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
