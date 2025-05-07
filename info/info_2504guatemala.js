<!--
//Created by Album Builder Program Fri Apr 25 06:50:37 2025
var info_url   = "";
var title      = "Spring Break in Guatemala";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2504guatemala/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
var pagelist   = [["2504gtbird","4/2025 Birding in Guatemala","4/2025 危地马拉观鸟"]];
 
if(window.usechinese){
    title      = "危地马拉度春假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<63;i++){
        this[0][i] = "2504guatemala_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在飞往危地马拉城的飞机上。";
        this[1][1] = "在弗洛雷斯岛随处可见的鬣蜥。";
        this[1][2] = "在弗洛雷斯岛一家餐馆喝冷饮。";
        this[1][3] = "漫步弗洛雷斯岛的小巷。";
        this[1][4] = "参观蒂卡尔国家公园。";
        this[1][5] = "站在高耸的吉贝树下，这是危地马拉的国树。";
        this[1][6] = "参观蒂卡尔国家公园。";
        this[1][7] = "参观蒂卡尔国家公园。";
        this[1][8] = "参观蒂卡尔国家公园。";
        this[1][9] = "参观蒂卡尔国家公园。";
        this[1][10] = "参观蒂卡尔国家公园。";
        this[1][11] = "蒂卡尔国家公园1号神殿。";
        this[1][12] = "蒂卡尔国家公园1号神殿。";
        this[1][13] = "从蒂卡尔国家公园4号神殿看到的景色。";
        this[1][14] = "在蒂卡尔国家公园4号神殿的平台上拍照。";
        this[1][15] = "爬下4号神殿的楼梯。";
        this[1][16] = "蒂卡尔国家公园里看到的一只蜘蛛猴。";
        this[1][17] = "蒂卡尔国家公园5号神殿。";
        this[1][18] = "观看弗洛雷斯街头杂耍演员的表演。";
        this[1][19] = "佩滕伊察湖的日落。";
        this[1][20] = "在导游Neftali Escobar的带领下参观亚克夏国家公园。";
        this[1][21] = "参观亚克夏国家公园。";
        this[1][22] = "参观亚克夏国家公园。";
        this[1][23] = "和导游Neftali Escobar合影。";
        this[1][24] = "亚克夏国家公园里看到的一只吼猴。";
        this[1][25] = "亚克夏国家公园里看到的一只蜘蛛猴。";
        this[1][26] = "在弗洛雷斯和爸爸一起乘船去"+pagelink("2504gtbird","观鸟"+"。");
        this[1][27] = "在佩滕伊察湖边玩。";
        this[1][28] = "在蒙多玛雅机场等待飞往危地马拉城的航班。";
        this[1][29] = "漫步安提瓜危地马拉的鹅卵石街道。";
        this[1][30] = "安提瓜危地马拉的麦当劳又大又舒适。";
        this[1][31] = "逛位于安提瓜危地马拉的号称世界上最美丽的星巴克。";
        this[1][32] = "逛位于安提瓜危地马拉的号称世界上最美丽的星巴克。";
        this[1][33] = "漫步安提瓜危地马拉的鹅卵石街道。";
        this[1][34] = "在旅馆游泳池游泳。";
        this[1][35] = "当地人在鹅卵石街道上布置由染色锯末制成的地毯来迎接安提瓜危地马拉的复活节游行。";
        this[1][36] = "当地人在鹅卵石街道上布置由染色锯末制成的地毯来迎接安提瓜危地马拉的复活节游行。";
        this[1][37] = "在安提瓜危地马拉，复活节前一周每天都会举行教堂游行。";
        this[1][38] = "安提瓜危地马拉的复活节游行。";
        this[1][39] = "逛安提瓜危地马拉的当地市场。";
        this[1][40] = "安提瓜危地马拉的复活节游行。";
        this[1][41] = "安提瓜危地马拉的复活节游行。";
        this[1][42] = "安提瓜危地马拉的复活节游行。";
        this[1][43] = "安提瓜危地马拉的复活节游行。";
        this[1][44] = "安提瓜危地马拉的复活节游行。";
        this[1][45] = "安提瓜危地马拉的复活节游行。";
        this[1][46] = "在一家旅馆的大堂休息等候。";
        this[1][47] = "阿瓜火山。";
        this[1][48] = "在帕卡亚火山国家公园爬山。";
        this[1][49] = "爬帕卡亚火山。";
        this[1][50] = "参观帕卡亚火山国家公园。";
        this[1][51] = "参观帕卡亚火山国家公园。";
        this[1][52] = "在帕卡亚火山国家公园烤棉花糖。";
        this[1][53] = "摸黑下山。";
        this[1][54] = "摸黑下山。";
        this[1][55] = "在旅馆看书。";
        this[1][56] = "安提瓜危地马拉清晨的复活节游行。";
        this[1][57] = "富埃戈火山。";
        this[1][58] = "危地马拉安提瓜的地标建筑圣卡塔利娜拱门。";
        this[1][59] = "危地马拉安提瓜的地标建筑圣卡塔利娜拱门。";
        this[1][60] = "从十字山架看到的安提瓜危地马拉街道和阿瓜火山。";
        this[1][61] = "我们的小天使。";
        this[1][62] = "在搭乘很晚的航班回家之前在机场睡觉。";
    }else{
        this[1][0] = "On the flight to Guatemala City.";
        this[1][1] = "Face to face with an iguana in Flores.";
        this[1][2] = "Enjoying some cold drinks in Flores.";
        this[1][3] = "Walking the alleys on Flores island.";
        this[1][4] = "Visiting the Tikal National Park.";
        this[1][5] = "Standing beneath a towering Ceiba tree, the national tree of Guatemala.";
        this[1][6] = "Visiting the Tikal National Park.";
        this[1][7] = "Visiting the Tikal National Park.";
        this[1][8] = "Visiting the Tikal National Park.";
        this[1][9] = "Visiting the Tikal National Park.";
        this[1][10] = "Visiting the Tikal National Park.";
        this[1][11] = "Photo in front of Tikal Temple I.";
        this[1][12] = "Photo in front of Tiakl Temple I.";
        this[1][13] = "View from Tikal Temple IV.";
        this[1][14] = "Photo from Tikal Temple IV.";
        this[1][15] = "Climbing down the stairs of Tikal Temple IV.";
        this[1][16] = "A spider monkey in the Tikal National Park.";
        this[1][17] = "Photo in front of Tikal Temple V.";
        this[1][18] = "Watching a performance from a street juggler in Flores.";
        this[1][19] = "Sunset over Lake Petén Itzá in Flores.";
        this[1][20] = "Visting Yaxhá National Park with guide Neftali Escobar.";
        this[1][21] = "Visting Yaxhá National Park.";
        this[1][22] = "Standing in front of a sculpture in Yaxhá National Park.";
        this[1][23] = "Photo with our guide Neftali Escobar.";
        this[1][24] = "A howler monkey in Yaxhá National Park.";
        this[1][25] = "A spider monkey in Yaxhá National Park.";
        this[1][26] = "Taking a boat ride to go "+pagelink("2504gtbird","birding with Daddy in Flores"+".");
        this[1][27] = "Playing by the Lake Petén Itzá.";
        this[1][28] = "Waiting for a flight to Guatemala City in Mundo Maya Airport.";
        this[1][29] = "Walking the streets of Antigua Guatemala.";
        this[1][30] = "Inside Antigua's spacious MacDonald's.";
        this[1][31] = "Visiting the world's most beautiful Starbucks in Antigua Guatemala.";
        this[1][32] = "Visiting the world's most beautiful Starbucks in Antigua Guatemala.";
        this[1][33] = "Walking the cobblestone streets of Antigua Guatemala.";
        this[1][34] = "Playing in the hotel swimming pool.";
        this[1][35] = "Locals setting up the Alfombras (carpets made up of dyed sawdust) on the cobblestone street to welcome the Easter procession in Antigua Guatemala.";
        this[1][36] = "Locals setting up the Alfombras (carpets made up of dyed sawdust) on the cobblestone street to welcome the Easter procession in Antigua Guatemala.";
        this[1][37] = "Church procession is held every day during the week before Easter in Antigua Guatemala.";
        this[1][38] = "Church procession in Antigua Guatemala.";
        this[1][39] = "Visiting a local market in Antigua Guatemala.";
        this[1][40] = "Church procession in Antigua Guatemala.";
        this[1][41] = "Church procession in Antigua Guatemala.";
        this[1][42] = "Church procession in Antigua Guatemala.";
        this[1][43] = "Church procession in Antigua Guatemala.";
        this[1][44] = "Church procession in Antigua Guatemala.";
        this[1][45] = "Church procession in Antigua Guatemala.";
        this[1][46] = "Waiting in a hotel lobby.";
        this[1][47] = "Agua Volcano.";
        this[1][48] = "Climbing in the Pacaya Volcano National Park.";
        this[1][49] = "Visiting the Pacaya Volcano National Park.";
        this[1][50] = "Visiting the Pacaya Volcano National Park.";
        this[1][51] = "Visiting the Pacaya Volcano National Park.";
        this[1][52] = "Roasting a marshmallow in the Pacaya Volcano National Park.";
        this[1][53] = "Descending the Pacaya Volcano in darkness.";
        this[1][54] = "Descending the Pacaya Volcano in darkness.";
        this[1][55] = "Reading a book in the hotel.";
        this[1][56] = "Early morning church procession in Antigua Guatemala.";
        this[1][57] = "Fuego Volcano.";
        this[1][58] = "Santa Catalina Arch in Antigua Guatemala.";
        this[1][59] = "Santa Catalina Arch in Antigua Guatemala.";
        this[1][60] = "Streets of Antigua Guatemala and Agua Volcano seen from Cerro de La Cruz.";
        this[1][61] = "Our angel.";
        this[1][62] = "Sleeping in the airport before a very late flight back home.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
