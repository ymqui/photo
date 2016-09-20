<!--
//Created by Album Builder Program Sun Feb 24 20:14:20 2008
var info_url   = "http://www.fiestadc.org/";
var title      = "The Afro-Latino Culture";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0802latino/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CorazonPartio.mid";
var midi_cr    = new Array("Spanish and Latin MIDI Studio Consortium","http://www.midistudio.com/midi/LA_AZ.htm");
 
if(window.usechinese){
    title      = "拉丁美洲舞蹈";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "0802latino_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "委内瑞拉舞蹈表演。";
        this[1][2] = "秘鲁歌手Vicky Leyva.";
        this[1][3] = "秘鲁舞蹈。";
        this[1][11] = "巴西桑巴舞蹈。";
        this[1][15] = "古巴舞蹈。";
    }else{
        this[1][0] = "A dancer of Ambores de San Juan(Venezuela).";
        this[1][2] = "Pervuvian singer Vicky Leyva.";
        this[1][3] = "Dance by Mamauca Group(Peru).";
        this[1][11] = "Braziilan samba dancer.";
        this[1][15] = "Dance by Alafia Dance and Drum Company(Cuba).";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
