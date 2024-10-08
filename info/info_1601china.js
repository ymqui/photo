<!--
//Created by Album Builder Program Mon Jan 18 18:09:03 2016
var info_url   = "";
var title      = "China Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1601china/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Stay.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "中国观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<72;i++){
        this[0][i] = "1601china_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "燕雀，雌性，北京景山公园。";
        this[1][1] = "燕雀，雌性，北京景山公园。";
        this[1][2] = "灰椋鸟，北京景山公园。";
        this[1][3] = "灰喜鹊，北京景山公园。";
        this[1][4] = "原鸽，北京景山公园。";
        this[1][5] = "麻雀，北京景山公园。";
        this[1][6] = "珠颈斑鸠，北京景山公园。";
        this[1][7] = "红尾鸫，北京景山公园。";
        this[1][8] = "丝光椋鸟，浙江江山须江公园。";
        this[1][9] = "白腰文鸟，浙江江山须江公园。";
        this[1][10] = "白腰文鸟，浙江江山须江公园。";
        this[1][11] = "北红尾鸲，雌性，浙江江山须江公园。";
        this[1][12] = "橙腹叶鹎，雄性，浙江江山须江公园。";
        this[1][13] = "橙腹叶鹎，雄性，浙江江山须江公园。";
        this[1][14] = "橙腹叶鹎，雌性，浙江江山须江公园。";
        this[1][15] = "乌鸫，雌性，浙江江山须江公园。";
        this[1][16] = "红嘴相思鸟，浙江江山须江公园。";
        this[1][17] = "红胁蓝尾鸲，雌性，浙江江山须江公园。";
        this[1][18] = "红胁蓝尾鸲，雌性，浙江江山须江公园。";
        this[1][19] = "白头鹎，浙江江山须江公园。";
        this[1][20] = "远东山雀，浙江江山须江公园。";
        this[1][21] = "远东山雀，浙江江山须江公园。";
        this[1][22] = "普通翠鸟，雄性，浙江江山须江公园。";
        this[1][23] = "红头长尾山雀，浙江江山须江公园。";
        this[1][24] = "红头长尾山雀，浙江江山须江公园。";
        this[1][25] = "鹊鸲，雄性，浙江江山须江公园。";
        this[1][26] = "黑尾蜡嘴雀，雌性，浙江江山须江公园。";
        this[1][27] = "黄腹山雀，雌性，浙江江山须江公园。";
        this[1][28] = "黄腹山雀，雄性，浙江江山须江公园。";
        this[1][29] = "普通翠鸟，雌性，浙江江山须江公园。";
        this[1][30] = "白鹡鸰，浙江江山须江公园。";
        this[1][31] = "画眉，浙江江山须江公园。";
        this[1][32] = "画眉，浙江江山须江公园。";
        this[1][33] = "北红尾鸲，雌性，浙江江山须江公园。";
        this[1][34] = "织女银鸥，未成年，上海外滩。";
        this[1][35] = "织女银鸥，上海外滩。";
        this[1][36] = "小白鹭，上海外滩。";
        this[1][37] = "黑短脚鹎，白头形，福建龙岩登高公园。";
        this[1][38] = "叉尾太阳鸟，雄性，福建龙岩登高公园。";
        this[1][39] = "叉尾太阳鸟，雌性，福建龙岩登高公园。";
        this[1][40] = "叉尾太阳鸟，雌性，福建龙岩登高公园。";
        this[1][41] = "领雀嘴鹎，福建龙岩内坂村。";
        this[1][42] = "棕背伯劳，福建龙岩内坂村。";
        this[1][43] = "红耳鹎，福建龙岩内坂村。";
        this[1][44] = "北红尾鸲，雄性，福建龙岩内坂村。";
        this[1][45] = "暗绿绣眼鸟，福建龙岩登高公园。";
        this[1][46] = "金腰燕，福建龙岩登高公园。";
        this[1][47] = "东亚石鵖，雄性，福建龙岩登高公园。";
        this[1][48] = "东亚石鵖，雌性，福建龙岩登高公园。";
        this[1][49] = "灰鹡鸰，福建龙岩登高公园。";
        this[1][50] = "红尾水鸲，雌性，福建龙岩登高公园。";
        this[1][51] = "红尾水鸲，雄性，福建龙岩登高公园。";
        this[1][52] = "树鹨，福建龙岩登高公园。";
        this[1][53] = "长尾缝叶莺，福建龙岩登高公园。";
        this[1][54] = "长尾缝叶莺，福建龙岩登高公园。";
        this[1][55] = "白鹡鸰，福建龙岩登高公园。";
        this[1][56] = "苍鹭，福建厦门集美。";
        this[1][57] = "普通翠鸟，雌性，福建厦门集美。";
        this[1][58] = "白鹡鸰，福建厦门集美。";
        this[1][59] = "白鹡鸰，福建厦门集美。";
        this[1][60] = "普通鸬鹚，福建厦门集美。";
        this[1][61] = "红嘴巨鸥，福建厦门集美。";
        this[1][62] = "池鹭，冬羽，福建厦门集美。";
        this[1][63] = "大嘴乌鸦，北京颐和园。";
        this[1][64] = "大嘴乌鸦，北京颐和园。";
        this[1][65] = "喜鹊，北京颐和园。";
        this[1][66] = "雀鹰，北京颐和园。";
        this[1][67] = "褐头山雀，北京颐和园。";
        this[1][68] = "黑头鳾，北京颐和园。";
        this[1][69] = "乌鸫，雄性，北京颐和园。";
        this[1][70] = "金翅雀，北京天坛公园。";
        this[1][71] = "红尾鸫，北京天坛公园。";
    }else{
        this[1][0] = "Brambling, female, Jingshan Park, Beijing.";
        this[1][1] = "Brambling, female, Jingshan Park, Beijing.";
        this[1][2] = "White-cheeked Starling, Jingshan Park, Beijing.";
        this[1][3] = "Azure-winged Magpie, Jingshan Park, Beijing.";
        this[1][4] = "Rock Pigeon, Jingshan Park, Beijing.";
        this[1][5] = "Eurasian Tree Sparrow, Jingshan Park, Beijing.";
        this[1][6] = "Spotted Dove, Jingshan Park, Beijing.";
        this[1][7] = "Naumann's Thrush, Jingshan Park, Beijing.";
        this[1][8] = "Red-billed Starling, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][9] = "White-rumped Munia, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][10] = "White-rumped Munia, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][11] = "Daurian Redstart, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][12] = "Orange-bellied Leafbird, male, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][13] = "Orange-bellied Leafbird, male, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][14] = "Orange-bellied Leafbird, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][15] = "Chinese Blackbird, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][16] = "Red-billed Leiothrix, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][17] = "Red-flanked Bluetail, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][18] = "Red-flanked Bluetail, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][19] = "Light-vented Bulbul, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][20] = "Japanese Tit, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][21] = "Japanese Tit, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][22] = "Common Kingfisher, male, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][23] = "Black-throated Bushtit, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][24] = "Black-throated Bushtit, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][25] = "Oriental Magpie-robin, male, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][26] = "Chinese Grosbeak, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][27] = "Yellow-bellied Tit, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][28] = "Yellow-bellied Tit, male, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][29] = "Common Kingfisher, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][30] = "White Wagtail, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][31] = "Chinese Hwamei, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][32] = "Chinese Hwamei, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][33] = "Daurian Redstart, female, Xujiang Park, Jiangshan, Zhejiang.";
        this[1][34] = "Vega Gull, immature, Waitan, Shanghai.";
        this[1][35] = "Vega Gull, Waitan, Shanghai.";
        this[1][36] = "Little Egret, Waitan, Shanghai.";
        this[1][37] = "Black Bulbul, white-headed form, Denggao Park, Longyan, Fujian.";
        this[1][38] = "Fork-tailed Sunbird, male, Denggao Park, Longyan, Fujian.";
        this[1][39] = "Fork-tailed Sunbird, female, Denggao Park, Longyan, Fujian.";
        this[1][40] = "Fork-tailed Sunbird, female, Denggao Park, Longyan, Fujian.";
        this[1][41] = "Collared Finchbill, Neiban, Longyan, Fujian.";
        this[1][42] = "Long-tailed Shrike, Neiban, Longyan, Fujian.";
        this[1][43] = "Red-whiskered Bulbul, Neiban, Longyan, Fujian.";
        this[1][44] = "Daurian Redstart, male, Neiban, Longyan, Fujian.";
        this[1][45] = "Warbling White-eye, Denggao Park, Longyan, Fujian.";
        this[1][46] = "Eastern Red-rumped Swallow, Denggao Park, Longyan, Fujian.";
        this[1][47] = "Amur Stonechat, male, Denggao Park, Longyan, Fujian.";
        this[1][48] = "Amur Stonechat, female, Denggao Park, Longyan, Fujian.";
        this[1][49] = "Grey Wagtail, Denggao Park, Longyan, Fujian.";
        this[1][50] = "Plumbeous Water Redstart, female, Denggao Park, Longyan, Fujian.";
        this[1][51] = "Plumbeous Water Redstart, male, Denggao Park, Longyan, Fujian.";
        this[1][52] = "Olive-backed Pipit, Denggao Park, Longyan, Fujian.";
        this[1][53] = "Common Tailorbird, Denggao Park, Longyan, Fujian.";
        this[1][54] = "Common Tailorbird, Denggao Park, Longyan, Fujian.";
        this[1][55] = "White Wagtail, Denggao Park, Longyan, Fujian.";
        this[1][56] = "Grey Heron, Jimei, Xiamen, Fujian.";
        this[1][57] = "Common Kingfisher, female, Jimei, Xiamen, Fujian.";
        this[1][58] = "White Wagtail, Jimei, Xiamen, Fujian.";
        this[1][59] = "White Wagtail, Jimei, Xiamen, Fujian.";
        this[1][60] = "Great Cormorant, Jimei, Xiamen, Fujian.";
        this[1][61] = "Caspian Tern, Jimei, Xiamen, Fujian.";
        this[1][62] = "Chinese Pond Heron, winter plumage, Jimei, Xiamen, Fujian.";
        this[1][63] = "Large-billed Crow, Summer Palace, Beijing.";
        this[1][64] = "Large-billed Crow, Summer Palace, Beijing.";
        this[1][65] = "Oriental Magpie, Summer Palace, Beijing.";
        this[1][66] = "Eurasian Sparrowhawk, Summer Palace, Beijing.";
        this[1][67] = "Willow Tit, Summer Palace, Beijing.";
        this[1][68] = "Chinese Nuthatch, Summer Palace, Beijing.";
        this[1][69] = "Chinese Blackbird, male, Summer Palace, Beijing.";
        this[1][70] = "Grey-capped Greenfinch, Temple of Heaven, Beijing.";
        this[1][71] = "Naumann's Thrush, Temple of Heaven, Beijing.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
