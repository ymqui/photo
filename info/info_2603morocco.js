<!--
//Created by Album Builder Program Thu Apr 16 08:14:55 2026
var info_url   = "";
var title      = "Spring Break in Morocco";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2603morocco/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
var pagelist   = [["2604mobird","3/2026 Birding in Morocco","3/2026 摩洛哥观鸟"]];
 
if(window.usechinese){
    title      = "在摩洛哥度春假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<48;i++){
        this[0][i] = "2603morocco_"+(i+1).toString();
        this[1][i] = "";
    }
    this[0][48] = "2603morocco_0";
    this[1][48] = "";
    for (var i=49;i<61;i++){
        this[0][i] = "2603morocco_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在非斯的托尤尔庭院旅馆吃早餐。";
        this[1][1] = "非斯的托尤尔庭院旅馆。";
        this[1][2] = "在导游的带领下游非斯麦地那。";
        this[1][3] = "逛非斯的一家布店。";
        this[1][4] = "逛非斯的一家布店。";
        this[1][5] = "非斯的一家布店。";
        this[1][6] = "老板给球球扎柏柏尔式头巾。";
        this[1][7] = "球球戴柏柏尔式沙漠头巾。";
        this[1][8] = "非斯麦地那的小巷。";
        this[1][9] = "非斯麦地那的传统制革厂。";
        this[1][10] = "球球在非斯麦地那的皮具店。";
        this[1][11] = "非斯麦地那的阿塔里纳经学院。";
        this[1][12] = "非斯麦地那的金属工艺品店。";
        this[1][13] = "非斯麦地那的药房，出售各种香料。";
        this[1][14] = "逛非斯麦地那的小巷。";
        this[1][15] = "非斯麦地那的蓝大门。";
        this[1][16] = "非斯麦地那随处可见的面包摊。";
        this[1][17] = "齐兹峡谷绿洲。";
        this[1][18] = "在齐兹峡谷休息站。球球手上拿着刚买的三叶虫化石。";
        this[1][19] = "梅尔祖卡撒哈拉沙漠的骆驼。";
        this[1][20] = "在梅尔祖卡边的撒哈拉沙漠上。";
        this[1][21] = "骑骆驼进撒哈拉沙漠。";
        this[1][22] = "骑骆驼进撒哈拉沙漠。";
        this[1][23] = "骑骆驼进撒哈拉沙漠。";
        this[1][24] = "在撒哈拉沙漠骑骆驼。";
        this[1][25] = "在撒哈拉沙漠骑骆驼。";
        this[1][26] = "骑骆驼进撒哈拉沙漠。";
        this[1][27] = "球球在沙丘上滑沙。";
        this[1][28] = "球球在撒哈拉沙漠。";
        this[1][29] = "球球和向导合影。";
        this[1][30] = "沙漠营地日落。";
        this[1][31] = "在沙漠营地吃摩洛哥传统塔吉锅晚餐。";
        this[1][32] = "在沙漠营地吃摩洛哥传统塔吉锅晚餐。";
        this[1][33] = "欣赏柏柏尔音乐。";
        this[1][34] = "伴着音乐起舞。";
        this[1][35] = "阿伊特本哈杜的阿特拉斯山脈风光。";
        this[1][36] = "在阿伊特本哈杜。";
        this[1][37] = "球球在阿伊特本哈杜。这里是柏柏尔人建造的传统土制城堡。";
        this[1][38] = "在阿伊特本哈杜。";
        this[1][39] = "阿伊特本哈杜。";
        this[1][40] = "在阿伊特本哈杜。";
        this[1][41] = "在阿特拉斯山脉的乌凯梅登。";
        this[1][42] = "球球在乌凯梅登的奥罗歇酒店练习射箭。";
        this[1][43] = "在乌凯梅登的奥罗歇酒店吃晚饭。";
        this[1][44] = "乌凯梅登的奥罗歇酒店。";
        this[1][45] = "苏斯-马萨国家公园的摩洛哥坚果树。这种果实可以用来榨取用途很广的阿甘油。";
        this[1][46] = "在导游带领下游苏斯-马萨国家公园。";
        this[1][47] = "球球和导游在苏斯-马萨国家公园。";
        this[1][48] = "苏斯-马萨国家公园的鸵鸟。";
        this[1][49] = "苏斯-马萨国家公园的弯角羚。";
        this[1][50] = "苏斯-马萨国家公园的瞪羚。";
        this[1][51] = "游阿加迪尔麦地那。";
        this[1][52] = "游阿加迪尔麦地那。";
        this[1][53] = "游卡萨布兰卡的哈桑二世清真寺。";
        this[1][54] = "游卡萨布兰卡的哈桑二世清真寺。";
        this[1][55] = "小孩在卡萨布兰卡街头踢足球。";
        this[1][56] = "卡萨布兰卡的哈桑二世清真寺。";
        this[1][57] = "卡萨布兰卡的哈桑二世清真寺。";
        this[1][58] = "球球在卡萨布兰卡街头玩单杠。";
        this[1][59] = "卡萨布兰卡的埃尔汉克灯塔日落。";
        this[1][60] = "卡萨布兰卡的哈桑二世清真寺日出。";
    }else{
        this[1][0] = "Having breaskfast at Riad TOYOUR in Fes Medina.";
        this[1][1] = "Riad TOYOUR in Fes Medina.";
        this[1][2] = "Taking a guided tour of Fes Medina.";
        this[1][3] = "Visiting a cloth shop in Fes Medina.";
        this[1][4] = "Visiting a cloth shop in Fes Medina.";
        this[1][5] = "A cloth shop in Fes Medina.";
        this[1][6] = "The shop owner helps Nathan put on a headscarf in traditional Berber style.";
        this[1][7] = "Nathan wearing a Berber turban.";
        this[1][8] = "Streets in Fes Medina.";
        this[1][9] = "Visiting Sidi Moussa Tannery in Fes Medina.";
        this[1][10] = "Nathan at a leather shop in Fes Medina.";
        this[1][11] = "Visiting Al-Attarine Madrasa in Fes Medina.";
        this[1][12] = "Visiting a metalware shop in Fes Medina.";
        this[1][13] = "Visiting a Berber pharmacy in Fes Medina.";
        this[1][14] = "Streets in Fes Medina.";
        this[1][15] = "At the Blue Gate (Bab Bou Jeloud) of Fes Medina.";
        this[1][16] = "A bread stand in Fes Medina.";
        this[1][17] = "At Ziz Canyon Oasis.";
        this[1][18] = "At Ziz Canyon rest stop. Nathan is holding a trilobite fossil.";
        this[1][19] = "Camels at the Sahara Desert in Merzouga.";
        this[1][20] = "At Erg Chebbi of the Sahara Desert in Merzouga.";
        this[1][21] = "Taking a camel ride at Erg Chebbi of the Sahara Desert.";
        this[1][22] = "Taking a camel ride at Erg Chebbi of the Sahara Desert.";
        this[1][23] = "Taking a camel ride at Erg Chebbi of the Sahara Desert.";
        this[1][24] = "Camel ride at Erg Chebbi of the Sahara Desert.";
        this[1][25] = "Taking a camel ride at Erg Chebbi of the Sahara Desert.";
        this[1][26] = "Camel ride at Erg Chebbi of the Sahara Desert.";
        this[1][27] = "Nathan is sandboading at Erg Chebbi of the Sahara Desert.";
        this[1][28] = "Nathan with a camel.";
        this[1][29] = "Nathan with the guide.";
        this[1][30] = "Sunset over the desert camp.";
        this[1][31] = "Enjoying traditional Moroccan tagine dinner at the desert camp.";
        this[1][32] = "Enjoying traditional Moroccan tagine dinner at the desert camp.";
        this[1][33] = "Berber Music at the desert camp.";
        this[1][34] = "Dance at the desert camp.";
        this[1][35] = "Atlas mountain view from Ait Ben Haddou.";
        this[1][36] = "Visiting Ait Ben Haddou, a Berber village with earthen clay buildings.";
        this[1][37] = "Nathan at Ait Ben Haddou.";
        this[1][38] = "Visiting Ait Ben Haddou.";
        this[1][39] = "Ait Ben Haddou.";
        this[1][40] = "Visiting Ait Ben Haddou.";
        this[1][41] = "Visiting Atlas Mountain at Oukaimeden.";
        this[1][42] = "Nathan practicing archery at Aurocher Hotel in Oukaimeden.";
        this[1][43] = "Enjoying tagine dinner at Aurocher Hotel in Oukaimeden.";
        this[1][44] = "Aurocher Hotel in Oukaimeden.";
        this[1][45] = "An argan tree at Souss-Massa National Park.";
        this[1][46] = "Taking a guided tour of Souss-Massa National Park.";
        this[1][47] = "Nathan and our guide Aissa at Souss-Massa National Park.";
        this[1][48] = "An ostrich at Souss-Massa National Park.";
        this[1][49] = "An addax antelope at Souss-Massa National Park.";
        this[1][50] = "A dorcas gazelle at Souss-Massa National Park.";
        this[1][51] = "Visiting Agadir Medina.";
        this[1][52] = "Visiting Agadir Medina.";
        this[1][53] = "Visiting the Hassan II Mosque in Casablanca.";
        this[1][54] = "Visiting the Hassan II Mosque in Casablanca.";
        this[1][55] = "Boys playing street scoccer in Casablanca.";
        this[1][56] = "The Hassan II Mosque in Casablanca.";
        this[1][57] = "The Hassan II Mosque in Casablanca.";
        this[1][58] = "Playing on the high bar in Casablanca.";
        this[1][59] = "Sunset over the El Hank Lighthouse in Casablanca.";
        this[1][60] = "Sunrise over the Hassan II Mosque in Casablanca.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
