<!--
//Created by Album Builder Program Wed Mar 25 20:11:15 2015
var info_url   = "http://ejjiramen.com/";
var title      = "Ejji Ramen";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1503ejji/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "FromWhereIAm.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "前卫拉面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1503ejji_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "前卫拉面馆在巴尔的摩北边一个繁忙的市场里头。";
        this[1][1] = "猪骨汤拉面，两块方形的是油炸猪肉。";
        this[1][2] = "猪骨汤拉面。";
        this[1][3] = "猪骨汤拉面，加额外的金针菇。金针菇是生的。";
        this[1][4] = "猪骨汤拉面。";
    }else{
        this[1][0] = "Ejji (edgy) Ramen is located inside the Belvedere Square Market.";
        this[1][1] = "Tonkotsu ramen with two piececs of tonkatsu.";
        this[1][2] = "Tonkotsu ramen.";
        this[1][3] = "Tonkotsu ramen with enoki mushroom.";
        this[1][4] = "Tonkotsu ramen with enoki mushroom.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
