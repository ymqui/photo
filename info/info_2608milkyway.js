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
        this[1][0] = "马里兰州柏林市的阿萨蒂格岛国家海岸看到的银河。相机设置：佳能6D + 24mm f/1.4 L @ 焦距 24mm，ISO 1600，曝光 20 秒，光圈 f/1.8。";
        this[1][1] = "相机设置：佳能6D + 24mm f/1.4 L @ 焦距 24mm，ISO 1600，曝光 20 秒，光圈 f/1.8。";
        this[1][2] = "相机设置：佳能6D + 24mm f/1.4 L @ 焦距 24mm，ISO 1600，曝光 20 秒，光圈 f/1.8。";
        this[1][3] = "相机设置：佳能6D + 17-40mm f/4 L @ 焦距 17mm，ISO 6400，曝光 20 秒，光圈 f/4。";
        this[1][4] = "今晚的英仙座流星雨很活跃。相机设置：佳能6D + 17-40mm f/4 L @ 焦距 17mm，ISO 6400，曝光 20 秒，光圈 f/4。";
        this[1][5] = "相机设置：佳能6D + 17-40mm f/4 L @ 焦距 17mm，ISO 6400，曝光 20 秒，光圈 f/4。";
        this[1][6] = "相机设置：佳能6D + 17-40mm f/4 L @ 焦距 17mm，ISO 6400，曝光 20 秒，光圈 f/4。";
        this[1][7] = "相机设置：佳能6D + 17-40mm f/4 L @ 焦距 17mm，ISO 6400，曝光 20 秒，光圈 f/4。";
        this[1][8] = "相机设置：佳能6D + 17-40mm f/4 L @ 焦距 17mm，ISO 6400，曝光 20 秒，光圈 f/4。";
        this[1][9] = "相机设置：佳能6D + 17-40mm f/4 L @ 焦距 17mm，ISO 6400，曝光 20 秒，光圈 f/4。";
        this[1][10] = "露营帐篷。";
    }else{
        this[1][0] = "Milky Way seen from Assateague Island National Seashore in Berlin, Maryland. Canon 6D + 24mm f/1.4 L @ 24mm, ISO 1600, 20 seconds, f1.8.";
        this[1][1] = "Canon 6D + 24mm f/1.4 L @ 24mm, ISO 1600, 20 seconds, f1.8.";
        this[1][2] = "Canon 6D + 24mm f/1.4 L @ 24mm, ISO 1600, 20 seconds, f1.8.";
        this[1][3] = "Canon 6D + 17-40mm f/4 L @ 17mm, ISO 6400, 20 seconds, f4.";
        this[1][4] = "Perseid meteor shower with the Milky Way. Canon 6D + 17-40mm f/4 L @ 17mm, ISO 6400, 20 seconds, f4.";
        this[1][5] = "Canon 6D + 17-40mm f/4 L @ 17mm, ISO 6400, 20 seconds, f4.";
        this[1][6] = "Canon 6D + 17-40mm f/4 L @ 17mm, ISO 6400, 20 seconds, f4.";
        this[1][7] = "Canon 6D + 17-40mm f/4 L @ 17mm, ISO 6400, 20 seconds, f4.";
        this[1][8] = "Canon 6D + 17-40mm f/4 L @ 17mm, ISO 6400, 20 seconds, f4.";
        this[1][9] = "Canon 6D + 17-40mm f/4 L @ 17mm, ISO 6400, 20 seconds, f4.";
        this[1][10] = "Camping tent.";
    }
}
 
//web counter info
var sc_project   = 592204;
var sc_partition = 4;
var sc_invisible = 1; 
var sc_security  = "b5d0bd3f";
//-->
