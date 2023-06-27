<!--
var info_url   = "";
var title      = "Birding in Iceland";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.1 Mega Pixels.";
var dir        = maindir+"pics/2306isbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
 
if(window.usechinese){
    title      = "冰岛观鸟";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<87;i++){
        this[0][i] = "2306isbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "欧金鸻，雄性，西部地区博尔加内斯Borgarfjarðarbraut路。";
        this[1][1] = "欧金鸻，雌性，西部地区博尔加内斯Borgarfjarðarbraut路。";
        this[1][2] = "普通秋沙鸭，雌性，西峡湾区侯尔马维克小镇。";
        this[1][3] = "普通潜鸟，西峡湾区侯尔马维克小镇。";
        this[1][4] = "暴雪鹱，西峡湾区侯尔马维克小镇。";
        this[1][5] = "红嘴鸥，西峡湾区侯尔马维克小镇。";
        this[1][6] = "白眉歌鸫，西峡湾区侯尔马维克小镇。";
        this[1][7] = "扇尾沙锥，幼鸟，西峡湾区Strandavegur路。";
        this[1][8] = "扇尾沙锥，西峡湾区Strandavegur路。";
        this[1][9] = "蛎鹬，西峡湾区德朗斯内斯小镇。";
        this[1][10] = "欧绒鸭，雌性和幼鸟，西峡湾区德朗斯内斯小镇。";
        this[1][11] = "欧绒鸭，西峡湾区德朗斯内斯小镇。";
        this[1][12] = "三趾鸥，西峡湾区德朗斯内斯小镇。";
        this[1][13] = "暴雪鹱，西峡湾区德朗斯内斯小镇。";
        this[1][14] = "美洲银鸥，西峡湾区德朗斯内斯小镇。";
        this[1][15] = "白鹡鸰，西峡湾区德朗斯内斯小镇。";
        this[1][16] = "岩雷鸟，雄性，西峡湾区Strandavegur路。";
        this[1][17] = "白眉歌鸫，西峡湾区Laugarhóll旅馆。";
        this[1][18] = "中杓鹬，西峡湾区Laugarhóll旅馆。";
        this[1][19] = "扇尾沙锥，西峡湾区Laugarhóll旅馆。";
        this[1][20] = "白腰朱顶雀，西峡湾区Laugarhóll旅馆。";
        this[1][21] = "红脚鹬，西峡湾区Laugarhóll旅馆。";
        this[1][22] = "红脚鹬，西峡湾区Laugarhóll旅馆。";
        this[1][23] = "草地鹨，西峡湾区Laugarhóll旅馆。";
        this[1][24] = "黑尾塍鹬，西峡湾区Laugarhóll旅馆。";
        this[1][25] = "北极燕鸥，西峡湾区Laugarhóll旅馆。";
        this[1][26] = "北极燕鸥，西峡湾区Laugarhóll旅馆。";
        this[1][27] = "欧鸬鹚，西峡湾区拉特拉尔角。";
        this[1][28] = "刀嘴海雀，西峡湾区拉特拉尔角。";
        this[1][29] = "渡鸦，西峡湾区拉特拉尔角。";
        this[1][30] = "崖海鸦，西峡湾区拉特拉尔角。";
        this[1][31] = "崖海鸦和厚嘴崖海鸦，西峡湾区拉特拉尔角。";
        this[1][32] = "厚嘴崖海鸦，西峡湾区拉特拉尔角。";
        this[1][33] = "北极海鹦，西峡湾区拉特拉尔角。";
        this[1][34] = "北极海鹦，西峡湾区拉特拉尔角。";
        this[1][35] = "白翅斑海鸽，西峡湾区Innstrandavegur路。";
        this[1][36] = "白翅斑海鸽，西峡湾区Innstrandavegur路。";
        this[1][37] = "矛隼，未成年灰色型，西峡湾区Borðeyri村。";
        this[1][38] = "欧鸬鹚，西北地区犀牛石。";
        this[1][39] = "暴雪鹱，西北地区犀牛石。";
        this[1][40] = "欧乌鸫，未成年，东北地区Kjarnaskógur森林。";
        this[1][41] = "普通海鸥，东北地区Kjarnaskógur森林。";
        this[1][42] = "白腰朱顶雀，东北地区Kjarnaskógur森林。";
        this[1][43] = "白眉歌鸫，东北地区Kjarnaskógur森林。";
        this[1][44] = "灰雁，东北地区阿克雷里市。";
        this[1][45] = "戴菊，未成年，东北地区Kjarnaskógur森林。";
        this[1][46] = "白眉歌鸫，未成年，东北地区Kjarnaskógur森林。";
        this[1][47] = "角䴙䴘，东北地区Vestmannsvatn湖。";
        this[1][48] = "剑鸻，东北地区Vestmannsvatn湖。";
        this[1][49] = "灰雁，东北地区Kaldbakstjarnir池塘。";
        this[1][50] = "白骨顶，东北地区Kaldbakstjarnir池塘。";
        this[1][51] = "欧金鸻，雄性，东北地区Héðinshöfða2号民居。";
        this[1][52] = "短尾贼鸥，东北地区Héðinshöfða2号民居。";
        this[1][53] = "穗䳭，雄性，东北地区黛提瀑布。";
        this[1][54] = "普通海番鸭，东部地区Þvottárskriður海岸。";
        this[1][55] = "白颊黑雁，东部地区苏杜斯韦特。";
        this[1][56] = "雪鹀，雌性，东部地区杰古沙龙冰河湖。";
        this[1][57] = "雪鹀，雄性，东部地区杰古沙龙冰河湖。";
        this[1][58] = "短尾贼鸥，深色型，东部地区杰古沙龙冰河湖。";
        this[1][59] = "北贼鸥，东部地区杰古沙龙冰河湖。";
        this[1][60] = "北贼鸥，东部地区杰古沙龙冰河湖。";
        this[1][61] = "雪鹀，雄性，东部地区Fjallsárlón冰河湖。";
        this[1][62] = "短尾贼鸥，深色型，东部地区Fjallsárlón冰河湖。";
        this[1][63] = "短尾贼鸥，深色型，东部地区Fjallsárlón冰河湖。";
        this[1][64] = "短尾贼鸥，深色型，东部地区Fjallsárlón冰河湖。";
        this[1][65] = "北极海鹦，南部地区雷尼斯黑沙滩。";
        this[1][66] = "蛎鹬，首都地区巴卡特约恩湖。";
        this[1][67] = "翘鼻麻鸭，雌性，首都地区巴卡特约恩湖。";
        this[1][68] = "翘鼻麻鸭，未成年，首都地区巴卡特约恩湖。";
        this[1][69] = "红颈瓣蹼鹬，雌性，首都地区巴卡特约恩湖。";
        this[1][70] = "红颈瓣蹼鹬，雌性，首都地区巴卡特约恩湖。";
        this[1][71] = "小黑背鸥，首都地区巴卡特约恩湖。";
        this[1][72] = "大黑背鸥，首都地区巴卡特约恩湖。";
        this[1][73] = "黑尾塍鹬，首都地区巴卡特约恩湖。";
        this[1][74] = "草地鹨，首都地区巴卡特约恩湖。";
        this[1][75] = "赤膀鸭，雌性和幼鸟，首都地区巴卡特约恩湖。";
        this[1][76] = "蛎鹬，未成年，首都地区塞尔特贾纳内斯高尔夫球场。";
        this[1][77] = "灰雁，首都地区塞尔特贾纳内斯高尔夫球场。";
        this[1][78] = "红喉潜鸟，首都地区塞尔特贾纳内斯高尔夫球场。";
        this[1][79] = "大天鹅，首都地区塞尔特贾纳内斯高尔夫球场。";
        this[1][80] = "赤颈鸭，雄性，首都地区塞尔特贾纳内斯高尔夫球场。";
        this[1][81] = "凤头潜鸭，雄性，雷克雅未克托宁湖。";
        this[1][82] = "凤头潜鸭，雌性，雷克雅未克托宁湖。";
        this[1][83] = "绿头鸭，雄性，雷克雅未克托宁湖。";
        this[1][84] = "欧乌鸫，雄性，雷克雅未克托宁湖。";
        this[1][85] = "白腰朱顶雀，未成年，雷克雅未克托宁湖。";
        this[1][86] = "紫翅椋鸟，雷克雅未克托宁湖。";
    }else{
        this[1][0] = "European Golden Plover, male, Borgarfjarðarbraut, Borgarnes, Western Region.";
        this[1][1] = "European Golden Plover, female, Borgarfjarðarbraut, Borgarnes, Western Region.";
        this[1][2] = "Common Merganser, female, Hólmavík, Westfjords.";
        this[1][3] = "Common Loon, Hólmavík, Westfjords.";
        this[1][4] = "Northern Fulmar, Hólmavík, Westfjords.";
        this[1][5] = "Black-headed Gull, Hólmavík, Westfjords.";
        this[1][6] = "Redwing, Hólmavík, Westfjords.";
        this[1][7] = "Common Snipe, chicks, Strandavegur, Westfjords.";
        this[1][8] = "Common Snipe, Strandavegur, Westfjords.";
        this[1][9] = "Eurasian Oystercatcher, Drangsnes, Westfjords.";
        this[1][10] = "Common Eider, female with chicks, Drangsnes, Westfjords.";
        this[1][11] = "Common Eider, Drangsnes, Westfjords.";
        this[1][12] = "Black-legged Kittiwake, Drangsnes, Westfjords.";
        this[1][13] = "Northern Fulmar, Drangsnes, Westfjords.";
        this[1][14] = "Herring Gull, Drangsnes, Westfjords.";
        this[1][15] = "White Wagtail, Drangsnes, Westfjords.";
        this[1][16] = "Rock Ptarmigan, male, Strandavegur, Westfjords.";
        this[1][17] = "Redwing, Hótel Laugarhóll, Westfjords.";
        this[1][18] = "Whimbrel, Hótel Laugarhóll, Westfjords.";
        this[1][19] = "Common Snipe, Hótel Laugarhóll, Westfjords.";
        this[1][20] = "Common Redpoll, Hótel Laugarhóll, Westfjords.";
        this[1][21] = "Common Redshank, Hótel Laugarhóll, Westfjords.";
        this[1][22] = "Common Redshank, Hótel Laugarhóll, Westfjords.";
        this[1][23] = "Meadow Pipit, Hótel Laugarhóll, Westfjords.";
        this[1][24] = "Black-tailed Godwit, Hótel Laugarhóll, Westfjords.";
        this[1][25] = "Arctic Tern, Hótel Laugarhóll, Westfjords.";
        this[1][26] = "Arctic Tern, Hótel Laugarhóll, Westfjords.";
        this[1][27] = "European Shag, Látrabjarg, Westfjords.";
        this[1][28] = "Razorbill, Látrabjarg, Westfjords.";
        this[1][29] = "Common Raven, Látrabjarg, Westfjords.";
        this[1][30] = "Common Murre, Látrabjarg, Westfjords.";
        this[1][31] = "Common Murre and Thick-billed Murre, Látrabjarg, Westfjords.";
        this[1][32] = "Thick-billed Murre, Látrabjarg, Westfjords.";
        this[1][33] = "Atlantic Puffin, Látrabjarg, Westfjords.";
        this[1][34] = "Atlantic Puffin, Látrabjarg, Westfjords.";
        this[1][35] = "Black Guillemot, Innstrandavegur, Westfjords.";
        this[1][36] = "Black Guillemot, Innstrandavegur, Westfjords.";
        this[1][37] = "Gyrfalcon, immature gray morph, Borðeyri, Westfjords.";
        this[1][38] = "European Shag, Hvitserkur, Northwestern Region.";
        this[1][39] = "Northern Fulmar, Hvitserkur, Northwestern Region.";
        this[1][40] = "Eurasian Blackbird, juvenile, Kjarnaskógur, Northeastern Region.";
        this[1][41] = "Common Gull, Kjarnaskógur, Northeastern Region.";
        this[1][42] = "Common Redpoll, Kjarnaskógur, Northeastern Region.";
        this[1][43] = "Redwing, Kjarnaskógur, Northeastern Region.";
        this[1][44] = "Graylag Goose, Akureyri, Northeastern Region.";
        this[1][45] = "Goldcrest, juvenile, Kjarnaskógur, Northeastern Region.";
        this[1][46] = "Redwing, juvenile, Kjarnaskógur, Northeastern Region.";
        this[1][47] = "Horned Grebe, Vestmannsvatn, Northeastern Region.";
        this[1][48] = "Common Ringed Plover, Vestmannsvatn, Northeastern Region.";
        this[1][49] = "Graylag Goose, Kaldbakstjarnir, Northeastern Region.";
        this[1][50] = "Eurasian Coot, Kaldbakstjarnir, Northeastern Region.";
        this[1][51] = "European Golden Plover, male, Héðinshöfða 2, Northeastern Region.";
        this[1][52] = "Parasitic Jaeger, Héðinshöfða 2, Northeastern Region.";
        this[1][53] = "Northern Wheatear, male, Dettifoss, Northeastern Region.";
        this[1][54] = "Common Scoter, Þvottárskriður, Eastern Region.";
        this[1][55] = "Barnacle Goose, Suðursveit, Eastern Region.";
        this[1][56] = "Snow Bunting, female, Jökulsárlón, Eastern Region.";
        this[1][57] = "Snow Bunting, male, Jökulsárlón, Eastern Region.";
        this[1][58] = "Parasitic Jaeger, dark morph, Jökulsárlón, Eastern Region.";
        this[1][59] = "Great Skua, Jökulsárlón, Eastern Region.";
        this[1][60] = "Great Skua, Jökulsárlón, Eastern Region.";
        this[1][61] = "Snow Bunting, male, Fjallsárlón, Eastern Region.";
        this[1][62] = "Parasitic Jaeger, dark morph, Fjallsárlón, Eastern Region.";
        this[1][63] = "Parasitic Jaeger, dark morph, Fjallsárlón, Eastern Region.";
        this[1][64] = "Parasitic Jaeger, dark morph, Fjallsárlón, Eastern Region.";
        this[1][65] = "Atlantic Puffin, Reynisfjara, Southern Region.";
        this[1][66] = "Eurasian Oystercatcher, Bakkatjörn, Capital Region.";
        this[1][67] = "Common Shelduck, female, Bakkatjörn, Capital Region.";
        this[1][68] = "Common Shelduck, juvenile, Bakkatjörn, Capital Region.";
        this[1][69] = "Red-necked Phalarope, female, Bakkatjörn, Capital Region.";
        this[1][70] = "Red-necked Phalarope, female, Bakkatjörn, Capital Region.";
        this[1][71] = "Lesser Black-backed Gull, Bakkatjörn, Capital Region.";
        this[1][72] = "Great Black-backed Gull, Bakkatjörn, Capital Region.";
        this[1][73] = "Black-tailed Godwit, Bakkatjörn, Capital Region.";
        this[1][74] = "Meadow Pipit, Bakkatjörn, Capital Region.";
        this[1][75] = "Gadwall, female with chicks, Bakkatjörn, Capital Region.";
        this[1][76] = "Eurasian Oystercatcher, immature, Golfklúbbur Seltjarnarnes, Capital Region. ";
        this[1][77] = "Graylag Goose, Golfklúbbur Seltjarnarnes, Capital Region. ";
        this[1][78] = "Red-throated Loon, Golfklúbbur Seltjarnarnes, Capital Region. ";
        this[1][79] = "Whooper Swan, Golfklúbbur Seltjarnarnes, Capital Region. ";
        this[1][80] = "Eurasian Wigeon, male, Golfklúbbur Seltjarnarnes, Capital Region. ";
        this[1][81] = "Tufted Duck, male, Tjörnin Lake, Reykjavík";
        this[1][82] = "Tufted Duck, female, Tjörnin Lake, Reykjavík";
        this[1][83] = "Mallard, male, Tjörnin Lake, Reykjavík";
        this[1][84] = "Eurasian Blackbird, male, Tjörnin Lake, Reykjavík";
        this[1][85] = "Common Redpoll, immature, Tjörnin Lake, Reykjavík";
        this[1][86] = "European Starling, Tjörnin Lake, Reykjavík";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
