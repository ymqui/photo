<!--
//Created by Album Builder Program Sun Mar 25 22:22:33 2012
var info_url   = "";
var title      = "Kabuki Demonstration";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1203kabuki/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ForYourEyesOnly.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "歌舞伎演示";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "1203kabuki_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "歌舞伎表演大师Bando Kotoji。";
        this[1][2] = "Nishizaki Emino在助手帮助下穿和服。";
        this[1][4] = "戴表演用的发饰。";
    }else{
        this[1][0] = "Kabuki dance master Bando Kotoji.";
        this[1][2] = "Nishizaki Emino is getting helped to put on a kimono.";
        this[1][4] = "Nishizaki Emino is getting helped to put on a wig for kabuki performance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
