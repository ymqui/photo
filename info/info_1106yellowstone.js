<!--
//Created by Album Builder Program Sun Jul 10 22:32:21 2011
var info_url   = "http://www.nps.gov/";
var title      = "Trip to the West";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1106yellowstone/";
//var dir        = csdpdir+"pics/1106yellowstone/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Smile.mid";
var midi_cr    = new Array("PatMW's Midi Collection","	http://patmw.tripod.com/PatMWsMidiCollectionindex.html");
 
if(window.usechinese){
    title      = "大提顿公园，黄石公园和冰川公园";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<36;i++){
        this[0][i] = "1106yellowstone_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "大提顿公园。";
        this[1][1] = "大提顿公园里的珍妮湖。";
        this[1][2] = "大提顿公园。";
        this[1][4] = "大提顿公园。";
        this[1][5] = "黄石公园的下瀑布。";
        this[1][6] = "黄石公园的艺术家观赏点。";
        this[1][7] = "黄石公园的上瀑布。";
        this[1][8] = "黄石湖边的西拇指喷泉盆地。";
        this[1][9] = "黄石公园的一个温泉。";
        this[1][10] = "黄石湖。";
        this[1][11] = "黄石湖。";
        this[1][12] = "老忠实泉。";
        this[1][13] = "黄石公园的彩色池。";
        this[1][14] = "黄石公园的洞穴泉。";
        this[1][16] = "黄石公园的一个喷泉。";
        this[1][17] = "黄石公园的刨花喷泉。";
        this[1][18] = "黄石公园的大多彩泉。";
        this[1][19] = "黄石公园里的美洲赤鹿。";
        this[1][20] = "黄石公园里的野牛。";
        this[1][21] = "大提顿公园里野牛过马路。";
        this[1][22] = "大提顿公园里的野牛群。";
        this[1][23] = "黄石公园里的棕熊。";
        this[1][25] = "冰川公园的麦克唐纳湖。";
        this[1][26] = "冰川公园的双药湖。";
        this[1][29] = "冰川公园的巴林瀑布。";
        this[1][30] = "冰川公园的急流湖。";
        this[1][31] = "冰川公园的急流湖和湖边的冰川宾馆。";
        this[1][32] = "冰川公园。";
        this[1][33] = "冰川公园的舍本湖。";
        this[1][34] = "美国总统山-拉什莫尔山。";
        this[1][35] = "衣阿华州滑铁卢的独立日焰火。";
    }else{
        this[1][0] = "Grand Teton National Park.";
        this[1][1] = "Jenny Lake in the Grand Teton National Park.";
        this[1][2] = "Grand Teton National Park.";
        this[1][4] = "Grand Teton National Park.";
        this[1][5] = "Lower Falls in the Yellowstone National Park.";
        this[1][6] = "Artist Point in the Yellowstone National Park.";
        this[1][7] = "Upper Falls in the Yellowstone National Park.";
        this[1][8] = "West Thumb Geyser Basin in the Yellowstone National Park.";
        this[1][9] = "A thermal pool in the Yellowstone National Park.";
        this[1][10] = "Yellowstone Lake.";
        this[1][11] = "Yellowstone Lake.";
        this[1][12] = "Old Faithful geyser in the Yellowstone National Park.";
        this[1][13] = "Chromatic Pool in the Yellowstone National Park.";
        this[1][14] = "Grotto Geyser in the Yellowstone National Park.";
        this[1][16] = "A geyser in the Yellowstone National Park.";
        this[1][17] = "Excelsior geyser in the Yellowstone National Park.";
        this[1][18] = "Grand Prismatic Spring in the Yellowstone National Park.";
        this[1][19] = "An Elk in Yellowstone.";
        this[1][20] = "A bison in Yellowstone.";
        this[1][21] = "Bisons crossing the road in Grand Teton.";
        this[1][22] = "Bisons roaming in Grand Teton.";
        this[1][23] = "A grizzly bear in Yellowstone.";
        this[1][25] = "Lake McDonald in Glacier National Park.";
        this[1][26] = "Lower Two Medicine Lake in Glacier National Park.";
        this[1][29] = "Baring Falls in Glacier National Park.";
        this[1][30] = "Swiftcurrent Lake in Glacier National Park.";
        this[1][31] = "Many Glacier Hotel in Glacier National Park.";
        this[1][32] = "Glacier National Park.";
        this[1][33] = "Lake Sherburne in Glacier National Park.";
        this[1][34] = "Mount Rushmore.";
        this[1][35] = "Fireworks in Waterloo, IA.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
