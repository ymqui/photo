<!--
//Created by Album Builder Program Mon Jul 24 18:05:30 2006
var info_url   = "http://www.newwindenergy.com/windfarm_millrun.html";
var title      = "Windmills in Pennsylvania";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0607windmill/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BringHimHome.mid";
var midi_cr    = new Array("The Boss's Midi Favorites","http://www.afcsat.com/midi_fav.html");
 
if(window.usechinese){
    title      = "宾夕法尼亚州的风力发电站";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "0607windmill_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "1.5兆瓦的风力发电站。";
        this[1][1] = "这组发电机在宾夕法尼亚州西南的Somerset镇。";
        this[1][4] = "整齐的草垛。";
        this[1][7] = "这组风力发电机在Laurel山脊上。";
        this[1][11] = "小红莓湖。";
        this[1][12] = "玉米地边的向日葵花。";
        this[1][13] = "玉米地边的向日葵花。";
    }else{
        this[1][0] = "1.5 MW Windmill at Somerset Wind Farm.";
        this[1][1] = "Windmills at Somerset Wind Farm.";
        this[1][2] = "Windmills at Somerset Wind Farm.";
        this[1][3] = "Windmill at Somerset Wind Farm.";
        this[1][4] = "Straw bales in the Somerset Wind Farm.";
        this[1][5] = "Windmill at Somerset Wind Farm.";
        this[1][6] = "Windmill at Somerset Wind Farm.";
        this[1][7] = "Windmills on top of the Laurel Ridge at the Mill Run Wind Farm.";
        this[1][8] = "Windmills on top of the Laurel Ridge at the Mill Run Wind Farm.";
        this[1][9] = "Windmills on top of the Laurel Ridge at the Mill Run Wind Farm.";
        this[1][10] = "Windmills on top of the Laurel Ridge at the Mill Run Wind Farm.";
        this[1][11] = "Cranberry Glade Lake.";
        this[1][12] = "Sunflowers by the corn field in Somerset.";
        this[1][13] = "Sunflowers by the corn field in Somerset.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
