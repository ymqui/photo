<!--
//Created by Album Builder Program Mon Jan 06 21:15:19 2014
var info_url   = "http://redonionrestaurants.com/redonioncafe/";
var title      = "Red Onion Cafe";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1312redonioncafe/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BlueEyes.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "红洋葱餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1312redonioncafe_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "法国洋葱汤，这种汤真不好喝。";
        this[1][2] = "柠檬烤罗非鱼，配野米饭。";
        this[1][3] = "培根裹虾和烧烤鸡肉，配炸洋葱和土豆泥。";
    }else{
        this[1][1] = "French onion soup au gratin. Really not to my taste.";
        this[1][2] = "Lemon grilled tilapia, with wild rice.";
        this[1][3] = "Bacon-wrapped shrimp and BBQ chicken, with fried red onion and mashed potatoes.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
