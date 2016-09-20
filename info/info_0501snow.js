<!--
//Created by Album Builder Program Mon Jan 24 21:08:26 2005
var info_url   = "";
var title      = "Snow";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0501snow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "LetItSnow.mid";
var midi_cr    = new Array("CMIDI","http://www.cmidi.com/");
 
if(window.usechinese){
    title      = "雪景";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<9;i++){
        this[0][i] = "0501snow__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "今年最大的一场雪。";
        this[1][1] = "雪景。";
        this[1][2] = "兰花草。";
        this[1][3] = "窗外飘雪。";
        this[1][4] = "雪景。";
        this[1][5] = "雪景。";
        this[1][6] = "雪景。";
        this[1][7] = "雪景。";
        this[1][8] = "雪景。";
    }else{
        this[1][0] = "The heaviest snow this year.";
        this[1][1] = "Snow scene shot at backyard.";
        this[1][2] = "Icy cover.";
        this[1][3] = "Snowing outside.";
        this[1][4] = "Snow scene shot at front porch.";
        this[1][5] = "Snow scene.";
        this[1][6] = "Snow scene.";
        this[1][7] = "Snow scene.";
        this[1][8] = "Snow scene.";
    }
}

//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
