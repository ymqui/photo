<!--
//Created by Album Builder Program Sun Jul 10 21:22:54 2011
var info_url   = "http://www.ocharleys.com/";
var title      = "O'Charley's Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1106ocharley/";
//var dir        = csdpdir+"pics/1106ocharley/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IAmYours.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "O'Charley餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1106ocharley_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "土豆汤。";
        this[1][2] = "烤牛排和排骨。";
        this[1][3] = "杉木板上烤的鲷鱼。";
        this[1][4] = "烤酱烧芝麻鸡配米饭。";
    }else{
        this[1][1] = "Patato soup.";
        this[1][2] = "Steak and half-rack baby back ribs.";
        this[1][3] = "Cedar-planked tilapia.";
        this[1][4] = "Teriyaki sesame chicken.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
