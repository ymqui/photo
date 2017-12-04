<!--
var info_url   = "";
var title      = "Nathan's Photos";
var dir        = maindir+"pics/qiuqiu/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
 
if(window.usechinese){
    title      = "球球的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]   = "20170128_001_OvulationTest";
    this[1][i++] = "Positive ovulation test, 1/28/2017.";
    this[0][i]   = "20170215_002_PregnancyTest";
    this[1][i++] = "Positive pregnancy test, 2/15/2017.";
    this[0][i]   = "20170309_003_Sonogram";
    this[1][i++] = "Sonogram at MedStar Montgomery Medical Center. Our greatest joy to hear the baby's heartbeat for the first time, 3/9/2017.";
    this[0][i]   = "20170602_007_AnatomySonogram";
    this[1][i++] = "Anatomy ultrasound at MedStar Montgomery Medical Center. The baby is healthy and strong, 6/2/2017.";
    this[0][i]   = "20170721_008_Sonogram";
    this[1][i++] = "Nathan's cute little face, MedStar Montgomery Medical Center, 7/21/2017.";
    this[0][i]   = "20170920_018";
    this[1][i++] = "Baby shower, 9/20/2017.";
    this[0][i]   = "20171031_009_AfterBirth";
    this[1][i++] = "In the nursery after birth, 8 lb 12 oz, and 20 inches long, 10/31/2017.";
    this[0][i]   = "20171101_014_WithMom";
    this[1][i++] = "Resting with mom in the hospital recovery room, 11/1/2017.";
    this[0][i]   = "20171107_016_HomeAsleep";
    this[1][i++] = "Asleep at home, 11/7/2017.";
    this[0][i]   = "20171110_017_HomeWithMom";
    this[1][i++] = "With mom at home, 11/10/2017.";
    this[0][i]   = "20171119_018_HomeBassinet";
    this[1][i++] = "At home in the bassinet, 11/19/2017.";
    this[0][i]   = "20171123_020_WithElena&Allison";
    this[1][i++] = "With Auntie Elena and Allison, 11/23/2017.";
    this[0][i]   = "20171123_024_Thanksgiving";
    this[1][i++] = "Nathan's first Thanksgiving at Auntie Elena's home, 11/23/2017.";
    this[0][i]   = "20171126_027_AsleepAtHome";
    this[1][i++] = "Nathan's favorite sleeping position, 11/26/2017.";
    this[0][i]   = "20171202_028_TummyTimeAtHome";
    this[1][i++] = "Tummy time, 12/2/2017.";

    if(window.usechinese){
        i = 0;
        this[1][i++] = "排卵测试显阳性，1/28/2017。";
        this[1][i++] = "怀孕测试显阳性，2/15/2017。";
        this[1][i++] = "在蒙哥马利医疗中心做超声波检查。无比幸福地看到和听到胎儿的心跳，3/9/2017。";
        this[1][i++] = "在蒙哥马利医疗中心做解剖结构超声波检查，胎儿很健康，6/2/2017。";
        this[1][i++] = "小宝宝的脸蛋，蒙哥马利医疗中心，7/21/2017。";
        this[1][i++] = "同事们举办的准妈妈派对，9/20/2017。";
        this[1][i++] = "宝宝出生了，7斤9两重，51厘米长，10/31/2017。";
        this[1][i++] = "和妈妈在医院恢复室一块休息，11/1/2017。";
        this[1][i++] = "在家里的婴儿摇椅上安睡，11/7/2017。";
        this[1][i++] = "在家里牵着妈妈的手指头，11/10/2017。";
        this[1][i++] = "美美地躺在家里的摇篮里，11/19/2017。";
        this[1][i++] = "在Elena阿姨家和Elena阿姨和Allison姐姐合影，11/23/2017。";
        this[1][i++] = "球球在Elena阿姨家过第一次感恩节，11/23/2017。";
        this[1][i++] = "球球最喜欢的睡姿，11/26/2017。";
        this[1][i++] = "练习趴着抬头，12/2/2017。";
    }
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->