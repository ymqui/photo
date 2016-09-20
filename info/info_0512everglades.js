<!--
//Created by Album Builder Program Fri Dec 30 22:10:53 2005
var info_url   = "http://www.nps.gov/ever/";
var title      = "Everglades National Park";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0512everglades/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SeducesMe.mid";
var midi_cr    = new Array("Dodgerdawg's Dugout","http://d21c.com/dodgerdawg/S-Z.html");
 
if(window.usechinese){
    title      = "佛罗里达大沼泽地国家公园";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素, 300D相机, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<38;i++){
        this[0][i] = "0512everglades_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "双冠鸬鹚。";
        this[1][1] = "潜在草丛里的鳄鱼。";
        this[1][2] = "大蓝鹭。";
        this[1][3] = "蛇鹈。";
        this[1][4] = "鳄鱼。";
        this[1][5] = "鳄鱼。";
        this[1][6] = "游客被路边正在吞蟒蛇的鳄鱼所吸引。";
        this[1][7] = "正在吞吃蟒蛇的鳄鱼。";
        this[1][8] = "沼泽地。";
        this[1][9] = "双冠鸬鹚。";
        this[1][10] = "蛇鹈。";
        this[1][11] = "遍体朱红的北美红雀雄鸟。";
        this[1][12] = "多彩的佛罗里达树蜗牛，是受保护的动物。";
        this[1][13] = "我露营的帐篷。";
        this[1][14] = "沼泽地里的松树林。";
        this[1][15] = "小花。";
        this[1][16] = "树蜗牛。";
        this[1][17] = "大白鹭。";
        this[1][18] = "沼泽地。";
        this[1][19] = "三色鹭。";
        this[1][20] = "长满锯草的沼泽地。";
        this[1][21] = "在Pa-hay-okee观望台。";
        this[1][22] = "一群白鹮和彩鹮。";
        this[1][23] = "林鹳。";
        this[1][24] = "红头美洲鹫。";
        this[1][25] = "黑秃鹫。";
        this[1][26] = "鳄鱼。";
        this[1][27] = "耐盐硷的红树。";
        this[1][28] = "一只漂浮在水面上的鳄鱼。";
        this[1][29] = "一只横穿马路的泥龟。";
        this[1][30] = "绿鹭。";
        this[1][31] = "鳄鱼。";
        this[1][32] = "蛇鹈最常见的姿态。";
        this[1][33] = "小蓝鹭。";
        this[1][34] = "刚捕到鱼的蛇鹈。";
        this[1][35] = "一种小睡莲。";
        this[1][36] = "这里的鳄鱼一点都不怕人，人也不怕它。";
        this[1][37] = "公园外广阔的农田。";
    }else{
        this[1][0] = "Double-crested cormorant.";
        this[1][1] = "Alligator.";
        this[1][2] = "Great blue heron.";
        this[1][3] = "Anhinga, also called water turkey.";
        this[1][4] = "Alligator.";
        this[1][5] = "Alligator.";
        this[1][6] = "Visitors startled by a roadside alligator which is digesting a python at the moment.";
        this[1][7] = "The afore mentioned alligator.";
        this[1][8] = "Sawgrass swamp.";
        this[1][9] = "Double-crested cormorant.";
        this[1][10] = "Anhinga.";
        this[1][11] = "Cardinal.";
        this[1][12] = "Colorful liguus tree snail.";
        this[1][13] = "My tent.";
        this[1][14] = "Pine forest in the glades.";
        this[1][15] = "Flower.";
        this[1][16] = "Liguus tree snails. They are now protected by law.";
        this[1][17] = "Great egret.";
        this[1][18] = "Glades.";
        this[1][19] = "A tricolored heron.";
        this[1][20] = '"River of grass"'+" at Pa-hay-okee overlook.";
        this[1][21] = "At the Pa-hay-okee overlook.";
        this[1][22] = "A flock of white ibis and glossy ibis.";
        this[1][23] = "Wood stork.";
        this[1][24] = "Turkey vulture.";
        this[1][25] = "Black vulture.";
        this[1][26] = "Alligator.";
        this[1][27] = "Red mangrove.";
        this[1][28] = "An alligator floating in Paurotis pond.";
        this[1][29] = "A daring (striped mud) turtle crossing the road.";
        this[1][30] = "Green heron.";
        this[1][31] = "Alligator.";
        this[1][32] = "Anhinga, in its typical 'spread-eagle' pose.";
        this[1][33] = "A little blue heron.";
        this[1][34] = "An anhinga catching a mud fish.";
        this[1][35] = "Spatterdock.";
        this[1][36] = "Alligator.";
        this[1][37] = "Farm fields adjacent to the everglades.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58";
//-->
