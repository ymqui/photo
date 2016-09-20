<!--
//Created by Album Builder Program Sun Jul 28 15:50:06 2013
var info_url   = "";
var title      = "Alaska Eats";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1307alaskaeats/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SomeoneLikeMe.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "吃在阿拉斯加";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "1307alaskaeats_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "塔尔基特纳路边餐馆。";
        this[1][1] = "松饼浇驯鹿香肠卤汁。";
        this[1][2] = "标准早餐。";
        this[1][3] = "安克雷奇冰川酒厅的帝王蟹腿。";
        this[1][4] = "刚捕捞上来的大比目鱼。";
        this[1][5] = "烤黄鳍金枪鱼。";
        this[1][6] = "安克雷奇Naruto拉面店的日式拉面。";
        this[1][7] = "安克雷奇Yamaya海鲜餐馆。";
        this[1][8] = "猪骨汤日式拉面。";
        this[1][9] = "生鱼片配寿司饭。";
        this[1][10] = "牛肉碗。";
    }else{
        this[1][0] = "Talkeetna Roadhouse, Talkeetna.";
        this[1][1] = "Reindeer sausage gravy and biscuit, Talkeetna Roadhouse.";
        this[1][2] = "Standard breakfast, Talkeetna Roadhouse.";
        this[1][3] = "King crab legs, Glacier Brewhouse, Anchorage.";
        this[1][4] = "Fresh catch-halibut, Glacier Brewhouse.";
        this[1][5] = "Seared ahi tuna, Glacier Brewhouse.";
        this[1][6] = "Ramen, Naruto ramen shop, Anchorage.";
        this[1][7] = "Yamaya Seafood, Anchorage.";
        this[1][8] = "Tonkotsu ramen, Yamaya Seafood.";
        this[1][9] = "Assorted sashimi on sushi rice, Yamaya Seafood.";
        this[1][10] = "Beef rice bowl, Yamaya Seafood.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
