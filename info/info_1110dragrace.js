<!--
//Created by Album Builder Program Thu Oct 27 21:05:02 2011
var info_url   = "http://www.highheelracedc.com/";
var title      = "DC High Heel Drag Race 2011";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1110dragrace/";
//var dir        = csdpdir+"pics/1110dragrace/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "EternalFlame.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "2011年华盛顿扮装男高跟鞋赛跑";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<31;i++){
        this[0][i] = "1110dragrace_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "扮装男高跟鞋赛跑在每年11月份的最后一个星期二举行。";
        this[1][1] = "比赛时间是晚上9点，但参加者6点就开始聚集在比赛的街道上展示自己的装扮。";
        this[1][2] = "大量的观众挤满了17街两旁来观看。";
    }else{
        this[1][0] = "The Drag Race is held on the last Tuesday in November.";
        this[1][1] = "Race time is 9 p.m., but participants gather as early as 6 p.m.";
        this[1][2] = "Crowds gather along 17th Street to watch this event.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
