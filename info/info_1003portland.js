<!--
//Created by Album Builder Program Wed Mar 24 21:59:26 2010
var info_url   = "";
var title      = "Natural Wonders of Portland, Oregon";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1003portland/";
//var dir        = csdpdir+"pics/1003portland/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Massachusetts.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "波特兰风光";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "1003portland_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "从华盛顿公园看胡德雪山。";
        this[1][2] = "华盛顿公园里的红杉树。";
        this[1][3] = "哥伦比亚河谷。";
        this[1][4] = "拉托雷尔瀑布。";
        this[1][5] = "新娘面纱瀑布。";
        this[1][6] = "瓦吉纳瀑布。";
        this[1][7] = "蒙诺玛瀑布，美国第二高的瀑布。";
        this[1][9] = "胡德雪山，海拔3426米，是俄勒冈州最高的山。";
        this[1][11] = "隔壁华盛顿州的亚当姆斯雪山。";
    }else{
        this[1][0] = "Mt. Hood viewed from Washington Park.";
        this[1][2] = "Sequoia trees in Washington Park.";
        this[1][3] = "Columbia gorge viewed from Crown Point.";
        this[1][4] = "Latourell Falls.";
        this[1][5] = "Bridal Veil Falls.";
        this[1][6] = "Wahkeena Falls.";
        this[1][7] = "Multnomah Falls, the second tallest waterfall in US.";
        this[1][9] = "Mt. Hood, 3426 m, the highest mountain in Oregon.";
        this[1][11] = "Mt. Adams in the neighboring Washington state.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
