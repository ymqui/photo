<!--
//Created by Album Builder Program Thu Jan 03 22:08:05 2013
var info_url   = "http://seaworldparks.com/seaworld-sandiego";
var title      = "San Diego SeaWorld";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1212seaworld/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "NineMillionBicycles.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "圣地亚哥海洋公园";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "1212seaworld_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "虎鲸。";
        this[1][1] = "白鲸。";
        this[1][2] = "企鹅。";
        this[1][3] = "海鹦。";
        this[1][5] = "巨头鲸。";
        this[1][6] = "海豚。";
        this[1][7] = "海豚。";
        this[1][8] = "海狮。";
        this[1][10] = "虎鲸。";
        this[1][11] = "虎鲸。";
    }else{
        this[1][0] = "Killer whale.";
        this[1][1] = "Beluga whale.";
        this[1][2] = "Penguin.";
        this[1][3] = "Puffin.";
        this[1][5] = "Pilot whale.";
        this[1][6] = "Dolphins.";
        this[1][7] = "Dolphins.";
        this[1][8] = "Sea lion.";
        this[1][10] = "Killer whale.";
        this[1][11] = "Killer whales.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
