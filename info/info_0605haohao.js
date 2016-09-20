<!--
//Created by Album Builder Program Sun Jun 04 09:21:41 2006
var info_url   = "";
var title      = "Hao Hao";
var cam_img    = "camera_premier_dc2300.jpg";
var cam_tit    = "Premier DC2300, 2.1 Mega Pixels.";
var dir        = maindir+"pics/0605haohao/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Emozioni.mid";
var midi_cr    = new Array("Midi All The Best","http://midiallthebest.50webs.com/");
 
if(window.usechinese){
    title      = "昊昊";
    cam_tit    = "金拍得丽PREMIER DC-2300，211万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "0605haohao_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "昊昊笑得多美！5/2006";
        this[1][1] = "还是个好奇的主。5/2006";
        this[1][2] = "5/2006";
        this[1][3] = "8/2006";
        this[1][4] = "8/2006";
    }else{
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->