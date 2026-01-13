<!--
//Created by Album Builder Program Thu Jan 01 19:30:58 2026
var info_url   = "";
var title      = "Vacationing in Jamaica";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2512jamaica/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
var pagelist   = [["2512jmbird","12/2025 Birding in Jamaica","12/2025 牙买加观鸟"]];
 
if(window.usechinese){
    title      = "牙买加度假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<38;i++){
        this[0][i] = "2512jamaica_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在酒店里拆开圣诞礼物。";
        this[1][1] = "在蒙特哥湾的罗克兰鸟类乐园喂蜂鸟。";
        this[1][2] = "在罗克兰鸟类乐园喂蜂鸟。";
        this[1][3] = "在罗克兰鸟类乐园喂蜂鸟。";
        this[1][4] = "在罗克兰鸟类乐园喂蜂鸟。";
        this[1][5] = "在罗克兰鸟类乐园喂蜂鸟。";
        this[1][6] = "红嘴长尾蜂鸟，牙买加的国鸟。";
        this[1][7] = "弗里茨是罗克兰鸟类乐园的主人。";
        this[1][8] = "在牙买加第二大城市蒙特哥湾。";
        this[1][9] = "蒙特哥湾的日落。";
        this[1][10] = "在蒙特哥湾的和谐海滩公园玩。";
        this[1][11] = "在奥乔里奥斯的邓恩河瀑布。";
        this[1][12] = "在邓恩河瀑布。";
        this[1][13] = "在邓恩河瀑布公园的加勒比海的海滩上。";
        this[1][14] = "在邓恩河瀑布公园的海滩上。";
        this[1][15] = "在邓恩河瀑布公园的海滩上。";
        this[1][16] = "在邓恩河瀑布。";
        this[1][17] = "准备在邓恩河瀑布公园体验滑索探险。";
        this[1][18] = "准备在邓恩河瀑布公园体验滑索探险。";
        this[1][19] = "学习一些滑索运动的入门技巧。";
        this[1][20] = "在邓恩河瀑布公园体验滑索。";
        this[1][21] = "在邓恩河瀑布公园体验滑索。";
        this[1][22] = "在邓恩河瀑布公园体验滑索。";
        this[1][23] = "在邓恩河瀑布公园体验滑索。";
        this[1][24] = "在邓恩河瀑布公园体验滑索。";
        this[1][25] = "滑索后仍然很兴奋。球球一点也不怕高。";
        this[1][26] = "在丛林度假酒店欣赏蓝山的美景。";
        this[1][27] = "蓝山。";
        this[1][28] = "在波特安东尼奥的格兰德河上体验竹筏漂流。";
        this[1][29] = "在波特安东尼奥的格兰德河上体验竹筏漂流。";
        this[1][30] = "在波特安东尼奥的格兰德河上体验竹筏漂流。";
        this[1][31] = "史蒂夫是我们的竹筏船长。";
        this[1][32] = "在波特安东尼奥的格兰德河上体验竹筏漂流。";
        this[1][33] = "在酒店里制作Labubu包。";
        this[1][34] = "在金斯敦的德文庄园吃冰淇淋。";
        this[1][35] = "冰淇淋很好吃。";
        this[1][36] = "参观位于金斯敦的德文庄园。";
        this[1][37] = "游蓝山上的霍利韦尔公园。首都金斯敦就在远处的山脚下。";
    }else{
        this[1][0] = "Opening the Christmas present.";
        this[1][1] = "Feeding hummingbirds at Rocklands Bird Sanctuary in Montego Bay.";
        this[1][2] = "Feeding hummingbirds at Rocklands Bird Sanctuary.";
        this[1][3] = "Feeding hummingbirds at Rocklands Bird Sanctuary.";
        this[1][4] = "Feeding hummingbirds at Rocklands Bird Sanctuary.";
        this[1][5] = "Feeding hummingbirds at Rocklands Bird Sanctuary.";
        this[1][6] = "Red-billed Streamertail, the national bird of Jamaica.";
        this[1][7] = "Fritz is the manager of Rocklands Bird Sanctuary.";
        this[1][8] = "In Montego Bay, the second largest city in Jamaica.";
        this[1][9] = "Sunset in Montego Bay.";
        this[1][10] = "Playing at Harmony Beach Park in Montego Bay.";
        this[1][11] = "At Dunn's River Falls in Ocho Rios.";
        this[1][12] = "At Dunn's River Falls.";
        this[1][13] = "At the beach of Dunn's River Falls Park.";
        this[1][14] = "At the beach of Dunn's River Falls Park.";
        this[1][15] = "At the beach of Dunn's River Falls Park.";
        this[1][16] = "At Dunn's River Falls.";
        this[1][17] = "Gearing up for the zipline adventure at Dunn's River Falls Park.";
        this[1][18] = "Getting ready for the zipline adventure.";
        this[1][19] = "Having a quick lesson about ziplining.";
        this[1][20] = "Ziplining at Dunn's River Falls Park.";
        this[1][21] = "Ziplining at Dunn's River Falls Park.";
        this[1][22] = "Ziplining at Dunn's River Falls Park.";
        this[1][23] = "Ziplining at Dunn's River Falls Park.";
        this[1][24] = "Ziplining at Dunn's River Falls Park.";
        this[1][25] = "Still excited after the zipline adventure.";
        this[1][26] = "Enjoying the view at LF Jungle Retreat hotel.";
        this[1][27] = "Blue mountains.";
        this[1][28] = "Bamboo rafting at Rio Grande in Port Antonio.";
        this[1][29] = "Bamboo rafting at Rio Grande in Port Antonio.";
        this[1][30] = "Bamboo rafting at Rio Grande in Port Antonio.";
        this[1][31] = "Steve, our captain.";
        this[1][32] = "Bamboo rafting at Rio Grande in Port Antonio.";
        this[1][33] = "Making a Labubu bag in the hotel.";
        this[1][34] = "Visiting the Devon House ice cream shop in Kingston.";
        this[1][35] = "Yummy ice cream.";
        this[1][36] = "Visiting the Devon House in Kingston.";
        this[1][37] = "Visiting the Holywell Park in the Blue Mountains.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
