<!--
//Created by Album Builder Program Fri Dec 24 09:44:51 2010
var info_url   = "http://www.princess.com/find/itineraryDetails.do?voyageCode=3102";
var title      = "Caribbean Cruise";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1012cruise/";
//var dir        = csdpdir+"pics/1012cruise/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Incomplete.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "游加勒比";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<23;i++){
        this[0][i] = "1012cruise_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "公主号游轮停泊在加勒比海上。";
        this[1][1] = "公主号游轮停泊在洪都拉斯Roatan岛。";
        this[1][3] = "巴哈马斯Princess Cays上的海滩。";
        this[1][4] = "洪都拉斯Roatan岛的一个小码头。";
        this[1][5] = "日出。";
        this[1][6] = "大开曼岛上的海盗。";
        this[1][7] = "一只绿蜥蜴。";
        this[1][8] = "墨西哥Coba玛雅遗迹。";
        this[1][9] = "玛雅球场。";
        this[1][10] = "玛雅遗迹。";
        this[1][14] = "游轮上的歌舞演出。";
    }else{
        this[1][0] = "Crown Princess anchored in the Caribbean sea.";
        this[1][1] = "Crown Princess anchored in Roatan Island, Honduras.";
        this[1][3] = "Beach of Princess Cays Island.";
        this[1][4] = "A dock in Roatan Island, Honduras.";
        this[1][5] = "Sunrise.";
        this[1][6] = "A pirate-costumed man in Grand Cayman Island.";
        this[1][7] = "A green lizard.";
        this[1][8] = "Coba Maya ruins in Mexico.";
        this[1][9] = "Mayan Ball court.";
        this[1][10] = "Coba Maya ruins.";
        this[1][14] = "Show on the cruise ship.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->