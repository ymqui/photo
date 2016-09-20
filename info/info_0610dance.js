<!--
//Created by Album Builder Program Sat Oct 28 16:27:52 2006
var info_url   = "http://www.ramavaidyanathan.com/";
var title      = "Rama Vaidyanathan's Bharata Natyam  Dance in the Freer and Sackler Gallery";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0610dance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "LadyInRed.mid";
var midi_cr    = new Array("Moonfairye","http://www.moonfairye.com/midicollection/midi2.htm");
 
if(window.usechinese){
    title      = "Rama Vaidyanathan表演印度婆罗多古典舞";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "0610dance_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "舞蹈在Freer和Sackler美术馆演出。";
        this[1][1] = "舞者是Rama Vaidyanathan，印度著名的婆罗多古典舞舞蹈家。";
        this[1][2] = "婆罗多舞是印度最古老的一种舞蹈。它最初起源于印度南部的寺庙和宫廷。";
        this[1][3] = "今天，这种舞蹈仍是印度最受欢迎的一种。";
    }else{
        this[1][0] = "The performance was organized by the Freer and Sackler Galleries of the Smithonian Institute.";
        this[1][1] = "The performer, Rama Vaidyanathan, is one of India's top Bharata Natyam dancers.";
        this[1][2] = "Bharata Natyam is one of the oldest dance forms in India, nurtured in the temples and courts of southern India since ancient times.";
        this[1][3] = "Today Bharata Natyam is one of the most popular and widely performed dance styles in India.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
