<!--
//Created by Album Builder Program Sun Jun 24 11:18:45 2007
var info_url   = "http://www.dccaribbeancarnival.com";
var title      = "2007 DC Caribbean Carnival Parade";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0706carnival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "OneLove.mid";
var midi_cr    = new Array("Caribbean Midi","http://www.afromix.org/html/musique/ressources/midi/index.en.html");
 
if(window.usechinese){
    title      = "2007华盛顿加勒比狂欢节游行";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<27;i++){
        this[0][i] = "0706carnival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "每年的游行都在佐治亚大街，观众很多。";
        this[1][1] = "牛铃的声音清脆悦耳。";
        this[1][2] = "游行主要由舞蹈方阵组成。舞者大胆豪放。";
        this[1][16] = "观众也随着强劲的音乐起舞。";
        this[1][18] = "“看，他在拍我呢。”";
    }else{
        this[1][0] = "The annual DC Caribbean Carnival parade is along Georgia Avenue.";
        this[1][2] = "There's a lot of rubbing going on.";
        this[1][18] = '"Look, he is taking a photo of me."';
    }
    makeface = new Array();
    makeface[0] = 26;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
