<!--
//Created by Album Builder Program Sun Aug 07 11:29:01 2011
var info_url   = "http://www.joescrabshack.com/";
var title      = "Joe's Crab Shack";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1107joes/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Fifteen.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Joe的螃蟹屋";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "1107joes_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "开胃菜：螃蟹酱，炸鱿鱼圈和螃蟹丸。";
        this[1][2] = "波士顿式蒸海鲜，有龙虾，土豆，蚌，玉米和燻肠。";
    }else{
        this[1][1] = "Appetizer: Joe's classic sampler.";
        this[1][2] = "The beantown bake steampot.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
