<!--
//Created by Album Builder Program Sat Oct 01 20:30:07 2011
var info_url   = "http://www.woodberrykitchen.com/";
var title      = "Brunch at Woodberry Kitchen";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1110woodberry/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "FirstTimeISawYourFace.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "在木莓厨房吃早午餐";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1110woodberry_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "木莓厨房所在的砖房原是一家工厂。";
        this[1][1] = "这家餐馆坚持用料直接来自农场，支持绿色农业。";
        this[1][2] = "茶。";
        this[1][3] = "裹了肉桂糖的油炸圈饼。";
        this[1][4] = "西部炒蛋（Hangtown fry)。";
        this[1][5] = "完美的班尼迪克蛋（Eggs benedict）。";
    }else{
        this[1][0] = "Woodberry Kitchen is housed in an old brick factory building.";
        this[1][1] = "The restaurant is renowned for its fresh food directly from local growers and organic meat.";
        this[1][2] = "Tea.";
        this[1][3] = "Cinnamon sugar cake donut.";
        this[1][4] = "Hangtown fry.";
        this[1][5] = "Eggs benedict.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
