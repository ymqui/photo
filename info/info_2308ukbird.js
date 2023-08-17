<!--
//Created by Album Builder Program Wed Aug 16 19:46:33 2023
var info_url   = "";
var title      = "Birding in England";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.1 Mega Pixels.";
var dir        = maindir+"pics/2308ukbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "英国观鸟";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<73;i++){
        this[0][i] = "2308ukbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "欧乌鸫，雄性，伦敦摄政公园。";
        this[1][1] = "苍鹭，伦敦摄政公园。";
        this[1][2] = "林岩鹨，伦敦摄政公园。";
        this[1][3] = "斑尾林鸽，伦敦摄政公园。";
        this[1][4] = "红头潜鸭，雌性，伦敦摄政公园。";
        this[1][5] = "欧亚喜鹊，未成年，伦敦摄政公园。";
        this[1][6] = "埃及雁，伦敦摄政公园。";
        this[1][7] = "灰雁，伦敦摄政公园。";
        this[1][8] = "凤头䴙䴘，伦敦摄政公园。";
        this[1][9] = "凤头䴙䴘，伦敦摄政公园。";
        this[1][10] = "小䴙䴘，伦敦摄政公园。";
        this[1][11] = "欧乌鸫，未成年，伦敦摄政公园。";
        this[1][12] = "红嘴鸥，伦敦摄政公园。";
        this[1][13] = "普通鸬鹚，伦敦摄政公园。";
        this[1][14] = "小嘴乌鸦，伦敦摄政公园。";
        this[1][15] = "北长尾山雀，伦敦摄政公园。";
        this[1][16] = "北长尾山雀，伦敦摄政公园。";
        this[1][17] = "青山雀，伦敦摄政公园。";
        this[1][18] = "庭园林莺，伦敦摄政公园。";
        this[1][19] = "秃鼻乌鸦，威尔特郡巨石阵。";
        this[1][20] = "寒鸦，威尔特郡巨石阵。";
        this[1][21] = "小嘴乌鸦，威尔特郡巨石阵。";
        this[1][22] = "红额金翅雀，威尔特郡巨石阵。";
        this[1][23] = "白鹡鸰，威尔特郡巨石阵。";
        this[1][24] = "欧亚鵟，威尔特郡巨石阵。";
        this[1][25] = "鹪鹩，伦敦摄政公园。";
        this[1][26] = "欧亚鸲，未成年，伦敦摄政公园。";
        this[1][27] = "欧亚喜鹊，伦敦摄政公园。";
        this[1][28] = "叽喳柳莺，伦敦湿地中心。";
        this[1][29] = "叽喳柳莺，伦敦湿地中心。";
        this[1][30] = "欧亚大山雀，未成年，伦敦湿地中心。";
        this[1][31] = "凤头潜鸭，雄性，伦敦湿地中心。";
        this[1][32] = "凤头潜鸭，雌性和未成年鸟，伦敦湿地中心。";
        this[1][33] = "苍鹭，伦敦湿地中心。";
        this[1][34] = "崖沙燕，伦敦湿地中心。";
        this[1][35] = "鸳鸯，未成年，伦敦湿地中心。";
        this[1][36] = "白腰草鹬，伦敦湿地中心。";
        this[1][37] = "黑水鸡，伦敦湿地中心。";
        this[1][38] = "疣鼻天鹅，伦敦湿地中心。";
        this[1][39] = "欧金翅雀，伦敦湿地中心。";
        this[1][40] = "红领绿鹦鹉，雌性，伦敦湿地中心。";
        this[1][41] = "白骨顶，伦敦湿地中心。";
        this[1][42] = "寒鸦，伦敦湿地中心。";
        this[1][43] = "黑顶林莺，雌性，伦敦摄政运河小道。";
        this[1][44] = "欧亚大山雀，伦敦摄政公园。";
        this[1][45] = "黑顶林莺，雄性，伦敦摄政公园。";
        this[1][46] = "普通䴓，伦敦摄政公园。";
        this[1][47] = "松鸦，伦敦摄政公园。";
        this[1][48] = "青山雀，伦敦摄政公园。";
        this[1][49] = "斑尾林鸽，未成年，伦敦摄政公园。";
        this[1][50] = "林岩鹨，伦敦摄政公园。";
        this[1][51] = "灰白喉林莺，多佛白崖。";
        this[1][52] = "林岩鹨，未成年，多佛白崖。";
        this[1][53] = "黄鹀，雄性，多佛白崖。";
        this[1][54] = "草地鹨，多佛白崖。";
        this[1][55] = "红额金翅雀，未成年，多佛白崖。";
        this[1][56] = "赤胸朱顶雀，雄性，多佛白崖。";
        this[1][57] = "赤胸朱顶雀，雌性，多佛白崖。";
        this[1][58] = "欧柳莺，多佛白崖。";
        this[1][59] = "黍鹀，多佛白崖。";
        this[1][60] = "红隼，雌性，多佛白崖。";
        this[1][61] = "未知名鸟，多佛白崖。";
        this[1][62] = "欧歌鸫，坎特伯雷市大斯陶尔河河岸小道。";
        this[1][63] = "欧鸽，伦敦摄政公园。";
        this[1][64] = "红头潜鸭，雄性，伦敦摄政公园。";
        this[1][65] = "疣鼻天鹅，未成年，伦敦摄政公园。";
        this[1][66] = "赤嘴潜鸭，雄性，伦敦摄政公园。";
        this[1][67] = "小䴙䴘，伦敦摄政公园。";
        this[1][68] = "大斑啄木鸟，雄性，伦敦摄政公园。";
        this[1][69] = "煤山雀，伦敦摄政公园。";
        this[1][70] = "红领绿鹦鹉，雌性，伦敦摄政公园。";
        this[1][71] = "欧亚鸲，伦敦摄政公园。";
        this[1][72] = "欧柳莺，伦敦摄政公园。";
    }else{
        this[1][0] = "Eurasian Blackbird, male, Regent's Park, London.";
        this[1][1] = "Gray Heron, Regent's Park, London.";
        this[1][2] = "Dunnock, Regent's Park, London.";
        this[1][3] = "Common Wood Pigeon, Regent's Park, London.";
        this[1][4] = "Common Pochard, female, Regent's Park, London.";
        this[1][5] = "Eurasian Magpie, immature, Regent's Park, London.";
        this[1][6] = "Egyptian Goose, Regent's Park, London.";
        this[1][7] = "Graylag Goose, Regent's Park, London.";
        this[1][8] = "Great Crested Grebe, Regent's Park, London.";
        this[1][9] = "Great Crested Grebe, Regent's Park, London.";
        this[1][10] = "Little Grebe, Regent's Park, London.";
        this[1][11] = "Eurasian Blackbird, juvenile, Regent's Park, London.";
        this[1][12] = "Black-headed Gull, Regent's Park, London.";
        this[1][13] = "Great Cormorant, Regent's Park, London.";
        this[1][14] = "Carrion Crow, Regent's Park, London.";
        this[1][15] = "Long-tailed Tit, Regent's Park, London.";
        this[1][16] = "Long-tailed Tit, Regent's Park, London.";
        this[1][17] = "Eurasian Blue Tit, Regent's Park, London.";
        this[1][18] = "Garden Warbler, Regent's Park, London.";
        this[1][19] = "Rook, Stonehenge, Wiltshire.";
        this[1][20] = "Eurasian Jackdaw, Stonehenge, Wiltshire.";
        this[1][21] = "Carrion Crow, Stonehenge, Wiltshire.";
        this[1][22] = "European Goldfinch, Stonehenge, Wiltshire.";
        this[1][23] = "White Wagtail, Stonehenge, Wiltshire.";
        this[1][24] = "Common Buzzard, Stonehenge, Wiltshire.";
        this[1][25] = "Eurasian Wren, Regent's Park, London.";
        this[1][26] = "European Robin, juvenile, Regent's Park, London.";
        this[1][27] = "Eurasian Magpie, Regent's Park, London.";
        this[1][28] = "Common Chiffchaff, London Wetland Centre.";
        this[1][29] = "Common Chiffchaff, London Wetland Centre.";
        this[1][30] = "Great Tit, juvenile, London Wetland Centre.";
        this[1][31] = "Tufted Duck, male, London Wetland Centre.";
        this[1][32] = "Tufted Duck, female and juvenile, London Wetland Centre.";
        this[1][33] = "Gray Heron, London Wetland Centre.";
        this[1][34] = "Bank Swallow, London Wetland Centre.";
        this[1][35] = "Mandarin Duck, juvenile, London Wetland Centre.";
        this[1][36] = "Green Sandpiper, London Wetland Centre.";
        this[1][37] = "Eurasian Moorhen, London Wetland Centre.";
        this[1][38] = "Mute Swan, London Wetland Centre.";
        this[1][39] = "European Greenfinch, London Wetland Centre.";
        this[1][40] = "Rose-ringed Parakeet, female, London Wetland Centre.";
        this[1][41] = "Eurasian Coot, London Wetland Centre.";
        this[1][42] = "Eurasian Jackdaw, London Wetland Centre.";
        this[1][43] = "Eurasian Blackcap, female, Regent Canal Walk, London.";
        this[1][44] = "Great Tit, Regent's Park, London.";
        this[1][45] = "Eurasian Blackcap, male, Regent's Park, London.";
        this[1][46] = "Eurasian Nuthatch, Regent's Park, London.";
        this[1][47] = "Eurasian Jay, Regent's Park, London.";
        this[1][48] = "Eurasian Blue Tit, Regent's Park, London.";
        this[1][49] = "Common Wood Pigeon, juvenile, Regent's Park, London.";
        this[1][50] = "Dunnock, Regent's Park, London.";
        this[1][51] = "Greater Whitethroat, Dover White Cliff.";
        this[1][52] = "Dunnock, juvenile, Dover White Cliff.";
        this[1][53] = "Yellowhammer, male, Dover White Cliff.";
        this[1][54] = "Meadow Pipit, Dover White Cliff.";
        this[1][55] = "European Goldfinch, juvenile, Dover White Cliff.";
        this[1][56] = "Eurasian Linnet, male, Dover White Cliff.";
        this[1][57] = "Eurasian Linnet, female, Dover White Cliff.";
        this[1][58] = "Willow Warbler, Dover White Cliff.";
        this[1][59] = "Corn Bunting, Dover White Cliff.";
        this[1][60] = "Eurasian Kestrel, female, Dover White Cliff.";
        this[1][61] = "Unknown, Dover White Cliff.";
        this[1][62] = "Song Thrush, Great Stour Way, Canterbury.";
        this[1][63] = "Stock Dove, Regent's Park, London.";
        this[1][64] = "Common Pochard, male, Regent's Park, London.";
        this[1][65] = "Mute Swan, juvenile, Regent's Park, London.";
        this[1][66] = "Red-crested Pochard, male, Regent's Park, London.";
        this[1][67] = "Little Grebe, Regent's Park, London.";
        this[1][68] = "Great Spotted Woodpecker, male, Regent's Park, London.";
        this[1][69] = "Coal Tit, Regent's Park, London.";
        this[1][70] = "Rose-ringed Parakeet, female, Regent's Park, London.";
        this[1][71] = "European Robin, Regent's Park, London.";
        this[1][72] = "Willow Warbler, Regent's Park, London.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
