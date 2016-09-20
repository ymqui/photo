<!--
//Created by Album Builder Program Sat Jan 21 21:15:20 2006
var info_url   = "http://nationalzoo.si.edu/Animals/Birds/Exhibit/default.cfm?exhibit=Pollinarium";
var title      = "Butterflies and Hummingbird at National Zoo";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0601butterfly/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Butterfly.mid";
var midi_cr    = new Array("Night Angel","http://www.nightangelmusic.com/pages/index9.html");
 
if(window.usechinese){
    title      = "花，蝶，蜂鸟";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素, 300D相机, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<27;i++){
        this[0][i] = "0601butterfly_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "朱丽亚蝴蝶。";
        this[1][1] = "蝴蝶。";
        this[1][2] = "长翅斑马纹蝴蝶。";
        this[1][3] = "蝴蝶。";
        this[1][4] = "蝴蝶。";
        this[1][5] = "蝴蝶。";
        this[1][6] = "蝴蝶。";
        this[1][7] = "蝴蝶。";
        this[1][8] = "蝴蝶。";
        this[1][9] = "蝴蝶。";
        this[1][10] = "蝴蝶。";
        this[1][11] = "蝴蝶。";
        this[1][12] = "蝴蝶。";
        this[1][13] = "蝴蝶。";
        this[1][14] = "蝴蝶。";
        this[1][15] = "水母，多象一只水中的蝴蝶。";
        this[1][16] = "科氏蜂鸟。";
        this[1][17] = "科氏蜂鸟。";
        this[1][18] = "科氏蜂鸟。";
        this[1][19] = "科氏蜂鸟。";
        this[1][20] = "科氏蜂鸟。";
        this[1][21] = "花。";
        this[1][22] = "花团。";
        this[1][23] = "花蕊。";
        this[1][24] = "花。";
        this[1][25] = "花朵。";
        this[1][26] = "三角梅。";
    }else{
        this[1][0] = "A Julia butterfly.";
        this[1][1] = "A Julia butterfly.";
        this[1][2] = "A zebra longwing butterfly.";
        this[1][3] = "A zebra longwing butterfly.";
        this[1][4] = "A zebra longwing butterfly.";
        this[1][5] = "A Julia butterfly.";
        this[1][6] = "A zebra longwing butterfly.";
        this[1][7] = "A zebra longwing butterfly.";
        this[1][8] = "A Julia butterfly.";
        this[1][9] = "Two Julia butterflies.";
        this[1][10] = "Two Julia butterflies.";
        this[1][11] = "A Julia butterfly.";
        this[1][12] = "A Julia butterfly.";
        this[1][13] = "A Julia butterfly.";
        this[1][14] = "A Julia butterfly.";
        this[1][15] = "A jellyfish, like a butterfly in the water.";
        this[1][16] = "A Costa's hummingbird.";
        this[1][17] = "A female Costa's hummingbird.";
        this[1][18] = "A Costa's hummingbird.";
        this[1][19] = "A Costa's hummingbird.";
        this[1][20] = "A Costa's hummingbird spitting.";
        this[1][21] = "A flower.";
        this[1][22] = "A flower.";
        this[1][23] = "A flower.";
        this[1][24] = "Flowers.";
        this[1][25] = "Flowers.";
        this[1][26] = "Flowers.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
