<!--
//Created by Album Builder Program Mon Jan 02 17:25:00 2012
var info_url   = "";
var title      = "New Orleans";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1112neworleans/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WalkOnTheWildSide.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "新奥尔良之夜";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "1112neworleans_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "法国街区的爵士乐圣地Preservation Hall.";
        this[1][1] = "Preservation Hall里的爵士乐表演。";
        this[1][3] = "运河街上的有轨电车。";
        this[1][4] = "法国街区。";
        this[1][6] = "街头表演者。";
        this[1][7] = "街头表演者。";
        this[1][8] = "街头表演者。";
        this[1][9] = "法国街区。";
        this[1][15] = "法国街区欧洲爵士吧里的爵士乐表演。";
    }else{
        this[1][0] = "Preservation Hall in the French Quarter.";
        this[1][1] = "Preservation Hall Jazz Performance.";
        this[1][3] = "Streetcar on Canal Street.";
        this[1][4] = "French Quarter.";
        this[1][6] = "A street performer.";
        this[1][7] = "A street performer.";
        this[1][8] = "A street performer.";
        this[1][9] = "French Quarter.";
        this[1][15] = "Jazz performance at Fritzel's European Jazz Pub.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
