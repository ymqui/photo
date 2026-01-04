<!--
//Created by Album Builder Program Sun Jan 04 15:25:58 2026
var info_url   = "https://fatbirder.com/world-birding/central-america/jamaica/";
var title      = "Birding in Jamaica";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2512jmbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "牙买加观鸟";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<59;i++){
        this[0][i] = "2512jmbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "美洲隼，雄性，蒙特哥湾老医院公园。";
        this[1][1] = "牙买加啄木鸟，雄性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][2] = "牙买加啄木鸟，雄性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][3] = "橙喉雀，雌性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][4] = "橙喉雀，雄性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][5] = "橙喉雀，蒙特哥湾罗克兰鸟类乐园。";
        this[1][6] = "红嘴长尾蜂鸟，雄性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][7] = "红嘴长尾蜂鸟，雄性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][8] = "红嘴长尾蜂鸟，雄性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][9] = "红嘴长尾蜂鸟，雄性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][10] = "牙买加拟鹂，蒙特哥湾罗克兰鸟类乐园。";
        this[1][11] = "牙买加芒果蜂鸟，蒙特哥湾罗克兰鸟类乐园。";
        this[1][12] = "牙买加芒果蜂鸟，蒙特哥湾罗克兰鸟类乐园。";
        this[1][13] = "牙买加芒果蜂鸟，蒙特哥湾罗克兰鸟类乐园。";
        this[1][14] = "黄脸草雀，雄性，蒙特哥湾罗克兰鸟类乐园。";
        this[1][15] = "地鸠，蒙特哥湾罗克兰鸟类乐园。";
        this[1][16] = "白腹棕翅鸠，蒙特哥湾罗克兰鸟类乐园。";
        this[1][17] = "白腹棕翅鸠，蒙特哥湾罗克兰鸟类乐园。";
        this[1][18] = "西印棕雨燕，蒙特哥湾老医院公园。";
        this[1][19] = "西印棕雨燕，蒙特哥湾老医院公园。";
        this[1][20] = "黄喉林莺，蒙特哥湾老医院公园。";
        this[1][21] = "牙买加乌鸦，奥乔里奥斯邓恩河瀑布。";
        this[1][22] = "小蓝鹭，奥乔里奥斯邓恩河瀑布。";
        this[1][23] = "牙买加鹀唐纳雀，雌性，波特安东尼奥丛林度假酒店。";
        this[1][24] = "白颏鸫，波特安东尼奥丛林度假酒店。";
        this[1][25] = "黑嘴长尾蜂鸟，雄性，波特安东尼奥丛林度假酒店。";
        this[1][26] = "白顶鸽，波特安东尼奥丛林度假酒店。";
        this[1][27] = "小吸蜜蜂鸟，波特安东尼奥丛林度假酒店。";
        this[1][28] = "牙买加蝇霸鹟，波特安东尼奥丛林度假酒店。";
        this[1][29] = "圆头王霸鹟，波特安东尼奥丛林度假酒店。";
        this[1][30] = "圆头王霸鹟，波特安东尼奥丛林度假酒店。";
        this[1][31] = "黑拟八哥，波特安东尼奥丛林度假酒店。";
        this[1][32] = "曲嘴森莺，波特安东尼奥丛林度假酒店。";
        this[1][33] = "黑喉蓝林莺，雌性，波特安东尼奥丛林度假酒店。";
        this[1][34] = "黑嘴长尾蜂鸟，雌性，波特安东尼奥丛林度假酒店。";
        this[1][35] = "牙买加蜥鹃，波特安东尼奥丛林度假酒店。";
        this[1][36] = "棕尾蝇霸鹟，波特安东尼奥三三派出所路。";
        this[1][37] = "牙买加伊拉鹟，波特安东尼奥三三派出所路。";
        this[1][38] = "牙买加伊拉鹟，波特安东尼奥三三派出所路。";
        this[1][39] = "尖头林莺，未成年，波特安东尼奥三三派出所路。";
        this[1][40] = "栗腹鹃，波特安东尼奥三三派出所路。";
        this[1][41] = "牙买加鹀唐纳雀，雄性，波特安东尼奥三三派出所路。";
        this[1][42] = "环尾鸽，波特安东尼奥丛林度假酒店。";
        this[1][43] = "黑嘴长尾蜂鸟，雄性，波特安东尼奥丛林度假酒店。";
        this[1][44] = "黑嘴长尾蜂鸟，雄性，波特安东尼奥丛林度假酒店。";
        this[1][45] = "黑嘴长尾蜂鸟，雄性，波特安东尼奥丛林度假酒店。";
        this[1][46] = "牙买加啄木鸟，雌性，波特安东尼奥丛林度假酒店。";
        this[1][47] = "短尾鴗，波特安东尼奥丛林度假酒店。";
        this[1][48] = "短尾鴗，波特安东尼奥丛林度假酒店。";
        this[1][49] = "曲嘴森莺，波特安东尼奥丛林度假酒店。";
        this[1][50] = "黄枕鹦哥，金斯敦霍普植物园。";
        this[1][51] = "美洲隼，雌性，蓝山霍利韦尔公园。";
        this[1][52] = "美洲隼，雄性，蓝山霍利韦尔公园。";
        this[1][53] = "黑嘴鹦哥，金斯敦霍普植物园。";
        this[1][54] = "黄嘴鹦哥，金斯敦霍普植物园。";
        this[1][55] = "滑嘴犀鹃，金斯敦霍普植物园。";
        this[1][56] = "绿喉鹦哥，金斯敦霍普植物园。";
        this[1][57] = "绿喉鹦哥，金斯敦霍普植物园。";
        this[1][58] = "栗颊林莺，雄性，金斯敦霍普植物园。";
    }else{
        this[1][0] = "American Kestrel, male, Old Hospital Park, Montego Bay.";
        this[1][1] = "Jamaican Woodpecker, male, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][2] = "Jamaican Woodpecker, male, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][3] = "Orangequit, female, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][4] = "Orangequit, male, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][5] = "Orangequit, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][6] = "Red-billed Streamertail, male, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][7] = "Red-billed Streamertail, male, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][8] = "Red-billed Streamertail, male, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][9] = "Red-billed Streamertail, male, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][10] = "Jamaican Oriole, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][11] = "Jamaican Mango, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][12] = "Jamaican Mango, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][13] = "Jamaican Mango, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][14] = "Yellow-faced Grassquit, male, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][15] = "Common Ground Dove, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][16] = "Caribbean Dove, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][17] = "Caribbean Dove, Rocklands Bird Sanctuary, Montego Bay.";
        this[1][18] = "Antillean Palm Swift, Old Hospital Park, Montego Bay.";
        this[1][19] = "Antillean Palm Swift, Old Hospital Park, Montego Bay.";
        this[1][20] = "Yellow-throated Warbler, Old Hospital Park, Montego Bay.";
        this[1][21] = "Jamaican Crow, Dunn's River Falls, Ocho Rios.";
        this[1][22] = "Little Blue Heron, Dunn's River Falls, Ocho Rios.";
        this[1][23] = "Jamaican Spindalis, female, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][24] = "White-chinned Thrush, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][25] = "Black-billed Streamertail, male, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][26] = "White-crowned Pigeon, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][27] = "Vervain Hummingbird, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][28] = "Sad Flycatcher, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][29] = "Loggerhead Kingbird, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][30] = "Loggerhead Kingbird, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][31] = "Greater Antillean Grackle, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][32] = "Bananaquit, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][33] = "Black-throated Blue Warbler, female, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][34] = "Black-billed Streamertail, female, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][35] = "Jamaican Lizard-Cuckoo, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][36] = "Rufous-tailed Flycatcher, San San Police Station Road, Port Antonio.";
        this[1][37] = "Jamaican Elaenia, San San Police Station Road, Port Antonio.";
        this[1][38] = "Jamaican Elaenia, San San Police Station Road, Port Antonio.";
        this[1][39] = "Arrowhead Warbler, immature, San San Police Station Road, Port Antonio.";
        this[1][40] = "Chestnut-bellied Cuckoo, San San Police Station Road, Port Antonio.";
        this[1][41] = "Jamaican Spindalis, male, San San Police Station Road, Port Antonio.";
        this[1][42] = "Ring-tailed Pigeon, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][43] = "Black-billed Streamertail, male, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][44] = "Black-billed Streamertail, male, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][45] = "Black-billed Streamertail, male, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][46] = "Jamaican Woodpecker, female, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][47] = "Jamaican Tody, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][48] = "Jamaican Tody, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][49] = "Bananaquit, LF Jungle Retreat Hotel, Port Antonio.";
        this[1][50] = "Yellow-naped Amazon, Hope Botanical Garden, Kingston.";
        this[1][51] = "American Kestrel, female, Holywell Park, Blue Mountains.";
        this[1][52] = "American Kestrel, male, Holywell Park, Blue Mountains.";
        this[1][53] = "Black-billed Amazon, Hope Botanical Garden, Kingston.";
        this[1][54] = "Yellow-billed Amazon, Hope Botanical Garden, Kingston.";
        this[1][55] = "Smooth-billed Ani, Hope Botanical Garden, Kingston.";
        this[1][56] = "Olive-throated Parakeet, Hope Botanical Garden, Kingston.";
        this[1][57] = "Olive-throated Parakeet, Hope Botanical Garden, Kingston.";
        this[1][58] = "Cape May Warbler, male, Hope Botanical Garden, Kingston.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
