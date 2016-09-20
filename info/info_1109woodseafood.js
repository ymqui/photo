<!--
//Created by Album Builder Program Tue Sep 06 22:43:46 2011
var info_url   = "http://www.woodsseafoods.com/";
var title      = "Wood's Seafood";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1109woodseafood/";
//var dir        = csdpdir+"pics/1109woodseafood/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "GiveMeSomeLove.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "伍德海鲜店";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<2;i++){
        this[0][i] = "1109woodseafood_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "龙虾，蛤蜊浓汤，和鸡尾酒虾。";
        this[1][1] = "蒸龙虾。";
    }else{
        this[1][0] = "Lobsters & Clam chowder & Shrimp cocktail.";
        this[1][1] = "Steamed lobsters.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
