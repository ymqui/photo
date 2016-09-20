<!--
//Created by Album Builder Program Mon Jul 14 20:55:44 2008
var info_url   = "http://alexandriava.gov/news_display.aspx?id=14058";
var title      = "Alexandria Fireworks";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0807fireworks/";
//var dir        = csdpdir+"pics/0807fireworks/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CantHelpFallingInLove.mid";
var midi_cr    = new Array("Quality Midi Files","http://server3.myebiz.com/chryspage/midi_files.html");
 
if(window.usechinese){
    title      = "亚利山大市焰火";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<3;i++){
        this[0][i] = "0807fireworks_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "<br>(3秒 F8 ISO-100 17毫米)";
        this[1][1] = "<br>(5秒 F8 ISO-100 17毫米)";
        this[1][2] = "<br>(5秒 F8 ISO-200 26毫米)";
    }else{
        this[1][0] = "<br>(3sec F8 ISO-100 17mm)";
        this[1][1] = "<br>(5sec F8 ISO-100 17mm)";
        this[1][2] = "<br>(5sec F8 ISO-200 26mm)";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
