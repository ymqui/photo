<!--
//Created by Album Builder Program Mon Jan 06 22:09:00 2014
var info_url   = "http://www.yelp.com/biz/the-olde-pink-house-restaurant-savannah";
var title      = "The Olde Pink House Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1312oldepinkhouse/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BlackDiamond.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "粉红老房餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1312oldepinkhouse_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][2] = "炒虾和油炸车达芝士玉米糊糕。";
        this[1][3] = "海扇贝配糖荚豌豆和土豆泥。";
        this[1][4] = "炸杏仁裹罗非鱼，配玉米糊和豆子。";
    }else{
        this[1][2] = "Sauteed local shrimp with cheddar cheese grits cake.";
        this[1][3] = "Jumbo sea scallops with sugar snap peas and mashed potatoes.";
        this[1][4] = "Almond encrusted tilapia with creamy grits and mixed beans.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
