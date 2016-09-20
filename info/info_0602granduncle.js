<!--
//Created by Album Builder Program Sat Feb 11 23:30:10 2006
var info_url   = "";
var title      = "Grand Uncle and Aunt Family";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0602granduncle/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Ciribiribin.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "舅公和小阿姨一家";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0602granduncle_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小阿姨的新家。";
        this[1][1] = "台阶。";
        this[1][2] = "五舅公。";
        this[1][3] = "阿姨和Alice.";
        this[1][4] = "舅公的刀功。";
        this[1][5] = "小妹妹Alice。";
        this[1][7] = "舅公的手艺真不错，这盘带鱼色香味俱全。";
        this[1][8] = "Alice在看卡通电视。";
        this[1][9] = "小弟弟Eric。";
        this[1][10] = "Eric和Alice兄妹。";
        this[1][11] = "丰盛的午餐。";
        this[1][12] = "爷孙俩。";
        this[1][14] = "舅公和小阿姨一家。";
        this[1][15] = "舅公，Eric，和我。";
    }else{
        this[1][0] = "My Aunt's new house.";
        this[1][1] = "Stairs.";
        this[1][2] = "Grand Uncle.";
        this[1][3] = "Aunt and Alice.";
        this[1][4] = "Grand Uncle is preparing the lunch."; 
        this[1][5] = "Lovely Alice.";
        this[1][7] = "A fish dish cooked by Grand Uncle.";
        this[1][8] = "Alice is watching TV.";
        this[1][9] = "Eric.";
        this[1][10] = "Alice and Eric.";
        this[1][11] = "Delicious lunch.";
        this[1][12] = "Grand Uncle and Alice.";
        this[1][14] = "My Aunt's family.";
        this[1][15] = "Grand Uncle, Eric, and me.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->