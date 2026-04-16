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
 
if(window.usechinese){
    title      = "在摩洛哥度春假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<60;i++){
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
        this[1][18] = "齐兹峡谷绿洲。球球手术拿着刚买的三叶虫化石。";
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
        this[1][45] = "苏斯-马萨国家公园的摩洛哥坚果树。这种果实可以用来榨取阿甘油。";
        this[1][46] = "在导游带领下游苏斯-马萨国家公园。";
        this[1][47] = "球球和导游在苏斯-马萨国家公园。";
        this[1][48] = "苏斯-马萨国家公园的弯角羚。";
        this[1][49] = "苏斯-马萨国家公园的瞪羚。";
        this[1][50] = "游阿加迪尔麦地那。";
        this[1][51] = "游阿加迪尔麦地那。";
        this[1][52] = "游卡萨布兰卡的哈桑二世清真寺。";
        this[1][53] = "游卡萨布兰卡的哈桑二世清真寺。";
        this[1][54] = "小孩在卡萨布兰卡街头踢足球。";
        this[1][55] = "卡萨布兰卡的哈桑二世清真寺。";
        this[1][56] = "卡萨布兰卡的哈桑二世清真寺。";
        this[1][57] = "球球在卡萨布兰卡玩单杠。";
        this[1][58] = "卡萨布兰卡的埃尔汉克灯塔日落。";
        this[1][59] = "卡萨布兰卡的哈桑二世清真寺日出。";
    }else{
        this[1][0] = "RiadToyourBreakfast.";
        this[1][1] = "RiadToyour.";
        this[1][2] = "FesMedinaTour.";
        this[1][3] = "FesClothShop.";
        this[1][4] = "FesClothShop_Nathan.";
        this[1][5] = "FesClothShop.";
        this[1][6] = "FesClothShop_Nathan.";
        this[1][7] = "FesClothShop_Nathan.";
        this[1][8] = "FesMedina.";
        this[1][9] = "FesMedinaTour_SidiMoussaTannery.";
        this[1][10] = "FesMedinaTour_Nathan@LeatherShop.";
        this[1][11] = "FesMedinaTour_Al-AttarineMadrasa.";
        this[1][12] = "FesMedinaTour_MetalWareShop.";
        this[1][13] = "FesMedinaTour_Pharmacy.";
        this[1][14] = "FesMedina.";
        this[1][15] = "FesMedinaBlueGate.";
        this[1][16] = "FesMedinaBreadStand.";
        this[1][17] = "ZizCanyonOasis.";
        this[1][18] = "ZizCanyon.";
        this[1][19] = "Camel@Merzouga.";
        this[1][20] = "Mao&Nathan@ErgChebbiMerzouga.";
        this[1][21] = "CamelRide.";
        this[1][22] = "CamelRide.";
        this[1][23] = "NathanCamelRide.";
        this[1][24] = "CamelRide.";
        this[1][25] = "NathanCamelRide.";
        this[1][26] = "CamelRide.";
        this[1][27] = "NathanSandboading.";
        this[1][28] = "Nathan&Camel.";
        this[1][29] = "Nathan&Guide.";
        this[1][30] = "DesertCampSunset.";
        this[1][31] = "DesertCampDinner.";
        this[1][32] = "DesertCampDinner.";
        this[1][33] = "DesertCampBerberMusic.";
        this[1][34] = "DesertCampDance.";
        this[1][35] = "AitBenHaddouAtlas.";
        this[1][36] = "AitBenHaddou.";
        this[1][37] = "Nathan@AitBenHaddou.";
        this[1][38] = "AitBenHaddou.";
        this[1][39] = "AitBenHaddou.";
        this[1][40] = "AitBenHaddou.";
        this[1][41] = "AtlasMountainOukaimeden.";
        this[1][42] = "Aurocher_1.";
        this[1][43] = "Aurocher_2.";
        this[1][44] = "AurocherOukaimeden.";
        this[1][45] = "ArganTree@Souss-MassaNP.";
        this[1][46] = "Souss-MassaNP.";
        this[1][47] = "Nathan&Aissa@Souss-MassaNP.";
        this[1][48] = "AddaxAntelope_PNSous-Massa.";
        this[1][49] = "DorcasGazelle_PNSous-Massa.";
        this[1][50] = "AgadirMedina.";
        this[1][51] = "AgadirMedina.";
        this[1][52] = "CasablancaHassanIIMosque.";
        this[1][53] = "CasablancaHassanIIMosque.";
        this[1][54] = "CasablancaStreetScoccer.";
        this[1][55] = "CasablancaHassanIIMosque.";
        this[1][56] = "CasablancaHassanIIMosque.";
        this[1][57] = "Nathan@Casablanca.";
        this[1][58] = "CasablancaElHankLighthouse.";
        this[1][59] = "CasablancaHassanIIMosque.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
