<!--
//Created by Album Builder Program Sun Aug 07 11:36:43 2011
var info_url   = "http://www.phillipsseafood.com/";
var title      = "Phillips Seafood Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1108phillips/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IfYouComeToMe.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Phillips海鲜餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1108phillips_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "饭店位于风景秀丽的巴尔的摩内港。";
        this[1][1] = "这家饭店甚至有自己品牌的海鲜调料。";
        this[1][2] = "开胃菜：炸鱿鱼卷。";
        this[1][3] = "马里兰著名的蟹肉糕。";
        this[1][4] = "烤牛排配土豆和洋葱圈。";
        this[1][5] = "饭店的甜点展示。";
    }else{
        this[1][0] = "The restaurant is located in the beautiful inner harbor in downtown Baltimore.";
        this[1][1] = "Phillips even has its own brand of seasoning.";
        this[1][2] = "The appetizer: salt & pepper calamari.";
        this[1][3] = "Chesapeake crab cakes.";
        this[1][4] = "Blackened rib eye steak with roasted potatoes and onion rings.";
        this[1][5] = "A display of Phillips' desserts.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
