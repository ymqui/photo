<!--
//Created by Album Builder Program Sat Jan 31 22:54:35 2015
var info_url   = "http://www.tentenramen.com/";
var title      = "TenTen Ramen";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1501tenten/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Daydreamer.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "天天拉面";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1501tenten_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "天天拉面馆是巴尔的摩的第一家日式拉面馆。";  
        this[1][1] = "割包，肉有点硬。";
        this[1][3] = "辣猪骨汤拉面，很好吃。";
        this[1][4] = "盐味拉面，也很不错。";
    }else{
        this[1][0] = "TenTen Ramen is the first ramen shop in Baltimore.";  
        this[1][1] = "Gwa-bao, steamed bun filled with braised pork.";
        this[1][2] = "Fried tofu.";
        this[1][3] = "Spicy tonkotsu ramen. Delicious.";
        this[1][4] = "Shio ramen. Also very good.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
