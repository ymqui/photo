<!--
//Created by Album Builder Program Wed Oct 28 09:23:51 2020
var info_url   = "";
var title      = "2020 Birding in Little Bennett Regional Park";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2020lbrp/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
 
if(window.usechinese){
    title      = "2020年小班尼特公园观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<38;i++){
        this[0][i] = "2020lbrp_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "东绿霸鹟，5/2020。";
        this[1][1] = "黄喉莺雀，5/2020。";
        this[1][2] = "白颊林莺，雄性，5/2020。";
        this[1][3] = "黄腹地莺，雄性，5/2020。";
        this[1][4] = "黄腹地莺，雄性，5/2020。";
        this[1][5] = "红眼莺雀，5/2020。";
        this[1][6] = "北美黑啄木鸟，雄性，5/2020。";
        this[1][7] = "白眼莺雀，5/2020。";
        this[1][8] = "白眉灶莺，6/2020。";
        this[1][9] = "猩红丽唐纳雀，雄性，6/2020。";
        this[1][10] = "褐弯嘴嘲鸫，8/2020。";
        this[1][11] = "巨翅鵟，8/2020。";
        this[1][12] = "巨翅鵟，9/2020。";
        this[1][13] = "黑喉绿林莺，雄性，9/2020。";
        this[1][14] = "霸鹟，9/2020。";
        this[1][15] = "北森莺，未成年雌性，9/2020。";
        this[1][16] = "北森莺，未成年雄性，9/2020。";
        this[1][17] = "黑喉蓝林莺，雄性，9/2020。";
        this[1][18] = "加拿大威森莺，雌性，9/2020。";
        this[1][19] = "灰嘲鸫，9/2020。";
        this[1][20] = "橙顶灶莺，9/2020。";
        this[1][21] = "栗胁林莺，未成年，9/2020。";
        this[1][22] = "猩红丽唐纳雀，雌性，9/2020。";
        this[1][23] = "猩红丽唐纳雀，雌性，9/2020。";
        this[1][24] = "莺鹪鹩，9/2020。";
        this[1][25] = "黑喉蓝林莺，雌性，9/2020。";
        this[1][26] = "卡罗苇鹪鹩，9/2020。";
        this[1][27] = "黄嘴美洲鹃，9/2020。";
        this[1][28] = "黑喉蓝林莺，雄性，9/2020。";
        this[1][29] = "棕夜鸫，9/2020。";
        this[1][30] = "费城莺雀，10/2020。";
        this[1][31] = "北扑翅鴷，雄性，10/2020。";
        this[1][32] = "北扑翅鴷，雄性，10/2020。";
        this[1][33] = "红冠戴菊，10/2020。";
        this[1][34] = "红冠戴菊，10/2020。";
        this[1][35] = "斯氏夜鸫，10/2020。";
        this[1][36] = "紫朱雀，雄性，10/2020。";
        this[1][37] = "纹腹鹰，未成年，10/2020。";
    }else{
        this[1][0] = "Eastern Wood-Pewee, 5/2020.";
        this[1][1] = "Yellow-throated Vireo, 5/2020.";
        this[1][2] = "Blackpoll Warbler, male, 5/2020.";
        this[1][3] = "Kentucky Warbler, male, 5/2020.";
        this[1][4] = "Kentucky Warbler, male, 5/2020.";
        this[1][5] = "Red-eyed Vireo, 5/2020.";
        this[1][6] = "Pileated Woodpecker, male, 5/2020.";
        this[1][7] = "White-eyed Vireo, 5/2020.";
        this[1][8] = "Louisiana Waterthrush, 6/2020.";
        this[1][9] = "Scarlet Tanager, male, 6/2020.";
        this[1][10] = "Brown Thrasher, 8/2020.";
        this[1][11] = "Broad-winged Hawk, 8/2020.";
        this[1][12] = "Broad-winged Hawk, 9/2020.";
        this[1][13] = "Black-throated Green Warbler, male, 9/2020.";
        this[1][14] = "Flycatcher, 9/2020.";
        this[1][15] = "Northern Parula, immature female, 9/2020.";
        this[1][16] = "Northern Parula, immature male, 9/2020.";
        this[1][17] = "Black-throated Blue Warbler, male, 9/2020.";
        this[1][18] = "Canada Warbler, female, 9/2020.";
        this[1][19] = "Gray Catbird, 9/2020.";
        this[1][20] = "Ovenbird, 9/2020.";
        this[1][21] = "Chestnut-sided Warbler, immature, 9/2020.";
        this[1][22] = "Scarlet Tanager, female, 9/2020.";
        this[1][23] = "Scarlet Tanager, female, 9/2020.";
        this[1][24] = "House Wren, 9/2020.";
        this[1][25] = "Black-throated Blue Warbler, female, 9/2020.";
        this[1][26] = "Carolina Wren, 9/2020.";
        this[1][27] = "Yellow-billed Cuckoo, 9/2020.";
        this[1][28] = "Black-throated Blue Warbler, male, 9/2020.";
        this[1][29] = "Veery, 9/2020.";
        this[1][30] = "Philadelphia Vireo, 10/2020.";
        this[1][31] = "Northern Flicker, male, 10/2020.";
        this[1][32] = "Northern Flicker, male, 10/2020.";
        this[1][33] = "Ruby-crowned Kinglet, 10/2020.";
        this[1][34] = "Ruby-crowned Kinglet, 10/2020.";
        this[1][35] = "Swainson's Thrush, 10/2020.";
        this[1][36] = "Purple Finch, male, 10/2020.";
        this[1][37] = "Sharp-shinned Hawk, immature, 10/2020.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
