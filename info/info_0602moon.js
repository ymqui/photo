<!--
//Created by Album Builder Program Tue Feb 07 18:59:55 2006
var info_url   = "";
var title      = "Daytime Moon";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0602moon/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Traumerei.mid";
var midi_cr    = new Array("Mfiles","http://www.mfiles.co.uk/midi-files.htm");
 
if(window.usechinese){
    title      = "月上林梢";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "0602moon_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "白日里的凸月。";
        this[1][5] = "刚刚日落。";
    }else{
        this[1][0] = "The waxing gibbous moon during daytime.";
        this[1][5] = "Right after sunset.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->