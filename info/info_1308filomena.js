<!--
//Created by Album Builder Program Sat Aug 24 23:29:26 2013
var info_url   = "http://www.filomena.com/";
var title      = "Filomena Ristorante";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1308filomena/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Runaway.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Filomena意大利餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1308filomena_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这家餐馆很多人认为是华盛顿最好的意大利餐馆。";
        this[1][1] = "炸鱿鱼圈。";
        this[1][2] = "意大利香肠。";
        this[1][3] = "黑面皮包海鲜，浇龙虾汁。";
        this[1][4] = "通心粉拌伏特加西红柿汁，加香菇和烤鸡胸肉。";
        this[1][5] = "青柠奶油蛋糕。";
        this[1][6] = "三层巧克力奶油蛋糕。";
    }else{
        this[1][0] = "Filomena is regarded by some as the best Italian restaurant in DC.";
        this[1][1] = "Calamari Fritti, fried calamari rings served with spicy marinara sauce.";
        this[1][2] = "Salsicce Di Casa, sweet Italian sausage.";
        this[1][3] = "Cannelloni Frutti Di Mare, seafood rolled in black pasta sheets, baked and covered with creamy cardinale lobster sauce.";
        this[1][4] = "Rigatoni Con Pollo Alla Vodka, rigatoni pasta with creamy vodka tomato sauce, topped with grilled chicken breast.";
        this[1][5] = "Key lime mousse cake.";
        this[1][6] = "Triple chocolate mousse cake.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
