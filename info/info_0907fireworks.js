<!--
//Created by Album Builder Program Sun Jul 05 11:36:24 2009
var info_url   = "";
var title      = "Independence Day Fireworks in Washington, DC";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0907fireworks/";
//var dir        = csdpdir+"pics/0907fireworks/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "2outof3AintBad.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "华盛顿独立日焰火";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "0907fireworks_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "<br>(1秒 F9 ISO-100 45毫米)";
        this[1][1] = "<br>(2秒 F13 ISO-100 51毫米)";
        this[1][2] = "<br>(1秒 F13 ISO-100 40毫米)";
        this[1][3] = "<br>(3秒 F13 ISO-100 46毫米)";
    }else{
        this[1][0] = "<br>(1sec F9 ISO-100 45mm)";
        this[1][1] = "<br>(2sec F13 ISO-100 51mm)";
        this[1][2] = "<br>(1sec F13 ISO-100 40mm)";
        this[1][3] = "<br>(3sec F13 ISO-100 46mm)";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
