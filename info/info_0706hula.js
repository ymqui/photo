<!--
//Created by Album Builder Program Wed Jun 13 21:57:52 2007
var info_url   = "http://www.halauoaulani.org/home.htm";
var title      = "Hula Dance by Halau O`Aulani";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0706hula/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WildTheme.mid";
var midi_cr    = new Array("Moose Midi","http://www.aelgviskare.net/midi/midi.htm");
 
if(window.usechinese){
    title      = "Halau O`Aulani夏威夷舞蹈学校的演出";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<36;i++){
        this[0][i] = "0706hula_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "乐队阿喽哈男孩给演出伴奏。";
        this[1][1] = "学校的舞蹈老师。";
        this[1][2] = "祷告一下。";
        this[1][3] = "合影。";
        this[1][4] = "原形毕露。";
        this[1][34] = "欢迎来美丽的夏威夷岛。";
        this[1][35] = "观众。";
    }else{
        this[1][0] = "Aloaha Boys.";
        this[1][1] = "Kumu Hula Keith.";
        this[1][2] = "Prayer.";
        this[1][3] = "Group photo.";
        this[1][4] = "Fun photo.";
        this[1][34] = "Welcome to the beautiful Hawaii.";
        this[1][35] = "The audience.";
    }
    makeface = new Array();
    makeface[0] = 4;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
