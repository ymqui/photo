<!--
//Created by Album Builder Program Mon Nov 14 21:37:27 2011
var info_url   = "http://www.ippudony.com/";
var title      = "Ippudo Ramen Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1111ippudo/";
//var dir        = csdpdir+"pics/1111ippudo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ComeAwayWithMe.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "一风堂日式面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "1111ippudo_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][3] = "怎么吃拉面。";
        this[1][4] = "日式叉烧包。";
        this[1][5] = "芝麻油黄瓜冷盘。";
        this[1][6] = "油炸山药。";
        this[1][7] = "黄尾鱼生鱼片。";
        this[1][8] = "放了味噌酱的骨汤拉面。";
        this[1][10] = "千层蛋糕。";
        this[1][11] = "果味冰激凌。";
        this[1][12] = "绿茶味的焦糖鸡蛋布丁。";
    }else{
        this[1][3] = "How to eat ramen: sip, slurp, and top.";
        this[1][4] = "Hirata buns.";
        this[1][5] = "Yamitsuki Goma Kyuri: cucumber with sesame oil dressing.";
        this[1][6] = "Yamaimo Tatsuta-age: fried Japanese mountain yam.";
        this[1][7] = "Hamachi Carpaccio: yellowtail sashimi with Japanese carpaccio sauce.";
        this[1][8] = "Akamaru Modern Ramen: Tonkotsu noodle soup with miso paste.";
        this[1][10] = "Lady M Mille Crepe Cake.";
        this[1][11] = "Annin Sorbet.";
        this[1][12] = "Matcha Brulee.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
