<!--
//Created by Album Builder Program Sat Sep 17 17:17:36 2011
var info_url   = "http://www.tabardinn.com/restaurant";
var title      = "Tabard Inn Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1109tabardinn/";
//var dir        = csdpdir+"pics/1109tabardinn/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Beautiful_CA.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Tabard旅馆饭店";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1109tabardinn_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "旅馆和饭店入口。";
        this[1][1] = "茶。";
        this[1][2] = "海鲜gumbo汤饭。";
        this[1][3] = "煮荷包蛋，碎咸牛肉，配蛋黄酱。";
    }else{
        this[1][0] = "Front of the Hotel Tabard Inn on N Street.";
        this[1][1] = "Tea.";
        this[1][2] = "Seafood gumbo.";
        this[1][3] = "Poached egg over corned beef hash with Bearnaise sauce.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
