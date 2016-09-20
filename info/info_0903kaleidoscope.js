<!--
//Created by Album Builder Program Sun Mar 01 23:10:38 2009
var info_url   = "http://www.kennedy-center.org/calendar/index.cfm?fuseaction=showEvent&event=ZJABF#details";
var title      = "Roba Vecchia: The Wheel of Fortune";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0903kaleidoscope/";
//var dir        = csdpdir+"pics/0903kaleidoscope/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TheOnesYouLove.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "幸运转轮：走进万花筒";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "0903kaleidoscope_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "万花筒是由黎巴嫩艺术家Lara Baladi创作的。";
        this[1][1] = "左边的亮三角是万花筒的入口。";
        this[1][2] = "一个参观者在万花筒里。";
    }else{
        this[1][0] = "The installation titled Roba Vecchia is by Lebanese artist Lara Baladi.";
        this[1][1] = "The triangle to the left is the entrance to the kaleidoscope.";
        this[1][2] = "A visitor's image is reflected inside the kaleidoscope.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
