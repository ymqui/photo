<!--
//Created by Album Builder Program Fri Jul 07 22:59:24 2006
var info_url   = "";
var title      = "Independence Day Celebration";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0607indepday/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IoVorreiNonVorreiMaSeVuoi.mid";
var midi_cr    = new Array("Midi All The Best","http://midiallthebest.50webs.com/");
var blocksave  = false;
 
if(window.usechinese){
    title      = "美国独立日庆典";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<58;i++){
        this[0][i] = "0607indepday_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这些人踩“会议脚踏车”来参加游行。";
        this[1][1] = "她们是从衣阿华州来的。";
        this[1][2] = "他们是从明尼苏达州来的。";
        this[1][41] = "印第安人舞蹈。";
        this[1][43] = "空军乐队的音乐会。";
        this[1][44] = "人群在杰佛逊纪念堂里躲雨。";
        this[1][45] = "雨过天晴。";
        this[1][46] = "华盛顿纪念碑倒影。";
    }else{
        this[1][0] = "These gals rode a conference bike to the parade.";
        this[1][1] = "A mom and daughter came from Iowa to watch the Independence Day parade.";
        this[1][2] = "Daryl and his wife from Minnesota.";
        this[1][41] = "Indian dance.";
        this[1][43] = "The Air Force Band entertained the crowd.";
        this[1][44] = "People seek shelter in the memorial during the thunderstorm.";
        this[1][46] = "Reflection of the George Washington Monument on the tidal basin.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
