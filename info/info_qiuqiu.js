<!--
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
var birthday   = true;
var strDate    = (new Date()).toISOString();
strDate        = strDate.substring(5,7)+"/"+strDate.substring(0,4);
if (strDate.substring(0,1)=="0") {strDate=strDate.substring(1);}
var pagelist   = [["1806myrtlebeach","6/2018 Myrtle Beach, South Carolina","6/2018 南卡罗来纳州美特尔海滩度假"],["1810parade","10/2018 Goddard School Halloween Parade","10/2018 戈达德托儿所万圣节游行"],
                  ["1812costarica","12/2018 Trip to Costa Rica","12/2018 游哥斯达黎加"],["1904dcmuseum","4/2019 Visiting the Smithonian Museums","4/2019 华盛顿特区参观博物馆"],
                  ["1905mexico","5/2019 Vacationing in Mexico","5/2019 墨西哥度假"],["1906minitrain","6/2019 Wheaton Miniature Train","6/2019 惠顿公园坐小火车"],
                  ["1906artechouse","6/2019 Infinite Space at DC Artechouse","6/2019 Artechouse无限空间展览"],["1908florida","8/2019 Vacationing in Florida","8/2019 佛罗里达州度假"],
                  ["1910parade","10/2019 Goddard School Halloween Parade","10/2019 戈达德托儿所万圣节游行"],["2001texas","1/2020 Vacationing in Texas","1/2020 德克萨斯州度假"],
                  ["2002trainshow","2/2020 Model Train Show","2/2020 看火车模型展"],["2018goddard","6/2018-10/2020 Goddard School","6/2018-10/2020 戈达德托儿所"],
                  ["2010fallfestival","10/2020 Goddard School Fall Festival","10/2020 戈达德托儿所金秋节"],["2107trainride","7/2021 Train Ride in Pennsylvania","7/2021 宾夕法尼亚州乘火车"],
 	 	  ["2107philly","7/2021 Visiting Aunt Houzi in Pennsylvania","7/2021 宾夕法尼亚州候子阿姨家玩"],["2108vacation","8/2021 Pittsburgh and Provincetown Vacation","8/2021 匹兹堡和普罗温斯敦度假"],
                  ["2110longwood&showall","10/2021 Visiting Longwood Gardens in Pennsylvania","10/2021 宾夕法尼亚州游长木花园"],["2205florida","4/2022 Vacationing in Florida","4/2022 佛罗里达州度假"],
                  ["2206graduation","6/2022 Pre-K Graduation","6/2022 学前班毕业典礼"],["2208arizona","8/2022 Vacationing in Arizona","8/2022 亚利桑那州度假"],
                  ["2208canada","8/2022 Trip to Canada","8/2022 加拿大之行"],["2209parade","9/2022 Gaithersburg Labor Day Parade","9/2022 盖瑟斯堡劳动节游行"],
                  ["2210farm","10/2022 Field Trip to Summers Farm","10/2022 Summers农场秋游"],["2212concert","12/2022 Winter Holiday Concert","12/2022 冬季节日音乐会"],
                  ["2212dino","12/2022 Florida Dinosaur World","12/2022 佛罗里达州恐龙世界"],
                  ["2020nist","11/2020-"+strDate+" NIST Child Care Center","11/2020-"+strDate+" NIST托儿所"]];
var thisyear   = (new Date()).getFullYear();
if (thisyear>2030) {pagelist = pagelist.concat([["university","2020-"+thisyear.toString()+" Visiting Universities","2020-"+thisyear.toString()+" 参观大学"]]);} 
if (thisyear>2026) {pagelist = pagelist.concat([["world","2018-"+thisyear.toString()+" Travel Around the World","2018-"+thisyear.toString()+" 环游世界"]]);} 

document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
    daycare       = pagelink("2018goddard",(["the Goddard School","戈达德托儿所"])[cn_ind]);
    daycare1      = pagelink("2018goddard",(["The Goddard School","戈达德托儿所"])[cn_ind]);
    if (showall) {
       this[0][i]    = "20170128_001_OvulationTest";
       this[1][i++]  = (["Positive ovulation test","排卵测试显阳性"])[cn_ind];
    }
    this[0][i]    = "20170215_002_PregnancyTest";
    this[1][i++]  = (["Positive pregnancy test","怀孕测试显阳性"])[cn_ind];
    this[0][i]    = "20170309_003_Sonogram";
    this[1][i++]  = (["Sonogram at MedStar Montgomery Medical Center. It's our greatest joy to hear the baby's heartbeat for the first time","在蒙哥马利医疗中心做超声波检查。无比幸福地看到和听到胎儿的心跳"])[cn_ind];
    this[0][i]    = "20170602_007_AnatomySonogram";
    this[1][i++]  = (["Anatomy ultrasound at MedStar Montgomery Medical Center. The baby is healthy and strong","在蒙哥马利医疗中心做解剖结构超声波检查，胎儿很健康"])[cn_ind];
    this[0][i]    = "20170721_008_Sonogram";
    this[1][i++]  = (["Nathan's cute little face, MedStar Montgomery Medical Center","小宝宝的脸蛋，蒙哥马利医疗中心"])[cn_ind];
    this[0][i]    = ["1709babyshower/1709babyshower_18","20170920"];
    this[1][i++]  = (["Baby shower","同事们举办的"+pagelink("1709babyshower","准妈妈派对")])[cn_ind];
    this[0][i]    = ["20171031_009_AfterBirth","20171031_011_AfterBirth"];
    this[1][i++]  = (["In the nursery after birth, 8 lb 12 oz, and 20 inches long","宝宝出生了，7斤9两重(8磅12盎司)，51厘米长"])[cn_ind];
    this[0][i]    = "20171101_014_WithMom";
    this[1][i++]  = (["Resting with mom in the hospital recovery room","和妈妈在医院恢复室一块休息"])[cn_ind];
    this[0][i]    = "20171107_016_HomeAsleep";
    this[1][i++]  = (["Asleep at home","在家里的婴儿摇椅上安睡"])[cn_ind];
    this[0][i]    = "20171110_017_HomeWithMom";
    this[1][i++]  = (["With mom at home","牵着妈妈的手指头"])[cn_ind];
    this[0][i]    = "20171123_020_WithElena&Allison";
    this[1][i++]  = (["With Auntie Yelena and Allison","在Yelena阿姨家和Yelena阿姨和Allison姐姐合影"])[cn_ind];
    this[0][i]    = "20171123_024_Thanksgiving";
    this[1][i++]  = (["First Thanksgiving at Auntie Yelena's home","球球在Yelena阿姨家过第一次感恩节"])[cn_ind];
    this[0][i]    = "20171126_027_AsleepAtHome";
    this[1][i++]  = (["Nathan's favorite sleeping position","球球最喜欢的睡姿"])[cn_ind];
    this[0][i]    = "20171202_028_TummyTimeAtHome";
    this[1][i++]  = (["Tummy time","练习趴着抬头"])[cn_ind];
    this[0][i]    = "20171223_028_Pacifier";
    this[1][i++]  = (["Nathan is not very fond of the pacifier now. He can't go to to sleep without it when he is older","球球现在不是很喜欢安慰奶嘴，以后睡觉离不了它"])[cn_ind];
    this[0][i]    = "20171224_029_Cream";
    this[1][i++]  = (["Beauty time","妈妈在给球球擦护肤霜"])[cn_ind];
    this[0][i]    = "20171224_031_Nap";
    this[1][i++]  = (["Nap time","打个盹"])[cn_ind];
    this[0][i]    = "20171229_035_WithMom";
    this[1][i++]  = (["Mommy's little bundle of joy","和妈妈在一起"])[cn_ind];
    this[0][i]    = "20171229_036_2MonthCheckup";
    this[1][i++]  = (["Nathan weighs 14 lbs at his 2-month well-baby checkup","球球两个月体检，有12斤7两(14磅)重"])[cn_ind];
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
    this[0][i]    = "20180210_007_Lana";
    this[1][i++]  = (["With Auntie Lana and Navami","Lana阿姨和Navami姐姐来看球球"])[cn_ind];
    this[0][i]    = "20180302_009_Sleep";
    this[1][i++]  = (["Napping","家里停电，不影响球球午睡"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20180310_010_Passport1";
    this[1][i++]  = (["Passport photo","球球的护照照片"])[cn_ind];
    this[0][i]    = "20180324_011_TummyTime";
    this[1][i++]  = (["Tummy time on the musical kick mat","又到趴着玩的时间"])[cn_ind];
    this[0][i]    = "20180331_012_WithXiaoXi";
    this[1][i++]  = (["With Adele","见到小希姐姐和候子阿姨"])[cn_ind];
    this[0][i]    = "20180415_014_Sitting";
    this[1][i++]  = (["Nathan can sit independently now","球球能自己坐着啦"])[cn_ind];
    this[0][i]    = "20180429_016_SolidFood";
    this[1][i++]  = (["Nathan starts eating solid food now","妈妈喂球球麦片粥辅食"])[cn_ind];
    this[0][i]    = "20180521_017_HighChair";
    this[1][i++]  = (["Nathan enjoys reading any book with a lot of photos","球球自己能乖乖地在一边看书"])[cn_ind];
    this[0][i]    = "20180524_018_NewTeeth";
    this[1][i++]  = (["First two teeth","长了两颗新牙"])[cn_ind];
    this[0][i]    = "20180525_019_Superman";
    this[1][i++]  = (["Superman","在地上飞的小超人"])[cn_ind];
    this[0][i]    = "20180527_021_Nap";
    this[1][i++]  = (["Nap","抱着小熊午睡"])[cn_ind];
    this[0][i]    = ["1806myrtlebeach/1806myrtlebeach_2","20180603"];
    this[1][i++]  = ([pagelink("1806myrtlebeach","Vacationing at Myrtle Beach, South Carolina"),"和妈妈在"+pagelink("1806myrtlebeach","南卡罗来纳州美特尔海滩度假")])[cn_ind];
    this[0][i]    = "20180618_028_GoddardSchool";
    this[1][i++]  = (["Nathan is going to "+daycare,"球球上"+daycare+"了"])[cn_ind];
    this[0][i]    = "20180618_029_GoddardSchool";
    this[1][i++]  = (["First day at "+daycare+", Mom was heartbroken","第一天上"+daycare+"，妈妈好舍不得"])[cn_ind];
    this[0][i]    = "20180620_030_Painting";
    this[1][i++]  = (["Nathan's first painting","球球画的第一幅画"])[cn_ind];
    this[0][i]    = "20180620_031_PonyRide";
    this[1][i++]  = (["Pony ride at "+daycare+" with the help of Ms Mfuta","在"+daycare+"骑小马，Mfuta老师抱着还是有点害怕"])[cn_ind];
    this[0][i]    = "20180628_Waterday";
    this[1][i++]  = (["Water day at "+daycare,daycare+"的玩水日"])[cn_ind];
    this[0][i]    = "20180629_035_TeetherWafer";
    this[1][i++]  = (["Chewing on a teething wafer","嚼磨牙饼干"])[cn_ind];
    this[0][i]    = "20180731_Home";
    this[1][i++]  = (["Staying at home due to a low fever","因低烧没去上托儿所，在家里挺精神的"])[cn_ind];
    this[0][i]    = "20180803_WellBabyCheck";
    this[1][i++]  = (["Nathan's 9-month well baby check. He is 28.5-inch tall, and weighs 20 lbs","球球9个月体检，身高72.4厘米(28.5英寸)，体重18斤1两(20磅)"])[cn_ind];
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
    this[0][i]    = ["1810parade/1810parade_3","20181031"];
    this[1][i++]  = ([pagelink("1810parade","Goddard School Halloween parade")+". Nathan is held by Ms. Wahrhaftig",pagelink("1810parade","戈达德托儿所万圣节游行")+"，球球由Wahrhaftig老师抱着"])[cn_ind];
    this[0][i]    = ["20181125_060_Playpen","20181125_061_Playpen"];
    this[1][i++]  = (["Playing in the playpen","在围栏里独自玩耍"])[cn_ind];
    this[0][i]    = "20181127_AllergyTest";
    this[1][i++]  = (["Allergy test. Nathan is currently allergic to peanut and tree nuts","接受过敏原测试。球球目前对花生和各种坚果过敏"])[cn_ind];
    this[0][i]    = ["1812costarica/1812costarica_14","20181204"];
    this[1][i++]  = (["Visiting the Arenal Volcano on the "+pagelink("1812costarica","trip to Costa Rica"),pagelink("1812costarica","游哥斯达黎加")+"的"+baikeurl("阿雷纳火山")])[cn_ind];
    this[0][i]    = "20181226_064_Walking";
    this[1][i++]  = (["Nathan can walk now","球球能自己走了"])[cn_ind];
    this[0][i]    = "20190220_Reading";
    this[1][i++]  = (["Reading with Mommy","和妈妈一起看书"])[cn_ind];
    this[0][i]    = "20190407_008";
    this[1][i++]  = (["Reading with James and Uncle He","和小凡哥哥一起听小何叔叔读书"])[cn_ind];
    this[0][i]    = "20190407_009";
    this[1][i++]  = (["Playing with Adele","和小希姐姐一块拼积木"])[cn_ind];
    this[0][i]    = ["1904dcmuseum/1904dcmuseum_8","1904dcmuseum/1904dcmuseum_9","20190420"];
    this[1][i++]  = ([pagelink("1904dcmuseum","Visiting the Smithonian museums")+" in Washington DC","去"+pagelink("1904dcmuseum","华盛顿特区参观博物馆")])[cn_ind];
    this[0][i]    = ["1905mexico/1905mexico_46","20190516"];
    this[1][i++]  = (["Visiting the Zocalo in Mexico City during the "+pagelink("1905mexico","vacation in Mexico"),"在"+pagelink("1905mexico","墨西哥度假")+"期间逛"+baikeurl("墨西哥宪法广场","墨西哥城中心的宪法广场")])[cn_ind];
    this[0][i]    = ["1906minitrain/1906minitrain_3","1906minitrain/1906minitrain_4","20190608"];
    this[1][i++]  = ([pagelink("1906minitrain","Riding the miniature train")+" in Wheaton Regional Park","在"+pagelink("1906minitrain","惠顿公园坐小火车")])[cn_ind];
    this[0][i]    = "20190609_040";
    this[1][i++]  = (["Writing in the feeding diary","翻看喂养日记"])[cn_ind];
    this[0][i]    = ["1906artechouse/1906artechouse_20","20190629"];
    this[1][i++]  = (["Visiting the "+pagelink("1906artechouse","Infinite Space at Artechouse")+" in Washington DC","在华盛顿特区的"+pagelink("1906artechouse","Artechouse参观标题为无限空间的展览")])[cn_ind];
    this[0][i]    = "20190704_055_DogParade";
    this[1][i++]  = (["Watching the dog parade in Baltimore","在巴尔的摩看狗狗游行"])[cn_ind];
    this[0][i]    = ["1908florida/1908florida_6","20190828"];
    this[1][i++]  = (["Visiting the Disney Magic Kingdom during the "+pagelink("1908florida","vacation in Florida"),"在"+pagelink("1908florida","佛罗里达度假")+"期间游迪士尼乐园的魔幻王国"])[cn_ind];
    this[0][i]    = ["1908florida/1908florida_10","1908florida/1908florida_21","20190831"];
    this[1][i++]  = (["Visiting Kennedy Space Center during the "+pagelink("1908florida","vacation in Florida"),"在"+pagelink("1908florida","佛罗里达度假")+"期间参观"+baikeurl("肯尼迪航天中心")])[cn_ind];
    this[0][i]    = "20191013_JuniorFirefighter";
    this[1][i++]  = (["Junior firefighter","小小消防员"])[cn_ind];
    this[0][i]    = ["1910parade/1910parade_10","20191031"];
    this[1][i++]  = pagelink("1910parade",(["Goddard School Halloween parade","戈达德托儿所万圣节游行"])[cn_ind]);
    this[0][i]    = "20191031_023";
    this[1][i++]  = (["Happy 2nd Birthday!","两岁生日快乐！"])[cn_ind];
    this[0][i]    = "20191225_061";
    this[1][i++]  = (["Opening the Christmas present","打开圣诞礼物"])[cn_ind];
    this[0][i]    = "20191225_067";
    this[1][i++]  = (["Playing with the train set","玩小火车"])[cn_ind];
    this[0][i]    = ["2001texas/2001texas_19","20200121"];
    this[1][i++]  = (["Visiting the gift shop of the Houston Downtown Aquarium during the "+pagelink("2001texas","vacation in Texas"),"在"+pagelink("2001texas","德克萨斯州度假")+"期间在休斯敦水族馆礼品店挑了一只小老虎"])[cn_ind];
    this[0][i]    = ["2002trainshow/2002trainshow_18","20200209"];
    this[1][i++]  = (["Riding the handcar in the "+pagelink("2002trainshow","model train show")+" at Dulles Expo Center in Virginia","在弗吉尼亚州杜勒斯展览中心"+pagelink("2002trainshow","火车模型展")+"上坐手动小火车"])[cn_ind];
    this[0][i]    = ["2018goddard/20200403_1","20200403"];
    this[1][i++]  = (["Taking Ms Bringas's class at "+daycare+" through distance learning from home due to the Coronavirus pandemic",daycare+"由于2019冠状病毒疫情在美国蔓延而暂时关门，球球在家远程上Bringas老师的课"])[cn_ind];
    this[0][i]    = "20200410_Reading";
    this[1][i++]  = (["Reading Clifford Goes to the Doctor","读<<大红狗克利福德去看医生>>"])[cn_ind];
    this[0][i]    = ["2018goddard/20200427_1","20200427"];
    this[1][i++]  = (["Teacher appreciation week assignment at "+daycare,daycare+"教师节给老师准备的感谢组句词语，球球的词是“我们”"])[cn_ind];
    this[0][i]    = "20200718_PottyTraining";
    this[1][i++]  = (["Potty training","便盆训练"])[cn_ind];
    this[0][i]    = "20200720_Mask";
    this[1][i++]  = (["My own dinosaur mask","我自己的恐龙口罩"])[cn_ind];
    this[0][i]    = "20200726_006_Toy";
    this[1][i++]  = (["New toy","新玩具"])[cn_ind];
    this[0][i]    = ["2010fallfestival/2010fallfestival_7","20201030"];
    this[1][i++]  = (["With Mommy at the "+pagelink("2010fallfestival","Goddard School Fall Festival"),"和妈妈在"+pagelink("2010fallfestival","戈达德托儿所金秋节")+"上"])[cn_ind];
    this[0][i]    = "20201031_014_BlackHillRP";
    this[1][i++]  = (["With Mommy at the Black Hill Regional Park","和妈妈在黑山公园"])[cn_ind];
    this[0][i]    = "20201031_018_BirthdayCake";
    this[1][i++]  = (["Happy 3rd Birthday!","三岁生日快乐！"])[cn_ind];
    daycare       = pagelink("2020nist",(["the NIST Child Care Center","NIST托儿所"])[cn_ind]);
    daycare1      = pagelink("2020nist",(["The NIST Child Care Center","NIST托儿所"])[cn_ind]);
    this[0][i]    = "20201102_020_NIST";
    this[1][i++]  = (["First day to "+daycare,"第一天上"+daycare])[cn_ind];
    this[0][i]    = "20201122_021_Chopstick";
    this[1][i++]  = (["Eating with chopsticks for the first time","第一次用筷子吃饭"])[cn_ind];
    this[0][i]    = "20201225_022_ChristmasGift";
    this[1][i++]  = (["Merry Christmas","圣诞快乐"])[cn_ind];
    this[0][i]    = "20210126_Weightlifting";
    this[1][i++]  = (["Weight lifting","举哑铃"])[cn_ind];
    this[0][i]    = "20210213_Target";
    this[1][i++]  = (["Buying a toy at Target using new year red packet money","用新年红包钱在Target商店买玩具"])[cn_ind];
    this[0][i]    = "20210306_006_JHUPHA";
    this[1][i++]  = (["Admiring the telescope in the Department of Physics and Astronomy at Johns Hopkins University","在"+baikeurl("约翰·霍普金斯大学")+"物理与天文学系看望远镜"])[cn_ind];
    this[0][i]    = "20210328_EatingNoodle";
    this[1][i++]  = (["Enjoying a bowl of noodle","吃面条"])[cn_ind];
    this[0][i]    = ["2107trainride/2107trainride_3","20210703"];
    this[1][i++]  = ([pagelink("2107trainride","Riding a steam train on the Strasburg Rail Road")+" in Pennsylvania","在宾夕法尼亚州斯特拉斯堡"+pagelink("2107trainride","乘坐蒸汽火车")])[cn_ind];
    this[0][i]    = ["2107philly/2107philly_3","20210704"];
    this[1][i++]  = (["Racing with James during "+pagelink("2107philly","the visit to Auntie Houzi's new home")+" in Pennsylvania",pagelink("2107philly","在宾夕法尼亚州候子阿姨家玩")+"时和小凡哥哥一起赛车"])[cn_ind];
    this[0][i]    = "20210711_WaterFountain";
    this[1][i++]  = (["Playing in the water fountain with Adele at Rockville Town Square","和小希姐姐在罗克维尔市广场的喷泉中玩水"])[cn_ind];
    this[0][i]    = "20210717_20401";
    this[1][i++]  = (["Saying goodbye to the old home at Germantown","和德国镇的老房子说再见"])[cn_ind];
    this[0][i]    = ["2107trainride/2107trainride_20","20210725"];
    this[1][i++]  = (["Playing in the playground in the "+pagelink("2107trainride","Strasburg Rail Station")+" in Pennsylvania","在宾夕法尼亚州"+pagelink("2107trainride","斯特拉斯堡火车站")+"的木头游乐火车里玩"])[cn_ind];
    this[0][i]    = ["2108vacation/2108vacation_8","20210807"];
    this[1][i++]  = (["Riding the Thomas train during the "+pagelink("2108vacation","vacation in Pittsburgh, PA and Provincetown, MA"),"在"+pagelink("2108vacation","匹兹堡和普罗温斯敦度假")+"时乘托马斯火车"])[cn_ind];
    this[0][i]    = ["2108vacation/2108vacation_29","2108vacation/2108vacation_25","2108vacation/2108vacation_26","20210808"];
    this[1][i++]  = (["Visiting the Pittsburgh Zoo and PPG Aquarium during the "+pagelink("2108vacation","vacation in Pittsburgh, PA and Provincetown, MA"),"在"+pagelink("2108vacation","匹兹堡和普罗温斯敦度假")+"时参观匹兹堡动物园和水族馆"])[cn_ind];
    this[0][i]    = ["2108vacation/2108vacation_34","20210808"];
    this[1][i++]  = (["Visiting the Fallingwater designed by Frank Lloyd Wright during the "+pagelink("2108vacation","vacation in Pittsburgh, PA and Provincetown, MA"),"在"+pagelink("2108vacation","匹兹堡和普罗温斯敦度假")+"时参观建筑师"+baikeurl("弗兰克·劳埃德·赖特/6409172","弗兰克·劳埃德·赖特")+"设计的"+baikeurl("流水别墅","落水山庄")])[cn_ind];
    this[0][i]    = "20210824_007_Family";
    this[1][i++]  = (["With Mommy and Daddy on the deck at home","和爸爸妈妈在家里的阳台上"])[cn_ind];
    this[0][i]    = "20210828_YelenaCrabSalad";
    this[1][i++]  = (["Making crab salad with Auntie Yelena","和Yelena阿姨一起做螃蟹沙拉"])[cn_ind];
    this[0][i]    = "20210911_Haircut";
    this[1][i++]  = (["Getting a haircut from Mommy","妈妈给球球剪头发"])[cn_ind];
    this[0][i]    = ["20211002_013_Bike","20211002_014_Bike"];
    this[1][i++]  = (["Riding bicycle with Mommy","和妈妈一起骑自行车"])[cn_ind];
    this[0][i]    = "20211007_016_NISTCCCFieldTrip";
    this[1][i++]  = (["Waiting to get on the school bus at "+daycare+" for a field trip to the Butler's Orchard","在"+daycare+"排队上校车去巴特勒果园"])[cn_ind];
    this[0][i]    = ["2110longwood/2110longwood_10","20211009"];
    this[1][i++]  = ([pagelink("2110longwood&showall","Visiting Longwood Gardens")+" in Pennsylvania","在宾夕法尼亚州"+pagelink("2110longwood&showall","游览长木花园")])[cn_ind];
    this[0][i]    = "20211031_021_WithMommy";
    this[1][i++]  = (["Happy 4th Birthday!","四岁生日快乐！"])[cn_ind];
    this[0][i]    = ["20211031_024_TrickorTreat","20211031_025_TrickorTreat","20211031_026_TrickorTreat"];
    this[1][i++]  = ([[(tmp1="Trick or treating with Mommy"),"Trick or treating",tmp1],[(tmp1=baikeurl("万圣节")+"和妈妈一起出去讨糖，球球只走了两家就回来了"),baikeurl("万圣节")+"出去讨糖，球球只走了两家就回来了",tmp1]])[cn_ind];
    this[0][i]    = "20211119_Amtrak";
    this[1][i++]  = (["Riding the Amtrak train to Philly","乘火车前往费城，在火车上和乘务员合影"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20211126_Mask";
    this[1][i++]  = (["Wearing a self-made mask","戴着自制的面具"])[cn_ind];
    this[0][i]    = ["20211225_Christmas_1","20211225_Christmas_2"];
    this[1][i++]  = (["Merry Christmas","圣诞快乐"])[cn_ind];
    this[0][i]    = "20211225_ShenandoahNP";
    this[1][i++]  = (["Visiting the Shenandoah National Park in Virginia on Christmas day","圣诞节和朋友们一起游弗吉尼亚州的"+baikeurl("谢南多厄国家公园")])[cn_ind];
    this[0][i]    = "20211226_LurayCavern";
    this[1][i++]  = (["Visiting the Luray Cavern in Virginia","在弗吉尼亚州的"+baikeurl("卢雷岩洞")+"跟妈妈和小希姐姐合影"])[cn_ind];
    this[0][i]    = "20220116_001_PaintingatHome";
    this[1][i++]  = (["Painting at home on a snowy Sunday","下雪天在家画画"])[cn_ind];
    this[0][i]    = "20220127_002_MorningVideo";
    this[1][i++]  = (["Morning video time","早餐前看会儿视频"])[cn_ind];
    this[0][i]    = "20220304_003_Reading";
    this[1][i++]  = (["Reading before dinner","晚饭前在沙发上看书"])[cn_ind];
    this[0][i]    = "20220403_005_Scooter";
    this[1][i++]  = (["Riding a scooter at Fallsmead Park","在家附近的Fallsmead公园骑滑板车"])[cn_ind];
    this[0][i]    = ["20220424_Playstix_2","20220424_Playstix_3"];
    this[1][i++]  = (["Building a train with playstix","拼搭火车"])[cn_ind];
    this[0][i]    = ["2205florida/2205florida_1","2205florida/2205florida_4","20220428"];
    this[1][i++]  = (["Taking the Amtrak auto train for the "+pagelink("2205florida","Florida vacation"),"乘坐美铁汽车火车前往"+pagelink("2205florida","佛罗里达度假")])[cn_ind];
    this[0][i]    = ["2205florida/2205florida_14","20220501"];
    this[1][i++]  = (["Visiting the southernmost point in Key West during the "+pagelink("2205florida","Florida vacation"),"在"+pagelink("2205florida","佛罗里达度假")+"时游西礁岛的美国大陆最南端"])[cn_ind];
    this[0][i]    = ["2206graduation/2206graduation_11","2206graduation/2206graduation_10","20220617"];
    this[1][i++]  = (["Receiving a diploma from Ms Abrial and Ms Penny at the "+pagelink("2206graduation","NIST Child Care Center Pre-K graduation ceremony"),"Abrial老师和Penny老师在"+pagelink("2206graduation","NIST托儿所学前班毕业典礼")+"上给球球颁发毕业证书"])[cn_ind];
    this[0][i]    = "20220620_WashingDish";
    this[1][i++]  = (["Helping Mommy and Daddy wash dishes","帮爸爸妈妈洗碗"])[cn_ind];
    this[0][i]    = ["20220620_BackyardPlay","20220620_BackyardPlay1"];
    this[1][i++]  = (["Playing in the backyard","在院子里玩火车"])[cn_ind];
    this[0][i]    = "20220709_Bowling";
    this[1][i++]  = (["Bowling with James and Adele","小何叔叔带着去打保龄球"])[cn_ind];
    this[0][i]    = ["2208arizona/2208arizona_3","20220807"];
    this[1][i++]  = (["Visiting the Arizona-Sonora Desert Musuem in Tucson during the "+pagelink("2208arizona","Arizona vacation"),"在"+pagelink("2208arizona","亚利桑那州度假")+"时游亚利桑那-索诺拉沙漠博物馆"])[cn_ind];
    this[0][i]    = ["2208canada/2208canada_2","20220826"];
    this[1][i++]  = (["Visiting the Niagara Falls on the "+pagelink("2208canada","trip to Canada"),"在"+pagelink("2208canada","加拿大之行")+"看尼亚加拉大瀑布"])[cn_ind];
    this[0][i]    = ["2208canada/2208canada_7","20220828"];
    this[1][i++]  = (["Enjoying a cup of ice cream at Country Pines Ice Cream Shop in Kane, Pennsylvania on the "+pagelink("2208canada","trip to Canada"),"从"+pagelink("2208canada","加拿大之行")+"回来时在宾夕法尼亚州的凯恩小镇吃冰淇淋"])[cn_ind];
    this[0][i]    = ["2209parade/2209parade_6","2209parade/2209parade_9","20220905"];
    this[1][i++]  = (["Watching the "+pagelink("2209parade","Gaithersburg Labor Day Parade"),"观看"+pagelink("2209parade","盖瑟斯堡劳动节游行")])[cn_ind];
    this[0][i]    = "20220910_ChineseSchool";
    this[1][i++]  = ([urllink(url=("https://youtube.com/shorts/C6CrxKNunU0?feature=share"),"Attending the Chinese school (YouTube Video)")+" in Rockville on Saturdays","星期六在罗克维尔市的"+urllink(url,"中文学校上学(YouTube视频)")])[cn_ind];
    this[0][i]    = "20221010_ApplePicking";
    this[1][i++]  = (["Picking apples at the Homestead Farm in Poolesville","在普尔斯维尔的Homestead农场摘苹果"])[cn_ind];
    this[0][i]    = ["2210farm/2210farm_1","2210farm/2210farm_13","20221020"];
    this[1][i++]  = ([daycare1+" "+pagelink("2210farm","field trip to Summers Farm"),"球球上的"+daycare+"大班去"+pagelink("2210farm","Summers农场秋游")])[cn_ind];
    this[0][i]    = "20221031_012_Birthday";
    this[1][i++]  = (["Happy 5th Birthday!","五岁生日快乐！"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20221213_ChanelBook";
    this[1][i++]  = (["Nathan's first picture book","球球写的第一本图画书<<香奈儿包>>：妈妈喜欢香奈儿包，你也可以有一个香奈儿包，妈妈说宝宝不能有香奈儿包"])[cn_ind];
    this[0][i]    = ["2212concert/2212concert_3","2212concert/2212concert_4","2212concert/2212concert_8","2212concert/2212concert_9","20221216"];
    this[1][i++]  = ([daycare1+" "+pagelink("2212concert","winter holiday concert"),daycare+pagelink("2212concert","冬季节日音乐会")])[cn_ind];
    this[0][i]    = ["20221218_017","20221218_019","20221218_020","20221218_021"];
    this[1][i++]  = (["Making a cake","做蛋糕"])[cn_ind];
    this[0][i]    = ["2212dino/2212dino_20","2212dino/2212dino_2","2212dino/2212dino_17","20221226"];
    this[1][i++]  = ([pagelink("2212dino","Visiting the Dinosaur World near Tampa, Florida"),pagelink("2212dino","参观佛罗里达州坦帕市附近的恐龙世界")])[cn_ind];
    this[0][i]    = ["20230107_001","20230107_002","20230107_003"];
    this[1][i++]  = (["Playdate with Annelise","朋友Annelise来家里玩"])[cn_ind];

    if (/birthday/.test(window.location.search.substring(1))) {
       var n_id = 0;
       for (var i=0;i<this[1].length;i++){
           if (this[1][i].indexOf((["Birthday!","岁生日快乐！"])[cn_ind])!=-1){
              this[0].splice(n_id,1,this[0][i]);
              this[1].splice(n_id++,1,this[1][i]);
           }
       }
       this[0].length = n_id;
       this[1].length = n_id;
    }

    adddate(this);
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->