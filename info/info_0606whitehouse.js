<!--
//Created by Album Builder Program Sat Jun 24 22:57:56 2006
var info_url   = "";
var title      = "White House";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0606whitehouse/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Memory.mid";
var midi_cr    = new Array("Midi All The Best","http://midiallthebest.50webs.com/");
 
if(window.usechinese){
    title      = "美国白宫";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "0606whitehouse_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "南草坪。";
        this[1][1] = "北大门。";
        this[1][6] = "“白宫里发现一个空弹头。”";
        this[1][7] = "这个人想住白宫都想疯了。";
    }else{
        this[1][0] = "South lawn.";
        this[1][1] = "North Portico.";
    }
    makeface = new Array();
    makeface[0] = 6;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
