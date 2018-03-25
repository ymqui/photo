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
    this[0][i]   = "20171223_028_Pacifier";
    this[1][i++] = "Nathan is not very fond of the pacifier, 12/23/2017.";
    this[0][i]   = "20171224_029_Cream";
    this[1][i++] = "Beauty time, 12/24/2017.";
    this[0][i]   = "20171224_031_Nap";
    this[1][i++] = "Nap time, 12/24/2017.";
    this[0][i]   = "20171224_032_Smile";
    this[1][i++] = "Smiling, 12/24/2017.";
    this[0][i]   = "20171224_033_ReadyToGoOut";
    this[1][i++] = "Ready to go out, 12/24/2017.";
    this[0][i]   = "20171229_035_WithMom";
    this[1][i++] = "Mommy's little bundle of joy, 12/29/2017.";
    this[0][i]   = "20171229_036_2MonthCheckup";
    this[1][i++] = "Nathan weighs 14 lbs at his 2-month well-baby checkup, 12/29/2017.";
    this[0][i]   = "20171231_037_WithGrandparents";
    this[1][i++] = "With Grandma and Grandpa, 12/31/2017.";
    this[0][i]   = "20180114_002_Bouncer";
    this[1][i++] = "Playing with the lion king, 1/14/2018.";
    this[0][i]   = "20180119_003_MusicKickMat";
    this[1][i++] = "Enjoying the musical kick mat, 1/19/2018.";
    this[0][i]   = "20180203_004_TummyTime";
    this[1][i++] = "Nathan can easily hold his head up at tummy time now, 2/3/2018.";
    this[0][i]   = "20180210_005";
    this[1][i++] = "A very well-fed Nathan, 2/10/2018.";
    this[0][i]   = "20180302_009_Sleep";
    this[1][i++] = "Napping, 3/2/2018.";
    this[0][i]   = "20180324_011_TummyTime";
    this[1][i++] = "Tummy time on the musical kick mat, 3/24/2018.";


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
        this[1][i++] = "牵着妈妈的手指头，11/10/2017。";
        this[1][i++] = "美美地躺在家里的摇篮里，11/19/2017。";
        this[1][i++] = "在Elena阿姨家和Elena阿姨和Allison姐姐合影，11/23/2017。";
        this[1][i++] = "球球在Elena阿姨家过第一次感恩节，11/23/2017。";
        this[1][i++] = "球球最喜欢的睡姿，11/26/2017。";
        this[1][i++] = "练习趴着抬头，12/2/2017。";
        this[1][i++] = "球球不是很喜欢安慰奶嘴，12/23/2017。";
        this[1][i++] = "妈妈在给球球擦护肤霜，12/24/2017。";
        this[1][i++] = "打个盹，12/24/2017。";
        this[1][i++] = "笑了，12/24/2017。";
        this[1][i++] = "穿戴整齐准备出门，12/24/2017。";
        this[1][i++] = "和妈妈在一起，12/29/2017。";
        this[1][i++] = "球球两个月体检，有14磅（12斤7两）重，12/29/2017。";
        this[1][i++] = "和外公外婆在一起，12/31/2017。";
        this[1][i++] = "在摇椅上看狮子王玩具，1/14/2018。";
        this[1][i++] = "在音乐踢毯上玩得很开心，1/19/2018。";
        this[1][i++] = "球球现在能轻易就抬起头来，2/3/2018。";
        this[1][i++] = "茁壮成长，2/10/2018。";
        this[1][i++] = "家里停电，不影响球球午睡，3/2/2018。";
        this[1][i++] = "又到趴着玩的时间，3/24/2018。";
    }
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->