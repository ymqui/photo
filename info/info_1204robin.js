<!--
//Created by Album Builder Program Sun May 13 20:46:07 2012
var info_url   = "http://en.wikipedia.org/wiki/American_Robin";
var title      = "American Robin";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1204robin/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IDontWantToSingAnotherLoveSong.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "旅鸫";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
    info_url   = "http://baike.baidu.com/view/1203573.htm";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1204robin_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "雨天里一只旅鸫妈妈在孵蛋。";
        this[1][1] = "一个蓝色的蛋。";
        this[1][3] = "又多了一个。";
        this[1][6] = "一只灰嘲鸫在偷筑巢的材料。";
        this[1][7] = "鸟巢里只剩下几片可怜的蛋壳。";
        this[1][8] = "窗户上贴了一张打洞的报纸来当拍摄的掩体。";
    }else{
        this[1][0] = "A female American Robin incubating in a rainy day.";
        this[1][1] = "One blue egg.";
        this[1][3] = "Two eggs now.";
        this[1][6] = "A gray catbird is stealing the nest building material.";
        this[1][7] = "Only egg shells are left in the empty nest.";
        this[1][8] = "A piece of cut newspaper is used as the window blind for the shoot.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
