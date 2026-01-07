<!--
var title      = (["Travelling around the world","环游世界"])[cn_ind];
var dir        = maindir+"pics/world/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
homeurl        = homeurl+"showphoto.html?qiuqiu";
var pagelist   = [["1812costarica","12/2018 Trip to "+btext("Costa Rica"),"12/2018 游"+btext("哥斯达黎加")],["1904dcmuseum","4/2019 Visiting the Smithonian Museums, "+btext("USA"),"4/2019 "+btext("美国")+"华盛顿特区参观博物馆"],
                  ["1905mexico","5/2019 Vacationing in "+btext("Mexico"),"5/2019 "+btext("墨西哥")+"度假"], ["2208canada","8/2022 Trip to "+btext("Canada"),"8/2022 "+btext("加拿大")+"之行"],
                  ["2301panama","1/2023 Vacationing in "+btext("Panama"),"1/2023 "+btext("巴拿马")+"度假"],["2306iceland","6/2023 Vacationing in "+btext("Iceland"),"6/2023 "+btext("冰岛")+"度假"],
                  ["2308uk","8/2023 Vacationing in "+btext("United Kingdom"),"8/2023 "+btext("英国")+"度假"],["2312china","12/2023 Vacationing in "+btext("China"),"12/2023 "+btext("中国")+"度假"],
                  ["2408france","8/2024 Vacationing in "+btext("France"),"8/2024 "+btext("法国")+"度假"],["2504guatemala","4/2025 Vacationing in "+btext("Guatemala"),"4/2025 "+btext("危地马拉")+"度假"],
                  ["2508italy","8/2025 Vacationing in "+btext("Italy"),"8/2025 "+btext("意大利")+"度假"],["2512jamaica","12/2025 Vacationing in "+btext("Jamaica"),"12/2025 "+btext("牙买加")+"度假"]];

document.title = title;

function ctext(text,col){
    if(typeof col=== 'undefined'){col="#66CCFF";}
    return '<font color="'+col+'">'+text+'</font>'; 
}

function btext(text){
    return '<b>'+text+'</b>';
} 

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status 
    this[0].push("20181204_CostaRica");
    this[1].push(pagelink("1812costarica",(["Arenal Volcano, Alajuela Province, "+btext("Costa Rica"),btext("哥斯达黎加")+"阿拉胡埃拉省阿雷纳火山"])[cn_ind]));
    this[0].push("20190420_USA");
    this[1].push(pagelink("1904dcmuseum",(["National Mall, Washington DC, "+btext("United States"),btext("美国")+"华盛顿特区国家广场"])[cn_ind]));
    this[0].push("20190511_Mexico");
    this[1].push(pagelink("1905mexico",(["Teotihucan Pyramid of the Sun, State of Mexico, "+btext("Mexico"),btext("墨西哥")+"墨西哥州特奥蒂瓦坎古城太阳金字塔"])[cn_ind]));
    this[0].push("20220826_Canada");
    this[1].push(pagelink("2208canada",(["Niagara Falls, Ontario, "+btext("Canada"),btext("加拿大")+"安大略省尼亚加拉大瀑布"])[cn_ind]));
    this[0].push(["20230122_Panama","20230124_Panama","20230127_Panama_1","20230127_Panama_2"]);
    this[1].push(([[pagelink("2301panama","Casco Viejo, Panama City, "+btext("Panama")),pagelink("2301panama","Monkey Island, Panama Canal, "+btext("Panama")),pagelink("2301panama","Lake Alajuela, Panamá Province, "+btext("Panama")),pagelink("2301panama","Emberá Purú village, Panamá Province, "+btext("Panama"))],[pagelink("2301panama",btext("巴拿马")+"巴拿马城Casco Viejo老城"),pagelink("2301panama",btext("巴拿马")+"巴拿马运河猴岛"),pagelink("2301panama",btext("巴拿马")+"巴拿马省阿拉胡埃拉湖"),pagelink("2301panama",btext("巴拿马")+"巴拿马省恩贝拉土著村")]])[cn_ind]);
    this[0].push(["20230622_Iceland_1","20230622_Iceland_2","20230623_Iceland"]);
    this[1].push(([[pagelink("2306iceland","Jökulsárlón, Eastern Region, "+btext("Iceland")),pagelink("2306iceland","Seljalandsfoss, Southern Region, "+btext("Iceland")),pagelink("2306iceland","Blue Lagoon, Southern Peninsula, "+btext("Iceland"))],[pagelink("2306iceland",btext("冰岛")+"东部地区杰古沙龙冰河湖"),pagelink("2306iceland",btext("冰岛")+"南部地区塞里雅兰瀑布"),pagelink("2306iceland",btext("冰岛")+"雷克雅内斯半岛蓝湖温泉")]])[cn_ind]);
    this[0].push("20230807_UK");
    this[1].push(pagelink("2308uk",(["Stonehenge, Wiltshire, "+btext("United Kingdom"),btext("英国")+"威尔特郡巨石阵"])[cn_ind]));
    this[0].push(["20231215_China","20231221_China"]);
    this[1].push(([[pagelink("2312china","Tiananmen, Beijing, "+btext("China")),pagelink("2312china","Tulou, Yongding, Fujian, "+btext("China"))],[pagelink("2312china",btext("中国")+"北京天安门"),pagelink("2312china",btext("中国")+"福建永定土楼")]])[cn_ind]);
    this[0].push("20240821_France");
    this[1].push(pagelink("2408france",(["Eiffel Tower, Paris, "+btext("France"),btext("法国")+"巴黎艾菲尔铁塔"])[cn_ind]));
    this[0].push(["20250413_Guatemala_1","20250413_Guatemala_2","20250419_Guatemala"]);
    this[1].push(([[pagelink("2504guatemala","Temple I, Tikal National Park, Petén, "+btext("Guatemala")),pagelink("2504guatemala","Temple IV, Tikal National Park, Petén, "+btext("Guatemala")),pagelink("2504guatemala","Santa Catalina Arch, Antigua Guatemala, Sacatepéquez, "+btext("Guatemala"))],[pagelink("2504guatemala",btext("危地马拉")+"佩滕省蒂卡尔国家公园1号神殿"),pagelink("2504guatemala",btext("危地马拉")+"佩滕省蒂卡尔国家公园4号神殿"),pagelink("2504guatemala",btext("危地马拉")+"萨卡特佩克斯省安提瓜危地马拉市圣卡塔利娜拱门")]])[cn_ind]);
    this[0].push(["20250810_Italy","20250812_Italy","20250818_Italy"]);
    this[1].push(([[pagelink("2508italy","Piazza Michelangelo, Florence, Tuscany, "+btext("Italy")),pagelink("2508italy","Leaning Tower of Pisa, Tuscany, "+btext("Italy")),pagelink("2508italy","Colosseum, Rome, Lazio, "+btext("Italy"))],[pagelink("2508italy",btext("意大利")+"托斯卡纳大区佛罗伦萨市米开朗基罗广场"),pagelink("2508italy",btext("意大利")+"托斯卡纳大区比萨斜塔"),pagelink("2508italy",btext("意大利")+"拉齐奥大区罗马市斗兽场")]])[cn_ind]);
    this[0].push("20250819_VaticanCity");
    this[1].push(pagelink("2508italy",(["St. Peter's Square, "+btext("Vatican City"),btext("梵蒂冈城")+"圣彼得广场"])[cn_ind]));
    this[0].push(["20251226_Jamaica_1","20251226_Jamaica_2"]);
    this[1].push(pagelink("2512jamaica",(["Dunn's River Falls Park, Ocho Rios, Saint Ann, "+btext("Jamaica"),btext("牙买加")+"圣安堂区奥乔里奥斯邓恩河瀑布公园"])[cn_ind]));

    adddate(this);
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
