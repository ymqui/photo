<!--
//Created by Album Builder Program Wed May 25 20:56:50 2011
var info_url   = "http://www.addisababarestaurant.com/";
var title      = "Addis Abba Ethiopian Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1105ethiopian/";
//var dir        = csdpdir+"pics/1105ethiopian/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Apache.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "亚的斯亚贝巴埃塞俄比亚餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1105ethiopian_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][3] = "英吉拉：埃塞俄比亚传统的用来裹食物的面包。";
    }else{
        this[1][3] = "Injera: traditional Ethiopian bread.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
