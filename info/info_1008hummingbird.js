<!--
//Created by Album Builder Program Sun Aug 29 21:56:07 2010
var info_url   = "http://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id";
var title      = "Ruby-throated Hummingbird";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1008hummingbird/";
//var dir        = csdpdir+"pics/1008hummingbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TheMemoryOfTrees.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
 
if(window.usechinese){
    title      = "红喉北蜂鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "1008hummingbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "未成年雄性红喉北蜂鸟。";
    }else{
        this[1][0] = "Immature male ruby-throated hummingbird.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58"; 
//-->
