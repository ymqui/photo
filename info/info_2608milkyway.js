<!--
//Created by Album Builder Program Sat Aug 08 12:23:36 2026
var info_url   = "https://www.nps.gov/asis/index.htm";
var title      = "Milky Way from Assateague";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2608milkyway/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "阿萨蒂格观银河";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "2608milkyway_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "马里兰州柏林市的阿萨蒂格岛国家海岸看到的银河。;
        this[1][10] = "露营帐篷。";
    }else{
        this[1][0] = "Milky Way seen from Assateague Island National Seashore in Berlin, Maryland.";
        this[1][10] = "Camping tent.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
