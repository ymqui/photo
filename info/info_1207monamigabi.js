<!--
//Created by Album Builder Program Sun Jul 22 18:26:37 2012
var info_url   = "http://www.monamigabi.com/home/?loc=bethesda";
var title      = "Mon Ami Gabi French Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1207monamigabi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "JustTheWayYouAre.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Mon Ami Gabi法国餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1207monamigabi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "贝塞斯达的Mon Ami Gabi法国餐馆。";
        this[1][1] = "面包涂覆盆子酱。";
        this[1][2] = "甜玉米凉汤，很爽口。";
        this[1][3] = "芝士焗洋葱汤，不合口味。";
        this[1][5] = "牛排配炸土豆。";
        this[1][6] = "三文鱼配昆诺阿藜，烧得不错。";
        this[1][7] = "浇着焦糖酱的面包布丁。";
    }else{
        this[1][0] = "Mon Ami Gabi restaurant in Bethesda.";
        this[1][1] = "Bread with raspberry jam.";
        this[1][2] = "Soup du jour-chilled sweet corn bisque with scallion cream, very refreshing.";
        this[1][3] = "Onion soup au gratin, not to my taste.";
        this[1][5] = "Steak frites with bordelaise sauce.";
        this[1][6] = "Atlantic salmon with leek quinoa.";
        this[1][7] = "Bread pudding with caramel sauce.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
