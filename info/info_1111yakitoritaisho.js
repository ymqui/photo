<!--
//Created by Album Builder Program Mon Nov 14 21:24:11 2011
var info_url   = "http://www.yakitoritaisho.com/main/";
var title      = "Yakitori Taisho Japanese Grill Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1111yakitoritaisho/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Angels_JS.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "大将日式烧烤店";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1111yakitoritaisho_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][3] = "暖烧酒。";
        this[1][4] = "日式烤串。";
        this[1][6] = "烤猪脚。";
    }else{
        this[1][3] = "Warmed Sake.";
        this[1][4] = "Yakitori.";
        this[1][6] = "Grilled Pork Feet.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
