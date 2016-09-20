<!--
//Created by Album Builder Program Fri Nov 02 19:45:25 2007
var info_url   = "http://www.renaessance.com/lurchindex.html";
var title      = "2007 DC Zombie Lurch";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0710zombie/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Thriller.mid";
var midi_cr    = new Array("The midifiles download zone","http://web.tiscali.it/midi_land/midifiles/midifiles_dance/midifiles_dance.html");
 
if(window.usechinese){
    title      = "僵尸出动";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "0710zombie_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
    }else{
        this[1][10] = "Thriller dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
