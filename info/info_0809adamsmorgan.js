<!--
//Created by Album Builder Program Sun Sep 21 21:14:11 2008
var info_url   = "http://www.adamsmorgandayfestival.com/";
var title      = "Adams Morgan Day Festival";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0809adamsmorgan/";
//var dir        = csdpdir+"pics/0809adamsmorgan/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ForeverInLove.mid";
var midi_cr    = new Array("Tammy","http://www.luvscreations.com/midi.htm");
 
if(window.usechinese){
    title      = "亚当斯摩根街区日";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "0809adamsmorgan_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "亚当斯摩根街区是华盛顿一个很有文化特色的地方。";
        this[1][2] = "每年街区都举办街区日来庆祝这里的文化传统。";
        this[1][3] = "Saffron舞蹈团的肚皮舞。";
        this[1][8] = "Batala女子鼓队。";
        this[1][13] = "Tobas Dinastia玻利维亚舞蹈。";
    }else{
        this[1][0] = "Adams Morgan is a culturally diverse neighborhood in Northwest Washington, DC.";
        this[1][2] = "Every year the neighborhood celebrates its culture diversity with the Adams Morgan Day Festival.";
        this[1][3] = "Saffron belly dance.";
        this[1][8] = "Batala drummers and dancers.";
        this[1][13] = "Tobas Dinastia Bolivian folk dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
