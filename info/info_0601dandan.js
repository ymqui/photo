<!--
var info_url   = "";
var title      = "Happy New Year From Dandan";
//var cam_img    = "camera_canon_rebelxt.jpg";
var cam_img    = "";
var cam_tit    = "Canon SLR Digital Rebel XT, 8.0 Mega Pixels.";
var dir        = maindir+"pics/0601dandan/";   //directory where pics are
var interval   = 5000;                         //interval for slide show in millisecond
var thumb_dir  = maindir+"thumbnail/";         //thumbnail directory
var ext        = ".jpg";                       //extension of the pic files
var midi_file  = "ABAHeidschi.mid";	       //midi file name
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");

if(window.usechinese){
    cam_tit    = "佳能单镜头反光式 Digital Rebel XT, 800万像素。";
    title      = "旦旦祝大家新年快乐！";
}

document.title = title;

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos, shown as browser status
    for(var i=0;i<8;i++){
       this[0][i] = "0601dandan_"+(i+1).toString();
       this[1][i] = "";
    }
}

//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->