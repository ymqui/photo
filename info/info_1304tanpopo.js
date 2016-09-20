<!--
//Created by Album Builder Program Sat Apr 20 16:43:49 2013
var info_url   = "http://www.tanpoporamenhouse.com";
var title      = "Tanpopo Ramen House";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1304tanpopo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "KillingMeSoftly.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "蒲公英面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1304tanpopo_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "辣金枪鱼寿司。";
        this[1][2] = "炸鸡，很香。";
        this[1][3] = "东京酱汤面。不错。";
        this[1][4] = "九州骨汤面，也不错。";
    }else{
        this[1][1] = "Lunch special comes with three pieces of spicy tuna roll.";
        this[1][2] = "Chicken karaage. Delicious.";
        this[1][3] = "Tokyo shoyu ramen. Both the noodle and broth are not bad.";
        this[1][4] = "Kyushu tonkotsu ramen. Not bad.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
