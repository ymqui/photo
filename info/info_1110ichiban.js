<!--
//Created by Album Builder Program Sun Oct 16 21:57:38 2011
var info_url   = "http://www.ichiban355.com/";
var title      = "Ichiban Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1110ichiban/";
//var dir        = csdpdir+"pics/1110ichiban/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Unspoken.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "在一番餐馆吃韩国火锅";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1110ichiban_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "开胃菜：生鱼片。金枪鱼的口感无以伦比。";
        this[1][2] = "凉菜。";
        this[1][3] = "牛肉和章鱼火锅。";
    }else{
        this[1][1] = "Sashimi sampler. The tuna is heavenly.";
        this[1][2] = "Banchan.";
        this[1][3] = "Beef and octopus jungol.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
