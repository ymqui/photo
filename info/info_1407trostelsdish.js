<!--
//Created by Album Builder Program Thu Jul 10 20:02:20 2014
var info_url   = "http://www.dishtrostels.com/";
var title      = "Trostel's Dish Tapas Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1407trostelsdish/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DontYouRemember.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "特罗斯特尔西班牙Tapas餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1407trostelsdish_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "椰子雪球马丁尼。";
        this[1][1] = "焗鲔鱼，很不错。";
        this[1][2] = "炸鳄梨。";
        this[1][4] = "排骨裹培根。";
        this[1][5] = "哈瓦蒂乳酪虾，非常好吃。";
    }else{
        this[1][0] = "Coconut Snowball Martini.";
        this[1][1] = "Tuna tataki: seared rare- sesame crusted ahi tuna, sushi rice and spicy black bean vinaigrette.";
        this[1][2] = "Crispy fried avocado with jalapeno sour cream, pico de gallo, and cilantro mayo.";
        this[1][4] = "Not-so-spare ribs: bacon wrapped country pork rib on a stick with Brussels sprout and crunchy ramen slaw.";
        this[1][5] = "Havarti shrimp: garlic herb butter, succulent shrimp and baked Havarti cheese.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
