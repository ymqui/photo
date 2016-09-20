<!--
//Created by Album Builder Program Sat Sep 30 22:34:31 2006
var info_url   = "http://www.greatcountryfarms.com";
var title      = "Pig Race and Pumpkin Picking at Great Country Farms";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0609farm/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Fantasie.mid";
var midi_cr    = new Array("Classical Guitar Midi","http://www.classicalguitarmidi.com/top20.html");
 
if(window.usechinese){
    title      = "农场看猪赛跑和摘南瓜";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "0609farm_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "南瓜堆。";
        this[1][2] = "印第安玉米。";
        this[1][3] = "农场娱乐---跳充气垫。";
        this[1][4] = "猪赛跑。";
        this[1][9] = "最后一轮是山羊比赛。";
        this[1][10] = "“怎么才能把这个大家伙搬回家？”";
        this[1][11] = "去田里摘南瓜。";
        this[1][12] = "“就这个啦！”";
    }else{
        this[1][0] = "Pumpkins.";
        this[1][2] = "Indian corns.";
        this[1][3] = "Jumping pillow.";
        this[1][4] = '"Oinkintucky Derby" pig race.';
        this[1][9] = "The last round is a goat race.";
        this[1][10] = '"How can I carry this big one home?"';
        this[1][11] = "Hayride to the pumpkin patch.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
