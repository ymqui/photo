<!--
//Created by Album Builder Program Sun Mar 25 22:44:06 2007
var info_url   = "http://www.bhangrablowout.com/";
var title      = "Bhangra Blowout";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0703bhangra/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Bhangra.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/download/panjabi_mc-mundian_to_bach_ke.htm");
 
if(window.usechinese){
    title      = "Bhangra印度舞大赛";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<35;i++){
        this[0][i] = "0703bhangra_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "第14届Bhangra舞大赛是由乔治华盛顿大学的南亚协会主办的。";
        this[1][1] = "一个英国来的乐队演唱助兴。";
        this[1][4] = "参赛的都是大学舞蹈队。";
        this[1][5] = "Bhangra舞起源于印度旁遮普邦。";
        this[1][14] = "Bhangra舞的节奏来自于一种叫Dhol的双面鼓。";
        this[1][16] = "Bhangra舞节奏强劲，运动激烈，很受青少年欢迎。";
        this[1][26] = "观众也情不自禁地挤到台前起舞。";
        this[1][33] = "Drexel大学的啦啦队。";
        this[1][34] = "纽约大学队是这届比赛的冠军。";
    }else{
        this[1][0] = "The 14th Bhangra Blowout was organized by the George Washington University South Asian Society.";
        this[1][1] = "A band from England performed at the beginning of the show.";
        this[1][4] = "The Bhangra teams were from US universities.";
        this[1][5] = "Bhangra is a traditional folk dance native to Punjab.";
        this[1][14] = "The beat of Bhangra comes from Dhol, a two-headed drum.";
        this[1][16] = "Bhangra is a very good exercise to burn calories.";
        this[1][26] = "The audience couldn't help dancing in front of the stage.";
        this[1][33] = "Drexel fans.";
        this[1][34] = "The team from NYU won this year's competition.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
