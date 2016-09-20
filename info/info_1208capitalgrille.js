<!--
//Created by Album Builder Program Sat Aug 18 21:29:55 2012
var info_url   = "http://www.thecapitalgrille.com/Locations/WashingtonDC/Main.asp";
var title      = "The Capital Grille";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1208capitalgrille/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TakeABow.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "首都烧烤";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "1208capitalgrille_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "首都烧烤位于宾夕法尼亚大道上，离国会山不远。";
        this[1][2] = "蛤蜊汤。";
        this[1][3] = "色拉里的小西红柿特别好吃。";
        this[1][4] = "三文鱼。";
        this[1][5] = "菲列牛排。";
        this[1][6] = "巧克力咖啡蛋糕。";
        this[1][7] = "覆盆子果汁冰糕。";
    }else{
        this[1][0] = "The capital grille is located on Pennsylvania Ave., not far away from the Capitol.";
        this[1][2] = "Clam chowder.";
        this[1][3] = "The heirloom tomatoes in the salad are full of flavor.";
        this[1][4] = "Seared citrus glazed salmon.";
        this[1][5] = "Filet mignon.";
        this[1][6] = "Chocolate espresso cake.";
        this[1][7] = "Raspberry sorbet.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
