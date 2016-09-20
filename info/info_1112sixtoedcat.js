<!--
//Created by Album Builder Program Wed Jan 04 21:10:19 2012
var info_url   = "http://www.sixtoedcatkeywest.com/";
var title      = "Six-Toed Cat";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1112sixtoedcat/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HaveYouEver.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "六爪猫餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1112sixtoedcat_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "餐馆就在海明威故居边上。";
        this[1][1] = "美式早餐。";
        this[1][2] = "煎蛋卷。";
    }else{
        this[1][0] = "Six-Toed Cat is right next to the Hemingway home in Key West.";
        this[1][1] = "All American Breakfast.";
        this[1][2] = "The Club Omelet.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
