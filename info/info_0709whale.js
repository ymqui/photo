<!--
//Created by Album Builder Program Sun Sep 09 20:33:49 2007
var info_url   = "http://stellwagen.noaa.gov/visit/whalewatching/whalewatching.html";
var title      = "Whale Watching in Cape Cod";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0709whale/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CanYouFeelTheLoveTonight.mid";
var midi_cr    = new Array("It'sCool Midi","http://home.maine.rr.com/i/t/itscool/eln/");
 
if(window.usechinese){
    title      = "海上看鲸鱼";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "0709whale_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "出海的地方在Cape Cod顶端的Provincetown小镇。";
        this[1][4] = "茫茫大海，鲸在何方？";
        this[1][5] = "除了远处的海岸，什么也没看到呀。啊，不对!!!";
        this[1][6] = "前面大的是座头鲸，后面小的是海豚。";
        this[1][9] = "座头鲸很喜欢用尾巴拍水。";
        this[1][12] = "光滑的水面是由水下鲸的游动产生的，所以又叫鲸的脚印。";
        this[1][13] = "座头鲸尾巴上的白色块和人的指纹一样，每头都不一样。";
        this[1][15] = "鲸鱼换气时会喷起水柱，很远都能看到。";
        this[1][18] = "海豚。";
    }else{
        this[1][0] = "Provincetown at the tip of Cape Cod.";
        this[1][4] = "Where's the whale?";
        this[1][5] = "There's nothing out there. No, wait...";
        this[1][6] = "Here come a group of humpback whales and dolphins.";
        this[1][12] = "The slick water surface is called a whale footprint.";
        this[1][13] = "Each humpback has a unique white pattern on the tail.";
        this[1][15] = "The easiest way to spot a whale is by seeing its spout.";
        this[1][18] = "Dolphins.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
