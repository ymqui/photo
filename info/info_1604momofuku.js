<!--
//Created by Album Builder Program Sat Apr 09 17:53:18 2016
var info_url   = "https://ccdc.momofuku.com/";
var title      = "Momofuku CCDC";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1604momofuku/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Faithfully.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "Momofuku餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1604momofuku_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这家连锁餐馆刚开不久。Momofuku餐馆的拉面和割包很有名。";
        this[1][1] = "割包。";
        this[1][2] = "Momofuku拉面。";
        this[1][3] = "Momofuku牛肉面。";
        this[1][5] = "冰激凌甜点。";
        this[1][6] = "巧克力小蛋糕。";
    }else{
        this[1][0] = "Interior of Momofuku at CityCenterDC.";
        this[1][1] = "Pork bun.";
        this[1][2] = "Momofuku ramen.";
        this[1][3] = "Momofuku beef noodle soup.";
        this[1][5] = "Soft serve, cereal milk flavor.";
        this[1][6] = "Cake truffle, chocalate malt flavor.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
