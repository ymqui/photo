<!--
//Created by Album Builder Program Mon May 14 07:57:13 2007
var info_url   = "http://www.nmai.si.edu/hawaii/";
var title      = "2007 Hawaiian Festival";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0705hula/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AlohaOe.mid";
var midi_cr    = new Array("Ke Kukima Polinahe","http://www.mark-o.com/kukimapolinahe.html");
 
if(window.usechinese){
    title      = "2007夏威夷节";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<33;i++){
        this[0][i] = "0705hula_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "听Nalani Olds讲Lili'uokalani女王的故事。";
        this[1][1] = "Halau O `Aulani舞蹈学校表演的夏威夷舞蹈。";
        this[1][21] = "Halau Ho`omau I Ka Wai Ola O Hawai`i(越舞越年轻)舞蹈学校表演的夏威夷舞蹈。";
    }else{
        this[1][0] = "Nalani Olds telling stories and singing songs about the life of Queen Lili'uokalani.";
        this[1][1] = "Hula performed by Halau O `Aulani.";
        this[1][21] = "Hula performed by Halau Ho`omau I Ka Wai Ola O Hawai`i.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
