<!--
//Created by Album Builder Program Sat May 07 09:50:29 2022
var info_url   = "";
var title      = "Vacationing in south Florida";
var cam_img    = "";
var dir        = maindir+"pics/2205florida/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Vacationing in south Florida";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<21;i++){
        this[0][i] = "2205florida_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "乘坐美铁汽车火车前往佛罗里达。";
        this[1][1] = "在弗吉尼亚州洛顿美铁汽车火车站。";
        this[1][2] = "在弗吉尼亚州洛顿美铁汽车火车站。";
        this[1][3] = "在火车上。";
        this[1][4] = "在火车上。";
        this[1][5] = "在火车上吃早餐。";
        this[1][6] = "在佛罗里达的西礁岛陪爸爸去前往海龟国家公园的轮渡码头。";
        this[1][7] = "佛罗里达的西礁岛。";
        this[1][8] = "在佛罗里达的西礁岛吃早餐。";
        this[1][9] = "在佛罗里达的西礁岛乘坐观光小火车。";
        this[1][10] = "在佛罗里达的西礁岛乘坐观光小火车。";
        this[1][11] = "在佛罗里达的西礁岛吃早餐。";
        this[1][12] = "在佛罗里达的西礁岛吃早餐。";
        this[1][13] = "在佛罗里达西礁岛的美国大陆最南端。";
        this[1][14] = "在佛罗里达西礁岛的美国大陆最南端。";
        this[1][15] = "在迈阿密的火烈鸟公园玩。";
        this[1][16] = "在迈阿密的火烈鸟公园玩。";
        this[1][17] = "在大沼泽地国家公园的鲨鱼谷乘坐游览车。";
        this[1][18] = "一路都是鳄鱼。";
        this[1][19] = "在大沼泽地国家公园鲨鱼谷的观光塔上。";
        this[1][20] = "在迈阿密的儿童博物馆玩。";
    }else{
        this[1][0] = "Taking the Amtrak auto train to Florida.";
        this[1][1] = "At the Lorton Amtrak auto train station.";
        this[1][2] = "At the Lorton Amtrak auto train station.";
        this[1][3] = "On the Amtrak auto train.";
        this[1][4] = "On the Amtrak auto train.";
        this[1][5] = "Having breakfast on the Amtrak auto train.";
        this[1][6] = "Accompanying Daddy to the Yankee Freedom Ferry to the Dry Tortugas National Park.";
        this[1][7] = "Key West.";
        this[1][8] = "Having breakfast at Key West.";
        this[1][9] = "Taking the train tour at Key West.";
        this[1][10] = "Taking the train tour at Key West.";
        this[1][11] = "Having breakfast at Key West.";
        this[1][12] = "Having breakfast at Key West.";
        this[1][13] = "At the southernmost point at Key West.";
        this[1][14] = "At the southernmost point at Key West.";
        this[1][15] = "Playing in the Flamingo Park in Miami.";
        this[1][16] = "Playing in the Flamingo Park in Miami.";
        this[1][17] = "Taking the tram tour in Everglades National Park's Shark Valley.";
        this[1][18] = "There are many alligators.";
        this[1][19] = "At the observation tower in Shark Valley.";
        this[1][20] = "Having fun at the Children's Museum in Miami.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
