<!--
//Created by Album Builder Program Sun Mar 02 10:11:47 2008
var info_url   = "http://www.ballyshaners.org/";
var title      = "Alexandria Saint Patrick's Day Parade";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0803stpatrickparade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "RoseOfTralee.mid";
var midi_cr    = new Array("Irish Midi Files","http://www.socc.ie/~irishmidifiles/midifiles.htm");
 
if(window.usechinese){
    title      = "亚历山大市圣帕特里克节游行";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "0803stpatrickparade_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小女孩在街头起舞。";
        this[1][1] = "绿是爱尔兰的颜色。";
        this[1][2] = "仪仗队。";
        this[1][3] = "风笛鼓乐队。";
        this[1][10] = "爱尔兰舞蹈学校的女孩子。";
        this[1][17] = "观众。";
    }else{
        this[1][0] = "A little girl danced on the street while waiting for the parade to start.";
        this[1][1] = "A lady with her cute dog.";
        this[1][2] = "Military honor guard.";
        this[1][3] = "Pipes and Drums band.";
        this[1][10] = "Girls from an Irish dance school.";
        this[1][17] = "The audience.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
