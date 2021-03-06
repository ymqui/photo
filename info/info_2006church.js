<!--
//Created by Album Builder Program Wed Mar 08 22:16:40 2006
var info_url   = "";
var title      = "Churches, temples, and mosques in the United States.";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/2006church/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BecauseOfYou.mid";
var midi_cr    = new Array("琉璃色的鱼","http://dhlska.flasher.cn/user1/536/5591.shtml");
 
if(window.usechinese){
    title      = "美国的教堂和清真寺。";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素, 300D相机, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    var i = 0;
    this[0][i++] = "MaryShrine_20060325_001_Front";
    this[0][i++] = "MaryShrine_20060325_002_Front";
    this[0][i++] = "MaryShrine_20060325_018_Hall";
    this[0][i++] = "MaryShrine_20060325_021_Sanctuary";
    this[0][i++] = "MaryShrine_20060325_016_OurLadyofSiluva";
    this[0][i++] = "MaryShrine_20060325_024_Lantern";
    this[0][i++] = "MaryShrine_20060325_025_Glass";
    this[0][i++] = "DCChristChurch_20060402_002";
    this[0][i++] = "DCIslamicCenter_20060416_001";
    this[0][i++] = "DCIslamicCenter_20060416_005";
    this[0][i++] = "DCIslamicCenter_20060416_007";
    this[0][i++] = "SaintSophia_20060402_002";
    this[0][i++] = "UkrainianCatholicThrine_20060325_002";
    this[0][i++] = "NationalCathedral_20060325_002_Front";
    this[0][i++] = "NationalCathedral_20060325_004_Side";
    this[0][i++] = "NationalCathedral_20060325_009_Flower";
    this[0][i++] = "NationalCathedral_20060325_020_Hall";
    this[0][i++] = "NationalCathedral_20060325_025_Glass";
    this[0][i++] = "POPLutheran_20060416_002";
    this[0][i++] = "StMark_20060402_001";
    this[0][i++] = "PeterPaul_20060325_002";
    this[0][i++] = "PeterPaul_20060325_003";
    this[0][i++] = "MormonTemple_20060325_007";
    this[0][i++] = "MormonTemple_20060325_009";
    this[0][i++] = "MtOlivesChurch_20060416_002";
    this[0][i++] = "MtOlivesChurch_20060416_003";
    this[0][i++] = "StFrancisXavierChurch_20060528_001";
    this[0][i++] = "ChristChurch_20060401_001";
    this[0][i++] = "MemorialChurch_20060401_003";
    this[0][i++] = "StPeterChapel_20060923_001";


    if(window.usechinese){
         i = 0;
         for (var j=0;j<7;j++) {this[1][i++] = "华盛顿圣母玛利大教堂。";}
         this[1][i++] = "华盛顿基督教堂。";
         for (var j=0;j<3;j++) {this[1][i++] = "华盛顿伊斯兰中心。";}
         this[1][i++] = "华盛顿圣索非亚希腊东正教大教堂。";
         this[1][i++] = "华盛顿乌克兰天主教堂。";
         for (var j=0;j<5;j++) {this[1][i++] = "华盛顿国家大教堂。";}
         this[1][i++] = "马里兰盖瑟斯堡和平王子路德派教堂。";
         this[1][i++] = "马里兰贝塞斯达圣马克东正教教堂。";
         for (var j=0;j<2;j++) {this[1][i++] = "马里兰波多马各东正教教堂。";}
         for (var j=0;j<2;j++) {this[1][i++] = "马里兰垦新囤摩门教堂。";}
         for (var j=0;j<2;j++) {this[1][i++] = "马里兰盖瑟斯堡橄榄山教堂。";}
         this[1][i++] = "宾夕法尼亚费城圣佛朗西斯赛维尔教堂。";
         this[1][i++] = "维吉尼亚兰卡斯特郡基督教堂。";
         this[1][i++] = "维吉尼亚詹姆士镇纪念教堂。";
         this[1][i++] = "西维吉尼亚哈佩斯渡口圣彼得小教堂。";

    }else{
         i = 0;
         for (var j=0;j<7;j++) {this[1][i++] = "Basilica of the National Shrine of the Immaculate Conception, Washington, DC.";}
         this[1][i++] = "Christ Church of Washington, Washington, DC.";
         for (var j=0;j<3;j++) {this[1][i++] = "The Islamic Center of Washington, DC.";}
         this[1][i++] = "Saint Sophia Greek Orthodox Cathedral, Washington, DC.";
         this[1][i++] = "Ukrainian Catholic National Shrine of the Holy Family, Washington, DC.";
         for (var j=0;j<5;j++) {this[1][i++] = "National Cathedral, Washington, DC.";}
         this[1][i++] = "Prince of Peace Lutheran Church, Gaithersburg, Maryland.";
         this[1][i++] = "Saint Mark Orthodox Church, Bethesda, Maryland.";
         for (var j=0;j<2;j++) {this[1][i++] = "Saints Peter and Paul Antiochian Orthodox Church, Potomac, Maryland.";}
         for (var j=0;j<2;j++) {this[1][i++] = "Washington DC Temple, the Church of Jesus Christ of Latter-day Saints, Kensington, Maryland.";}
         for (var j=0;j<2;j++) {this[1][i++] = "The Mt. of Olives Church, Gaithersburg, Maryland.";}
         this[1][i++] = "St. Francis Xavier Church, Philadelphia, Pennsylvania. ";
         this[1][i++] = "Christ Church, Lancaster County, Virginia. ";
         this[1][i++] = "Memorial Church, Jamestown, Virginia.";
         this[1][i++] = "St. Peter's Chapel, Harpers Ferry, West Virginia. ";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
