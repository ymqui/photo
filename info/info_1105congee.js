<!--
//Created by Album Builder Program Tue May 31 20:33:03 2011
var info_url   = "http://www.congeevillagerestaurants.com/";
var title      = "Congee Bowery in New York City";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1105congee/";
//var dir        = csdpdir+"pics/1105congee/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CountryRoad.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "纽约粥之家";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1105congee_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][3] = "味道鲜美的滑牛鱼片粥。";
        this[1][4] = "豉汁炒花蚬。";
        this[1][5] = "XO酱蜜豆炒鸭舌。";
        this[1][6] = "日本芥末捞三鲜。";
        this[1][7] = "炒空心菜。";
        this[1][8] = "上海小笼包。";
    }else{
        this[1][0] = "Congee Bowery is located in Bowery Street in New York city.";
        this[1][3] = "Delicious sliced beef and fish porridge.";
        this[1][4] = "Manila clam with black bean sauce.";
        this[1][5] = "Duck tongue and suger peas with XO sauce.";
        this[1][6] = "Wasabi mix of three kinds of seafoods.";
        this[1][7] = "Water spinach.";
        this[1][8] = "Shanghai styled small juicy buns.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
