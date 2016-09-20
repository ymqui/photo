<!--
//Created by Album Builder Program Mon Mar 20 12:58:32 2005
var info_url   = "";
var title      = "Picnic at Longyan Dongxiao Forest Park";
var cam_img    = "camera_canon_ixyd30.jpg";
var cam_tit    = "Canon IXY Digital 30, 3.2 Mega Pixels.";
var dir        = maindir+"pics/0410picnic/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Forest.mid";
var midi_cr    = new Array("CMIDI","http://www.cmidi.com");
 
if(window.usechinese){
    title      = "龙岩森林公园烧烤";
    cam_tit    = "佳能 IXY Digital 30, 320万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<15;i++){
        this[0][i] = "0410picnic_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "姐和同事们。";
        this[1][1] = "楠楠，琦琦，和姐。";
        this[1][2] = "琦琦。";
        this[1][3] = "专心烧烤的楠楠和琦琦。";
        this[1][4] = "姐，琦琦，和楠楠。看来红薯颇香。";
        this[1][5] = "辣死了...";
        this[1][6] = "楠楠。";
        this[1][7] = "琦琦和楠楠。";
        this[1][8] = "姐和同事在烧烤。琦琦坐享其成。";
        this[1][9] = "楠楠细细品味鸡翅膀：嗯，味道还不错。";
        this[1][10] = "大伙围炉烧烤。";
        this[1][11] = "姐和琦琦。";
        this[1][12] = "琦琦。";
        this[1][13] = "楠楠。";
        this[1][14] = "莎椤，一种树蕨。";
    }else{
        this[1][0] = "My sister and her colleagues.";
        this[1][1] = "Nannan, Qiqi, and my sister.";
        this[1][2] = "Qiqi.";
        this[1][3] = "Nannan and Qiqi.";
        this[1][4] = "Sis, Qiqi, and Nannan.";
        this[1][5] = "Nannan tackling a very spicy chicken wing.";
        this[1][6] = "Nannan.";
        this[1][7] = "Qiqi, Nannan, and their friends.";
        this[1][8] = "Sis and friends barbecuing chicken wings.";
        this[1][9] = "Nannan tasting a chicken wing.";
        this[1][10] = "Qiqi and Sis.";
        this[1][11] = "Sis and Qiqi.";
        this[1][12] = "Qiqi.";
        this[1][13] = "Nannan.";
        this[1][14] = "Tree fern.";
    }
    makeface = new Array();
    makeface[0] = 5;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
