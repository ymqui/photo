<!--
//Created by Album Builder Program Tue Sep 06 22:30:19 2011
var info_url   = "http://www.blueblindsbakery.com/";
var title      = "The Blue Blinds Bakery";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1109blueblinds/";
//var dir        = csdpdir+"pics/1109blueblinds/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Everytime.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "蓝窗帘面包烘房";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1109blueblinds_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这家面包店的早餐可以说是镇上最好的。";
        this[1][1] = "烤面包片配上佛蒙特州的枫糖浆，好吃极了。";
        this[1][2] = "面包配荷包蛋和切达干酪，也很不错。";
    }else{
        this[1][0] = "The Blue Blinds Bakery is arguably the best breakfast place in Plymouth.";
        this[1][1] = "French toast with Vermont maple syrup. Highly recommended.";
        this[1][2] = "Egg & cheddar on specialty bread.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
