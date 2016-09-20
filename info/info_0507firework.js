<!--
//Created by Album Builder Program Tue Jul 05 00:42:07 2005
var info_url   = "";
var title      = "Fourth of July Fireworks";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0507firework/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Reverie.mid";
var midi_cr    = new Array("Dolphin's Dream","http://d21c.com/dolphinsdream/quietude.html");
var whitebackground = true;
 
if(window.usechinese){
    title      = "独立日焰火晚会";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0507firework__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "人群早早就在华盛顿纪念碑附近等待焰火开始。";
    }else{
        this[1][0] = "A big crowd gathered near the Washington Monument.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
