<!--
//Created by Album Builder Program Mon Nov 14 21:08:27 2011
var info_url   = "http://xianfoods.com/";
var title      = "Xian Famous Foods Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1111xianfamousfood/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "100Years.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "西安名吃饭馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1111xianfamousfood_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "西安名吃是纽约的一家连锁饭店，专营西安特色饮食。";
	this[1][1] = "肉夹馍。";
        this[1][2] = "凉皮。";
        this[1][3] = "孜然羊肉汤扯面。";
    }else{
        this[1][0] = "Xi'an Famous Foods is a small chain of restaurants located in New York City.";
        this[1][1] = "Stewed Pork Burger.";
        this[1][2] = "Liang Pi-Cold Skin Noodle.";
        this[1][3] = "Spicy Cumin Lamb Noodle.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
