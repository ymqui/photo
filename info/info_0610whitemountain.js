<!--
//Created by Album Builder Program Tue Oct 17 23:36:54 2006
var info_url   = "http://www.visitwhitemountains.com/";
var title      = "Watching Fall Colors in White Mountain National Forest";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0610whitemountain/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CaribbeanBlue.mid";
var midi_cr    = new Array("Moonfairye","http://www.moonfairye.com/midicollection/midi2.htm");
 
if(window.usechinese){
    title      = "白山森林区看红叶";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "0610whitemountain_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][1] = "Chocorua湖。";
        this[1][2] = "Chocorua湖。";
        this[1][3] = "Chocorua湖。";
        this[1][4] = "Chocorua湖。";
        this[1][7] = "廊桥秋韵。";
        this[1][8] = "山道。";
        this[1][9] = "小桥流水。";
        this[1][10] = "峡谷。";
        this[1][11] = "崖上秋色。";
        this[1][12] = "稻草人。";
        this[1][13] = "华盛顿山宾馆。";
        this[1][14] = "山花烂漫。";
    }else{
        this[1][1] = "Chocorua Lake.";
        this[1][2] = "Chocorua Lake.";
        this[1][3] = "Chocorua Lake.";
        this[1][4] = "Chocorua Lake.";
        this[1][5] = "Flume Gorge visitor center.";
        this[1][7] = "The Flume Covered Bridge.";
        this[1][8] = "Table Rock at Flume.";
        this[1][10] = "The Flume Gorge.";
        this[1][12] = "Straw doll.";
        this[1][13] = "Mount Washington Hotel.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
