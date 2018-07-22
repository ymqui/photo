﻿<!--
var info_url   = "";
var title      = "Nathan's Photos";
var dir        = maindir+"pics/qiuqiu/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();
var pagelist   = [["2018goddard","2018 Nathan at Goddard School","2018年球球在戈达德托儿所的照片"]];
 
if(window.usechinese){
    title      = "球球的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
    daycare = pagelink("2018goddard","daycare");
    this[0][i]    = "20170128_001_OvulationTest";
    this[1][i++]  = "Positive ovulation test";
    this[0][i]    = "20170215_002_PregnancyTest";
    this[1][i++]  = "Positive pregnancy test";
    this[0][i]    = "20170309_003_Sonogram";
    this[1][i++]  = "Sonogram at MedStar Montgomery Medical Center. Our greatest joy to hear the baby's heartbeat for the first time";
    this[0][i]    = "20170602_007_AnatomySonogram";
    this[1][i++]  = "Anatomy ultrasound at MedStar Montgomery Medical Center. The baby is healthy and strong";
    this[0][i]    = "20170721_008_Sonogram";
    this[1][i++]  = "Nathan's cute little face, MedStar Montgomery Medical Center";
    this[0][i]    = "20170920_018";
    this[1][i++]  = "Baby shower";
    this[0][i]    = "20171031_009_AfterBirth";
    this[1][i++]  = "In the nursery after birth, 8 lb 12 oz, and 20 inches long";
    this[0][i]    = "20171101_014_WithMom";
    this[1][i++]  = "Resting with mom in the hospital recovery room";
    this[0][i]    = "20171107_016_HomeAsleep";
    this[1][i++]  = "Asleep at home";
    this[0][i]    = "20171110_017_HomeWithMom";
    this[1][i++]  = "With mom at home";
    this[0][i]    = "20171119_018_HomeBassinet";
    this[1][i++]  = "At home in the bassinet";
    this[0][i]    = "20171123_020_WithElena&Allison";
    this[1][i++]  = "With Auntie Elena and Allison";
    this[0][i]    = "20171123_024_Thanksgiving";
    this[1][i++]  = "First Thanksgiving at Auntie Elena's home";
    this[0][i]    = "20171126_027_AsleepAtHome";
    this[1][i++]  = "Favorite sleeping position";
    this[0][i]    = "20171202_028_TummyTimeAtHome";
    this[1][i++]  = "Tummy time";
    this[0][i]    = "20171223_028_Pacifier";
    this[1][i++]  = "Nathan is not very fond of the pacifier";
    this[0][i]    = "20171224_029_Cream";
    this[1][i++]  = "Beauty time";
    this[0][i]    = "20171224_031_Nap";
    this[1][i++]  = "Nap time";
    this[0][i]    = "20171224_032_Smile";
    this[1][i++]  = "Smiling";
    this[0][i]    = "20171224_033_ReadyToGoOut";
    this[1][i++]  = "Ready to go out";
    this[0][i]    = "20171229_035_WithMom";
    this[1][i++]  = "Mommy's little bundle of joy";
    this[0][i]    = "20171229_036_2MonthCheckup";
    this[1][i++]  = "Nathan weighs 14 lbs at his 2-month well-baby checkup";
    this[0][i]    = "20171231_037_WithGrandparents";
    this[1][i++]  = "With Grandma and Grandpa";
    this[0][i]    = "20180112";
    this[1][i++]  = "Mama's boy";
    this[0][i]    = "20180114_002_Bouncer";
    this[1][i++]  = "Playing with the lion king";
    this[0][i]    = "20180119_003_MusicKickMat";
    this[1][i++]  = "Enjoying the musical kick mat";
    this[0][i]    = "20180203_004_TummyTime";
    this[1][i++]  = "Nathan can easily hold his head up at tummy time now";
    this[0][i]    = "20180210_005";
    makeface[j++] = i;
    this[1][i++]  = "A very well-fed Nathan";
    this[0][i]    = "20180302_009_Sleep";
    this[1][i++]  = "Napping";
    makeface[j++] = i;
    this[0][i]    = "20180310_010_Passport1";
    this[1][i++]  = "Passport photo";
    this[0][i]    = "20180324_011_TummyTime";
    this[1][i++]  = "Tummy time on the musical kick mat";
    this[0][i]    = "20180331_012_WithXiaoXi";
    this[1][i++]  = "With sister Adele";
    this[0][i]    = "20180415_014_Sitting";
    this[1][i++]  = "Nathan can sit independently now";
    this[0][i]    = "20180429_016_SolidFood";
    this[1][i++]  = "Nathan starts eating solid food now";
    this[0][i]    = "20180521_017_HighChair";
    this[1][i++]  = "Nathan enjoys reading any book with a lot of photos";
    this[0][i]    = "20180524_018_NewTeeth";
    this[1][i++]  = "First two teeth";
    this[0][i]    = "20180525_019_Superman";
    this[1][i++]  = "Superman";
    this[0][i]    = "20180527_021_Nap";
    this[1][i++]  = "Nap";
    this[0][i]    = "20180601_022_TravelInCar";
    this[1][i++]  = "On the road";
    this[0][i]    = "20180603_023_SCMyrtleBeach";
    this[1][i++]  = "Vacationing at Myrtle Beach, South Carolina";
    this[0][i]    = "20180603_026_SCMyrtleBeachHotel";
    this[1][i++]  = "Vacationing at Myrtle Beach, South Carolina";
    this[0][i]    = "20180618_028_GoddardSchool";
    this[1][i++]  = "Nathan is going to the "+daycare;
    this[0][i]    = "20180618_029_GoddardSchool";
    this[1][i++]  = "First day at the "+daycare+", Mom was heartbroken";
    this[0][i]    = "20180620_030_Painting";
    this[1][i++]  = "Nathan's first painting";
    this[0][i]    = "20180620_031_PonyRide";
    this[1][i++]  = "Pony ride at the "+daycare+" with the help of Ms Mfuta";
    this[0][i]    = "20180629_035_TeetherWafer";
    this[1][i++]  = "Chewing on a teething wafer";

    if(window.usechinese){
        i = 0;
        daycare = pagelink("2018goddard","托儿所");
        this[1][i++] = "排卵测试显阳性";
        this[1][i++] = "怀孕测试显阳性";
        this[1][i++] = "在蒙哥马利医疗中心做超声波检查。无比幸福地看到和听到胎儿的心跳";
        this[1][i++] = "在蒙哥马利医疗中心做解剖结构超声波检查，胎儿很健康";
        this[1][i++] = "小宝宝的脸蛋，蒙哥马利医疗中心";
        this[1][i++] = "同事们举办的"+pagelink("1709babyshower","准妈妈派对");
        this[1][i++] = "宝宝出生了，7斤9两重（8磅12盎司），51厘米长";
        this[1][i++] = "和妈妈在医院恢复室一块休息";
        this[1][i++] = "在家里的婴儿摇椅上安睡";
        this[1][i++] = "牵着妈妈的手指头";
        this[1][i++] = "美美地躺在家里的摇篮里";
        this[1][i++] = "在Elena阿姨家和Elena阿姨和Allison姐姐合影";
        this[1][i++] = "球球在Elena阿姨家过第一次感恩节";
        this[1][i++] = "球球最喜欢的睡姿";
        this[1][i++] = "练习趴着抬头";
        this[1][i++] = "球球不是很喜欢安慰奶嘴";
        this[1][i++] = "妈妈在给球球擦护肤霜";
        this[1][i++] = "打个盹";
        this[1][i++] = "笑了";
        this[1][i++] = "穿戴整齐准备出门";
        this[1][i++] = "和妈妈在一起";
        this[1][i++] = "球球两个月体检，有14磅（12斤7两）重";
        this[1][i++] = "和外公外婆在一起";
        this[1][i++] = "妈妈的乖小宝";
        this[1][i++] = "在摇椅上看狮子王玩具";
        this[1][i++] = "在音乐踢毯上玩得很开心";
        this[1][i++] = "球球现在能轻易就抬起头来";
        this[1][i++] = "茁壮成长";
        this[1][i++] = "家里停电，不影响球球午睡";
        this[1][i++] = "球球的护照照片";
        this[1][i++] = "又到趴着玩的时间";
        this[1][i++] = "见到小希姐姐和候子阿姨，James哥哥在一旁睡觉";
	this[1][i++] = "球球能自己坐着啦";
	this[1][i++] = "妈妈喂球球麦片粥辅食";
	this[1][i++] = "球球自己能乖乖地在一边看书";
	this[1][i++] = "长了两颗新牙";
	this[1][i++] = "小超人";
	this[1][i++] = "抱着小熊午睡";
	this[1][i++] = "在路上";
	this[1][i++] = "和妈妈在南卡罗来纳州美特尔海滩度假";
	this[1][i++] = "和妈妈在南卡罗来纳州美特尔海滩度假";
	this[1][i++] = "球球上"+daycare+"了";
	this[1][i++] = "第一天上"+daycare+"，妈妈好舍不得";
	this[1][i++] = "球球画的第一幅画";
	this[1][i++] = "在"+daycare+"骑小马，Mfuta老师抱着还是有点害怕";
	this[1][i++] = "嚼磨牙饼干";
    }

    for (var i=0;i<this[0].length;i++){
        this[1][i] = this[1][i]+getdate(this[0][i]);
    }  
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->