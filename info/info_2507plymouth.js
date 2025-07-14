<!--
//Created by Album Builder Program Sun Jul 13 11:11:25 2025
var info_url   = ["https://seeplymouth.com/","https://www.captjohn.com/"];
var info_sep   = 0;
var title      = "Whale Watching in Plymouth";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2507plymouth/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "在普利茅斯观鲸";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
    info_url[0] = "https://baike.baidu.com/item/%E6%99%AE%E5%88%A9%E8%8C%85%E6%96%AF/734782";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "2507plymouth_"+(i+1).toString();
        this[1][i] = "";
    }
    info_sep =  13;
    if(window.usechinese){
        this[1][0] = "在码头酒馆糕点店吃蛋糕。";
        this[1][1] = "和妈妈分享蛋糕。";
        this[1][2] = "参观五月花二号，这是一艘按五月花号复制的帆船。1620年五月花号载着英国清教徒来到马萨诸塞州普利茅斯。";
        this[1][3] = "著名的普利茅斯岩，是1620年英国清教徒乘坐五月花号抵达普利茅斯的象征。";
        this[1][4] = "球球站在普利茅斯岩前面。";
        this[1][5] = "在清教徒画板前合影。";
        this[1][6] = "在龙虾屋餐厅吃晚饭。";
        this[1][7] = "五月花二号。";
        this[1][8] = "球球做侧手翻。";
        this[1][9] = "球球做后弯。";
        this[1][10] = "等独立日焰火时玩摔炮。";
        this[1][11] = "独立日焰火。";
        this[1][12] = "看焰火。";
        this[1][13] = "坐船出海看鲸鱼。";
        this[1][14] = "座头鲸。";
        this[1][15] = "座头鲸。";
        this[1][16] = "座头鲸。";
        this[1][17] = "等鲸鱼出现。";
        this[1][19] = "一艘明轮船。";
    }else{
        this[1][0] = "Enjoying a cupcake in Tavern on the Wharf.";
        this[1][1] = "Sharing a cupcake with Mom.";
        this[1][2] = "Visiting Mayflower II, a full-scale replica of the tall ship that brought the Pilgrims to Plymouth, Massachusetts in 1620.";
        this[1][3] = "The famous Plymouth rock, a symbol of the Pilgrims arriving from the Mayflower in 1620.";
        this[1][4] = "Nathan in front of the Plymouth rock.";
        this[1][5] = "Posing as Plymouth pilgrims.";
        this[1][6] = "Dinner at Lobster Hut restaurant.";
        this[1][7] = "Mayflower II at the Plymouth harbor.";
        this[1][8] = "Nathan doing a cartwheel.";
        this[1][9] = "Nathan doing a backbend.";
        this[1][10] = "Playing bang snaps while wating for the 4th of July fireworks.";
        this[1][11] = "Fireworks.";
        this[1][12] = "Watching fireworks.";
        this[1][13] = "Taking a whale watch trip on Captain John Boat.";
        this[1][14] = "A humpback whale.";
        this[1][15] = "A humpback whale.";
        this[1][16] = "A humpback whale.";
        this[1][17] = "Waiting for the whales to come out.";
        this[1][19] = "A paddlewheel boat.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
