<!--
//Created by Album Builder Program Sun Nov 05 15:55:26 2006
var info_url   = "http://www.themre.org/tug2006/";
var title      = "Annapolis and Eastport Tug of War";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0611annapolis/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AfterRain.mid";
var midi_cr    = new Array("Jalal Ali","http://www.jalalmusic.com");
 
if(window.usechinese){
    title      = "安纳波利斯看拔河";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<23;i++){
        this[0][i] = "0611annapolis_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "安纳波利斯是马里兰州的首府，一个很温馨的小城。";
        this[1][6] = "这里是海军学院所在地。";
        this[1][10] = "安纳波利斯和隔壁的东港每年一次的拔河赛吸引了很多游客。";
        this[1][11] = "所用绳子长500多米。";
        this[1][17] = "安纳波利斯今年所有的比赛都输了。";
        this[1][20] = "海军学院的女生。";
    }else{
        this[1][0] = "Annapolis is the capital of Maryland.";
        this[1][6] = "U.S. Naval Academy is located in Annapolis.";
        this[1][10] = "The annual tug of war is between downtown Annapolis and the Maritime Republic of Eastport.";
        this[1][11] = "The rope used in the tug of war is 1700 feet long.";
        this[1][17] = "Annapolis lost all the matches this year.";
        this[1][20] = "Female midshipmen from the Naval Academy.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
