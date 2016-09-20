<!--
//Created by Album Builder Program Tue Jun 05 19:32:54 2007
var info_url   = "http://www.fairfaxcounty.gov/parks/accotink/cbbr.htm";
var title      = "Cardboard Boat Regatta";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0706regatta/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MyHeartWillGoOn.mid";
var midi_cr    = new Array("Midi","http://home1.tiscalinet.de/familie-czech/midi.htm");
 
if(window.usechinese){
    title      = "硬纸板船大赛";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<26;i++){
        this[0][i] = "0706regatta_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在阿克亭湖举办的硬纸板船比赛吸引了很多参与者。";
        this[1][1] = "由於参赛的船很多，比赛分好几组。";
        this[1][2] = "船必须全部由硬纸板做成，接口的地方可使用胶水和胶布。";
        this[1][3] = "船不沉还不够，还得会划。";
        this[1][9] = "这艘独角兽船做得很好。";
        this[1][17] = "这船看起来很玄乎。";
        this[1][18] = "船在折返点沉了。";
        this[1][20] = "“兄弟，我先沉了。”";
        this[1][22] = "沉浮挣扎。";
        this[1][23] = "天气不好，整天都在下雨，但大家都很开心。";
    }else{
        this[1][0] = "The annual cardboard boat regatta, held on Lake Accotink, attracts a lot of participants.";
        this[1][1] = "The races are separated into different groups.";
        this[1][2] = "Boats must be made entirely from cardboard. Glues and tapes may be used on joints and seams.";
        this[1][3] = "The rowing technique is as important as the boat itself.";
        this[1][9] = "This unicorn boat is very well built.";
        this[1][17] = "It doesn't look like the boat will make it.";
        this[1][18] = "These two girls only make it to the half mark.";
        this[1][22] = "Struggling to stay afloat.";
        this[1][23] = "It's raining all day, but everyone is having a good time.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
