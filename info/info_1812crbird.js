<!--
//Created by Album Builder Program Thu Dec 20 20:49:16 2018
var info_url   = "";
var title      = "Birding in Costa Rica";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1812crbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "哥斯达黎加观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<99;i++){
        this[0][i] = "1812crbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        crarol     = "，阿雷纳火山观测台山林小屋。";
        this[1][0] = "绯额鹦哥，圣何塞胡安莫拉费尔南德斯广场。";
        this[1][2] = "大尾拟八哥，雄性，圣何塞社会保障公园。";
        this[1][3] = "灰冠虫森莺，圣何塞社会保障公园。";
        this[1][4] = "大食蝇霸鹟，圣何塞。";
        this[1][5] = "森莺，圣何塞萨瓦纳公园。";
        this[1][6] = "红领带鹀，圣何塞萨瓦纳公园。";
        this[1][7] = "印加地鸠，圣何塞萨瓦纳公园。";
        this[1][8] = "大尾拟八哥，雌性，圣何塞萨瓦纳公园。";
        this[1][9] = "热带王霸鹟，圣何塞萨瓦纳公园。";
        this[1][10] = "黑腹树鸭，圣何塞萨瓦纳公园。";
        this[1][11] = "大白鹭，圣何塞萨瓦纳公园。";
        this[1][12] = "疣鼻栖鸭，圣何塞萨瓦纳公园。";
        this[1][13] = "翠绿唐加拉雀"+crarol;
        this[1][14] = "翠绿唐加拉雀"+crarol;
        this[1][15] = "金头唐加拉雀"+crarol;
        this[1][16] = "曲嘴森莺"+crarol;
        this[1][17] = "南莺鹪鹩"+crarol;
        this[1][18] = "黄顶歌雀，雄性"+crarol;
        this[1][19] = "黄喉歌雀，雄性"+crarol;
        this[1][20] = "红额亚马逊鹦鹉"+crarol;
        this[1][21] = "褐拟棕鸟"+crarol;
        this[1][22] = "栗胁林莺，雌性"+crarol;
        this[1][23] = "褐啄木鸟，雄性"+crarol;
        this[1][24] = "褐啄木鸟，雄性"+crarol;
        this[1][25] = "黄喉歌雀，雄性"+crarol;
        this[1][26] = "黄喉歌雀，雌性"+crarol;
        this[1][27] = "棕榈裸鼻雀"+crarol;
        this[1][28] = "褐背鸫"+crarol;
        this[1][29] = "白冠鹦哥"+crarol;
        this[1][30] = "绿旋蜜雀，雌性"+crarol;
        this[1][31] = "玫红丽唐纳雀，雌性"+crarol;
        this[1][32] = "灰顶短嘴霸鹟"+crarol;
        this[1][33] = "灰蓝裸鼻雀"+crarol;
        this[1][34] = "大凤冠雉，雄性"+crarol;
        this[1][35] = "红脚旋蜜雀，雄性"+crarol;
        this[1][36] = "红脚旋蜜雀，雌性"+crarol;
        this[1][37] = "红脚旋蜜雀，雄性，非繁殖羽"+crarol;
        this[1][38] = "绿旋蜜雀，雄性"+crarol;
        this[1][39] = "绿旋蜜雀，雌性"+crarol;
        this[1][40] = "棕尾蜂鸟"+crarol;
        this[1][41] = "棕尾蜂鸟"+crarol;
        this[1][42] = "鳞胸刀翅蜂鸟"+crarol;
        this[1][43] = "淡嘴啄木鸟，雌性"+crarol;
        this[1][44] = "点斑蚁鸟，雌性"+crarol;
        this[1][45] = "点斑蚁鸟，雄性"+crarol;
        this[1][46] = "点斑蚁鸟，雄性"+crarol;
        this[1][47] = "双色蚁鸟"+crarol;
        this[1][48] = "双色蚁鸟"+crarol;
        this[1][49] = "眼斑蚁鸟"+crarol;
        this[1][50] = "红腰厚嘴唐纳雀，雄性"+crarol;
        this[1][51] = "黄喉舞雀"+crarol;
        this[1][52] = "群栖短嘴霸鹟"+crarol;
        this[1][53] = "纹喉隐蜂鸟"+crarol;
        this[1][54] = "紫头蜂鸟，雌性"+crarol;
        this[1][55] = "大食蝇霸鹟"+crarol;
        this[1][56] = "黄腰王森莺"+crarol;
        this[1][57] = "领簇舌巨嘴鸟"+crarol;
        this[1][58] = "领簇舌巨嘴鸟"+crarol;
        this[1][59] = "纯色翘嘴雀"+crarol;
        this[1][60] = "西牛背鹭"+crarol;
        this[1][61] = "日鳽"+crarol;
        this[1][62] = "小蓝鹭，未成年"+crarol;
        this[1][63] = "笑隼"+crarol;
        this[1][64] = "栗头唐加拉雀"+crarol;
        this[1][65] = "黑颊啄木鸟，雌性"+crarol;
        this[1][66] = "黑颊啄木鸟，雄性"+crarol;
        this[1][67] = "栗胸林莺，非繁殖羽雌性/未成年雄性"+crarol;
        this[1][68] = "紫头蜂鸟，雄性"+crarol;
        this[1][69] = "褐鸦"+crarol;
        this[1][70] = "领簇舌巨嘴鸟"+crarol;
        this[1][71] = "绿背歌雀，雌性"+crarol;
        this[1][72] = "紫冠雉"+crarol;
        this[1][73] = "纹头鴷雀"+crarol;
        this[1][74] = "红翎毛翅燕"+crarol;
        this[1][75] = "黄脸草雀，雄性"+crarol;
        this[1][76] = "黄脸草雀，雌性"+crarol;
        this[1][77] = "点斑鴷雀"+crarol;
        this[1][78] = "斑尾美洲咬鹃，雄性"+crarol;
        this[1][79] = "艳拟鹂"+crarol;
        this[1][80] = "杂色食籽雀，雌性"+crarol;
        this[1][81] = "杂色食籽雀，雄性"+crarol;
        this[1][82] = "大凤冠雉，雌性"+crarol;
        this[1][83] = "黑嘴巨嘴鸟"+crarol;
        this[1][84] = "西绿霸鹟"+crarol;
        this[1][85] = "白额棕翅鸠"+crarol;
        this[1][86] = "玫红丽唐纳雀，雄性"+crarol;
        this[1][87] = "绿鴷雀"+crarol;
        this[1][88] = "黄腰王森莺"+crarol;
        this[1][89] = "白领美洲咬鹃，雄性"+crarol;
        this[1][90] = "白领美洲咬鹃，雄性"+crarol;
        this[1][91] = "长尾霸鹟"+crarol;
        this[1][92] = "霍氏啄木鸟，雄性，圣何塞社会保障公园。";
        this[1][93] = "霍氏啄木鸟，雌性，圣何塞莫拉桑公园。";
        this[1][94] = "橙腹拟鹂，雌性，圣何塞莫拉桑公园。";
        this[1][95] = "棕腹灰背舞雀，圣何塞莫拉桑公园。";
        this[1][96] = "红嘴鸽，圣何塞莫拉桑公园。";
        this[1][97] = "玫红丽唐纳雀，雌性，圣何塞莫拉桑公园。";
        this[1][98] = "热带绿霸鹟，圣何塞莫拉桑公园。";
    }else{
        crarol     = ", Arenal Observatory Lodge.";
        this[1][0] = "Crimson-fronted Parakeet, Plaza Juan Mora Fernandez, San Jose.";
        this[1][2] = "Great-tailed Grackle, male, Park of Social Guarantees, San Jose.";
        this[1][3] = "Tennessee Warbler, Park of Social Guarantees, San Jose.";
        this[1][4] = "Great Kiskadee, San Jose.";
        this[1][5] = "Warbler, La Sabana Park, San Jose.";
        this[1][6] = "Rufous-collared Sparrow, La Sabana Park, San Jose.";
        this[1][7] = "Inca Dove, La Sabana Park, San Jose.";
        this[1][8] = "Great-tailed Grackle, female, La Sabana Park, San Jose.";
        this[1][9] = "Tropical Kingbird, La Sabana Park, San Jose.";
        this[1][10] = "Black-bellied Whistling-Duck, La Sabana Park, San Jose.";
        this[1][11] = "Great Egret, La Sabana Park, San Jose.";
        this[1][12] = "Muscovy Duck, La Sabana Park, San Jose.";
        this[1][13] = "Emerald Tanager"+crarol;
        this[1][14] = "Emerald Tanager"+crarol;
        this[1][15] = "Golden-hooded Tanager"+crarol;
        this[1][16] = "Bananaquit"+crarol;
        this[1][17] = "Southern House Wren"+crarol;
        this[1][18] = "Tawny-capped Euphonia, male"+crarol;
        this[1][19] = "Yellow-throated Euphonia, male"+crarol;
        this[1][20] = "Red-lored Parrot"+crarol;
        this[1][21] = "Montezuma Oropendola"+crarol;
        this[1][22] = "Chestnut-sided Warbler, female"+crarol;
        this[1][23] = "Smoky-brown Woodpecker, male"+crarol;
        this[1][24] = "Smoky-brown Woodpecker, male"+crarol;
        this[1][25] = "Yellow-throated Euphonia, male"+crarol;
        this[1][26] = "Yellow-throated Euphonia, female"+crarol;
        this[1][27] = "Palm Tanager"+crarol;
        this[1][28] = "Clay-colored Thrush"+crarol;
        this[1][29] = "White-crowned Parrot"+crarol;
        this[1][30] = "Green Honeycreeper, female"+crarol;
        this[1][31] = "Summer Tanager, female"+crarol;
        this[1][32] = "Gray-capped Flycatcher"+crarol;
        this[1][33] = "Blue-gray Tanager"+crarol;
        this[1][34] = "Great Curassow, male"+crarol;
        this[1][35] = "Red-legged Honeycreeper, male"+crarol;
        this[1][36] = "Red-legged Honeycreeper, female"+crarol;
        this[1][37] = "Red-legged Honeycreeper, nonbreeding male"+crarol;
        this[1][38] = "Green Honeycreeper, male"+crarol;
        this[1][39] = "Green Honeycreeper, female"+crarol;
        this[1][40] = "Rufous-tailed Hummingbird"+crarol;
        this[1][41] = "Rufous-tailed Hummingbird"+crarol;
        this[1][42] = "Scaly-breasted Hummingbird"+crarol;
        this[1][43] = "Pale-billed Woodpecker, female"+crarol;
        this[1][44] = "Spotted Antbird, female"+crarol;
        this[1][45] = "Spotted Antbird, male"+crarol;
        this[1][46] = "Spotted Antbird, male"+crarol;
        this[1][47] = "Bicolored Antbird"+crarol;
        this[1][48] = "Bicolored Antbird"+crarol;
        this[1][49] = "Ocellated Antbird"+crarol;
        this[1][50] = "Scarlet-rumped Tanager, male"+crarol;
        this[1][51] = "Buff-throated Saltator"+crarol;
        this[1][52] = "Social Flycatcher"+crarol;
        this[1][53] = "Stripe-throated Hermit"+crarol;
        this[1][54] = "Violet-headed Hummingbird, female"+crarol;
        this[1][55] = "Great Kiskadee"+crarol;
        this[1][56] = "Buff-rumped Warbler"+crarol;
        this[1][57] = "Collared Aracari"+crarol;
        this[1][58] = "Collared Aracari"+crarol;
        this[1][59] = "Plain Xenops"+crarol;
        this[1][60] = "Western Cattle Egret"+crarol;
        this[1][61] = "Sunbittern"+crarol;
        this[1][62] = "Little Blue Heron, immature"+crarol;
        this[1][63] = "Laughing Falcon"+crarol;
        this[1][64] = "Bay-headed Tanager"+crarol;
        this[1][65] = "Black-cheeked Woodpecker, female"+crarol;
        this[1][66] = "Black-cheeked Woodpecker, male"+crarol;
        this[1][67] = "Bay-breasted Warbler, nonbreeding female/immature male"+crarol;
        this[1][68] = "Violet-headed Hummingbird, male"+crarol;
        this[1][69] = "Brown Jay"+crarol;
        this[1][70] = "Collared Aracari"+crarol;
        this[1][71] = "Olive-backed Euphonia, female"+crarol;
        this[1][72] = "Crested Guan"+crarol;
        this[1][73] = "Streak-headed Woodcreeper"+crarol;
        this[1][74] = "Southern Rough-winged Swallow"+crarol;
        this[1][75] = "Yellow-faced Grassquit, male"+crarol;
        this[1][76] = "Yellow-faced Grassquit, female"+crarol;
        this[1][77] = "Spotted Woodcreeper"+crarol;
        this[1][78] = "Gartered Trogon, male"+crarol;
        this[1][79] = "Melodious Blackbird"+crarol;
        this[1][80] = "Variable Seedeater, female"+crarol;
        this[1][81] = "Variable Seedeater, male"+crarol;
        this[1][82] = "Great Curassow, female"+crarol;
        this[1][83] = "Yellow-throated Toucan"+crarol;
        this[1][84] = "Western Wood-Pewee"+crarol;
        this[1][85] = "White-tipped Dove"+crarol;
        this[1][86] = "Summer Tanager, male"+crarol;
        this[1][87] = "Olivaceous Woodcreeper"+crarol;
        this[1][88] = "Buff-rumped Warbler"+crarol;
        this[1][89] = "Collared Trogon, male"+crarol;
        this[1][90] = "Collared Trogon, male"+crarol;
        this[1][91] = "Long-tailed Tyrant"+crarol;
        this[1][92] = "Hoffmann's Woodpecker, male, Park of Social Guarantees, San Jose.";
        this[1][93] = "Hoffmann's Woodpecker, female, Morazán Park, San Jose.";
        this[1][94] = "Baltimore Oriole, female, Morazán Park, San Jose.";
        this[1][95] = "Cinnamon-bellied Saltator, Morazán Park, San Jose.";
        this[1][96] = "Red-billed Pigeon, Morazán Park, San Jose.";
        this[1][97] = "Summer Tanager, female, Morazán Park, San Jose.";
        this[1][98] = "Tropical Pewee, Morazán Park, San Jose.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->