<!--
//Created by Album Builder Program Sun Jul 10 21:32:52 2011
var info_url   = "http://www.snakerivergrill.com/";
var title      = "Snake River Grill";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1106sng/";
//var dir        = csdpdir+"pics/1106sng/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MilkToastHoney.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "蛇溪烧烤餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1106sng_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这家餐馆就在杰克逊的镇中心广场边。";
        this[1][1] = "熏三文鱼土豆煎饼。";
        this[1][2] = "烤牛排。";
        this[1][3] = "裹玉米糊炸的爱达荷州鳟鱼。";
        this[1][4] = "脆皮猪小腿。";
    }else{
        this[1][0] = "Snake River Grill is located on the town square of Jackson Hole, Wyoming.";
        this[1][1] = "Potato pancake topped with smoked salmon.";
        this[1][2] = "Flat iron steak.";
        this[1][3] = "Cornmeal crusted Idaho trout.";
        this[1][4] = "Crispy pork shank.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
