<!--
//Created by Album Builder Program Tue Jan 03 22:24:23 2012
var info_url   = "http://www.yelp.com/biz/cafe-maspero-new-orleans";
var title      = "Cafe Maspero";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1112cafemaspero/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IPromise.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Maspero餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1112cafemaspero_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Maspero餐馆地处法国街区。";
        this[1][1] = "色拉。";
        this[1][2] = "什锦饭。";
        this[1][3] = "油炸海鲜。";
    }else{
        this[1][0] = "Cafe Maspero is located in French Quarter.";
        this[1][1] = "Salad.";
        this[1][2] = "Cajun Jambalaya.";
        this[1][3] = "Seafood plate.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
