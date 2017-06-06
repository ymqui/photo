<!--
//Created by Album Builder Program Mon May 29 15:11:13 2017
var info_url   = "";
var title      = "Ohio Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1705ohio/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "俄亥俄观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "1705ohio_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "亨氏草鹀，巴斯自然保护区。";
        this[1][1] = "亨氏草鹀，巴斯自然保护区。";
        this[1][2] = "刺歌雀，雄性，巴斯自然保护区。";
        this[1][3] = "双色树燕，雌性，巴斯自然保护区。";
        this[1][4] = "黄林莺，库雅荷加谷国家公园。";
        this[1][5] = "弗吉尼亚秧鸡，门托沼泽州立自然保护区。";
        this[1][6] = "弗吉尼亚秧鸡，门托沼泽州立自然保护区。";
        this[1][7] = "弗吉尼亚秧鸡，门托沼泽州立自然保护区。";
        this[1][8] = "红翅黑鹂，雄性，门托沼泽州立自然保护区。";
        this[1][9] = "白颊林莺，雌性，玛吉沼泽野生动物保护区。";
        this[1][10] = "白颊林莺，雌性，玛吉沼泽野生动物保护区。";
        this[1][11] = "橙胸林莺，雄性，玛吉沼泽野生动物保护区。";
        this[1][12] = "歌莺雀，玛吉沼泽野生动物保护区。";
        this[1][13] = "黄林莺，雌性，玛吉沼泽野生动物保护区。";
        this[1][14] = "纹胸林莺，雌性，玛吉沼泽野生动物保护区。";
        this[1][15] = "黑喉绿林莺，雄性，玛吉沼泽野生动物保护区。";
        this[1][16] = "灰冠虫森莺，雄性，玛吉沼泽野生动物保护区。";
    }else{
        this[1][0] = "Henslow's Sparrow, Bath Nature Preserve.";
        this[1][1] = "Henslow's Sparrow, Bath Nature Preserve.";
        this[1][2] = "Bobolink, male, Bath Nature Preserve.";
        this[1][3] = "Tree Swallow, female, Bath Nature Preserve.";
        this[1][4] = "Yellow Warbler, Cuyahoga Valley National Park.";
        this[1][5] = "Virginia Rail, Mentor Marsh Nature Preserve.";
        this[1][6] = "Virginia Rail, Mentor Marsh Nature Preserve.";
        this[1][7] = "Virginia Rail, Mentor Marsh Nature Preserve.";
        this[1][8] = "Red-winged Blackbird, male, Mentor Marsh Nature Preserve.";
        this[1][9] = "Blackpoll Warbler, female, Magee Marsh Wildlife Area.";
        this[1][10] = "Blackpoll Warbler, female, Magee Marsh Wildlife Area.";
        this[1][11] = "Blackburnian Warbler, male, Magee Marsh Wildlife Area.";
        this[1][12] = "Warbling Vireo, Magee Marsh Wildlife Area.";
        this[1][13] = "Yellow Warbler, female, Magee Marsh Wildlife Area.";
        this[1][14] = "Magnolia Warbler, female, Magee Marsh Wildlife Area.";
        this[1][15] = "Black-throated Green Warbler, male, Magee Marsh Wildlife Area.";
        this[1][16] = "Tennessee Warbler, male, Magee Marsh Wildlife Area.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
