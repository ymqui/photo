<!--
//Created by Album Builder Program Thu Jun 16 08:29:37 2016
var info_url   = "";
var title      = "Birding in South Carolina and Florida";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1606florida/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CountingStars.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "南卡罗来纳州和佛罗里达州观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<28;i++){
        this[0][i] = "1606florida_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "丽彩鹀，雄性，亨廷顿海滩州立公园，南卡罗来纳州";
        this[1][1] = "丽彩鹀，雌性，亨廷顿海滩州立公园，南卡罗来纳州";
        this[1][2] = "斑翅鹬，亨廷顿海滩州立公园，南卡罗来纳州";
        this[1][3] = "斑翅鹬，亨廷顿海滩州立公园，南卡罗来纳州";
        this[1][4] = "厚嘴鸻，亨廷顿海滩州立公园，南卡罗来纳州";
        this[1][5] = "厚嘴鸻，亨廷顿海滩州立公园，南卡罗来纳州";
        this[1][6] = "穴小鸮，劳德代尔堡布莱恩皮克罗公园，佛罗里达州";
        this[1][7] = "穴小鸮，劳德代尔堡布莱恩皮克罗公园，佛罗里达州";
        this[1][8] = "北美斑鸭，布劳沃德郡种植园保留地，佛罗里达州";
        this[1][9] = "埃及雁，布劳沃德郡种植园保留地，佛罗里达州";
        this[1][10] = "秧鹤，布劳沃德郡种植园保留地，佛罗里达州";
        this[1][11] = "疣鼻栖鸭，布劳沃德郡种植园保留地，佛罗里达州";
        this[1][12] = "褐弯嘴嘲鸫，布劳沃德郡种植园保留地，佛罗里达州";
        this[1][13] = "黄冠夜鹭，未成年，迈阿密-戴德郡黑角公园及码头，佛罗里达州";
        this[1][14] = "红树美洲鹃，迈阿密-戴德郡黑角公园及码头，佛罗里达州";
        this[1][15] = "红树美洲鹃，迈阿密-戴德郡黑角公园及码头，佛罗里达州";
        this[1][16] = "红树美洲鹃，迈阿密-戴德郡黑角公园及码头，佛罗里达州";
        this[1][17] = "红腹啄木鸟，雄性，迈阿密马西森硬木公园，佛罗里达州";
        this[1][18] = "红腹啄木鸟，雌性，迈阿密马西森硬木公园，佛罗里达州";
        this[1][19] = "橙翅亚马逊鹦鹉，迈阿密马西森硬木公园，佛罗里达州";
        this[1][20] = "红头鹦鹉，迈阿密林肯路购物中心，佛罗里达州";
        this[1][21] = "红头鹦鹉，迈阿密林肯路购物中心，佛罗里达州";
        this[1][22] = "灰胸鹦哥，迈阿密林肯路购物中心，佛罗里达州";
        this[1][23] = "蓝冠鹦哥，迈阿密南滩，佛罗里达州";
        this[1][24] = "灰斑鸠，迈阿密南滩，佛罗里达州";
        this[1][25] = "黑剪嘴鸥，熊岛野生动物管理区，南卡罗来纳州";
        this[1][26] = "美洲夜鹰，熊岛野生动物管理区，南卡罗来纳州";
        this[1][27] = "粉红琵鹭，熊岛野生动物管理区，南卡罗来纳州";
    }else{
        this[1][0] = "Painted Bunting, male, Huntington Beach State Park, South Carolina";
        this[1][1] = "Painted Bunting, female, Huntington Beach State Park, South Carolina";
        this[1][2] = "Willet, Huntington Beach State Park, South Carolina";
        this[1][3] = "Willet, Huntington Beach State Park, South Carolina";
        this[1][4] = "Wilson's Plover, Huntington Beach State Park, South Carolina";
        this[1][5] = "Wilson's Plover, Huntington Beach State Park, South Carolina";
        this[1][6] = "Burrowing Owl, Brian Piccolo Park, Fort Lauderdale, Florida";
        this[1][7] = "Burrowing Owl, Brian Piccolo Park, Fort Lauderdale, Florida";
        this[1][8] = "Mottled Duck, Plantation Preserve, Broward County, Florida";
        this[1][9] = "Egyptian Goose, Plantation Preserve, Broward County, Florida";
        this[1][10] = "Limpkin, Plantation Preserve, Broward County, Florida";
        this[1][11] = "Muscovy Duck, Plantation Preserve, Broward County, Florida";
        this[1][12] = "Brown Thrasher, Plantation Preserve, Broward County, Florida";
        this[1][13] = "Yellow-crowned Night-Heron, immature, Black Point Park & Marina, Miami-Dade County, Florida";
        this[1][14] = "Mangrove Cuckoo, Black Point Park & Marina, Miami-Dade County, Florida";
        this[1][15] = "Mangrove Cuckoo, Black Point Park & Marina, Miami-Dade County, Florida";
        this[1][16] = "Mangrove Cuckoo, Black Point Park & Marina, Miami-Dade County, Florida";
        this[1][17] = "Red-bellied Woodpecker, male, Matheson Hammock Park, Miami, Florida";
        this[1][18] = "Red-bellied Woodpecker, female, Matheson Hammock Park, Miami, Florida";
        this[1][19] = "Orange-winged Parrot, Matheson Hammock Park, Miami, Florida";
        this[1][20] = "Red-masked Parakeet, Lincoln Road Mall, Miami, Florida";
        this[1][21] = "Red-masked Parakeet, Lincoln Road Mall, Miami, Florida";
        this[1][22] = "Monk Parakeet, Lincoln Road Mall, Miami, Florida";
        this[1][23] = "Blue-crowned Parakeet, South Beach, Miami, Florida";
        this[1][24] = "Eurasian Collared-Dove, South Beach, Miami, Florida";
        this[1][25] = "Black Skimmer, Bear Island Wildlife Management Area, South Carolina";
        this[1][26] = "Common Nighthawk, Bear Island Wildlife Management Area, South Carolina";
        this[1][27] = "Roseate Spoonbill, Bear Island Wildlife Management Area, South Carolina";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
