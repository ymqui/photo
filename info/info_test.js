<!--
var info_url   = "";
var title      = "Test the new Canon Digital Rebel Camera";
var cam_img    = "camera_canon_rebel.jpg"
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels."
var dir        = maindir+"pics/other/";  //directory where pics are
var interval   = 5000;                   //interval for slide show in millisecond
var thumb_dir  = maindir+"thumbnail/";   //thumbnail directory
var ext        = ".jpg";                 //extension of the pic files
var midi_file = "DogJingleBells.wav";
//var midi_file  = "CMIDI_Memory.mid";     //midi file name
//var midi_cr    = new Array("CMIDI","http://www.cmidi.com/");

if(window.usechinese){
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
    title      = "测试";
}

document.title = title;

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos, shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "test_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "海棠花";
        this[1][1] = "海棠花";
        this[1][2] = "自己";
        this[1][3] = "雪压枝头";
        this[1][4] = "通缉令";
    }else{
        this[1][0] = "flower";
        this[1][1] = "flower";
        this[1][2] = '<img src="'+thumb_dir+'icon_bs.gif">  <img src="'+thumb_dir+'icon_sleep.gif">';
        this[1][3] = "snow";
        this[1][4] = '<img src="'+thumb_dir+'icon_bs.gif">  <img src="'+thumb_dir+'icon_sleep.gif">';
    }
}
//-->
