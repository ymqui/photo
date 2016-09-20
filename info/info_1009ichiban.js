<!--
//Created by Album Builder Program Sun Sep 26 13:14:20 2010
var info_url   = "http://www.ichiban355.com/";
var title      = "Ichiban Restaurant";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1009ichiban/";
//var dir        = csdpdir+"pics/1009ichiban/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SummerPlace.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
 
if(window.usechinese){
    title      = "一番日韩餐馆";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1009ichiban_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "一番餐馆以中午的寿司自助餐和韩国烧烤闻名。";
        this[1][1] = "色拉。";
        this[1][2] = "海鲜烧烤。";
    }else{
        this[1][0] = "Ichiban is a restaurant featuring Japanese and Korean cuisine.";
        this[1][1] = "Salad.";
        this[1][2] = "Seafood barbecue.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
