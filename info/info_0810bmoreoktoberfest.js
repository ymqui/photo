<!--
//Created by Album Builder Program Mon Oct 13 23:07:29 2008
var info_url   = "http://www.dasbestoktoberfest.com/maryland/show-info";
var title      = "Maryland Brewer's Oktoberfest";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0810bmoreoktoberfest/";
//var dir        = csdpdir+"pics/0810bmoreoktoberfest/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SheIsTheOne.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "马里兰啤酒制造者举办的十月节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0810bmoreoktoberfest_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][2] = "木制号角。";
        this[1][13] = "扛妻子比赛";
        this[1][17] = "啤酒肚比赛。";
        this[1][21] = "获胜者。";
    }else{
        this[1][2] = "Alphorn.";
        this[1][13] = "Wife carrying contest.";
        this[1][17] = "Beer belly contest.";
        this[1][21] = "The winner.";
    }
    makeface = new Array();
    makeface[0] = 15;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
