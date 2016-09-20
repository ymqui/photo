<!--
//Created by Album Builder Program Wed Nov 16 22:18:49 2011
var info_url   = "http://en.wikipedia.org/wiki/Manhattan";
var title      = "Manhattan";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1111manhattan/";
//var dir        = csdpdir+"pics/1111manhattan/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Immortality.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "纽约曼哈顿";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1111manhattan_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "布鲁克林桥上拍的曼哈顿黄昏。";
        this[1][2] = "新泽西自由州立公园拍的曼哈顿夜景。";
    }else{
        this[1][0] = "Shot from the Brooklyn Bridge.";
        this[1][2] = "Shot from the Liberty State Park in Jersey City, New Jersey.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
