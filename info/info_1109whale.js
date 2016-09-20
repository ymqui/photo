<!--
//Created by Album Builder Program Wed Sep 07 21:13:51 2011
var info_url   = "http://www.captjohn.com/";
var title      = "Whale Watching";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1109whale/";
//var dir        = csdpdir+"pics/1109whale/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "LiveToTell.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "看鲸鱼";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "1109whale_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "普利茅斯港。";
        this[1][1] = "五月花二号，按著名的五月花号仿制。";
        this[1][3] = "普利茅斯街景。";
        this[1][4] = "座头鲸。";
        this[1][5] = "座头鲸是须鲸，有两个换气孔。";
        this[1][8] = "座头鲸吐泡泡来帮助捕食。";
    }else{
        this[1][0] = "Plymouth harbor.";
        this[1][1] = "Mayflower II.";
        this[1][3] = "Downtown Plymouth.";
        this[1][4] = "Humpback whales.";
        this[1][5] = "Humpback whale, a baleen whale, has two blowholes.";
        this[1][8] = "Humpbacks blow bubbles to trap preys.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
