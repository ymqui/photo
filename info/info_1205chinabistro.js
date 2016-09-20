<!--
//Created by Album Builder Program Sun May 20 20:08:20 2012
var info_url   = "http://www.yelp.com/biz/china-bistro-rockville";
var title      = "China Bistro";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1205chinabistro/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "RedRedWine.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "妈妈水饺";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1205chinabistro_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "辣酱，醋，和酱油。";
        this[1][2] = "开胃菜：素鸭，毛豆，黄金豆。";
        this[1][3] = "水饺。";
    }else{
        this[1][1] = "Chili sauce,  vinegar, and soy sauce.";
        this[1][2] = "Appetizers.";
        this[1][3] = "Dumplings.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
