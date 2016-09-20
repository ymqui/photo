<!--
//Created by Album Builder Program Mon Feb 13 21:53:09 2006
var info_url   = "";
var title      = "My Sister Visiting the Country Side";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0602country/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ComeSunday.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "姐一家回乡下游山";
    cam_tit    = "佳能Powershot A80, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "0602country_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "姐夫守着烧野草的火。";
        this[1][1] = "桃花。";
        this[1][2] = "山蕨。";
        this[1][3] = "琦琦。";
        this[1][4] = "姐夫。";
        this[1][5] = "琦琦和梨花争艳。";
        this[1][6] = "桃花。";
        this[1][7] = "琦琦和小姐姐。";
        this[1][8] = "火烧到屁股了。";
        this[1][9] = "琦琦。";
        this[1][10] = "姐。";
    }else{
        this[1][0] = "Captions in Chinese only.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->