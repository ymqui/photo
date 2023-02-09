<!--
//Created by Album Builder Program Sun Jul 28 22:49:32 2013
var info_url   = "";
var title      = "Birding in Alaska";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1307akbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "OneStepAtATime.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "阿拉斯加看鸟";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1307akbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "普通秋沙鸭，卡特迈国家公园。";
        this[1][1] = "大黄脚鹬，卡特迈国家公园。";
        this[1][2] = "黑嘴喜鹊，卡特迈国家公园。";
        this[1][3] = "美洲三趾啄木鸟，卡特迈国家公园。";
        this[1][4] = "黑顶山雀，安克雷奇Point Woronzof公园。";
        this[1][5] = "崖沙燕，安克雷奇Point Woronzof公园。";
        this[1][7] = "稀树草鹀，安克雷奇波特沼泽。";
    }else{
        this[1][0] = "Common merganser, female with ducklings, Katmai National Park & Preserve.";
        this[1][1] = "Greater yellowlegs, Katmai National Park & Preserve.";
        this[1][2] = "Black-billed magpie, Katmai National Park & Preserve.";
        this[1][3] = "American three-toed woodpecker, Katmai National Park & Preserve.";
        this[1][4] = "Black-capped chickadee, Point Woronzof Park, Anchorage.";
        this[1][5] = "Bank swallow, Point Woronzof Park, Anchorage.";
        this[1][7] = "Savannah sparrow, Potter Marsh, Anchorage.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->