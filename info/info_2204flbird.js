<!--
//Created by Album Builder Program Sun May 08 18:40:35 2022
var info_url   = "";
var title      = "Birding in south Florida";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.1 Mega Pixels.";
var dir        = maindir+"pics/2204flbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "南佛罗里达州观鸟";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<57;i++){
        this[0][i] = "2204flbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "海龟国家公园内的杰斐逊堡。";
        this[1][1] = "医院岛上的蓝脸鲣鸟。";
        this[1][2] = "华丽军舰鸟，雄性，海龟国家公园。";
        this[1][3] = "华丽军舰鸟，雌性，海龟国家公园。";
        this[1][4] = "乌燕鸥， 海龟国家公园。";
        this[1][5] = "白顶玄鸥，海龟国家公园。";
        this[1][6] = "黑玄燕鸥，海龟国家公园。";
        this[1][7] = "粉红燕鸥，海龟国家公园。";
        this[1][8] = "橙嘴凤头燕鸥，海龟国家公园。";
        this[1][9] = "褐翅燕鸥，海龟国家公园。";
        this[1][10] = "褐翅燕鸥，海龟国家公园。";
        this[1][11] = "橙顶灶莺，海龟国家公园。";
        this[1][12] = "栗颊林莺，雌性，海龟国家公园。";
        this[1][13] = "牛背鹭，海龟国家公园。";
        this[1][14] = "灰王霸鹟，海龟国家公园。";
        this[1][15] = "灰背隼，海龟国家公园。";
        this[1][16] = "橙尾鸲莺，雌性，海龟国家公园。";
        this[1][17] = "橙尾鸲莺，雄性，海龟国家公园。";
        this[1][18] = "栗颊林莺，雄性，海龟国家公园。";
        this[1][19] = "栗颊林莺，雄性，海龟国家公园。";
        this[1][20] = "黑白森莺，海龟国家公园。";
        this[1][21] = "棕榈林莺，海龟国家公园。";
        this[1][22] = "棕榈林莺，海龟国家公园。";
        this[1][23] = "黑髭莺雀，海龟国家公园。";
        this[1][24] = "安岛夜鹰，马拉松岛机场。";
        this[1][25] = "白顶鸽，基韦斯特岛。";
        this[1][26] = "黑颈长脚鹬，草岛。";
        this[1][27] = "半蹼鸻，草岛。";
        this[1][28] = "安岛夜鹰，草岛。";
        this[1][29] = "大冠蝇霸鹟，草岛。";
        this[1][30] = "紫水鸡，迈阿密-戴德郡海豚商场。";
        this[1][31] = "紫水鸡，迈阿密-戴德郡海豚商场。";
        this[1][32] = "宽尾拟八哥，雄性，迈阿密-戴德郡海豚商场。";
        this[1][33] = "蓝孔雀"，雄性，迈阿密-戴德郡克兰登公园。";
        this[1][34] = "蓝孔雀"，雄性，迈阿密-戴德郡克兰登公园。";
        this[1][35] = "埃及雁，迈阿密-戴德郡克兰登公园。";
        this[1][36] = "沙丘鹤，迈阿密-戴德郡克兰登公园。";
        this[1][37] = "美洲黑水鸡，迈阿密-戴德郡克兰登公园。";
        this[1][38] = "侏䴙䴘，迈阿密-戴德郡克兰登公园。";
        this[1][39] = "燕尾鸢，大沼泽地国家公园鲨鱼谷。";
        this[1][40] = "白眼莺雀，大沼泽地国家公园鲨鱼谷。";
        this[1][41] = "厚嘴鸻，雌性，迈尔斯堡海滩卡洛斯角。";
        this[1][42] = "厚嘴鸻，雄性，迈尔斯堡海滩卡洛斯角。";
        this[1][43] = "地鸠，迈尔斯堡海滩卡洛斯角。";
        this[1][44] = "粉红琵鹭，迈尔斯堡海滩。";
        this[1][45] = "斑翅鹬，迈尔斯堡海滩。";
        this[1][46] = "双领鸻，未成年，迈尔斯堡海滩。";
        this[1][47] = "橙翅亚马逊鹦鹉，迈阿密-戴德郡布如尔公园。";
        this[1][48] = "红冠亚马逊鹦鹉，迈阿密-戴德郡布如尔公园。";
        this[1][49] = "栗额金刚鹦鹉，迈阿密-戴德郡布如尔公园。";
        this[1][50] = "黄翅斑鹦哥，迈阿密-戴德郡福克斯公园。";
        this[1][51] = "橙翅亚马逊鹦鹉，马西森硬木公园。";
        this[1][52] = "东美角鸮，灰色形，马西森硬木公园。";
        this[1][53] = "东美角鸮，灰色形，，马西森硬木公园。";
        this[1][54] = "短尾鵟，未成年黑色形，马西森硬木公园。";
        this[1][55] = "穴崖燕，迈阿密-戴德郡西南248街收费公路桥。";
        this[1][56] = "红尾鵟，迈阿密-戴德郡西南217大街和西南392街路口。";
    }else{
        this[1][0] = "Fort Jefferson in the Dry Tortugas National Park.";
        this[1][1] = "Masked Boobies on Hospital Key.";
        this[1][2] = "Magnificent Frigatebird, male, Dry Tortugas National Park.";
        this[1][3] = "Magnificent Frigatebird, female, Dry Tortugas National Park.";
        this[1][4] = "Sooty Tern, Dry Tortugas National Park.";
        this[1][5] = "Brown Noddy, Dry Tortugas National Park.";
        this[1][6] = "Black Noddy, Dry Tortugas National Park.";
        this[1][7] = "Roseate Tern, Dry Tortugas National Park.";
        this[1][8] = "Royal Tern, Dry Tortugas National Park.";
        this[1][9] = "Bridled Tern, Dry Tortugas National Park.";
        this[1][10] = "Bridled Tern, Dry Tortugas National Park.";
        this[1][11] = "Ovenbird, Dry Tortugas National Park.";
        this[1][12] = "Cape May Warbler, female, Dry Tortugas National Park.";
        this[1][13] = "Cattle Egret, Dry Tortugas National Park.";
        this[1][14] = "Gray Kingbird, Dry Tortugas National Park.";
        this[1][15] = "Merlin, Dry Tortugas National Park.";
        this[1][16] = "American Redstart, female, Dry Tortugas National Park.";
        this[1][17] = "American Redstart, male, Dry Tortugas National Park.";
        this[1][18] = "Cape May Warbler, male, Dry Tortugas National Park.";
        this[1][19] = "Cape May Warbler, male, Dry Tortugas National Park.";
        this[1][20] = "Black-and-white Warbler, Dry Tortugas National Park.";
        this[1][21] = "Palm Warbler, Dry Tortugas National Park.";
        this[1][22] = "Palm Warbler, Dry Tortugas National Park.";
        this[1][23] = "Black-whiskered Vireo, Dry Tortugas National Park.";
        this[1][24] = "Antillean Nighthawk, Marathon Key Airport.";
        this[1][25] = "White-crowned Pigeon, Key West.";
        this[1][26] = "Black-necked Stilt, Grassy Key.";
        this[1][27] = "Semipalmated Plover, Grassy Key.";
        this[1][28] = "Antillean Nighthawk, Grassy Key.";
        this[1][29] = "Great Crested Flycatcher, Grassy Key.";
        this[1][30] = "Gray-headed Swamphen, Dolphin Mall, Miami.";
        this[1][31] = "Gray-headed Swamphen, Dolphin Mall, Miami.";
        this[1][32] = "Boat-tailed Grackle, male, Dolphin Mall, Miami.";
        this[1][33] = "Indian Peafowl, male, Crandon Park, Miami.";
        this[1][34] = "Indian Peafowl, male, Crandon Park, Miami.";
        this[1][35] = "Egyptian Goose, Crandon Park, Miami.";
        this[1][36] = "Sandhill Crane, Crandon Park, Miami.";
        this[1][37] = "Common Gallinule, Crandon Park, Miami.";
        this[1][38] = "Least Grebe, Crandon Park, Miami.";
        this[1][39] = "Swallow-tailed Kite, Shark Valley, Everglades National Park.";
        this[1][40] = "White-eyed Vireo, Shark Valley, Everglades National Park.";
        this[1][41] = "Wilson's Plover, female, Carlos Pointe.";
        this[1][42] = "Wilson's Plover, male, Carlos Pointe.";
        this[1][43] = "Common Ground Dove, Carlos Pointe.";
        this[1][44] = "Roseate Spoonbill, Fort Myers Beach.";
        this[1][45] = "Willet, Fort Myers Beach.";
        this[1][46] = "Killdeer, immature, Fort Myers Beach.";
        this[1][47] = "Orange-winged Parrot, Brewer Park, Miami.";
        this[1][48] = "Red-crowned Parrot, Brewer Park, Miami.";
        this[1][49] = "Chestnut-fronted Macaw, Brewer Park, Miami.";
        this[1][50] = "Yellow-chevroned Parakeet, Fuchs Park, Miami.";
        this[1][51] = "Orange-winged Parrot, Matheson Hammock Park, Miami.";
        this[1][52] = "Eastern Screech-Owl, gray morph, Matheson Hammock Park, Miami.";
        this[1][53] = "Eastern Screech-Owl, gray morph, Matheson Hammock Park, Miami.";
        this[1][54] = "Shrot-tailed Hawk, immature dark morph, Matheson Hammock Park, Miami.";
        this[1][55] = "Cave Swallow, SW 248 St Turnpike Bridge, Miami-Dade County.";
        this[1][56] = "Red-tailed Hawk, SW 217 Ave & SW 392 St, Miami-Dade County.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
