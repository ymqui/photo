<!--
//Created by Album Builder Program Sat Mar 10 22:32:40 2012
var info_url   = "http://www.fws.gov/blackwater/";
var title      = "Black Water NWR Birding";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1203blackwater/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "UntilTheTimeIsThrough.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "黑水国家野生动物保护区观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1203blackwater_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "琵嘴鸭。";
        this[1][1] = "小天鹅。";
        this[1][2] = "雪雁。";
        this[1][3] = "红翅黑鹂。";
        this[1][5] = "白头鹰。";
        this[1][6] = "欧椋鸟。";
    }else{
        this[1][0] = "Northern Shoveler.";
        this[1][1] = "Tundra Swan.";
        this[1][2] = "Snow Goose.";
        this[1][3] = "Red-winged Blackbird.";
        this[1][5] = "Bald Eagle.";
        this[1][6] = "European Starling.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
