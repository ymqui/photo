<!--
//Created by Album Builder Program Sat Sep 23 23:37:29 2006
var info_url   = "http://www.nps.gov/hafe/";
var title      = "Harpers Ferry, West Virginia";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0609harpersferry/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MusicOfTheNight.mid";
var midi_cr    = new Array("The Boss's Midi Favorites","http://www.afcsat.com/midi_fav.html");
 
if(window.usechinese){
    title      = "西维吉尼亚州的渡口古镇";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "0609harpersferry_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "从马里兰这边的山上看渡口小镇。";
        this[1][1] = "从马里兰这边的山上看渡口小镇。";
        this[1][2] = "镇边的铁路。";
        this[1][3] = "街道。";
        this[1][4] = "商店。";
        this[1][5] = "通往教堂的石阶。";
        this[1][6] = "身着古装的士兵。";
        this[1][7] = "教堂里正在做弥撒。";
        this[1][10] = "一家陶瓷玻璃器皿店。";
        this[1][11] = "一家古董店。";
        this[1][12] = "一家小餐馆。";
        this[1][13] = "冰激凌。";
        this[1][14] = "街景。";
    }else{
        this[1][0] = "Maryland Heights.";
        this[1][1] = "Harpers Ferry seen from Maryland Heights.";
        this[1][2] = "Railroad trestle.";
        this[1][3] = "Shenandoah Street.";
        this[1][4] = "Store.";
        this[1][5] = "Stone steps leading to the St. Peter Chapel.";
        this[1][6] = "A guard wearing civil war period uniform.";
        this[1][7] = "St. Peter Chapel.";
        this[1][8] = "Water gap viewed from Jefferson Rock.";
        this[1][10] = "Inside a pottery store.";
        this[1][11] = "An antique store.";
        this[1][12] = "A restaurant.";
        this[1][13] = "Frozen custard.";
        this[1][14] = "High Street.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
