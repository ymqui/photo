<!--
//Created by Album Builder Program Thu Jan 02 19:38:59 2025
var info_url   = "";
var title      = "Winter vacation in Florida";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2412florida/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "在佛罗里达州度假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "2412florida_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在旅馆房间里打开圣诞礼物。";
        this[1][1] = "乘船游览维基瓦治泉州立公园。";
        this[1][2] = "乘船游览维基瓦治泉州立公园。";
        this[1][3] = "维基瓦治泉州立公园的美人鱼表演。";
        this[1][4] = "维基瓦治泉州立公园的美人鱼表演。";
        this[1][5] = "维基瓦治泉州立公园的美人鱼表演。";
        this[1][6] = "维基瓦治泉州立公园的美人鱼表演。";
        this[1][7] = "维基瓦治泉州立公园的美人鱼表演。";
        this[1][8] = "看完美人鱼表演后和美人鱼合影。";
        this[1][9] = "在坦帕电力公司的海牛观赏中心看海牛。";
        this[1][10] = "海牛喜欢发电厂冬天排出的温水。";
        this[1][11] = "在坦帕电力公司的海牛观赏中心看海牛。";
        this[1][12] = "球球终于有一颗牙齿松了。";
        this[1][13] = "掉了第一颗牙齿。";
        this[1][14] = "冒着大雨参观海明威在西礁岛的故居。";
        this[1][15] = "参观海明威在西礁岛的故居。";
        this[1][16] = "参观海明威在西礁岛的故居。";
        this[1][17] = "参观海明威在西礁岛的故居。";
        this[1][18] = "参观海明威在西礁岛的故居。";
        this[1][19] = "在旅馆大堂里钩编。";
        this[1][20] = "在旅馆大堂里钩编。";
        this[1][21] = "逛乔治亚州萨凡纳的河滨街道。";
        this[1][22] = "做劈叉。";
        this[1][23] = "逛萨凡纳的河滨街道。";
        this[1][24] = "逛萨凡纳的河滨街道。";
        this[1][25] = "逛萨凡纳的河滨街道。";
        this[1][26] = "逛萨凡纳河滨街道的市场。";
        this[1][27] = "逛萨凡纳河滨街道的市场。";
        this[1][28] = "在萨凡纳的河边餐厅吃晚餐。";
        this[1][29] = "在萨凡纳的河边餐厅吃晚餐。";
    }else{
        this[1][0] = "Opening Christmas presents in the hotel room.";
        this[1][1] = "Taking a boat tour in the Weeki Wachee Springs State Park.";
        this[1][2] = "Taking a boat tour in the Weeki Wachee Springs State Park.";
        this[1][3] = "Mermaid show in the Weeki Wachee Springs State Park.";
        this[1][4] = "Mermaid show in the Weeki Wachee Springs State Park.";
        this[1][5] = "Mermaid show in the Weeki Wachee Springs State Park.";
        this[1][6] = "Mermaid show in the Weeki Wachee Springs State Park.";
        this[1][7] = "Mermaid show in the Weeki Wachee Springs State Park.";
        this[1][8] = "Meeting a mermaid after the mermaid show.";
        this[1][9] = "Watching manatees in the Tampa Electric's Manatee Viewing Center.";
        this[1][10] = "Manatees love the warm discharge water from the power station in winter.";
        this[1][11] = "Watching manatees in the Tampa Electric's Manatee Viewing Center.";
        this[1][12] = "Nathan finally has a loose tooth.";
        this[1][13] = "Losing his first tooth.";
        this[1][14] = "Visiting the Hemingway Home and Museum in Key West in downpour.";
        this[1][15] = "Visiting the Hemingway Home and Museum in Key West.";
        this[1][16] = "Visiting the Hemingway Home and Museum in Key West.";
        this[1][17] = "Visiting the Hemingway Home and Museum in Key West.";
        this[1][18] = "Visiting the Hemingway Home and Museum in Key West.";
        this[1][19] = "Crocheting in the hotel lobby.";
        this[1][20] = "Crocheting in the hotel lobby.";
        this[1][21] = "Visiting the river front street of Savannah, Georgia.";
        this[1][22] = "Doing a split.";
        this[1][23] = "Visiting the river front street of Savannah.";
        this[1][24] = "Visiting the river front street of Savannah.";
        this[1][25] = "Visiting the river front street of Savannah.";
        this[1][26] = "Visiting a river front street market in Savannah.";
        this[1][27] = "Visiting a river front street market in Savannah.";
        this[1][28] = "Dinner at a river front restaurant in Savannah.";
        this[1][29] = "Dinner at a river front restaurant in Savannah.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
