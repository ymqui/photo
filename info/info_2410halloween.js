<!--
//Created by Album Builder Program Wed Nov 06 08:08:53 2024
var info_url   = "";
var title      = "Fallsmead Halloween Parade & Party";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2410halloween/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Fallsmead Halloween Parade & Party";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "2410halloween_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Pricipal Mrs. Spaugh leads the parade.";
        this[1][1] = "Mrs. Wasser and the first grade kids.";
        this[1][2] = "Nathan and his classmates Gia and Ema.";
        this[1][3] = "Nathan wearing the Pikachu costume in the parade.";
        this[1][4] = "Ms Morris and the first grade kids.";
        this[1][5] = "Nathan in the Halloween party.";
        this[1][6] = "Nathan in the Halloween party.";
        this[1][7] = "Mrs. Wasser helping Nathan do a volcano experiment.";
        this[1][8] = "Mrs. Wasser helping Nathan do a volcano experiment.";
        this[1][9] = "Nathan decorating a pumpkin.";
        this[1][10] = "Nathan holding his pumpkin.";
        this[1][11] = "Nathan holding his pumpkin.";
        this[1][12] = "Nathan holding his hand shaped popcorn bag.";
        this[1][13] = "Playing bingo games with Mrs. Wasser.";
    }else{
        this[1][0] = "Pricipal Mrs. Spaugh leads the parade.";
        this[1][1] = "Mrs. Wasser and the first grade kids.";
        this[1][2] = "Nathan and his classmates Gia and Ema.";
        this[1][3] = "Nathan wearing the Pikachu costume in the parade.";
        this[1][4] = "Ms Morris and the first grade kids.";
        this[1][5] = "Nathan in the Halloween party.";
        this[1][6] = "Nathan in the Halloween party.";
        this[1][7] = "Mrs. Wasser helping Nathan do a volcano experiment.";
        this[1][8] = "Mrs. Wasser helping Nathan do a volcano experiment.";
        this[1][9] = "Nathan decorating a pumpkin.";
        this[1][10] = "Nathan holding his pumpkin.";
        this[1][11] = "Nathan holding his pumpkin.";
        this[1][12] = "Nathan holding his hand shaped popcorn bag.";
        this[1][13] = "Playing bingo games with Mrs. Wasser.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
