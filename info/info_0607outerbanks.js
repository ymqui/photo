<!--
//Created by Album Builder Program Tue Jul 18 12:51:23 2006
var info_url   = "http://www.nps.gov/applications/parksearch/state.cfm?st=nc";
var title      = "North Carolina Outer Banks";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0607outerbanks/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MoonlightSonata.mid";
var midi_cr    = new Array("Larry's favorite Midis","http://users1.ee.net/lstone/midi.htm");
 
if(window.usechinese){
    title      = "北卡罗来纳州外海岸";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "0607outerbanks_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "海边露营地。";
        this[1][1] = "晚餐。";
        this[1][2] = "波地岛灯塔。";
        this[1][3] = "小船坞。";
        this[1][4] = "日落。";
        this[1][5] = "连接岛屿的公路桥。";
        this[1][6] = "帐篷。当晚风雨交加，电闪雷鸣，难忘的经历。";
        this[1][7] = "日出前的波地岛沙滩。";
        this[1][8] = "日出。";
        this[1][9] = "海豚。";
        this[1][10] = "波地岛灯塔。";
        this[1][11] = "波地岛灯塔。";
        this[1][12] = "怀特兄弟纪念碑和雕塑。";
        this[1][13] = "当地的风筝节。";
        this[1][15] = "东王霸鹟。";
        this[1][16] = "一只雄性的棕头牛鹂。";
        this[1][17] = "再牛的鸟，雌鸟一来，雄鸟都得乖乖让位。";
        this[1][18] = "豌豆岛沙滩。";
        this[1][19] = "沙滩小洞洞里钻出来的拇指头大的小螃蟹。";
        this[1][20] = "喜欢沿着沙丘飞行的笑鸥。";
        this[1][21] = "银鸥。";
        this[1][22] = "一只鹗，俗称鱼鹰。";
        this[1][23] = "哈特勒斯角灯塔。";
        this[1][24] = "海边豪宅。";
        this[1][25] = "摇摆的汽车轮渡。";
        this[1][26] = "争抢轮渡乘客抛出的面包屑的笑鸥。";
        this[1][27] = "笑鸥。";
        this[1][28] = "卧克拉库克灯塔。";
        this[1][29] = "卧克拉库克灯塔。";
    }else{
        this[1][0] = "Oregon inlet campground on Bodie Island.";
        this[1][2] = "Bodie Island lighthouse.";
        this[1][3] = "Oregon inlet marina.";
        this[1][4] = "Sunset over the Oregon inlet bridge.";
        this[1][5] = "This bridge connects Bodie Island and Pea Island.";
        this[1][6] = "Tent.";
        this[1][7] = "Bodie Island beach before sunrise.";
        this[1][8] = "Sunrise.";
        this[1][9] = "Dolphin.";
        this[1][10] = "Bodie Island lighthouse.";
        this[1][11] = "Bodie Island lighthouse.";
        this[1][12] = "Wright brothers monument and sculpture.";
        this[1][13] = "Local kite festival.";
        this[1][15] = "An eastern kingbird.";
        this[1][16] = "A male brown-headed cowbird.";
        this[1][17] = "A female brown-headed cowbird.";
        this[1][18] = "Pea Island beach.";
        this[1][19] = "Small crab on the beach.";
        this[1][20] = "Laughing gulls.";
        this[1][21] = "A herring gull.";
        this[1][22] = "An osprey.";
        this[1][23] = "Cape Hatteras lighthouse.";
        this[1][24] = "Beach front mansion.";
        this[1][25] = "Ferry between Hatteras and Ocracoke islands.";
        this[1][26] = "Laughing gulls chasing the ferryboat for food.";
        this[1][27] = "Laughing gulls.";
        this[1][28] = "Ocracoke lighthouse.";
        this[1][29] = "Ocracoke lighthouse.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
