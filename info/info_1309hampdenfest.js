<!--
//Created by Album Builder Program Tue Sep 17 21:31:03 2013
var info_url   = "http://hampdenfest.blogspot.com/";
var title      = "Toilet Race at Hampdenfest";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1309hampdenfest/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ChasingPavements.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "汉普顿节看马桶赛车";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "1309hampdenfest_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "巴尔的摩的汉普顿街区每年都举办汉普顿节。";
        this[1][5] = "比赛时，马桶车只能靠重力驱动。";
        this[1][19] = "偶尔也发生意外事故。";
    }else{
        this[1][0] = "Hampdenfest is an annual event held at the Hampden neighborhood in Baltimore.";
        this[1][5] = "The vehicle can only be powerd by gravity during the race.";
        this[1][19] = "Accident happens.";
    }
    makeface = new Array();
    makeface[0] = 10;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
