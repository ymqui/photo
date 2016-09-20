<!--
//Created by Album Builder Program Mon Aug 25 22:03:36 2008
var info_url   = "http://www2.thaiembdc.org/Activities/thaifest/default.html";
var title      = "Thai Festival 2008";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0808thaifestival/";
//var dir        = csdpdir+"pics/0808thaifestival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AlwaysOnMyMind.mid";
var midi_cr    = new Array("Quality Midi Files","http://server3.myebiz.com/chryspage/midi_files.html");
 
if(window.usechinese){
    title      = "2008泰国节";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "0808thaifestival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "2008泰国节在火车站举行。";
        this[1][3] = "织锦舞";
        this[1][4] = "泰国东北部的一种舞蹈";
        this[1][5] = "泰国长鼓舞";
        this[1][8] = "快乐天使舞";
        this[1][11] = "民间故事改编的舞蹈";
        this[1][12] = "泰国南部的一种舞蹈";
        this[1][13] = "北部的指甲舞";
        this[1][15] = "泰拳";
    }else{
        this[1][0] = "The 2008 Thai Festival is held in Union Station.";
        this[1][3] = "Fon Sao Mai: Silk Weaving Dance";
        this[1][4] = "Serng Pong-Lang: Thailand's Northeastern Dance";
        this[1][5] = "Theut-Theng Dance: Klong Yao Dance, Long Drum Dance";
        this[1][8] = "Rabum Tepbunteng: Joyful Angels Dance";
        this[1][11] = "Rojana Sieng Puang Malai: Drama Dance taken from a Thai Folk Tale";
        this[1][12] = "Ram Sat Chatri: Thailand's Southern Dance";
        this[1][13] = "Fon Leb: Thailand's Northern Dance, Nail Dance";
        this[1][15] = "Muay Thai: Thai Kick Boxing";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
