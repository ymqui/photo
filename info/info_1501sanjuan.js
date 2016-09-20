<!--
//Created by Album Builder Program Mon Jan 12 20:21:15 2015
var info_url   = "http://www.nps.gov/saju/index.htm";
var title      = "Old San Juan";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels; 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1501sanjuan/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AllNightLong.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "圣胡安老城";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素；20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "1501sanjuan_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "老城里街道两边的很多建筑都刷得五颜六色。";
        this[1][2] = "这里的每天都是嘉年华。";
        this[1][4] = "老城西北角的El Morro堡垒。";
        this[1][5] = "Santa Maria Magdalena de Pazzis公墓。";
        this[1][6] = "堡垒上的一个碉楼。";
        this[1][9] = "无处不在的鬣鳞蜥。";
        this[1][10] = "这一只爬在树上。";
    }else{
        this[1][0] = "Many buildings in Old San Juan are painted in bright Caribbean colors.";
        this[1][2] = "Every day is a carnival day here.";
        this[1][4] = "Castillo San Felipe del Morro, 'El Morro'.";
        this[1][5] = "Santa Maria Magdalena de Pazzis Cemetery.";
        this[1][6] = "A sentry box in Castillo San Cristobal.";
        this[1][9] = "Ubiquitous iguana. Here is one at El Morro.";
        this[1][10] = "Another one up on the tree branch.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
