<!--
//Created by Album Builder Program Fri Jan 06 22:08:27 2012
var info_url   = "";
var title      = "Graffiti";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/2011graffiti/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "FirstCutIsTheDeepest.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "涂鸦";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "2011graffiti_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "哥伦比亚特区华盛顿乔治镇P街3320号。";
        this[1][1] = "马里兰巴尔的摩西19半街。";
        this[1][8] = "哥伦比亚特区华盛顿西北P街1633号。";
        this[1][9] = "哥伦比亚特区华盛顿涂鸦名人堂。";
        this[1][15] = "纽约市东106街/公园大道。";
        this[1][17] = "纽约市东104街/第五大道。";
    }else{
        this[1][0] = "3320 P Street, Georgetown, DC";
        this[1][1] = "W 19 and 1/2 Street, Baltimore, MD";
        this[1][8] = "1633 P Street NW, DC";
        this[1][9] = "Graffiti Hall of Fame, DC";
        this[1][15] = "E 106 St & Park Ave, New York, NY";
        this[1][17] = "E 104 St & 5th Ave, New York, NY";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
