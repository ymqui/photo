<!--
//Created by Album Builder Program Fri Apr 05 19:38:15 2024
var info_url   = "";
var title      = "Birding in Denver, Colorado";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.1 Mega Pixels.";
var dir        = maindir+"pics/2403cobird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Birding in Denver, Colorado";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<53;i++){
        this[0][i] = "2403cobird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "白腹鱼狗，雌性，丹佛市清溪步道。";
        this[1][1] = "角鸬鹚，丹佛市清溪步道。";
        this[1][2] = "美洲绿翅鸭，雄性，丹佛市清溪步道。";
        this[1][3] = "赤膀鸭，雄性，丹佛市清溪步道。";
        this[1][4] = "斑唧鹀，雌性，丹佛市清溪步道。";
        this[1][5] = "斑唧鹀，雄性，丹佛市清溪步道。";
        this[1][6] = "黄腹鹨，丹佛市清溪步道。";
        this[1][7] = "短嘴长尾山雀，丹佛市清溪步道。";
        this[1][8] = "黑顶山雀，丹佛市清溪步道。";
        this[1][9] = "美洲河乌，丹佛市清溪步道。";
        this[1][10] = "美洲河乌，丹佛市清溪步道。";
        this[1][11] = "美洲河乌，丹佛市清溪步道。";
        this[1][12] = "美洲河乌，丹佛市清溪步道。";
        this[1][13] = "暗眼灯草鹀，红胁型，圣玛丽丝。";
        this[1][14] = "暗眼灯草鹀，雄性，黑冠型，圣玛丽丝。";
        this[1][15] = "暗眼灯草鹀，灰头型，圣玛丽丝。";
        this[1][16] = "北美白眉山雀，圣玛丽丝。";
        this[1][17] = "灰头岭雀，灰颊型，圣玛丽丝。";
        this[1][18] = "褐顶岭雀，圣玛丽丝。";
        this[1][19] = "褐顶岭雀，圣玛丽丝。";
        this[1][20] = "褐顶岭雀， 未成年，圣玛丽丝。";
        this[1][21] = "暗冠蓝鸦，圣玛丽丝。";
        this[1][22] = "白胸䴓，圣玛丽丝。";
        this[1][23] = "北美星鸦，圣玛丽丝。";
        this[1][24] = "伍氏丛鸦，丹佛市红石公园。";
        this[1][25] = "北扑翅䴕，红羽雄性，丹佛市红石公园。";
        this[1][26] = "家朱雀，丹佛市红石公园。";
        this[1][27] = "游隼，未成年，丹佛市红石公园。";
        this[1][28] = "游隼，丹佛市红石公园。";
        this[1][29] = "斑唧鹀，雄性，丹佛市红石公园。";
        this[1][30] = "棕腹长尾霸鹟，莱克伍德市熊溪湖公园。";
        this[1][31] = "北扑翅䴕，红羽雄性，莱克伍德市熊溪湖公园。";
        this[1][32] = "双领鸻，莱克伍德市熊溪湖公园。";
        this[1][33] = "小美洲黑雁，莱克伍德市熊溪湖公园。";
        this[1][34] = "白冠带鹀，未成年，莱克伍德市熊溪湖公园。";
        this[1][35] = "北美喜鹊，莱克伍德市熊溪湖公园。";
        this[1][36] = "西草地鹨，莱克伍德市熊溪湖公园。";
        this[1][37] = "西草地鹨，莱克伍德市熊溪湖公园。";
        this[1][38] = "西草地鹨，莱克伍德市熊溪湖公园。";
        this[1][39] = "灰背隼，利特尔顿市沃特顿峡谷。";
        this[1][40] = "绒啄木鸟，雄性，利特尔顿市沃特顿峡谷。";
        this[1][41] = "岩鹪鹩，利特尔顿市沃特顿峡谷。";
        this[1][42] = "伍氏丛鸦，利特尔顿市沃特顿峡谷。";
        this[1][43] = "坦氏孤鸫，利特尔顿市沃特顿峡谷。";
        this[1][44] = "火鸡，利特尔顿市沃特顿峡谷。";
        this[1][45] = "小䴓，丹佛市杰纳西山地公园。";
        this[1][46] = "小䴓，丹佛市杰纳西山地公园。";
        this[1][47] = "红尾鵟，哈兰亚种，丹佛市落基山阿森纳国家野生动物保护区。";
        this[1][48] = "红尾鵟，丹佛市落基山阿森纳国家野生动物保护区。";
        this[1][49] = "锈色鵟，未成年，丹佛市落基山阿森纳国家野生动物保护区。";
        this[1][50] = "北鹞，丹佛市落基山阿森纳国家野生动物保护区。";
        this[1][51] = "美洲雕鸮，丹佛市落基山阿森纳国家野生动物保护区。";
        this[1][52] = "美洲隼，雄性，丹佛市落基山阿森纳国家野生动物保护区。";
    }else{
        this[1][0] = "Belted Kingfisher, female, Clear Creek Trail.";
        this[1][1] = "Double-crested Cormorant, Clear Creek Trail.";
        this[1][2] = "Green-winged Teal, male, Clear Creek Trail.";
        this[1][3] = "Gadwall, male, Clear Creek Trail.";
        this[1][4] = "Spotted Towhee, female, Clear Creek Trail.";
        this[1][5] = "Spotted Towhee, male, Clear Creek Trail.";
        this[1][6] = "American Pipit, Clear Creek Trail.";
        this[1][7] = "Bushtit, Clear Creek Trail.";
        this[1][8] = "Black-capped Chickadee, Clear Creek Trail.";
        this[1][9] = "American Dipper, Clear Creek Trail.";
        this[1][10] = "American Dipper, Clear Creek Trail.";
        this[1][11] = "American Dipper, Clear Creek Trail.";
        this[1][12] = "American Dipper, Clear Creek Trail.";
        this[1][13] = "Dark-eyed Junco, pink-sided, St. Mary's.";
        this[1][14] = "Dark-eyed Junco, male, cismontanus, St. Mary's.";
        this[1][15] = "Dark-eyed Junco, gray-headed, St. Mary's.";
        this[1][16] = "Mountain Chickadee, St. Mary's.";
        this[1][17] = "Gray-crowned Rosy-Finch, Hepburn's, St. Mary's.";
        this[1][18] = "Brown-capped Rosy-Finch, St. Mary's.";
        this[1][19] = "Brown-capped Rosy-Finch, St. Mary's.";
        this[1][20] = "Brown-capped Rosy-Finch, immature, St. Mary's.";
        this[1][21] = "Steller's Jay, St. Mary's.";
        this[1][22] = "White-breasted Nuthatch, St. Mary's.";
        this[1][23] = "Clark's Nutcracker, St. Mary's.";
        this[1][24] = "Woodhouse's Scrub-Jay, Red Rocks Park.";
        this[1][25] = "Northern Flicker, male, red-shafted, Red Rocks Park.";
        this[1][26] = "House Finch, Red Rocks Park.";
        this[1][27] = "Peregrine Falcon, immature, Red Rocks Park.";
        this[1][28] = "Peregrine Falcon, Red Rocks Park.";
        this[1][29] = "Spotted Towhee, male, Red Rocks Park.";
        this[1][30] = "Say's Phoebe, Bear Creek Lake Park.";
        this[1][31] = "Northern Flicker, male, red-shafted, Bear Creek Lake Park.";
        this[1][32] = "Killdeer, Bear Creek Lake Park.";
        this[1][33] = "Cackling Goose, Bear Creek Lake Park.";
        this[1][34] = "White-crowned Sparrow, immature, Bear Creek Lake Park.";
        this[1][35] = "Black-billed Magpie, Bear Creek Lake Park.";
        this[1][36] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][37] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][38] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][39] = "Merlin, Waterton Canyon.";
        this[1][40] = "Downy Woodpecker, male, Waterton Canyon.";
        this[1][41] = "Rock Wren, Waterton Canyon.";
        this[1][42] = "Woodhouse's Scrub-Jay, Waterton Canyon.";
        this[1][43] = "Townsend's Solitaire, Waterton Canyon.";
        this[1][44] = "Wild Turkey, Waterton Canyon.";
        this[1][45] = "Pygmy Nuthatch, Genesee Mountain Park.";
        this[1][46] = "Pygmy Nuthatch, Genesee Mountain Park.";
        this[1][47] = "Red-tailed Hawk, Harlan's, Rocky Mountain Arsenal NWR.";
        this[1][48] = "Red-tailed Hawk, Rocky Mountain Arsenal NWR.";
        this[1][49] = "Ferruginous Hawk, Rocky Mountain Arsenal NWR.";
        this[1][50] = "Northern Harrier, Rocky Mountain Arsenal NWR.";
        this[1][51] = "Great Horned Owl, Rocky Mountain Arsenal NWR.";
        this[1][52] = "American Kestrel, male, Rocky Mountain Arsenal NWR.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
