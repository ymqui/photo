<!--
//Created by Album Builder Program Sun Jan 11 21:13:21 2015
var info_url   = "";
var title      = "Puerto Rico Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1501prbirding/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HowBeautiful.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "波多黎各观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<55;i++){
        this[0][i] = "1501prbirding_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "波多黎各啄木鸟，雄性，巴亚蒙。";
        this[1][1] = "曲嘴森莺，巴亚蒙。";
        this[1][2] = "淡黄翅鹦哥，马亚圭斯。";
        this[1][3] = "圆头王霸鹟，马亚圭斯。";
        this[1][4] = "白翅哀鸽，马亚圭斯。";
        this[1][5] = "黑拟八哥，林孔。";
        this[1][6] = "黑拟八哥，林孔。";
        this[1][7] = "地鸠，雄性，林孔。";
        this[1][8] = "牛背鹭，林孔。";
        this[1][9] = "波多黎各啄木鸟，雌性，林孔。";
        this[1][10] = "波多纹头唐纳雀，雄性，庞塞。";
        this[1][11] = "粉头斑鸠，庞塞。";
        this[1][12] = "圆头王霸鹟，卡沃罗霍国家野生动物保护区。";
        this[1][13] = "波多黎各蝇霸鹟，卡沃罗霍国家野生动物保护区。";
        this[1][14] = "加勒比拟霸鹟，卡沃罗霍国家野生动物保护区。";
        this[1][15] = "滑嘴犀鹃，卡沃罗霍国家野生动物保护区。";
        this[1][16] = "黑胸芒果蜂鸟，雌性，卡沃罗霍国家野生动物保护区。";
        this[1][17] = "黄腹灰林莺，卡沃罗霍国家野生动物保护区。";
        this[1][18] = "地鸠，雌性，卡沃罗霍国家野生动物保护区。";
        this[1][19] = "委内瑞拉拟鹂，瓜尼卡干燥森林。";
        this[1][20] = "家麻雀，雌性，庞塞。";
        this[1][21] = "波多黎各啄木鸟，雄性，西巴。";
        this[1][22] = "波多黎各短尾鴗，雄性，西巴。";
        this[1][23] = "鹗，乌马考自然保护区。";
        this[1][24] = "曲嘴森莺，乌马考自然保护区。";
        this[1][25] = "灰王霸鹟，西巴。";
        this[1][26] = "铜色文鸟，西巴。";
        this[1][27] = "铜色文鸟，未成年，西巴。";
        this[1][28] = "波多黎各短尾鴗，雌性，西巴。";
        this[1][29] = "波多黎各啄木鸟，雄性，西巴。";
        this[1][30] = "白眉灶莺，云盖热带雨林。";
        this[1][31] = "波多黎各短尾鴗，雌性，云盖热带雨林。";
        this[1][32] = "黑脸草雀，雌性，圣胡安。";
        this[1][33] = "橙黄雀鹀，圣胡安。";
        this[1][34] = "橙黄雀鹀，圣胡安。";
        this[1][35] = "红腿鸫，圣胡安。";
        this[1][36] = "绿喉蜂鸟，圣胡安。";
        this[1][37] = "绿喉蜂鸟，圣胡安。";
        this[1][38] = "华丽军舰鸟，雌性，圣胡安老城。";
        this[1][39] = "华丽军舰鸟，雄性，圣胡安老城。";
        this[1][40] = "橙嘴凤头燕鸥，圣胡安老城。";
        this[1][41] = "橙嘴凤头燕鸥，圣胡安老城。";
        this[1][42] = "灰王霸鹟，圣胡安老城。";
        this[1][43] = "褐鹈鹕，圣胡安老城。";
        this[1][44] = "鸣哀鸽，圣胡安老城。";
        this[1][45] = "原鸽，圣胡安老城。";
        this[1][46] = "灰胸鹦哥，圣胡安老城。";
        this[1][47] = "灰胸鹦哥，圣胡安老城。";
        this[1][48] = "珠眼嘲鸫，圣胡安老城。";
        this[1][49] = "黑脸草雀，雄性，圣胡安。";
        this[1][50] = "绿喉蜂鸟，圣胡安。";
        this[1][51] = "绿喉蜂鸟，圣胡安。";
        this[1][52] = "绿喉蜂鸟，圣胡安。";
        this[1][53] = "波多纹头唐纳雀，雌性，圣胡安。";
        this[1][54] = "橙黄雀鹀，未成年，圣胡安。";
    }else{
        this[1][0] = "Puerto Rican Woodpecker, Male, Bayamón.";
        this[1][1] = "Bananaquit, Bayamón.";
        this[1][2] = "White-winged Parakeet, Mayagüez.";
        this[1][3] = "Loggerhead Kingbird, Mayagüez.";
        this[1][4] = "White-winged Dove, Mayagüez.";
        this[1][5] = "Greater Antillean Grackle, Rincón.";
        this[1][6] = "Greater Antillean Grackle, Rincón.";
        this[1][7] = "Common Ground-Dove, Male, Rincón.";
        this[1][8] = "Cattle Egret, Rincón.";
        this[1][9] = "Puerto Rican Woodpecker, Female, Rincón.";
        this[1][10] = "Puerto Rican Spindalis, Male, Ponce.";
        this[1][11] = "African Collared-Dove, Ponce.";
        this[1][12] = "Loggerhead Kingbird, Cabo Rojo National Wildlife Refuge.";
        this[1][13] = "Puerto Rican Flycatcher, Cabo Rojo National Wildlife Refuge.";
        this[1][14] = "Caribbean Elaenia, Cabo Rojo National Wildlife Refuge.";
        this[1][15] = "Smooth-billed Ani, Cabo Rojo National Wildlife Refuge.";
        this[1][16] = "Antillean Mango, Female, Cabo Rojo National Wildlife Refuge.";
        this[1][17] = "Adelaide's Warbler, Cabo Rojo National Wildlife Refuge.";
        this[1][18] = "Common Ground-Dove, Female, Cabo Rojo National Wildlife Refuge.";
        this[1][19] = "Venezuelan Troupial, Guanica Dry Forest.";
        this[1][20] = "House Sparrow, Female, Ponce.";
        this[1][21] = "Puerto Rican Woodpecker, Male, Ceiba.";
        this[1][22] = "Puerto Rican Tody, Male, Ceiba.";
        this[1][23] = "Osprey, Humacao Natural Reserve.";
        this[1][24] = "Bananaquit, Humacao Natural Reserve.";
        this[1][25] = "Gray Kingbird, Ceiba.";
        this[1][26] = "Bronze Mannikin, Ceiba.";
        this[1][27] = "Bronze Mannikin, Immature, Ceiba.";
        this[1][28] = "Puerto Rican Tody, Female, Ceiba.";
        this[1][29] = "Puerto Rican Woodpecker, Male, Ceiba.";
        this[1][30] = "Louisiana Waterthrush, El Yunque National Forest.";
        this[1][31] = "Puerto Rican Tody, Female, El Yunque National Forest.";
        this[1][32] = "Black-faced Grassquit, Female, San Juan.";
        this[1][33] = "Saffron Finch, San Juan.";
        this[1][34] = "Saffron Finch, San Juan.";
        this[1][35] = "Red-legged Thrush, San Juan.";
        this[1][36] = "Green-throated Carib, San Juan.";
        this[1][37] = "Green-throated Carib, San Juan.";
        this[1][38] = "Magnificent Frigatebird, Female, Old San Juan.";
        this[1][39] = "Magnificent Frigatebird, Male, Old San Juan.";
        this[1][40] = "Royal Tern, Old San Juan.";
        this[1][41] = "Royal Tern, Old San Juan.";
        this[1][42] = "Gray Kingbird, Old San Juan.";
        this[1][43] = "Brown Pelican, Old San Juan.";
        this[1][44] = "Zenaida Dove, Old San Juan.";
        this[1][45] = "Rock Pigeon, Old San Juan.";
        this[1][46] = "Monk Parakeet, Old San Juan.";
        this[1][47] = "Monk Parakeet, Old San Juan.";
        this[1][48] = "Pearly-eyed Thrasher, Old San Juan.";
        this[1][49] = "Black-faced Grassquit, Male, San Juan.";
        this[1][50] = "Green-throated Carib, San Juan.";
        this[1][51] = "Green-throated Carib, San Juan.";
        this[1][52] = "Green-throated Carib, San Juan.";
        this[1][53] = "Puerto Rican Spindalis, Female, San Juan.";
        this[1][54] = "Saffron Finch, Immature, San Juan.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
