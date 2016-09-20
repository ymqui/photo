<!--
//Created by Album Builder Program Sun Mar 04 18:11:38 2007
var info_url   = "http://www.ballyshaners.org";
var title      = "2007 Alexandria St. Patrick's Day Parade";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0703parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WexfordCarol.mid";
var midi_cr    = new Array("Irish Music","http://www.fionasplace.net/Irishmusic.html");
 
if(window.usechinese){
    title      = "2007年亚历山大市圣帕特里克节游行";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<58;i++){
        this[0][i] = "0703parade_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "游行这天，街道两边点缀着绿色的气球。";
        this[1][1] = "游行前有个趣味狗大赛。";
        this[1][2] = "好朋友。";
        this[1][12] = "游行的街道。";
        this[1][13] = "亚历山大市是个对狗很友好的城市。";
        this[1][15] = "体型硕大的爱尔兰猎狼犬。";
        this[1][20] = "众议员Jim Moran。";
        this[1][21] = "爱尔兰大使在车里。";
        this[1][29] = "爱尔兰国旗。";
    }else{
        this[1][0] = "Green balloons dotted King Street on the day of St. Patrick's Day parade.";
        this[1][1] = "Before the parade, a fun dog show was held at the market square.";
        this[1][2] = "Buddies.";
        this[1][12] = "Parade route.";
        this[1][13] = "Alexandria is a very dog-friendly city.";
        this[1][15] = "Irish wolfhound.";
        this[1][17] = "Dignitaries.";
        this[1][20] = "Congressman Jim Moran.";
        this[1][21] = "Inside was Irish Ambassador.";
        this[1][29] = "Irish flag.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
