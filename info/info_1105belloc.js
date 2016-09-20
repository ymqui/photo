<!--
//Created by Album Builder Program Tue May 24 21:21:41 2011
var info_url   = "";
var title      = "Bel-Loc Diner in Parkville, MD";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1105belloc/";
//var dir        = csdpdir+"pics/1105belloc/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AnAffairToRemember.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "Bel-Loc小餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "1105belloc_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "餐馆在巴尔的摩北边。";
        this[1][4] = "每张餐桌上都有个投币点唱机。";
        this[1][6] = "蔬菜汤。";
        this[1][7] = "色拉。";
        this[1][8] = "肉丸通心粉。";
        this[1][9] = "油炸蟹肉糕。";
    }else{
        this[1][0] = "The diner is located just north of Baltimore.";
        this[1][4] = "There's a jukebox on each table.";
        this[1][6] = "Vegetable soup.";
        this[1][7] = "Salad.";
        this[1][8] = "Meatball Spaghetti.";
        this[1][9] = "Crab cake.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
