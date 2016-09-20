<!--
//Created by Album Builder Program Sat Feb 14 22:06:06 2009
var info_url   = "http://www.uzai.com/travelnear.asp?nid=434&select=sightIntro";
var title      = "Mount Jianglang in Jiangshan, Zhejiang";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0901jianglang/";
//var dir        = csdpdir+"pics/0901jianglang/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Yoyoyoy.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "浙江江山市江郎山";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "0901jianglang_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "开明禅寺。";
        this[1][1] = "开明禅寺。";
        this[1][3] = "一线天。";
        this[1][12] = "江郎山。";
    }else{
        this[1][0] = "Kaiming Temple.";
        this[1][1] = "Kaiming Temple.";
        this[1][3] = "Thread of Sky: a rocky gap in the mountain.";
        this[1][12] = "Mount Jianglang.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
