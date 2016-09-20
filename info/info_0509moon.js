<!--
//Created by Album Builder Program Sat Sep 17 23:40:39 2005
var info_url   = "http://www.oarval.org/MoonMapen.htm";
var title      = "Harvest Moon";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0509moon/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CMIDI_Memory.mid";
var midi_cr    = new Array("CMIDI","http://www.cmidi.com/");
var whitebackground = true;
 
if(window.usechinese){
    title      = "中秋明月";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "0509moon__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "1/15秒 F16 ISO-100 300毫米";
        this[1][1] = "1/20秒 F16 ISO-100 300毫米";
        this[1][2] = "1/25秒 F16 ISO-100 300毫米";
        this[1][3] = "1/30秒 F16 ISO-100 300毫米";
        this[1][4] = "1/40秒 F16 ISO-100 300毫米";
        this[1][5] = "1/40秒 F16 ISO-100 300毫米";
        this[1][6] = "1/60秒 F16 ISO-100 285毫米";
    }else{
        this[1][0] = "1/15sec F16 ISO-100 300mm";
        this[1][1] = "1/20sec F16 ISO-100 300mm";
        this[1][2] = "1/25sec F16 ISO-100 300mm";
        this[1][3] = "1/30sec F16 ISO-100 300mm";
        this[1][4] = "1/40sec F16 ISO-100 300mm";
        this[1][5] = "1/40sec F16 ISO-100 300mm";
        this[1][6] = "1/60sec F16 ISO-100 285mm";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
