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
var pagelist   = [["1812costarica","12/2018 Trip to "+coltext("Costa Rica"),"12/2018 游"+coltext("哥斯达黎加")],["1904dcmuseum","4/2019 Visiting the Smithonian Museums, "+coltext("USA"),"4/2019 "+coltext("美国")+"华盛顿特区参观博物馆"],
                  ["1905mexico","5/2019 Vacationing in "+coltext("Mexico"),"5/2019 "+coltext("墨西哥")+"度假"], ["2208canada","8/2022 Trip to "+coltext("Canada"),"8/2022 "+coltext("加拿大")+"之行"],
                  ["2301panama","1/2023 Vacationing in "+coltext("Panama"),"1/2023 "+coltext("巴拿马")+"度假"],["2306iceland","6/2023 Vacationing in "+coltext("Iceland"),"6/2023 "+coltext("冰岛")+"度假"],
                  ["2308uk","8/2023 Vacationing in "+coltext("United Kingdom"),"8/2023 "+coltext("英国")+"度假"],["2312china","12/2023 Vacationing in "+coltext("China"),"12/2023 "+coltext("中国")+"度假"],
                  ["2408france","8/2024 Vacationing in "+coltext("France"),"8/2024 "+coltext("法国")+"度假"]];

document.title = title;

function coltext(text,col){
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
    var i   = 0;    
    this[0][i]    = "20181204_CostaRica";
    this[1][i++]  = pagelink("1812costarica",(["Arenal Volcano, Alajuela Province, "+btext("Costa Rica"),btext("哥斯达黎加")+"阿拉胡埃拉省阿雷纳火山"])[cn_ind]);
    this[0][i]    = "20190420_USA";
    this[1][i++]  = pagelink("1904dcmuseum",(["National Mall, Washington DC, "+btext("United States"),btext("美国")+"华盛顿特区国家广场"])[cn_ind]);
    this[0][i]    = "20190511_Mexico";
    this[1][i++]  = pagelink("1905mexico",(["Teotihucan Pyramid of the Sun, State of Mexico, "+btext("Mexico"),btext("墨西哥")+"墨西哥州特奥蒂瓦坎古城太阳金字塔"])[cn_ind]);
    this[0][i]    = "20220826_Canada";
    this[1][i++]  = pagelink("2208canada",(["Niagara Falls, Ontario, "+btext("Canada"),btext("加拿大")+"安大略省尼亚加拉大瀑布"])[cn_ind]);
    this[0][i]    = ["20230122_Panama","20230124_Panama","20230127_Panama"];
    this[1][i++]  = ([[pagelink("2301panama","Casco Viejo, Panama City, "+btext("Panama")),pagelink("2301panama","Monkey Island, Panama Canal, "+btext("Panama")),pagelink("2301panama","Lake Alajuela, Panamá Province, "+btext("Panama"))],[pagelink("2301panama",btext("巴拿马")+"巴拿马城Casco Viejo老城"),pagelink("2301panama",btext("巴拿马")+"巴拿马运河猴岛"),pagelink("2301panama",btext("巴拿马")+"巴拿马省阿拉胡埃拉湖")]])[cn_ind];
    this[0][i]    = ["20230622_Iceland_1","20230622_Iceland_2","20230623_Iceland"];
    this[1][i++]  = ([[pagelink("2306iceland","Jökulsárlón, Eastern Region, "+btext("Iceland")),pagelink("2306iceland","Seljalandsfoss, Southern Region, "+btext("Iceland")),pagelink("2306iceland","Blue Lagoon, Southern Peninsula, "+btext("Iceland"))],[pagelink("2306iceland",btext("冰岛")+"东部地区杰古沙龙冰河湖"),pagelink("2306iceland",btext("冰岛")+"南部地区塞里雅兰瀑布"),pagelink("2306iceland",btext("冰岛")+"雷克雅内斯半岛蓝湖温泉")]])[cn_ind];
    this[0][i]    = "20230807_UK";
    this[1][i++]  = pagelink("2308uk",(["Stonehenge, Wiltshire, "+btext("United Kingdom"),btext("英国")+"威尔特郡巨石阵"])[cn_ind]);
    this[0][i]    = ["20231215_China","20231221_China"];
    this[1][i++]  = ([[pagelink("2312china","Tiananmen, Beijing, "+btext("China")),pagelink("2312china","Tulou, Yongding, Fujian, "+btext("China"))],[pagelink("2312china",btext("中国")+"北京天安门"),pagelink("2312china",btext("中国")+"福建永定土楼")]])[cn_ind];
    this[0][i]    = "20240821_France";
    this[1][i++]  = pagelink("2408france",(["Eiffel Tower, Paris, "+btext("France"),btext("法国")+"巴黎艾菲尔铁塔"])[cn_ind]);
    this[0][i]    = ["20250413_Guatemala","20250419_Guatemala"];
    this[1][i++]  = ([[pagelink("2504guatemala","Temple I, Tikal National Park, Petén, "+btext("Guatemala")),pagelink("2504guatemala","Santa Catalina Arch, Antigua Guatemala, Sacatepéquez, "+btext("Guatemala"))],[pagelink("2504guatemala",btext("危地马拉")+"佩滕省蒂卡尔国家公园1号神殿"),pagelink("2504guatemala",btext("危地马拉")+"萨卡特佩克斯省安提瓜危地马拉市圣卡塔利娜拱门")]])[cn_ind];

    adddate(this);
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
