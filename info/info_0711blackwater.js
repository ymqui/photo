<!--
//Created by Album Builder Program Sat Nov 10 21:36:44 2007
var info_url   = "http://blackwater.fws.gov";
var title      = "Birding on Blackwater National Wildlife Refuge";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0711blackwater/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CarryOn.mid";
var midi_cr    = new Array("It'sCool Midi","http://home.maine.rr.com/i/t/itscool/eln/");
 
if(window.usechinese){
    title      = "黑水国家野生动物保护区观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0711blackwater_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "黎明。";
        this[1][1] = "雁南飞。";
        this[1][3] = "日出。";
        this[1][4] = "争渡，争渡，惊起野鸭无数。";
        this[1][5] = "绿头鸭。";
        this[1][6] = "一只麻雀。";
        this[1][7] = "两只黑鹂。";
        this[1][8] = "三只雪雁。";
        this[1][9] = "白头鹰。";
        this[1][10] = "加拿大大雁。";
        this[1][11] = "红翅黑鹂。";
        this[1][12] = "红翅黑鹂。";
        this[1][13] = "红翅黑鹂。";
        this[1][14] = "红翅黑鹂。";
        this[1][15] = "红翅黑鹂。";
    }else{
        this[1][0] = "Dawn.";
        this[1][1] = "A flock of Canada geese leave early on their southboud journey.";
        this[1][3] = "Sunrise.";
        this[1][4] = "Mallards.";
        this[1][6] = "A sparrow.";
        this[1][7] = "Red-winged blackbirds.";
        this[1][8] = "Snow geese.";
        this[1][9] = "Bald eagle.";
        this[1][10] = "Canada geese.";
        this[1][11] = "Red-winged blackbirds.";
        this[1][12] = "Red-winged blackbirds.";
        this[1][13] = "Red-winged blackbirds.";
        this[1][14] = "Red-winged blackbirds.";
        this[1][15] = "Red-winged blackbirds.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58"; 
//-->
