<!--
//Created by Album Builder Program Mon Aug 27 23:16:22 2007
var info_url   = "http://www.rennfest.com/";
var title      = "2007 Maryland Renaissance Festival";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0708renaissance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "NightsInWhiteSatin.mid";
var midi_cr    = new Array("Best MIDI on the WEB","http://www.murrayco.com/midi.html");
 
if(window.usechinese){
    title      = "2007马里兰州文艺复兴节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<38;i++){
        this[0][i] = "0708renaissance_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "售票窗里的女孩。";
        this[1][2] = "卖花女。";
        this[1][5] = "卖冰女。";
        this[1][20] = "街头喝酒的女郎。";
        this[1][27] = "跳舞的女郎。";
        this[1][36] = "酒店。";
    }else{
        this[1][0] = "A girl at the ticket booth.";
        this[1][2] = "Flower girl.";
        this[1][7] = "Face painting lady.";
        this[1][10] = "Flower girl.";
        this[1][20] = "Two drinking ladies.";
        this[1][26] = "Archery girl.";
        this[1][27] = "A dancing girl.";
        this[1][34] = "Jousting contest.";
        this[1][35] = "A juggler.";
        this[1][36] = "A pub.";
        this[1][37] = "Drinking men.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
