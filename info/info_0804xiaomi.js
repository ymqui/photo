<!--
//Created by Album Builder Program Sat Apr 05 23:57:48 2008
var info_url   = "http://www.gazette.net/stories/040407/potonew212837_32330.shtml";
var title      = "Xiaomi and Parents on a Spring Outing";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0804xiaomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "GirlInTheMirror.mid";
var midi_cr    = new Array("Quality Midi Files","http://server3.myebiz.com/chryspage/midi_files.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "小米看樱花";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0804xiaomi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小米和妈妈。";
        this[1][1] = "小米和爸妈。";
        this[1][2] = "樱花好漂亮。";
        this[1][3] = "“妈妈，这是樱花。”";
        this[1][7] = "父女陶醉在花海里。";
        this[1][11] = "小米不太喜欢和爸爸玩翘翘板。";
        this[1][13] = "和小哥哥就玩得很开心。";
        this[1][14] = "小米对荡秋千也不热心。";
        this[1][15] = "小米最喜欢滑滑梯了。";
        this[1][21] = "小米可勇敢了，敢头朝下滑。";
    }else{
        this[1][0] = "Xiaomi and Mom.";
        this[1][1] = "Xiaomi and parents.";
        this[1][11] = "Xiaomi doesn't like riding the seesaw with Dad.";
        this[1][13] = "She enjoys the seesaw with a little brother.";
        this[1][14] = "Swing is not Xiaomi's favorite.";
        this[1][15] = "Slide is definitely Xiaomi's favorite playground toy.";
        this[1][21] = "With Mom waiting at the bottom, Xiaomi is not afraid of sliding down head first.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
