<!--
//Created by Album Builder Program Sat Dec 15 16:14:01 2012
var info_url   = "http://www.nga.gov/";
var title      = "National Gallery of Art";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1212nga/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "YouLostMe.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "国家艺术博物馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1212nga_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "艺术馆里的喷泉。";
        this[1][1] = "达芬奇的名画《吉内薇拉·德·班琪》(Ginevra de' Benci)。";
        this[1][3] = "乔凡尼．得拉．若比亚(Giovanni della Robbia)的圣殇。";
        this[1][4] = "米开朗基罗的大卫阿波罗雕塑。";
        this[1][5] = "安德里亚·德尔·韦罗基奥（Andrea del Verroccho）的妇人头像。";
    }else{
        this[1][0] = "Fountain.";
        this[1][1] = "Leonardo da Vinci's Ginevra de' Benci.";
        this[1][3] = "Pietà by Giovanni della Robbia.";
        this[1][4] = "Michelangelo's David-Apollo.";
        this[1][5] = "A Lady by Circle of Andrea del Verroccho.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
