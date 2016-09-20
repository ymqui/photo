<!--
//Created by Album Builder Program Sun Apr 23 22:04:45 2006
var info_url   = "http://www.guilfordnews.com/guilfordstratford.htm";
var title      = "Tulips in Sherwood Garden, Baltimore";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0604tulip/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "VeryGood.mid";
var midi_cr    = new Array("CMIDI","http://www.cmidi.com/");
 
if(window.usechinese){
    title      = "雪木花园赏郁金香";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<27;i++){
        this[0][i] = "0604tulip_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "雪木花园是座落于巴尔的摩的一个漂亮的社区公园。";
        this[1][1] = "小韵。";
        this[1][2] = "春天一到，花园里盛开的郁金香成为巴尔的摩的一大美景。";
        this[1][7] = "小韵和汇钢。";
    }else{
        this[1][0] = "Sherwood Garden is a beautiful community garden in north Baltimore.";
        this[1][1] = "Yun.";
        this[1][2] = "The garden is famous for its blooming tulips in the spring.";
        this[1][7] = "Yun and Huigang.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->