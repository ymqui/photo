<!--
//Created by Album Builder Program Tue May 31 21:35:27 2011
var info_url   = "http://www.ippudony.com/";
var title      = "Ippudo Ramen Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1105ippudo/";
//var dir        = csdpdir+"pics/1105ippudo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Margaritaville.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "纽约一风堂面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "1105ippudo_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "店里顾客总是很多，我们等了一个小时。";
        this[1][2] = "装饰了面碗的墙。";
        this[1][3] = "毛豆。";
        this[1][4] = "黄瓜冷盘。";
        this[1][5] = "燻鱿鱼。";
        this[1][6] = "酱油味拉面。";
        this[1][7] = "骨汤拉面，放了味噌酱。";
        this[1][8] = "骨汤拉面。";
        this[1][9] = "面吃完了可以再加。";
        this[1][10] = "果味冰激凌。";
        this[1][11] = "千层蛋糕。";
    }else{
        this[1][0] = "Store front.";
        this[1][1] = "We waited for an hour to be seated.";
        this[1][2] = "Wall decorated with Ramen bowls.";
        this[1][3] = "Edamame with lemon salt.";
        this[1][4] = "Japanese cucumber mixed with sesame oil dressing.";
        this[1][5] = "Piri-Karalka Sansai-smoked squid with vegetables.";
        this[1][6] = "Nakasu Kawabata Shoyu Ramen-soy flavored ramen.";
        this[1][7] = "Akamaru Modern Ramen-tonkotsu noodle with miso paste.";
        this[1][8] = "Shiromaru Hakata Classic Ramen-tonkotsu ramen.";
        this[1][9] = "Extra noodle.";
        this[1][10] = "Sorbet.";
        this[1][11] = "Crepe Cake.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
