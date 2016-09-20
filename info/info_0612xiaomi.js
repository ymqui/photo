<!--
//Created by Album Builder Program Mon Dec 18 01:04:22 2006
var info_url   = "";
var title      = "Xiao Mi's baby photo";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0612xiaomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Nearness.mid";
var midi_cr    = new Array("Midi Collection","http://www.jadierose.com/midicollection.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "可爱的小米";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<38;i++){
        this[0][i] = "0612xiaomi_"+(i+1).toString();
        this[1][i] = "";
    }
    for (var i=38;i<45;i++){
        this[0][i] = "0612xiaomi_"+(i+2).toString();
        this[1][i] = "";
    }

    if(window.usechinese){
        this[1][0] = "和奶奶在一起。";
        this[1][4] = "看着爸爸笑了。";
        this[1][6] = "爸妈的宝贝。";
        this[1][12] = "甜美的梦乡。";
        this[1][20] = "睡在小床里。";
        this[1][34] = "爷爷抱着。";
    }else{
        this[1][0] = "With Grandma.";
        this[1][4] = "So happy to be with Daddy.";
        this[1][6] = "With Mommy and Daddy.";
        this[1][12] = "Sweet dream.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
