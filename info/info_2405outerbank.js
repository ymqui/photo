<!--
//Created by Album Builder Program Sat Jun 01 11:08:07 2024
var info_url   = "";
var title      = "Memorial day on the outer banks";
var cam_img    = "";
var dir        = maindir+"pics/2405outerbank/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "北卡罗莱纳州外滩纪念日度假";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "2405outerbank_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在海滩上玩沙子。";
        this[1][1] = "和妈妈拍照。";
        this[1][2] = "在海滩上玩。";
        this[1][3] = "在海滩上玩。";
        this[1][4] = "在海滩上玩。";
        this[1][5] = "在海滩上玩。";
        this[1][6] = "在海滩上玩。";
        this[1][8] = "在海滩上玩。";
        this[1][9] = "在海滩上玩。";
        this[1][10] = "海滩上捡的贝壳。";
    }else{
        this[1][0] = "Playing with sand on the beach.";
        this[1][1] = '"Say Cheese!"';
        this[1][2] = "Playing on the beach.";
        this[1][3] = "Playing on the beach.";
        this[1][4] = "Playing on the beach.";
        this[1][5] = "Playing on the beach.";
        this[1][6] = "Playing on the beach.";
        this[1][8] = "Playing on the beach.";
        this[1][9] = "Playing on the beach.";
        this[1][10] = "Seashells collected from the beach.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
