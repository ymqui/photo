<!--
//Created by Album Builder Program Sun Feb 02 00:43:48 2020
var info_url   = "";
var title      = "Birding in Texas";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2001txbirding/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
 
if(window.usechinese){
    title      = "德克萨斯州观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<40;i++){
        this[0][i] = "2001txbirding_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "黑腹树鸭，休斯顿赫尔曼公园。";
        this[1][1] = "美洲鹤，阿兰萨斯国家野生动物保护区。";
        this[1][2] = "粉红琵鹭和美洲白鹮，阿兰萨斯国家野生动物保护区。";
        this[1][3] = "美洲白鹈鹕，阿兰萨斯国家野生动物保护区。";
        this[1][4] = "姬滨鹬，非繁殖羽，阿兰萨斯国家野生动物保护区。";
        this[1][5] = "美洲鹤，阿兰萨斯国家野生动物保护区。";
        this[1][6] = "长嘴杓鹬，阿兰萨斯国家野生动物保护区。";
        this[1][7] = "雪鹭，阿兰萨斯国家野生动物保护区。";
        this[1][8] = "美洲白鹈鹕，阿兰萨斯国家野生动物保护区。";
        this[1][9] = "北美凤头卡拉鹰，阿兰萨斯国家野生动物保护区。";
        this[1][10] = "北美凤头卡拉鹰，阿兰萨斯国家野生动物保护区。";
        this[1][11] = "美洲鸬鹚，阿兰萨斯国家野生动物保护区。";
        this[1][12] = "美洲鸬鹚，阿兰萨斯国家野生动物保护区。";
        this[1][13] = "大西洋宽吻海豚，阿兰萨斯国家野生动物保护区。";
        this[1][14] = "牡蛎渔船。";
        this[1][15] = "橙冠虫森莺，圣安娜国家野生动物保护区。";
        this[1][16] = "棕腹鱼狗，雌性，圣安娜国家野生动物保护区。";
        this[1][17] = "侏䴙䴘，圣安娜国家野生动物保护区。";
        this[1][18] = "琵嘴鸭，左雌性，右雄性，圣安娜国家野生动物保护区。";
        this[1][19] = "纯色小冠雉，圣安娜国家野生动物保护区。";
        this[1][20] = "纹背啄木鸟，雌性，圣安娜国家野生动物保护区。";
        this[1][21] = "灰鵟，未成年，圣安娜国家野生动物保护区。";
        this[1][22] = "林氏带鹀，圣安娜国家野生动物保护区。";
        this[1][23] = "黑颈长脚鹬，圣安娜国家野生动物保护区。";
        this[1][24] = "金额啄木鸟，雌性，圣安娜国家野生动物保护区。";
        this[1][25] = "橙头拟鹂，圣安娜国家野生动物保护区。";
        this[1][26] = "栗翅鹰，未成年，圣安娜国家野生动物保护区。";
        this[1][27] = "稀树草鹀，圣安娜国家野生动物保护区。";
        this[1][28] = "桂红鸭，左雄性，右雌性，圣安娜国家野生动物保护区。";
        this[1][29] = "桂红鸭，雄性，圣安娜国家野生动物保护区。";
        this[1][30] = "大食蝇霸鹟，圣安娜国家野生动物保护区。";
        this[1][31] = "白脸彩鹮，非繁殖羽，圣安娜国家野生动物保护区。";
        this[1][32] = "栗翅鹰，圣安娜国家野生动物保护区。";
        this[1][33] = "朱红霸鹟，雄性，圣安娜国家野生动物保护区。";
        this[1][34] = "朱红霸鹟，雄性，圣安娜国家野生动物保护区。";
        this[1][35] = "长弯嘴嘲鸫，圣安娜国家野生动物保护区。";
        this[1][36] = "绿鱼狗，雄性，圣安娜国家野生动物保护区。";
        this[1][37] = "黑冠凤头山雀，圣安娜国家野生动物保护区。";
        this[1][38] = "金额啄木鸟，雄性，圣安娜国家野生动物保护区。";
        this[1][39] = "绿蓝鸦，圣安娜国家野生动物保护区。";
    }else{
        this[1][0] = "Black-bellied Whistling-Duck, Hermann Park, Houston.";
        this[1][1] = "Whooping Crane, Aransas National Wildlife Refuge.";
        this[1][2] = "Roseate Spoonbill and White Ibis, Aransas National Wildlife Refuge.";
        this[1][3] = "American White Pelican, Aransas National Wildlife Refuge.";
        this[1][4] = "Least Sandpiper, nonbreeding adult, Aransas National Wildlife Refuge.";
        this[1][5] = "Whooping Crane, Aransas National Wildlife Refuge.";
        this[1][6] = "Long-billed Curlew, Aransas National Wildlife Refuge.";
        this[1][7] = "Snowy Egret, Aransas National Wildlife Refuge.";
        this[1][8] = "American White Pelican, Aransas National Wildlife Refuge.";
        this[1][9] = "Crested Caracara, Aransas National Wildlife Refuge.";
        this[1][10] = "Crested Caracara, Aransas National Wildlife Refuge.";
        this[1][11] = "Neotropic Cormorant, Aransas National Wildlife Refuge.";
        this[1][12] = "Neotropic Cormorant, Aransas National Wildlife Refuge.";
        this[1][13] = "Atlantic Bottlenose Dolphin, Aransas National Wildlife Refuge.";
        this[1][14] = "Oyster fishing boat, Rockport.";
        this[1][15] = "Orange-crowned Warbler, Santa Ana National Wildlife Refuge.";
        this[1][16] = "Ringed Kingfisher, female, Santa Ana National Wildlife Refuge.";
        this[1][17] = "Least Grebe, Santa Ana National Wildlife Refuge.";
        this[1][18] = "Northern Shoveler, female left, male right, Santa Ana National Wildlife Refuge.";
        this[1][19] = "Plain Chachalaca, Santa Ana National Wildlife Refuge.";
        this[1][20] = "Ladder-backed Woodpecker, female, Santa Ana National Wildlife Refuge.";
        this[1][21] = "Gray Hawk, immature, Santa Ana National Wildlife Refuge.";
        this[1][22] = "Lincoln's Sparrow, Santa Ana National Wildlife Refuge.";
        this[1][23] = "Black-necked Stilt, Santa Ana National Wildlife Refuge.";
        this[1][24] = "Golden-fronted Woodpecker, female, Santa Ana National Wildlife Refuge.";
        this[1][25] = "Altamira Oriole, Santa Ana National Wildlife Refuge.";
        this[1][26] = "Harris's Hawk, immature, Santa Ana National Wildlife Refuge.";
        this[1][27] = "Savannah Sparrow, Santa Ana National Wildlife Refuge.";
        this[1][28] = "Cinnamon Teal, female right, Santa Ana National Wildlife Refuge.";
        this[1][29] = "Cinnamon Teal, male, Santa Ana National Wildlife Refuge.";
        this[1][30] = "Great Kiskadee, Santa Ana National Wildlife Refuge.";
        this[1][31] = "White-faced Ibis, non-breeding plumage, Santa Ana National Wildlife Refuge.";
        this[1][32] = "Harris's Hawk, Santa Ana National Wildlife Refuge.";
        this[1][33] = "Vermilion Flycatcher, male, Santa Ana National Wildlife Refuge.";
        this[1][34] = "Vermilion Flycatcher, male, Santa Ana National Wildlife Refuge.";
        this[1][35] = "Long-billed Thrasher, Santa Ana National Wildlife Refuge.";
        this[1][36] = "Green Kingfisher, male, Santa Ana National Wildlife Refuge.";
        this[1][37] = "Black-crested Titmouse, Santa Ana National Wildlife Refuge.";
        this[1][38] = "Golden-fronted Woodpecker, male, Santa Ana National Wildlife Refuge.";
        this[1][39] = "Green Jay, Santa Ana National Wildlife Refuge.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
