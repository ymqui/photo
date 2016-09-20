<!--
//Created by Album Builder Program Sun Feb 12 21:10:03 2006
var info_url   = "";
var title      = "Snow";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0602snow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ChillEarlyFall.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "狗年的第一场雪";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "0602snow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "夜幕下的雪景。这场雪是入冬以来最大的。";
        this[1][1] = "夜幕下的雪景。在门口拍的。";
        this[1][2] = "夜幕下的雪景。";
        this[1][3] = "一群大雁。";
        this[1][4] = "披了一层雪的小松树。";
        this[1][5] = "树下积了一堆雪。";
        this[1][6] = "雪压枝头。";
        this[1][7] = "雪压枝头。";
        this[1][8] = "屋檐下的冰柱。";
        this[1][9] = "邻居家的小孩。";
        this[1][10] = "一只仿声鸟。";
        this[1][11] = "一只仿声鸟。";
        this[1][12] = "一只仿声鸟。";
        this[1][13] = "这只仿声鸟飞走了，只逮到一簇尾巴。";
        this[1][14] = "一只雌性的北美红雀。";
        this[1][15] = "一只雄性的北美红雀。";
        this[1][16] = "雪压枝头。";
        this[1][17] = "小鱼塘。";
        this[1][18] = "邻居家的三棵树。";
        this[1][19] = "雪好看，铲雪可不轻松。";
    }else{
        this[1][0] = "Snow scene at night.";
        this[1][1] = "Snow scene at night.";
        this[1][2] = "Snow scene at night.";
        this[1][3] = "A flock of geese.";
        this[1][4] = "Snow covered tree.";
        this[1][5] = "Snow pile at the bottom of a tree.";
        this[1][6] = "Snow covered branches.";
        this[1][7] = "Snow covered branches.";
        this[1][8] = "Icicles.";
        this[1][9] = "Neighbor's kid playing in the snow.";
        this[1][10] = "A mockingbird.";
        this[1][11] = "A mockingbird.";
        this[1][12] = "A mockingbird.";
        this[1][13] = "The mockingbird flying away.";
        this[1][14] = "A female cardinal.";
        this[1][15] = "A beautiful male cardinal.";
        this[1][16] = "Snow covered branch.";
        this[1][17] = "Pond and tree.";
        this[1][18] = "Trees.";
        this[1][19] = "A shovel.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
