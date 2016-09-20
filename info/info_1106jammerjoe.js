<!--
//Created by Album Builder Program Sun Jul 10 21:41:42 2011
var info_url   = "http://www.glacierparkinc.com/dining.php";
var title      = "Jammer Joe's Grill and Pizzeria";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1106jammerjoe/";
//var dir        = csdpdir+"pics/1106jammerjoe/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TillThereWasYou.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "Jammer Joe烧烤和比萨餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1106jammerjoe_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "比萨薯条。";
        this[1][1] = "蘑菇牛肉汉堡。";
        this[1][2] = "鸡肉汉堡。";
        this[1][3] = "鸸鹋汉堡。鸸鹋又称澳洲驼鸟。";
    }else{
        this[1][0] = "Pizza fries.";
        this[1][1] = "Mushroom Swiss burger.";
        this[1][2] = "Pesto chicken burger.";
        this[1][3] = "Emu burger.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
