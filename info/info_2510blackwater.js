<!--
//Created by Album Builder Program Mon Oct 20 18:28:49 2025
var info_url   = "https://wvstateparks.com/parks/blackwater-falls-state-park/";
var title      = "Blackwater Falls State Park";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2510blackwater/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "黑水瀑布州立公园";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "2510blackwater_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在黑水瀑布山道上的“几乎是天堂”秋千上荡秋千。";
        this[1][1] = "在黑水瀑布。";
        this[1][2] = "在大石头上做劈叉。";
        this[1][3] = "走埃拉卡拉山道前往埃拉卡拉瀑布。";
        this[1][4] = "埃拉卡拉山道。";
        this[1][5] = "埃拉卡拉山道。";
        this[1][6] = "走埃拉卡拉山道前往埃拉卡拉瀑布。";
        this[1][7] = "埃拉卡拉瀑布。";
        this[1][8] = "埃拉卡拉瀑布。";
        this[1][9] = "埃拉卡拉瀑布。";
        this[1][10] = "展示体操技巧。";
        this[1][11] = "在林迪角，可以欣赏到黑水峡谷的壮丽景色。";
        this[1][12] = "在林迪角。";
        this[1][13] = "在林迪角。";
    }else{
        this[1][0] = "Swinging on the Almost Heaven swing on the Blackwater Falls Trail.";
        this[1][1] = "At the Blackwater Falls.";
        this[1][2] = "Doing a split on the giant boulder.";
        this[1][3] = "Hiking the Elakala Trail.";
        this[1][4] = "Hiking the Elakala Trail.";
        this[1][5] = "Hiking the Elakala Trail.";
        this[1][6] = "Hiking the Elakala Trail.";
        this[1][7] = "At the Elakala Falls.";
        this[1][8] = "The Elakala Falls.";
        this[1][9] = "The Elakala Falls.";
        this[1][10] = "Showing off his gymnastics skill.";
        this[1][11] = "At the Lindy Point, with a gorgeous view of the Blackwater Canyon.";
        this[1][12] = "At the Lindy Point.";
        this[1][13] = "At the Lindy Point.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
