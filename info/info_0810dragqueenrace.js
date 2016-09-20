<!--
//Created by Album Builder Program Fri Oct 31 18:11:04 2008
var info_url   = "http://en.wikipedia.org/wiki/Dupont_Circle#High_Heel_Race";
var title      = "2008 Dupont Circle Drag Queen High Heel Race";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0810dragqueenrace/";
//var dir        = csdpdir+"pics/0810dragqueenrace/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AlmostUnreal.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "2008杜邦街区男扮女装穿高跟鞋赛跑";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0810dragqueenrace_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "每年10月份的最后一个星期二晚上在杜邦街区一带的17街，上百个男扮女装的人穿着高跟鞋在街上赛跑。";
        this[1][1] = "晚上已经很冷了，这些人真是精神可嘉。";
        this[1][3] = "共和党副总统候选人佩琳和她丈夫的装扮者。";
        this[1][13] = "这位的“服装”最轰动了。";
        this[1][14] = "怎么看都象女人。";
        this[1][18] = "助兴的舞蹈。";
        this[1][19] = "场面热闹的赛跑。";
    }else{
        this[1][3] = '"Sarah Palin"'+" and "+'"Todd Palin"'+" .";
    }
    makeface = new Array();
    makeface[0] = 13;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
