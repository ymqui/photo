<!--
  //date
  var modiDate  = new Date("2016-09-23T16:00:00");
  var modirange = 10;  	//range within modiDate in days
  var modiindx  = [0];	//index of which modibird to be shown first
  
  //Chinese name: http://baike.niaolei.org.cn/
  //bird order:   http://www.worldbirdnames.org/ioc-lists/master-list-2/
  //country name: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3

  //location urls
  var locs       = {};
  locs["arbitr"] = ["","","",""];
  locs["akknpp"] = ["Katmai National Park & Preserve","Alaska","卡特迈国家公园","阿拉斯加州","http://www.nps.gov/katm/",baikeurl(3511940)];
  locs["cabeap"] = ["Beale Park","Bakersfield, California","贝克斯菲尔德市比尔公园","加利福尼亚州","http://www.bakersfieldcity.us/recreation/parks/beale.htm"];
  locs["cactnw"] = ["Cap Tourmente National Wildlife Area","Québec, Canada","杜门角国家野生动物保护区","加拿大魁北克省",wikiurl("Cap Tourmente National Wildlife Area")];
  locs["calddm"] = ["Le Domaine de Maizerets","Québec City, Québec, Canada","魁北克市Domaine de Maizerets公园","加拿大魁北克省",wikiurl("Maizerets")];
  locs["cambsp"] = ["Morro Bay State Park","California","莫罗湾州立公园","加利福尼亚州","http://www.parks.ca.gov/?page_id=594"];
  locs["cayokp"] = ["Yokuts Park","Bakersfield, California","贝克斯菲尔德市约库特公园","加利福尼亚州","http://www.bakersfieldcity.us/recreation/parks/yokuts.htm"];
  locs["cnbjjp"] = ["Jingshan Park","Beijing, China","北京景山公园","中国",wikiurl("Jingshan Park"),baikeurl(48065)];
  locs["cnbjsp"] = ["Summer Palace","Beijing, China","北京颐和园","中国",wikiurl("Summer Palace"),baikeurl(7379)];
  locs["cnbjth"] = ["Temple of Heaven","Beijing, China","北京天坛公园","中国",wikiurl("Temple of Heaven"),baikeurl(26291)];
  locs["cnjsxp"] = ["Xujiang Park","Jiangshan, Zhejiang, China","江山须江公园","中国浙江省",baikeurl(5295524)];
  locs["cnlydp"] = ["Denggao Park","Longyan, Fujian, China","龙岩登高公园","中国福建省","http://www.longyan.gov.cn/lypd/yw/csgy/index_1.htm"];
  locs["cnlynv"] = ["Neiban Village","Longyan, Fujian, China","龙岩龙门镇内坂村","中国福建省",baikeurl([145000,5878170])];
  locs["cnshbu"] = ["the Bund","Shanghai, China","上海外滩","中国",wikiurl("The Bund"),baikeurl([5181,8577636])];
  locs["cnxmjm"] = ["Jimei","Xiamen, Fujian, China","厦门集美","中国福建省",wikiurl("Jimei District"),baikeurl(1107414)];
  locs["ctciws"] = ["Cove Island Wildlife Sanctuary","Connecticut","科夫岛野生动物保护区","康涅狄格州","https://www.facebook.com/pages/Cove-Island-Wildlife-Sanctuary/156082077767515"];
  locs["debnwr"] = ["Bombay Hook National Wildlife Refuge","Delaware","庞贝‧虎克国家野生动物保护区","特拉华州","http://www.fws.gov/refuge/bombay_hook/"];
  locs["deinri"] = ["Indian River Inlet","Delaware","印第安河入海口","特拉华州",wikiurl("Indian River (Delaware)")];
  locs["flbinp"] = ["Biscayne National Park","Florida","比斯坎湾国家公园","佛罗里达州","http://www.nps.gov/bisc/",baikeurl(844205)];
  locs["flbppm"] = ["Black Point Park & Marina","Miami-Dade County, Florida","迈阿密-戴德郡黑角公园及码头","佛罗里达州","http://www.miamidade.gov/parks/black-point-marina.asp"];
  locs["flbrpp"] = ["Brian Piccolo Park","Fort Lauderdale, Florida","劳德代尔堡布莱恩皮克罗公园","佛罗里达州","http://www.broward.org/Parks/BrianPiccoloPark"];
  locs["flevnp"] = ["Everglades National Park","Florida","大沼泽地国家公园","佛罗里达州","http://www.nps.gov/ever/",baikeurl(1992929)];
  locs["flkeyw"] = ["Key West","Florida","西礁岛","佛罗里达州",wikiurl("Key West"),baikeurl(2153124)];
  locs["flmahp"] = ["Matheson Hammock Park","Miami, Florida","迈阿密马西森硬木公园","佛罗里达州","http://www.miamidade.gov/parks/matheson-hammock.asp"];
  locs["flmnwr"] = ["Merritt Island National Wildlife Refuge","Florida","美丽特岛国家野生动物保护区","佛罗里达州","http://www.fws.gov/refuge/Merritt_Island/"];
  locs["flplpr"] = ["Plantation Preserve","Broward County, Florida","布劳沃德郡种植园保留地","佛罗里达州","http://www.plantation.org/Golf/Plantation-Preserve/linear-park.html"];
  locs["macast"] = ["Castle Island","Boston, Massachusetts","波士顿城堡岛","马萨诸塞州",wikiurl("Castle Island (Massachusetts)")];
  locs["mahpsp"] = ["Halibut Point State Park","Rockport, Massachusetts","大比目鱼角州立公园","马萨诸塞州","http://www.mass.gov/eea/agencies/dcr/massparks/region-north/halibut-point-state-park.html"];
  locs["mapnwr"] = ["Parker River National Wildlife Refuge","Massachusetts","帕克河国家野生动物保护区","马萨诸塞州","http://www.fws.gov/refuge/parker_river/"];
  locs["mdasns"] = ["Assateague Island National Seashore","Maryland","阿萨蒂格岛国家海岸","马里兰州","http://www.nps.gov/asis/index.htm",baikeurl(1910881)];
  locs["mdbhrp"] = ["Black Hill Regional Park","Maryland","黑山公园","马里兰州","http://www.montgomeryparks.org/facilities/regional_parks/blackhill/"];
  locs["mdbmnt"] = ["Blue Mash Nature Trail","Maryland","蓝沼自然小径","马里兰州","http://www.montgomeryparks.org/PPSD/ParkTrails/trails_MAPS/blue_mash.shtm"];
  locs["mdbnwr"] = ["Blackwater National Wildlife Refuge","Maryland","黑水国家野生动物保护区","马里兰州","http://www.fws.gov/refuge/Blackwater/"];
  locs["mdbrgd"] = ["Brookside Garden","Wheaton, Maryland","惠顿溪边花园","马里兰州","http://www.montgomeryparks.org/brookside/"];
  locs["mdcapc"] = ["Congressional Polo Club","Poolesville, Maryland","普尔斯维尔镇国会马球俱乐部","马里兰州","http://www.congressionalpolo.com/"];
  locs["mdcocn"] = ["C&O Canal","Maryland","C&O运河","马里兰州","http://www.nps.gov/choh/",baikeurl(1767125)];
  locs["mdcopl"] = ["C&O Canal"," at Pennyfield Lock","Maryland","C&O运河","彭尼菲尔德闸","马里兰州","http://www.nps.gov/choh/",baikeurl(1767125)];
  locs["mdcorl"] = ["C&O Canal"," at Riley's Lock","Maryland","C&O运河","莱利闸","马里兰州","http://www.nps.gov/choh/",baikeurl(1767125)];
  locs["mdcovl"] = ["C&O Canal"," at Violettes Lock","Maryland","C&O运河","紫罗兰闸","马里兰州","http://www.nps.gov/choh/",baikeurl(1767125)];
  locs["mdcrvp"] = ["Cromwell Valley Park","Baltimore, Maryland","巴尔的摩克伦威尔溪谷公园","马里兰州","http://www.cromwellvalleypark.org/"];
  locs["mdenwr"] = ["Eastern Neck National Wildlife Refuge","Maryland","东内克国家野生动物保护区","马里兰州","http://www.fws.gov/refuge/eastern_neck/"];
  locs["mdftmh"] = ["Fort McHenry","Maryland","麦克亨利堡","马里兰州","http://www.nps.gov/fomc/",baikeurl(1438782)];
  locs["mdgerm"] = ["Germantown","Maryland","德国镇","马里兰州",wikiurl("Germantown, Maryland")];
  locs["mdgrpt"] = ["Greenbury Point","Annapolis, Maryland","安纳波利斯格林伯瑞角","马里兰州","http://www.fws.gov/chesapeakebay/greenpt.html"];
  locs["mdhadg"] = ["Havre de Grace","Maryland","哈佛德格雷斯","马里兰州",wikiurl("Havre de Grace, Maryland")];
  locs["mdinhb"] = ["Baltimore Harbor","Maryland","巴尔的摩港","马里兰州",wikiurl("Inner Harbor"),baikeurl(48720)];
  locs["mdlbwt"] = ["Little Bennett Regional Park"," at Wilson Mill Trail","Maryland","小班尼特公园","威尔逊锯木坊小道","马里兰州","http://www.montgomeryparks.org/facilities/regional_parks/little_bennett/"];
  locs["mdlily"] = ["Lilypons Water Garden","Maryland","莉丽庞斯水上花园","马里兰州","http://www.lilypons.com/"];
  locs["mdloch"] = ["Loch Raven Reservoir","Maryland","渡鸦湖水库","马里兰州",wikiurl("Loch Raven Reservoir")];
  locs["mdmwma"] = ["McKee-Beshers Wildlife Management Area","Maryland","McKee-Beshers野生动物管理区","马里兰州","http://dnr2.maryland.gov/wildlife/Pages/publiclands/central/mckeebeshers.aspx"];
  locs["mdnpsp"] = ["North Point State Park","Maryland","北点州立公园","马里兰州","http://dnr2.maryland.gov/publiclands/Pages/central/northpoint.aspx"];
  locs["mdocci"] = ["Ocean City","Maryland","大洋城","马里兰州",wikiurl("Ocean City, Maryland"),baikeurl([2940549,13831356])];
  locs["mdolan"] = ["Oland Road","Frederick County, Maryland","欧蓝德路","弗雷德里克郡，马里兰州"];
  locs["mdpvsp"] = ["Patapsco Valley State Park"," at Henryton","Maryland","帕塔普斯科河谷州立公园","亨利顿一带","马里兰州","http://dnr2.maryland.gov/publiclands/Pages/central/patapsco.aspx"];
  locs["mdsclr"] = ["Scotts Landing Road","Worcester County, Maryland","斯科茨码头路","伍斯特郡，马里兰州","http://www.mdbirds.org/sites/mdsites/shorebirds/shorebirds.html#Worcester"];
  locs["mdswhf"] = ["Swan Harbor Farm","Havre de Grace, Maryland","哈佛德格雷斯天鹅港农场","马里兰州","http://www.harfordcountymd.gov/parks_rec/Parks.cfm?ParkID=65"];
  locs["mdtrlr"] = ["Truitts Landing Road","Worcester County, Maryland","特鲁伊特码头路","伍斯特郡，马里兰州","http://www.mdbirds.org/sites/mdsites/shorebirds/shorebirds.html#Worcester"];
  locs["meeeri"] = ["Eastern Egg Rock Island","Maine","东蛋岩岛","缅因州","http://www.mainebirdingtrail.com/Eastern%20Egg%20Rock.htm"];
  locs["melocp"] = ["Lobster Cove Preserve","Boothbay Harbor, Maine","布斯贝港龙虾湾保护区","缅因州","http://www.bbrlt.org/documents/LobsterCoveGuide.pdf"];
  locs["menewh"] = ["New Harbor","Maine","新港","缅因州",wikiurl("New Harbor, Maine")];
  locs["mimack"] = ["Mackinac Island","Michigan","麦基诺岛","密西根州",wikiurl("Mackinac Island"),baikeurl(1929320)]; 
  locs["miprnl"] = ["Painted Rocks National Lakeshore","Michigan","画石国家湖岸","密西根州","http://www.nps.gov/piro/index.htm"];
  locs["ncbpkw"] = ["Blue Ridge Parkway","North Carolina","蓝岭公路","北卡罗来纳州","https://www.nps.gov/blri/",baikeurl(637331)]; 
  locs["nccrsp"] = ["Chimney Rock State Park","North Carolina","烟囱岩州立公园","北卡罗来纳州","http://www.chimneyrockpark.com/"];  
  locs["ncoutb"] = ["Outer Banks","North Carolina","外滩","北卡罗来纳州",wikiurl("Outer Banks"),baikeurl(1840917)];
  locs["njblsp"] = ["Barnegat Lighthouse State Park","New Jersey","巴尼加特灯塔州立公园","新泽西州","http://www.state.nj.us/dep/parksandforests/parks/barnlig.html"];
  locs["njcmsp"] = ["Cape May Point State Park","New Jersey","五月岬州立公园","新泽西州","http://www.state.nj.us/dep/parksandforests/parks/capemay.html"];
  locs["njhwma"] = ["Higbee Beach Wildlife Management Area","New Jersey","希格比海滩野生动物管理区","新泽西州","http://www.njfishandwildlife.com/ensp/higbee.htm"];
  locs["njscmm"] = ["South Cape May Meadows","New Jersey","南五月岬草原","新泽西州","http://www.nature.org/ourinitiatives/regions/northamerica/unitedstates/newjersey/placesweprotect/south-cape-may-meadows.xml"];
  locs["njweti"] = ["The Wetlands Institute","Stone Harbor, New Jersey","石港湿地研究所","新泽西州","http://wetlandsinstitute.org/"];
  locs["nvdnwr"] = ["Desert National Wildlife Range","Corn Creek, Nevada","玉米溪沙漠国家野生动物保护区","内华达州","http://www.fws.gov/refuge/desert/"];
  locs["nyjbsp"] = ["Jones Beach State Park","New York","琼斯海滩州立公园","纽约州","http://nysparks.com/parks/JonesBeach/"];
  locs["nyjbwr"] = ["Jamaica Bay Wildlife Refuge","New York","牙买加湾野生动物保护区","纽约州","http://www.nyharborparks.org/visit/jaba.html"];
  locs["nymnwr"] = ["Montezuma National Wildlife Refuge","New York","蒙特祖玛国家野生动物保护区","纽约州","http://www.fws.gov/refuge/montezuma/"];
  locs["orcanb"] = ["Cannon Beach","Oregon","卡农海滩","俄勒冈州","http://www.ci.cannon-beach.or.us/~Natural/HRAP/hrap-habitat.html"];
  locs["orhayd"] = ["Hayden Island","Portland, Oregon","波特兰海登岛","俄勒冈州",wikiurl("Hayden Island, Portland, Oregon")];
  locs["prbaya"] = ["Bayamón","Puerto Rico","巴亚蒙","波多黎各",wikiurl("Bayamón, Puerto Rico")];
  locs["prceci"] = ["Ceiba Country Inn","Puerto Rico","西巴乡村客栈","波多黎各","http://www.ceibacountryinn.com/"];
  locs["prcnwr"] = ["Cabo Rojo National Wildlife Refuge","Puerto Rico","卡沃罗霍国家野生动物保护区","波多黎各","http://www.fws.gov/caribbean/refuges/Caborojo/"];
  locs["prmaya"] = ["Mayagüez","Puerto Rico","马亚圭斯","波多黎各",wikiurl("Mayagüez, Puerto Rico"),baikeurl(298448)];
  locs["prosan"] = ["Old San Juan","Puerto Rico","圣胡安老城","波多黎各",wikiurl("Old San Juan, Puerto Rico")];
  locs["prponc"] = ["Ponce","Puerto Rico","蓬塞","波多黎各",wikiurl("Ponce, Puerto Rico"),baikeurl(879679)];
  locs["prrinc"] = ["Rincón","Puerto Rico","林孔","波多黎各",wikiurl("Rincón, Puerto Rico")];
  locs["prsanj"] = ["San Juan","Puerto Rico","圣胡安","波多黎各",wikiurl("San Juan, Puerto Rico")];
  locs["scbwma"] = ["Bear Island Wildlife Management Area","South Carolina","熊岛野生动物管理区","南卡罗来纳州","https://www.dnr.sc.gov/mlands/managedland?p_id=56"];  
  locs["sccnwr"] = ["Carolina Sandhills National Wildlife Refuge","South Carolina","卡罗来纳沙丘国家野生动物保护区","南卡罗来纳州","http://www.fws.gov/refuge/Carolina_Sandhills/"];  
  locs["schbsp"] = ["Huntington Beach State Park","South Carolina","亨廷顿海滩州立公园","南卡罗来纳州","http://southcarolinaparks.com/huntingtonbeach/"];
  locs["scllmp"] = ["Morse Park","Lake Lure, North Carolina","路尔湖摩士公园","北卡罗来纳州","http://www.townoflakelure.com/morse-park.php"];
  locs["scpatp"] = ["Patriots Point","Charleston, South Carolina","查尔斯顿爱国者海角","南卡罗来纳州","http://www.crbo.net/Charleston.html"];
  locs["scpitt"] = ["Pitt Street Causeway","Charleston, South Carolina","查尔斯顿皮特街堤道","南卡罗来纳州","http://www.crbo.net/Charleston.html"];
  locs["scsnwr"] = ["Savannah National Wildlife Refuge","South Carolina","萨凡纳国家野生动物保护区","南卡罗来纳州","http://www.fws.gov/refuge/savannah/"];
  locs["txbbnp"] = ["Big Bend National Park","Texas","大弯国家公园","德克萨斯州","http://www.nps.gov/bibe/",baikeurl(553962)];
  locs["vacnwr"] = ["Chincoteague National Wildlife Refuge","Virginia","钦科蒂格国家野生动物保护区","弗吉尼亚州","http://www.fws.gov/refuge/chincoteague/"];
  locs["vahump"] = ["Huntley Meadows Park","Virginia","亨特利湿地公园","弗吉尼亚州","http://www.fairfaxcounty.gov/parks/huntley-meadows-park/"];
  locs["vajopp"] = ["Jones Point Park","Virginia","琼斯点公园","弗吉尼亚州","http://www.nps.gov/gwmp/planyourvisit/jonespoint.htm"];
  locs["vtwwma"] = ["Wenlock Wildlife Management Area","Vermont","文洛克野生动物管理区","佛蒙特州","http://www.vtfishandwildlife.com/UserFiles/Servers/Server_73079/File/Where%20to%20Hunt/St.%20Johnsbury%20District/Wenlock%20WMA.pdf"];  
  locs["wacape"] = ["Cape Flattery","Neah Bay, Washington","尼亚湾夫拉特角","华盛顿州","http://makah.com/activities/cape-flattery-trail/"];
  locs["wahobb"] = ["Hobuck Beach","Neah Bay, Washington","尼亚湾Hobuck海滩","华盛顿州","http://makah.com/activities/beaches/hobuck/"];
  locs["waolnp"] = ["Olympic National Park","Washington","奥林匹克国家公园","华盛顿州","http://www.nps.gov/olym/",baikeurl(199340)];

  //table for Chinese pinyin, string.localeCompare() does not work in all browsers
  var py = {额:"e2", 拿:"na2",大:"da4",栖:"qi1",细:"xi4",绿:"lv4",夜:"ye4",纳:"na4",蚁:"yi3",鸸:"er2", 斗:"dou4",树:"shu4",茶:"cha2",林:"lin2",白:"bai2",赤:"chi4",肉:"rou4",竹:"zhu2",寒:"han2",台:"tai2", 环:"huan2",镰:"lian2",平:"ping2",横:"heng2",苍:"cang1",娇:"jiao1",寿:"shou4",孔:"kong3", 胜:"sheng4",
            鹅:"e2", 艾:"ai4",鸡:"ji1",狐:"hu2",曲:"qu1",牙:"ya2",稀:"xi1",菊:"ju2",利:"li4",米:"mi3", 海:"hai3",喉:"hou2",太:"tai4",沙:"sha1",雉:"zhi4",珠:"zhu1",齿:"chi3",麦:"mai4",织:"zhi1",兰:"lan2", 东:"dong1",鸻:"heng2",尖:"jian1",杓:"shao2",虹:"hong2",连:"lian2",蒙:"meng2",剪:"jian3" ,椋:"liang2",
            鹗:"e4", 鷉:"ti1",巨:"ju4",克:"ke4",鹭:"lu4",唧:"ji1",麻:"ma2",叶:"ye4",苦:"ku3",特:"te4", 䴓:"shi1",鹫:"jiu4",华:"hua2",灰:"hui1",叉:"cha1",粉:"fen3",三:"san1",牛:"niu2",本:"ben3",新:"xin1", 脸:"lian3",州:"zhou1",鹰:"ying1",阳:"yang2",鸿:"hong2",方:"fang1",蕉:"jiao1",声:"sheng1",橙:"cheng2",
            恶:"e4", 紫:"zi3",羽:"yu3",蛎:"li4",鹬:"yu4",矶:"ji1",丽:"li4",笛:"di2",和:"he2",金:"jin1",丘:"qiu1",丹:"dan1",蓑:"suo1",厚:"hou4",半:"ban4",云:"yun2",侏:"zhu1",靴:"xue3",直:"zhi2",麝:"she4", 田:"tian2",青:"qing1",领:"ling3",鸟:"niao3",震:"zhen4",翘:"qiao4",端:"duan1",冢:"zhong3",相:"xiang1",
            阿:"a1", 尔:"er3",地:"di4",崖:"ya2",鸦:"ya1",鸽:"ge1",耳:"er3",卡:"ka3",密:"mi4",伞:"san3",滨:"bin1",噪:"zao4",趾:"zhi3",鸠:"jiu1",威:"wei1",朱:"zhu1",裸:"luo3",翡:"fei3",池:"chi2",球:"qiu2", 鸣:"ming2",冰:"bing1",鹦:"ying1",皱:"zhou4",绒:"rong2",沼:"zhao3",星:"xing1",船:"chuan2",胸:"xiong1",
            峨:"e2", 雨:"yu3",各:"ge4",颏:"ke1",木:"mu4",哥:"ge1",渡:"du4",扑:"pu1",哀:"ai1",鸱:"chi1",翠:"cui4",狗:"gou3",汁:"zhi1",鴷:"lie4",游:"you2",淡:"dan4",南:"nan2",帆:"fan1",葵:"kui2",饰:"shi4", 园:"yuan2",丁:"ding1",鹪:"jiao1",棉:"mian2",鹩:"liao2",蜂:"feng1",芒:"mang2",塍:"cheng2",光:"guang1",
            伯:"bo2",暗:"an4",丝:"si1",蜡:"la4",鹀:"wu2",犀:"xi1",乐:"le4",欧:"ou1",马:"ma3",带:"dai4",钩:"gou1",呆:"dai1",劳:"lao2",百:"bai3",鹎:"bei1",罗:"luo2",绣:"xiu4",鹛:"mei2",维:"wei2",雷:"lei2", 圆:"yuan2",脚:"jiao3",嘲:"chao2",丛:"cong2",缝:"feng2",董:"dong3",藏:"zang4",长:"chang2",双:"shuang1",
            鸲:"qu2",鹡:"ji2",圃:"pu3",布:"bu4",河:"he2",鵖:"bi1",斯:"si1",鸬:"lu2",苏:"su1",铁:"tie3",玫:"mei2",昏:"hun1",弯:"wan1",腿:"tui3",花:"hua1",灶:"zao4",文:"wen2",琉:"liu2",穗:"sui4",支:"zhi1", 窜:"cuan4",鸰:"ling2",唐:"tang2",剑:"jian4",松:"song1",枞:"cong1",爪:"zhao3",鵟:"kuang2",
            鹉:"wu3",热:"re4",勒:"le4",鹕:"hu2",霸:"ba4",拉:"la1",鹚:"ci2",波:"bo1",簇:"cu4",蚋:"rui4",鸵:"tuo2",贼:"zei2",反:"fan3",信:"xin4",纹:"wen2",黑:"hei1",燕:"yan4",岩:"yan2",非:"fei1",赛:"sai4", 潜:"qian2",鳽:"jian1",靛:"dian4",扁:"bian3",勺:"shao2",囱:"cong1",灵:"ling2",橡:"xiang4",
            鹈:"ti2",漠:"mo4",姬:"ji1",刺:"ci4",吉:"ji2",骨:"gu3",鴗:"li4",鼻:"bi2",吸:"xi1",蛇:"she2",戴:"dai4",咬:"yao3",巾:"jin1",加:"jia1",秋:"qiu1",费:"fei4",食:"shi2",疣:"you2",瑞:"rui4",钝:"dun4", 榛:"zhen1",洲:"zhou1",叫:"jiao4",纯:"chun2",针:"zhen1",鹲:"meng2",卷:"juan3",虫:"chong2",
            褐:"he4",普:"pu3",弗:"fu2",尼:"ni2",鸊:"pi4",西:"xi1",八:"ba1",旅:"lv3",籽:"zi3",北:"bei3",毛:"mao2",鹞:"yao4",烟:"yan1",果:"guo3",家:"jia1",柳:"liu3",胁:"xie2",隐:"yin3",高:"gao1",瘤:"liu2", 小:"xiao3",神:"shen2",角:"jiao3",短:"duan3",铜:"tong2",蓬:"peng2",漂:"piao1",疆:"jiang1",
            浮:"fu2",黎:"li2",企:"qi3",达:"da2",鵙:"ju2",佛:"fo2",鹤:"he4",琵:"pi2",及:"ji2",火:"huo3",石:"shi2",印:"yin4",螺:"luo2",苇:"wei3",锈:"xiu4",内:"nei4",恺:"kai3",委:"wei3",岛:"dao3",鸺:"xiu1", 冠:"guan1",山:"shan1",鹋:"miao2",水:"shui3",宽:"kuan1",跷:"qiao1",䳍:"gong1",强:"qiang2",
            鸭:"ya1",色:"se4",鹱:"hu4",蹼:"pu3",鸥:"ou1",博:"bo2",里:"li3",喜:"xi3",埃:"ai1",眉:"mei2",主:"zhu3",多:"duo1",刀:"dao1",翅:"chi4",嘴:"zui3",鹊:"que4",氏:"shi4",雪:"xue3",鹠:"liu2",辉:"hui1", 垂:"chui2",鸯:"yang1",鹳:"guan4",鸳:"yuan1",王:"wang2",鹇:"xian2",鸢:"yuan1",城:"cheng2",
            乌:"wu1",披:"pi1",栗:"li4",亚:"ya4",安:"an1",鱼:"yu2",榈:"lv2",鹂:"li2",蜜:"mi4",番:"fan1",桂:"gui4",买:"mai3",鳾:"shi1",森:"sen1",瓣:"ban4",隼:"sun3",矛:"mao2",眼:"yan3",甘:"gan1",逊:"xun4", 雕:"diao1",锥:"zhui1",顶:"ding3",鹟:"weng1",鸫:"dong1",秧:"yang1",冕:"mian3",川:"chuan1",
            腹:"fu4",巴:"ba1",比:"bi3",库:"ku4",极:"ji2",科:"ke1",歌:"ge1",拟:"ni3",虎:"hu3",头:"tou2",颊:"jia2",伦:"lun2",油:"you2",走:"zou3",鼠:"shu3",喙:"hui4",画:"hua4",鬼:"gui3",赭:"zhe3",啄:"zhuo2",丑:"chou3",笑:"xiao4",原:"yuan2",风:"feng1",颈:"jing3",肛:"gang1",椒:"jiao1",黄:"huang2",
            䴘:"ti1",鳍:"qi2",日:"ri4",须:"xu1",第:"di4",棘:"ji2",杂:"za2",澳:"ao4",翼:"yi4",绯:"fei1",臀:"tun2",蚊:"wen2",智:"zhi4",橄:"gan3",掘:"jue2",榄:"lan3",蟹:"xie4",楔:"xie1",豆:"dou4",扇:"shan4",天:"tian1",点:"dian3",硬:"ying4",刚:"gang1",鹑:"chun2",灯:"deng1",棕:"zong1",中:"zhong1",      
            几:"ji3",壁:"bi4",帝:"di4",锡:"xi1",叭:"ba1",喇:"la3",法:"fa3",蟆:"ma2",凫:"fu2",薮:"sou3",索:"suo3",奎:"kui2",滑:"hua2",背:"bei4",穴:"xue2",流:"liu2",美:"mei3",鳞:"lin2",草:"cao3",膀:"bang3",滇:"dian1",枕:"zhen3",肩:"jian1",鹮:"huan2",猩:"xing1",舰:"jian4",交:"jiao1",眶:"kuang4",
            理:"li3",二:"er4",奇:"qi2",希:"xi1",思:"si1",距:"ju4",四:"si4",肃:"su4",叽:"ji1",蛛:"zhu1",旦:"dan4",痣:"zhi4",湾:"wan1",曙:"shu3",道:"dao4",稻:"dao4",黍:"shu3",煤:"mei2",盘:"pan2",纵:"zong4",仙:"xian1",锤:"chui2",远:"yuan3",翁:"weng1",冬:"dong1",蝇:"ying2",鲸:"jing1",蝗:"huang2",
            篱:"li2",咋:"za3",域:"yu4",岸:"an4",溪:"xi1",贺:"he4",塔:"ta3",足:"zu2",曳:"ye4",斑:"ban1",蓝:"lan2",军:"jun1",尾:"wei3",银:"yin2",雀:"que4",琴:"qin2",宝:"bao3",暴:"bao4",哲:"zhe2",红:"hong2",啸:"xiao4",洋:"yang2",仓:"cang1",莺:"ying1",凤:"feng4",鹃:"juan1",鞘:"qiao4",煌:"huang2",
            穆:"mu4",胡:"hu2",遗:"yi2",女:"nv3",泽:"ze2",古:"gu3",孤:"gu1",渔:"yu2",戈:"ge1",口:"kou3",彩:"cai3",盔:"kui1",翻:"fan1",腰:"yao1",鸨:"bao3",雁:"yan4",鹨:"liu4",月:"yue3",阔:"kuo4",翎:"ling2",通:"tong1",鸮:"xiao1",鲣:"jian1",猛:"meng3",旋:"xuan2",僧:"seng1",玄:"xuan2",响:"xiang3"};

  //table for country names
  var cnt_nm = {usa:["United States","美国"], chn:["China","中国"], blz:["Belize","伯利兹"], bra:["Brazil","巴西"], can:["Canada","加拿大"], cri:["Costa Rica","哥斯达黎加"], fra:["France","法国"], jpn:["Japan","日本"], per:["Peru","秘鲁"]};

  modirange  = modirange*3600*24*1000;  	//range within modiDate from days to milliseconds
  var modiTime = modiDate.getTime();
  var modiBird  = {name:[],cname:[]};
  var family_len = 8;
  var order  = ((window.location.search.substring(1)).match(/&order|^order/i)!=null);
  var birds  = [];         
  var j      = 0;

//birds[j++] = new myBird("   ","16-00-00T00:00","TINAMIDA","Great Tinamou","大䳍","Tinamus major",[m_id("")],["mdbhrp","9/2015"],10505128);
//birds[j++] = new myBird("   ","16-00-00T00:00","STRUTHIO","Common Ostrich","非洲鸵鸟","Struthio camelus",[m_id("")],["mdbhrp","9/2015"],279806);
//birds[j++] = new myBird("   ","16-00-00T00:00","STRUTHIO","Somali Ostrich","索马里鸵鸟","Struthio molybdophanes",[m_id("")],["mdbhrp","9/2015"],4925445);
//birds[j++] = new myBird("   ","16-00-00T00:00","RHEIDAE ","Greater Rhea","大美洲鸵","Rhea americana",[m_id("")],["mdbhrp","9/2015"],1155673);
//birds[j++] = new myBird("   ","16-00-00T00:00","CASUARII","Southern Cassowary","南方鹤鸵","Casuarius casuarius",[m_id("")],["mdbhrp","9/2015"],4945963);
//birds[j++] = new myBird("   ","16-00-00T00:00","DROMAIID","Emu","鸸鹋","Dromaius novaehollandiae",[m_id("")],["mdbhrp","9/2015"],4117);
//birds[j++] = new myBird("   ","16-00-00T00:00","APTERYGI","Southern Brown Kiwi","褐几维","Apteryx australis",[m_id("")],["mdbhrp","9/2015"],2816955);
//birds[j++] = new myBird("   ","16-00-00T00:00","ANHIMIDA","Horned Screamer","角叫鸭","Anhima cornuta",[m_id("")],["mdbhrp","9/2015"],660764);
//birds[j++] = new myBird("   ","16-00-00T00:00","ANSERANA","Magpie Goose","鹊雁","Anseranas semipalmata",[m_id("")],["mdbhrp","9/2015"],1176184);
//birds[j++] = new myBird("USA","16-00-00T00:00","ANATIDAE","Black-bellied Whistling-Duck","黑腹树鸭","Dendrocygna autumnalis",[m_id("")],["mdbhrp","9/2015"],3320156);
//birds[j++] = new myBird("USA","16-00-00T00:00","ANATIDAE","Fulvous Whistling-Duck","茶色树鸭","Dendrocygna bicolor",[m_id("")],["mdbhrp","9/2015"],1176074);
  birds[j++] = new myBird("USA","15-03-06T10:23","ANATIDAE","Greater White-fronted Goose","白额雁","Anser albifrons",[m_id("20150306_030_GreaterWhite-frontedGoose")],["mdcocn","3/2015","Surrounded by "+b_link("Canada Goose","Canada Geese"),"两只白额雁被"+b_link("加拿大黑雁")+"围绕"," at Cumberland Terminus","坎伯兰终点站"],32669);
  birds[j++] = new myBird("USA","05-11-26T14:29","ANATIDAE","Snow Goose","雪雁","Chen caerulescens",[p_id("0511assateague",28),p_id("1409fingerlake",14)],["vacnwr","11/2005","nymnwr","8/2014"],[233547,7115385]);
//birds[j++] = new myBird("USA","16-01-26T00:00","ANATIDAE","Ross's Goose","细嘴雁","Chen rossii",[m_id("")],["arbitr","1/2016","Lake Placid, Gaithersburg, Maryland","盖瑟斯堡普莱西德湖，马里兰州"],3203046);
  birds[j++] = new myBird("USA","15-03-07T15:31","ANATIDAE","Brant","黑雁","Branta bernicla",[p_id("1503barnegat",8)],["njblsp","3/2015","Atlantic form","大西洋亚种"],13353349);
  birds[j++] = new myBird("USA","15-12-31T08:48","ANATIDAE","Cackling Goose","小美洲黑雁","Branta hutchinsii",[m_id("20151231_140_CacklingGoose")],["arbitr","12/2015","2nd from front in the center (with the smallest bill), River Bend Park, Frederick, Maryland","中间第二只(嘴最小的)，弗雷德里克市河湾公园，马里兰州"],12989977);
  birds[j++] = new myBird("USA","05-10-30T08:00","ANATIDAE","Canada Goose","加拿大黑雁","Branta canadensis",[m_id("20150215_011_CanadaGoose"),p_id("1206brooksidebirding",6)],["mdloch","2/2015","mdbrgd","6/2012"],260841);
  birds[j++] = new myBird("USA","15-02-28T10:27","ANATIDAE","Mute Swan","疣鼻天鹅","Cygnus olor",[m_id("20150228_016_MuteSwan"),p_id("1505capemay",7)],["mdftmh","2/2015","njscmm","5/2015"],17767);
  birds[j++] = new myBird("USA","14-07-06T11:04","ANATIDAE","Trumpeter Swan","黑嘴天鹅","Cygnus buccinator",p_id("1512bhill",[10,11]),["mdbhrp","1/2015","mdbhrp","2/2015"],1413702); 
  birds[j++] = new myBird("USA","05-11-26T14:43","ANATIDAE","Tundra Swan","小天鹅","Cygnus columbianus",[p_id("0511assateague",29)],["vacnwr","11/2005"],[15662,5134479]);
  birds[j++] = new myBird("USA","16-06-10T09:01","ANATIDAE","Egyptian Goose","埃及雁","Alopochen aegyptiaca",[p_id("1606florida",10)],["flplpr","6/2016"],wikiurl("Egyptian goose"),1176180);
  birds[j++] = new myBird("USA","16-06-10T09:27","ANATIDAE","Muscovy Duck","疣鼻栖鸭","Cairina moschata",[p_id("1606florida",12)],["flplpr","6/2016"],797064);
  birds[j++] = new myBird("USA","06-04-17T17:21","ANATIDAE","Wood Duck","林鸳鸯","Aix sponsa",[m_id("20160514_055_WoodDuck(M)"),p_id("1512bhill",27),p_id("1409fingerlake",13)],["nyjbwr","5/2016","Male","mdbhrp","6/2015","Female and chicks","nymnwr","8/2014","Eclipse male"],1151211);
//birds[j++] = new myBird("   ","16-00-00T00:00","ANATIDAE","Mandarin Duck","鸳鸯","yuan1 yang1","Aix galericulata",["0504zoo/0504zoo__13"],["natzo","4/2005"],wikiurl("Mandarin Duck"),17774);
  birds[j++] = new myBird("USA","15-03-02T09:21","ANATIDAE","Gadwall","赤膀鸭","Anas strepera",m_id(["20151122_127_Gadwall","20150302_025_Gadwall(M)"]),["vahump","11/2015","Male left, female right","mdcovl","3/2015","Males"],94489);
  birds[j++] = new myBird("USA","16-03-13T09:30","ANATIDAE","Eurasian Wigeon","赤颈鸭","Anas penelope",[m_id("20160313_020_EurasianWigeon(M)")],["arbitr","3/2016","Male, Trout Run WWTP, Garrett County, Maryland","雄性，加勒特郡鳟鱼溪废水处理厂，马里兰州"],179821);
  birds[j++] = new myBird("USA","15-02-15T15:42","ANATIDAE","American Wigeon","绿眉鸭","Anas americana",[m_id("20150215_010_AmericanWigeon"),p_id("1512bhill",8)],["mdloch","2/2015","Males","mdbhrp","1/2015","Male"],413674);
  birds[j++] = new myBird("USA","15-02-17T12:51","ANATIDAE","American Black Duck","北美黑鸭","Anas rubripes",[p_id("1512bhill",20)],["mdbhrp","2/2015","Two males and a female (center)","两雄性和一雌性(中间)"],3175931);
  birds[j++] = new myBird("USA","06-02-20T14:57","ANATIDAE","Mallard","绿头鸭","Anas platyrhynchos",["2006cobirding/Mallard_20060220_004",p_id("1206brooksidebirding",21),m_id("20151025_111_Mallard")],["mdcocn","2/2006","Female left, male right","mdbrgd","6/2012","Eclipse male","mdbmnt","10/2015"],21604);
  birds[j++] = new myBird("USA","16-06-10T09:01","ANATIDAE","Mottled Duck","北美斑鸭","Anas fulvigula",[p_id("1606florida",9)],["flplpr","6/2016"],3152828);
  birds[j++] = new myBird("USA","07-04-29T10:46","ANATIDAE","Blue-winged Teal","蓝翅鸭","Anas discors",m_id(["20160410_036_Blue-wingedTeal","20150321_042_Blue-wingedTeal"]),["mdcorl","4/2016","Female left, male right","mdswhf","3/2015"],3143771);
//birds[j++] = new myBird("USA","16-00-00T00:00","ANATIDAE","Cinnamon Teal","桂红鸭","Anas cyanoptera",[m_id("")],["mdbhrp","9/2015"],3140934);
  birds[j++] = new myBird("USA","15-11-22T09:50","ANATIDAE","Green-winged Teal","美洲绿翅鸭","Anas crecca",[m_id("20151122_128_Green-wingedTeal(M)")],["vahump","11/2015","Males"],81835);
  birds[j++] = new myBird("USA","12-03-10T09:25","ANATIDAE","Northern Shoveler","琵嘴鸭","Anas clypeata",[m_id("20151122_129_NorthernShoveler"),m_id("20150228_019_NorthernShoveler"),p_id("1203blackwater",1)],["vahump","11/2015","Male left, females right","mdftmh","2/2015","mdbnwr","3/2012"],33050);
  birds[j++] = new myBird("USA","15-11-22T09:17","ANATIDAE","Northern Pintail","针尾鸭","Anas acuta",[m_id("20151122_125_NorthernPintail(M)")],["vahump","11/2015","Male"],179825);
  birds[j++] = new myBird("USA","15-01-19T10:52","ANATIDAE","Canvasback","帆背潜鸭","Aythya valisineria",p_id("1512bhill",[5,15]),["mdbhrp","1/2015","Male left, female right","mdbhrp","2/2015","Female"],179830);
  birds[j++] = new myBird("USA","15-02-15T15:34","ANATIDAE","Redhead","美洲潜鸭","Aythya americana",[m_id("20150215_008_Redhead")],["mdloch","2/2015","Male left, female right"],3208274);
  birds[j++] = new myBird("USA","15-02-15T15:58","ANATIDAE","Ring-necked Duck","环颈潜鸭","Aythya collaris",[m_id("20150215_012_Ring-neckedDuck"),p_id("1512bhill",17)],["mdloch","2/2015","Males","mdbhrp","2/2015","Males and a female (center)","雄性和一雌性(中间)"],3209526);
//birds[j++] = new myBird("USA","16-00-00T00:00","ANATIDAE","Tufted Duck","凤头潜鸭","Aythya fuligula",[m_id("")],["mdbhrp","9/2015"],wikiurl("Tufted duck"),32925);
//birds[j++] = new myBird("USA","16-00-00T00:00","ANATIDAE","Greater Scaup","斑背潜鸭","Aythya marila",[m_id("")],["mdbhrp","9/2015"],32982);
  birds[j++] = new myBird("USA","06-04-09T11:38","ANATIDAE","Lesser Scaup","小潜鸭","Aythya affinis",[p_id("1512bhill",16)],["mdbhrp","2/2015","Male"],3206646);
//birds[j++] = new myBird("USA","16-00-00T00:00","ANATIDAE","King Eider","王绒鸭","Somateria spectabilis",[m_id("")],["mdocci","11/2015","",""," Inlet","海口"],3496658);
  birds[j++] = new myBird("USA","15-05-24T14:43","ANATIDAE","Common Eider","欧绒鸭","Somateria mollissima",[p_id("1505puffin",12),p_id("1505puffin",11),p_id("1512boston",12)],["menewh","5/2015","Male","menewh","5/2015","Female","mahpsp","12/2015","Females and 1st winter males (with white chest)","雌性和一齡冬羽雄性(白胸)"],1154738);
  birds[j++] = new myBird("USA","15-03-08T09:51","ANATIDAE","Harlequin Duck","丑鸭","Histrionicus histrionicus",p_id("1503barnegat",[13,12,14]),["njblsp","3/2015","Males","njblsp","3/2015","Female","njblsp","3/2015"],179838);
  birds[j++] = new myBird("USA","15-12-26T12:28","ANATIDAE","Surf Scoter","斑头海番鸭","Melanitta perspicillata",[p_id("1512boston",14)],["mahpsp","12/2015","Adult male (1st right), immature males (left two), and immature female (2nd right)","成年雄性(右一)，未成年雄性（左边两只），和未成年雌性(右二)"],3362763);
  birds[j++] = new myBird("USA","15-03-28T10:54","ANATIDAE","White-winged Scoter","白翅海番鸭","Melanitta fusca",[p_id("1512boston",9)],["mahpsp","12/2015","Female left, male right"],179846);
  birds[j++] = new myBird("USA","15-11-26T14:46","ANATIDAE","Black Scoter","黑海番鸭","Melanitta americana",m_id(["20151126_138_BlackScoter(F)","20160319_021_BlackScoter(M)"]),["mdocci","11/2015","Female",""," Inlet","海口","deinri","3/2016","Adult (left) and 1st winter (right) males","成年(左)和一龄冬羽(右)雄性"],179842);
  birds[j++] = new myBird("USA","16-03-19T15:19","ANATIDAE","Long-tailed Duck","长尾鸭","Clangula hyemalis",m_id(["20160319_022_Long-tailedDuck","20160319_023_Long-tailedDuck"]),["deinri","3/2016","Male (center) and females","雄性(中间)和雌性","deinri","3/2016"],32818);
  birds[j++] = new myBird("USA","15-02-28T13:43","ANATIDAE","Bufflehead","白枕鹊鸭","Bucephala albeola",[p_id("1512boston",11),m_id("20160327_029_Bufflehead(F)")],["mahpsp","12/2015","Females left, males right","ncoutb","3/2016","Females",""," at Cape Hatteras","哈特拉斯角"],3242982);
  birds[j++] = new myBird("USA","15-02-28T13:54","ANATIDAE","Common Goldeneye","鹊鸭","Bucephala clangula",p_id("1512boston",[6,7]),["macast","12/2015","Male","macast","12/2015","Female left, male right"],179847);
//birds[j++] = new myBird("USA","16-00-00T00:00","ANATIDAE","Barrow's Goldeneye","巴氏鹊鸭","Bucephala islandica",[m_id("")],["mdbhrp","9/2015"],3249097);
  birds[j++] = new myBird("USA","14-01-20T17:16","ANATIDAE","Hooded Merganser","棕胁秋沙鸭","Lophodytes cucullatus",[m_id("20150125_002_HoodedMerganser")],["mdgerm","1/2015","Male left, female right, Clear Spring Park","左雄性，右雌性","","清泉公园"],3339360);
  birds[j++] = new myBird("USA","13-07-14T14:11","ANATIDAE","Common Merganser","普通秋沙鸭","Mergus merganser",[m_id("20160221_016_CommonMerganser"),p_id("1307alaskabirding",1)],["mdcorl","2/2016","Female left, male right","akknpp","7/2013","Female and chicks"],95129);
  birds[j++] = new myBird("USA","15-03-02T09:23","ANATIDAE","Red-breasted Merganser","红胸秋沙鸭","Mergus serrator",p_id("1503barnegat",[3,5,2]),["njblsp","3/2015","Male","njblsp","3/2015","Female","njblsp","3/2015","Immature"],179850);
  birds[j++] = new myBird("USA","15-02-14T09:07","ANATIDAE","Ruddy Duck","棕硬尾鸭","Oxyura jamaicensis",[m_id("20150228_018_RuddyDuck(M)"),p_id("1512bhill",14)],["mdftmh","2/2015","Male","mdbhrp","2/2015","Female"],3462871);
//birds[j++] = new myBird("   ","16-00-00T00:00","MEGAPODI","Dusky Megapode","暗色冢雉","Megapodius freycinet",[m_id("")],["mdbhrp","9/2015"],4976888);
//birds[j++] = new myBird("USA","16-00-00T00:00","CRACIDAE","Plain Chachalaca","纯色小冠雉","Ortalis vetula",[m_id("")],["mdbhrp","9/2015"],4973094);
//birds[j++] = new myBird("   ","16-00-00T00:00","NUMIDIDA","Helmeted Guineafowl","珠鸡","Numida meleagris",[m_id("")],["mdbhrp","9/2015"],275982);
//birds[j++] = new myBird("USA","16-00-00T00:00","ODONTOPH","Mountain Quail","山翎鹑","Oreortyx pictus",[m_id("")],["mdbhrp","9/2015"],3808970);
//birds[j++] = new myBird("USA","16-00-00T00:00","ODONTOPH","Scaled Quail","鳞斑鹑","Callipepla squamata",[m_id("")],["mdbhrp","9/2015"],3807792);
//birds[j++] = new myBird("USA","16-00-00T00:00","ODONTOPH","California Quail","珠颈翎鹑","Callipepla californica",[m_id("")],["mdbhrp","9/2015"],3614642);
  birds[j++] = new myBird("USA","15-07-06T12:41","ODONTOPH","Gambel's Quail","黑腹翎鹑","Callipepla gambelii",[p_id("1507birdingwest",2)],["nvdnwr","7/2015","Female"],2635283);
  birds[j++] = new myBird("USA","14-08-16T09:14","ODONTOPH","Northern Bobwhite","山齿鹑","Colinus virginianus",[p_id("1412mckee-beshers",6)],["mdmwma","8/2014","Male"],1503283);
//birds[j++] = new myBird("USA","16-00-00T00:00","ODONTOPH","Montezuma Quail","彩鹑","Cyrtonyx montezumae",[m_id("")],["mdbhrp","9/2015"],3807919);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHASIANI","Ring-necked Pheasant","环颈雉","Phasianus colchicus",[m_id("")],["mdbhrp","9/2015"],14973);
  birds[j++] = new myBird("USA","16-09-15T08:53","PHASIANI","Ruffed Grouse","披肩榛鸡","Bonasa umbellus",[p_id("1609vtcanbirding",10)],["vtwwma","9/2016"],5873637);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHASIANI","Greater Sage-Grouse","艾草松鸡","Centrocercus urophasianus",[m_id("")],["mdbhrp","9/2015"],2990680);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHASIANI","Spruce Grouse","枞树镰翅鸡","Falcipennis canadensis",[m_id("")],["vtwwma","9/2015"],5869659);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHASIANI","Dusky Grouse","蓝镰翅鸡","Dendragapus obscurus",[m_id("")],["mdbhrp","9/2015"],5869671);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHASIANI","Sooty Grouse","乌镰翅鸡","Dendragapus fuliginosus",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("USA","16-02-28T09:29","PHASIANI","Wild Turkey","火鸡","Meleagris gallopavo",[p_id("1604asheville",1),m_id("20160228_019_WildTurkey")],["ncbpkw","4/2016","Female","arbitr","2/2016","Anacostia Park, Washington DC","阿纳卡斯蒂亚公园，华盛顿哥伦比亚特区"],37220);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHASIANI","Indian Peafowl","蓝孔雀","Pavo cristatus",[p_id("1604asheville",1)],["flmahp","6/2016","Male"],108688);
  birds[j++] = new myBird("USA","16-03-26T13:48","GAVIIDAE","Red-throated Loon","红喉潜鸟","Gavia stellata",[m_id("20160326_025_Red-throatedLoon(WP)")],["ncoutb","3/2016","Winter plumage",""," at Jennette's Pier","珍妮特钓鱼码头"],139852);
//birds[j++] = new myBird("USA","16-00-00T00:00","GAVIIDAE","Pacific Loon","太平洋潜鸟","Gavia pacifica",[m_id("")],["mdbhrp","9/2015"],855436);
  birds[j++] = new myBird("USA","15-03-08T10:08","GAVIIDAE","Common Loon","普通潜鸟","Gavia immer",[p_id("1503barnegat",16),m_id("20151126_137_CommonLoon(WP)"),p_id("1503barnegat",15)],["njblsp","3/2015","mdocci","11/2015","Winter plumage",""," Inlet","海口","njblsp","3/2015","Immature"],855440);
//birds[j++] = new myBird("   ","16-00-00T00:00","SPHENISC","King Penguin","王企鹅","Aptenodytes patagonicus",[m_id("")],["mdbhrp","9/2015"],71507);
//birds[j++] = new myBird("   ","16-00-00T00:00","SPHENISC","Emperor Penguin","帝企鹅","Aptenodytes forsteri",[m_id("")],["mdbhrp","9/2015"],71334);
//birds[j++] = new myBird("   ","16-00-00T00:00","SPHENISC","Gentoo Penguin","巴布亚企鹅","Pygoscelis papua",[m_id("")],["mdbhrp","9/2015"],539244);
  birds[j++] = new myBird("USA","16-06-18T09:35","OCEANITI","Wilson's Storm-Petrel","黄蹼洋海燕","Oceanites oceanicus",[m_id("20160618_076_Wilson'sStorm-Petrel")],["arbitr","6/2016","Cape May-Lewes Ferry, Delaware/New Jersey","五月岬-刘易斯轮渡，特拉华州/新泽西州"],cornellurl(103516),269388);
//birds[j++] = new myBird("USA","16-00-00T00:00","OCEANITI","Fork-tailed Storm-Petrel","灰蓝叉尾海燕","Oceanodroma furcata",[m_id("")],["mdbhrp","9/2015"],4982833);
//birds[j++] = new myBird("USA","16-00-00T00:00","DIOMEDEI","Laysan Albatross","黑背信天翁","Phoebastria immutabilis",[m_id("")],["mdbhrp","9/2015"],855484);
//birds[j++] = new myBird("   ","16-00-00T00:00","HYDROBAT","European Storm-Petrel","暴风海燕","Hydrobates pelagicus",[m_id("")],["mdbhrp","9/2015"],726428);
//birds[j++] = new myBird("USA","16-00-00T00:00","PROCELLA","Sooty shearwater","灰鹱","Puffinus griseus",[m_id("")],["mdbhrp","9/2015"],855476);
//birds[j++] = new myBird("USA","16-00-00T00:00","PROCELLA","Northern Fulmar","暴风鹱","Fulmarus glacialis",[m_id("")],["mdbhrp","9/2015"],855455);
//birds[j++] = new myBird("   ","16-00-00T00:00","PELECANO","Common Diving Petrel","鹈燕","Pelecanoides urinatrix",[m_id("")],["mdbhrp","9/2015"],4982791);
//birds[j++] = new myBird("USA","16-00-00T00:00","PODICIPE","Least Grebe","侏鸊鷉","Tachybaptus dominicus",[m_id("")],["txbbnp","12/2013"],891735);
  birds[j++] = new myBird("USA","13-12-25T15:11","PODICIPE","Pied-billed Grebe","斑嘴巨鸊鷉","Podilymbus podiceps",[p_id("1312bigbendbirding",7),p_id("1512bhill",43),p_id("1409fingerlake",12)],["txbbnp","12/2013","mdbhrp","10/2015","Winter plumage","nymnwr","8/2014","Immature"],601751);
  birds[j++] = new myBird("USA","06-11-10T15:16","PODICIPE","Horned Grebe","角鸊鷉","Podiceps auritus",m_id(sas("20150321_",["038","039","040"],"_HornedGrebe")),["mdftmh","3/2015","Winter plumage","mdftmh","3/2015","Winter plumage","mdftmh","3/2015","Spring molt","春羽"],424512);
//birds[j++] = new myBird("USA","16-00-00T00:00","PODICIPE","Red-necked Grebe","赤颈鸊鷉","Podiceps grisegena",[m_id("")],["txbbnp","12/2013"],417750);
//birds[j++] = new myBird("USA","16-00-00T00:00","PODICIPE","Eared Grebe","黑颈鸊鷉","Podiceps nigricollis",[m_id("")],["txbbnp","12/2013"],891774);
  birds[j++] = new myBird("USA","15-07-08T09:55","PODICIPE","Western Grebe","北美鸊鷉","Aechmophorus occidentalis",[p_id("1507birdingwest",9)],["orhayd","7/2015"],891803);
//birds[j++] = new myBird("USA","16-00-00T00:00","PODICIPE","Clark's Grebe","克氏鸊鷉","Aechmophorus clarkii",[m_id("")],["txbbnp","12/2013"],2546204);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHOENICO","American Flamingo","美洲红鹳","Phoenicopterus ruber",["0504zoo/0504zoo__14"],["natzo","4/2005"],cornellurl(91591),10062545);
//birds[j++] = new myBird("   ","16-00-00T00:00","PHAETHON","White-tailed Tropicbird","白尾鹲","Phaethon lepturus",[m_id("")],["mdbhrp","9/2015"],683063);
  birds[j++] = new myBird("USA","05-12-25T10:44","CICONIID","Wood Stork","黑头鹮鹳","Mycteria americana",[p_id("1112floridabirding",17)],["flevnp","12/2011"],4489123);
  birds[j++] = new myBird("USA","05-12-25T10:42","THRESKIO","White Ibis","美洲白鹮","Eudocimus albus",[p_id("0512biscayne",2),p_id("1112floridabirding",15)],["flbinp","12/2005","flevnp","12/2011"],8169900);
//birds[j++] = new myBird("   ","16-00-00T00:00","THRESKIO","Scarlet Ibis","美洲红鹮","Eudocimus ruber",["0504zoo/0504zoo__15","0504zoo/0504zoo__22"],["natzo","4/2005","Adult","natzo","4/2005","Immature"],cornellurl(115676),1080053);
  birds[j++] = new myBird("USA","05-12-25T10:42","THRESKIO","Glossy Ibis","彩鹮","Plegadis falcinellus",[p_id("0512merritt",9)],["flmnwr","12/2005"],113283);
//birds[j++] = new myBird("USA","16-00-00T00:00","THRESKIO","White-faced Ibis","白脸彩鹮","Plegadis chihi",[m_id("")],["flmnwr","12/2005"],4890250);
  birds[j++] = new myBird("USA","05-12-28T08:55","THRESKIO","Roseate Spoonbill","粉红琵鹭","Platalea ajaja",[p_id("0512merritt",5),p_id("1606florida",28)],["flmnwr","12/2005","scbwma","6/2016"],341508);
  birds[j++] = new myBird("USA","15-04-26T14:02","ARDEIDAE","American Bittern","美洲麻鳽","Botaurus lentiginosus",[m_id("20150426_064_AmericanBittern"),p_id("1609vtcanbirding",18),p_id("1609vtcanbirding",19)],["mdnpsp","4/2015","cactnw","9/2016","cactnw","9/2016"],2764197);
//birds[j++] = new myBird("USA","16-00-00T00:00","ARDEIDAE","Least Bittern","姬苇鳽","Ixobrychus exilis",[m_id("")],["vadmwp","8/2015"],2783545);
  birds[j++] = new myBird("CHN","16-01-13T16:26","ARDEIDAE","Striated Heron","绿鹭","Butorides striata",[p_id("1601china",63)],["cnxmjm","1/2016","Immature"],70063);
  birds[j++] = new myBird("CHN","16-01-13T15:31","ARDEIDAE","Grey Heron","苍鹭","Ardea cinerea",[p_id("1601china",57)],["cnxmjm","1/2016"],13625);
  birds[j++] = new myBird("USA","05-11-26T14:09","ARDEIDAE","Great Blue Heron","大蓝鹭","Ardea herodias",[m_id("20160731_089_GreatBlueHeron"),p_id("0511assateague",26)],["vahump","7/2016","vacnwr","11/2005"],1783500);
  birds[j++] = new myBird("USA","05-10-30T09:26","ARDEIDAE","Great Egret","大白鹭","Ardea alba",[p_id("0511assateague",27),p_id("1111chincoteague",12)],["vacnwr","11/2005","vacnwr","11/2011"],260953);
  birds[j++] = new myBird("USA","05-12-28T09:36","ARDEIDAE","Snowy Egret","雪鹭","Egretta thula",[p_id("1112floridabirding",20)],["flevnp","12/2011"],2772841);
  birds[j++] = new myBird("CHN","16-01-07T14:51","ARDEIDAE","Little Egret","小白鹭","Egretta garzetta",[p_id("1601china",37)],["cnshbu","1/2016"],365417);
  birds[j++] = new myBird("USA","05-12-25T16:18","ARDEIDAE","Little Blue Heron","小蓝鹭","Egretta caerulea",[p_id("1112floridabirding",14),p_id("1312savannahbirding",4)],["flevnp","12/2011","scsnwr","12/2013","Immature"],2773665);
  birds[j++] = new myBird("USA","05-12-25T09:59","ARDEIDAE","Tricolored Heron","三色鹭","Egretta tricolor",[p_id("1112floridabirding",18),p_id("0512everglades",20)],["flevnp","12/2011","flevnp","12/2005"],2776050);
//birds[j++] = new myBird("USA","16-00-00T00:00","ARDEIDAE","Reddish Egret","棕颈鹭","Egretta rufescens",[m_id("")],["mdocci","10/2015","Immature",""," Skimmer Island","剪嘴鸥岛"],2772656);
  birds[j++] = new myBird("USA","15-01-02T10:21","ARDEIDAE","Cattle Egret","牛背鹭","Bubulcus ibis",[p_id("1501prbirding",9)],["prrinc","1/2015"],90212);
  birds[j++] = new myBird("USA","05-12-25T15:48","ARDEIDAE","Green Heron","美洲绿鹭","Butorides virescens",p_id("1412mckee-beshers",[4,5]),["mdmwma","8/2014"],2767273);
  birds[j++] = new myBird("USA","06-05-06T17:42","ARDEIDAE","Black-crowned Night-Heron","夜鹭","Nycticorax nycticorax",[m_id("20160625_081_Black-crownedNight-Heron"),"2006cobirding/Black-crownedNight-Heron_J_20060524_014"],["nyjbwr","6/2016","mdcopl","5/2006","Immature"],[158941,18625898]);
  birds[j++] = new myBird("USA","06-05-06T17:25","ARDEIDAE","Yellow-crowned Night-Heron","黄冠夜鹭","Nyctanassa violacea",["2006cobirding/Yellow-crownedNight-Heron_20060506_005",p_id("1509charleston",21),p_id("1606florida",14)],["mdcopl","5/2006","scpitt","9/2015","flbppm","6/2016","Immature"],2785783);
//birds[j++] = new myBird("   ","16-00-00T00:00","SCOPIDAE","Hamerkop","锤头鹳","Scopus umbretta",[m_id("")],["mdbhrp","9/2015"],660725);
//birds[j++] = new myBird("   ","16-00-00T00:00","BALAENIC","Shoebill","鲸头鹳","Balaeniceps rex",[m_id("")],["mdbhrp","9/2015"],326917);
  birds[j++] = new myBird("USA","05-12-28T13:35","PELECANI","American White Pelican","美洲白鹈鹕","Pelecanus erythrorhynchos",[p_id("0512merritt",23)],["flmnwr","12/2005"],4432808);
  birds[j++] = new myBird("USA","05-12-27T07:34","PELECANI","Brown Pelican","褐鹈鹕","Pelecanus occidentalis",p_id("0512keys",[13,18]),["flkeyw","12/2005","Immature","flkeyw","12/2005","Adult"],100040);
  birds[j++] = new myBird("USA","15-01-08T08:58","FREGATID","Magnificent Frigatebird","华丽军舰鸟","Fregata magnificens",p_id("1501prbirding",[40,39]),["prosan","1/2015","Male","prosan","1/2015","Female"],660688);
  birds[j++] = new myBird("USA","15-09-20T11:48","SULIDAE ","Brown Booby","褐鲣鸟","Sula leucogaster",m_id(sas("20150920_10",["0","1"],"_BrownBooby")),["mdinhb","9/2015","mdinhb","9/2015","Adult left, immature right","左成年，右未成年"],17701);
  birds[j++] = new myBird("USA","15-11-14T15:06","SULIDAE ","Northern Gannet","北鲣鸟","Morus bassanus",m_id(sas("20151114_12",["4","3"],"_NorthernGannet")),["mdocci","11/2015","",""," Inlet","海口"],4982885);
  birds[j++] = new myBird("USA","15-07-11T20:45","PHALACRO","Brandt's Cormorant","加州鸬鹚","Phalacrocorax penicillatus",[p_id("1507birdingwest",36)],["cambsp","7/2015"],2566495);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHALACRO","Neotropic Cormorant","美洲鸬鹚","Phalacrocorax brasilianus",[m_id("")],["mdcovl","6/2015"],2554751);
  birds[j++] = new myBird("USA","05-12-24T14:58","PHALACRO","Double-crested Cormorant","角鸬鹚","Phalacrocorax auritus",[p_id("1112floridabirding",19),p_id("1312savannahbirding",12)],["flevnp","12/2011","scsnwr","12/2013"],2556136);
  birds[j++] = new myBird("USA","15-10-31T14:10","PHALACRO","Great Cormorant","普通鸬鹚","Phalacrocorax carbo",[p_id("1601china",61),m_id("20151031_120_GreatCormorant(I)")],["cnxmjm","1/2016","mdocci","10/2015","Immature",""," Inlet South Jetty","海口南防波堤"],294107);
  birds[j++] = new myBird("USA","15-07-09T12:14","PHALACRO","Pelagic Cormorant","海鸬鹚","Phalacrocorax pelagicus",[p_id("1507birdingwest",19)],["wacape","7/2015"],129487);
  birds[j++] = new myBird("USA","05-12-24T15:15","ANHINGID","Anhinga","蛇鹈","Anhinga anhinga",p_id("0512everglades",[4,33]),["flevnp","12/2005","Male, breeding plumage","flevnp","12/2005","Female"],660678);
  birds[j++] = new myBird("USA","05-12-25T11:18","CATHARTI","Black Vulture","黑美洲鹫","Coragyps atratus",["2006cobirding/BlackVulture_20060315_008","2006cobirding/BlackVulture_20060326_010"],["mdcorl","3/2006"],105768);
  birds[j++] = new myBird("USA","05-12-25T11:03","CATHARTI","Turkey Vulture","红头美洲鹫","Cathartes aura",["2006cobirding/TurkeyVulture_20060315_029","2006cobirding/TurkeyVulture_20060315_027"],["mdcorl","3/2006"],199383);
//birds[j++] = new myBird("USA","16-00-00T00:00","CATHARTI","California Condor","加州神鹫","Gymnogyps californianus",[m_id("")],["mdbhrp","9/2015"],2175658);
//birds[j++] = new myBird("   ","16-00-00T00:00","CATHARTI","King Vulture","王鹫","Sarcoramphus papa",["0504zoo/0504zoo__16"],["natzo","4/2005"],cornellurl(119036),663612);
//birds[j++] = new myBird("   ","16-00-00T00:00","SAGITTAR","Secretarybird","蛇鹫","Sagittarius serpentarius",[m_id("")],["mdbhrp","9/2015"],484096);
  birds[j++] = new myBird("USA","07-08-11T08:00","PANDIONI","Osprey","鹗","Pandion haliaetus",[p_id("1112floridabirding",11),p_id("1408annapolisbirding",1)],["flevnp","12/2011","mdgrpt","8/2014"],[61662,8885274]);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","Swallow-tailed Kite","燕尾鸢","Elanoides forficatus",[m_id("")],["flevnp","6/2016"],3598686);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","White-tailed Kite","白尾鸢","Elanus leucurus",[m_id("")],["flevnp","9/2015"],3565553);
  birds[j++] = new myBird("USA","11-12-27T17:06","ACCIPITR","Snail Kite","食螺鸢","Rostrhamus sociabilis",[p_id("1112floridabirding",4)],["flevnp","12/2011","Female"],668147);
  birds[j++] = new myBird("USA","15-09-06T11:23","ACCIPITR","Mississippi Kite","密西西比灰鸢","Ictinia mississippiensis",[p_id("1509charleston",15)],["scpatp","9/2015","Immature"],3697232);
  birds[j++] = new myBird("USA","05-10-30T09:34","ACCIPITR","Bald Eagle","白头海雕","Haliaeetus leucocephalus",["0510birding/0510birding__13",m_id("20160220_015_BaldEagle(I)")],["mdbnwr","10/2005","mdloch","2/2016","Immature"],296826);
  birds[j++] = new myBird("USA","13-12-29T15:19","ACCIPITR","Northern Harrier","北鹞","Circus cyaneus",[p_id("1312savannahbirding",2)],["scsnwr","12/2013"],32735);
  birds[j++] = new myBird("USA","11-10-08T15:34","ACCIPITR","Sharp-shinned Hawk","纹腹鹰","Accipiter striatus",m_id(sas(["20150215_013","20150215_014","20151126_133"],"_Sharp-shinnedHawk",["","","(I)"])),["mdcrvp","2/2015","mdcrvp","2/2015","mdocci","11/2015","Immature",""," Herring Creek Nature Park","鲱鱼溪公园"],11614189);
  birds[j++] = new myBird("USA","14-12-28T11:16","ACCIPITR","Cooper's Hawk","库氏鹰","Accipiter cooperii",[m_id("20141228_006_CooperHawk"),m_id("20141228_007_CooperHawk"),p_id("1507birdingwest",3)],["mdgerm","12/2014","mdgerm","12/2014","nvdnwr","7/2015","Immature"],11593052);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","Northern Goshawk","苍鹰","Accipiter gentilis",[m_id("")],["mdbhrp","9/2015"],1065966);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","Harris's Hawk","栗翅鹰","Parabuteo unicinctus",[m_id("")],["mdbhrp","9/2015"],2612316);
  birds[j++] = new myBird("USA","06-03-04T16:05","ACCIPITR","Red-shouldered Hawk","赤肩鵟","Buteo lineatus",[p_id("2009cobirding",9),"2006cobirding/Red-ShoulderedHawk_20060610_006","2007cobirding/20070204_022_Red-shoulderedHawk(J)"],["mdcovl","3/2009","mdcocn","6/2006","mdcocn","2/2007","Immature"],3724592);
  birds[j++] = new myBird("USA","11-12-28T15:32","ACCIPITR","Broad-winged Hawk","巨翅鵟","Buteo platypterus",[p_id("1112floridabirding",24)],["flevnp","12/2011","Immature"],3724612);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","Swainson's Hawk","斯氏鵟","Buteo swainsoni",[m_id("")],["mdbhrp","9/2015"],11811149);
  birds[j++] = new myBird("USA","06-03-05T14:30","ACCIPITR","Red-tailed Hawk","红尾鵟","Buteo jamaicensis",["2006cobirding/Red-TailedHawk_20060305_002","2006cobirding/Red-TailedHawk_20060305_005",p_id("1412mckee-beshers",33)],["mdcopl","3/2006","mdcopl","3/2006","mdmwma","11/2014","Juvenile"],1146152);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","Ferruginous Hawk","王鵟","Buteo regalis",[m_id("")],["mdbhrp","9/2015"],3724576);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","Rough-legged Hawk","毛脚鵟","Buteo lagopus",[m_id("")],["mdbhrp","9/2015"],1123648);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","Gray Hawk","灰鵟","Buteo plagiatus",[m_id("")],["mdbhrp","9/2015"],12074495);
//birds[j++] = new myBird("USA","16-00-00T00:00","ACCIPITR","Golden Eagle","金雕","Aquila chrysaetos",[m_id("")],["mdbhrp","9/2015"],14344);
  birds[j++] = new myBird("CHN","16-01-15T13:39","ACCIPITR","Eurasian Sparrowhawk","雀鹰","Accipiter nisus",[p_id("1601china",67)],["cnbjsp","1/2016"],14225);
//birds[j++] = new myBird("   ","16-00-00T00:00","OTIDIDAE","White-bellied Bustard","蓝鸨","Eupodotis senegalensis",[m_id("")],["mdbhrp","9/2015"],2450162);
//birds[j++] = new myBird("   ","16-00-00T00:00","MESITORN","White-breasted Mesite","白胸拟鹑","Mesitornis variegatus",[m_id("")],["mdbhrp","9/2015"],1610568);
//birds[j++] = new myBird("   ","16-00-00T00:00","CARIAMID","Red-legged Seriema","红腿叫鹤","Cariama cristata",[m_id("")],["mdbhrp","9/2015"],678211);
//birds[j++] = new myBird("   ","16-00-00T00:00","RHYNOCHE","Kagu","鹭鹤","Rhynochetos jubatus",[m_id("")],["mdbhrp","9/2015"],100106);
//birds[j++] = new myBird("   ","16-00-00T00:00","EURYPYGI","Sunbittern","日鳽","Eurypyga helias",[m_id("")],["mdbhrp","9/2015"],1620652);
//birds[j++] = new myBird("   ","16-00-00T00:00","SAROTHRU","Buff-spotted Flufftail","黄点侏秧鸡","Sarothrura elegans",[m_id("")],["mdbhrp","9/2015"],2511105);
//birds[j++] = new myBird("   ","16-00-00T00:00","HELIORNI","African Finfoot","非洲鳍趾䴘","Podica senegalensis",[m_id("")],["mdbhrp","9/2015"],1596128);
  birds[j++] = new myBird("USA","15-09-06T07:58","RALLIDAE","Clapper Rail","长嘴秧鸡","Rallus longirostris",p_id("1509charleston",[9,10]),["scpitt","9/2015"],2506463);
//birds[j++] = new myBird("USA","16-00-00T00:00","RALLIDAE","King Rail","王秧鸡","Rallus elegans",[m_id("")],["scpitt","9/2015"],2506673);
//birds[j++] = new myBird("USA","16-00-00T00:00","RALLIDAE","Virginia Rail","弗吉尼亚秧鸡","Rallus limicola",[m_id("")],["mdbhrp","9/2015"],2444046);
//birds[j++] = new myBird("CHN","16-00-00T00:00","RALLIDAE","White-breasted Waterhen","白胸苦恶鸟","Amaurornis phoenicurus",[m_id("")],["mdbhrp","9/2015"],285964);
//birds[j++] = new myBird("USA","16-00-00T00:00","RALLIDAE","Sora","黑脸田鸡","Porzana carolina",[m_id("")],["mdbhrp","9/2015"],2497667);
//birds[j++] = new myBird("USA","16-00-00T00:00","RALLIDAE","Gray-headed Swamphen","紫水鸡","Porphyrio poliocephalus",[m_id("")],["mdbhrp","6/2016"],wikiurl("Grey-headed Swamphen"),4216934);
  birds[j++] = new myBird("USA","11-12-28T12:49","RALLIDAE","Purple Gallinule","紫青水鸡","Porphyrio martinica",[p_id("1112floridabirding",16)],["flevnp","12/2011"],2494291);
  birds[j++] = new myBird("USA","11-12-27T17:43","RALLIDAE","Common Gallinule","美洲黑水鸡","Gallinula galeata",[p_id("1112floridabirding",6),p_id("1409fingerlake",9)],["flevnp","12/2011","nymnwr","8/2014","Juvenile"],250108);
  birds[j++] = new myBird("USA","06-05-25T18:09","RALLIDAE","American Coot","美洲骨顶","Fulica americana",[p_id("1312savannahbirding",5)],["scsnwr","12/2013"],2469087);
//birds[j++] = new myBird("   ","16-00-00T00:00","PSOPHIID","Grey-winged Trumpeter","灰翅喇叭声鹤","Psophia crepitans",[m_id("")],["mdbhrp","9/2015"],4977152);
  birds[j++] = new myBird("USA","15-02-08T08:24","GRUIDAE ","Sandhill Crane","沙丘鹤","Grus canadensis",m_id(["20150208_004_SandhillCrane","20150208_006_SandhillCrane"]),["arbitr","2/2015","Bradshaw Road, Kingsville, Maryland","金斯维尔镇布拉德肖路，马里兰州"],90234);
//birds[j++] = new myBird("USA","16-00-00T00:00","GRUIDAE ","Whooping Crane","美洲鹤","Grus americana",[m_id("")],["mdbhrp","9/2015"],586766);
//birds[j++] = new myBird("   ","16-00-00T00:00","GRUIDAE ","White-naped Crane","白枕鹤","Grus vipio",["0504zoo/0504zoo__9"],["natzo","4/2005"],wikiurl("White-naped Crane"),18016);
//birds[j++] = new myBird("CHN","16-00-00T00:00","GRUIDAE ","Red-crowned Crane","丹顶鹤","Grus japonensis",["0504zoo/0504zoo__8"],["natzo","4/2005"],wikiurl("Red-crowned Crane"),4290);
//birds[j++] = new myBird("   ","16-00-00T00:00","GRUIDAE ","Blue Crane","蓝蓑羽鹤","Anthropoides paradisea",["0504zoo/0504zoo__10"],["natzo","4/2005"],wikiurl("Blue Crane"),11619149);
  birds[j++] = new myBird("USA","16-06-10T09:17","ARAMIDAE","Limpkin","秧鹤","Aramus guarauna",[p_id("1606florida",11)],["flplpr","6/2016"],675238);
//birds[j++] = new myBird("   ","16-00-00T00:00","TURNICID","Common Buttonquail","林三趾鹑","Turnix sylvaticus",[m_id("")],["mdbhrp","9/2015"],197726);
//birds[j++] = new myBird("   ","16-00-00T00:00","BURHINID","Eurasian Stone-curlew","欧石鸻","Burhinus oedicnemus",[m_id("")],["mdbhrp","9/2015"],300733);
//birds[j++] = new myBird("   ","16-00-00T00:00","CHIONIDA","Snowy Sheathbill","白鞘嘴鸥","Chionis albus",[m_id("")],["mdbhrp","9/2015"],589264);
//birds[j++] = new myBird("   ","16-00-00T00:00","PLUVIANE","Magellanic Plover","麦哲伦鸻","Pluvianellus socialis",[m_id("")],["mdbhrp","9/2015"],5984882);
  birds[j++] = new myBird("USA","15-05-09T13:41","HAEMATOP","American Oystercatcher","美洲蛎鹬","Haematopus palliatus",[p_id("1505capemay",6),p_id("1509charleston",19)],["njscmm","5/2015","With a "+b_link("Laughing Gull")+" on the right","右边是一只"+b_link("笑鸥"),"scpitt","9/2015"],4920572);
  birds[j++] = new myBird("USA","15-07-09T12:04","HAEMATOP","Black Oystercatcher","北美蛎鹬","Haematopus bachmani",[p_id("1507birdingwest",34)],["cambsp","7/2015"],4920553);
//birds[j++] = new myBird("   ","16-00-00T00:00","DROMADID","Crab-plover","蟹鸻","Dromas ardeola",[m_id("")],["mdbhrp","9/2015"],697563);
//birds[j++] = new myBird("   ","16-00-00T00:00","IBIDORHY","Ibisbill","鹮嘴鹬","Ibidorhyncha struthersii",[m_id("")],["mdbhrp","9/2015"],32783);
  birds[j++] = new myBird("USA","15-05-17T10:28","RECURVIR","Black-necked Stilt","黑颈长脚鹬","Himantopus mexicanus",[p_id("1505bombayhook",10)],["debnwr","5/2015"],4926150);
  birds[j++] = new myBird("USA","05-12-28T09:51","RECURVIR","American Avocet","褐胸反嘴鹬","Recurvirostra americana",[p_id("0512merritt",8),p_id("1112floridabirding",31)],["flmnwr","12/2005","flevnp","12/2011"],1502784);
  birds[j++] = new myBird("USA","15-05-17T12:01","CHARADRI","Black-bellied Plover","灰斑鸻","Pluvialis squatarola",[p_id("1505bombayhook",16),p_id("1509charleston",11)],["debnwr","5/2015","Male","scpitt","9/2015","Female"],276118);
//birds[j++] = new myBird("USA","16-00-00T00:00","CHARADRI","American Golden-Plover","美洲金鸻","Pluvialis dominica",[m_id("")],["mdbhrp","9/2015"],301063);
//birds[j++] = new myBird("USA","16-00-00T00:00","CHARADRI","Snowy Plover","雪鸻","Charadrius nivosus",[m_id("")],["mdbhrp","9/2015"],7966097);
  birds[j++] = new myBird("USA","16-06-08T17:04","CHARADRI","Wilson's Plover","厚嘴鸻","Charadrius wilsonia",p_id("1606florida",[5,6]),["schbsp","6/2016"],4938369);
  birds[j++] = new myBird("USA","15-05-17T10:11","CHARADRI","Semipalmated Plover","半蹼鸻","Charadrius semipalmatus",[p_id("1505bombayhook",7)],["debnwr","5/2015"],5979590);
  birds[j++] = new myBird("USA","16-03-26T14:56","CHARADRI","Piping Plover","笛鸻","Charadrius melodus",m_id(["20160625_078_PipingPlover","20160326_027_PipingPlover"]),["nyjbsp","6/2016","ncoutb","3/2016","",""," at Oregon Inlet south jetty","俄勒冈入海口南堤"],1966983);
  birds[j++] = new myBird("USA","14-07-07T16:07","CHARADRI","Killdeer","双领鸻","Charadrius vociferus",[m_id("20160820_092_Killdeer"),p_id("1407michiganbirding",18)],["mdolan","8/2016","mimack","7/2014"],1606682);
//birds[j++] = new myBird("   ","16-00-00T00:00","PLUVIANI","Egyptian Plover","埃及燕鸻","Pluvianus aegyptius",[m_id("")],["mdbhrp","9/2015"],4926297);
//birds[j++] = new myBird("   ","16-00-00T00:00","ROSTRATU","Greater Painted-snipe","彩鹬","Rostratula benghalensis",[m_id("")],["mdbhrp","9/2015"],300702);
//birds[j++] = new myBird("   ","16-00-00T00:00","JACANIDA","African Jacana","非洲雉鸻","Actophilornis africanus",[m_id("")],["mdbhrp","9/2015"],12637317);
//birds[j++] = new myBird("   ","16-00-00T00:00","PEDIONOM","Plains-wanderer","领鹑","Pedionomus torquatus",[m_id("")],["mdbhrp","9/2015"],674867);
//birds[j++] = new myBird("   ","16-00-00T00:00","THINOCOR","Rufous-bellied Seedsnipe","棕腹籽鹬","Attagis gayi",[m_id("")],["mdbhrp","9/2015"],697583);
  birds[j++] = new myBird("USA","06-04-23T17:28","SCOLOPAC","Spotted Sandpiper","斑腹矶鹬","Actitis macularius",["2007cobirding/20070429_088_SpottedSandpiper"],["mdcovl","4/2007"],13231604);
  birds[j++] = new myBird("USA","06-05-06T16:31","SCOLOPAC","Solitary Sandpiper","褐腰草鹬","Tringa solitaria",sas("2006cobirding/SolitarySandpiper_20060506_00",["5","7"]),["mdcopl","5/2006"],13229089);
  birds[j++] = new myBird("USA","13-07-14T14:15","SCOLOPAC","Greater Yellowlegs","大黄脚鹬","Tringa melanoleuca",[p_id("1307alaskabirding",2)],["akknpp","7/2013"],4877192);
  birds[j++] = new myBird("USA","14-08-30T17:42","SCOLOPAC","Lesser Yellowlegs","小黄脚鹬","Tringa flavipes",[p_id("1409fingerlake",8)],["arbitr","8/2014","Myers Park, New York","麦尔斯公园，纽约州"],300494);
  birds[j++] = new myBird("USA","15-05-09T16:27","SCOLOPAC","Willet","斑翅鹬","Tringa semipalmata",[m_id("20160529_070_Willet"),p_id("1509charleston",20),m_id("20160529_067_Willet")],["mdsclr","5/2016","Breeding adult","scpitt","9/2015","Nonbreeding adult","mdtrlr","5/2016"],14026232);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Upland Sandpiper","高原鹬","Bartramia longicauda",[m_id("")],["mdolan","7/2016"],14810104);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Whimbrel","中杓鹬","Numenius phaeopus",[m_id("")],["nyjbwr","6/2016"],276982);
  birds[j++] = new myBird("USA","15-09-06T07:46","SCOLOPAC","Marbled Godwit","云斑塍鹬","Limosa fedoa",[p_id("1509charleston",8)],["scpitt","9/2015"],5413873);
  birds[j++] = new myBird("USA","15-10-31T10:50","SCOLOPAC","Ruddy Turnstone","翻石鹬","Arenaria interpres",m_id(["20151031_114_RuddyTurnstone","20151031_118_RuddyTurnstone"]),["mdocci","10/2015","",""," Sunset Park","日落公园","mdocci","10/2015","",""," Inlet","海口"],272028);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Red Knot","红腹滨鹬","Calidris canutus",[m_id("")],["nyjbwr","6/2016"],300484);
  birds[j++] = new myBird("USA","15-09-07T07:44","SCOLOPAC","Sanderling","三趾滨鹬","Calidris alba",[m_id("20151031_119_Sanderling(W)"),p_id("1509charleston",17)],["mdocci","10/2015","Winter plumage",""," Inlet","海口","arbitr","9/2015","Juvenile, Fort Moultrie, South Carolina","未成年，莫尔特里堡，南卡罗来纳州"],300486);
  birds[j++] = new myBird("USA","15-05-17T10:12","SCOLOPAC","Semipalmated Sandpiper","半蹼滨鹬","Calidris pusilla",[m_id("20160529_072_SemipalmatedSandpiper")],["mdsclr","5/2016"],4938313);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Western Sandpiper","西滨鹬","Calidris mauri",[m_id("")],["debnwr","5/2015"],852859);
  birds[j++] = new myBird("USA","15-05-09T16:24","SCOLOPAC","Least Sandpiper","美洲小滨鹬","Calidris minutilla",[p_id("1505capemay",13)],["njweti","5/2015"],299021);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","White-rumped Sandpiper","白腰滨鹬","Calidris fuscicollis",[m_id("")],["njweti","5/2015"],836718);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Baird's Sandpiper","白腹滨鹬","Calidris bairdii",[m_id("")],["njweti","5/2015"],14014385);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Pectoral Sandpiper","斑胸滨鹬","Calidris melanotos",[m_id("")],["mdbmnt","7/2016"],836706);
  birds[j++] = new myBird("USA","15-11-26T14:15","SCOLOPAC","Purple Sandpiper","紫滨鹬","Calidris maritima",m_id(["20151126_134_PurpleSandpiper","20151126_135_PurpleSandpiper"]),["mdocci","11/2015","",""," Inlet","海口"],14958401);
  birds[j++] = new myBird("USA","15-05-17T10:14","SCOLOPAC","Dunlin","黑腹滨鹬","Calidris alpina",[p_id("1505bombayhook",9),m_id("20151114_122_Dunlin(WP)")],["debnwr","5/2015","mdasns","11/2015","Winter plumage"],254061);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Stilt Sandpiper","高跷鹬","Calidris himantopus",[m_id("")],["mdbhrp","9/2015"],300682);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Buff-breasted Sandpiper","黄胸鹬","Calidris subruficollis",[m_id("")],["mdbhrp","9/2015"],300716);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Ruff","流苏鹬","Philomachus pugnax",[m_id("")],["mdbhrp","9/2015"],wikiurl("Ruff"),39676);
  birds[j++] = new myBird("USA","11-12-30T11:56","SCOLOPAC","Short-billed Dowitcher","短嘴半蹼鹬","Limnodromus griseus",[p_id("1112floridabirding",29),p_id("1505bombayhook",15)],["flevnp","12/2011","debnwr","5/2015"],4928005);
  birds[j++] = new myBird("USA","15-05-09T16:28","SCOLOPAC","Long-billed Dowitcher","长嘴半蹼鹬","Limnodromus scolopaceus",[p_id("1505capemay",14)],["njweti","5/2015"],3296960);
  birds[j++] = new myBird("USA","16-01-30T09:03","SCOLOPAC","Wilson's Snipe","美洲沙锥","Gallinago delicata",m_id(sas("20160130_00",["1","2"],"_Wilson'sSnipe")),["arbitr","1/2016","Glade Road, Frederick County, Maryland","格雷德路，弗雷德里克郡，马里兰州"],3193898);
  birds[j++] = new myBird("USA","16-02-27T18:20","SCOLOPAC","American Woodcock","小丘鹬","Scolopax minor",[m_id("20160227_018_AmericanWoodcock")],["arbitr","2/2016","Patuxent River State Park at Hipsley Mill Road, Maryland","帕塔克森特河州立公园，马里兰州"],1154742);
//birds[j++] = new myBird("USA","16-00-00T00:00","SCOLOPAC","Wilson's Phalarope","赤斑瓣蹼鹬","Phalaropus tricolor",[m_id("")],["mdbhrp","9/2015"],697557);
//birds[j++] = new myBird("   ","16-00-00T00:00","GLAREOLI","Collared Pratincole","领燕鸻","Glareola pratincola",[m_id("")],["mdbhrp","9/2015"],304194);
  birds[j++] = new myBird("USA","15-07-09T13:32","LARIDAE ","Black-legged Kittiwake","三趾鸥","Rissa tridactyla",[p_id("1507birdingwest",21)],["wahobb","7/2015","On the left, on the right is a "+b_link("California Gull"),"左边，右边是一只"+b_link("加州鸥")],830840);
  birds[j++] = new myBird("USA","15-03-21T15:08","LARIDAE ","Bonaparte's Gull","博氏鸥","Chroicocephalus philadelphia",m_id(["20150321_045_Bonaparte'sGull(W)","20151126_136_Bonaparte'sGull(WP)"]),["arbitr","3/2015","Winter plumage, Lapidum, Maryland","冬羽，萨斯奎哈纳州立公园，马里兰州","mdocci","11/2015","Winter plumage",""," Inlet","海口"],4825408);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Black-headed Gull","红嘴鸥","Chroicocephalus ridibundus",[m_id("")],["mdloch","11/2015","",""," at Paper Mill Flats","造纸厂路平滩"],37793);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Little Gull","小鸥","Hydrocoloeus minutus",[m_id("")],["mdloch","11/2015","",""," at Paper Mill Flats","造纸厂路平滩"],129400);
  birds[j++] = new myBird("USA","06-07-16T14:43","LARIDAE ","Laughing Gull","笑鸥","Larus atricilla",[p_id("0607outerbanks",28),p_id("1505capemay",3)],["ncoutb","7/2006","njcmsp","5/2015"],1607122);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Franklin's Gull","弗氏鸥","Leucophaeus pipixcan",[m_id("")],["mdbhrp","9/2015"],4822199);
  birds[j++] = new myBird("USA","15-07-09T13:34","LARIDAE ","Heermann's Gull","红嘴灰鸥","Larus heermanni",[p_id("1507birdingwest",22)],["wahobb","7/2015"],4825261);
  birds[j++] = new myBird("USA","05-11-26T09:57","LARIDAE ","Ring-billed Gull","环嘴鸥","Larus delawarensis",m_id(["20151031_116_Ring-billedGull","20150321_037_Ring-billedGull(1W)"]),["mdocci","10/2015","",""," Inlet","海口","arbitr","3/2015","1st winter, Southwest Area Park, Baltimore, Maryland","一齡冬羽，巴尔的摩西南地区公园，马里兰州"],4822011);
  birds[j++] = new myBird("USA","15-07-11T20:16","LARIDAE ","Western Gull","西美鸥","Larus occidentalis",p_id("1507birdingwest",[33,35]),["cambsp","7/2015","cambsp","7/2015","Hatchling","幼鸟"],2397809);
  birds[j++] = new myBird("USA","15-07-09T13:32","LARIDAE ","California Gull","加州鸥","Larus californicus",[p_id("1507birdingwest",21)],["wahobb","7/2015","On the right, on the left is a "+b_link("Black-legged Kittiwake"),"右边，左边是一只"+b_link("三趾鸥")],4821962);
  birds[j++] = new myBird("USA","06-02-19T11:53","LARIDAE ","Herring Gull","银鸥","Larus argentatus",[p_id("0607outerbanks",22),p_id("1503barnegat",9)],["ncoutb","7/2006","njblsp","3/2015","3rd Winter","三龄冬羽"],277019);
  birds[j++] = new myBird("CHN","16-01-07T14:49","LARIDAE ","Vega Gull","织女银鸥","Larus vegae",p_id("1601china",[36,35]),["cnshbu","1/2016","cnshbu","1/2016","Immature"],716323);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Iceland Gull","冰岛鸥","Larus glaucoides",[m_id("")],["arbitr","2/2016","Conowingo Dam, Maryland","科纳温戈坝，马里兰州"],-9019);
  birds[j++] = new myBird("USA","15-10-04T14:12","LARIDAE ","Lesser Black-backed Gull","小黑背鸥","Larus fuscus",[m_id("20151004_104_LesserBlack-backedGull")],["mdocci","10/2015","With "+b_link("Ring-billed Gull","s")+" at the front and "+b_link("Black Skimmer","s")+" at the back","前面是"+b_link("环嘴鸥")+"，后面是"+b_link("黑剪嘴鸥")],14813315);
  birds[j++] = new myBird("USA","15-07-09T11:57","LARIDAE ","Glaucous-winged Gull","灰翅鸥","Larus glaucescens",[p_id("1507birdingwest",15)],["wacape","7/2015"],853282);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Glaucous Gull","北极鸥","Larus hyperboreus",[m_id("")],["mdbhrp","9/2015"],82036);
  birds[j++] = new myBird("USA","15-03-08T09:17","LARIDAE ","Great Black-backed Gull","大黑背鸥","Larus marinus",[p_id("1503barnegat",10),m_id("20151031_115_GreatBlack-backedGull(1W)")],["njblsp","3/2015","mdocci","10/2015","1st winter","一龄冬羽"," Inlet","海口"],1587200);
  birds[j++] = new myBird("USA","15-07-26T09:02","LARIDAE ","Least Tern","小白额燕鸥","Sternula antillarum",m_id(["20150726_084_LeastTern","20150726_085_LeastTern(I)"]),["mdenwr","7/2015","mdenwr","7/2015","Immature"],-9005);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Gull-billed Tern","鸥嘴噪鸥","Gelochelidon nilotica",[m_id("")],["njblsp","3/2015"],853324);
  birds[j++] = new myBird("USA","15-07-10T10:09","LARIDAE ","Caspian Tern","红嘴巨鸥","Hydroprogne caspia",m_id(sas("20150808_08",["9","8"],"_CaspianTern")),["arbitr","8/2015","Dyke Marsh Wildlife Preserve, Virginia","黛克湿地野生动物保护区，弗吉尼亚州"],853326);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Black Tern","黑浮鸥","Chlidonias niger",[m_id("")],["vadmwp","8/2015"],279151);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Roseate Tern","粉红燕鸥","Sterna dougallii",[m_id("")],["mdbhrp","9/2015"],100023);
  birds[j++] = new myBird("USA","14-07-07T14:11","LARIDAE ","Common Tern","普通燕鸥","Sterna hirundo",p_id("1407michiganbirding",[15,16]),["mimack","7/2014"],15440);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Arctic Tern","北极燕鸥","Sterna paradisaea",[m_id("")],["mdbhrp","9/2015"],90251);
  birds[j++] = new myBird("USA","15-05-09T11:22","LARIDAE ","Forster's Tern","弗氏燕鸥","Sterna forsteri",[p_id("1505capemay",4),m_id("20150726_086_Forster'sTern(I)")],["njcmsp","5/2015","mdenwr","7/2015","Immature (with two "+b_link("Laughing Gull","s")+" at the back)","未成年(背后是两只"+b_link("笑鸥")+")"],4825398);
  birds[j++] = new myBird("USA","15-01-08T09:29","LARIDAE ","Royal Tern","橙嘴凤头燕鸥","Thalasseus maximus",[m_id("20151031_117_RoyalTern(W)"),p_id("1501prbirding",41),p_id("1501prbirding",42)],["mdocci","10/2015","Winter plumage",""," Inlet","海口","prosan","1/2015"],4821361);
//birds[j++] = new myBird("USA","16-00-00T00:00","LARIDAE ","Sandwich Tern","白嘴端凤头燕鸥","Thalasseus sandvicensis",[m_id("")],["njblsp","3/2015"],4821400);
  birds[j++] = new myBird("USA","15-09-06T08:36","LARIDAE ","Black Skimmer","黑剪嘴鸥","Rynchops niger",[p_id("1606florida",26),m_id("20151004_105_BlackSkimmer(I)")],["scbwma","6/2016","mdocci","10/2015","Immature"],706277);
//birds[j++] = new myBird("USA","16-00-00T00:00","STERCORA","Parasitic Jaeger","短尾贼鸥","Stercorarius parasiticus",[m_id("")],["mdocci","10/2015","",""," Inlet","海口"],cornellurl(167381),853265);
//birds[j++] = new myBird("USA","16-00-00T00:00","ALCIDAE ","Dovekie","侏海雀","Alle alle",[m_id("")],["scpitt","9/2015"],2572520);
  birds[j++] = new myBird("USA","15-07-10T10:07","ALCIDAE ","Common Murre","崖海鸦","Uria aalge",[p_id("1507birdingwest",27)],["orcanb","7/2015"],4820733);
//birds[j++] = new myBird("USA","16-00-00T00:00","ALCIDAE ","Razorbill","刀嘴海雀","Alca torda",[m_id("")],["ncoutb","3/2016"],706280);
  birds[j++] = new myBird("USA","15-05-24T18:34","ALCIDAE ","Black Guillemot","白翅斑海鸽","Cepphus grylle",[p_id("1505puffin",18)],["meeeri","5/2015"],4825223);
  birds[j++] = new myBird("USA","15-07-09T12:19","ALCIDAE ","Pigeon Guillemot","海鸽","Cepphus columba",[p_id("1507birdingwest",17)],["wacape","7/2015"],1507063);
//birds[j++] = new myBird("USA","16-00-00T00:00","ALCIDAE ","Rhinoceros Auklet","角嘴海雀","Cerorhinca monocerata",["1505puffin/"],["meeeri","5/2015"],853959);
  birds[j++] = new myBird("USA","15-05-24T18:04","ALCIDAE ","Atlantic Puffin","北极海鹦","Fratercula arctica",p_id("1505puffin",[15,16]),["meeeri","5/2015"],4821525);
//birds[j++] = new myBird("USA","16-00-00T00:00","ALCIDAE ","Horned Puffin","角海鹦","Fratercula corniculata",["1505puffin/"],["meeeri","5/2015"],4821571);
  birds[j++] = new myBird("USA","15-07-10T09:58","ALCIDAE ","Tufted Puffin","簇羽海鹦","Fratercula cirrhata",[p_id("1507birdingwest",26)],["orcanb","7/2015"],4913511);
//birds[j++] = new myBird("   ","16-00-00T00:00","PTEROCLI","Pallas's Sandgrouse","毛腿沙鸡","Syrrhaptes paradoxus",[m_id("")],["mdbhrp","9/2015"],117984);
  birds[j++] = new myBird("USA","15-01-08T12:35","COLUMBID","Rock Pigeon","原鸽","Columba livia",[p_id("1501prbirding",46)],["prosan","1/2015"],32553);
//birds[j++] = new myBird("USA","16-00-00T00:00","COLUMBID","White-crowned Pigeon","白顶鸽","Patagioenas leucocephala",[m_id("")],["mdbhrp","9/2015"],3756071);
//birds[j++] = new myBird("USA","16-00-00T00:00","COLUMBID","Band-tailed Pigeon","斑尾鸽","Patagioenas fasciata",[m_id("")],["mdbhrp","9/2015"],3755692);
  birds[j++] = new myBird("USA","15-01-03T06:48","COLUMBID","African Collared-Dove","粉头斑鸠","Streptopelia roseogrisea",[p_id("1501prbirding",12)],["prponc","1/2015"],3796111);
  birds[j++] = new myBird("USA","15-07-12T10:32","COLUMBID","Eurasian Collared-Dove","灰斑鸠","Streptopelia decaocto",[p_id("1606florida",25)],["arbitr","6/2016","South Beach, Miami, Florida","迈阿密南滩，佛罗里达州"],39688);
  birds[j++] = new myBird("CHN","16-01-03T10:00","COLUMBID","Spotted Dove","珠颈斑鸠","Spilopelia chinensis",[p_id("1601china",7)],["cnbjjp","1/2016"],37820);
  birds[j++] = new myBird("USA","15-01-08T10:50","COLUMBID","Zenaida Dove","鸣哀鸽","Zenaida aurita",[p_id("1501prbirding",45)],["prosan","1/2015"],cornellurl(172661),3806186);
  birds[j++] = new myBird("USA","13-12-25T17:15","COLUMBID","White-winged Dove","白翅哀鸽","Zenaida asiatica",[p_id("1312bigbendbirding",10)],["txbbnp","12/2013"],2616801);
  birds[j++] = new myBird("USA","06-04-29T08:07","COLUMBID","Mourning Dove","哀鸽","Zenaida macroura",[m_id("20160130_006_MourningDove")],["mdbhrp","1/2016"],1610607);
  birds[j++] = new myBird("USA","13-12-25T14:41","COLUMBID","Inca Dove","印加地鸠","Columbina inca",[p_id("1312bigbendbirding",2)],["txbbnp","12/2013"],3795825);
  birds[j++] = new myBird("USA","15-01-02T09:54","COLUMBID","Common Ground-Dove","地鸠","Columbina passerina",p_id("1501prbirding",[8,19]),["prrinc","1/2015","Male","prcnwr","1/2015","Female"],3760787);
//birds[j++] = new myBird("   ","16-00-00T00:00","OPISTHOC","Hoatzin","麝雉","Opisthocomus hoazin",[m_id("")],["mdbhrp","9/2015"],100506);
//birds[j++] = new myBird("   ","16-00-00T00:00","MUSOPHAG","Great Blue Turaco","大蓝蕉鹃","Corythaeola cristata",[m_id("")],["mdbhrp","9/2015"],3633642);
  birds[j++] = new myBird("USA","06-07-30T14:31","CUCULIDA","Yellow-billed Cuckoo","黄嘴美洲鹃","Coccyzus americanus",[p_id("1512bhill",40),m_id("20160925_102_Yellow-billedCuckoo")],["mdbhrp","9/2015","mdbhrp","9/2016"],4888518);
//birds[j++] = new myBird("USA","16-00-00T00:00","CUCULIDA","Black-billed Cuckoo","黑嘴美洲鹃","Coccyzus erythropthalmus",[m_id("")],["nyjbwr","5/2016"],4888584);
  birds[j++] = new myBird("USA","16-06-11T08:39","CUCULIDA","Mangrove Cuckoo","红树美洲鹃","Coccyzus minor",p_id("1606florida",[16,15,17]),["flbppm","6/2016"],4888504);
  birds[j++] = new myBird("USA","13-12-25T14:53","CUCULIDA","Greater Roadrunner","走鹃","Geococcyx californianus",[p_id("1312bigbendbirding",5)],["txbbnp","12/2013"],[608807,7056939]);
  birds[j++] = new myBird("USA","15-01-03T10:17","CUCULIDA","Smooth-billed Ani","滑嘴犀鹃","Crotophaga ani",[p_id("1501prbirding",16)],["prcnwr","1/2015"],cornellurl(205336),706315);
  birds[j++] = new myBird("USA","16-06-25T11:19","TYTONIDA","Barn Owl","仓鸮","Tyto alba",m_id(["20160625_083_BarnOwl","20160625_082_BarnOwl"]),["nyjbwr","6/2016"],15246);
//birds[j++] = new myBird("USA","16-00-00T00:00","STRIGIDA","Eastern Screech-Owl","东美角鸮","Megascops asio",[m_id("")],["scpitt","9/2015"],3859920);
  birds[j++] = new myBird("USA","16-03-26T11:53","STRIGIDA","Great Horned Owl","美洲雕鸮","Bubo virginianus",[m_id("20160326_024_GreatHornedOwl")],["ncoutb","3/2016","",""," at Oregon Inlet Marina","俄勒冈入海口船坞"],3838605);
//birds[j++] = new myBird("USA","16-00-00T00:00","STRIGIDA","Snowy Owl","雪鸮","Bubo scandiacus",[m_id("")],["mapnwr","12/2015"],1483);
  birds[j++] = new myBird("USA","16-06-10T08:23","STRIGIDA","Burrowing Owl","穴小鸮","Athene cunicularia",p_id("1606florida",[8,7]),["flbrpp","6/2016"],1115124);
  birds[j++] = new myBird("USA","06-05-07T18:43","STRIGIDA","Barred Owl","横斑林鸮","Strix varia",m_id(["20150425_058_BarredOwl","20160409_033_BarredOwl"]),["mdbmnt","4/2015","arbitr","4/2016","Agricultural History Farm Park, Maryland","农史农场公园，马里兰州"],3886420);
//birds[j++] = new myBird("USA","16-00-00T00:00","STRIGIDA","Short-eared Owl","短耳鸮","Asio flammeus",[m_id("")],["scpitt","9/2015"],120964);
//birds[j++] = new myBird("   ","16-00-00T00:00","PODARGID","Tawny Frogmouth","茶色蟆口鸱 ","Podargus strigoides",[m_id("")],["mdbhrp","9/2015"],1598028);
//birds[j++] = new myBird("   ","16-00-00T00:00","STEATORN","Oilbird","油鸱","Steatornis caripensis",[m_id("")],["mdbhrp","9/2015"],706364);
//birds[j++] = new myBird("   ","16-00-00T00:00","NYCTIBII","Great Potoo","大林鸱","Nyctibius grandis",[m_id("")],["mdbhrp","9/2015"],4889783);
  birds[j++] = new myBird("USA","16-06-14T08:11","CAPRIMUL","Common Nighthawk","美洲夜鹰","Chordeiles minor",[p_id("1606florida",27)],["scbwma","6/2016"],1610639);
//birds[j++] = new myBird("USA","16-00-00T00:00","CAPRIMUL","Lesser Nighthawk","小灰眉夜鹰","Chordeiles acutipennis",[m_id("")],["nvdnwr","7/2015"],cornellurl(216536),4889822);
//birds[j++] = new myBird("USA","16-00-00T00:00","CAPRIMUL","Chuck-will's-widow","卡氏夜鹰","Antrostomus carolinensis",[m_id("")],["scpitt","9/2015"],4889374);
//birds[j++] = new myBird("USA","16-00-00T00:00","CAPRIMUL","Eastern Whip-poor-will","三声夜鹰","Antrostomus vociferus",[m_id("")],["scpitt","9/2015"],1623143);
//birds[j++] = new myBird("   ","16-00-00T00:00","AEGOTHEL","Australian Owlet-nightjar","澳洲裸鼻鸱","Aegotheles cristatus",[m_id("")],["mdbhrp","9/2015"],706359);
//birds[j++] = new myBird("   ","16-00-00T00:00","HEMIPROC","Crested Treeswift","凤头雨燕","Hemiprocne coronata",[m_id("")],["mdbhrp","9/2015"],286231);
  birds[j++] = new myBird("USA","15-07-19T08:02","APODIDAE","Chimney Swift","烟囱雨燕","Chaetura pelagica",[m_id("20160618_077_ChimneySwift")],["arbitr","6/2016","Lewes, Delaware","刘易斯，特拉华州"],1156237);
//birds[j++] = new myBird("USA","16-00-00T00:00","TROCHILI","Magnificent Hummingbird","大蜂鸟","Eugenes fulgens",[m_id("")],["mdbhrp","9/2015"],4845773);
  birds[j++] = new myBird("USA","06-09-07T17:00","TROCHILI","Ruby-throated Hummingbird","红喉北蜂鸟","Archilochus colubris",p_id("1107brookside",[10,13]),["mdbrgd","7/2011","Female/immature"],4901653);
  birds[j++] = new myBird("USA","15-07-08T09:26","TROCHILI","Black-chinned Hummingbird","黑颏北蜂鸟","Archilochus alexandri",[p_id("1507birdingwest",7)],["orhayd","7/2015","Immature"],4891704);
  birds[j++] = new myBird("USA","13-12-25T17:25","TROCHILI","Anna's Hummingbird","安氏蜂鸟","Calypte anna",p_id("1312bigbendbirding",[12,13,14]),["txbbnp","12/2013","Female","txbbnp","12/2013","Male","txbbnp","12/2013","Female"],4891678);
//birds[j++] = new myBird("USA","16-00-00T00:00","TROCHILI","Costa's Hummingbird","科氏蜂鸟","Calypte costae",[m_id("")],["mdbhrp","9/2015"],4891661);
//birds[j++] = new myBird("USA","16-00-00T00:00","TROCHILI","Broad-tailed Hummingbird","宽尾煌蜂鸟","Selasphorus platycercus",[m_id("")],["mdbhrp","9/2015"],4908174);
  birds[j++] = new myBird("USA","15-07-11T09:57","TROCHILI","Rufous Hummingbird","棕煌蜂鸟","Selasphorus rufus",[p_id("1507birdingwest",31)],["arbitr","7/2015","Female, Point Arena, California","雌性，波因特阿里纳，加利福尼亚州"],4901729);
  birds[j++] = new myBird("USA","15-01-03T10:48","TROCHILI","Antillean Mango","黑胸芒果蜂鸟","Anthracothorax dominicus",[p_id("1501prbirding",17)],["prcnwr","1/2015","Female"],cornellurl(239291));
  birds[j++] = new myBird("USA","15-01-08T07:32","TROCHILI","Green-throated Carib","绿喉蜂鸟","Eulampis holosericeus",p_id("1501prbirding",[38,53]),["prsanj","1/2015"],cornellurl(25022),4871241);
//birds[j++] = new myBird("   ","16-00-00T00:00","COLIIDAE","Speckled Mousebird","斑鼠鸟","Colius striatus",[m_id("")],["mdbhrp","9/2015"],4846814);
//birds[j++] = new myBird("USA","16-00-00T00:00","TROGONID","Elegant Trogon","铜尾美洲咬鹃","Trogon elegans",[m_id("")],["mdbhrp","9/2015"],6867223);
//birds[j++] = new myBird("   ","16-00-00T00:00","LEPTOSOM","Cuckoo Roller","鹃鴗","Leptosomus discolor",[m_id("")],["mdbhrp","9/2015"],657508);
//birds[j++] = new myBird("   ","16-00-00T00:00","CORACIID","Indian Roller","棕胸佛法僧","Coracias benghalensis",[m_id("")],["mdbhrp","9/2015"],287069);
//birds[j++] = new myBird("   ","16-00-00T00:00","BRACHYPT","Pitta-like Ground Roller","地三宝鸟","Atelornis pittoides",[m_id("")],["mdbhrp","9/2015"],4886798);
  birds[j++] = new myBird("CHN","16-01-05T10:21","ALCEDINI","Common Kingfisher","普通翠鸟","Alcedo atthis",p_id("1601china",[23,30]),["cnjsxp","1/2016"],283611);
  birds[j++] = new myBird("USA","06-04-09T09:34","ALCEDINI","Belted Kingfisher","白腹鱼狗","Megaceryle alcyon",[p_id("1512bhill",37),m_id("20160806_090_BeltedKingfisher(F)")],["mdbhrp","8/2015","Male","mdlily","8/2016","Female"],2669932);
  birds[j++] = new myBird("USA","15-01-05T06:39","TODIDAE ","Puerto Rican Tody","波多黎各短尾鴗","Todus mexicanus",p_id("1501prbirding",[23,29]),["prceci","1/2015","Male","prceci","1/2015","Female"],cornellurl(285496),138654);
//birds[j++] = new myBird("   ","16-00-00T00:00","MOMOTIDA","Tody Motmot","短尾翠鴗","Hylomanes momotula",[m_id("")],["mdbhrp","9/2015"],10078743);
//birds[j++] = new myBird("   ","16-00-00T00:00","MEROPIDA","Blue-throated Bee-eater","蓝喉蜂虎","Merops viridis",[m_id("")],["mdbhrp","9/2015"],32586);
//birds[j++] = new myBird("   ","16-00-00T00:00","UPUPIDAE","Eurasian Hoopoe","戴胜","Upupa epops",[m_id("")],["mdbhrp","9/2015"],19208);
//birds[j++] = new myBird("   ","16-00-00T00:00","PHOENICU","Abyssinian Scimitarbill","小弯嘴林戴胜","Rhinopomastus minor",[m_id("")],["mdbhrp","9/2015"],713089);
//birds[j++] = new myBird("   ","16-00-00T00:00","BUCORVID","Southern Ground Hornbill","红脸地犀鸟","Bucorvus leadbeateri",[m_id("")],["mdbhrp","9/2015"],713287);
//birds[j++] = new myBird("   ","16-00-00T00:00","BUCEROTI","African Grey Hornbill","黑嘴弯嘴犀鸟","Lophoceros nasutus",[m_id("")],["mdbhrp","9/2015"],4886919);
//birds[j++] = new myBird("   ","16-00-00T00:00","GALBULID","Rufous-tailed Jacamar","棕尾鹟鴷","Galbula ruficauda",[m_id("")],["mdbhrp","9/2015"],713296);
//birds[j++] = new myBird("   ","16-00-00T00:00","BUCCONID","White-necked Puffbird","白颈蓬头鴷","Notharchus hyperrhynchus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("   ","16-00-00T00:00","CAPITONI","Scarlet-crowned Barbet","红顶须鴷","Capito aurovirens",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("   ","16-00-00T00:00","SEMNORNI","Toucan Barbet","巨嘴拟鴷","Semnornis ramphastinus",[m_id("")],["mdbhrp","9/2015"],3263685);
//birds[j++] = new myBird("   ","16-00-00T00:00","RAMPHAST","Green-billed Toucan","红胸巨嘴鸟","Ramphastos dicolorus",[m_id("")],["mdbhrp","9/2015"],2541735);
//birds[j++] = new myBird("   ","16-00-00T00:00","MEGALAIM","Great Barbet","大拟啄木鸟","Megalaima virens",[m_id("")],["mdbhrp","9/2015"],243041);
//birds[j++] = new myBird("   ","16-00-00T00:00","LYBIIDAE","Grey-throated Barbet","灰喉拟鴷","Gymnobucco bonapartei",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("   ","16-00-00T00:00","INDICATO","Yellow-rumped Honeyguide","黄腰响蜜鴷","Indicator xanthonotus",[m_id("")],["mdbhrp","9/2015"],287213);
  birds[j++] = new myBird("USA","14-06-01T11:12","PICIDAE ","Red-headed Woodpecker","红头啄木鸟","Melanerpes erythrocephalus",[m_id("20140531_002_Red-headedWoodpecker")],["arbitr","5/2014","Piney Grove Preserve, Sussex County, Virginia","松林保护区，萨塞克斯郡，弗吉尼亚州"],3912932);
  birds[j++] = new myBird("USA","15-07-12T09:19","PICIDAE ","Acorn Woodpecker","橡树啄木鸟","Melanerpes formicivorus",[p_id("1507birdingwest",37)],["cayokp","7/2015","Male"],986912);
//birds[j++] = new myBird("USA","16-00-00T00:00","PICIDAE ","Gila Woodpecker","吉拉啄木鸟","Melanerpes uropygialis",[m_id("")],["mdbhrp","9/2015"],2649065);
  birds[j++] = new myBird("USA","13-12-25T15:02","PICIDAE ","Golden-fronted Woodpecker","金额啄木鸟","Melanerpes aurifrons",[p_id("1312bigbendbirding",6)],["txbbnp","12/2013"],3912752);
  birds[j++] = new myBird("USA","06-03-05T15:33","PICIDAE ","Red-bellied Woodpecker","红腹啄木鸟","Melanerpes carolinus",[p_id("1512bhill",22),p_id("1606florida",19)],["mdbhrp","2/2015","Male","flmahp","6/2016","Female"],3912834);
  birds[j++] = new myBird("USA","15-01-01T14:01","PICIDAE ","Puerto Rican Woodpecker","波多黎各啄木鸟","Melanerpes portoricensis",p_id("1501prbirding",[1,10]),["prbaya","1/2015","Male","prrinc","1/2015","Female"],cornellurl(308536),3913188);
  birds[j++] = new myBird("USA","06-02-19T11:51","PICIDAE ","Yellow-bellied Sapsucker","黄腹吸汁啄木鸟","Sphyrapicus varius",["2006cobirding/Yellow-belliedSapsucker_M_20060313_018",m_id("20151220_139_Yellow-breastedSapsucker(I)")],["mdcorl","3/2006","Male","mdloch","12/2015","Immature"],984882);
//birds[j++] = new myBird("CHN","16-00-00T00:00","PICIDAE ","Great Spotted Woodpecker","大斑啄木鸟","Dendrocopos major",[p_id("1601china",)],["cnbjjp","1/2016"],15618);
  birds[j++] = new myBird("USA","13-12-25T14:40","PICIDAE ","Ladder-backed Woodpecker","纹背啄木鸟","Picoides scalaris",[p_id("1312bigbendbirding",1)],["txbbnp","12/2013","Male"],3949314);
  birds[j++] = new myBird("USA","05-11-26T09:17","PICIDAE ","Downy Woodpecker","绒啄木鸟","Picoides pubescens",[m_id("20160130_007_DownyWoodpecker(M)"),p_id("1512boston",3),"2007cobirding/20070120_010_DownyWoodpecker(F)"],["mdbhrp","1/2016","Male","mapnwr","12/2015","Male","mdcocn","1/2007","Female"],3949309);
  birds[j++] = new myBird("USA","06-08-12T10:22","PICIDAE ","Hairy Woodpecker","长嘴啄木鸟","Picoides villosus",[p_id("1609vtcanbirding",12),p_id("2008cobirding",29)],["calddm","9/2016","Male","mdcorl","5/2008","Female"],3949333);
  birds[j++] = new myBird("USA","15-09-05T11:04","PICIDAE ","Red-cockaded Woodpecker","红顶啄木鸟","Picoides borealis",p_id("1509charleston",[2,3]),["sccnwr","9/2015"],3919450);
  birds[j++] = new myBird("USA","13-07-14T18:56","PICIDAE ","American Three-toed Woodpecker","美洲三趾啄木鸟","Picoides dorsalis",[p_id("1307alaskabirding",4)],["akknpp","7/2013"],3949100);
  birds[j++] = new myBird("USA","16-09-15T08:06","PICIDAE ","Black-backed Woodpecker","黑背啄木鸟","Picoides arcticus",p_id("1609vtcanbirding",[4,5]),["vtwwma","9/2016","Female"],3919407);
  birds[j++] = new myBird("USA","08-12-13T15:36","PICIDAE ","Northern Flicker","北扑翅鴷","Colaptes auratus",[p_id("1412mckee-beshers",13),m_id("20160625_084_NorthernFlicker(F)"),m_id("20160625_085_NorthernFlicker(F)")],["mdmwma","10/2014","Male, yellow-shafted","黄色雄性","nyjbwr","6/2016","Female, yellow-shafted","黄色雌性"],3945688);
//birds[j++] = new myBird("USA","16-00-00T00:00","PICIDAE ","Gilded Flicker","黄扑翅鴷","Colaptes chrysoides",[m_id("")],["mdbhrp","9/2015"],3905287);
  birds[j++] = new myBird("USA","05-12-28T10:22","PICIDAE ","Pileated Woodpecker","北美黑啄木鸟","Dryocopus pileatus",[p_id("1412mckee-beshers",23),"2007cobirding/20070203_019_PileatedWoodpecker(M)"],["mdmwma","11/2014","Female","mdcovl","2/2007","Male"],3912376);
  birds[j++] = new myBird("USA","15-03-21T10:26","FALCONID","American Kestrel","美洲隼","Falco sparverius",[m_id("20150321_041_AmericanKestrel(M)")],["mdftmh","3/2015","Male"],1468037);
  birds[j++] = new myBird("USA","15-03-02T10:16","FALCONID","Merlin","灰背隼","Falco columbarius",[m_id("20150302_028_Merlin(M)"),m_id("20150302_029_Merlin(M)"),p_id("1609vtcanbirding",16)],["mdcovl","3/2015","Male (Taiga)","雄性(泰加林种)","mdcovl","3/2015","Male (Taiga)","雄性(泰加林种)","cactnw","9/2016","Female"],[14504,11369887]);
//birds[j++] = new myBird("USA","16-00-00T00:00","FALCONID","Gyrfalcon","矛隼","Falco rusticolus",[m_id("")],["mdbhrp","9/2015"],184717);
  birds[j++] = new myBird("USA","15-06-07T11:55","FALCONID","Peregrine Falcon","游隼","Falco peregrinus",[m_id("20150607_076_PeregrineFalcon")],["mdcocn","6/2015","",""," at Maryland Heights","马里兰高地一带"],14276);
//birds[j++] = new myBird("   ","16-00-00T00:00","STRIGOPI","Kakapo","鸮鹦鹉","Strigops habroptila",[m_id("")],["mdbhrp","9/2015"],79914);
//birds[j++] = new myBird("   ","16-00-00T00:00","CACATUID","Palm Cockatoo","棕榈凤头鹦鹉","Probosciger aterrimus",[m_id("")],["mdbhrp","9/2015"],49883);
  birds[j++] = new myBird("USA","15-01-08T12:31","PSITTACI","Monk Parakeet","灰胸鹦哥","Myiopsitta monachus",[p_id("1501prbirding",47)],["prosan","1/2015"],1070745);
  birds[j++] = new myBird("USA","15-01-02T07:03","PSITTACI","White-winged Parakeet","淡黄翅鹦哥","Brotogeris versicolurus",[p_id("1501prbirding",3)],["prmaya","1/2015"],cornellurl(190296),9229616);
//birds[j++] = new myBird("USA","16-00-00T00:00","PSITTACI","Yellow-chevroned Parakeet","黄翅斑鹦哥","Brotogeris chiriri",[m_id("")],["natzo","4/2005"],cornellurl(190456),2426267);
  birds[j++] = new myBird("USA","16-06-11T09:31","PSITTACI","Orange-winged Parrot","橙翅亚马逊鹦鹉","Amazona amazonica",[p_id("1606florida",20)],["flmahp","4/2005"],cornellurl(199256),113704);
//birds[j++] = new myBird("USA","16-00-00T00:00","PSITTACI","Nanday Parakeet","南达锥尾鹦鹉","Aratinga nenday",[m_id("")],["natzo","4/2005"],cornellurl(180661),994536);
//birds[j++] = new myBird("   ","16-00-00T00:00","PSITTACI","Scarlet Macaw","绯红金刚鹦鹉","Ara macao",["0504zoo/0504zoo__23"],["natzo","4/2005"],cornellurl(20990),139631);
  birds[j++] = new myBird("USA","16-06-12T08:14","PSITTACI","Blue-crowned Parakeet","蓝冠鹦哥","Thectocercus acuticaudatus",[p_id("1606florida",24)],["arbitr","6/2016","South Beach, Miami, Florida","迈阿密南滩，佛罗里达州"],cornellurl(185176),46205);
//birds[j++] = new myBird("USA","16-00-00T00:00","PSITTACI","Mitred Parakeet","米特雷锥尾鹦鹉","Psittacara mitratus",[m_id("")],["arbitr","6/2016","Lincoln Road Mall, Miami, Florida","迈阿密林肯路购物中心，佛罗里达州"],cornellurl(185976),4884817);
  birds[j++] = new myBird("USA","16-06-12T07:14","PSITTACI","Red-masked Parakeet","红头鹦鹉","Psittacara erythrogenys",p_id("1606florida",[22,21]),["arbitr","6/2016","Lincoln Road Mall, Miami, Florida","迈阿密林肯路购物中心，佛罗里达州"],cornellurl(186136),1257150);
  birds[j++] = new myBird("USA","15-07-12T11:15","PSITTACU","Rose-ringed Parakeet","红领绿鹦鹉","Psittacula krameri",p_id("1507birdingwest",[50,48]),["cabeap","7/2015","Male","cabeap","7/2015","Female"],wikiurl("Rose-ringed Parakeet"),35483);
//birds[j++] = new myBird("   ","16-00-00T00:00","ACANTHIS","Rifleman","刺鹩","Acanthisitta chloris",[m_id("")],["mdbhrp","9/2015"],716906);
//birds[j++] = new myBird("   ","16-00-00T00:00","EURYLAIM","African Broadbill","非洲阔嘴鸟","Smithornis capensis",[m_id("")],["mdbhrp","9/2015"],4107012);
//birds[j++] = new myBird("   ","16-00-00T00:00","PITTIDAE","Blue-rumped Pitta","蓝背八色鸫","Hydrornis soror",[m_id("")],["mdbhrp","9/2015"],272717);
//birds[j++] = new myBird("   ","16-00-00T00:00","FURNARII","Slender-billed Miner","掘穴雀","Geositta tenuirostris",[m_id("")],["mdbhrp","9/2015"],cornellurl(323741),14397450);
//birds[j++] = new myBird("   ","16-00-00T00:00","THAMNOPH","Fasciated Antshrike","带斑蚁鵙","Cymbilaimus lineatus",[m_id("")],["mdbhrp","9/2015"],4192427);
//birds[j++] = new myBird("   ","16-00-00T00:00","FORMICAR","Rufous-capped Antthrush","棕顶蚁鸫","Formicarius colma",[m_id("")],["mdbhrp","9/2015"],4083192);
//birds[j++] = new myBird("   ","16-00-00T00:00","GRALLARI","Variegated Antpitta","杂色蚁鸫","Grallaria varia",[m_id("")],["mdbhrp","9/2015"],4092528);
//birds[j++] = new myBird("   ","16-00-00T00:00","CONOPOPH","Chestnut-belted Gnateater","栗带食蚊鸟","Conopophaga aurita",[m_id("")],["mdbhrp","9/2015"],714978);
//birds[j++] = new myBird("   ","16-00-00T00:00","RHINOCRY","Chucao Tapaculo","智利窜鸟","Scelorchilus rubecula",[m_id("")],["mdbhrp","9/2015"],4283333);
//birds[j++] = new myBird("   ","16-00-00T00:00","MELANOPA","Collared Crescentchest","领月胸窜鸟","Melanopareia torquata",[m_id("")],["mdbhrp","9/2015"],4269829);
  birds[j++] = new myBird("USA","15-01-03T10:13","TYRANNID","Caribbean Elaenia","加勒比拟霸鹟","Elaenia martinica",[p_id("1501prbirding",15)],["prcnwr","1/2015"],cornellurl(425961),4428283);
//birds[j++] = new myBird("USA","16-00-00T00:00","TYRANNID","Olive-sided Flycatcher","绿胁绿霸鹟","Contopus cooperi",[m_id("")],["mdbhrp","9/2015"],4400045);
  birds[j++] = new myBird("USA","06-08-20T11:26","TYRANNID","Eastern Wood-Pewee","东绿霸鹟","Contopus virens",[m_id("20150703_080_EasternWood-Pewee")],["mdcocn","7/2015","",""," at Maryland Heights","马里兰高地一带"],4423908);
  birds[j++] = new myBird("USA","15-08-15T07:20","TYRANNID","Yellow-bellied Flycatcher","黄腹纹霸鹟","Empidonax flaviventris",[p_id("1512bhill",29)],["mdbhrp","8/2015"],1986969);
  birds[j++] = new myBird("USA","15-05-31T09:31","TYRANNID","Acadian Flycatcher","绿纹霸鹟","Empidonax virescens",[m_id("20160508_045_AcadianFlycatcher")],["mdpvsp","5/2016"],4441650);
  birds[j++] = new myBird("USA","15-05-17T09:46","TYRANNID","Alder Flycatcher","恺木纹霸鹟","Empidonax alnorum",[p_id("1505bombayhook",5)],["debnwr","5/2015"],4438830);
  birds[j++] = new myBird("USA","09-07-03T10:16","TYRANNID","Willow Flycatcher","纹霸鹟","Empidonax traillii",[p_id("1505puffin",2)],["ctciws","5/2015"],6991496);
  birds[j++] = new myBird("USA","15-08-29T07:34","TYRANNID","Least Flycatcher","小纹霸鹟","Empidonax minimus",[p_id("1512bhill",35)],["mdbhrp","8/2015"],4441565);
  birds[j++] = new myBird("USA","13-12-25T18:43","TYRANNID","Black Phoebe","黑长尾霸鹟","Sayornis nigricans",[p_id("1312bigbendbirding",18)],["txbbnp","12/2013"],4561498);
  birds[j++] = new myBird("USA","06-04-14T16:40","TYRANNID","Eastern Phoebe","灰胸长尾霸鹟","Sayornis phoebe",[p_id("1408annapolisbirding",18)],["mdgrpt","8/2014"],4561672);
  birds[j++] = new myBird("USA","13-12-25T15:24","TYRANNID","Say's Phoebe","棕腹长尾霸鹟","Sayornis saya",[p_id("1507birdingwest",4)],["nvdnwr","7/2015"],4561779);
  birds[j++] = new myBird("USA","13-12-25T14:52","TYRANNID","Vermilion Flycatcher","朱红霸鹟","Pyrocephalus rubinus",p_id("1312bigbendbirding",[3,4]),["txbbnp","12/2013","Male"],4560677);
  birds[j++] = new myBird("USA","15-07-12T09:58","TYRANNID","Ash-throated Flycatcher","灰喉蝇霸鹟","Myiarchus cinerascens",[p_id("1507birdingwest",43)],["cayokp","7/2015"],4533408);
  birds[j++] = new myBird("USA","14-08-10T10:54","TYRANNID","Great Crested Flycatcher","大冠蝇霸鹟","Myiarchus crinitus",m_id(["20160530_074_GreatCrestedFlycatcher","20160530_075_GreatCrestedFlycatcher"]),["arbitr","5/2016","Oregon Ridge Park, Baltimore, Maryland","巴尔的摩俄勒冈岭公园，马里兰州"],4533479);
  birds[j++] = new myBird("USA","15-01-03T10:03","TYRANNID","Puerto Rican Flycatcher","波多黎各蝇霸鹟","Myiarchus antillarum",[p_id("1501prbirding",14)],["prcnwr","1/2015"],cornellurl(477196),4533267);
//birds[j++] = new myBird("USA","16-00-00T00:00","TYRANNID","Tropical Kingbird","热带王霸鹟","Tyrannus melancholicus",[m_id("")],["prcnwr","1/2015"],4572844);
//birds[j++] = new myBird("USA","16-00-00T00:00","TYRANNID","Cassin's Kingbird","卡氏王霸鹟","Tyrannus vociferans",[m_id("")],["prcnwr","1/2015"],4576852);
  birds[j++] = new myBird("USA","15-07-12T10:38","TYRANNID","Western Kingbird","西王霸鹟","Tyrannus verticalis",[p_id("1507birdingwest",46)],["cabeap","7/2015"],4576849);
  birds[j++] = new myBird("USA","06-05-06T11:03","TYRANNID","Eastern Kingbird","东王霸鹟","Tyrannus tyrannus",[p_id("1512bhill",28)],["mdbhrp","6/2015"],4576848);
  birds[j++] = new myBird("USA","15-01-05T14:08","TYRANNID","Gray Kingbird","灰王霸鹟","Tyrannus dominicensis",[p_id("1501prbirding",43)],["prosan","1/2015"],cornellurl(481996),4572808);
  birds[j++] = new myBird("USA","15-01-02T07:13","TYRANNID","Loggerhead Kingbird","圆头王霸鹟","Tyrannus caudifasciatus",[p_id("1501prbirding",4)],["prmaya","1/2015"],cornellurl(482156),4572314);
//birds[j++] = new myBird("USA","16-00-00T00:00","TYRANNID","Scissor-tailed Flycatcher","剪尾王霸鹟","Tyrannus forficatus",[m_id("")],["prcnwr","1/2015"],715420);
//birds[j++] = new myBird("   ","16-00-00T00:00","COTINGID","Andean Cock-of-the-rock","安第斯冠伞鸟","Rupicola peruvianus",[m_id("")],["mdbhrp","9/2015"],4334103);
//birds[j++] = new myBird("   ","16-00-00T00:00","PIPRIDAE","Golden-winged Manakin","金翅娇鹟","Masius chrysopterus",[m_id("")],["mdbhrp","9/2015"],4362397);
//birds[j++] = new myBird("   ","16-00-00T00:00","TITYRIDA","Sharpbill","尖喙鸟","Oxyruncus cristatus",[m_id("")],["mdbhrp","9/2015"],715433);
//birds[j++] = new myBird("   ","16-00-00T00:00","MENURIDA","Superb Lyrebird","华丽琴鸟","Menura novaehollandiae",[m_id("")],["mdbhrp","9/2015"],716925);
//birds[j++] = new myBird("   ","16-00-00T00:00","ATRICHOR","Rufous Scrubbird","棕薮鸟","Atrichornis rufescens",[m_id("")],["mdbhrp","9/2015"],716930);
//birds[j++] = new myBird("   ","16-00-00T00:00","PTILONOR","White-eared Catbird","白耳园丁鸟","Ailuroedus buccoides",[m_id("")],["mdbhrp","9/2015"],6114652);
//birds[j++] = new myBird("   ","16-00-00T00:00","CLIMACTE","White-throated Treecreeper","白喉短嘴旋木雀","Cormobates leucophaea",[m_id("")],["mdbhrp","9/2015"],4815309);
//birds[j++] = new myBird("   ","16-00-00T00:00","MALURIDA","Wallace's Fairywren","华氏鹩莺","Sipodotus wallacii",[m_id("")],["mdbhrp","9/2015"],4862192);
//birds[j++] = new myBird("   ","16-00-00T00:00","MELIPHAG","Black Honeyeater","黑吸蜜鸟","Sugomel nigrum",[m_id("")],["mdbhrp","9/2015"],4800549);
//birds[j++] = new myBird("   ","16-00-00T00:00","DASYORNI","Eastern Bristlebird","棕刺莺","Dasyornis brachypterus",[m_id("")],["mdbhrp","9/2015"],4813459);
//birds[j++] = new myBird("   ","16-00-00T00:00","PARDALOT","Spotted Pardalote","斑翅食蜜鸟","Pardalotus punctatus",[m_id("")],["mdbhrp","9/2015"],4807832);
//birds[j++] = new myBird("   ","16-00-00T00:00","ACANTHIZ","Large-billed Gerygone","沼泽刺嘴莺","Gerygone magnirostris",[m_id("")],["mdbhrp","9/2015"],828995);
//birds[j++] = new myBird("   ","16-00-00T00:00","POMATOST","Grey-crowned Babbler","灰冠弯嘴鹛","Pomatostomus temporalis",[m_id("")],["mdbhrp","9/2015"],4848372);
//birds[j++] = new myBird("   ","16-00-00T00:00","ORTHONYC","Australian Logrunner","刺尾鸫","Orthonyx temminckii",[m_id("")],["mdbhrp","9/2015"],4862440);
//birds[j++] = new myBird("   ","16-00-00T00:00","CNEMOPHI","Loria's Satinbird","鸦嘴极乐鸟","Cnemophilus loriae",[m_id("")],["mdbhrp","9/2015"],4800173);
//birds[j++] = new myBird("   ","16-00-00T00:00","MELANOCH","Black Berrypecker","黑啄果鸟","Melanocharis nigra",[m_id("")],["mdbhrp","9/2015"],4811542);
//birds[j++] = new myBird("   ","16-00-00T00:00","PARAMYTH","Tit Berrypecker","拟雀啄果鸟","Oreocharis arfaki",[m_id("")],["mdbhrp","9/2015"],4811592);
//birds[j++] = new myBird("   ","16-00-00T00:00","CALLAEID","North Island Kokako","北岛垂耳鸦","Callaeas wilsoni",[m_id("")],["mdbhrp","9/2015"],99987);
//birds[j++] = new myBird("   ","16-00-00T00:00","NOTIOMYS","Stitchbird","缝叶吸蜜鸟","Notiomystis cincta",[m_id("")],["mdbhrp","9/2015"],4822690);
//birds[j++] = new myBird("   ","16-00-00T00:00","PSOPHODI","Eastern Whipbird","绿啸冠鸫","Psophodes olivaceus",[m_id("")],["mdbhrp","9/2015"],4862559);
//birds[j++] = new myBird("   ","16-00-00T00:00","PLATYSTE","African Shrike-flycatcher","非洲鵙鹟","Megabyas flammulatus",[m_id("")],["mdbhrp","9/2015"],-2853);
//birds[j++] = new myBird("CHN","16-00-00T00:00","TEPHRODO","Large Woodshrike","钩嘴林鵙","Tephrodornis virgatus",[p_id("1601china",)],["cnbjjp","1/2016"],275468);
//birds[j++] = new myBird("   ","16-00-00T00:00","PRIONOPI","White-crested Helmetshrike","长冠盔鵙","Prionops plumatus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("   ","16-00-00T00:00","MALACONO","Grey-headed Bushshrike","灰头丛鵙","Malaconotus blanchoti",[m_id("")],["mdbhrp","9/2015"],10109776);
//birds[j++] = new myBird("   ","16-00-00T00:00","MACHAERI","Yellow-breasted Boatbill","黄胸船嘴鹟","Machaerirhynchus flaviventer",[m_id("")],["mdbhrp","9/2015"],4846060);
//birds[j++] = new myBird("   ","16-00-00T00:00","VANGIDAE","Red-tailed Vanga","红尾钩嘴鵙","Calicalicus madagascariensis",[m_id("")],["mdbhrp","9/2015"],1623103);
//birds[j++] = new myBird("   ","16-00-00T00:00","PITYRIAS","Bornean Bristlehead","棘头鵙","Pityriasis gymnocephala",[m_id("")],["mdbhrp","9/2015"],-4138);
//birds[j++] = new myBird("   ","16-00-00T00:00","ARTAMIDA","Ashy Woodswallow","灰燕鵙","Artamus fuscus",[m_id("")],["mdbhrp","9/2015"],855932);
//birds[j++] = new myBird("   ","16-00-00T00:00","RHAGOLOG","Mottled Berryhunter","斑啸鹟","Rhagologus leucostigma",[m_id("")],["mdbhrp","9/2015"],4863010);
//birds[j++] = new myBird("   ","16-00-00T00:00","AEGITHIN","Common Iora","黑翅雀鹎","Aegithina tiphia",[m_id("")],["mdbhrp","9/2015"],685744);
//birds[j++] = new myBird("CHN","16-00-00T00:00","CAMPEPHA","Grey-chinned Minivet","灰喉山椒鸟","Pericrocotus solaris",[p_id("1601china",)],["cnbjjp","1/2016"],275921);
//birds[j++] = new myBird("CHN","16-00-00T00:00","CAMPEPHA","Scarlet Minivet","赤红山椒鸟","Pericrocotus speciosus",[p_id("1601china",)],["cnbjjp","1/2016"],275933);
//birds[j++] = new myBird("   ","16-00-00T00:00","MOHOUIDA","Whitehead","白头刺莺","Mohoua albicilla",[m_id("")],["mdbhrp","9/2015"],4847537);
//birds[j++] = new myBird("   ","16-00-00T00:00","NEOSITTI","Varied Sittella","杂色澳䴓","Daphoenositta chrysoptera",[m_id("")],["mdbhrp","9/2015"],7151376);
//birds[j++] = new myBird("   ","16-00-00T00:00","EULACEST","Wattled Ploughbill","肉垂鵙雀鹟","Eulacestoma nigropectus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("   ","16-00-00T00:00","OREOICID","Rufous-naped Whistler","棕颈啸鹟","Aleadryas rufinucha",[m_id("")],["mdbhrp","9/2015"],4862987);
//birds[j++] = new myBird("   ","16-00-00T00:00","PACHYCEP","Crested Shriketit","鵙雀鹟","Falcunculus frontatus",[m_id("")],["mdbhrp","9/2015"],7143812);
  birds[j++] = new myBird("CHN","16-01-10T09:41","LANIIDAE","Long-tailed Shrike","棕背伯劳","Lanius schach",[p_id("1601china",43)],["cnlynv","1/2016"],56873);
  birds[j++] = new myBird("USA","16-02-05T09:01","LANIIDAE","Loggerhead Shrike","呆头伯劳","Lanius ludovicianus",[m_id("20160205_014_LoggerheadShrike")],["arbitr","2/2016","Dry Bridge Road, Frederick County, Maryland","干桥路，弗雷德里克郡，马里兰州"],4801026);
//birds[j++] = new myBird("USA","16-00-00T00:00","LANIIDAE","Northern Shrike","灰伯劳","Lanius excubitor",[m_id("")],["mdbhrp","9/2015"],71554);
  birds[j++] = new myBird("USA","15-09-13T07:30","VIREONID","White-eyed Vireo","白眼莺雀","Vireo griseus",[m_id("20160911_095_White-eyedVireo"),m_id("20150913_095_White-eyedVireo(I)")],["mdlbwt","9/2016","mdlbwt","9/2015","Immature"],4791453);
//birds[j++] = new myBird("USA","16-00-00T00:00","VIREONID","Yellow-throated Vireo","黄喉莺雀","Vireo flavifrons",[p_id("asheville",)],["nccrsp","4/2016"],4754888);
  birds[j++] = new myBird("USA","16-04-23T08:15","VIREONID","Blue-headed Vireo","蓝头莺雀","Vireo solitarius",[p_id("1609vtcanbirding",15)],["cactnw","9/2016"],4754897);
  birds[j++] = new myBird("USA","15-08-22T07:06","VIREONID","Warbling Vireo","歌莺雀","Vireo gilvus",[m_id("20160514_056_WarblingVireo")],["nyjbwr","5/2016"],4754756);
//birds[j++] = new myBird("USA","16-00-00T00:00","VIREONID","Philadelphia Vireo","费城莺雀","Vireo philadelphicus",[m_id("")],["mdbhrp","9/2015"],4754879);
  birds[j++] = new myBird("USA","15-05-02T08:40","VIREONID","Red-eyed Vireo","红眼莺雀","Vireo olivaceus",m_id(["20160515_062_Red-eyedVireo","20160515_061_Red-eyedVireo"]),["mdpvsp","5/2016"],4754922);
//birds[j++] = new myBird("   ","16-00-00T00:00","ORIOLIDA","Black-naped Oriole","黑枕黄鹂","Oriolus chinensis",[m_id("")],["mdbhrp","9/2015"],15144);
//birds[j++] = new myBird("   ","16-00-00T00:00","DICRURID","Square-tailed Drongo","方尾卷尾","Dicrurus ludwigii",[m_id("")],["mdbhrp","9/2015"],4035380);
//birds[j++] = new myBird("   ","16-00-00T00:00","RHIPIDUR","White-throated Fantail","白喉扇尾鹟","Rhipidura albicollis",[m_id("")],["mdbhrp","9/2015"],855576);
//birds[j++] = new myBird("   ","16-00-00T00:00","MONARCHI","Black-naped Monarch","黑枕王鹟","Hypothymis azurea",[m_id("")],["mdbhrp","9/2015"],855956);
  birds[j++] = new myBird("USA","16-09-15T06:39","CORVIDAE","Gray Jay","灰噪鸦","Perisoreus canadensis",[p_id("1609vtcanbirding",2)],["vtwwma","9/2016"],3997175);
  birds[j++] = new myBird("USA","15-07-08T19:39","CORVIDAE","Steller's Jay","暗冠蓝鸦","Cyanocitta stelleri",[p_id("1507birdingwest",14)],["waolnp","7/2015","",""," at Marymere Falls Trail","玛莉密瀑布小道"],3985736);
  birds[j++] = new myBird("USA","06-03-04T15:28","CORVIDAE","Blue Jay","冠蓝鸦","Cyanocitta cristata",[p_id("1412mckee-beshers",34)],["mdmwma","11/2014"],1503258);
  birds[j++] = new myBird("USA","05-12-28T13:13","CORVIDAE","Florida Scrub-Jay","佛罗里达丛鸦","Aphelocoma coerulescens",p_id("0512merritt",[19,21]),["flmnwr","12/2005"],9270677);
  birds[j++] = new myBird("USA","13-07-14T18:39","CORVIDAE","Black-billed Magpie","黑嘴喜鹊","Pica hudsonia",[p_id("1307alaskabirding",3)],["akknpp","7/2013"],10269051);
//birds[j++] = new myBird("CHN","16-00-00T00:00","CORVIDAE","Red-billed Blue Magpie","红嘴蓝鹊","Urocissa erythroryncha",[p_id("1601china",)],["cnbjjp","1/2016"],59185);
  birds[j++] = new myBird("CHN","16-01-15T13:37","CORVIDAE","Eurasian Magpie","喜鹊","Pica pica",[p_id("1601china",66)],["cnbjsp","1/2016"],[28079,17713618]);
  birds[j++] = new myBird("CHN","16-01-03T09:56","CORVIDAE","Azure-winged Magpie","灰喜鹊","Cyanopica cyanus",[p_id("1601china",4)],["cnbjjp","1/2016"],[39920,16385558]);
  birds[j++] = new myBird("CHN","16-01-15T12:07","CORVIDAE","Large-billed Crow","大嘴乌鸦","Corvus macrorhynchos",[p_id("1601china",65)],["cnbjsp","1/2016"],262114);
//birds[j++] = new myBird("CHN","16-00-00T00:00","CORVIDAE","Carrion Crow","小嘴乌鸦","Corvus corone",[p_id("1601china",)],["cnbjjp","1/2016"],15185);
  birds[j++] = new myBird("USA","06-04-15T11:43","CORVIDAE","American Crow","短嘴鸦","Corvus brachyrhynchos",["2006cobirding/AmericanCrow_20060415_008"],["mdcocn","4/2006","",""," at Great Falls","大瀑布一带"],3961482);
  birds[j++] = new myBird("USA","15-07-09T13:40","CORVIDAE","Northwestern Crow","北美乌鸦","Corvus caurinus",[p_id("1507birdingwest",23)],["wahobb","7/2015"],3961567);
  birds[j++] = new myBird("USA","15-03-29T08:49","CORVIDAE","Fish Crow","鱼鸦","Corvus ossifragus",[m_id("20150329_048_FishCrow")],["arbitr","3/2015","Ford's Landing Park, Alexandria, Virginia","亚历山大市福特码头公园，弗吉尼亚州"],3971836);
  birds[j++] = new myBird("USA","14-07-05T17:51","CORVIDAE","Common Raven","渡鸦","Corvus corax",p_id("1407michiganbirding",[4,5]),["miprnl","7/2014"],[274388,8696757]);
//birds[j++] = new myBird("   ","16-00-00T00:00","CORCORAC","White-winged Chough","白翅澳鸦","Corcorax melanorhamphos",[m_id("")],["mdbhrp","9/2015"],3961287);
//birds[j++] = new myBird("   ","16-00-00T00:00","MELAMPIT","Lesser Melampitta","小黑脚风鸟","Melampitta lugubris",[m_id("")],["mdbhrp","9/2015"],4800186);
//birds[j++] = new myBird("   ","16-00-00T00:00","IFRITIDA","Blue-capped Ifrit","蓝顶鹛鸫","Ifrita kowaldi",[m_id("")],["mdbhrp","9/2015"],4851397);
//birds[j++] = new myBird("   ","16-00-00T00:00","PARADISA","Magnificent Bird-of-paradise","丽色极乐鸟","Diphyllodes magnificus",[m_id("")],["mdbhrp","9/2015"],4800254);
//birds[j++] = new myBird("   ","16-00-00T00:00","PETROICI","Ashy Robin","地丛鹟","Heteromyias albispecularis",[m_id("")],["mdbhrp","9/2015"],4846575);
//birds[j++] = new myBird("   ","16-00-00T00:00","PICATHAR","White-necked Rockfowl","白颈岩鹛","Picathartes gymnocephalus",[m_id("")],["mdbhrp","9/2015"],4862796);
//birds[j++] = new myBird("   ","16-00-00T00:00","CHAETOPI","Cape Rockjumper","棕岩鸫","Chaetops frenatus",[m_id("")],["mdbhrp","9/2015"],4839625);
//birds[j++] = new myBird("   ","16-00-00T00:00","EUPETIDA","Rail-babbler","白眉长颈鸫","Eupetes macrocerus",[m_id("")],["mdbhrp","9/2015"],4851395);
//birds[j++] = new myBird("CHN","16-00-00T00:00","BOMBYCIL","Bohemian Waxwing","太平鸟","Bombycilla garrulus",[p_id("1601china",)],["cnbjjp","1/2016"],14757);
//birds[j++] = new myBird("CHN","16-00-00T00:00","BOMBYCIL","Japanese Waxwing","小太平鸟","Bombycilla japonica",[p_id("1601china",)],["cnbjjp","1/2016"],271898);
  birds[j++] = new myBird("USA","06-06-08T15:54","BOMBYCIL","Cedar Waxwing","雪松太平鸟","Bombycilla cedrorum",[p_id("1412mckee-beshers",39),p_id("1512bhill",30)],["mdmwma","12/2014","mdbhrp","8/2015","Immature"],4793157);
  birds[j++] = new myBird("USA","15-07-06T13:21","PTILOGON","Phainopepla","黑丝鹟","Phainopepla nitens",[p_id("1507birdingwest",6)],["nvdnwr","7/2015","Female"],4792678);
//birds[j++] = new myBird("   ","16-00-00T00:00","HYPOCOLI","Grey Hypocolius","灰连雀","Hypocolius ampelinus",[m_id("")],["mdbhrp","9/2015"],1604707);
//birds[j++] = new myBird("   ","16-00-00T00:00","DULIDAE ","Palmchat","棕榈鵖","Dulus dominicus",[m_id("")],["mdbhrp","9/2015"],11602630);
//birds[j++] = new myBird("   ","16-00-00T00:00","HYLOCITR","Hylocitrea","林啸鹟","Hylocitrea bonensis",[m_id("")],["mdbhrp","9/2015"],4863003);
//birds[j++] = new myBird("   ","16-00-00T00:00","STENOSTI","Grey-headed Canary-flycatcher","方尾鹟","Culicicapa ceylonensis",[m_id("")],["mdbhrp","9/2015"],858230);
  birds[j++] = new myBird("USA","06-02-18T12:26","PARIDAE ","Carolina Chickadee","卡罗山雀","Poecile carolinensis",[p_id("1412mckee-beshers",24)],["mdmwma","11/2014"],-3620);
  birds[j++] = new myBird("USA","13-07-17T16:16","PARIDAE ","Black-capped Chickadee","黑顶山雀","Poecile atricapillus",[p_id("1609vtcanbirding",11)],["calddm","9/2016"],4820871);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARIDAE ","Boreal Chickadee","北山雀","Poecile hudsonicus",[p_id("",2)],["vtwwma","8/2016"],-3631);
  birds[j++] = new myBird("USA","06-03-16T14:27","PARIDAE ","Tufted Titmouse","美洲凤头山雀","Baeolophus bicolor",[p_id("1512bhill",19)],["mdbhrp","2/2015"],4846924);
  birds[j++] = new myBird("CHN","16-01-06T09:14","PARIDAE ","Yellow-bellied Tit","黄腹山雀","Parus venustulus",p_id("1601china",[29,28]),["cnjsxp","1/2016","Male","cnjsxp","1/2016","Female"],263537);
  birds[j++] = new myBird("CHN","16-01-15T13:47","PARIDAE ","Willow Tit","褐头山雀","Poecile montanus",[p_id("1601china",68)],["cnbjsp","1/2016"],32630);
//birds[j++] = new myBird("CHN","16-00-00T00:00","PARIDAE ","Great Tit","大山雀","Parus major",p_id("1601china",[21,22]),["cnjsxp","1/2016"],32780);
  birds[j++] = new myBird("CHN","16-01-05T10:13","PARIDAE ","Japanese Tit","远东山雀","Parus minor",p_id("1601china",[21,22]),["cnjsxp","1/2016"],12118630);
//birds[j++] = new myBird("USA","16-00-00T00:00","REMIZIDA","Verdin","黄头金雀","Auriparus flaviceps",[m_id("")],["nvdnwr","7/2015"],2639355);
//birds[j++] = new myBird("   ","16-00-00T00:00","NICATORI","Western Nicator","黄翼斑斗鹎","Nicator chloris",[m_id("")],["mdbhrp","9/2015"],4740716);
//birds[j++] = new myBird("   ","16-00-00T00:00","PANURIDA","Bearded Reedling","文须雀","Panurus biarmicus",[m_id("")],["mdbhrp","9/2015"],158936);
  birds[j++] = new myBird("USA","15-03-15T10:45","ALAUDIDA","Horned Lark","角百灵","Eremophila alpestris",m_id(["20160507_042_HornedLark(M)","20150315_036_HornedLark(F)","20160507_043_HornedLark(I)"]),["mdcapc","5/2016","Male","mdswhf","3/2015","Female","mdcapc","5/2016","Immature"],273970);
//birds[j++] = new myBird("CHN","16-00-00T00:00","PYCNONOT","Sooty-headed Bulbul","白喉红臀鹎","Pycnonotus aurigaster",[p_id("1601china",)],["cnbjjp","1/2016"],751572);
  birds[j++] = new myBird("CHN","16-01-05T10:09","PYCNONOT","Light-vented Bulbul","白头鹎","Pycnonotus sinensis",[p_id("1601china",20)],["cnjsxp","1/2016"],14371);
  birds[j++] = new myBird("CHN","16-01-10T10:01","PYCNONOT","Collared Finchbill","领雀嘴鹎","Spizixos semitorques",[p_id("1601china",42)],["cnlynv","1/2016"],33054);
  birds[j++] = new myBird("CHN","16-01-10T10:03","PYCNONOT","Red-whiskered Bulbul","红耳鹎","Pycnonotus jocosus",[p_id("1601china",44)],["cnlynv","1/2016"],37831);
//birds[j++] = new myBird("CHN","16-00-00T00:00","PYCNONOT","Mountain Bulbul","绿翅短脚鹎","Ixos mcclellandii",[p_id("1601china",)],["cnlydp","1/2016","Male"],269463);
//birds[j++] = new myBird("CHN","16-00-00T00:00","PYCNONOT","Chestnut Bulbul","栗背短脚鹎","Hemixos castanonotus",[p_id("1601china",)],["cnlydp","1/2016","Male"],70592);
  birds[j++] = new myBird("CHN","16-01-09T14:54","PYCNONOT","Black Bulbul","黑短脚鹎","Hypsipetes leucocephalus",[p_id("1601china",38)],["cnlydp","1/2016","White-headed form","白头形"],264466);
  birds[j++] = new myBird("USA","15-05-09T11:56","HIRUNDIN","Purple Martin","紫崖燕","Progne subis",[p_id("1505capemay",5),p_id("1505puffin",3)],["njcmsp","5/2015","Female left, male right","ctciws","5/2015","Male"],2501891);
  birds[j++] = new myBird("USA","06-04-30T08:56","HIRUNDIN","Tree Swallow","双色树燕","Tachycineta bicolor",[p_id("1505puffin",1),m_id("20150405_049_TreeSwallow")],["ctciws","5/2015","mdbmnt","4/2015"],4631303);
//birds[j++] = new myBird("USA","16-00-00T00:00","HIRUNDIN","Violet-green Swallow","紫绿树燕","Tachycineta thalassina",[m_id("")],["nvdnwr","7/2015"],4631564);
  birds[j++] = new myBird("USA","06-04-09T11:23","HIRUNDIN","Northern Rough-winged Swallow","中北美毛翅燕","Stelgidopteryx serripennis",[m_id("20150418_057_NorthernRough-wingedSwallow")],["vajopp","4/2015"],4631285);
  birds[j++] = new myBird("USA","13-07-17T17:11","HIRUNDIN","Bank Swallow","崖沙燕","Riparia riparia",[p_id("1307alaskabirding",6)],["arbitr","7/2013","Point Woronzof Park, Anchorage, Alaska","安克雷奇沃隆佐夫角公园，阿拉斯加州"],33027);
  birds[j++] = new myBird("USA","15-05-16T09:59","HIRUNDIN","Cliff Swallow","美洲燕","Petrochelidon pyrrhonota",[m_id("20150516_074_CliffSwallow")],["mdloch","5/2015","",""," at Paper Mill Road Bridge","造纸厂路桥"],4619011);
//birds[j++] = new myBird("USA","16-00-00T00:00","HIRUNDIN","Cave Swallow","穴崖燕","Petrochelidon fulva",[m_id("")],["mdocci","11/2015","",""," Inlet","海口"],4619010);
  birds[j++] = new myBird("USA","12-06-09T09:07","HIRUNDIN","Barn Swallow","家燕","Hirundo rustica",[p_id("1206brooksidebirding",10),p_id("1505capemay",8)],["mdbrgd","6/2012","njscmm","5/2015"],32904);
  birds[j++] = new myBird("CHN","16-01-11T14:49","HIRUNDIN","Red-rumped Swallow","金腰燕","Cecropis daurica",[p_id("1601china",47)],["cnlydp","1/2016"],260921);
//birds[j++] = new myBird("   ","16-00-00T00:00","PNOEPYGI","Pygmy Wren-babbler","小鳞胸鹪鹛","Pnoepyga pusilla",[m_id("")],["mdbhrp","9/2015"],4862541);
//birds[j++] = new myBird("   ","16-00-00T00:00","MACROSPH","Moustached Grass Warbler","须薮莺","Melocichla mentalis",[m_id("")],["mdbhrp","9/2015"],4843216);
//birds[j++] = new myBird("   ","16-00-00T00:00","CETTIIDA","Mountain Tailorbird","栗头缝叶莺","Phyllergates cuculatus",[m_id("")],["mdbhrp","9/2015"],4844244);
//birds[j++] = new myBird("   ","16-00-00T00:00","SCOTOCER","Streaked Scrub Warbler","纹鹪莺","Scotocerca inquieta",[m_id("")],["mdbhrp","9/2015"],4842546);
//birds[j++] = new myBird("   ","16-00-00T00:00","ERYTHROC","Chestnut-capped Flycatcher","栗顶红鹟","Erythrocercus mccallii",[m_id("")],["mdbhrp","9/2015"],4846605);
  birds[j++] = new myBird("CHN","16-01-05T10:40","AEGITHAL","Black-throated Bushtit","红头长尾山雀","Aegithalos concinnus",p_id("1601china",[24,25]),["cnjsxp","1/2016"],58228);
//birds[j++] = new myBird("USA","16-00-00T00:00","AEGITHAL","American Bushtit","短嘴长尾山雀","Psaltriparus minimus",[m_id("")],["mdbhrp","9/2015"],cornellurl("Bushtit"),4822317);
//birds[j++] = new myBird("USA","16-00-00T00:00","PHYLLOSC","Arctic Warbler","极北柳莺","Phylloscopus borealis",[m_id("")],["mdbhrp","9/2015"],32602);
//birds[j++] = new myBird("   ","16-00-00T00:00","ACROCEPH","Lesser Swamp Warbler","细嘴苇莺","Acrocephalus gracilirostris",[m_id("")],["mdbhrp","9/2015"],4844369);
//birds[j++] = new myBird("   ","16-00-00T00:00","LOCUSTEL","Common Grasshopper Warbler","黑斑蝗莺","Locustella naevia",[m_id("")],["mdcapc","9/2015"],837073);
//birds[j++] = new myBird("   ","16-00-00T00:00","DONACOBI","Black-capped Donacobius","黑顶鹪鹩","Donacobius atricapilla",[m_id("")],["mdbhrp","9/2015"],2907702);
//birds[j++] = new myBird("   ","16-00-00T00:00","BERNIERI","White-throated Oxylabes","白喉尖鹛","Oxylabes madagascariensis",[m_id("")],["mdbhrp","9/2015"],4862807);
  birds[j++] = new myBird("CHN","16-01-12T16:09","CISTICOL","Common Tailorbird","长尾缝叶莺","Orthotomus sutorius",p_id("1601china",[54,55]),["cnlydp","1/2016"],837162);
//birds[j++] = new myBird("   ","16-00-00T00:00","TIMALIID","Streak-breasted Scimitar Babbler","棕颈钩嘴鹛","Pomatorhinus ruficollis",[m_id("")],["mdbhrp","9/2015"],33071);
//birds[j++] = new myBird("   ","16-00-00T00:00","PELLORNE","Dusky Fulvetta","褐顶雀鹛","Alcippe brunnea",[m_id("")],["mdbhrp","9/2015"],847601);
  birds[j++] = new myBird("CHN","16-01-06T10:14","LEIOTHRI","Chinese Hwamei","画眉","Garrulax canorus",p_id("1601china",[32,33]),["cnjsxp","1/2016"],[31388,7042059]);
  birds[j++] = new myBird("CHN","16-01-05T09:34","LEIOTHRI","Red-billed Leiothrix","红嘴相思鸟","Leiothrix lutea",[p_id("1601china",17)],["cnjsxp","1/2016"],32763);
//birds[j++] = new myBird("USA","16-00-00T00:00","SYLVIIDA","Wrentit","鹪雀莺","Chamaea fasciata",[m_id("")],["mdbhrp","9/2015"],4843354);
  birds[j++] = new myBird("CHN","16-01-11T14:29","ZOSTEROP","Japanese White-eye","暗绿绣眼鸟","Zosterops japonicus",[p_id("1601china",46)],["cnlydp","1/2016"],260937);
//birds[j++] = new myBird("CHN","16-00-00T00:00","ZOSTEROP","Striated Yuhina","栗耳凤鹛","Yuhina castaniceps",[p_id("1601china",)],["cnlydp","1/2016","Male"],847675);
//birds[j++] = new myBird("   ","16-00-00T00:00","ARCANATO","Dapple-throat","纹喉鵖","Arcanator orostruthus",[m_id("")],["mdbhrp","9/2015"],4812075);
//birds[j++] = new myBird("   ","16-00-00T00:00","PROMEROP","Cape Sugarbird","南非食蜜鸟","Promerops cafer",[m_id("")],["mdbhrp","9/2015"],-4115);
//birds[j++] = new myBird("   ","16-00-00T00:00","IRENIDAE","Asian Fairy-bluebird","和平鸟","Irena puella",["0504zoo/0504zoo__11"],["natzo","4/2005"],wikiurl("Asian Fairy-bluebird"),681078);
  birds[j++] = new myBird("USA","07-02-10T12:17","REGULIDA","Golden-crowned Kinglet","金冠戴菊","Regulus satrapa",["2007cobirding/20070210_028_Golden-crownedKinglet(M)"],["mdcovl","2/2007"],1604047);
  birds[j++] = new myBird("USA","09-04-12T13:39","REGULIDA","Ruby-crowned Kinglet","红冠戴菊","Regulus calendula",m_id(["20151024_109_Ruby-crownedKinglet","20151024_110_Ruby-crownedKinglet(M)"]),["mdbmnt","10/2015","mdbmnt","10/2015","Male"],4844803);
//birds[j++] = new myBird("   ","16-00-00T00:00","ELACHURI","Spotted Elachura","丽星鹩鹛","Elachura formosa",[m_id("")],["mdbhrp","9/2015"],847173);
//birds[j++] = new myBird("   ","16-00-00T00:00","HYLIOTID","Yellow-bellied Hyliota","黄腹丛莺","Hyliota flavigaster",[m_id("")],["mdbhrp","9/2015"],4843851);
//birds[j++] = new myBird("USA","16-00-00T00:00","TROGLODY","Rock Wren","岩鹪鹩","Salpinctes obsoletus",[m_id("")],["mdocci","10/2015","",""," Sunset Park","日落公园"],2938048);
  birds[j++] = new myBird("USA","15-04-18T09:12","TROGLODY","House Wren","莺鹪鹩","Troglodytes aedon",m_id(["20150418_055_HouseWren","20150719_083_HouseWren"]),["mdbmnt","4/2015","mdbmnt","7/2015"],3036301);
  birds[j++] = new myBird("USA","15-07-09T12:26","TROGLODY","Pacific Wren","太平洋鹪鹩","Troglodytes pacificus",[p_id("1507birdingwest",20)],["wacape","7/2015"],12085686);
  birds[j++] = new myBird("USA","06-03-04T15:46","TROGLODY","Winter Wren","冬鹪鹩","Troglodytes troglodytes",["2006cobirding/WinterWren_20060304_007","2007cobirding/20070107_004_WinterWren"],["mdcorl","3/2006","mdcorl","1/2007"],847385);
//birds[j++] = new myBird("USA","16-00-00T00:00","TROGLODY","Sedge Wren","短嘴沼泽鹪鹩","Cistothorus platensis",[m_id("")],["nvdnwr","7/2015"],2899665);
  birds[j++] = new myBird("USA","15-05-17T09:53","TROGLODY","Marsh Wren","长嘴沼泽鹪鹩","Cistothorus palustris",[p_id("1505bombayhook",6)],["debnwr","5/2015"],2896416);
  birds[j++] = new myBird("USA","06-04-15T10:41","TROGLODY","Carolina Wren","卡罗苇鹪鹩","Thryothorus ludovicianus",[p_id("1512bhill",21),m_id("20160221_017_CarolinaWren")],["mdbhrp","2/2015","mdcorl","2/2016"],2973549);
//birds[j++] = new myBird("USA","16-00-00T00:00","TROGLODY","Bewick's Wren","比氏苇鹪鹩","Thryomanes bewickii",[m_id("")],["nvdnwr","7/2015"],2942398);
  birds[j++] = new myBird("USA","06-04-30T09:54","POLIOPTI","Blue-gray Gnatcatcher","灰蓝蚋莺","Polioptila caerulea",[m_id("20150425_060_Blue-grayGnatcatcher"),p_id("1512bhill",31)],["mdbmnt","4/2015","Male","mdbhrp","8/2015","Female"],4844795);
//birds[j++] = new myBird("USA","16-00-00T00:00","POLIOPTI","Black-tailed Gnatcatcher","黑尾蚋莺","Polioptila melanura",[m_id("")],["mdbhrp","9/2015"],4844749);
  birds[j++] = new myBird("USA","16-09-15T08:27","SITTIDAE","Red-breasted Nuthatch","红胸鳾","Sitta canadensis",p_id("1609vtcanbirding",[7,8]),["vtwwma","9/2016"],6826036);
  birds[j++] = new myBird("CHN","16-01-15T13:49","SITTIDAE","Chinese Nuthatch","黑头鳾","Sitta villosa",[p_id("1601china",69)],["cnbjsp","1/2016"],269841);
  birds[j++] = new myBird("USA","06-02-20T13:41","SITTIDAE","White-breasted Nuthatch","白胸鳾","Sitta carolinensis",m_id(sas("20160130_00",["3_White-breastedNuthatch(M)","4_White-breastedNuthatch(F)"])),["mdbhrp","1/2016","Male","mdbhrp","1/2016","Female"],1986978);
//birds[j++] = new myBird("USA","16-00-00T00:00","SITTIDAE","Pygmy Nuthatch","小鳾","Sitta pygmaea",[m_id("")],["mdbhrp","9/2015"],8653131);
  birds[j++] = new myBird("USA","15-11-26T11:20","SITTIDAE","Brown-headed Nuthatch","褐头鳾","Sitta pusilla",p_id("1604asheville",[6,7]),["scllmp","4/2016","scllmp","4/2016","Immature"],8538620);
//birds[j++] = new myBird("   ","16-00-00T00:00","TICHODRO","Wallcreeper","红翅旋壁雀","Tichodroma muraria",[m_id("")],["mdbhrp","9/2015"],271527);
  birds[j++] = new myBird("USA","07-02-04T12:26","CERTHIID","Brown Creeper","美洲旋木雀","Certhia americana",[p_id("1512bhill",24)],["mdbhrp","2/2015"],4820712);
  birds[j++] = new myBird("USA","06-04-29T08:10","MIMIDAE ","Gray Catbird","灰嘲鸫","Dumetella carolinensis",[m_id("20160924_098_GrayCatbird"),p_id("1206brooksidebirding",5)],["mdlbwt","9/2016","mdbrgd","6/2012","Immature"],1594003);
  birds[j++] = new myBird("USA","06-03-18T09:06","MIMIDAE ","Northern Mockingbird","小嘲鸫","Mimus polyglottos",[p_id("1512bhill",9),p_id("1509charleston",16)],["mdbhrp","1/2015","scpatp","9/2015"],716998);
  birds[j++] = new myBird("USA","15-04-25T14:13","MIMIDAE ","Brown Thrasher","褐弯嘴嘲鸫","Toxostoma rufum",p_id("1512bhill",[26,33]),["mdbhrp","4/2015","mdbhrp","8/2015","Immature"],4078842);
//birds[j++] = new myBird("USA","16-00-00T00:00","MIMIDAE ","Le Conte's Thrasher","勒氏弯嘴嘲鸫","Toxostoma lecontei",[m_id("")],["mdbhrp","9/2015"],4078707);
  birds[j++] = new myBird("USA","15-01-08T12:54","MIMIDAE ","Pearly-eyed Thrasher","珠眼嘲鸫","Margarops fuscatus",[p_id("1501prbirding",49)],["prosan","1/2015"],cornellurl(559756),4077575);
//birds[j++] = new myBird("CHN","16-00-00T00:00","STURNIDA","Crested Myna","八哥","Acridotheres cristatellus",[p_id("1601china",)],["cnsbg","1/2016","Male"],19932);
  birds[j++] = new myBird("CHN","16-01-04T08:04","STURNIDA","Red-billed Starling","丝光椋鸟","Sturnus sericeus",[p_id("1601china",9)],["cnjsxp","1/2016"],70127);
  birds[j++] = new myBird("CHN","16-01-03T09:46","STURNIDA","White-cheeked Starling","灰椋鸟","Sturnus cineraceus",[p_id("1601china",3)],["cnbjjp","1/2016"],[57714,6890201]);
  birds[j++] = new myBird("USA","06-03-18T08:21","STURNIDA","European Starling","欧椋鸟","Sturnus vulgaris",["2006cobirding/EuropeanStarling_20060318_003",p_id("1407michiganbirding",11)],["mdcocn","3/2006","mimack","7/2014","Immature"],252652);
//birds[j++] = new myBird("   ","16-00-00T00:00","BUPHAGID","Yellow-billed Oxpecker","黄嘴牛椋鸟","Buphagus africanus",[m_id("")],["mdbhrp","9/2015"],4798917);
  birds[j++] = new myBird("USA","06-03-26T16:35","TURDIDAE","Eastern Bluebird","东蓝鸲","Sialia sialis",p_id("2009cobirding",[3,22]),["mdcovl","2/2009","Female","mdcovl","5/2009","Male"],4840600);
//birds[j++] = new myBird("USA","16-00-00T00:00","TURDIDAE","Western Bluebird","西蓝鸲","Sialia mexicana",[m_id("")],["mdbhrp","9/2015"],4840665);
  birds[j++] = new myBird("USA","15-08-29T07:46","TURDIDAE","Veery","棕夜鸫","Catharus fuscescens",[p_id("1512bhill",36)],["mdbhrp","8/2015"],4812989);
//birds[j++] = new myBird("USA","16-00-00T00:00","TURDIDAE","Gray-cheeked Thrush","灰颊夜鸫","Catharus minimus",[m_id("")],["mdlbwt","9/2016"],4826264);
  birds[j++] = new myBird("USA","15-07-08T19:10","TURDIDAE","Swainson's Thrush","斯氏夜鸫","Catharus ustulatus",[p_id("1507birdingwest",12),m_id("20160924_099_Swainson'sThrush")],["waolnp","7/2015","",""," at Marymere Falls Trail","玛莉密瀑布小道","mdlbwt","9/2016"],4826364);
  birds[j++] = new myBird("USA","06-10-29T12:42","TURDIDAE","Hermit Thrush","隐夜鸫","Catharus guttatus",[p_id("1512bhill",1)],["mdbhrp","1/2015"],4825795);
  birds[j++] = new myBird("USA","15-06-21T09:04","TURDIDAE","Wood Thrush","棕林鸫","Hylocichla mustelina",[m_id("20150621_078_WoodThrush")],["mdpvsp","6/2015"],4840884);
//birds[j++] = new myBird("   ","16-00-00T00:00","TURDIDAE","Common Blackbird","乌鸫","Turdus merula",p_id("1601china",[16,70]),["cnjsxp","1/2016","cnbjsp","1/2016"],69013);
  birds[j++] = new myBird("CHN","16-01-05T08:16","TURDIDAE","Chinese Blackbird","乌鸫","Turdus mandarinus",p_id("1601china",[70,16]),["cnbjsp","1/2016","Male","cnjsxp","1/2016","Female"],[69013,19267064]);
  birds[j++] = new myBird("USA","06-04-29T08:15","TURDIDAE","American Robin","旅鸫","Turdus migratorius",["2006cobirding/AmericanRobin_20060429_004",p_id("1206brooksidebirding",12),p_id("1204robin",2)],["mdcocn","4/2006","mdbrgd","6/2012","Immature","mdgerm","4/2012"],1448462);
//birds[j++] = new myBird("CHN","16-00-00T00:00","TURDIDAE","Red-throated Thrush","赤颈鸫","Turdus ruficollis",[p_id("1601china",)],["cnlydp","1/2016","Male"],263625);
  birds[j++] = new myBird("CHN","16-01-03T10:09","TURDIDAE","Naumann's Thrush","红尾鸫","Turdus naumanni",p_id("1601china",[8,72]),["cnbjjp","1/2016","cnbjth","1/2016"],1032377);
//birds[j++] = new myBird("CHN","16-00-00T00:00","TURDIDAE","Dusky Thrush","斑鸫","Turdus eunomus",[p_id("1601china",)],["cnbjjp","1/2016"],10472312);
  birds[j++] = new myBird("USA","15-01-08T07:25","TURDIDAE","Red-legged Thrush","红腿鸫","Turdus plumbeus",[p_id("1501prbirding",36)],["prsanj","1/2015"],cornellurl(553996),4840639);
  birds[j++] = new myBird("CHN","16-01-06T09:03","MUSCICAP","Oriental Magpie-Robin","鹊鸲","Copsychus saularis",[p_id("1601china",26)],["cnjsxp","1/2016","Male"],37811);
  birds[j++] = new myBird("CHN","16-01-05T09:41","MUSCICAP","Red-flanked Bluetail","红胁蓝尾鸲","Tarsiger cyanurus",p_id("1601china",[18,19]),["cnjsxp","1/2016","Female"],33075);
//birds[j++] = new myBird("USA","16-00-00T00:00","MUSCICAP","Bluethroat","蓝喉歌鸲","Luscinia svecica",[m_id("")],["mdbhrp","9/2015"],14290);
  birds[j++] = new myBird("CHN","16-01-11T14:52","MUSCICAP","Stejneger's Stonechat","黑喉石鵖","Saxicola stejnegeri",p_id("1601china",[48,49]),["cnlydp","1/2016","Male","cnlydp","1/2016","Female"],14732919);
  birds[j++] = new myBird("CHN","16-01-04T11:02","MUSCICAP","Daurian Redstart","北红尾鸲","Phoenicurus auroreus",p_id("1601china",[45,12,34]),["cnlynv","1/2016","Male","cnjsxp","1/2016","Female","cnjsxp","1/2016","Female"],263398);
  birds[j++] = new myBird("CHN","16-01-12T15:01","MUSCICAP","Plumbeous Water Redstart","红尾水鸲","Rhyacornis fuliginosa",p_id("1601china",[52,51]),["cnlydp","1/2016","Male","cnlydp","1/2016","Female"],51580);
//birds[j++] = new myBird("USA","16-00-00T00:00","CINCLIDA","American Dipper","美洲河鸟","Cinclus mexicanus",[m_id("")],["mdbhrp","9/2015"],2964978);
//birds[j++] = new myBird("CHN","16-00-00T00:00","CHLOROPS","Blue-winged Leafbird","蓝翅叶鹎","Chloropsis cochinchinensis",[p_id("1601china",)],["cnlydp","1/2016","Male"],855514);
  birds[j++] = new myBird("CHN","16-01-05T08:00","CHLOROPS","Orange-bellied Leafbird ","橙腹叶鹎","Chloropsis hardwickii",p_id("1601china",[13,15]),["cnjsxp","1/2016","Male","cnjsxp","1/2016","Female"],685748);
//birds[j++] = new myBird("CHN","16-00-00T00:00","DICAEIDA","Fire-breasted Flowerpecker","红胸啄花鸟","Dicaeum ignipectus",[p_id("1601china",)],["cnlydp","1/2016","Male"],32774);
  birds[j++] = new myBird("CHN","16-01-09T15:13","NECTARIN","Fork-tailed Sunbird","叉尾太阳鸟","Aethopyga christinae",p_id("1601china",[39,41]),["cnlydp","1/2016","Male","cnlydp","1/2016","Female"],373723);
  birds[j++] = new myBird("USA","15-01-04T07:12","PASSERID","House Sparrow","家麻雀","Passer domesticus",m_id(sas("20150315_",["032_HouseSparrow(M)","031_HouseSparrow(F)"])),["mdhadg","3/2015","Male","mdhadg","3/2015","Female"],32622);
  birds[j++] = new myBird("CHN","16-01-03T09:54","PASSERID","Eurasian Tree Sparrow","麻雀","Passer montanus",[p_id("1601china",6)],["cnbjjp","1/2016"],265733);
//birds[j++] = new myBird("   ","16-00-00T00:00","PLOCEIDA","Red-billed Quelea","红嘴奎利亚雀","Quelea quelea",[p_id("1601china",)],["cnbjjp","1/2016"],277030);
  birds[j++] = new myBird("USA","15-01-05T14:42","ESTRILDI","Bronze Mannikin","铜色文鸟","Spermestes cucullata",p_id("1501prbirding",[27,28]),["prceci","1/2015","prceci","1/2015","Immature"],cornellurl(692236),4756354);
  birds[j++] = new myBird("CHN","16-01-04T10:48","ESTRILDI","White-rumped Munia","白腰文鸟","Lonchura striata",p_id("1601china",[10,11]),["cnjsxp","1/2016"],272748);
//birds[j++] = new myBird("CHN","16-00-00T00:00","ESTRILDI","Scaly-breasted Munia","斑文鸟","Lonchura punctulata",[p_id("1601china",)],["cnlydp","1/2016","Male"],56800);
//birds[j++] = new myBird("   ","16-00-00T00:00","VIDUIDAE","Village Indigobird","靛蓝维达雀","Vidua chalybeata",[m_id("")],["mdbhrp","9/2015"],6355479);
//birds[j++] = new myBird("   ","16-00-00T00:00","PEUCEDRA","Olive Warbler","橄榄绿森莺","Peucedramus taeniatus",[m_id("")],["mdbhrp","9/2015"],4750030);
//birds[j++] = new myBird("   ","16-00-00T00:00","PRUNELLI","Alpine Accentor","领岩鹨","Prunella collaris",[m_id("")],["mdbhrp","9/2015"],71605);
  birds[j++] = new myBird("CHN","16-01-12T15:04","MOTACILL","Grey Wagtail","灰鹡鸰","Motacilla cinerea",[p_id("1601china",50)],["cnlydp","1/2016"],262270);
  birds[j++] = new myBird("CHN","16-01-06T09:42","MOTACILL","White Wagtail","白鹡鸰","Motacilla alba",p_id("1601china",[31,56,59,60]),["cnjsxp","1/2016","cnlydp","1/2016","cnxmjm","1/2016","cnxmjm","1/2016"],51651);
  birds[j++] = new myBird("CHN","16-01-12T16:06","MOTACILL","Olive-backed Pipit","树鹨","Anthus hodgsoni",[p_id("1601china",53)],["cnlydp","1/2016"],135244);
  birds[j++] = new myBird("USA","15-07-08T17:06","MOTACILL","American Pipit","黄腹鹨","Anthus rubescens",[p_id("1507birdingwest",11)],["waolnp","7/2015","",""," at Hurricane Ridge","飓风脊"],272247);
//birds[j++] = new myBird("   ","16-00-00T00:00","UROCYNCH","Przevalski's Finch","朱鹀","Urocynchramus pylzowi",[m_id("")],["mdbhrp","9/2015"],33042);
  birds[j++] = new myBird("CHN","16-01-16T09:02","FRINGILL","Grey-capped Greenfinch","金翅雀","Chloris sinica",[p_id("1601china",71)],["cnbjth","1/2016"],[126397,18975031]);
  birds[j++] = new myBird("CHN","16-01-03T09:36","FRINGILL","Brambling","燕雀","Fringilla montifringilla",p_id("1601china",[1,2]),["cnbjjp","1/2016","Female"],39575);
  birds[j++] = new myBird("CHN","16-01-06T09:08","FRINGILL","Chinese Grosbeak","黑尾蜡嘴雀","Eophona migratoria",[p_id("1601china",27)],["cnjsxp","1/2016","Female"],57441);
  birds[j++] = new myBird("USA","14-11-15T11:10","FRINGILL","Purple Finch","紫朱雀","Haemorhous purpureus",[p_id("1412mckee-beshers",32)],["mdmwma","11/2014","Male"],4753497);
  birds[j++] = new myBird("USA","06-08-11T17:33","FRINGILL","House Finch","家朱雀","Carpodacus mexicanus",p_id("1412mckee-beshers",[1,35,2]),["mdmwma","8/2014","Male","mdmwma","11/2014","Male","mdmwma","8/2014","Female"],4753501);
//birds[j++] = new myBird("USA","16-00-00T00:00","FRINGILL","Red Crossbill","红交嘴雀","Loxia curvirostra",[m_id("")],["vtwwma","9/2016"],71619);
//birds[j++] = new myBird("USA","16-00-00T00:00","FRINGILL","White-winged Crossbill","白翅交嘴雀","Loxia leucoptera",[m_id("")],["vtwwma","9/2016"],661414);
  birds[j++] = new myBird("USA","15-01-20T08:48","FRINGILL","Common Redpoll","白腰朱顶雀","Acanthis flammea",[p_id("1512bhill",7)],["mdbhrp","1/2015","Female on the left (a "+b_link("Pine Siskin")+" on the right)","雌性(左边，右边是一只"+b_link("松金翅雀")+")"],57079);
  birds[j++] = new myBird("USA","15-01-20T08:48","FRINGILL","Pine Siskin","松金翅雀","Spinus pinus",[p_id("1512bhill",7)],["mdbhrp","1/2015","On the right (a female "+b_link("Common Redpoll")+" on the left)","右边(左边是一只雌性"+b_link("白腰朱顶雀")+")"],4752047);
  birds[j++] = new myBird("USA","13-12-25T19:22","FRINGILL","Lesser Goldfinch","暗背金翅雀","Spinus psaltria",[p_id("1312bigbendbirding",19)],["txbbnp","12/2013","Female"],4752024);
  birds[j++] = new myBird("USA","06-08-05T11:23","FRINGILL","American Goldfinch","美洲金翅雀","Carduelis tristis",[p_id("1412mckee-beshers",9),p_id("1412mckee-beshers",10),p_id("1512bhill",44)],["mdmwma","8/2014","Male","mdmwma","8/2014","Female","mdbhrp","11/2015","Winter female"],4753448);
//birds[j++] = new myBird("USA","16-00-00T00:00","FRINGILL","Evening Grosbeak","黄昏锡嘴雀","Coccothraustes vespertinus",[m_id("")],["mdbhrp","9/2015"],1596096);
  birds[j++] = new myBird("USA","15-05-24T08:16","PARULIDA","Ovenbird","橙顶灶莺","Seiurus aurocapilla",p_id("1505puffin",[8,9]),["melocp","5/2015"],4751889);
  birds[j++] = new myBird("USA","16-04-24T10:25","PARULIDA","Worm-eating Warbler","食虫莺","Helmitheros vermivorum",[p_id("1604asheville",15)],["nccrsp","4/2016"],4752095);
  birds[j++] = new myBird("USA","15-01-06T09:16","PARULIDA","Louisiana Waterthrush","白眉灶莺","Parkesia motacilla",[p_id("1501prbirding",31)],["arbitr","1/2015","El Yunque National Forest, Puerto Rico","云盖热带雨林，波多黎各"],4751897);
  birds[j++] = new myBird("USA","16-05-14T09:55","PARULIDA","Northern Waterthrush","黄眉灶莺","Parkesia noveboracensis",[m_id("20160514_054_NorthernWaterthrush")],["nyjbwr","5/2016"],4751894);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Golden-winged Warbler","金翅虫森莺","Vermivora chrysoptera",[m_id("")],["scpatp","9/2015"],4751941);
  birds[j++] = new myBird("USA","15-08-30T08:54","PARULIDA","Blue-winged Warbler","蓝翅虫森莺","Vermivora cyanoptera",[m_id("20150830_091_Blue-wingedWarbler")],["mdbrgd","8/2015","Male"],4751939);
  birds[j++] = new myBird("USA","15-05-24T07:17","PARULIDA","Black-and-white Warbler","黑白森莺","Mniotilta varia",[p_id("1505puffin",5),p_id("1512bhill",39)],["melocp","5/2015","Male","mdbhrp","9/2015","Female"],4751882);
  birds[j++] = new myBird("USA","06-07-01T10:10","PARULIDA","Prothonotary Warbler","蓝翅黄森莺","Protonotaria citrea",[p_id("2009cobirding",32),"2006cobirding/ProthonotaryWarbler_F_20060730_009"],["mdcorl","6/2009","Male","mdcorl","7/2006","Female"],1987007);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Swainson's Warbler","白眉食虫莺","Limnothlypis swainsonii",[p_id("asheville",)],["nccrsp","4/2016"],4751886);
  birds[j++] = new myBird("USA","16-04-24T09:47","PARULIDA","Tennessee Warbler","灰冠虫森莺","Oreothlypis peregrina",[p_id("1604asheville",14),m_id("20160925_101_TennesseeWarbler(F)")],["nccrsp","4/2016","mdbhrp","9/2016","Fall plumage"],4751944);
  birds[j++] = new myBird("USA","15-07-10T10:26","PARULIDA","Orange-crowned Warbler","橙冠虫森莺","Oreothlypis celata",[p_id("1507birdingwest",29)],["orcanb","7/2015"],4751947);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Lucy's Warbler","赤腰虫森莺","Oreothlypis luciae",[m_id("")],["mdbhrp","9/2015"],4751827);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Nashville Warbler","黄喉虫森莺","Oreothlypis ruficapilla",[m_id("")],["mdbhrp","9/2015"],4751950);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Connecticut Warbler","灰喉地莺","Oporornis agilis",[m_id("")],["mdbhrp","9/2015"],4751911);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","MacGillivray's Warbler","灰头地莺","Geothlypis tolmiei",[m_id("")],["mdbhrp","9/2015"],4738131);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Mourning Warbler","黑胸地莺","Geothlypis philadelphia",[m_id("")],["mdbhrp","9/2015"],4751928);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Kentucky Warbler","黄腹地莺","Geothlypis formosa",[m_id("")],["mdbhrp","9/2015"],4751908);
  birds[j++] = new myBird("USA","06-04-30T08:59","PARULIDA","Common Yellowthroat","黄喉地莺","Geothlypis trichas",[m_id("20150426_062_CommonYellowthroat(M)"),p_id("1505bombayhook",11)],["mdbmnt","4/2015","Male","debnwr","5/2015","Female"],4751590);
  birds[j++] = new myBird("USA","16-04-24T10:49","PARULIDA","Hooded Warbler","黑枕威森莺","Setophaga citrina",p_id("1604asheville",[18,17]),["nccrsp","4/2016","Male"],4751661);
  birds[j++] = new myBird("USA","14-07-07T16:57","PARULIDA","American Redstart","橙尾鸲莺","Setophaga ruticilla",[p_id("1407michiganbirding",20),m_id("20160515_059_AmericanRedstart(F)")],["mimack","7/2014","Male","mdpvsp","5/2016","Female"],4751913);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Kirtland's Warbler","黑纹背林莺","Setophaga kirtlandii",[m_id("")],["mdbhrp","9/2015"],10870523);
  birds[j++] = new myBird("USA","16-09-03T08:39","PARULIDA","Cape May Warbler","栗颊林莺","Setophaga tigrina",m_id(["20160903_093_CapeMayWarbler(M)","20160903_094_CapeMayWarbler(M)"]),["mdbhrp","9/2016","Male, nonbreeding plumage"],4752004);
  birds[j++] = new myBird("USA","16-05-15T07:51","PARULIDA","Cerulean Warbler","蓝林莺","Setophaga cerulea",m_id(["20160515_064_CeruleanWarbler","20160515_063_CeruleanWarbler"]),["mdpvsp","5/2016"],-4734);
  birds[j++] = new myBird("USA","15-05-03T08:33","PARULIDA","Northern Parula","北森莺","Setophaga americana",[m_id("20150503_072_NorthernParula(M)"),p_id("1505puffin",4)],["mdcopl","5/2015","Male","melocp","5/2015","Female"],4751964);
  birds[j++] = new myBird("USA","15-05-24T07:55","PARULIDA","Magnolia Warbler","纹胸林莺","Setophaga magnolia",[m_id("20160515_060_MagnoliaWarbler(M)"),p_id("1512bhill",41)],["nyjbwr","5/2016","Male","mdbhrp","9/2015","Female"],4751999);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Bay-breasted Warbler","栗胸林莺","Setophaga castanea",[m_id("")],["mdbhrp","9/2015"],4752102);
  birds[j++] = new myBird("USA","16-04-23T14:07","PARULIDA","Blackburnian Warbler","橙胸林莺","Setophaga fusca",[p_id("1604asheville",4)],["ncbpkw","4/2016","Male"],4751819);
  birds[j++] = new myBird("USA","15-04-26T09:16","PARULIDA","Yellow Warbler","黄林莺","Setophaga petechia",m_id(["20150426_063_YellowWarbler(M)","20160514_047_YellowWarbler(F)","20160514_048_YellowWarbler"]),["mdbmnt","4/2015","Male","nyjbwr","5/2016","Female","nyjbwr","5/2016"],13113038);
  birds[j++] = new myBird("USA","15-09-12T07:38","PARULIDA","Chestnut-sided Warbler","栗胁林莺","Setophaga pensylvanica",[m_id("20150912_094_Chestnut-sidedWarbler(I)")],["mdlbwt","9/2015","Immature"],1120612);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Blackpoll Warbler","白颊林莺","Setophaga striata",[m_id("")],["mdbhrp","9/2015"],4752109);
  birds[j++] = new myBird("USA","15-05-10T12:54","PARULIDA","Black-throated Blue Warbler","黑喉蓝林莺","Setophaga caerulescens",[m_id("20150510_073_Black-throatedBlueWarbler(M)")],["vajopp","5/2015","Male"],4738127);
  birds[j++] = new myBird("USA","06-04-09T10:02","PARULIDA","Palm Warbler","棕榈林莺","Dendroica palmarum",[p_id("1604asheville",9),m_id("20151025_112_PalmWarbler(FP)")],["scllmp","4/2016","mdbmnt","10/2015","Fall plumage"],4752118);
  birds[j++] = new myBird("USA","15-07-26T10:08","PARULIDA","Pine Warbler","松莺","Setophaga pinus",[m_id("20150726_087_PineWarbler"),p_id("1509charleston",1)],["mdenwr","7/2015","sccnwr","9/2015"],4752103);
  birds[j++] = new myBird("USA","06-04-02T11:16","PARULIDA","Yellow-rumped Warbler","黄腰白喉林莺","Dendroica coronata",[p_id("1604asheville",8),m_id("20151101_121_Yellow-rumpedWarbler(I)")],["scllmp","4/2016","Male, Myrtle form","雄性，长春花形","mdbmnt","11/2015","Female/immature, Myrtle form","雌性/未成年，长春花形"],4752009);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Yellow-throated Warbler","黄喉林莺","Dendroica dominica",[p_id("asheville",)],["nccrsp","4/2016"],4751822);
  birds[j++] = new myBird("USA","15-05-09T09:59","PARULIDA","Prairie Warbler","草原林莺","Setophaga discolor",[p_id("1505capemay",1),p_id("1512bhill",38)],["njhwma","5/2015","Male","mdbhrp","9/2015","Male"],4752096);
  birds[j++] = new myBird("USA","15-01-03T10:58","PARULIDA","Adelaide's Warbler","黄腹灰林莺","Setophaga adelaidae",[p_id("1501prbirding",18)],["prcnwr","1/2015"],cornellurl(567756),4752090);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Grace's Warbler","黄喉纹胁林莺","Setophaga graciae",[m_id("")],["mdbhrp","9/2015"],4751901);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Black-throated Gray Warbler","黑喉灰林莺","Setophaga nigrescens",[m_id("")],["mdbhrp","9/2015"],4751918);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Townsend's Warbler","黄眉林莺","Setophaga townsendi",[m_id("")],["mdbhrp","9/2015"],4751804);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Hermit Warbler","黄脸林莺","Setophaga occidentalis",[m_id("")],["mdbhrp","9/2015"],4751808);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Golden-cheeked Warbler","金颊黑背林莺","Setophaga chrysoparia",[m_id("")],["mdbhrp","9/2015"],4708253);
  birds[j++] = new myBird("USA","15-09-26T08:56","PARULIDA","Black-throated Green Warbler","黑喉绿林莺","Setophaga virens",[p_id("1604asheville",5),p_id("1609vtcanbirding",9)],["ncbpkw","4/2016","Male","vtwwma","9/2016","Female"],4751801);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Canada Warbler","加拿大威森莺","Cardellina canadensis",[m_id("")],["mdbhrp","9/2015"],4751630);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Wilson's Warbler","黑头威森莺","Cardellina pusilla",[m_id()],["mdbhrp","9/2016","Female"],4736607);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Red-faced Warbler","红脸森莺","Cardellina rubrifrons",[m_id("")],["mdbhrp","9/2015"],4751564);
//birds[j++] = new myBird("USA","16-00-00T00:00","PARULIDA","Painted Redstart","彩鸲莺","Myioborus pictus",[m_id("")],["mdbhrp","9/2015"],4750532);
  birds[j++] = new myBird("USA","15-05-09T10:41","PARULIDA","Yellow-breasted Chat","黄胸大鵖莺","Icteria virens",[p_id("1507birdingwest",1)],["nvdnwr","7/2015"]);
//birds[j++] = new myBird("USA","16-00-00T00:00","ICTERIDA","Bobolink","刺歌雀","Dolichonyx oryzivorus",[m_id("")],["ilroll","9/2015"],4707266);
  birds[j++] = new myBird("USA","06-07-22T10:00","ICTERIDA","Red-winged Blackbird","红翅黑鹂","Agelaius phoeniceus",[p_id("1505capemay",9),p_id("1206brooksidebirding",8)],["njscmm","5/2015","Male","mdbrgd","6/2012","Female"],4707329);
  birds[j++] = new myBird("USA","14-11-11T12:32","ICTERIDA","Rusty Blackbird","锈色黑鹂","Euphagus carolinus",p_id("1412mckee-beshers",[27,28]),["mdmwma","11/2014","Male","mdmwma","11/2014","Female"],4707241);
  birds[j++] = new myBird("USA","15-07-12T09:23","ICTERIDA","Brewer's Blackbird","蓝头黑鹂","Euphagus cyanocephalus",p_id("1507birdingwest",[39,38]),["cayokp","7/2015","Male","cayokp","7/2015","Female"],4707273);
  birds[j++] = new myBird("USA","16-03-27T08:18","ICTERIDA","Eastern Meadowlark","东草地鹨","Sturnella magna",m_id(sas("20160327_",["031","032"],"_EasternMeadowlark")),["ncoutb","3/2016","",""," at Cape Hatteras Cape Point Campground","哈特拉斯角野营地"],4708917);
//birds[j++] = new myBird("USA","16-00-00T00:00","ICTERIDA","Western Meadowlark","西草地鹨","Sturnella neglecta",[m_id("")],["mdbhrp","9/2015"],723327);
  birds[j++] = new myBird("USA","06-04-11T17:11","ICTERIDA","Common Grackle","普通拟八哥","Quiscalus quiscula",["2006cobirding/CommonGrackle_20060411_002","2006cobirding/CommonGrackle_20060622_007",p_id("2009cobirding",39)],["mdcocn","4/2006","mdcocn","6/2006","mdcocn","7/2009","Immature"],-6524);
  birds[j++] = new myBird("USA","11-12-30T11:34","ICTERIDA","Boat-tailed Grackle","宽尾拟八哥","Quiscalus major",p_id("1509charleston",[12,13]),["scpitt","9/2015","Male","scpitt","9/2015","Female"],4707253);
//birds[j++] = new myBird("USA","16-00-00T00:00","ICTERIDA","Great-tailed Grackle","大尾拟八哥","Quiscalus mexicanus",[m_id("")],["mdbhrp","9/2015"],4706667);
  birds[j++] = new myBird("USA","15-01-02T09:39","ICTERIDA","Greater Antillean Grackle","黑拟八哥","Quiscalus niger",p_id("1501prbirding",[6,7]),["prrinc","1/2015"],cornellurl(669516),4706467);
//birds[j++] = new myBird("USA","16-00-00T00:00","ICTERIDA","Shiny Cowbird","紫辉牛鹂","Molothrus bonariensis",[m_id("")],["flevnp","6/2016"],4706494);
//birds[j++] = new myBird("USA","16-00-00T00:00","ICTERIDA","Bronzed Cowbird","铜色牛鹂","Molothrus aeneus",[m_id("")],["flevnp","6/2016"],4706501);
  birds[j++] = new myBird("USA","06-07-16T09:30","ICTERIDA","Brown-headed Cowbird","棕头牛鹂","Molothrus ater",[m_id("20160417_039_Brown-headedCowbird(M)"),p_id("1412mckee-beshers",29)],["mdbhrp","4/2016","Male","mdmwma","11/2014","Female"],4706577);
  birds[j++] = new myBird("USA","06-07-01T09:43","ICTERIDA","Orchard Oriole","圃拟鹂","Icterus spurius",[p_id("1604asheville",11),p_id("1604asheville",10),p_id("1505bombayhook",12)],["scllmp","4/2016","Male","scllmp","4/2016","Female","debnwr","5/2015","Juvenile male"],4704368);
//birds[j++] = new myBird("USA","16-00-00T00:00","ICTERIDA","Hooded Oriole","巾冠拟鹂","Icterus cucullatus",[m_id("")],["mdbhrp","9/2015"],4704336);
  birds[j++] = new myBird("USA","15-07-12T09:26","ICTERIDA","Bullock's Oriole","布氏拟鹂","Icterus bullockii",[p_id("1507birdingwest",40)],["cayokp","7/2015","Female"],4704351);
  birds[j++] = new myBird("USA","06-05-24T18:03","ICTERIDA","Baltimore Oriole","橙腹拟鹂","Icterus galbula",[m_id("20150830_093_BaltimoreOriole(M)")],["mdbrgd","8/2015","Male"],4704343);
//birds[j++] = new myBird("USA","16-00-00T00:00","ICTERIDA","Scott's Oriole","斯氏拟鹂","Icterus parisorum",[m_id("")],["mdbhrp","9/2015"],4707365);
  birds[j++] = new myBird("USA","15-01-03T13:57","ICTERIDA","Venezuelan Troupial","委内瑞拉拟鹂","Icterus icterus",[p_id("1501prbirding",20)],["arbitr","1/2015","Guanica Dry Forest, Puerto Rico","瓜尼卡干燥森林，波多黎各"],cornellurl(675436),3179670);
  birds[j++] = new myBird("USA","15-01-01T14:06","COEREBID","Bananaquit","曲嘴森莺","Coereba flaveola",[p_id("1501prbirding",2)],["prbaya","1/2015"],cornellurl(581516),4738553);
//birds[j++] = new myBird("CHN","16-00-00T00:00","EMBERIZI","Pine Bunting","白头鹀","Emberiza leucocephalos",p_id("1601china",[1,2]),["cnbjjp","1/2016"],660030);
  birds[j++] = new myBird("USA","12-06-09T09:55","EMBERIZI","Eastern Towhee","棕胁唧鹀","Pipilo erythrophthalmus",m_id(["20150405_050_EasternTowhee(M)","20150628_079_EasternTowhee(I)"]),["mdbmnt","4/2015","Male","mdbmnt","6/2015","Immature"],7795497);
//birds[j++] = new myBird("USA","16-00-00T00:00","EMBERIZI","Bachman’s Sparrow","巴氏猛雀鹀","Peucaea aestivalis",[m_id("")],["sccnwr","9/2015"],"https://www.audubon.org/field-guide/bird/bachmans-sparrow",6114539);
  birds[j++] = new myBird("USA","15-03-21T14:05","EMBERIZI","American Tree Sparrow","美洲树雀鹀","Spizella arborea",[m_id("20150321_044_AmericanTreeSparrow")],["mdswhf","3/2015"],4723780);
  birds[j++] = new myBird("USA","15-04-18T07:36","EMBERIZI","Chipping Sparrow","棕顶雀鹀","Spizella passerina",m_id(["20150418_054_ChippingSparrow","20160409_034_ChippingSparrow"]),["mdbmnt","4/2015","arbitr","4/2016","Agricultural History Farm Park, Maryland","农史农场公园，马里兰州"],4723786);
//birds[j++] = new myBird("USA","16-00-00T00:00","EMBERIZI","Clay-colored Sparrow","褐雀鹀","Spizella pallida",[m_id("")],["mdbnwr","3/2012"],4723791);
  birds[j++] = new myBird("USA","15-04-12T08:59","EMBERIZI","Field Sparrow","田雀鹀","Spizella pusilla",m_id(["20151018_108_FieldSparrow","20160417_040_FieldSparrow"]),["mdbmnt","10/2015","mdbhrp","4/2016"],4723729);
//birds[j++] = new myBird("USA","16-00-00T00:00","EMBERIZI","Vesper Sparrow","栗肩雀鹀","Pooecetes gramineus",[m_id("")],["arbitr","4/2016","Waterford Road, Howard County, Maryland","沃特福德路，霍华德郡，马里兰州"],4723988);
  birds[j++] = new myBird("USA","16-01-31T08:24","EMBERIZI","Lark Sparrow","鹨雀鹀","Chondestes grammacus",m_id(sas("20160131_0",["08","10"],"_LarkSparrow")),["mdcapc","1/2016"],4723713);
//birds[j++] = new myBird("USA","16-00-00T00:00","EMBERIZI","Black-throated Sparrow","黑喉漠鹀","Amphispiza bilineata",[m_id("")],["mdbhrp","9/2015"],4723738);
  birds[j++] = new myBird("USA","13-07-17T18:46","EMBERIZI","Savannah Sparrow","稀树草鹀","Passerculus sandwichensis",[p_id("1307alaskabirding",8)],["arbitr","7/2013","Potter Marsh, Anchorage, Alaska","安克雷奇波特沼泽，阿拉斯加州"],4724003);
  birds[j++] = new myBird("USA","16-07-16T07:02","EMBERIZI","Grasshopper Sparrow","黄胸草鹀","Ammodramus savannarum",m_id(["20160716_086_GrasshopperSparrow","20160716_087_GrasshopperSparrow"]),["mdolan","7/2016","mdolan","7/2016","Immature"],7850885);
//birds[j++] = new myBird("USA","16-00-00T00:00","EMBERIZI","Nelson's Sparrow","尼尔森沙鹀","Ammodramus nelsoni",[m_id("")],["ilroll","11/2016"],7850648);
  birds[j++] = new myBird("USA","16-05-29T15:00","EMBERIZI","Saltmarsh Sparrow","尖尾沙鹀","Ammodramus caudacutus",m_id(["20160529_065_SaltmarshSparrow","20160529_071_SaltmarshSparrow"]),["mdtrlr","5/2016","mdsclr","5/2016"],4723991);
  birds[j++] = new myBird("USA","16-05-29T15:32","EMBERIZI","Seaside Sparrow","海滨沙鹀","Ammodramus maritimus",m_id(["20160529_073_SeasideSparrow","20160529_068_SeasideSparrow"]),["mdsclr","5/2016","mdtrlr","5/2016"],4723718);
  birds[j++] = new myBird("USA","15-04-05T07:51","EMBERIZI","Fox Sparrow","狐色雀鹀","Passerella iliaca",[m_id("20150405_051_FoxSparrow")],["mdbmnt","4/2015"],4745996);
  birds[j++] = new myBird("USA","06-03-04T15:56","EMBERIZI","Song Sparrow","歌带鹀","Melospiza melodia",m_id(["20151025_113_SongSparrow","20151122_130_SongSparrow"]),["mdbmnt","10/2015","vahump","11/2015"],4745315);
//birds[j++] = new myBird("USA","16-00-00T00:00","EMBERIZI","Lincoln's Sparrow","林氏带鹀","Melospiza lincolnii",[m_id("")],["mdcocn","2/2007"],4745989);
  birds[j++] = new myBird("USA","06-02-19T13:42","EMBERIZI","Swamp Sparrow","沼泽带鹀","Melospiza georgiana",[p_id("1412mckee-beshers",14)],["mdmwma","10/2014"],4745350);
  birds[j++] = new myBird("USA","06-02-16T16:03","EMBERIZI","White-throated Sparrow","白喉带鹀","Zonotrichia albicollis",[m_id("20160130_005_White-throatedSparrow"),p_id("1412mckee-beshers",19)],["mdbhrp","1/2016","mdmwma","10/2014"],4744945);
  birds[j++] = new myBird("USA","15-07-09T13:51","EMBERIZI","White-crowned Sparrow","白冠带鹀","Zonotrichia leucophrys",[p_id("1507birdingwest",25),m_id("20160131_011_White-crownedSparrow")],["wahobb","7/2015","mdcapc","1/2016"],4745340);
  birds[j++] = new myBird("USA","06-03-18T15:59","EMBERIZI","Dark-eyed Junco","暗眼灯草鹀","Junco hyemalis",[p_id("1512bhill",6),p_id("1507birdingwest",24)],["mdbhrp","1/2015","Male, slate-colored form","雄性，石板色形","wahobb","7/2015","Male, Oregon form","雄性，俄勒冈形"],4745281);
  birds[j++] = new myBird("USA","15-01-07T07:12","THRAUPID","Saffron Finch","橙黄雀鹀","Sicalis flaveola",p_id("1501prbirding",[34,55]),["prsanj","1/2015","prsanj","1/2015","Immature"],cornellurl(638796),4717104);
//birds[j++] = new myBird("   ","16-00-00T00:00","THRAUPID","Silver-beaked Tanager","银嘴唐纳雀","Ramphocelus carbo",["0504zoo/0504zoo__24"],["natzo","4/2005"],cornellurl(598316),4748894);
  birds[j++] = new myBird("USA","15-01-07T07:05","THRAUPID","Black-faced Grassquit","黑脸草雀","Tiaris bicolor",p_id("1501prbirding",[50,33]),["prsanj","1/2015","Male","prsanj","1/2015","Female"],cornellurl(630636),4722827);
//birds[j++] = new myBird("USA","16-00-00T00:00","THRAUPID","Western Spindalis","纹头唐纳雀","Spindalis zena",[m_id("")],["mdbhrp","9/2015"],cornellurl(599116),4749011);
//birds[j++] = new myBird("USA","16-00-00T00:00","THRAUPID","Hispaniolan Spindalis","海地纹头唐纳雀","Spindalis dominicensis",[m_id("")],["mdbhrp","9/2015"],cornellurl(599436),4748633);
  birds[j++] = new myBird("USA","15-01-03T06:35","THRAUPID","Puerto Rican Spindalis","波多纹头唐纳雀","Spindalis portoricensis",p_id("1501prbirding",[11,54]),["prponc","1/2015","Male","prsanj","1/2015","Female"],cornellurl(599596),4749024);
//birds[j++] = new myBird("USA","16-00-00T00:00","THRAUPID","Jamaican Spindalis","牙买加纹头唐纳雀","Spindalis nigricephala",[m_id("")],["mdbhrp","9/2015"],cornellurl(599276),4748682);
//birds[j++] = new myBird("USA","16-00-00T00:00","CALCARII","Lapland Longspur","铁爪鹀","Calcarius lapponicus",[m_id("")],["mdbhrp","9/2015"],476834);
//birds[j++] = new myBird("USA","16-00-00T00:00","CALCARII","Snow Bunting","雪鹀","Plectrophenax nivalis",[m_id("")],["mdbhrp","9/2015"],660006);
  birds[j++] = new myBird("USA","15-05-02T08:21","CARDINAL","Summer Tanager","玫红丽唐纳雀","Piranga rubra",[m_id("20150502_066_SummerTanager(M)")],["mdcopl","5/2015","Male"],4748745);
  birds[j++] = new myBird("USA","15-05-03T08:03","CARDINAL","Scarlet Tanager","猩红丽唐纳雀","Piranga olivacea",m_id(["20160514_052_ScarletTanager(M)","20160514_051_ScarletTanager(F)","20150503_070_ScarletTanager(M)"]),["nyjbwr","5/2016","Male","nyjbwr","5/2016","Female","mdcopl","5/2015","Male"],4747732);
//birds[j++] = new myBird("USA","16-00-00T00:00","CARDINAL","Western Tanager","黄腹丽唐纳雀","Piranga ludoviciana",[m_id("")],["mdbhrp","9/2015"],4748675);
  birds[j++] = new myBird("USA","05-12-24T16:03","CARDINAL","Northern Cardinal","主红雀","Cardinalis cardinalis",[p_id("1604asheville",16),"2006cobirding/NorthernCardinal_F_20060305_016"],["nccrsp","4/2016","Male","mdcocn","3/2006","Female"],722438);
  birds[j++] = new myBird("USA","13-12-25T18:10","CARDINAL","Pyrrhuloxia","灰额主红雀","Cardinalis sinuatus",p_id("1312bigbendbirding",[16,17]),["txbbnp","12/2013","Male","txbbnp","12/2013","Female"],4708841);
  birds[j++] = new myBird("USA","14-08-30T16:45","CARDINAL","Rose-breasted Grosbeak","玫胸白斑翅雀","Pheucticus ludovicianus",[p_id("1409fingerlake",6),p_id("1512bhill",42)],["arbitr","8/2014","Female, Salmon Creek Road, New York","雌性，鲑鱼河路，纽约州","mdbhrp","9/2015","Immature male"],4716584);
  birds[j++] = new myBird("USA","14-08-10T11:40","CARDINAL","Blue Grosbeak","斑翅蓝彩鹀","Passerina caerulea",[p_id("1505bombayhook",13)],["debnwr","5/2015","Male"],4716620);
  birds[j++] = new myBird("USA","06-06-08T15:10","CARDINAL","Indigo Bunting","靛彩鹀","Passerina cyanea",[p_id("1505bombayhook",14)],["debnwr","5/2015","Male"],4716631);
  birds[j++] = new myBird("USA","16-06-08T16:12","CARDINAL","Painted Bunting","丽彩鹀","Passerina ciris",p_id("1606florida",[1,2]),["schbsp","6/2016","Male","schbsp","6/2016","Female"],4716638);
//birds[j++] = new myBird("USA","16-00-00T00:00","CARDINAL","Dickcissel","美洲雀","Spiza americana",[m_id("")],["mdcapc","7/2016"],1155714);

  if (typeof modiindx !== 'undefined') {
     if (modiindx.constructor != Array){modiindx = [modiindx];}
     for (var i=0;i<modiindx.length;i++){
         if ((modiBird.name.length>modiindx[i])&&(modiBird.name.length>i)) { 
            modiindx[i] = modiindx[i]+modiindx.slice(0,i).filter(function(x){return x>modiindx[i]}).length;
            if (modiindx[i] > i) {
               modiBird.name.splice(i,0,modiBird.name.splice(modiindx[i],1)[0]);
               modiBird.cname.splice(i,0,modiBird.cname.splice(modiindx[i],1)[0]);
            }
         }
     }
  }

  function myBird(country, liferdate, family, name, cname, latin, photo, info, url, curl){
     this.country  = country.trim().toLowerCase();
     this.lifer    = new Date("20"+liferdate+":00"); 
     this.family   = family.trim().slice(0,family_len).toUpperCase(); 
     this.name     = name.trim();
     this.name1    = reform(this.name);
     this.cname    = cname.trim();
     this.pinyin   = getpinyin(this.cname);
     this.latin    = latin.trim().toLowerCase();
     this.latin    = this.latin.charAt(0).toUpperCase()+this.latin.slice(1);
     this.info     = [];
     this.cinfo    = [];
     if (photo.constructor == Array){
        this.photo = photo;
     }else{
        this.photo = [photo]; 
     }
     info = reform_locs(info);
     var tmp_info  = [];
     var tmp_cinfo = [];
     for (var i=0;i<Math.floor((info.length-1)/6.0)+1;i++){
         if (typeof info[2+6*i]!=='undefined'){
            if (typeof info[3+6*i]==='undefined'){info.splice(3+6*i,0,"");}
            if (info[3+6*i].trim().length==0){
               var tmp = info[2+6*i].trim();
               if ((/^males*$/i).test(tmp)){ 
                  info[3+6*i] = "雄性";
               }else if ((/^females*$/i).test(tmp)){
                  info[3+6*i] = "雌性";  
               }else if ((/^(immatures*|juveniles*)$/i).test(tmp)){
                  info[3+6*i] = "未成年";
               }else if ((/^(immature|juvenile) males*$/i).test(tmp)){
                  info[3+6*i] = "未成年雄性";
               }else if ((/^(immature|juvenile) females*$/i).test(tmp)){
                  info[3+6*i] = "未成年雌性";
               }else if ((/^female\/immature$/i).test(tmp)){
                  info[3+6*i] = "雌性/未成年";
               }else if ((/^males* left, *females* right$/i).test(tmp)){
                  info[3+6*i] = "左雄性，右雌性";
               }else if ((/^females* left, *males* right$/i).test(tmp)){
                  info[3+6*i] = "左雌性，右雄性";
               }else if ((/^winter plumage$/i).test(tmp)){
                  info[3+6*i] = "冬羽";
               }else if ((/^fall plumage$/i).test(tmp)){
                  info[3+6*i] = "秋羽";
               }else if ((/^winter females*$/i).test(tmp)){
                  info[3+6*i] = "冬羽雌性";
               }else if ((/^eclipse males*$/i).test(tmp)){
                  info[3+6*i] = "蚀羽雄性";
               }else if ((/^adults*$/i).test(tmp)){
                  info[3+6*i] = "成年";
               }else if ((/^females* and chicks*$/i).test(tmp)){
                  info[3+6*i] = "雌性和幼鸟";
               }else if ((/^breeding (adults*|plumage)$/i).test(tmp)){
                  info[3+6*i] = "繁殖羽";
               }else if ((/^nonbreeding (adults*|plumage)$/i).test(tmp)){
                  info[3+6*i] = "非繁殖羽";
               }else if ((/^male, *breeding plumage$/i).test(tmp)){
                  info[3+6*i] = "雄性，繁殖羽";
               }else if ((/^male, *nonbreeding plumage$/i).test(tmp)){
                  info[3+6*i] = "雄性，非繁殖羽";
               }
            }
         }
         tmp_info[i]   = loclink(info[6*i],info[1+6*i],false,info[2+6*i],info[4+6*i]); 
         tmp_cinfo[i]  = loclink(info[6*i],info[1+6*i],true,info[3+6*i],info[5+6*i]);
     }
     for (var i=0;i<this.photo.length;i++){
         this.info[i]  = tmp_info[Math.min(i,tmp_info.length-1)]; 
         this.cinfo[i] = tmp_cinfo[Math.min(i,tmp_cinfo.length-1)];
     }   
     if(typeof url !== 'undefined'){
        if (url.constructor == Array){
           if (typeof url[0] == "string"){
              url = url[0];
           }
        }
        if (typeof url == "string"){
           this.url = url;
        }else if(window.usechinese){
           this.url = baikeurl(url);
        }
        if((typeof curl !== 'undefined') && window.usechinese) {
           if (curl.constructor == Array){
              if (typeof curl[0] == "string"){
                 curl = curl[0];
              }
           }
           if (typeof curl == "string"){
              this.url = curl;
           }else{
              this.url = baikeurl(curl);
           }
        }
     }
     if(typeof this.url === 'undefined'){
        if (this.country==="usa"||this.country==="can"){
           this.url = cornellurl(this.name1);
        }else if (window.usechinese){
           this.url = "http://baike.niaolei.org.cn/"+this.cname;
        }else{
           //this.url = "http://baike.niaolei.org.cn/"+reform(this.name,"+","%E2%80%99",true);
           this.url = wikiurl(this.latin);
        }
     }
     this.ccountry = cnt_nm[this.country][1];
     this.country  = cnt_nm[this.country][0];
     //check if this bird needs to be added to modiBird
     if (modiTime-this.lifer.getTime() <= modirange){
        modiBird.name[modiBird.name.length]   = this.name;
        modiBird.cname[modiBird.cname.length] = this.cname;
     }
  }

  function sas(in1,in2,in3){
     var len = 1;
     if (in1.constructor == Array) len = in1.length;
     if (in2.constructor == Array) len = Math.max(len,in2.length);
     if (typeof in3 !== 'undefined'){
        if (in3.constructor == Array) len = Math.max(len,in3.length);
     }
     var tmp =[];
     for (var i=0;i<len;i++){
         if (in1.constructor == Array){
            tmp[i] = in1[Math.min(i,in1.length-1)];
         }else{
            tmp[i] = in1;
         }
         if (in2.constructor == Array){
            tmp[i] = tmp[i]+in2[Math.min(i,in2.length-1)];
         }else{
            tmp[i] = tmp[i]+in2;
         }
         if (typeof in3 !== 'undefined'){
            if (in3.constructor == Array){
               tmp[i] = tmp[i]+in3[Math.min(i,in3.length-1)];
            }else{
               tmp[i] = tmp[i]+in3;
            }
         }
     }
     return tmp;
  }

  function m_id(id){
     return sas("misc_birds/",id);
  }

  function p_id(album,id){
     return sas(album+"/"+album+"_",id);
  }

  function reform(name,space,apostrophe,notlowercase){
     if (typeof space === 'undefined')	    {var space = '_';}
     if (typeof apostrophe === 'undefined') {var apostrophe = '';}
     var tmp = name.replace(/ |\+/g,space);
     tmp = tmp.replace(/'/g,apostrophe);
     if (notlowercase){
        return tmp;
     }else{
        return tmp.toLowerCase();
     }
  }

  function isnewBird(id){
     id = id.toLowerCase();
     for(var i=0;i<modiBird.name.length;i++){
        if (modiBird.name[i].toLowerCase() == id){return true;}
     } 
     return false;
  }

  function getByCountry(id, myArray){
     if (id.match(/[\u3400-\u9FBF]/)){
        return myArray.filter(function(obj) {
           if(reform(obj.ccountry) == id) { 
              return obj; 
           }else{
              for (var i=0;i<obj.cinfo.length;i++){
                  var tmp = reform(obj.cinfo[i]);
                  if(tmp.indexOf(id)!=-1) { return obj; }
              }
           }
        })
     }else{
        return myArray.filter(function(obj) {
           if(reform(obj.country) == id) {
              return obj; 
           }else{
              for (var i=0;i<obj.info.length;i++){
                  var tmp = reform(obj.info[i]);
                  if(tmp.indexOf(id) != -1) { return obj; }
              }
           }
        })
     }
  } 

  function getByLiferYear(year, myArray){
     return myArray.filter(function(obj) {if(obj.lifer.getFullYear() == year) { return obj; }});
  }

  function getByQuery(id, myArray){
     if (id.match(/[\u3400-\u9FBF]/)){
        return myArray.filter(function(obj) {
           for (var i=0;i<obj.cinfo.length;i++){
               var tmp = reform(obj.cinfo[i]);
               if(tmp.indexOf(id)!=-1) { return obj; }
           }
        })
     }else{
        return myArray.filter(function(obj) {
           for (var i=0;i<obj.info.length;i++){
               var tmp = reform(obj.info[i]);
               if(tmp.indexOf(id) != -1) { return obj; }
           }
        })
     }
  } 
  
  function birdFound(id){
     for (var i=0;i<birds.length;i++){
         if (birds[i].name1 == id) return true;
     }
     return false; 
  }

  function getByFamily(id, myArray) {
     var tmpid = id.slice(0,family_len);
     return myArray.filter(function(obj) {if(obj.family == tmpid) { return obj; }});
  } 

  function getpinyin(cname){
     var tmp = '';
     for (var i=0;i<cname.length;i++){
         if (typeof py[cname.charAt(i)] !== 'undefined'){
            tmp = tmp+py[cname.charAt(i)]+' ';
         }else{
            document.write('<br>'+cname.charAt(i)+' pinyin not found!<br>');
         }
     }
     return tmp;
  }

  function mysort(a,b){
     if (window.lifer){
        if (a.lifer < b.lifer){
           return -1;
        }else if (a.lifer > b.lifer){
           return 1;
        }
     }
     if (window.usechinese){
        if (a.pinyin < b.pinyin ){ 
           return  -1;
        }else if(a.pinyin > b.pinyin){
           return  1;
        }
     }else{
        if (a.name < b.name ){ 
           return  -1;
        }else if(a.name > b.name){
           return  1;
        }
     }
     return 0;
  }

  function cornellurl(bid){
     if (typeof bid == "string"){ return "http://www.birds.cornell.edu/AllAboutBirds/BirdGuide/"+bid.trim()+".html";}
     else { return "http://neotropical.birds.cornell.edu/portal/species/overview?p_p_spp="+bid.toString();}
  }
  
  function wikiurl(bid){
     return "https://en.wikipedia.org/wiki/"+reform(bid,"_","%27",true);
  }

  function baikeurl(bid){
     if (bid.constructor == Array){
        if (bid.length > 1){
           return "http://baike.baidu.com/subview/"+bid[0].toString()+"/"+bid[1].toString()+".htm";
        }else{
           bid = bid[0];
        } 
     }
     if (bid>0) {
        return "http://baike.baidu.com/view/"+bid.toString()+".htm";
     }else{
        return "http://www.niaobaike.com/baike/"+Math.abs(bid).toString()+".html";
     }
  }

  function b_link(bid,info){
     if (typeof info === 'undefined') {var info = bid;} else {
        if (info==='s'){info = bid.trim()+info;}
     }
     if (order){bid = bid+"&order";}
     return "<a href='showbird.html?name="+reform(bid)+"' style='color: #3399FF; text-decoration: underline;'>"+info+"</a>";
  }

  function reform_locs(link){
     var indx = 2;
     var prev = 0;
     while(indx<link.length){
         if (typeof locs[link[indx]] !== 'undefined'){
            switch(indx-prev){
		case 2:
                     link.splice(indx,0,"","","","");
                     indx = indx+4;
                     break;
                case 3:
                     link.splice(indx,0,"","","");
                     indx = indx+3;
                     break;
                case 4:
                     link.splice(indx,0,"","");
                     indx = indx+2;
                     break;
                     
            }
            prev = indx++;  
         } 
         indx++;
     }
     return link;
  } 

  function loclink(pid,date,usechinese,header,extra){
     pid = pid.trim().toLowerCase();
     if (usechinese){
        var comma = "，";
        var id_0  = 2;      
     }else{
        var comma = ", ";
        var id_0  = 0;
     }
     if (typeof date === 'undefined') {var date  = "";}
     if (typeof header === 'undefined') {header = "";} 
     if (header.length>0) {header = header+comma;}
     if (typeof extra === 'undefined') {var extra = "";}
     if (typeof locs[pid] === 'undefined') {return header+extra+date;}
     var tmp = locs[pid].slice(0);
     if (locs[pid].length>=7){
        if (usechinese){ 
           extra = tmp[4];
        }else{
           extra = tmp[1];
        }
        tmp.splice(4,1);
        tmp.splice(1,1);
     }
     if (typeof tmp[5]!=='undefined'){
        if (usechinese) {tmp[4] = tmp[5];} 
     }   
     if (tmp[0+id_0].length>0) {
        extra = extra+comma;
        if ((!usechinese) && (header.length==0) && (tmp[0].charAt(0)==tmp[0].charAt(0).toLowerCase())) {tmp[0]=tmp[0].charAt(0).toUpperCase()+tmp[0].slice(1);}
     }
     if ((date.length>0)&&(tmp[1+id_0].length>0)) {date = comma+date;}
     if (typeof tmp[4] !== 'undefined') {   
        return header+"<a href='"+tmp[4]+"' style='color: #3399FF; text-decoration: underline;' target='_blank'>"+tmp[0+id_0]+"</a>"+extra+tmp[1+id_0]+date;
     }else{
        return header+tmp[0+id_0]+extra+tmp[1+id_0]+date; 
     } 
  }
//-->
