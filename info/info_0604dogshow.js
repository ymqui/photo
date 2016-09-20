<!--
//Created by Album Builder Program Sun Apr 23 21:25:14 2006
var info_url   = "http://www.baltimoresun.com/features/353390,0,5299658.event";
var title      = '"Cherry Blossom Cluster" Dog Show';
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0604dogshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MinuetK2.mid";
var midi_cr    = new Array("Mfiles","http://www.mfiles.co.uk/midi-files.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "狗展";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<31;i++){
        this[0][i] = "0604dogshow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        i = 0;
        this[1][i++] = "洗澡";
        this[1][i++] = "孤独";
        this[1][i++] = "竞赛";
        this[1][i++] = "摆姿";
        this[1][i++] = "奖赏";
        this[1][i++] = "高傲";
        this[1][i++] = "指导";
        this[1][i++] = "旁观";
        this[1][i++] = "美丽的代价";
        this[1][i++] = "骄傲的公主";
        this[1][i++] = "评比";
        this[1][i++] = "亲昵时刻";
        this[1][i++] = "寻觅";
        this[1][i++] = "不服";
        this[1][i++] = "我不是山羊老爷爷";
        this[1][i++] = "那我不是小瘪三啦";
        this[1][i++] = "无奈";
        this[1][i++] = "忠实的朋友";
        this[1][i++] = "不是我不小心，实在是我看不清";
        this[1][i++] = "沉思";
        this[1][i++] = "为何在热闹过后我总会感动伤心？";
        this[1][i++] = "小家伙";
        this[1][i++] = "小家伙";
        this[1][i++] = "大家伙和小家伙";
        this[1][i++] = "乖，看那边";
        this[1][i++] = "比赛";
        this[1][i++] = "场地";
        this[1][i++] = "运动";
        this[1][i++] = "呵呵，我也怕挠痒痒";
        this[1][i++] = "谆谆教导";
        this[1][i++] = "循循善诱";
    }else{
    }
    makeface = new Array();
    makeface[0] = 28;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->