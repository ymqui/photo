<!--
//Created by Album Builder Program Sun Jan 29 15:56:18 2023
var info_url   = "";
var title      = "Vacationing in Panama";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2301panama/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Vacationing in Panama";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<49;i++){
        this[0][i] = "2301panama_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在巴拿马城的老城。";
        this[1][1] = "在巴拿马城的老城。";
        this[1][2] = "在巴拿马城的老城。";
        this[1][3] = "在巴拿马城的老城。";
        this[1][4] = "巴拿马城市景。";
        this[1][5] = "在巴拿马城的老城。";
        this[1][6] = "在巴拿马城的老城。";
        this[1][7] = "和总统府卫兵合影。";
        this[1][8] = "乘船前往巴拿马运河加通湖的猴岛。";
        this[1][9] = "乘船前往巴拿马运河加通湖的猴岛。";
        this[1][10] = "在猴岛看猴子。";
        this[1][11] = "在猴岛看猴子。";
        this[1][12] = "在猴岛看猴子。";
        this[1][13] = "白脸卷尾猴。";
        this[1][14] = "在猴岛看猴子。";
        this[1][15] = "在猴岛看猴子。";
        this[1][16] = "在猴岛看猴子。";
        this[1][18] = "杰弗里狨猴。";
        this[1][19] = "在巴拿马运河上。";
        this[1][20] = "在巴拿马运河上。";
        this[1][21] = "三趾树懒。";
        this[1][22] = "索韦拉尼亚国家公园的切叶蚁。";
        this[1][23] = "游索韦拉尼亚国家公园。";
        this[1][24] = "在巴拿马城的一家拉面店。";
        this[1][25] = "参观巴拿马运河米拉弗洛雷斯船闸。";
        this[1][26] = "参观巴拿马运河米拉弗洛雷斯船闸。";
        this[1][27] = "参观巴拿马运河米拉弗洛雷斯船闸。";
        this[1][28] = "在巴拿马城的阿尔布鲁克购物中心。";
        this[1][29] = "参观生物博物馆。";
        this[1][30] = "参观生物博物馆。";
        this[1][31] = "参观生物博物馆。";
        this[1][32] = "参观生物博物馆。";
        this[1][33] = "乘坐独木舟前往恩贝拉部落普鲁土著村。";
        this[1][35] = "乘坐独木舟前往恩贝拉部落普鲁土著村。";
        this[1][36] = "乘坐独木舟前往恩贝拉部落普鲁土著村。";
        this[1][37] = "恩贝拉村民欢迎游客。";
        this[1][38] = "恩贝拉土著村的集会场所。";
        this[1][40] = "午餐是油炸鱼和大蕉。";
        this[1][42] = "舞蹈表演。";
        this[1][43] = "舞蹈表演。";
        this[1][45] = "和村民一起跳舞。";
        this[1][47] = "土著村里的一户居民。";
        this[1][48] = "在飞机上画画。";
    }else{
        this[1][0] = "At Casco Viejo in Panama City.";
        this[1][1] = "At Casco Viejo in Panama City.";
        this[1][2] = "At Casco Viejo in Panama City.";
        this[1][3] = "At the Casco Viejo in Panama City.";
        this[1][4] = "Panama City cityscape.";
        this[1][5] = "At Casco Viejo in Panama City.";
        this[1][6] = "At Casco Viejo in Panama City.";
        this[1][7] = "With the presidential palace guard.";
        this[1][8] = "Taking a boat ride to the Monkey Islands in Gatun Lake.";
        this[1][9] = "Taking a boat ride to the Monkey Islands in Gatun Lake.";
        this[1][10] = "Watching monkeys in Monkey Islands.";
        this[1][11] = "Watching monkeys in Monkey Islands.";
        this[1][12] = "Watching monkeys in Monkey Islands.";
        this[1][13] = "A white-faced capuchin monkey.";
        this[1][14] = "Watching monkeys in Monkey Islands.";
        this[1][15] = "Watching monkeys in Monkey Islands.";
        this[1][16] = "Watching monkeys in Monkey Islands.";
        this[1][18] = "Geoffroy's tamarin.";
        this[1][19] = "In the Panama canal.";
        this[1][20] = "In the Panama canal.";
        this[1][21] = "A three-toed sloth.";
        this[1][22] = "Leafcutter ants in Soberania National Park.";
        this[1][23] = "Hiking in the Soberania National Park.";
        this[1][24] = "At a ramen restaurant in Panama City.";
        this[1][25] = "Visiting the Panama Canal Miraflores Locks.";
        this[1][26] = "Visiting the Panama Canal Miraflores Locks.";
        this[1][27] = "Visiting the Panama Canal Miraflores Locks.";
        this[1][28] = "In the Albrook Mall in Panamac city.";
        this[1][29] = "Visiting the Biomuseo.";
        this[1][30] = "Visiting the Biomuseo.";
        this[1][31] = "Visiting the Biomuseo.";
        this[1][32] = "Visiting the Biomuseo.";
        this[1][33] = "Taking a canoe ride to visit the Embera Puru Village.";
        this[1][35] = "Taking a canoe ride to visit the Embera Puru Village.";
        this[1][36] = "Taking a canoe ride to visit the Embera Puru Village.";
        this[1][37] = "Welcome from the Embera village people.";
        this[1][38] = "The Embera Puru Village community gathering place.";
        this[1][40] = "Lunch is fried fish and plantain.";
        this[1][42] = "Dance performance.";
        this[1][43] = "Dance performance.";
        this[1][45] = "Dancing with the tribe.";
        this[1][47] = "An Embera family at the village.";
        this[1][48] = "Drawing during the flight back home.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
