<!--
//Created by Album Builder Program Tue May 31 21:11:25 2011
var info_url   = "http://www.thecarlyle.com/dine1.cfm";
var title      = "Carlyle Restaurant in New York";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1105carlyle/";
//var dir        = csdpdir+"pics/1105carlyle/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Imagine.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "纽约卡莱尔饭店";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1105carlyle_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "饭店位于著名的卡莱尔旅馆里。";
        this[1][1] = "鲜蛤。";
        this[1][2] = "鹅肝。";
        this[1][3] = "缅因龙虾。";
        this[1][4] = "地中海海鲈鱼。";
        this[1][5] = "菲力牛排。";
        this[1][6] = "威灵顿牛排。";
        this[1][7] = "紫莓蛋奶酥。";
        this[1][8] = "饭店的招牌甜点。";
    }else{
        this[1][0] = "The restaurant is located at the back of the Carlyle Hotel.";
        this[1][1] = "Topneck Clams.";
        this[1][2] = "Terrine of Hudson Valley Foie Gras.";
        this[1][3] = "Maine lobster.";
        this[1][4] = "Mediterranean Branzino a la Nage.";
        this[1][5] = "Prime Filet Mignon.";
        this[1][6] = "Beef Wellington.";
        this[1][7] = "Raspberry Souffle.";
        this[1][8] = "Carlyle's signature dessert.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
