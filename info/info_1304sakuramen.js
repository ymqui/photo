<!--
//Created by Album Builder Program Sun Apr 07 08:58:00 2013
var info_url   = "http://www.sakuramen.net/";
var title      = "Sakuramen";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1304sakuramen/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Sometimes.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "樱花面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1304sakuramen_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Sakuramen开在亚当斯摩根街区。";
        this[1][1] = "饭店在地下室里，很容易错过。";
        this[1][3] = "松软的叉烧包，比纽约一风堂的都好吃。";
        this[1][4] = "著名的钟馗碗，放了很多肉。";
        this[1][5] = "叫钟馗碗大概是因为钟馗爱吃肉吧。";
        this[1][6] = "饭店的招牌樱花面，全素。";
    }else{
        this[1][0] = "Sakuramen is located in trendy Adams Morgan.";
        this[1][1] = "The restaurant is in a basement.";
        this[1][3] = "Chashu buns, even better than those in Ippudo. The buns are very soft.";
        this[1][4] = "The famous Shoki bowl, meat lover's favorite.";
        this[1][5] = "Shoki is a Chinese deity who guards against demons.";
        this[1][6] = "Sakuramen, the vegetarian ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
