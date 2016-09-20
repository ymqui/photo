<!--
//Created by Album Builder Program Fri Apr 18 21:38:38 2008
var info_url   = "http://www.nationalcherryblossomfestival.org/";
var title      = "2008 Cherry Blossom Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0804cbfestival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "LaForzaDellaVita.mid";
var midi_cr    = new Array("Spanish and Latin MIDI Studio Consortium","http://www.midistudio.com/midi/LA_AZ.htm");
 
if(window.usechinese){
    title      = "2008樱花节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<21;i++){
        this[0][i] = "0804cbfestival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "日本来的艺妓表演。";
        this[1][8] = "东京玉川大学来的学生。";
        this[1][9] = "印度传统舞蹈。";
        this[1][12] = "西班牙弗拉门戈舞。";
        this[1][20] = "焰火。";
    }else{
        this[1][0] = "Geisha performance in the Sakura Matsuri Japanese Street Festival.";
        this[1][8] = "Students from Tamagawa University in Tokyo.";
        this[1][9] = "Traditional Indian dance performed by Natananjali School of Dance.";
        this[1][12] = "Flamenco dance performed by Furia Flamenca.";
        this[1][20] = "Fireworks show.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
