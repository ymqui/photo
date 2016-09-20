<!--
//Created by Album Builder Program Tue Sep 02 23:17:15 2008
var info_url   = "http://www.gaithersburgmd.gov/poi/default.asp?POI_ID=773&TOC=107;84;99;773";
var title      = "Gaithersburg Labor Day Parade";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0809laborday/";
//var dir        = csdpdir+"pics/0809laborday/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SeaOfLove.mid";
var midi_cr    = new Array("Kel's Midi Page","http://members.tripod.com/~ellisbell/midi.html");
 
if(window.usechinese){
    title      = "盖堡劳动节游行";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "0809laborday_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
    }else{
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
