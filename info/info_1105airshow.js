<!--
//Created by Album Builder Program Tue May 24 21:59:42 2011
var info_url   = "http://www.jsoh.org/";
var title      = "Air Show";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1105airshow/";
//var dir        = csdpdir+"pics/1105airshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AveMaria.mid";
var midi_cr    = new Array("PatMW's Midi Collection","http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "飞行表演";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<25;i++){
        this[0][i] = "1105airshow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][4] = "空中打字机。";
        this[1][9] = "A-10雷电攻击机。";
        this[1][10] = "F-15鹰式战机。";
        this[1][14] = "雷鸟飞行表演队。";
    }else{
        this[1][0] = "John Klatt flying the Air National Guard Staudacher S-300D.";
        this[1][1] = "John Klatt flying the Air National Guard Staudacher S-300D.";
        this[1][4] = "Geico Skytypers.";
        this[1][8] = "Greg Poe flying the Fagan MX2.";
        this[1][9] = "A-10 Thunderbolt.";
        this[1][10] = "F-15 Eagle.";
        this[1][12] = "Sean Tucker flying his Oracle Challenger Biplane.";
        this[1][14] = "Thunderbirds.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
