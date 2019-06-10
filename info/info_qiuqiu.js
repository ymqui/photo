﻿<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "";
var title      = (["Nathan's Photos","球球的照片"])[cn_ind];
var dir        = maindir+"pics/qiuqiu/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();
var pagelist   = [["1806myrtlebeach","6/2018 Myrtle Beach, South Carolina","6/2018 南卡罗来纳州美特尔海滩度假"],
 		  ["1810parade","10/2018 Goddard School Halloween Parade","10/2018 戈达德托儿所万圣节游行"],
                  ["1812costarica","12/2018 Trip to Costa Rica","12/2018 游哥斯达黎加"],
		  ["1904dcmuseum","4/2019 Visiting the Smithonian Museums","4/2019 华盛顿特区参观博物馆"],
                  ["1905mexico","5/2019 Vacationing in Mexico","5/2019 墨西哥度假"],
                  ["1906minitrain","6/2019 Miniature Train","6/2019 坐小火车"],
                  ["2018goddard","2018-2019 Nathan at Goddard School","2018-2019年球球在戈达德托儿所的照片"]];
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
    daycare       = pagelink("2018goddard",(["daycare","托儿所"])[cn_ind]);
    this[0][i]    = "20170128_001_OvulationTest";
    this[1][i++]  = (["Positive ovulation test","排卵测试显阳性"])[cn_ind];
    this[0][i]    = "20170215_002_PregnancyTest";
    this[1][i++]  = (["Positive pregnancy test","怀孕测试显阳性"])[cn_ind];
    this[0][i]    = "20170309_003_Sonogram";
    this[1][i++]  = (["Sonogram at MedStar Montgomery Medical Center. Our greatest joy to hear the baby's heartbeat for the first time","在蒙哥马利医疗中心做超声波检查。无比幸福地看到和听到胎儿的心跳"])[cn_ind];
    this[0][i]    = "20170602_007_AnatomySonogram";
    this[1][i++]  = (["Anatomy ultrasound at MedStar Montgomery Medical Center. The baby is healthy and strong","在蒙哥马利医疗中心做解剖结构超声波检查，胎儿很健康"])[cn_ind];
    this[0][i]    = "20170721_008_Sonogram";
    this[1][i++]  = (["Nathan's cute little face, MedStar Montgomery Medical Center","小宝宝的脸蛋，蒙哥马利医疗中心"])[cn_ind];
    this[0][i]    = "20170920_018";
    this[1][i++]  = (["Baby shower","同事们举办的"+pagelink("1709babyshower","准妈妈派对")])[cn_ind];
    this[0][i]    = "20171031_009_AfterBirth";
    this[1][i++]  = (["In the nursery after birth, 8 lb 12 oz, and 20 inches long","宝宝出生了，7斤9两重(8磅12盎司)，51厘米长"])[cn_ind];
    this[0][i]    = "20171101_014_WithMom";
    this[1][i++]  = (["Resting with mom in the hospital recovery room","和妈妈在医院恢复室一块休息"])[cn_ind];
    this[0][i]    = "20171107_016_HomeAsleep";
    this[1][i++]  = (["Asleep at home","在家里的婴儿摇椅上安睡"])[cn_ind];
    this[0][i]    = "20171110_017_HomeWithMom";
    this[1][i++]  = (["With mom at home","牵着妈妈的手指头"])[cn_ind];
    this[0][i]    = "20171119_018_HomeBassinet";
    this[1][i++]  = (["At home in the bassinet","美美地躺在家里的摇篮里"])[cn_ind];
    this[0][i]    = "20171123_020_WithElena&Allison";
    this[1][i++]  = (["With Auntie Elena and Allison","在Elena阿姨家和Elena阿姨和Allison姐姐合影"])[cn_ind];
    this[0][i]    = "20171123_024_Thanksgiving";
    this[1][i++]  = (["First Thanksgiving at Auntie Elena's home","球球在Elena阿姨家过第一次感恩节"])[cn_ind];
    this[0][i]    = "20171126_027_AsleepAtHome";
    this[1][i++]  = (["Favorite sleeping position","球球最喜欢的睡姿"])[cn_ind];
    this[0][i]    = "20171202_028_TummyTimeAtHome";
    this[1][i++]  = (["Tummy time","练习趴着抬头"])[cn_ind];
    this[0][i]    = "20171223_028_Pacifier";
    this[1][i++]  = (["Nathan is not very fond of the pacifier","球球不是很喜欢安慰奶嘴"])[cn_ind];
    this[0][i]    = "20171224_029_Cream";
    this[1][i++]  = (["Beauty time","妈妈在给球球擦护肤霜"])[cn_ind];
    this[0][i]    = "20171224_031_Nap";
    this[1][i++]  = (["Nap time","打个盹"])[cn_ind];
    this[0][i]    = "20171224_032_Smile";
    this[1][i++]  = (["Smiling","笑了"])[cn_ind];
    this[0][i]    = "20171224_033_ReadyToGoOut";
    this[1][i++]  = (["Ready to go out","穿戴整齐准备出门"])[cn_ind];
    this[0][i]    = "20171229_035_WithMom";
    this[1][i++]  = (["Mommy's little bundle of joy","和妈妈在一起"])[cn_ind];
    this[0][i]    = "20171229_036_2MonthCheckup";
    this[1][i++]  = (["Nathan weighs 14 lbs at his 2-month well-baby checkup","球球两个月体检，有14磅(12斤7两)重"])[cn_ind];
    this[0][i]    = "20171231_037_WithGrandparents";
    this[1][i++]  = (["With Grandma and Grandpa","和外公外婆在一起"])[cn_ind];
    this[0][i]    = "20180112";
    this[1][i++]  = (["Mama's boy","妈妈的乖小宝"])[cn_ind];
    this[0][i]    = "20180114_002_Bouncer";
    this[1][i++]  = (["Playing with the lion king","在摇椅上看狮子王玩具"])[cn_ind];
    this[0][i]    = "20180119_003_MusicKickMat";
    this[1][i++]  = (["Enjoying the musical kick mat","在音乐踢毯上玩得很开心"])[cn_ind];
    this[0][i]    = "20180203_004_TummyTime";
    this[1][i++]  = (["Nathan can easily hold his head up at tummy time now","球球现在能轻易就抬起头来"])[cn_ind];
    this[0][i]    = "20180210_005";
    makeface[j++] = i;
    this[1][i++]  = (["A very well-fed Nathan","茁壮成长"])[cn_ind];
    this[0][i]    = "20180302_009_Sleep";
    this[1][i++]  = (["Napping","家里停电，不影响球球午睡"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20180310_010_Passport1";
    this[1][i++]  = (["Passport photo","球球的护照照片"])[cn_ind];
    this[0][i]    = "20180324_011_TummyTime";
    this[1][i++]  = (["Tummy time on the musical kick mat","又到趴着玩的时间"])[cn_ind];
    this[0][i]    = "20180331_012_WithXiaoXi";
    this[1][i++]  = (["With sister Adele","见到小希姐姐和候子阿姨"])[cn_ind];
    this[0][i]    = "20180415_014_Sitting";
    this[1][i++]  = (["Nathan can sit independently now","球球能自己坐着啦"])[cn_ind];
    this[0][i]    = "20180429_016_SolidFood";
    this[1][i++]  = (["Nathan starts eating solid food now","妈妈喂球球麦片粥辅食"])[cn_ind];
    this[0][i]    = "20180521_017_HighChair";
    this[1][i++]  = (["Nathan enjoys reading any book with a lot of photos","球球自己能乖乖地在一边看书"])[cn_ind];
    this[0][i]    = "20180524_018_NewTeeth";
    this[1][i++]  = (["First two teeth","长了两颗新牙"])[cn_ind];
    this[0][i]    = "20180525_019_Superman";
    this[1][i++]  = (["Superman","小超人"])[cn_ind];
    this[0][i]    = "20180527_021_Nap";
    this[1][i++]  = (["Nap","抱着小熊午睡"])[cn_ind];
    this[0][i]    = "20180603_023_SCMyrtleBeach";
    this[1][i++]  = ([pagelink("1806myrtlebeach","Vacationing at Myrtle Beach, South Carolina"),"和妈妈在"+pagelink("1806myrtlebeach","南卡罗来纳州美特尔海滩度假")])[cn_ind];
    this[0][i]    = "20180618_028_GoddardSchool";
    this[1][i++]  = (["Nathan is going to the "+daycare,"球球上"+daycare+"了"])[cn_ind];
    this[0][i]    = "20180618_029_GoddardSchool";
    this[1][i++]  = (["First day at the "+daycare+", Mom was heartbroken","第一天上"+daycare+"，妈妈好舍不得"])[cn_ind];
    this[0][i]    = "20180620_030_Painting";
    this[1][i++]  = (["Nathan's first painting","球球画的第一幅画"])[cn_ind];
    this[0][i]    = "20180620_031_PonyRide";
    this[1][i++]  = (["Pony ride at the "+daycare+" with the help of Ms Mfuta","在"+daycare+"骑小马，Mfuta老师抱着还是有点害怕"])[cn_ind];
    this[0][i]    = "20180629_035_TeetherWafer";
    this[1][i++]  = (["Chewing on a teething wafer","嚼磨牙饼干"])[cn_ind];
    this[0][i]    = "20180731_Home";
    this[1][i++]  = (["Staying at home due to a low fever","因低烧没去上托儿所，在家里挺精神的"])[cn_ind];
    this[0][i]    = "20180803_WellBabyCheck";
    this[1][i++]  = (["Nathan's 9-month well baby check. He is 28.5-inch tall, and weighs 20 lbs","球球9个月体检，身高72.4厘米(28.5英寸)，体重9.07公斤(20磅)"])[cn_ind];
    this[0][i]    = "20180804_036_Walker";
    this[1][i++]  = (["Having fun in a baby walker","在婴儿学步车里玩得很开心"])[cn_ind];
    this[0][i]    = "20180825_041_DCBuildingMuseum";
    this[1][i++]  = (["Visiting the Building Museum in Washington DC","参观华盛顿特区的建筑博物馆"])[cn_ind];
    this[0][i]    = "20181007_047_ToyPlane";
    this[1][i++]  = (["New toy","新玩具"])[cn_ind];
    this[0][i]    = "20181007_048_StandingWithMom";
    this[1][i++]  = (["Standing with Mommy's help","妈妈扶着站起来"])[cn_ind];
    this[0][i]    = "20181031_051_WithMom";
    this[1][i++]  = (["Happy 1st Birthday!","一岁生日快乐！"])[cn_ind];
    this[0][i]    = "20181031_053_Parade";
    this[1][i++]  = ([pagelink("1810parade","Goddard School Halloween parade")+". Nathan is held by Ms. Wahrhaftig",pagelink("1810parade","戈达德托儿所万圣节游行")+"，球球由Wahrhaftig老师抱着"])[cn_ind];
    this[0][i]    = "20181125_060_Playpen";
    this[1][i++]  = (["Playing in the playpen","在围栏里独自玩耍"])[cn_ind];
    this[0][i]    = "20181127_AllergyTest";
    this[1][i++]  = (["Allergy test. Nathan is currently allergic to peanut and tree nuts","接受过敏原测试。球球目前对花生和各种坚果过敏"])[cn_ind];
    this[0][i]    = "20181204_016_ArenalObservatoryLodge";
    this[1][i++]  = (["Viewing the Arenal Volcano in the "+pagelink("1812costarica","trip to Costa Rica"),pagelink("1812costarica","游哥斯达黎加")+"的阿雷纳火山"])[cn_ind];
    this[0][i]    = "20181226_064_Walking";
    this[1][i++]  = (["Nathan can walk now","球球能自己走了"])[cn_ind];
    this[0][i]    = "20190220_Reading";
    this[1][i++]  = (["Reading with Mommy","和妈妈一起看书"])[cn_ind];
    this[0][i]    = "20190407_008";
    this[1][i++]  = (["Reading with James and Uncle He","和James哥哥一起坐在小何叔叔怀里看书"])[cn_ind];
    this[0][i]    = "20190407_009";
    this[1][i++]  = (["Playing with sister Adele","和小希姐姐一块拼积木"])[cn_ind];
    this[0][i]    = "20190420_022";
    this[1][i++]  = ([pagelink("1904dcmuseum","Visiting the Smithonian museums")+" in Washington DC","去"+pagelink("1904dcmuseum","华盛顿特区参观博物馆")])[cn_ind];
    this[0][i]    = "20190516_061_Zocalo";
    this[1][i++]  = (["Visiting the Zocalo in Mexico City during the "+pagelink("1905mexico","vacation in Mexico"),"在"+pagelink("1905mexico","墨西哥度假")+"期间逛墨西哥城中心的宪法广场"])[cn_ind];
    this[0][i]    = "20190608_032_MiniTrain";
    this[1][i++]  = ([pagelink("1906minitrain","Riding the miniature train")+" in Wheaton Regional Park","在"+pagelink("1906minitrain","惠顿公园坐小火车")])[cn_ind];
    this[0][i]    = "20190609_040";
    this[1][i++]  = (["Writing in the feeding diary","球球的喂养日记"])[cn_ind];

    for (var i=0;i<this[0].length;i++){
        this[1][i] = getdate(this[0][i],this[1][i]);
    }  
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->