<!--
  //date
  var modiDate  = new Date("2021-10-05T08:00");
  var modirange = 10;  		//range within modiDate in days
  var modiTime  = modiDate.getTime()-modirange*3600*24*1000;  	//range within modiDate converted from days to milliseconds
  var modiBird  = {name:[],cname:[]};
  var birds     = [];         
  var j         = 0;

  //location urls
  var locurl = {arb:["","","",""],
      akknpp:  ["Katmai National Park & Preserve","Alaska, USA","卡特迈国家公园","美国阿拉斯加州",npsurl("katm"),baikeurl("卡特迈国家公园")],
      aucass:  ["Cassowary House","Kuranda, Queensland, Australia","鹤鸵屋","澳大利亚昆士兰州库兰达","https://www.cassowary-house.com.au/"],
      caalgp:  ["Algonquin Provincial Park","Ontario, Canada","阿冈昆省立公园","加拿大安大略省","http://www.algonquinpark.on.ca/","https://agangkun.ca/"],
      cabake:  ["Bakersfield, California","USA","贝克斯菲尔德市","美国加利福尼亚州"],      
      cactnw:  ["Cap Tourmente National Wildlife Area","Québec, Canada","杜门角国家野生动物保护区","加拿大魁北克省",wikiurl("Cap Tourmente National Wildlife Area")],
      cambsp:  ["Morro Bay State Park","California, USA","莫罗湾州立公园","美国加利福尼亚州","http://www.parks.ca.gov/?page_id=594"],
      cnbjjp:  ["Jingshan Park","Beijing, China","北京景山公园","中国",wikiurl("Jingshan Park"),baikeurl("景山公园")],
      cnbjsp:  ["Summer Palace","Beijing, China","北京颐和园","中国",wikiurl("Summer Palace"),baikeurl("颐和园")],
      cnjsxp:  ["Xujiang Park","Jiangshan, Zhejiang, China","江山须江公园","中国浙江省",baikeurl("须江公园")],
      cnlydp:  [gmap("Denggao Park",25.09248,117.0358),"Longyan, Fujian, China","龙岩"+bmap("登高山公园",13029222,2869550),"中国福建省"],
      cnlynv:  ["Neiban Village","Longyan, Fujian, China","龙岩龙门镇内坂村","中国福建省",baikeurl("龙门镇/4844737")],
      cnxihu:  ["West Lake","Hangzhou, Zhejiang, China","杭州西湖","中国浙江省",wikiurl("West Lake"),baikeurl("西湖")],
      cnxmjm:  ["Jimei","Xiamen, Fujian, China","厦门集美","中国福建省",wikiurl("Jimei District"),baikeurl("厦门集美")],
      crarol:  ["Arenal Observatory Lodge","Alajuela, Costa Rica","阿雷纳火山观测台山林小屋","哥斯达黎加阿拉胡埃拉省","https://www.arenalobservatorylodge.com/"],
      crsanj:  ["San José","Costa Rica","圣何塞","哥斯达黎加","",baikeurl("圣何塞/62358")],
      ctciws:  ["Cove Island Wildlife Sanctuary","Connecticut, USA","科夫岛野生动物保护区","美国康涅狄格州",wikiurl("Cove Island Park")],
      debnwr:  ["Bombay Hook National Wildlife Refuge","Delaware, USA","庞贝虎克国家野生动物保护区","美国特拉华州",npsurl("bombay_hook",true)],
      debowb:  ["Bowers Beach","Delaware, USA","鲍尔斯海滩","美国特拉华州",wikiurl("Bowers, Delaware")],
      deinri:  ["Indian River Inlet","Delaware, USA","印第安河入海口","美国特拉华州",wikiurl("Indian River (Delaware)")],
      flapop:  ["Lake Apopka-Magnolia Park","Florida, USA","阿波普卡湖玉兰公园","美国佛罗里达州",wikiurl("Magnolia Park (Apopka, Florida)")],
      flbppm:  ["Black Point Park & Marina","Miami-Dade County, Florida, USA","黑角公园及码头","美国佛罗里达州迈阿密-戴德郡","http://www.miamidade.gov/parks/black-point-marina.asp"],
      flevnp:  ["Everglades National Park","Florida, USA","大沼泽地国家公园","美国佛罗里达州",npsurl("ever"),baikeurl("大沼泽地国家公园")],
      flmnwr:  ["Merritt Island National Wildlife Refuge","Florida, USA","美丽特岛国家野生动物保护区","美国佛罗里达州",npsurl("Merritt_Island",true)],
      flplpr:  ["Plantation Preserve","Broward County, Florida, USA","种植园保留地","美国佛罗里达州布劳沃德郡","https://www.plantation.org/government/departments/parks-recreation/plantation-preserve-golf-course-club/about-the-preserve/linear-trail"],
      gbhydp:  ["Hyde Park","London, United Kingdom","海德公园","英国伦敦",wikiurl("Hyde Park, London"),baikeurl("海德公园")],
      gblwcn:  ["London Wetland Centre","United Kingdom","伦敦湿地中心","英国","https://www.wwt.org.uk/wetland-centres/london/"],
      mahpsp:  ["Halibut Point State Park","Rockport, Massachusetts, USA","大比目鱼角州立公园","美国马萨诸塞州","https://www.mass.gov/locations/halibut-point-state-park"],
      marace:  ["Race Point","Provincetown, Massachusetts, USA","普罗温斯敦横流点海滩","美国马萨诸塞州","https://www.nps.gov/caco/planyourvisit/race-point-beach.htm"],
      mdbhrp:  ["Black Hill Regional Park","Maryland, USA","黑山公园","美国马里兰州","http://www.montgomeryparks.org/parks-and-trails/black-hill-regional-park/"],
      mdbmnt:  ["Blue Mash Nature Trail","Maryland, USA","蓝沼自然小径","美国马里兰州","https://www.montgomerycountymd.gov/sws/facilities/oaks/"],
      mdbnwr:  ["Blackwater National Wildlife Refuge","Maryland, USA","黑水国家野生动物保护区","美国马里兰州",npsurl("blackwater",true),baikeurl("国立黑水野生动物保护区")],
      mdcapc:  ["Congressional Polo Club","Poolesville, Maryland, USA","普尔斯维尔镇国会马球俱乐部","美国马里兰州","http://www.congressionalpolo.com/"],
      mdcocn:  ["C&O Canal","Maryland, USA","切萨皮克-俄亥俄运河","美国马里兰州",npsurl("choh"),baikeurl("切萨皮克和俄亥俄运河")],
      mdcopl:  ["C&O Canal"," at Pennyfield Lock","Maryland, USA","切萨皮克-俄亥俄运河","彭尼菲尔德闸","美国马里兰州",npsurl("choh"),baikeurl("切萨皮克和俄亥俄运河")],
      mdcorl:  ["C&O Canal"," at Riley's Lock","Maryland, USA","切萨皮克-俄亥俄运河","莱利闸","美国马里兰州",npsurl("choh"),baikeurl("切萨皮克和俄亥俄运河")],
      mdcovl:  ["C&O Canal"," at Violettes Lock","Maryland, USA","切萨皮克-俄亥俄运河","紫罗兰闸","美国马里兰州",npsurl("choh"),baikeurl("切萨皮克和俄亥俄运河")],
      mdcrvp:  ["Cromwell Valley Park","Baltimore, Maryland, USA","巴尔的摩克伦威尔溪谷公园","美国马里兰州","http://www.cromwellvalleypark.org/"],
      mdenwr:  ["Eastern Neck National Wildlife Refuge","Maryland, USA","东内克国家野生动物保护区","美国马里兰州",npsurl("eastern_neck",true)],
      mdftmh:  ["Fort McHenry","Maryland, USA","麦克亨利堡","美国马里兰州",npsurl("fomc"),baikeurl("麦克亨利堡")],
      mdlbrp:  ["Little Bennett Regional Park","Maryland, USA","小班尼特公园","美国马里兰州","http://www.montgomeryparks.org/parks-and-trails/little-bennett-regional-park/"],
      mdloch:  ["Loch Raven Reservoir","Maryland, USA","渡鸦湖水库","美国马里兰州",wikiurl("Loch Raven Reservoir")],
      mdmapp:  ["Mariner Point Park","Harford County, Maryland, USA","水手角公园","美国马里兰州哈福德郡","https://www.visitharford.com/listing/mariner-point-park/225/"],
      mdmdmd:  ["Maryland","USA","马里兰州","美国"], 
      mdmwma:  ["McKee-Beshers Wildlife Management Area","Maryland, USA","McKee-Beshers野生动物管理区","美国马里兰州","http://dnr.maryland.gov/wildlife/Pages/publiclands/central/mckeebeshers.aspx"],
      mdocci:  ["Ocean City","Maryland, USA","大洋城","美国马里兰州"],
      mdorpk:  ["Oregon Ridge Park","Baltimore, Maryland, USA","巴尔的摩俄勒冈岭公园","美国马里兰州","http://www.oregonridgenaturecenter.org/"],
      mdpvsp:  ["Patapsco Valley State Park"," at Henryton","Maryland, USA","帕塔普斯科河谷州立公园","亨利顿一带","美国马里兰州","http://dnr.maryland.gov/publiclands/Pages/central/patapsco.aspx"],
      mdsclr:  ["Scotts Landing Road","Worcester County, Maryland, USA","斯科茨码头路","美国马里兰州伍斯特郡","https://birdersguidemddc.org/site/truitts-landing-and-other-bayside-landings/"],
      mdswhf:  ["Swan Harbor Farm","Harford County, Maryland, USA","天鹅港农场","美国马里兰州哈福德郡","http://www.swanharborfarm.org/"],
      mdtrlr:  ["Truitts Landing Road","Worcester County, Maryland, USA","特鲁伊特码头路","美国马里兰州伍斯特郡","https://birdersguidemddc.org/site/truitts-landing-and-other-bayside-landings/"],
      mdwhrp:  ["Wheaton Regional Park","Maryland, USA","惠顿公园","美国马里兰州","https://www.montgomeryparks.org/parks-and-trails/wheaton-regional-park/"],
      meeeri:  ["Eastern Egg Rock Island","Maine, USA","东蛋岩岛","美国缅因州","http://projectpuffin.audubon.org/conservation/eastern-egg-rock"],
      melocp:  ["Lobster Cove Preserve","Boothbay Harbor, Maine, USA","布斯贝港龙虾湾保护区","美国缅因州","https://bbrlt.org/preserves/lobster-cove/"],
      menewh:  ["New Harbor","Maine, USA","新港","美国缅因州",wikiurl("New Harbor, Maine")],
      mimack:  ["Mackinac Island","Michigan, USA","麦基诺岛","美国密西根州",wikiurl("Mackinac Island"),baikeurl("麦基诺岛")], 
      mxmcal:  ["Alameda Central","Mexico City, Mexico","阿拉米达中央公园","墨西哥墨西哥城",wikiurl("Alameda Central")],
      mxmcbc:  ["Chapultepec Park","Mexico City, Mexico","查普尔特佩克公园","墨西哥墨西哥城",wikiurl("Chapultepec"),baikeurl("查普尔特佩克公园")],
      mxguan:  ["The Pipila Monument","Guanajuato City, Guanajuato, Mexico","皮毕拉纪念碑","墨西哥瓜纳华托州瓜纳华托城",wikiurl("El Pípila"),baikeurl("瓜纳华托")],
      mxunam:  ["UNAM Botanical Garden","Mexico City, Mexico","国立自治大学植物园","墨西哥墨西哥城","http://www.ib.unam.mx/jardin/",baikeurl("墨西哥国立自治大学")],
      ncbpkw:  ["Blue Ridge Parkway","North Carolina, USA","蓝岭公路","美国北卡罗来纳州",npsurl("blri"),baikeurl("蓝岭")], 
      nccrsp:  ["Chimney Rock State Park","North Carolina, USA","烟囱岩州立公园","美国北卡罗来纳州","http://www.chimneyrockpark.com/"],  
      ncllmp:  ["Morse Park","Lake Lure, North Carolina, USA","路尔湖摩士公园","美国北卡罗来纳州","http://www.townoflakelure.com/morse-park.php"],
      ncoutb:  ["Outer Banks","North Carolina, USA","外滩","美国北卡罗来纳州",wikiurl("Outer Banks"),baikeurl("外滩群岛")],
      njblsp:  ["Barnegat Lighthouse State Park","New Jersey, USA","巴尼加特灯塔州立公园","美国新泽西州","http://www.state.nj.us/dep/parksandforests/parks/barnlig.html"],
      njcmsp:  ["Cape May Point State Park","New Jersey, USA","五月岬州立公园","美国新泽西州","http://www.state.nj.us/dep/parksandforests/parks/capemay.html"],
      njscmm:  ["South Cape May Meadows","New Jersey, USA","南五月岬草原","美国新泽西州","https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/south-cape-may-meadows/"],
      nvdnwr:  ["Desert National Wildlife Range","Corn Creek, Nevada, USA","玉米溪沙漠国家野生动物保护区","美国内华达州",npsurl("desert",true)],
      nycenp:  ["Central Park","New York City, New York, USA","纽约市中央公园","美国纽约州","http://www.nycaudubon.org/manhattan-birding/central-park",baikeurl("纽约中央公园")],
      nyjbsp:  ["Jones Beach State Park","New York, USA","琼斯海滩州立公园","美国纽约州","https://parks.ny.gov/parks/jonesbeach/"],
      nyjbwr:  ["Jamaica Bay Wildlife Refuge","New York, USA","牙买加湾野生动物保护区","美国纽约州","http://www.nycaudubon.org/queens-birding/jamaica-bay-wildlife-refuge"],
      nymnwr:  ["Montezuma National Wildlife Refuge","New York, USA","蒙特祖玛国家野生动物保护区","美国纽约州",npsurl("montezuma",true)],
      ohbath:  ["Bath Nature Preserve","Ohio, USA","巴斯自然保护区","美国俄亥俄州","https://birding-in-ohio.com/summit-county/bath-nature-preserve/"],
      ohmage:  ["Magee Marsh Wildlife Area","Ohio, USA","玛吉沼泽野生动物保护区","美国俄亥俄州","http://www.mageemarsh.org/"],
      papapa:  ["Pennsylvania","USA","宾夕法尼亚州","美国"],
      prceci:  ["Ceiba Country Inn","Puerto Rico, USA","西巴乡村客栈","美国波多黎各","https://www.facebook.com/CeibaCountryInn/"],
      prcnwr:  ["Cabo Rojo National Wildlife Refuge","Puerto Rico, USA","卡沃罗霍国家野生动物保护区","美国波多黎各",npsurl("cabo_rojo",true)],
      prsanj:  ["San Juan","Puerto Rico, USA","圣胡安","美国波多黎各",wikiurl("San Juan, Puerto Rico")],
      scbwma:  ["Bear Island Wildlife Management Area","South Carolina, USA","熊岛野生动物管理区","美国南卡罗来纳州","https://www2.dnr.sc.gov/ManagedLands/ManagedLand/ManagedLand/56"],  
      schbsp:  ["Huntington Beach State Park","South Carolina, USA","亨廷顿海滩州立公园","美国南卡罗来纳州","http://southcarolinaparks.com/huntingtonbeach/"],
      scjwwc:  ["James Webb Wildlife Center","South Carolina, USA","詹姆斯·韦伯野生动物中心","美国南卡罗来纳州","https://www.carolinabirdclub.org/sites/SC/webbcenter.html"],
      sclobp:  ["Lewis Ocean Bay Heritage Preserve","South Carolina, USA","刘易斯海湾遗产保护区","美国南卡罗来纳州","https://www2.dnr.sc.gov/ManagedLands/ManagedLand/ManagedLand/104"],
      scpitt:  ["Pitt Street Causeway","Charleston, South Carolina, USA","查尔斯顿皮特街堤道","美国南卡罗来纳州","https://www.carolinabirdclub.org/sites/SC/pittstreet.html"],
      scsnwr:  ["Savannah National Wildlife Refuge","South Carolina, USA","萨凡纳国家野生动物保护区","美国南卡罗来纳州",npsurl("savannah",true)],
      txanwr:  ["Aransas National Wildlife Refuge","Texas, USA","阿兰萨斯国家野生动物保护区","美国德克萨斯州",npsurl("Aransas",true),baikeurl("阿兰萨斯国家野生动物保护区")],
      txbbnp:  ["Big Bend National Park","Texas, USA","大弯国家公园","美国德克萨斯州",npsurl("bibe"),baikeurl("大弯国家公园")],
      txsnwr:  ["Santa Ana National Wildlife Refuge","Texas, USA","圣安娜国家野生动物保护区","美国德克萨斯州",npsurl("santa_ana",true)],
      vacnwr:  ["Chincoteague National Wildlife Refuge","Virginia, USA","钦科蒂格国家野生动物保护区","美国弗吉尼亚州",npsurl("chincoteague",true)],
      vahump:  ["Huntley Meadows Park","Virginia, USA","亨特利湿地公园","美国弗吉尼亚州","http://www.fairfaxcounty.gov/parks/huntley-meadows-park/"],
      vaonwr:  ["Occoquan Bay National Wildlife Refuge","Virginia, USA","奥科宽湾国家野生动物保护区","美国弗吉尼亚州",npsurl("occoquan_bay",true)],
      vavava:  ["Virginia","USA","弗吉尼亚州","美国"], 
      vtwwma:  ["Wenlock Wildlife Management Area","Vermont, USA","文洛克野生动物管理区","美国佛蒙特州","https://fpr.vermont.gov/wenlock-wildlife-management-area"],  
      wacape:  ["Cape Flattery","Neah Bay, Washington, USA","尼亚湾夫拉特角","美国华盛顿州","http://makah.com/activities/cape-flattery-trail/"],
      wahobb:  ["Hobuck Beach","Neah Bay, Washington, USA","尼亚湾Hobuck海滩","美国华盛顿州","http://makah.com/activities/beaches/hobuck/"],
      waolnp:  ["Olympic National Park","Washington, USA","奥林匹克国家公园","美国华盛顿州",npsurl("olym"),baikeurl("奥林匹克国家公园")]
  };

//birds[j++] = new myBird("21-00-00T00:00","STRUTHIO","Common Ostrich","非洲鸵鸟","Struthio camelus",[m_id("")],["mdbhrp","9/2015"],"ostric2");
//birds[j++] = new myBird("21-00-00T00:00","STRUTHIO","Somali Ostrich","索马里鸵鸟","Struthio molybdophanes",[m_id("")],["mdbhrp","9/2015"],"ostric3","非洲鸵鸟索马里亚种/362845");
//birds[j++] = new myBird("21-00-00T00:00","RHEIDAE ","Greater Rhea","大美洲鸵","Rhea americana",[m_id("")],["mdbhrp","9/2015"],"grerhe1");
//birds[j++] = new myBird("21-00-00T00:00","APTERYGI","Southern Brown Kiwi","褐几维","Apteryx australis",[m_id("")],["mdbhrp","9/2015"],"sobkiw1");
//birds[j++] = new myBird("21-00-00T00:00","CASUARII","Southern Cassowary","双垂鹤鸵","Casuarius casuarius",[m_id("")],["aucass","9/2015"],"soucas1");
//birds[j++] = new myBird("21-00-00T00:00","CASUARII","Emu","鸸鹋","Dromaius novaehollandiae",[m_id("")],["mdbhrp","9/2015"],"emu1");
//birds[j++] = new myBird("21-00-00T00:00","TINAMIDA","Great Tinamou","大䳍","Tinamus major",[m_id("")],["mdbhrp","9/2015"],"gretin1");
//birds[j++] = new myBird("21-00-00T00:00","ANHIMIDA","Horned Screamer","角叫鸭","Anhima cornuta",[m_id("")],["mdbhrp","9/2015"],"horscr1");
//birds[j++] = new myBird("21-00-00T00:00","ANSERANA","Magpie Goose","鹊雁","Anseranas semipalmata",[m_id("")],["mdbhrp","9/2015"],"maggoo1");
  birds[j++] = new myBird("18-12-02T08:59","ANATIDAE","Black-bellied Whistling-Duck","黑腹树鸭","Dendrocygna autumnalis",[p_id("1812crbirding",11),p_id("2001txbirding",1)],["crsanj","12/2018",gmap("La Sabana Park",9.93542,-84.10246),"","","萨瓦纳公园","arb","1/2020",gmap("Hermann Park",29.718,-95.39086)+", Houston, Texas, USA","美国德克萨斯州休斯顿赫尔曼公园"]);
//birds[j++] = new myBird("21-00-00T00:00","ANATIDAE","Fulvous Whistling-Duck","茶色树鸭","Dendrocygna bicolor",[m_id("")],["fllawd","9/2019"]);
  birds[j++] = new myBird("15-03-07T15:31","ANATIDAE","Brant","黑雁","Branta bernicla",[p_id("1503barnegat",8)],["njblsp","3/2015","Atlantic form","大西洋亚种"]);
  birds[j++] = new myBird("05-10-30T08:00","ANATIDAE","Canada Goose","加拿大黑雁","Branta canadensis",[m_id("20150215_011_CanadaGoose"),p_id("1206brooksidebirding",6)],["mdloch","2/2015","mdwhrp","6/2012","",""," at Brookside Gardens","溪边花园"]);
  birds[j++] = new myBird("19-01-14T13:24","ANATIDAE","Barnacle Goose","白颊黑雁","Branta leucopsis",[m_id("20190114_003_BarnacleGoose")],["mdmdmd","1/2019",gmap("Whittier Lake Park",39.45549,-77.44905)+", Frederick","","","弗雷德里克市惠蒂尔湖公园"],"bargoo");
  birds[j++] = new myBird("15-12-31T08:48","ANATIDAE","Cackling Goose","小美洲黑雁","Branta hutchinsii",[m_id("20151231_140_CacklingGoose")],["mdmdmd","12/2015",gmap("River Bend Park",39.4447,-77.3866)+", Frederick","","","弗雷德里克市河湾公园"],"加拿大黑雁北部亚种");
  birds[j++] = new myBird("16-12-12T08:10","ANATIDAE","Ross's Goose","细嘴雁","Anser rossii",[m_id("20161212_140_Ross'sGoose")],["mdmdmd","12/2016",gmap("Whittier Lake Park",39.45549,-77.44905)+", Frederick","","","弗雷德里克市惠蒂尔湖公园"]);
  birds[j++] = new myBird("05-11-26T14:29","ANATIDAE","Snow Goose","雪雁","Anser caerulescens",[p_id("0511assateague",28),p_id("1409fingerlake",14)],["vacnwr","11/2005","nymnwr","8/2014"],"雪雁/25315");
  birds[j++] = new myBird("21-03-27T10:47","ANATIDAE","Pink-footed Goose","粉脚雁","Anser brachyrhynchus",m_id(sas("20210327_03",["5","6"],"_Pink-footedGoose")),["arb","3/2021",gmap("Wells Road",38.87654,-75.31251)+", Sussex County, Delaware, USA","和"+b_link("雪雁")+"在一起，美国特拉华州苏塞克斯郡韦尔斯路"],"pifgoo");
  birds[j++] = new myBird("21-01-16T11:52","ANATIDAE","Tundra Bean-Goose","短嘴豆雁","Anser serrirostris",[m_id("20210116_014_TundraBean-Goose")],["papapa","1/2021",gmap("East Park Reservoir",39.98544,-75.19472)+", Philadelphia","","","费城东园水库"],"tunbeg1","豆雁普通亚种");
  birds[j++] = new myBird("15-03-06T10:23","ANATIDAE","Greater White-fronted Goose","白额雁","Anser albifrons",[m_id("20150306_030_GreaterWhite-frontedGoose")],["mdcocn","3/2015","With "+b_link("Canada Goose","Canada Geese"),"和"+b_link("加拿大黑雁")+"在一起"," at Cumberland Terminus","坎伯兰终点站"]);
  birds[j++] = new myBird("15-02-28T10:27","ANATIDAE","Mute Swan","疣鼻天鹅","Cygnus olor",[m_id("20150228_016_MuteSwan"),p_id("1505capemay",7)],["mdftmh","2/2015","njscmm","5/2015"]);
  birds[j++] = new myBird("14-07-06T11:04","ANATIDAE","Trumpeter Swan","黑嘴天鹅","Cygnus buccinator",p_id("1512bhill",[10,11]),["mdbhrp","1/2015","mdbhrp","2/2015"]); 
  birds[j++] = new myBird("05-11-26T14:43","ANATIDAE","Tundra Swan","小天鹅","Cygnus columbianus",[p_id("0511assateague",29)],["vacnwr","11/2005"],"小天鹅/4561");
  birds[j++] = new myBird("16-06-10T09:01","ANATIDAE","Egyptian Goose","埃及雁","Alopochen aegyptiaca",[p_id("1606florida",10)],["flplpr","6/2016"],"egygoo");
  birds[j++] = new myBird("16-06-10T09:27","ANATIDAE","Muscovy Duck","疣鼻栖鸭","Cairina moschata",[p_id("1606florida",12),p_id("1812crbirding",13)],["flplpr","6/2016","crsanj","12/2018",gmap("La Sabana Park",9.93542,-84.10246),"","","萨瓦纳公园"]);
  birds[j++] = new myBird("06-04-17T17:21","ANATIDAE","Wood Duck","林鸳鸯","Aix sponsa",[m_id("20160514_055_WoodDuck(M)"),p_id("1512bhill",27),p_id("1409fingerlake",13)],["nyjbwr","5/2016","Male","mdbhrp","6/2015","Female and chicks","nymnwr","8/2014","Eclipse male"]);
//birds[j++] = new myBird("21-00-00T00:00","ANATIDAE","Mandarin Duck","鸳鸯","Aix galericulata",[p_id()],["cnxihu","4/2005"],"manduc");
  birds[j++] = new myBird("20-01-25T07:41","ANATIDAE","Cinnamon Teal","桂红鸭","Spatula cyanoptera",p_id("2001txbirding",[29,30]),["txsnwr","1/2020","Males left, female right","txsnwr","1/2020","Males"]);
  birds[j++] = new myBird("07-04-29T10:46","ANATIDAE","Blue-winged Teal","蓝翅鸭","Spatula discors",m_id(["20160410_036_Blue-wingedTeal","20150321_042_Blue-wingedTeal"]),["mdcorl","4/2016","Female left, male right","mdswhf","3/2015"]);
  birds[j++] = new myBird("12-03-10T09:25","ANATIDAE","Northern Shoveler","琵嘴鸭","Spatula clypeata",[m_id("20151122_129_NorthernShoveler"),m_id("20150228_019_NorthernShoveler")],["vahump","11/2015","Male left, females right","mdftmh","2/2015"]);
  birds[j++] = new myBird("15-03-02T09:21","ANATIDAE","Gadwall","赤膀鸭","Mareca strepera",m_id(["20151122_127_Gadwall","20150302_025_Gadwall(M)"]),["vahump","11/2015","Male left, female right","mdcovl","3/2015","Males"]);
  birds[j++] = new myBird("16-03-13T09:30","ANATIDAE","Eurasian Wigeon","赤颈鸭","Mareca penelope",[m_id("20160313_020_EurasianWigeon(M)")],["mdmdmd","3/2016","Male, "+gmap("Trout Run WWTP",39.38977,-79.39146)+", Garrett County","","","加勒特郡鳟鱼溪废水处理厂"]);
  birds[j++] = new myBird("15-02-15T15:42","ANATIDAE","American Wigeon","绿眉鸭","Mareca americana",m_id(["20150215_010_AmericanWigeon","20170121_012_AmericanWigeon(F)"]),["mdloch","2/2015","Males","mdmdmd","1/2017","Female, "+gmap("Cambridge",38.57957,-76.07774),"","","剑桥市"]);
  birds[j++] = new myBird("06-02-20T14:57","ANATIDAE","Mallard","绿头鸭","Anas platyrhynchos",["2006cobirding/Mallard_20060220_004",p_id("1206brooksidebirding",21),m_id("20151025_111_Mallard")],["mdcocn","2/2006","Female left, male right","mdwhrp","6/2012","Eclipse male",""," at Brookside Gardens","溪边花园","mdbmnt","10/2015"]);
  birds[j++] = new myBird("16-06-10T09:01","ANATIDAE","Mottled Duck","北美斑鸭","Anas fulvigula",[p_id("1606florida",9)],["flplpr","6/2016","Males"]);
  birds[j++] = new myBird("15-02-17T12:51","ANATIDAE","American Black Duck","北美黑鸭","Anas rubripes",[p_id("1512bhill",20)],["mdbhrp","2/2015","Two males and a female (center)","两雄性和一雌性(中间)"]);
  birds[j++] = new myBird("19-05-10T10:35","ANATIDAE","Mexican Duck","墨西哥鸭","Anas diazi",p_id("1905mxbird",[1,2]),["mxmcbc","5/2019","Males","mxmcbc","5/2019","Female"],"mexduc");
  birds[j++] = new myBird("15-11-22T09:17","ANATIDAE","Northern Pintail","针尾鸭","Anas acuta",m_id(["20201229_146_NorthernPintail","20201229_147_NorthernPintail"]),["vahump","12/2020","Male left, female right","vahump","12/2020","Male"]);
  birds[j++] = new myBird("15-11-22T09:50","ANATIDAE","Green-winged Teal","绿翅鸭","Anas carolinensis",m_id(["20151122_128_Green-wingedTeal(M)","20210204_023_EurasianTeal"]),["vahump","11/2015","American males","北美亚种雄性","vavava","2/2021","Eurasian male, "+gmap("Middlesex Drive Pond",38.90828,-77.48343)+", Loudoun County","欧亚亚种雄性","","劳登郡米德尔塞克斯路池塘"]);
  birds[j++] = new myBird("15-01-19T10:52","ANATIDAE","Canvasback","帆背潜鸭","Aythya valisineria",m_id(["20170121_009_Canvasback(M)","20170121_008_Canvasback(F)"]),["mdmdmd","1/2017","Male, "+gmap("Cambridge",38.57957,-76.07774),"","","剑桥市","mdmdmd","1/2017","Female, "+gmap("Cambridge",38.57957,-76.07774),"","","剑桥市"]);
  birds[j++] = new myBird("15-02-15T15:34","ANATIDAE","Redhead","美洲潜鸭","Aythya americana",[m_id("20150215_008_Redhead")],["mdloch","2/2015","Male left, female right"]);
  birds[j++] = new myBird("15-02-15T15:58","ANATIDAE","Ring-necked Duck","环颈潜鸭","Aythya collaris",[m_id("20150215_012_Ring-neckedDuck"),p_id("1512bhill",17)],["mdloch","2/2015","Males","mdbhrp","2/2015","Males and a female (center)","雄性和一雌性(中间)"]);
//birds[j++] = new myBird("21-00-00T00:00","ANATIDAE","Tufted Duck","凤头潜鸭","Aythya fuligula",[m_id("")],["mdbhrp","9/2015"],"tufduc");
  birds[j++] = new myBird("17-02-04T14:16","ANATIDAE","Greater Scaup","斑背潜鸭","Aythya marila",[m_id("20170204_017_GreaterScaup(F)")],["mdmdmd","2/2017","Female, Greenbelt Lake","","","格林贝尔特湖"]);
  birds[j++] = new myBird("06-04-09T11:38","ANATIDAE","Lesser Scaup","小潜鸭","Aythya affinis",m_id(["20170121_010_LesserScaup(M)","20170121_011_LesserScaup(F)"]),["mdmdmd","1/2017","Male, "+gmap("Cambridge",38.57957,-76.07774),"","","剑桥市","mdmdmd","1/2017","Female, "+gmap("Cambridge",38.57957,-76.07774),"","","剑桥市"]);
  birds[j++] = new myBird("20-12-28T12:30","ANATIDAE","King Eider","王绒鸭","Somateria spectabilis",[m_id("20201228_144_KingEider")],["mdocci","12/2020","Immature male (surrounded by "+b_link("Surf Scoter","s")+")","未成年雄性，周围是"+b_link("斑头海番鸭")," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("15-05-24T14:43","ANATIDAE","Common Eider","欧绒鸭","Somateria mollissima",[p_id("1505puffin",12),p_id("1505puffin",11),p_id("1512boston",12)],["menewh","5/2015","Male","menewh","5/2015","Female","mahpsp","12/2015","Females and 1st winter males (with white chest)","雌性和一齡冬羽雄性(白胸)"]);
  birds[j++] = new myBird("15-03-08T09:51","ANATIDAE","Harlequin Duck","丑鸭","Histrionicus histrionicus",p_id("1503barnegat",[13,12,14]),["njblsp","3/2015","Males","njblsp","3/2015","Female","njblsp","3/2015"]);
  birds[j++] = new myBird("15-12-26T12:28","ANATIDAE","Surf Scoter","斑头海番鸭","Melanitta perspicillata",[m_id("20170128_014_SurfScoter")],["mdmdmd","1/2017","Females (center) and males, "+gmap("Cambridge",38.57799,-76.07068),"雌性(中间)和雄性","","剑桥市"]);
  birds[j++] = new myBird("15-03-28T10:54","ANATIDAE","White-winged Scoter","白翅海番鸭","Melanitta deglandi",[p_id("1512boston",9)],["mahpsp","12/2015","Female left, male right"],"斑脸海番鸭");
  birds[j++] = new myBird("15-11-26T14:46","ANATIDAE","Black Scoter","黑海番鸭","Melanitta americana",m_id(["20151126_138_BlackScoter(F)","20160319_021_BlackScoter(M)"]),["mdocci","11/2015","Female",""," "+gmap("Inlet",38.32435,-75.08544),"海口","deinri","3/2016","Adult (left) and 1st winter (right) males","成年(左)和一龄冬羽(右)雄性"]);
  birds[j++] = new myBird("16-03-19T15:19","ANATIDAE","Long-tailed Duck","长尾鸭","Clangula hyemalis",m_id(["20210101_002_Long-tailedDuck","20160319_022_Long-tailedDuck"]),["deinri","1/2021","Male","deinri","3/2016","Male (center) and females","雄性(中间)和雌性"]);
  birds[j++] = new myBird("15-02-28T13:43","ANATIDAE","Bufflehead","白枕鹊鸭","Bucephala albeola",[p_id("1512boston",11),m_id("20160327_029_Bufflehead(F)")],["mahpsp","12/2015","Females left, males right","ncoutb","3/2016","Females",""," at Cape Hatteras","哈特拉斯角"]);
  birds[j++] = new myBird("15-02-28T13:54","ANATIDAE","Common Goldeneye","鹊鸭","Bucephala clangula",p_id("1512boston",[6,7]),["arb","12/2015","Male"+(t1=", "+gmap("Castle Island",42.33526,-71.01263)+", Boston, Massachusetts, USA"),"雄性"+(t2="，美国马萨诸塞州波士顿城堡岛"),"arb","12/2015","Female left, male right"+t1,"左雌性，右雄性"+t2]);
  birds[j++] = new myBird("21-01-10T15:58","ANATIDAE","Barrow's Goldeneye","巴氏鹊鸭","Bucephala islandica",[m_id("20210110_007_BarrowGoldeneye")],["mdmdmd","1/2021","Male, "+gmap("Point Lookout State Park",38.05859,-76.32492),"","","眺望点州立公园"]);
  birds[j++] = new myBird("14-01-20T17:16","ANATIDAE","Hooded Merganser","棕胁秋沙鸭","Lophodytes cucullatus",m_id(["20150125_002_HoodedMerganser","20200514_007_HoodedMerganser"]),["mdmdmd","1/2015","Male left, female right, "+gmap("Clear Spring Park",39.18696,-77.2338)+", Germantown","","","德国镇清泉公园","mdmwma","5/2020","Female and chicks"]);
  birds[j++] = new myBird("13-07-14T14:11","ANATIDAE","Common Merganser","普通秋沙鸭","Mergus merganser",[m_id("20160221_016_CommonMerganser"),p_id("1307alaskabirding",1)],["mdcorl","2/2016","Female left, male right","akknpp","7/2013","Female and chicks"]);
  birds[j++] = new myBird("15-03-02T09:23","ANATIDAE","Red-breasted Merganser","红胸秋沙鸭","Mergus serrator",p_id("1503barnegat",[3,5,2]),["njblsp","3/2015","Male","njblsp","3/2015","Female","njblsp","3/2015","Immature"]);
  birds[j++] = new myBird("15-02-14T09:07","ANATIDAE","Ruddy Duck","棕硬尾鸭","Oxyura jamaicensis",[m_id("20150228_018_RuddyDuck(M)"),p_id("1512bhill",14)],["mdftmh","2/2015","Male","mdbhrp","2/2015","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","MEGAPODI","Australian Brushturkey","丛冢雉","Alectura lathami",[m_id("")],["mdbhrp","9/2015"],"ausbrt1");
  birds[j++] = new myBird("20-01-24T09:26","CRACIDAE","Plain Chachalaca","纯色小冠雉","Ortalis vetula",[p_id("2001txbirding",20)],["txsnwr","1/2020"]);
  birds[j++] = new myBird("18-12-06T08:02","CRACIDAE","Crested Guan","紫冠雉","Penelope purpurascens",[p_id("1812crbirding",73)],["crarol","12/2018"],"cregua1");
  birds[j++] = new myBird("18-12-04T09:43","CRACIDAE","Great Curassow","大凤冠雉","Crax rubra",p_id("1812crbirding",[35,83]),["crarol","12/2018","Male","crarol","12/2018","Female"],"grecur1");
//birds[j++] = new myBird("21-00-00T00:00","NUMIDIDA","Helmeted Guineafowl","盔珠鸡","Numida meleagris",[m_id("")],["mdbhrp","9/2015"],"helgui");
//birds[j++] = new myBird("21-00-00T00:00","ODONTOPH","Mountain Quail","山翎鹑","Oreortyx pictus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","ODONTOPH","Scaled Quail","鳞斑鹑","Callipepla squamata",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","ODONTOPH","California Quail","珠颈翎鹑","Callipepla californica",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("15-07-06T12:41","ODONTOPH","Gambel's Quail","黑腹翎鹑","Callipepla gambelii",[p_id("1507birdingwest",2)],["nvdnwr","7/2015","Female"]);
  birds[j++] = new myBird("21-06-26T10:51","ODONTOPH","Northern Bobwhite","山齿鹑","Colinus virginianus",[m_id("20210626_094_NorthernBobwhite")],["debnwr","6/2021","Male"]);
//birds[j++] = new myBird("21-00-00T00:00","ODONTOPH","Montezuma Quail","彩鹑","Cyrtonyx montezumae",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("16-02-28T09:29","PHASIANI","Wild Turkey","火鸡","Meleagris gallopavo",[p_id("1604asheville",1)],["ncbpkw","4/2016","Female"]);
  birds[j++] = new myBird("16-09-15T08:53","PHASIANI","Ruffed Grouse","披肩榛鸡","Bonasa umbellus",[p_id("1609vtcanbirding",10)],["vtwwma","9/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","PHASIANI","Greater Sage-Grouse","艾草松鸡","Centrocercus urophasianus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PHASIANI","Dusky Grouse","蓝镰翅鸡","Dendragapus obscurus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PHASIANI","Sooty Grouse","乌镰翅鸡","Dendragapus fuliginosus",[m_id("")],["mdbhrp","9/2015"],10410);
  birds[j++] = new myBird("17-09-02T08:51","PHASIANI","Spruce Grouse","枞树镰翅鸡","Canachites canadensis",p_id("1709algonquin",[10,8,9]),["caalgp","9/2017","Male","caalgp","9/2017","Female","caalgp","9/2017","Mating display"]);
  birds[j++] = new myBird("17-01-29T09:29","PHASIANI","Ring-necked Pheasant","环颈雉","Phasianus colchicus",[m_id("20170129_015_Ring-neckedPheasant(M)"),p_id("1704longyan",12)],["mdmwma","1/2017","Male","cnlynv","4/2017","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","PHASIANI","Indian Peafowl","蓝孔雀","Pavo cristatus",[p_id("1604asheville",1)],["flmahp","6/2016","Male"]);
//birds[j++] = new myBird("21-00-00T00:00","PHASIANI","Chukar","石鸡","Alectoris chukar",[p_id("1412mckee-beshers",6)],["mdmwma","8/2014","A released bird","一只释放鸟"]);
//birds[j++] = new myBird("21-00-00T00:00","CAPRIMUL","Lesser Nighthawk","小灰眉夜鹰","Chordeiles acutipennis",[m_id("")],["nvdnwr","7/2015"]);
  birds[j++] = new myBird("16-06-14T08:11","CAPRIMUL","Common Nighthawk","美洲夜鹰","Chordeiles minor",[p_id("1606florida",27)],["scbwma","6/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","CAPRIMUL","Chuck-will's-widow","卡氏夜鹰","Antrostomus carolinensis",[m_id("")],["scpitt","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","CAPRIMUL","Eastern Whip-poor-will","三声夜鹰","Antrostomus vociferus",[m_id("")],["scpitt","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","STEATORN","Oilbird","油鸱","Steatornis caripensis",[m_id("")],["mdbhrp","9/2015"],"oilbir1");
//birds[j++] = new myBird("21-00-00T00:00","NYCTIBII","Great Potoo","大林鸱","Nyctibius grandis",[m_id("")],["mdbhrp","9/2015"],"grepot1");
//birds[j++] = new myBird("21-00-00T00:00","PODARGID","Tawny Frogmouth","茶色蟆口鸱","Podargus strigoides",[m_id("")],["mdbhrp","9/2015"],"tawfro1");
//birds[j++] = new myBird("21-00-00T00:00","AEGOTHEL","Australian Owlet-nightjar","澳洲裸鼻鸱","Aegotheles cristatus",[m_id("")],["mdbhrp","9/2015"],"auonig1");
//birds[j++] = new myBird("21-00-00T00:00","HEMIPROC","Crested Treeswift","凤头雨燕","Hemiprocne coronata",[m_id("")],["mdbhrp","9/2015"],"cretre1");
  birds[j++] = new myBird("15-07-19T08:02","APODIDAE","Chimney Swift","烟囱雨燕","Chaetura pelagica",[m_id("20160618_077_ChimneySwift")],["arb","6/2016",gmap("Lewes",38.77569,-75.14053)+", Delaware, USA","美国特拉华州刘易斯"]);
  birds[j++] = new myBird("18-12-05T08:00","TROCHILI","Stripe-throated Hermit","纹喉隐蜂鸟","Phaethornis striigularis",[p_id("1812crbirding",54)],["crarol","12/2018"],"stther2");
  birds[j++] = new myBird("15-01-03T10:48","TROCHILI","Antillean Mango","黑胸芒果蜂鸟","Anthracothorax dominicus",[p_id("1501prbirding",17)],["prcnwr","1/2015","Female"],"antman1");
  birds[j++] = new myBird("15-01-08T07:32","TROCHILI","Green-throated Carib","绿喉蜂鸟","Eulampis holosericeus",p_id("1501prbirding",[38,53]),["prsanj","1/2015"],"grtcar1");
  birds[j++] = new myBird("19-05-12T09:25","TROCHILI","Rivoli's Hummingbird","大蜂鸟","Eugenes fulgens",p_id("1905mxbird",[17,7]),["mxunam","5/2019","Male","mxunam","5/2019","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","TROCHILI","Black-chinned Hummingbird","黑颏北蜂鸟","Archilochus alexandri",[p_id("1507birdingwest",7)],["arb","7/2015","Immature male, "+gmap("Hayden Island",45.61298,-122.6743)+", Portland, Oregon, USA","未成年雄性，美国俄勒冈州波特兰海登岛"]);
  birds[j++] = new myBird("06-09-07T17:00","TROCHILI","Ruby-throated Hummingbird","红喉北蜂鸟","Archilochus colubris",p_id("1107brookside",[10,13]),["mdwhrp","7/2011","Female/immature",""," at Brookside Gardens","溪边花园"]);
  birds[j++] = new myBird("13-12-25T17:25","TROCHILI","Anna's Hummingbird","安氏蜂鸟","Calypte anna",p_id("1312bigbendbirding",[12,13,14]),["txbbnp","12/2013","Female","txbbnp","12/2013","Male","txbbnp","12/2013","Female"]);
  birds[j++] = new myBird("15-07-12T09:40","TROCHILI","Costa's Hummingbird","科氏蜂鸟","Calypte costae",p_id("1507birdingwest",[42,41]),["cabake","7/2015","Immature male, "+gmap("Yokuts Park",35.37584,-119.04749),"","","约库特公园"]);
//birds[j++] = new myBird("21-00-00T00:00","TROCHILI","Calliope Hummingbird","星蜂鸟","Selasphorus calliope",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("20-12-15T10:41","TROCHILI","Rufous Hummingbird","棕煌蜂鸟","Selasphorus rufus",[m_id("20201215_135_RufousHummingbird")],["vavava","12/2020","Female, "+gmap("Green Spring Garden Park",38.82444,-77.15687)+", Fairfax County","","","费尔法克斯郡绿泉花园"]);
  birds[j++] = new myBird("15-07-11T09:57","TROCHILI","Allen's Hummingbird","艾氏煌蜂鸟","Selasphorus sasin",[p_id("1507birdingwest",31)],["arb","7/2015","Female, "+gmap("Point Arena",38.91476,-123.70976)+", California, USA","雌性，美国加利福尼亚州波因特阿里纳"]);
//birds[j++] = new myBird("21-00-00T00:00","TROCHILI","Broad-tailed Hummingbird","宽尾煌蜂鸟","Selasphorus platycercus",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("19-05-14T08:09","TROCHILI","Broad-billed Hummingbird","阔嘴蜂鸟","Cynanthus latirostris",p_id("1905mxbird",[24,32]),["mxguan","5/2019","Female","mxmcal","5/2019","Female"]);
  birds[j++] = new myBird("18-12-05T09:24","TROCHILI","Violet-headed Hummingbird","紫头蜂鸟","Klais guimeti",p_id("1812crbirding",[69,55]),["crarol","12/2018","Male","crarol","12/2018","Female"],"vihhum1",11143);
  birds[j++] = new myBird("18-12-04T13:29","TROCHILI","Scaly-breasted Hummingbird","鳞胸刀翅蜂鸟","Phaeochroa cuvierii",[p_id("1812crbirding",43)],["crarol","12/2018"],"scbhum1",817);
  birds[j++] = new myBird("19-05-12T09:20","TROCHILI","Violet-crowned Hummingbird","紫冠蜂鸟","Leucolia violiceps",p_id("1905mxbird",[4,8]),["mxunam","5/2019","Female"],"vichum");
  birds[j++] = new myBird("19-05-10T11:18","TROCHILI","Berylline Hummingbird","绿蜂鸟","Saucerottia beryllina",p_id("1905mxbird",[6,3]),["mxunam","5/2019","mxmcbc","5/2019"],"berhum");
  birds[j++] = new myBird("18-12-04T09:51","TROCHILI","Rufous-tailed Hummingbird","棕尾蜂鸟","Amazilia tzacatl",[p_id("1812crbirding",41)],["crarol","12/2018"],"rtlhum");
//birds[j++] = new myBird("21-00-00T00:00","MUSOPHAG","Great Blue Turaco","大蓝蕉鹃","Corythaeola cristata",[m_id("")],["mdbhrp","9/2015"],"grbtur1");
//birds[j++] = new myBird("21-00-00T00:00","OTIDIDAE","White-bellied Bustard","蓝鸨","Eupodotis senegalensis",[m_id("")],["mdbhrp","9/2015"],"whbbus2");
  birds[j++] = new myBird("15-01-03T10:17","CUCULIDA","Smooth-billed Ani","滑嘴犀鹃","Crotophaga ani",[p_id("1501prbirding",16)],["prcnwr","1/2015"]);
  birds[j++] = new myBird("13-12-25T14:53","CUCULIDA","Greater Roadrunner","走鹃","Geococcyx californianus",[p_id("1312bigbendbirding",5)],["txbbnp","12/2013"]);
  birds[j++] = new myBird("06-07-30T14:31","CUCULIDA","Yellow-billed Cuckoo","黄嘴美洲鹃","Coccyzus americanus",[p_id("2009cobirding",29),p_id("1512bhill",40),m_id("20200603_035_Yellow-billedCuckoo")],["mdcovl","6/2009","mdbhrp","9/2015","mdbmnt","6/2020"]);
  birds[j++] = new myBird("16-06-11T08:39","CUCULIDA","Mangrove Cuckoo","红树美洲鹃","Coccyzus minor",p_id("1606florida",[16,15,17]),["flbppm","6/2016"]);
  birds[j++] = new myBird("21-05-14T09:30","CUCULIDA","Black-billed Cuckoo","黑嘴美洲鹃","Coccyzus erythropthalmus",m_id(["20210514_072_Black-billedCuckoo","20210514_073_Black-billedCuckoo"]),["mdlbrp","5/2021"]);
//birds[j++] = new myBird("21-00-00T00:00","MESITORN","White-breasted Mesite","白胸拟鹑","Mesitornis variegatus",[m_id("")],["mdbhrp","9/2015"],"whbmes2","拟鹑");
//birds[j++] = new myBird("21-00-00T00:00","PTEROCLI","Pallas's Sandgrouse","毛腿沙鸡","Syrrhaptes paradoxus",[m_id("")],["mdbhrp","9/2015"],"palsan1");
  birds[j++] = new myBird("15-01-08T12:35","COLUMBID","Rock Pigeon","原鸽","Columba livia",[p_id("1501prbirding",46),p_id("1905mxbird",23)],["prsanj","1/2015","arb","5/2019","Adult feeding young, "+gmap("Guanajuato City",21.01555,-101.2537)+", Mexico","成年鸟喂雏鸟，墨西哥瓜纳华托城"]);
//birds[j++] = new myBird("21-00-00T00:00","COLUMBID","White-crowned Pigeon","白顶鸽","Patagioenas leucocephala",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","COLUMBID","Band-tailed Pigeon","斑尾鸽","Patagioenas fasciata",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("18-12-08T08:58","COLUMBID","Red-billed Pigeon","红嘴鸽","Patagioenas flavirostris",[p_id("1812crbirding",97)],["crsanj","12/2018",gmap("Morazán Park",9.93547,-84.07544),"","","莫拉桑公园"],"rebpig1");
  birds[j++] = new myBird("17-04-03T07:11","COLUMBID","Oriental Turtle Dove","山斑鸠","Streptopelia orientalis",[p_id("1704longyan",6)],["cnlydp","4/2017"],"ortdov");
  birds[j++] = new myBird("15-07-12T10:32","COLUMBID","Eurasian Collared-Dove","灰斑鸠","Streptopelia decaocto",[p_id("1606florida",25)],["arb","6/2016",gmap("South Beach",25.78903,-80.12833)+", Miami, Florida, USA","美国佛罗里达州迈阿密南滩"]);
  birds[j++] = new myBird("15-01-03T06:48","COLUMBID","African Collared-Dove","粉头斑鸠","Streptopelia roseogrisea",[p_id("1501prbirding",12)],["arb","1/2015",gmap("Ponce",18.01138,-66.61393)+", Puerto Rico, USA","美国波多黎各蓬塞市"]);
  birds[j++] = new myBird("16-01-03T10:00","COLUMBID","Spotted Dove","珠颈斑鸠","Spilopelia chinensis",[p_id("1601china",7)],["cnbjjp","1/2016"],"spodov");
  birds[j++] = new myBird("13-12-25T14:41","COLUMBID","Inca Dove","印加地鸠","Columbina inca",[p_id("1312bigbendbirding",2),p_id("1812crbirding",8),p_id("1905mxbird",34)],["txbbnp","12/2013","crsanj","12/2018",gmap("La Sabana Park",9.93542,-84.10246),"","","萨瓦纳公园","mxmcal","5/2019"]);
  birds[j++] = new myBird("15-01-02T09:54","COLUMBID","Common Ground Dove","地鸠","Columbina passerina",p_id("1501prbirding",[8,19]),["arb","1/2015","Male, "+gmap("Rincón",18.340828,-67.25537)+", Puerto Rico, USA","雄性，美国波多黎各林孔市","prcnwr","1/2015","Female"]);
  birds[j++] = new myBird("18-12-07T08:02","COLUMBID","White-tipped Dove","白额棕翅鸠","Leptotila verreauxi",[p_id("1812crbirding",86)],["crarol","12/2018"],"whtdov");
  birds[j++] = new myBird("06-04-29T08:07","COLUMBID","Mourning Dove","哀鸽","Zenaida macroura",[m_id("20160130_006_MourningDove")],["mdbhrp","1/2016"]);
  birds[j++] = new myBird("15-01-08T10:50","COLUMBID","Zenaida Dove","鸣哀鸽","Zenaida aurita",[p_id("1501prbirding",45)],["prsanj","1/2015"],"zendov");
  birds[j++] = new myBird("13-12-25T17:15","COLUMBID","White-winged Dove","白翅哀鸽","Zenaida asiatica",[p_id("1312bigbendbirding",10)],["txbbnp","12/2013"]);
//birds[j++] = new myBird("21-00-00T00:00","HELIORNI","African Finfoot","非洲鳍趾䴘","Podica senegalensis",[m_id("")],["mdbhrp","9/2015"],"afrfin1","鳍脚鷈");
//birds[j++] = new myBird("21-00-00T00:00","SAROTHRU","Buff-spotted Flufftail","黄点侏秧鸡","Sarothrura elegans",[m_id("")],["mdbhrp","9/2015"],"busflu1");
  birds[j++] = new myBird("15-09-06T07:58","RALLIDAE","Clapper Rail","长嘴秧鸡","Rallus crepitans",[p_id("1509charleston",9),m_id("20201227_140_ClapperRail")],["scpitt","9/2015","vahump","12/2020"]);
  birds[j++] = new myBird("20-06-10T09:36","RALLIDAE","King Rail","王秧鸡","Rallus elegans",m_id(sas("20200610_03",["7","9"],"_KingRail")),["vaonwr","6/2020"]);
  birds[j++] = new myBird("17-05-28T06:24","RALLIDAE","Virginia Rail","弗吉尼亚秧鸡","Rallus limicola",p_id("1705ohio",[8,6]),["arb","5/2017",gmap("Mentor Marsh State Nature Perserve",41.73045,-81.31865)+", Ohio, USA","美国俄亥俄州门托沼泽州立自然保护区"]);
  birds[j++] = new myBird("20-12-29T09:26","RALLIDAE","Sora","黑脸田鸡","Porzana carolina",[m_id("20201229_148_Sora")],["vahump","12/2020"]);
  birds[j++] = new myBird("11-12-27T17:43","RALLIDAE","Common Gallinule","美洲黑水鸡","Gallinula galeata",[p_id("1112floridabirding",6),p_id("1409fingerlake",9)],["flevnp","12/2011","nymnwr","8/2014","Juvenile"],"黑水鸡/4524074");
//birds[j++] = new myBird("21-00-00T00:00","RALLIDAE","Eurasian Moorhen","黑水鸡","Gallinula chloropus",[m_id("")],["mdbhrp","6/2016"],"commoo3");
  birds[j++] = new myBird("06-05-25T18:09","RALLIDAE","American Coot","美洲骨顶","Fulica americana",[p_id("1312savannahbirding",5)],["scsnwr","12/2013"]);
  birds[j++] = new myBird("11-12-28T12:49","RALLIDAE","Purple Gallinule","紫青水鸡","Porphyrio martinica",[p_id("1112floridabirding",16)],["flevnp","12/2011"]);
//birds[j++] = new myBird("21-00-00T00:00","RALLIDAE","Gray-headed Swamphen","紫水鸡","Porphyrio poliocephalus",[m_id("")],["mdbhrp","6/2016"],"purswa3");
//birds[j++] = new myBird("21-00-00T00:00","RALLIDAE","White-breasted Waterhen","白胸苦恶鸟","Amaurornis phoenicurus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PSOPHIID","Grey-winged Trumpeter","灰翅喇叭声鹤","Psophia crepitans",[m_id("")],["mdbhrp","9/2015"],"gywtru1");
  birds[j++] = new myBird("15-02-08T08:24","GRUIDAE ","Sandhill Crane","沙丘鹤","Antigone canadensis",m_id(["20150208_004_SandhillCrane","20150208_006_SandhillCrane"]),["mdmdmd","2/2015",gmap("Bradshaw Road",39.44053,-76.4081)+", Kingsville","","","金斯维尔镇布拉德肖路"]);
//birds[j++] = new myBird("21-00-00T00:00","GRUIDAE ","White-naped Crane","白枕鹤","Antigone vipio",["0504zoo/0504zoo__9"],["natzo","4/2005"],"whncra1");
//birds[j++] = new myBird("21-00-00T00:00","GRUIDAE ","Blue Crane","蓝蓑羽鹤","Grus paradisea",["0504zoo/0504zoo__10"],["natzo","4/2005"],"blucra2");
//birds[j++] = new myBird("21-00-00T00:00","GRUIDAE ","Red-crowned Crane","丹顶鹤","Grus japonensis",["0504zoo/0504zoo__8"],["natzo","4/2005"],"reccra1");
  birds[j++] = new myBird("20-01-23T10:48","GRUIDAE ","Whooping Crane","美洲鹤","Grus americana",p_id("2001txbirding",[6,2]),["txanwr","1/2020"]);
  birds[j++] = new myBird("16-06-10T09:17","ARAMIDAE","Limpkin","秧鹤","Aramus guarauna",[p_id("1606florida",11)],["flplpr","6/2016"]);
  birds[j++] = new myBird("20-01-24T09:17","PODICIPE","Least Grebe","侏䴙䴘","Tachybaptus dominicus",[p_id("2001txbirding",18)],["txsnwr","1/2020"]);
  birds[j++] = new myBird("13-12-25T15:11","PODICIPE","Pied-billed Grebe","斑嘴巨䴙䴘","Podilymbus podiceps",[p_id("1312bigbendbirding",7),p_id("1512bhill",43),p_id("1409fingerlake",12)],["txbbnp","12/2013","mdbhrp","10/2015","Winter plumage","nymnwr","8/2014","Juvenile"],"斑嘴巨鸊鷉");
  birds[j++] = new myBird("16-12-31T09:49","PODICIPE","Red-necked Grebe","赤颈䴙䴘","Podiceps grisegena",[m_id("20161231_143_Red-neckedGrebe(WP)")],["mdloch","12/2016","Winter plumage"]);
  birds[j++] = new myBird("06-11-10T15:16","PODICIPE","Horned Grebe","角䴙䴘","Podiceps auritus",m_id(sas("20150321_",["039","040"],"_HornedGrebe")),["mdftmh","3/2015","Winter plumage","mdftmh","3/2015","Spring molt","春羽"]);
  birds[j++] = new myBird("16-12-26T10:31","PODICIPE","Eared Grebe","黑颈䴙䴘","Podiceps nigricollis",[m_id("20161226_141_EaredGrebe(WP)")],["mdcorl","12/2016","Winter plumage"]);
  birds[j++] = new myBird("15-07-08T09:55","PODICIPE","Western Grebe","北美䴙䴘","Aechmophorus occidentalis",[p_id("1507birdingwest",9),m_id("20201204_131_WesternGrebe")],["arb","7/2015",gmap("Hayden Island",45.61298,-122.6743)+", Portland, Oregon, USA","美国俄勒冈州波特兰海登岛","mdloch","12/2020"]);
//birds[j++] = new myBird("21-00-00T00:00","PODICIPE","Clark's Grebe","克氏䴙䴘","Aechmophorus clarkii",[m_id("")],["mdloch","12/2020"]);
//birds[j++] = new myBird("21-00-00T00:00","PHOENICO","American Flamingo","美洲红鹳","Phoenicopterus ruber",["0504zoo/0504zoo__14"],["natzo","4/2005"],"grefla2");
//birds[j++] = new myBird("21-00-00T00:00","TURNICID","Common Buttonquail","林三趾鹑","Turnix sylvaticus",[m_id("")],["mdbhrp","9/2015"],"smabut2");
//birds[j++] = new myBird("21-00-00T00:00","BURHINID","Eurasian Stone-curlew","欧石鸻","Burhinus oedicnemus",[m_id("")],["mdbhrp","9/2015"],"eutkne1");
//birds[j++] = new myBird("21-00-00T00:00","CHIONIDA","Snowy Sheathbill","白鞘嘴鸥","Chionis albus",[m_id("")],["mdbhrp","9/2015"],"snoshe2");
//birds[j++] = new myBird("21-00-00T00:00","PLUVIANE","Magellanic Plover","麦哲伦鸻","Pluvianellus socialis",[m_id("")],["mdbhrp","9/2015"],"magplo1");
  birds[j++] = new myBird("15-07-09T12:04","HAEMATOP","Black Oystercatcher","北美蛎鹬","Haematopus bachmani",[p_id("1507birdingwest",34)],["cambsp","7/2015"]);
  birds[j++] = new myBird("15-05-09T13:41","HAEMATOP","American Oystercatcher","美洲蛎鹬","Haematopus palliatus",[p_id("1505capemay",6),p_id("1509charleston",19)],["njscmm","5/2015","With a "+b_link("Laughing Gull")+" on the right","右边是一只"+b_link("笑鸥"),"scpitt","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","IBIDORHY","Ibisbill","鹮嘴鹬","Ibidorhyncha struthersii",[m_id("")],["mdbhrp","9/2015"],"ibisbi1");
  birds[j++] = new myBird("15-05-17T10:28","RECURVIR","Black-necked Stilt","黑颈长脚鹬","Himantopus mexicanus",[p_id("1505bombayhook",10),p_id("2001txbirding",24)],["debnwr","5/2015","txanwr","1/2020"]);
  birds[j++] = new myBird("05-12-28T09:51","RECURVIR","American Avocet","褐胸反嘴鹬","Recurvirostra americana",[p_id("0512merritt",8),p_id("1112floridabirding",31)],["flmnwr","12/2005","flevnp","12/2011"],"反嘴鷸");
  birds[j++] = new myBird("21-09-06T11:50","CHARADRI","American Golden-Plover","美洲金鸻","Pluvialis dominica",m_id(["20210906_111_AmericanGolden-Plover","20210906_113_AmericanGolden-Plover"]),["mdmdmd","9/2021",gmap("Murray Sod Farm",38.44498,-75.25945)+", Worcester County","","","伍斯特郡默里草皮农场"]);
  birds[j++] = new myBird("15-05-17T12:01","CHARADRI","Black-bellied Plover","灰斑鸻","Pluvialis squatarola",m_id(sas(["20210522_080","20210522_081","20161204_131"],"_Black-belliedPlover")),["arb","5/2021","M"+(tmp1="ale, "+gmap("Prime Hook Beach",38.8521,-75.2396)+", Delaware, USA"),"雄"+(tmp2="性，美国特拉华州普莱姆虎克海滩"),"arb","5/2021", "Fem"+tmp1,"雌"+tmp2,"nyjbsp","12/2016","Winter plumage"]);
  birds[j++] = new myBird("15-05-17T10:11","CHARADRI","Semipalmated Plover","半蹼鸻","Charadrius semipalmatus",[p_id("1505bombayhook",7)],["debnwr","5/2015"]);
  birds[j++] = new myBird("16-06-08T17:04","CHARADRI","Wilson's Plover","厚嘴鸻","Charadrius wilsonia",p_id("1606florida",[5,6]),["schbsp","6/2016"]);
  birds[j++] = new myBird("14-07-07T16:07","CHARADRI","Killdeer","双领鸻","Charadrius vociferus",[m_id("20160820_092_Killdeer"),p_id("1407michiganbirding",18)],["mdmdmd","8/2016",gmap("Fingerboard Road",39.33013,-77.37491)+", Frederick County","","","弗雷德里克郡指板路","mimack","7/2014"]);
  birds[j++] = new myBird("16-03-26T14:56","CHARADRI","Piping Plover","笛鸻","Charadrius melodus",m_id(["20160625_078_PipingPlover","20160326_027_PipingPlover"]),["nyjbsp","6/2016","ncoutb","3/2016","",""," at Oregon Inlet south jetty","俄勒冈入海口南堤"]);
//birds[j++] = new myBird("21-00-00T00:00","CHARADRI","Snowy Plover","雪鸻","Charadrius nivosus",[m_id("")],["mdbhrp","9/2015"],"环颈鸻北美亚种");
//birds[j++] = new myBird("21-00-00T00:00","PLUVIANI","Egyptian Plover","埃及燕鸻","Pluvianus aegyptius",[m_id("")],["mdbhrp","9/2015"],"egyplo1");
//birds[j++] = new myBird("21-00-00T00:00","ROSTRATU","Greater Painted-snipe","彩鹬","Rostratula benghalensis",[m_id("")],["mdbhrp","9/2015"],"grpsni1");
//birds[j++] = new myBird("21-00-00T00:00","JACANIDA","African Jacana","非洲雉鸻","Actophilornis africanus",[m_id("")],["mdbhrp","9/2015"],"afrjac1");
//birds[j++] = new myBird("21-00-00T00:00","PEDIONOM","Plains-wanderer","领鹑","Pedionomus torquatus",[m_id("")],["mdbhrp","9/2015"],"plawan1");
//birds[j++] = new myBird("21-00-00T00:00","THINOCOR","Rufous-bellied Seedsnipe","棕腹籽鹬","Attagis gayi",[m_id("")],["mdbhrp","9/2015"],"rubsee2","小籽鹬");
  birds[j++] = new myBird("21-04-14T11:28","SCOLOPAC","Upland Sandpiper","高原鹬","Bartramia longicauda",[m_id("20210414_046_UplandSandpiper")],["vavava","4/2021",gmap("Tidewater Trail",38.2277,-77.30887)+", Caroline County","","","卡罗琳郡潮水公路"]);
  birds[j++] = new myBird("21-05-09T13:47","SCOLOPAC","Whimbrel","中杓鹬","Numenius phaeopus",m_id(["20210509_066_Whimbrel","20210509_067_Whimbrel"]),["vavava","5/2021",gmap("Quinby Bridge Road",37.56557,-75.74384)+", Accomack County","","","阿科马克郡昆比桥路"]);
  birds[j++] = new myBird("20-01-23T10:49","SCOLOPAC","Long-billed Curlew","长嘴杓鹬","Numenius americanus",[p_id("2001txbirding",7)],["txanwr","1/2020"]);
//birds[j++] = new myBird("21-00-00T00:00","SCOLOPAC","Hudsonian Godwit","棕塍鹬","Limosa haemastica",[p_id("1509charleston",8)],["debnwr","9/2021"]);
  birds[j++] = new myBird("15-09-06T07:46","SCOLOPAC","Marbled Godwit","云斑塍鹬","Limosa fedoa",[p_id("1509charleston",8)],["scpitt","9/2015"]);
  birds[j++] = new myBird("15-10-31T10:50","SCOLOPAC","Ruddy Turnstone","翻石鹬","Arenaria interpres",m_id(["20170520_058_RuddyTurnstone","20151031_118_RuddyTurnstone"]),["debowb","5/2017","With "+b_link("Red Knot","s"),"后面是"+b_link("红腹滨鹬"),"mdocci","10/2015","Nonbreeding plumage",""," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("17-05-20T09:06","SCOLOPAC","Red Knot","红腹滨鹬","Calidris canutus",[m_id("20170520_057_RedKnot")],["debowb","5/2017"]);
//birds[j++] = new myBird("21-00-00T00:00","SCOLOPAC","Ruff","流苏鹬","Calidris pugnax",[m_id("")],["debnwr","9/2021","Female"],"ruff");
  birds[j++] = new myBird("20-10-23T10:15","SCOLOPAC","Stilt Sandpiper","高跷鹬","Calidris himantopus",[m_id("20201023_113_StiltSandpiper")],["mdswhf","10/2020","Nonbreeding plumage, in front of a "+b_link("Lesser Yellowlegs"),"非繁殖羽，后面是一只"+b_link("小黄脚鹬")]);
  birds[j++] = new myBird("20-10-23T10:03","SCOLOPAC","Curlew Sandpiper","弯嘴滨鹬","Calidris ferruginea",m_id(["20201023_114_CurlewSandpiper","20201023_110_CurlewSandpiper"]),["mdswhf","10/2020","Juvenile"],"cursan");
  birds[j++] = new myBird("15-09-07T07:44","SCOLOPAC","Sanderling","三趾滨鹬","Calidris alba",[p_id("2108racepoint",10),p_id("1612savannah",15),p_id("1509charleston",17)],["marace","8/2021","arb","12/2016","Winter plumage, "+gmap("Tybee Island",31.98666,-80.85212)+", Georgia, USA","冬羽，美国乔治亚州泰碧岛","arb","9/2015","Juvenile, "+gmap("Fort Moultrie",32.75895,-79.85893)+", South Carolina, USA","未成年，美国南卡罗来纳州莫尔特里堡"]);
  birds[j++] = new myBird("15-05-17T10:14","SCOLOPAC","Dunlin","黑腹滨鹬","Calidris alpina",m_id(sas(["20170520_061","20151114_122","20210102_003"],"_Dunlin")),["debowb","5/2017","mdmdmd","11/2015","Winter plumage, "+gmap("Assateague Island National Seashore",38.20566,-75.16311),"","","阿萨蒂格岛国家海岸","deinri","1/2021"]);
  birds[j++] = new myBird("15-11-26T14:15","SCOLOPAC","Purple Sandpiper","紫滨鹬","Calidris maritima",m_id(["20151126_134_PurpleSandpiper","20151126_135_PurpleSandpiper"]),["mdocci","11/2015","",""," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("21-08-29T10:45","SCOLOPAC","Baird's Sandpiper","白腹滨鹬","Calidris bairdii",m_id(["20210829_106_BairdSandpiper","20210829_107_BairdSandpiper"]),["vavava","8/2021",gmap("Broadway Wastewater Treatment Plant",38.63157,-78.7544)+", Rockingham County","","","洛金汉郡百老汇废水处理厂"]);
  birds[j++] = new myBird("15-05-09T16:24","SCOLOPAC","Least Sandpiper","姬滨鹬","Calidris minutilla",[p_id("1505capemay",13),p_id("2001txbirding",5)],["arb","5/2015",gmap("The Wetlands Institute",39.06002,-74.77294)+", Stone Harbor, New Jersey, USA","美国新泽西州石港湿地研究所","txanwr","1/2020","Nonbreeding adult"]);
  birds[j++] = new myBird("16-05-29T16:19","SCOLOPAC","White-rumped Sandpiper","白腰滨鹬","Calidris fuscicollis",[m_id("20160529_072_White-rumpedSandpiper")],["mdsclr","5/2016"]);
  birds[j++] = new myBird("21-08-29T11:41","SCOLOPAC","Buff-breasted Sandpiper","黄胸鹬","Calidris subruficollis",m_id(["20210829_109_Buff-breastedSandpiper","20210906_114_Buff-breastedSandpiper"]),["vavava","8/2021",gmap("Shenandoah Valley Produce Auction",38.44126,-79.00142)+", Rockingham County","","","洛金汉郡雪兰多谷农产品拍卖所","mdmdmd","9/2021",gmap("Murray Sod Farm",38.44498,-75.25945)+", Worcester County","","","伍斯特郡默里草皮农场"]);
  birds[j++] = new myBird("20-10-23T10:02","SCOLOPAC","Pectoral Sandpiper","斑胸滨鹬","Calidris melanotos",m_id(["20201023_108_PectoralSandpiper","20201023_109_PectoralSandpiper"]),["mdswhf","10/2020","mdswhf","10/2020","Juvenile"]);
  birds[j++] = new myBird("15-05-17T10:12","SCOLOPAC","Semipalmated Sandpiper","半蹼滨鹬","Calidris pusilla",[m_id("20170520_060_SemipalmatedSandpiper")],["debowb","5/2017"]);
  birds[j++] = new myBird("21-07-31T10:27","SCOLOPAC","Western Sandpiper","西滨鹬","Calidris mauri",[m_id("20210731_097_WesternSandpiper")],["mdmdmd","7/2021",gmap("Chesapeake Bay Environmental Center",38.94963,-76.23054),"","","切萨皮克湾环境中心"]);
  birds[j++] = new myBird("15-05-09T16:28","SCOLOPAC","Long-billed Dowitcher","长嘴半蹼鹬","Limnodromus scolopaceus",[p_id("1505capemay",14),m_id("20211008_124_Long-billedDowitcher")],["arb","5/2015",gmap("The Wetlands Institute",39.06002,-74.77294)+", Stone Harbor, New Jersey, USA","美国新泽西州石港湿地研究所","papapa","10/2021","Juvenile, "+gmap("Hamiltonban Community Park",39.79665,-77.36155)+", Adams County","","","亚当斯郡汉密尔顿班社区公园"]);
  birds[j++] = new myBird("11-12-30T11:56","SCOLOPAC","Short-billed Dowitcher","短嘴半蹼鹬","Limnodromus griseus",[p_id("1112floridabirding",29),p_id("1505bombayhook",15)],["flevnp","12/2011","debnwr","5/2015"]);
  birds[j++] = new myBird("16-02-27T18:20","SCOLOPAC","American Woodcock","小丘鹬","Scolopax minor",[m_id("20160227_018_AmericanWoodcock")],["mdmdmd","2/2016",gmap("Patuxent River State Park at Hipsley Mill Road",39.26833,-77.11398),"","","帕塔克森特河州立公园"]);
  birds[j++] = new myBird("16-01-30T09:03","SCOLOPAC","Wilson's Snipe","美洲沙锥","Gallinago delicata",m_id(sas("20160130_00",["1","2"],"_Wilson'sSnipe")),["mdmdmd","1/2016",gmap("Glade Road",39.51704,-77.3373)+", Frederick County","","","弗雷德里克郡格雷德路"],"威氏鹬");
  birds[j++] = new myBird("20-06-22T11:58","SCOLOPAC","Wilson's Phalarope","赤斑瓣蹼鹬","Phalaropus tricolor",m_id(["20200622_051_Wilson'sPhalarope","20200622_050_Wilson'sPhalarope"]),["debnwr","6/2020","Male","debnwr","6/2020","Female"]);
  birds[j++] = new myBird("21-05-21T10:30","SCOLOPAC","Red-necked Phalarope","红颈瓣蹼鹬","Phalaropus lobatus",[m_id("20210521_078_Red-neckedPhalarope")],["vavava","5/2021","Female, "+gmap("Broadway Wastewater Treatment Plant",38.63157,-78.7544)+", Rockingham County","","","洛金汉郡百老汇废水处理厂"]);
  birds[j++] = new myBird("21-09-11T15:12","SCOLOPAC","Red Phalarope","灰瓣蹼鹬","Phalaropus fulicarius",[m_id("20210911_116_RedPhalarope")],["papapa","9/2021","Nonbreeding adult, "+gmap("Wissahickon Waterfowl Preserve",40.15455,-75.22822)+", Montgomery County","","","蒙哥马利郡威萨希肯水禽保护区"]);
  birds[j++] = new myBird("06-04-23T17:28","SCOLOPAC","Spotted Sandpiper","斑腹矶鹬","Actitis macularius",m_id(sas(["20170806_086","20200810_058","20200924_086"],"_SpottedSandpiper")),["mdmdmd","8/2017",gmap("North Beach",38.71255,-76.52939)+", Calvert County","","","卡尔弗特郡北海滩","mdsclr","8/2020","mdbhrp","9/2020","Winter plumage"]);
  birds[j++] = new myBird("06-05-06T16:31","SCOLOPAC","Solitary Sandpiper","孤鹬","Tringa solitaria",[m_id("20170423_032_SolitarySandpiper")],["mdmdmd","4/2017",gmap("Schoolhouse Pond",38.81857,-76.75201)+", Prince George's County","","","乔治王子郡校舍池塘"]);
  birds[j++] = new myBird("14-08-30T17:42","SCOLOPAC","Lesser Yellowlegs","小黄脚鹬","Tringa flavipes",[m_id("20170924_108_LesserYellowlegs")],["mdmdmd","9/2017",gmap("Shiloh Church Turf Farm",38.5944,-75.86844)+", Dorchester County","","","多切斯特郡夏伊洛教堂路草皮农场"]);
  birds[j++] = new myBird("15-05-09T16:27","SCOLOPAC","Willet","斑翅鹬","Tringa semipalmata",[m_id("20160529_070_Willet"),p_id("1509charleston",20),m_id("20160529_067_Willet")],["mdsclr","5/2016","Breeding adult","scpitt","9/2015","Nonbreeding adult","mdtrlr","5/2016"]);
  birds[j++] = new myBird("13-07-14T14:15","SCOLOPAC","Greater Yellowlegs","大黄脚鹬","Tringa melanoleuca",[m_id("20170429_034_GreaterYellowlegs"),p_id("1307alaskabirding",2),m_id("20200810_057_GreaterYellowlegs")],["debnwr","4/2017","akknpp","7/2013","mdsclr","8/2020"]);
//birds[j++] = new myBird("21-00-00T00:00","DROMADID","Crab-plover","蟹鸻","Dromas ardeola",[m_id("")],["mdbhrp","9/2015"],"craplo1");
//birds[j++] = new myBird("21-00-00T00:00","GLAREOLI","Collared Pratincole","领燕鸻","Glareola pratincola",[m_id("")],["mdbhrp","9/2015"],"colpra");
  birds[j++] = new myBird("15-09-06T08:36","LARIDAE ","Black Skimmer","黑剪嘴鸥","Rynchops niger",[p_id("1606florida",26),m_id("20151004_105_BlackSkimmer(I)")],["scbwma","6/2016","mdocci","10/2015","Juvenile"]);
  birds[j++] = new myBird("15-07-09T13:32","LARIDAE ","Black-legged Kittiwake","三趾鸥","Rissa tridactyla",[p_id("1507birdingwest",21)],["wahobb","7/2015","On the left, on the right is a "+b_link("California Gull"),"左边，右边是一只"+b_link("加州鸥")]);
  birds[j++] = new myBird("17-09-09T08:52","LARIDAE ","Sabine's Gull","叉尾鸥","Xema sabini",[m_id("20170909_099_Sabine'sGull")],["mdcocn","9/2017","Immature",""," at Sycamore Landing","悬铃木码头"]);
  birds[j++] = new myBird("15-03-21T15:08","LARIDAE ","Bonaparte's Gull","博氏鸥","Chroicocephalus philadelphia",m_id(["20150321_045_BGull(W)","20201228_142_BonaparteGull"]),["mdmdmd","3/2015","Winter plumage, "+gmap("Lapidum",39.59798,-76.12817),"","","萨斯奎哈纳州立公园","mdocci","12/2020","Winter plumage",""," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("21-08-22T16:25","LARIDAE ","Black-headed Gull","红嘴鸥","Chroicocephalus ridibundus",m_id(["20210822_103_Black-headedGull","20210822_104_Black-headedGull"]),["vavava","8/2021","Nonbreeding adult, "+gmap("Hunting Creek Bridge",38.78972,-77.05143)+", Fairfax County","","","费尔法克斯郡猎溪桥"]);
  birds[j++] = new myBird("21-04-07T12:13","LARIDAE ","Little Gull","小鸥","Hydrocoloeus minutus",[m_id("20210407_039_LittleGull")],["mdmdmd","4/2021","Nonbreeding adult, "+gmap("Cox Point Park",39.29252,-76.46582)+", Baltimore County","","","巴尔的摩郡考克斯角公园"]);
  birds[j++] = new myBird("06-07-16T14:43","LARIDAE ","Laughing Gull","笑鸥","Leucophaeus atricilla",[p_id("0607outerbanks",28),p_id("1505capemay",3),m_id("20161105_112_LaughingGull(WP)"),p_id("2108racepoint",6)],["ncoutb","7/2006","njcmsp","5/2015","mdocci","11/2016","Winter plumage",""," "+gmap("Inlet",38.32435,-75.08544),"海口","marace","8/2021","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","LARIDAE ","Franklin's Gull","弗氏鸥","Leucophaeus pipixcan",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("15-07-09T13:34","LARIDAE ","Heermann's Gull","红嘴灰鸥","Larus heermanni",[p_id("1507birdingwest",22)],["wahobb","7/2015"]);
  birds[j++] = new myBird("05-11-26T09:57","LARIDAE ","Ring-billed Gull","环嘴鸥","Larus delawarensis",m_id(["20151031_116_Ring-billedGull","20150321_037_Ring-billedGull(1W)"]),["mdocci","10/2015","",""," "+gmap("Inlet",38.32435,-75.08544),"海口","mdmdmd","3/2015","1st winter, "+gmap("Southwest Area Park",39.23471,-76.6227)+", Baltimore","","","巴尔的摩西南地区公园"]);
  birds[j++] = new myBird("15-07-09T13:32","LARIDAE ","California Gull","加州鸥","Larus californicus",[p_id("1507birdingwest",21)],["wahobb","7/2015","On the right, on the left is a "+b_link("Black-legged Kittiwake"),"右边，左边是一只"+b_link("三趾鸥")]);
  birds[j++] = new myBird("15-03-08T09:17","LARIDAE ","Great Black-backed Gull","大黑背鸥","Larus marinus",[p_id("1503barnegat",10),m_id("20151031_115_GreatBlack-backedGull(1W)")],["njblsp","3/2015","mdocci","10/2015","1st winter",""," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("15-07-09T11:57","LARIDAE ","Glaucous-winged Gull","灰翅鸥","Larus glaucescens",[p_id("1507birdingwest",15)],["wacape","7/2015"]);
  birds[j++] = new myBird("15-07-11T20:16","LARIDAE ","Western Gull","西美鸥","Larus occidentalis",p_id("1507birdingwest",[33,35]),["cambsp","7/2015","cambsp","7/2015","Hatchling","幼鸟"]);
  birds[j++] = new myBird("19-01-27T13:12","LARIDAE ","Glaucous Gull","北极鸥","Larus hyperboreus",[m_id("20190127_006_GlaucousGull(1W)")],["mdmdmd","1/2019","1st winter, "+gmap("West Ocean City Marina",38.32766,-75.10267),"","","大洋城西城码头"]);
  birds[j++] = new myBird("17-02-04T11:04","LARIDAE ","Iceland Gull","冰岛鸥","Larus glaucoides",m_id(["20170204_016_IcelandGull(1W)","20190107_001_IcelandGull"]),["mdmapp","2/2017","1st winter","mdmdmd","1/2019","2nd winter, "+gmap("Loreley Beach Community Pier",39.3855,-76.40963)+", Baltimore County","","","巴尔的摩郡罗利滩社区码头"],9019);
  birds[j++] = new myBird("06-02-19T11:53","LARIDAE ","Herring Gull","银鸥","Larus smithsonianus",[p_id("0607outerbanks",22),p_id("1503barnegat",9)],["ncoutb","7/2006","njblsp","3/2015","3rd Winter",""]);
  birds[j++] = new myBird("16-01-07T14:49","LARIDAE ","Vega Gull","织女银鸥","Larus vegae",p_id("1601china",[36,35]),["arb","1/2016","The "+(t1=gmap("Bund",31.2425,121.49082)+", Shanghai, China"),"中国上海外滩","arb","1/2016","Immature, the "+t1,"未成年，中国上海外滩"],"veggul1");
  birds[j++] = new myBird("15-10-04T14:12","LARIDAE ","Lesser Black-backed Gull","小黑背鸥","Larus fuscus",[m_id("20151004_104_LesserBlack-backedGull")],["mdocci","10/2015"]);
  birds[j++] = new myBird("21-07-12T12:19","LARIDAE ","Gull-billed Tern","鸥嘴噪鸥","Gelochelidon nilotica",[m_id("20210712_095_Gull-billedTern")],["debnwr","7/2021"]);
  birds[j++] = new myBird("15-07-10T10:09","LARIDAE ","Caspian Tern","红嘴巨鸥","Hydroprogne caspia",m_id(sas("20150808_08",["9","8"],"_CaspianTern")),["vavava","8/2015",gmap("Dyke Marsh Wildlife Preserve",38.76986,-77.04641),"","","黛克湿地野生动物保护区"]);
  birds[j++] = new myBird("15-01-08T09:29","LARIDAE ","Royal Tern","橙嘴凤头燕鸥","Thalasseus maximus",[m_id("20151031_117_RoyalTern(W)"),p_id("1501prbirding",41),p_id("1501prbirding",42)],["mdocci","10/2015","Winter plumage",""," "+gmap("Inlet",38.32435,-75.08544),"海口","prsanj","1/2015"]);
  birds[j++] = new myBird("21-06-06T13:37","LARIDAE ","Sandwich Tern","白嘴端凤头燕鸥","Thalasseus sandvicensis",[m_id("20210606_087_SandwichTern")],["vavava","6/2021",npsurl("fomr","Fort Monroe National Monument")+", Hampton","","","汉普顿市"+npsurl("fomr","门罗堡纪念碑")]);
  birds[j++] = new myBird("15-07-26T09:02","LARIDAE ","Least Tern","姬燕鸥","Sternula antillarum",m_id(["20150726_084_LeastTern","20150726_085_LeastTern(I)"]),["mdenwr","7/2015","mdenwr","7/2015","Juvenile"]);
  birds[j++] = new myBird("21-08-11T09:46","LARIDAE ","Roseate Tern","粉红燕鸥","Sterna dougallii",[p_id("2108racepoint",5)],["marace","8/2021"]);
  birds[j++] = new myBird("14-07-07T14:11","LARIDAE ","Common Tern","普通燕鸥","Sterna hirundo",p_id("1407michiganbirding",[15,16]),["mimack","7/2014"]);
//birds[j++] = new myBird("21-00-00T00:00","LARIDAE ","Arctic Tern","北极燕鸥","Sterna paradisaea",[m_id("")],["marace","8/2021"]);
  birds[j++] = new myBird("15-05-09T11:22","LARIDAE ","Forster's Tern","弗氏燕鸥","Sterna forsteri",[p_id("1505capemay",4),m_id("20150726_086_Forster'sTern(I)")],["njcmsp","5/2015","mdenwr","7/2015","Winter plumage (with two "+b_link("Laughing Gull","s")+" at the back)","未成年(背后是两只"+b_link("笑鸥")+")"]);
  birds[j++] = new myBird("21-05-31T11:05","LARIDAE ","Black Tern","黑浮鸥","Chlidonias niger",[m_id("20210531_085_BlackTern"),p_id("2108racepoint",1)],["papapa","5/2021","Breeding adult, "+npsurl("John_Heinz",true,"John Heinz National Wildlife Refuge")+", Philadelphia","","","费城"+npsurl("John_Heinz",true,"约翰·亨氏国家野生动物保护区"),"marace","8/2021","Nonbreeding adults"]);
//birds[j++] = new myBird("21-00-00T00:00","STERCORA","Pomarine Jaeger","中贼鸥","Stercorarius pomarinus",[m_id("")],["mdocci","7/2020","",""," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("21-08-11T08:38","STERCORA","Parasitic Jaeger","短尾贼鸥","Stercorarius parasiticus",p_id("2108racepoint",[3,2]),["marace","8/2021","Immature"]);
  birds[j++] = new myBird("21-01-17T12:01","ALCIDAE ","Dovekie","侏海雀","Alle alle",m_id(["20210117_015_Dovekie","20210117_016_Dovekie"]),["deinri","1/2021"]);
  birds[j++] = new myBird("15-07-10T10:07","ALCIDAE ","Common Murre","崖海鸦","Uria aalge",[p_id("1507birdingwest",27)],["arb","7/2015",gmap("Cannon Beach",45.88457,-123.96488)+", Oregon, USA","美国俄勒冈州卡农海滩"]);
  birds[j++] = new myBird("17-03-04T09:24","ALCIDAE ","Razorbill","刀嘴海雀","Alca torda",m_id(["20170304_026_Razorbill","20170304_027_Razorbill"]),["mdocci","3/2017","Nonbreeding adults",""," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("15-05-24T18:34","ALCIDAE ","Black Guillemot","白翅斑海鸽","Cepphus grylle",[p_id("1505puffin",18)],["meeeri","5/2015"]);
  birds[j++] = new myBird("15-07-09T12:19","ALCIDAE ","Pigeon Guillemot","海鸽","Cepphus columba",p_id("1507birdingwest",[16,17]),["wacape","7/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","ALCIDAE ","Rhinoceros Auklet","角嘴海雀","Cerorhinca monocerata",["1505puffin/"],["meeeri","5/2015"]);
  birds[j++] = new myBird("15-05-24T18:04","ALCIDAE ","Atlantic Puffin","北极海鹦","Fratercula arctica",p_id("1505puffin",[15,16]),["meeeri","5/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","ALCIDAE ","Horned Puffin","角海鹦","Fratercula corniculata",["1505puffin/"],["meeeri","5/2015"]);
  birds[j++] = new myBird("15-07-10T09:58","ALCIDAE ","Tufted Puffin","簇羽海鹦","Fratercula cirrhata",[p_id("1507birdingwest",26)],["arb","7/2015",gmap("Cannon Beach",45.88457,-123.96488)+", Oregon, USA","美国俄勒冈州卡农海滩"]);
//birds[j++] = new myBird("21-00-00T00:00","RHYNOCHE","Kagu","鹭鹤","Rhynochetos jubatus",[m_id("")],["mdbhrp","9/2015"],"kagu1");
  birds[j++] = new myBird("18-12-05T10:33","EURYPYGI","Sunbittern","日鳽","Eurypyga helias",[p_id("1812crbirding",62)],["crarol","12/2018"],"sunbit1");
//birds[j++] = new myBird("21-00-00T00:00","PHAETHON","White-tailed Tropicbird","白尾鹲","Phaethon lepturus",[m_id("")],["mdbhrp","9/2015"],"whttro");
  birds[j++] = new myBird("16-03-26T13:48","GAVIIDAE","Red-throated Loon","红喉潜鸟","Gavia stellata",m_id(sas(["20160326","20210206"],"_025_RTLoon")),["ncoutb","3/2016","Winter plumage",""," at Jennette's Pier","珍妮特钓鱼码头","vavava","2/2021","Winter plumage, "+gmap("Bethel Beach Natural Area Preserve",37.40967,-76.24984)+", Mathews County","","","马修斯郡伯特利海滩自然保护区"]);
  birds[j++] = new myBird("21-05-26T12:15","GAVIIDAE","Pacific Loon","太平洋潜鸟","Gavia pacifica",[m_id("20210526_084_PacificLoon")],["vavava","5/2021",gmap("Lake Holiday",39.3097,-78.3104)+", Frederick County","","","弗雷德里克郡假日湖"]);
  birds[j++] = new myBird("15-03-08T10:08","GAVIIDAE","Common Loon","普通潜鸟","Gavia immer",[p_id("1503barnegat",16),m_id("20151126_137_CommonLoon(WP)"),p_id("1503barnegat",15)],["njblsp","3/2015","mdocci","11/2015","Winter plumage",""," "+gmap("Inlet",38.32435,-75.08544),"海口","njblsp","3/2015","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","SPHENISC","King Penguin","王企鹅","Aptenodytes patagonicus",[m_id("")],["mdbhrp","9/2015"],"kinpen1");
//birds[j++] = new myBird("21-00-00T00:00","SPHENISC","Emperor Penguin","帝企鹅","Aptenodytes forsteri",[m_id("")],["mdbhrp","9/2015"],"emppen1");
//birds[j++] = new myBird("21-00-00T00:00","SPHENISC","Gentoo Penguin","巴布亚企鹅","Pygoscelis papua",[m_id("")],["mdbhrp","9/2015"],"genpen1");
//birds[j++] = new myBird("21-00-00T00:00","SPHENISC","African Penguin","非洲企鹅","Spheniscus demersus",[m_id("")],["mdbhrp","9/2015"],"jacpen1");
  birds[j++] = new myBird("16-06-18T09:35","OCEANITI","Wilson's Storm-Petrel","黄蹼洋海燕","Oceanites oceanicus",[m_id("20160618_076_Wilson'sStorm-Petrel"),p_id("2108racepoint",14)],["arb","6/2016",gmap("Cape May-Lewes Ferry",38.87721,-75.07007)+", Delaware/New Jersey, USA","美国特拉华州/新泽西州五月岬-刘易斯轮渡","marace","8/2021"],"wispet");
//birds[j++] = new myBird("21-00-00T00:00","DIOMEDEI","Laysan Albatross","黑背信天翁","Phoebastria immutabilis",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","HYDROBAT","European Storm-Petrel","暴风海燕","Hydrobates pelagicus",[m_id("")],["mdbhrp","9/2015"],"bripet","海燕科/2336774");
//birds[j++] = new myBird("21-00-00T00:00","HYDROBAT","Fork-tailed Storm-Petrel","灰蓝叉尾海燕","Hydrobates furcatus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PROCELLA","Northern Fulmar","暴风鹱","Fulmarus glacialis",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("21-08-11T09:00","PROCELLA","Cory's Shearwater","猛鹱","Calonectris borealis",p_id("2108racepoint",[11,12]),["marace","8/2021"],"corshe");
//birds[j++] = new myBird("21-00-00T00:00","PROCELLA","Sooty Shearwater","灰鹱","Ardenna grisea",[m_id("")],["marace","8/2021"],"sooshe");
  birds[j++] = new myBird("21-08-11T14:44","PROCELLA","Great Shearwater","大鹱","Ardenna gravis",p_id("2108racepoint",[7,8]),["marace","8/2021"],"greshe");
  birds[j++] = new myBird("21-08-12T07:37","PROCELLA","Manx Shearwater","普通剪水鹱","Puffinus puffinus",[p_id("2108racepoint",13)],["marace","8/2021"],"manshe","剪水鹱");
//birds[j++] = new myBird("21-00-00T00:00","PROCELLA","Common Diving Petrel","鹈燕","Pelecanoides urinatrix",[m_id("")],["mdbhrp","9/2015"],"codpet1");
  birds[j++] = new myBird("05-12-25T10:44","CICONIID","Wood Stork","黑头鹮鹳","Mycteria americana",[p_id("1112floridabirding",17)],["flevnp","12/2011"]);
  birds[j++] = new myBird("15-01-08T08:58","FREGATID","Magnificent Frigatebird","华丽军舰鸟","Fregata magnificens",p_id("1501prbirding",[40,39]),["prsanj","1/2015","Male","prsanj","1/2015","Female"]);
  birds[j++] = new myBird("15-11-14T15:06","SULIDAE ","Northern Gannet","北鲣鸟","Morus bassanus",m_id(sas("20151114_12",["4","3"],"_NorthernGannet")),["mdocci","11/2015","",""," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("15-09-20T11:48","SULIDAE ","Brown Booby","褐鲣鸟","Sula leucogaster",m_id(sas("20150920_10",["0","1"],"_BrownBooby")),["mdmdmd","9/2015",(t1=gmap("Baltimore Harbor",39.27302,-76.58562)),"","","巴尔的摩港","mdmdmd","9/2015","Adult left, immature right, "+t1,"左成年，右未成年","","巴尔的摩港"]);
  birds[j++] = new myBird("05-12-24T15:15","ANHINGID","Anhinga","美洲蛇鹈","Anhinga anhinga",p_id("0512everglades",[4,33]),["flevnp","12/2005","Male, breeding plumage","flevnp","12/2005","Female"]);
  birds[j++] = new myBird("15-07-11T20:45","PHALACRO","Brandt's Cormorant","加州鸬鹚","Urile penicillatus",[p_id("1507birdingwest",36)],["cambsp","7/2015"]);
  birds[j++] = new myBird("15-07-09T12:14","PHALACRO","Pelagic Cormorant","海鸬鹚","Urile pelagicus",[p_id("1507birdingwest",19)],["wacape","7/2015"]);
  birds[j++] = new myBird("15-10-31T14:10","PHALACRO","Great Cormorant","普通鸬鹚","Phalacrocorax carbo",[p_id("1601china",61),m_id("20151031_120_GreatCormorant(I)")],["cnxmjm","1/2016","mdocci","10/2015","Immature",""," "+gmap("Inlet",38.32435,-75.08544),"海口"]);
  birds[j++] = new myBird("20-01-23T12:15","PHALACRO","Neotropic Cormorant","美洲鸬鹚","Nannopterum brasilianum",p_id("2001txbirding",[12,13]),["txanwr","1/2020"]);
  birds[j++] = new myBird("05-12-24T14:58","PHALACRO","Double-crested Cormorant","角鸬鹚","Nannopterum auritum",[p_id("1112floridabirding",19),p_id("1312savannahbirding",12)],["flevnp","12/2011","scsnwr","12/2013"]);
  birds[j++] = new myBird("05-12-25T10:42","THRESKIO","White Ibis","美洲白鹮","Eudocimus albus",[p_id("0512biscayne",2),p_id("1112floridabirding",15)],["arb","12/2005",npsurl("bisc","Biscayne National Park")+", Florida, USA","美国佛罗里达州"+baikeurl("比斯坎湾国家公园",true),"flevnp","12/2011"]);
//birds[j++] = new myBird("21-00-00T00:00","THRESKIO","Scarlet Ibis","美洲红鹮","Eudocimus ruber",["0504zoo/0504zoo__15","0504zoo/0504zoo__22"],["natzo","4/2005","Adult","natzo","4/2005","Immature"],"scaibi");
  birds[j++] = new myBird("05-12-25T10:42","THRESKIO","Glossy Ibis","彩鹮","Plegadis falcinellus",[p_id("0512merritt",9)],["flmnwr","12/2005"]);
  birds[j++] = new myBird("20-01-25T07:48","THRESKIO","White-faced Ibis","白脸彩鹮","Plegadis chihi",[p_id("2001txbirding",32)],["txsnwr","1/2020","Nonbreeding plumage"]);
  birds[j++] = new myBird("05-12-28T08:55","THRESKIO","Roseate Spoonbill","粉红琵鹭","Platalea ajaja",[p_id("0512merritt",5),p_id("1606florida",28)],["flmnwr","12/2005","scbwma","6/2016"]);
  birds[j++] = new myBird("15-04-26T14:02","ARDEIDAE","American Bittern","美洲麻鳽","Botaurus lentiginosus",[m_id("20150426_064_AmericanBittern"),p_id("1609vtcanbirding",18),p_id("1609vtcanbirding",19)],["mdmdmd","4/2015",gmap("North Point State Park",39.221,-76.42245),"","","北点州立公园","cactnw","9/2016","cactnw","9/2016"]);
  birds[j++] = new myBird("20-07-07T11:10","ARDEIDAE","Least Bittern","姬苇鳽","Ixobrychus exilis",[m_id("20210427_053_LeastBittern")],["papapa","4/2021","Female, "+gmap("Lake Redman",39.88095,-76.68707)+", York County","","","约克郡雷德曼湖"]);
  birds[j++] = new myBird("06-05-06T17:42","ARDEIDAE","Black-crowned Night-Heron","夜鹭","Nycticorax nycticorax",m_id(["20160625_081_Black-crownedNight-Heron","20170827_096_Black-cronwedNight-Heron(I)"]),["nyjbwr","6/2016","mdcorl","8/2017","Juvenile"]);
  birds[j++] = new myBird("06-05-06T17:25","ARDEIDAE","Yellow-crowned Night-Heron","黄冠夜鹭","Nyctanassa violacea",["2006cobirding/Yellow-crownedNight-Heron_20060506_005",p_id("1509charleston",21),p_id("1606florida",14)],["mdcopl","5/2006","scpitt","9/2015","flbppm","6/2016","Immature"]);
  birds[j++] = new myBird("05-12-25T15:48","ARDEIDAE","Green Heron","美洲绿鹭","Butorides virescens",[m_id("20200616_040_GreenHeron"),p_id("1412mckee-beshers",4),m_id("20200617_048_GreenHeron")],["mdmwma","6/2020","mdmwma","8/2014","mdmwma","6/2020"]);
//birds[j++] = new myBird("21-00-00T00:00","ARDEIDAE","Striated Heron","绿鹭","Butorides striata",[p_id("1601china",63)],["cnxmjm","1/2016"],"strher");
  birds[j++] = new myBird("16-01-13T16:26","ARDEIDAE","Chinese Pond Heron","池鹭","Ardeola bacchus",[p_id("1601china",63)],["cnxmjm","1/2016","Winter plumage"],"chpher1");
  birds[j++] = new myBird("15-01-02T10:21","ARDEIDAE","Cattle Egret","牛背鹭","Bubulcus ibis",[p_id("1501prbirding",9),p_id("1812crbirding",61)],["arb","1/2015",gmap("Rincón",18.34083,-67.25537)+", Puerto Rico, USA","美国波多黎各林孔市","crarol","12/2018"]);
  birds[j++] = new myBird("16-01-13T15:31","ARDEIDAE","Grey Heron","苍鹭","Ardea cinerea",[p_id("1601china",57)],["cnxmjm","1/2016"],"graher1");
  birds[j++] = new myBird("05-11-26T14:09","ARDEIDAE","Great Blue Heron","大蓝鹭","Ardea herodias",[m_id("20160731_089_GreatBlueHeron"),p_id("0511assateague",26)],["vahump","7/2016","vacnwr","11/2005"]);
  birds[j++] = new myBird("05-10-30T09:26","ARDEIDAE","Great Egret","大白鹭","Ardea alba",[p_id("0511assateague",27),p_id("1111chincoteague",12),p_id("1812crbirding",12)],["vacnwr","11/2005","vacnwr","11/2011","crsanj","12/2018",gmap("La Sabana Park",9.93542,-84.10246),"","","萨瓦纳公园"]);
//birds[j++] = new myBird("21-00-00T00:00","ARDEIDAE","Reddish Egret","棕颈鹭","Egretta rufescens",[p_id("2001txbirding",8)],["txanwr","1/2020"]);
  birds[j++] = new myBird("05-12-25T09:59","ARDEIDAE","Tricolored Heron","三色鹭","Egretta tricolor",[p_id("1112floridabirding",18),p_id("0512everglades",20)],["flevnp","12/2011","flevnp","12/2005"]);
  birds[j++] = new myBird("05-12-25T16:18","ARDEIDAE","Little Blue Heron","小蓝鹭","Egretta caerulea",[p_id("1112floridabirding",14),p_id("1312savannahbirding",4),p_id("1812crbirding",63)],["flevnp","12/2011","scsnwr","12/2013","Juvenile","crarol","12/2018","Immature"]);
  birds[j++] = new myBird("05-12-28T09:36","ARDEIDAE","Snowy Egret","雪鹭","Egretta thula",[p_id("1112floridabirding",20)],["flevnp","12/2011"]);
  birds[j++] = new myBird("16-01-07T14:51","ARDEIDAE","Little Egret","小白鹭","Egretta garzetta",[p_id("1601china",37)],["arb","1/2016","The "+gmap("Bund",31.2425,121.49082)+", Shanghai, China","中国上海外滩"],"litegr");
//birds[j++] = new myBird("21-00-00T00:00","SCOPIDAE","Hamerkop","锤头鹳","Scopus umbretta",[m_id("")],["mdbhrp","9/2015"],"hamerk1");
//birds[j++] = new myBird("21-00-00T00:00","BALAENIC","Shoebill","鲸头鹳","Balaeniceps rex",[m_id("")],["mdbhrp","9/2015"],"shoebi1");
  birds[j++] = new myBird("05-12-28T13:35","PELECANI","American White Pelican","美洲白鹈鹕","Pelecanus erythrorhynchos",p_id("2001txbirding",[4,9]),["txanwr","1/2020"]);
  birds[j++] = new myBird("05-12-27T07:34","PELECANI","Brown Pelican","褐鹈鹕","Pelecanus occidentalis",p_id("0512keys",[18,13]),["arb","12/2005",(t1=gmap("Key West",24.54706, -81.78842)+", Florida, USA"),"美国佛罗里达州西礁岛","arb","12/2005","Immature, "+t1,"未成年，美国佛罗里达州西礁岛"]);
//birds[j++] = new myBird("21-00-00T00:00","OPISTHOC","Hoatzin","麝雉","Opisthocomus hoazin",[m_id("")],["mdbhrp","9/2015"],"hoatzi1");
//birds[j++] = new myBird("21-00-00T00:00","CATHARTI","California Condor","加州神鹫","Gymnogyps californianus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","CATHARTI","King Vulture","王鹫","Sarcoramphus papa",["0504zoo/0504zoo__16"],["natzo","4/2005"],"kinvul1");
  birds[j++] = new myBird("05-12-25T11:18","CATHARTI","Black Vulture","黑美洲鹫","Coragyps atratus",["2006cobirding/BlackVulture_20060315_008","2006cobirding/BlackVulture_20060326_010"],["mdcorl","3/2006"]);
  birds[j++] = new myBird("05-12-25T11:03","CATHARTI","Turkey Vulture","红头美洲鹫","Cathartes aura",["2006cobirding/TurkeyVulture_20060315_029","2006cobirding/TurkeyVulture_20060315_027"],["mdcorl","3/2006"]);
//birds[j++] = new myBird("21-00-00T00:00","SAGITTAR","Secretarybird","蛇鹫","Sagittarius serpentarius",[m_id("")],["mdbhrp","9/2015"],"secret2");
  birds[j++] = new myBird("07-08-11T08:00","PANDIONI","Osprey","鹗","Pandion haliaetus",[p_id("1112floridabirding",11),p_id("1408annapolisbirding",1),m_id("20200707_056_Osprey")],["flevnp","12/2011","mdmdmd","8/2014",gmap("Greenbury Point",38.9834,-76.45125)+", Annapolis","","","安纳波利斯格林伯瑞角","mdbnwr","7/2020","Nest"],"鱼鹰/7753425");
//birds[j++] = new myBird("21-00-00T00:00","ACCIPITR","White-tailed Kite","白尾鸢","Elanus leucurus",[m_id("")],["flevnp","9/2015"]);
  birds[j++] = new myBird("21-08-03T09:54","ACCIPITR","Swallow-tailed Kite","燕尾鸢","Elanoides forficatus",m_id(sas("20210803_",["099","101"],"_Swallow-tailedKite")),["mdmdmd","8/2021",(tmp1=gmap("Tavakoli Farm",38.93002,-76.35289)+", Queen Anne's County"),"","",(tmp2="安妮女王郡塔瓦科利农场"),"mdmdmd","8/2021","Chased by "+b_link("Turkey Vulture","s")+", "+tmp1,"被一群"+b_link("红头美洲鹫")+"追赶","",tmp2]);
//birds[j++] = new myBird("21-00-00T00:00","ACCIPITR","Golden Eagle","金雕","Aquila chrysaetos",[m_id("")],["mdmdmd","3/2021","Immature, Greenbrier Road, Cambridge","","","剑桥市格林布里尔路"],"金雕/49924");
  birds[j++] = new myBird("16-01-15T13:39","ACCIPITR","Eurasian Sparrowhawk","雀鹰","Accipiter nisus",[p_id("1601china",67)],["cnbjsp","1/2016"],"eurspa1");
  birds[j++] = new myBird("11-10-08T15:34","ACCIPITR","Sharp-shinned Hawk","纹腹鹰","Accipiter striatus",m_id(sas(["20150215_013","20150215_014","20161106_117"],"_Sharp-shinnedHawk",["","","(I)"])),["mdcrvp","2/2015","mdcrvp","2/2015","mdcrvp","11/2016","Juvenile"]);
  birds[j++] = new myBird("14-12-28T11:16","ACCIPITR","Cooper's Hawk","库氏鹰","Accipiter cooperii",[m_id("20141228_006_CooperHawk"),m_id("20141228_007_CooperHawk"),p_id("1507birdingwest",3)],["mdmdmd","12/2014","Germantown","","","德国镇","mdmdmd","12/2014","Germantown","","","德国镇","nvdnwr","7/2015","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","ACCIPITR","Northern Goshawk","苍鹰","Accipiter gentilis",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","ACCIPITR","Hen Harrier","白尾鹞","Circus cyaneus",[p_id("1612savannah",4),m_id("20161204_132_NorthernHarrier(I)")],["scsnwr","12/2016","Female","nyjbsp","12/2016","Immature"]);
  birds[j++] = new myBird("13-12-29T15:19","ACCIPITR","Northern Harrier","北鹞","Circus hudsonius",[m_id("20210313_028_NHarrier"),p_id("1612savannah",4),m_id("20161204_132_NHarrier")],["mdmdmd","3/2021","Male, "+gmap("Bucktown Road",38.46731,-76.0276)+", Cambridge","","","剑桥市巴克敦路","scsnwr","12/2016","Female","nyjbsp","12/2016","Juvenile"],"白尾鹞");
  birds[j++] = new myBird("05-10-30T09:34","ACCIPITR","Bald Eagle","白头海雕","Haliaeetus leucocephalus",m_id(["20170225_025_BaldEagle","20170108_005_BaldEagle(I)","20210330_037_BaldEagle"]),["mdswhf","2/2017","mdmapp","1/2017","Immature","mdbnwr","3/2021","Nest"]);
  birds[j++] = new myBird("15-09-06T11:23","ACCIPITR","Mississippi Kite","密西西比灰鸢","Ictinia mississippiensis",[m_id("20210613_089_MississippiKite"),p_id("1509charleston",15),m_id("20210624_091_MississippiKite")],["mdmdmd","6/2021",gmap("Beall Elementary School",39.0882,-77.16267)+", Rockville","","","罗克维尔市比沃小学","arb","9/2015","Juvenile, "+gmap("Patriots Point",32.78888,-79.90322)+", Charleston, South Carolina, USA","未成年，美国南卡罗来纳州查尔斯顿爱国者海角","mdmdmd","6/2021","Nest, "+gmap("Beall Elementary School",39.0882,-77.16267)+", Rockville","","","罗克维尔市比沃小学"]);
  birds[j++] = new myBird("11-12-27T17:06","ACCIPITR","Snail Kite","蜗鸢","Rostrhamus sociabilis",[p_id("1112floridabirding",4)],["flevnp","12/2011","Female"]);
  birds[j++] = new myBird("20-01-25T07:26","ACCIPITR","Harris's Hawk","栗翅鹰","Parabuteo unicinctus",p_id("2001txbirding",[33,27]),["txsnwr","1/2020","txsnwr","1/2020","Juvenile"]);
  birds[j++] = new myBird("20-01-24T09:40","ACCIPITR","Gray Hawk","灰鵟","Buteo plagiatus",[p_id("2001txbirding",22)],["txsnwr","1/2020","Juvenile"]);
  birds[j++] = new myBird("06-03-04T16:05","ACCIPITR","Red-shouldered Hawk","赤肩鵟","Buteo lineatus",[p_id("2009cobirding",9),m_id("20190830_008_Red-shoulderedHawk"),"2007cobirding/20070204_022_Red-shoulderedHawk(J)"],["mdcovl","3/2009","flapop","8/2019","mdcocn","2/2007","Juvenile"]);
  birds[j++] = new myBird("11-12-28T15:32","ACCIPITR","Broad-winged Hawk","巨翅鵟","Buteo platypterus",[p_id("1709algonquin",15),p_id("2020lbrp",12)],["caalgp","9/2017","mdlbrp","8/2020"]);
//birds[j++] = new myBird("21-00-00T00:00","ACCIPITR","Swainson's Hawk","斯氏鵟","Buteo swainsoni",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("06-03-05T14:30","ACCIPITR","Red-tailed Hawk","红尾鵟","Buteo jamaicensis",[m_id("20190109_002_Red-tailedHawk"),p_id("1412mckee-beshers",33)],["mdmdmd","1/2019","St Mary's County","","","圣玛丽郡","mdmwma","11/2014","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","ACCIPITR","Ferruginous Hawk","王鵟","Buteo regalis",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("21-01-13T11:15","ACCIPITR","Rough-legged Hawk","毛脚鵟","Buteo lagopus",m_id(["20210113_008_Rough-leggedHawk","20210113_009_Rough-leggedHawk"]),["vavava","1/2021","Light morph, "+gmap("Prince William County Landfill",38.63759,-77.42086),"浅色型","","威廉王子郡垃圾填埋场"]);
  birds[j++] = new myBird("16-06-25T11:19","TYTONIDA","Barn Owl","仓鸮","Tyto furcata",[m_id("20160625_083_BarnOwl")],["nyjbwr","6/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","STRIGIDA","Northern Saw-whet Owl","棕榈鬼鸮","Aegolius acadicus",[m_id("")],["arb","12/2020"]);
  birds[j++] = new myBird("16-06-10T08:23","STRIGIDA","Burrowing Owl","穴小鸮","Athene cunicularia",p_id("1606florida",[8,7]),["arb","6/2016",gmap("Brian Piccolo Park",26.03302,-80.27253)+", Fort Lauderdale, Florida, USA","美国佛罗里达州劳德代尔堡布莱恩皮克罗公园"]);
  birds[j++] = new myBird("21-01-06T11:29","STRIGIDA","Long-eared Owl","长耳鸮","Asio otus",[m_id("20210115_012_Long-earedOwl")],["vavava","1/2021",gmap("State Arboretum of Virginia",39.06392,-78.06551),"","","州立植物园"]);
  birds[j++] = new myBird("17-01-01T17:19","STRIGIDA","Short-eared Owl","短耳鸮","Asio flammeus",m_id(["20210228_026_Short-earedOwl"]),["mdmdmd","2/2021",gmap("Izaak Walton Way",39.09351,-77.42656)+", Montgomery County","","","蒙哥马利郡艾萨克沃尔顿路"]);
  birds[j++] = new myBird("17-02-05T10:12","STRIGIDA","Snowy Owl","雪鸮","Bubo scandiacus",[m_id("20170205_018_SnowyOwl")],["papapa","2/2017","Female, "+gmap("Davis Road",41.81994,-76.17107)+", Bradford County","","","布拉德福德郡戴维斯路"]);
  birds[j++] = new myBird("16-03-26T11:53","STRIGIDA","Great Horned Owl","美洲雕鸮","Bubo virginianus",[m_id("20160326_024_GreatHornedOwl")],["ncoutb","3/2016","",""," at Oregon Inlet Marina","俄勒冈入海口船坞"]);
  birds[j++] = new myBird("20-03-26T10:31","STRIGIDA","Eastern Screech-Owl","东美角鸮","Megascops asio",[m_id("20200326_001_EasternScreech-Owl")],["mdmdmd","3/2020","Red morph, "+gmap("Bruehl Road",39.59639,-76.75014)+", Baltimore County","红色形","","巴尔的摩郡布鲁尔路"]);
  birds[j++] = new myBird("06-05-07T18:43","STRIGIDA","Barred Owl","横斑林鸮","Strix varia",m_id(["20150425_058_BarredOwl","20160409_033_BarredOwl","20210512_071_BarredOwl"]),["mdbmnt","4/2015","mdmdmd","4/2016",gmap("Agricultural History Farm Park",39.165,-77.1347),"","","农史农场公园","vahump","5/2021"]);
//birds[j++] = new myBird("21-00-00T00:00","COLIIDAE","Speckled Mousebird","斑鼠鸟","Colius striatus",[m_id("")],["mdbhrp","9/2015"],"spemou2");
//birds[j++] = new myBird("21-00-00T00:00","LEPTOSOM","Cuckoo Roller","鹃鴗","Leptosomus discolor",[m_id("")],["mdbhrp","9/2015"],"cuckoo1");
  birds[j++] = new myBird("18-12-06T12:40","TROGONID","Gartered Trogon","斑尾美洲咬鹃","Trogon caligatus",[p_id("1812crbirding",79)],["crarol","12/2018","Male"],"gartro1",9816);
//birds[j++] = new myBird("21-00-00T00:00","TROGONID","Elegant Trogon","铜尾美洲咬鹃","Trogon elegans",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("18-12-07T09:28","TROGONID","Collared Trogon","橙腹美洲咬鹃","Trogon collaris",[p_id("1812crbirding",91)],["crarol","12/2018","Male"],"coltro1");
//birds[j++] = new myBird("21-00-00T00:00","UPUPIDAE","Eurasian Hoopoe","戴胜","Upupa epops",[m_id("")],["mdbhrp","9/2015"],"hoopoe","戴胜鸟");
//birds[j++] = new myBird("21-00-00T00:00","PHOENICU","Abyssinian Scimitarbill","小弯嘴林戴胜","Rhinopomastus minor",[m_id("")],["mdbhrp","9/2015"],"absbil1");
//birds[j++] = new myBird("21-00-00T00:00","BUCORVID","Southern Ground Hornbill","红脸地犀鸟","Bucorvus leadbeateri",[m_id("")],["mdbhrp","9/2015"],"soghor1");
//birds[j++] = new myBird("21-00-00T00:00","BUCEROTI","African Grey Hornbill","黑嘴弯嘴犀鸟","Lophoceros nasutus",[m_id("")],["mdbhrp","9/2015"],"afghor1");
//birds[j++] = new myBird("21-00-00T00:00","CORACIID","Indian Roller","棕胸佛法僧","Coracias benghalensis",[m_id("")],["mdbhrp","9/2015"],"indrol1");
//birds[j++] = new myBird("21-00-00T00:00","BRACHYPT","Pitta-like Ground Roller","地三宝鸟","Atelornis pittoides",[m_id("")],["mdbhrp","9/2015"],"plgrol1");
  birds[j++] = new myBird("16-01-05T10:21","ALCEDINI","Common Kingfisher","普通翠鸟","Alcedo atthis",p_id("1601china",[23,30]),["cnjsxp","1/2016","Male","cnjsxp","1/2016","Female",],"comkin1");
  birds[j++] = new myBird("20-01-25T08:31","ALCEDINI","Green Kingfisher","绿鱼狗","Chloroceryle americana",[p_id("2001txbirding",37)],["txsnwr","1/2020","Male"],"grnkin");
  birds[j++] = new myBird("20-01-24T09:13","ALCEDINI","Ringed Kingfisher","棕腹鱼狗","Megaceryle torquata",[p_id("2001txbirding",17)],["txsnwr","1/2020","Female"],"rinkin1");
  birds[j++] = new myBird("06-04-09T09:34","ALCEDINI","Belted Kingfisher","白腹鱼狗","Megaceryle alcyon",[p_id("1512bhill",37),m_id("20160806_090_BeltedKingfisher(F)")],["mdbhrp","8/2015","Male","mdmdmd","8/2016","Female, "+gmap("Lilypons Water Garden",39.29334,-77.43421),"","","莉丽庞斯水上花园"]);
  birds[j++] = new myBird("15-01-05T06:39","TODIDAE ","Puerto Rican Tody","波多黎各短尾鴗","Todus mexicanus",p_id("1501prbirding",[23,29]),["prceci","1/2015","Male","prceci","1/2015","Female"],"purtod1","短尾鴗科");
//birds[j++] = new myBird("21-00-00T00:00","MOMOTIDA","Tody Motmot","短尾翠鴗","Hylomanes momotula",[m_id("")],["mdbhrp","9/2015"],"todmot1");
//birds[j++] = new myBird("21-00-00T00:00","MEROPIDA","Blue-throated Bee-eater","蓝喉蜂虎","Merops viridis",[m_id("")],["mdbhrp","9/2015"],"btbeat2");
//birds[j++] = new myBird("21-00-00T00:00","GALBULID","Rufous-tailed Jacamar","棕尾鹟鴷","Galbula ruficauda",[m_id("")],["mdbhrp","9/2015"],"rutjac1");
//birds[j++] = new myBird("21-00-00T00:00","BUCCONID","White-necked Puffbird","白颈蓬头鴷","Notharchus hyperrhynchus",[m_id("")],["mdbhrp","9/2015"],"whnpuf2",10252);
//birds[j++] = new myBird("21-00-00T00:00","CAPITONI","Scarlet-crowned Barbet","红顶须鴷","Capito aurovirens",[m_id("")],["mdbhrp","9/2015"],"sccbar1",10210);
//birds[j++] = new myBird("21-00-00T00:00","SEMNORNI","Toucan Barbet","巨嘴拟鴷","Semnornis ramphastinus",[m_id("")],["mdbhrp","9/2015"],"toubar1");
  birds[j++] = new myBird("18-12-05T09:52","RAMPHAST","Collared Aracari","领簇舌巨嘴鸟","Pteroglossus torquatus",p_id("1812crbirding",[58,59,71]),["crarol","12/2018"],"colara1");
  birds[j++] = new myBird("18-12-06T17:00","RAMPHAST","Yellow-throated Toucan","黑嘴巨嘴鸟","Ramphastos ambiguus",[p_id("1812crbirding",84)],["crarol","12/2018","Chestnut-mandibled","栗嘴亚种"],"bkmtou1");
//birds[j++] = new myBird("21-00-00T00:00","MEGALAIM","Great Barbet","大拟啄木鸟","Psilopogon virens",[m_id("")],["mdbhrp","9/2015"],"grebar1");
//birds[j++] = new myBird("21-00-00T00:00","LYBIIDAE","Grey-throated Barbet","灰喉拟鴷","Gymnobucco bonapartei",[m_id("")],["mdbhrp","9/2015"],"gytbar1",10120);
//birds[j++] = new myBird("21-00-00T00:00","INDICATO","Yellow-rumped Honeyguide","黄腰响蜜鴷","Indicator xanthonotus",[m_id("")],["mdbhrp","9/2015"],"yerhon1");
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Lewis's Woodpecker","刘氏啄木鸟","Melanerpes lewis",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("15-01-01T14:01","PICIDAE ","Puerto Rican Woodpecker","波多黎各啄木鸟","Melanerpes portoricensis",p_id("1501prbirding",[1,10]),["arb","1/2015","Male, "+gmap("Bayamón",18.4248,-66.15996)+", Puerto Rico, USA","雄性，美国波多黎各巴亚蒙市","arb","1/2015","Female, "+gmap("Rincón",18.34083,-67.25537)+", Puerto Rico, USA","雌性，美国波多黎各林孔市"],"purwoo1");
  birds[j++] = new myBird("14-06-01T11:12","PICIDAE ","Red-headed Woodpecker","红头啄木鸟","Melanerpes erythrocephalus",m_id(["20140531_002_Red-headedWoodpecker","20180603_001_Red-headedWoodpecker"]),["vavava","5/2014",gmap("Piney Grove Preserve",36.9801,-77.0505)+", Sussex County","","","萨塞克斯郡松林保护区","sclobp","6/2018"]);
  birds[j++] = new myBird("15-07-12T09:19","PICIDAE ","Acorn Woodpecker","橡树啄木鸟","Melanerpes formicivorus",[p_id("1507birdingwest",37)],["cabake","7/2015","Male, "+gmap("Yokuts Park",35.37584,-119.04749),"","","约库特公园"]);
  birds[j++] = new myBird("18-12-05T14:12","PICIDAE ","Black-cheeked Woodpecker","黑颊啄木鸟","Melanerpes pucherani",p_id("1812crbirding",[67,66]),["crarol","12/2018","Male","crarol","12/2018","Female"],"blcwoo1");
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Gila Woodpecker","吉拉啄木鸟","Melanerpes uropygialis",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("18-12-08T08:10","PICIDAE ","Hoffmann's Woodpecker","霍氏啄木鸟","Melanerpes hoffmannii",p_id("1812crbirding",[93,94]),["crsanj","12/2018","Male, "+gmap("Park of Social Guarantees",9.93167,-84.07648),"","","社会保障公园","crsanj","12/2018","Female, "+gmap("Morazán Park",9.93547,-84.07544),"","","莫拉桑公园"],"hofwoo1");
  birds[j++] = new myBird("13-12-25T15:02","PICIDAE ","Golden-fronted Woodpecker","金额啄木鸟","Melanerpes aurifrons",p_id("2001txbirding",[39,25]),["txsnwr","1/2020","Male","txsnwr","1/2020","Female"]);
  birds[j++] = new myBird("06-03-05T15:33","PICIDAE ","Red-bellied Woodpecker","红腹啄木鸟","Melanerpes carolinus",[p_id("1512bhill",22),p_id("1606florida",19)],["mdbhrp","2/2015","Male","arb","6/2016","Female, "+gmap("Matheson Hammock Park",25.68121,-80.27201)+", Miami, Florida, USA","雌性，美国佛罗里达州迈阿密马西森硬木公园"]);
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Williamson's Sapsucker","威氏吸汁啄木鸟","Sphyrapicus thyroideus",[p_id("1601china",)],["cnbjjp","1/2016"]);
  birds[j++] = new myBird("06-02-19T11:51","PICIDAE ","Yellow-bellied Sapsucker","黄腹吸汁啄木鸟","Sphyrapicus varius",m_id(sas(["20170107","20201231","20151220"],"_YS")),["mdmdmd","1/2017","Male, "+gmap("Havre de Grace",39.53889,-76.0904),"","","哈佛德格雷斯市","vavava","12/2020","Female, "+gmap("Sky Meadows State Park",38.98744,-77.94284),"","","天空草地州立公园","mdloch","12/2015","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Red-naped Sapsucker","红颈吸汁啄木鸟","Sphyrapicus nuchalis",[p_id("1601china",)],["cnbjjp","1/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Red-breasted Sapsucker","红胸吸汁啄木鸟","Sphyrapicus ruber",[p_id("1601china",)],["cnbjjp","1/2016"]);
  birds[j++] = new myBird("13-07-14T18:56","PICIDAE ","American Three-toed Woodpecker","美国三趾啄木鸟","Picoides dorsalis",[p_id("1307alaskabirding",4)],["akknpp","7/2013","Female"]);
  birds[j++] = new myBird("16-09-15T08:06","PICIDAE ","Black-backed Woodpecker","黑背啄木鸟","Picoides arcticus",p_id("1609vtcanbirding",[4,5]),["vtwwma","9/2016","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Nuttall's Woodpecker","加州啄木鸟","Dryobates nuttallii",[p_id("1601china",)],["cnbjjp","1/2016"],10038);
  birds[j++] = new myBird("13-12-25T14:40","PICIDAE ","Ladder-backed Woodpecker","纹背啄木鸟","Dryobates scalaris",[p_id("1312bigbendbirding",1),p_id("2001txbirding",21)],["txbbnp","12/2013","Male","txsnwr","1/2020","Female"]);
  birds[j++] = new myBird("05-11-26T09:17","PICIDAE ","Downy Woodpecker","绒啄木鸟","Dryobates pubescens",m_id(["20160130_007_DownyWoodpecker(M)","20170827_095_DownyWoodpecker(F)"]),["mdbhrp","1/2016","Male","mdcorl","8/2017","Female"]);
  birds[j++] = new myBird("15-09-05T11:04","PICIDAE ","Red-cockaded Woodpecker","红顶啄木鸟","Leuconotopicus borealis",p_id("1509charleston",[2,3]),["arb","9/2015",npsurl("Carolina_Sandhills",true,"Carolina Sandhills National Wildlife Refuge")+", South Carolina, USA","美国南卡罗来纳州"+npsurl("Carolina_Sandhills",true,"卡罗来纳沙丘国家野生动物保护区")]);
  birds[j++] = new myBird("18-12-04T06:46","PICIDAE ","Smoky-brown Woodpecker","褐啄木鸟","Leuconotopicus fumigatus",[p_id("1812crbirding",24)],["crarol","12/2018","Male"],"smbwoo1");
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Arizona Woodpecker","亚利桑那啄木鸟","Leuconotopicus arizonae",[p_id("1601china",)],["cnbjjp","1/2016"],10034);
  birds[j++] = new myBird("06-08-12T10:22","PICIDAE ","Hairy Woodpecker","长嘴啄木鸟","Leuconotopicus villosus",[m_id("20210515_074_HairyWoodpecker"),m_id("20170506_048_HairyWoodpecker(F)")],["mdwhrp","5/2021","Male","nycenp","5/2017","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","White-headed Woodpecker","白头啄木鸟","Leuconotopicus albolarvatus",[p_id("1601china",)],["cnbjjp","1/2016"],10041);
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Great Spotted Woodpecker","大斑啄木鸟","Dendrocopos major",[p_id("1601china",)],["cnbjjp","1/2016"],"grswoo");
  birds[j++] = new myBird("08-12-13T15:36","PICIDAE ","Northern Flicker","北扑翅鴷","Colaptes auratus",m_id(["20171022_124_NorthernFlicker(M)","20160625_085_NorthernFlicker(F)"]),["mdbhrp","10/2017","Male, yellow-shafted","黄色雄性","nyjbwr","6/2016","Female, yellow-shafted","黄色雌性"]);
//birds[j++] = new myBird("21-00-00T00:00","PICIDAE ","Gilded Flicker","黄扑翅鴷","Colaptes chrysoides",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("05-12-28T10:22","PICIDAE ","Pileated Woodpecker","北美黑啄木鸟","Dryocopus pileatus",[p_id("2020lbrp",7),m_id("20161119_124_PileatedWoodpecker(F)")],["mdlbrp","5/2020","Male","mdbhrp","11/2016","Female"]);
  birds[j++] = new myBird("18-12-04T13:35","PICIDAE ","Pale-billed Woodpecker","淡嘴啄木鸟","Campephilus guatemalensis",[p_id("1812crbirding",44)],["crarol","12/2018","Female"],"pabwoo1");
//birds[j++] = new myBird("21-00-00T00:00","CARIAMID","Red-legged Seriema","红腿叫鹤","Cariama cristata",[m_id("")],["mdbhrp","9/2015"],"relser1");
  birds[j++] = new myBird("20-01-23T11:47","FALCONID","Crested Caracara","北美凤头卡拉鹰","Caracara plancus",p_id("2001txbirding",[10,11]),["txanwr","1/2020"]);
  birds[j++] = new myBird("18-12-05T13:19","FALCONID","Laughing Falcon","笑隼","Herpetotheres cachinnans",[p_id("1812crbirding",64)],["crarol","12/2018"],"laufal1");
  birds[j++] = new myBird("15-03-21T10:26","FALCONID","American Kestrel","美洲隼","Falco sparverius",m_id(["20150321_041_AmericanKestrel","20210320_031_AmericanKestrel"]),["mdftmh","3/2015","Male","arb","3/2021","Male, "+gmap("Hourglass Road",39.1495,-75.71401)+", Delaware, USA","雄性，美国特拉华州沙漏路"]);
  birds[j++] = new myBird("15-03-02T10:16","FALCONID","Merlin","灰背隼","Falco columbarius",[m_id("20161204_134_Merlin(M)"),m_id("20150302_029_Merlin(M)"),p_id("1609vtcanbirding",16)],["nyjbsp","12/2016","Male (Taiga)","雄性(泰加林种)","mdcovl","3/2015","cactnw","9/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","FALCONID","Gyrfalcon","矛隼","Falco rusticolus",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("15-06-07T11:55","FALCONID","Peregrine Falcon","游隼","Falco peregrinus",m_id(["20210314_029_PeregrineFalcon","20150607_076_PeregrineFalcon"]),["mdcocn","3/2021","Male",""," at Maryland Heights","马里兰高地一带","mdcocn","6/2015","Female",""," at Maryland Heights","马里兰高地一带"]);
//birds[j++] = new myBird("21-00-00T00:00","STRIGOPI","Kakapo","鸮鹦鹉","Strigops habroptila",[m_id("")],["mdbhrp","9/2015"],"kakapo2");
//birds[j++] = new myBird("21-00-00T00:00","CACATUID","Palm Cockatoo","棕榈凤头鹦鹉","Probosciger aterrimus",[m_id("")],["mdbhrp","9/2015"],"palcoc1");
  birds[j++] = new myBird("15-01-08T12:31","PSITTACI","Monk Parakeet","灰胸鹦哥","Myiopsitta monachus",[p_id("1501prbirding",47),p_id("1606florida",23)],["prsanj","1/2015","arb","6/2016",gmap("Lincoln Road Mall",25.79048,-80.13668)+", Miami, Florida, USA","美国佛罗里达州迈阿密林肯路购物中心"]);
  birds[j++] = new myBird("15-01-02T07:03","PSITTACI","White-winged Parakeet","淡黄翅鹦哥","Brotogeris versicolurus",[p_id("1501prbirding",3)],["arb","1/2015",gmap("Mayagüez",18.23614,-67.16159)+", Puerto Rico, USA","美国波多黎各马亚圭斯市"],"whwpar");
//birds[j++] = new myBird("21-00-00T00:00","PSITTACI","Yellow-chevroned Parakeet","黄翅斑鹦哥","Brotogeris chiriri",[m_id("")],["natzo","4/2005"],"yecpar");
  birds[j++] = new myBird("18-12-02T06:05","PSITTACI","Orange-chinned Parakeet","橙颏鹦哥","Brotogeris jugularis",[p_id("1812crbirding",2)],["crsanj","12/2018","Plaza Juan Mora Fernandez","","","胡安莫拉费尔南德斯广场"],"orcpar");
  birds[j++] = new myBird("18-12-04T08:09","PSITTACI","White-crowned Parrot","白额鹦鹉","Pionus senilis",[p_id("1812crbirding",30)],["crarol","12/2018"],"whcpar","白额鹦鹉");
//birds[j++] = new myBird("21-00-00T00:00","PSITTACI","White-fronted Amazon","白额亚马逊鹦鹉","Amazona albifrons",[m_id("")],["crsanj","12/2018",gmap("La Sabana Park",9.93542,-84.10246),"","","萨瓦纳公园"],"whfpar1");
  birds[j++] = new myBird("18-12-04T06:35","PSITTACI","Red-lored Amazon","红额亚马逊鹦鹉","Amazona autumnalis",[p_id("1812crbirding",21)],["crarol","12/2018"],"relpar");
//birds[j++] = new myBird("16-06-11T09:31","PSITTACI","Orange-winged Amazon","橙翅亚马逊鹦鹉","Amazona amazonica",[p_id("1606florida",20)],["flmahp","4/2005"],"orwpar");
//birds[j++] = new myBird("21-00-00T00:00","PSITTACI","Nanday Parakeet","南达锥尾鹦鹉","Aratinga nenday",[m_id("")],["natzo","4/2005"],"bkhpar");
//birds[j++] = new myBird("21-00-00T00:00","PSITTACI","Scarlet Macaw","绯红金刚鹦鹉","Ara macao",["0504zoo/0504zoo__23"],["natzo","4/2005"],"scamac1");
//birds[j++] = new myBird("16-06-12T08:14","PSITTACI","Blue-crowned Parakeet","蓝冠鹦哥","Thectocercus acuticaudatus",[p_id("1606florida",24)],["arb","6/2016",gmap("South Beach",25.78903,-80.12833)+", Miami, Florida, USA","美国佛罗里达州迈阿密南滩"],"bucpar");
//birds[j++] = new myBird("21-00-00T00:00","PSITTACI","Mitred Parakeet","米特雷锥尾鹦鹉","Psittacara mitratus",[m_id("")],["arb","6/2016",gmap("Lincoln Road Mall",25.79048,-80.13668)+", Miami, Florida, USA","美国佛罗里达州迈阿密林肯路购物中心"],"mitpar");
//birds[j++] = new myBird("16-06-12T07:14","PSITTACI","Red-masked Parakeet","红头鹦鹉","Psittacara erythrogenys",p_id("1606florida",[22,21]),["arb","6/2016",gmap("Lincoln Road Mall",25.79048,-80.13668)+", Miami, Florida, USA","美国佛罗里达州迈阿密林肯路购物中心"],"rempar");
  birds[j++] = new myBird("18-12-02T06:03","PSITTACI","Crimson-fronted Parakeet","绯额鹦哥","Psittacara finschi",[p_id("1812crbirding",1)],["crsanj","12/2018","Plaza Juan Mora Fernandez","","","胡安莫拉费尔南德斯广场"],"crfpar");
  birds[j++] = new myBird("15-07-12T11:15","PSITTACU","Rose-ringed Parakeet","红领绿鹦鹉","Psittacula krameri",p_id("1507birdingwest",[50,48]),["cabake","7/2015","Male, "+gmap("Beale Park",35.36253,-119.02511),"","","比尔公园","cabake","7/2015","Female, "+gmap("Beale Park",35.36253,-119.02511),"","","比尔公园"],"rorpar");
//birds[j++] = new myBird("21-00-00T00:00","ACANTHIS","Rifleman","刺鹩","Acanthisitta chloris",[m_id("")],["mdbhrp","9/2015"],"riflem1");
//birds[j++] = new myBird("21-00-00T00:00","SAPAYOID","Sapayoa","阔嘴霸鹟","Sapayoa aenigma",[m_id("")],["mdbhrp","9/2015"],"sapayo1");
//birds[j++] = new myBird("21-00-00T00:00","PHILEPIT","Velvet Asity","紫黑裸眉鸫","Philepitta castanea",[m_id("")],["mdbhrp","9/2015"],"velasi1");
//birds[j++] = new myBird("21-00-00T00:00","EURYLAIM","Long-tailed Broadbill","长尾阔嘴鸟","Psarisomus dalhousiae",[m_id("")],["mdbhrp","9/2015"],"lotbro1");
//birds[j++] = new myBird("21-00-00T00:00","CALYPTOM","Green Broadbill","绿阔嘴鸟","Calyptomena viridis",[m_id("")],["mdbhrp","9/2015"],"grebro1");
//birds[j++] = new myBird("21-00-00T00:00","PITTIDAE","Blue-rumped Pitta","蓝背八色鸫","Hydrornis soror",[m_id("")],["mdbhrp","9/2015"],"blrpit1");
  birds[j++] = new myBird("18-12-07T08:58","FURNARII","Olivaceous Woodcreeper","绿鴷雀","Sittasomus griseicapillus",[p_id("1812crbirding",88)],["crarol","12/2018"],"oliwoo1");
  birds[j++] = new myBird("18-12-06T09:38","FURNARII","Spotted Woodcreeper","点斑鴷雀","Xiphorhynchus erythropygius",[p_id("1812crbirding",78)],["crarol","12/2018"],"spowoo1");
  birds[j++] = new myBird("18-12-06T08:12","FURNARII","Streak-headed Woodcreeper","纹头鴷雀","Lepidocolaptes souleyetii",[p_id("1812crbirding",74)],["crarol","12/2018"],"sthwoo1");
  birds[j++] = new myBird("18-12-05T10:14","FURNARII","Plain Xenops","纯色翘嘴雀","Xenops minutus",[p_id("1812crbirding",60)],["crarol","12/2018"],"plaxen1");
  birds[j++] = new myBird("18-12-04T14:01","THAMNOPH","Ocellated Antbird","眼斑蚁鸟","Phaenostictus mcleannani",[p_id("1812crbirding",50)],["crarol","12/2018"],"oceant1");
  birds[j++] = new myBird("18-12-04T13:59","THAMNOPH","Bicolored Antbird","双色蚁鸟","Gymnopithys bicolor",[p_id("1812crbirding",48)],["crarol","12/2018"],"bicant2");
  birds[j++] = new myBird("18-12-04T13:58","THAMNOPH","Spotted Antbird","点斑蚁鸟","Hylophylax naevioides",p_id("1812crbirding",[46,45]),["crarol","12/2018","Male","crarol","12/2018","Female"],"spoant1");
//birds[j++] = new myBird("21-00-00T00:00","FORMICAR","Rufous-capped Antthrush","棕顶蚁鸫","Formicarius colma",[m_id("")],["mdbhrp","9/2015"],"rucant2");
//birds[j++] = new myBird("21-00-00T00:00","GRALLARI","Variegated Antpitta","杂色蚁鸫","Grallaria varia",[m_id("")],["mdbhrp","9/2015"],"varant2");
//birds[j++] = new myBird("21-00-00T00:00","CONOPOPH","Chestnut-belted Gnateater","栗带食蚊鸟","Conopophaga aurita",[m_id("")],["mdbhrp","9/2015"],"chbgna1");
//birds[j++] = new myBird("21-00-00T00:00","RHINOCRY","Chucao Tapaculo","智利窜鸟","Scelorchilus rubecula",[m_id("")],["mdbhrp","9/2015"],"chutap1");
//birds[j++] = new myBird("21-00-00T00:00","MELANOPA","Collared Crescentchest","领月胸窜鸟","Melanopareia torquata",[m_id("")],["mdbhrp","9/2015"],"colcre1");  
  birds[j++] = new myBird("15-01-03T10:13","TYRANNID","Caribbean Elaenia","加勒比拟霸鹟","Elaenia martinica",[p_id("1501prbirding",15)],["prcnwr","1/2015"],"carela1");
  birds[j++] = new myBird("06-04-14T16:40","TYRANNID","Eastern Phoebe","灰胸长尾霸鹟","Sayornis phoebe",[m_id("20210506_063_EasternPhoebe"),p_id("1408annapolisbirding",18)],["mdlbrp","5/2021","mdmdmd","8/2014","Juvenile, "+gmap("Greenbury Point",38.9834,-76.45125)+", Annapolis","","","安纳波利斯格林伯瑞角"]);
  birds[j++] = new myBird("13-12-25T18:43","TYRANNID","Black Phoebe","黑长尾霸鹟","Sayornis nigricans",[p_id("1312bigbendbirding",18)],["txbbnp","12/2013"]);
  birds[j++] = new myBird("13-12-25T15:24","TYRANNID","Say's Phoebe","棕腹长尾霸鹟","Sayornis saya",[p_id("1507birdingwest",4)],["nvdnwr","7/2015"]);
  birds[j++] = new myBird("20-09-09T09:21","TYRANNID","Olive-sided Flycatcher","绿胁绿霸鹟","Contopus cooperi",[m_id("20200909_067_Olive-sidedFlycatcher")],["mdmwma","9/2020"]);
  birds[j++] = new myBird("18-12-07T06:58","TYRANNID","Western Wood-Pewee","西绿霸鹟","Contopus sordidulus",[p_id("1812crbirding",85)],["crarol","12/2018"]);
  birds[j++] = new myBird("06-08-20T11:26","TYRANNID","Eastern Wood-Pewee","东绿霸鹟","Contopus virens",[m_id("20150703_080_EasternWood-Pewee"),p_id("2020lbrp",1)],["mdcocn","7/2015","",""," at Maryland Heights","马里兰高地一带","mdlbrp","5/2020"]);
  birds[j++] = new myBird("18-12-08T08:58","TYRANNID","Tropical Pewee","热带绿霸鹟","Contopus cinereus",[p_id("1812crbirding",99)],["crsanj","12/2018",gmap("Morazán Park",9.93547,-84.07544),"","","莫拉桑公园"],"tropew1");
  birds[j++] = new myBird("15-08-15T07:20","TYRANNID","Yellow-bellied Flycatcher","黄腹纹霸鹟","Empidonax flaviventris",[p_id("1512bhill",29)],["mdbhrp","8/2015"]);
  birds[j++] = new myBird("15-05-31T09:31","TYRANNID","Acadian Flycatcher","绿纹霸鹟","Empidonax virescens",[m_id("20160508_045_AcadianFlycatcher")],["mdpvsp","5/2016"]);
  birds[j++] = new myBird("09-07-03T10:16","TYRANNID","Willow Flycatcher","柳纹霸鹟","Empidonax traillii",[p_id("1505puffin",2)],["ctciws","5/2015"]);
  birds[j++] = new myBird("15-05-17T09:46","TYRANNID","Alder Flycatcher","恺木纹霸鹟","Empidonax alnorum",[p_id("1505bombayhook",5)],["debnwr","5/2015"]);
  birds[j++] = new myBird("15-08-29T07:34","TYRANNID","Least Flycatcher","小纹霸鹟","Empidonax minimus",[p_id("1512bhill",35)],["mdbhrp","8/2015"]);
  birds[j++] = new myBird("20-12-12T15:19","TYRANNID","Pacific-slope Flycatcher","北美纹霸鹟","Empidonax difficilis",m_id(sas("20201215_13",["7","8"],"_Pacific-slopeFlycatcher")),["mdmdmd","12/2020",gmap("Riverwalk Park",39.43495,-77.38499)+", Frederick","","","弗雷德里克市河滨公园"]);
//birds[j++] = new myBird("21-00-00T00:00","TYRANNID","Cordilleran Flycatcher","科迪纹霸鹟","Empidonax occidentalis",[m_id("20201212_134_Pacific-slopeFlycatcher")],["mdmdmd","12/2020","Riverwalk Park, Frederick County","","","弗雷德里克郡河滨公园"]);
  birds[j++] = new myBird("19-05-12T09:45","TYRANNID","Buff-breasted Flycatcher","黄胸纹霸鹟","Empidonax fulvifrons",p_id("1905mxbird",[10,11]),["mxunam","5/2019"]);
  birds[j++] = new myBird("13-12-25T14:52","TYRANNID","Vermilion Flycatcher","朱红霸鹟","Pyrocephalus obscurus",[p_id("1312bigbendbirding",3),p_id("2001txbirding",35)],["txbbnp","12/2013","Male","txsnwr","1/2020","Male"]);
  birds[j++] = new myBird("18-12-07T10:02","TYRANNID","Long-tailed Tyrant","长尾霸鹟","Colonia colonus",[p_id("1812crbirding",92)],["crarol","12/2018"],"lottyr1");
  birds[j++] = new myBird("18-12-05T07:53","TYRANNID","Social Flycatcher","群栖短嘴霸鹟","Myiozetetes similis",[p_id("1812crbirding",53)],["crarol","12/2018"],"socfly1");
  birds[j++] = new myBird("18-12-04T09:00","TYRANNID","Gray-capped Flycatcher","灰顶短嘴霸鹟","Myiozetetes granadensis",[p_id("1812crbirding",33)],["crarol","12/2018"],"grcfly1");
  birds[j++] = new myBird("18-12-05T09:31","TYRANNID","Great Kiskadee","大食蝇霸鹟","Pitangus sulphuratus",[p_id("1812crbirding",56),p_id("2001txbirding",31)],["crarol","12/2018","txsnwr","1/2020"]);
  birds[j++] = new myBird("18-12-02T08:57","TYRANNID","Tropical Kingbird","热带王霸鹟","Tyrannus melancholicus",[p_id("1812crbirding",10)],["crsanj","12/2018",gmap("La Sabana Park",9.93542,-84.10246),"","","萨瓦纳公园"]);
  birds[j++] = new myBird("19-05-14T08:27","TYRANNID","Cassin's Kingbird","卡氏王霸鹟","Tyrannus vociferans",p_id("1905mxbird",[26,30]),["mxguan","5/2019","arb","5/2019",gmap("Guanajuato City Bus Station",20.98338,-101.28695)+", Mexico","墨西哥瓜纳华托城汽车站"]);
  birds[j++] = new myBird("15-07-12T10:38","TYRANNID","Western Kingbird","西王霸鹟","Tyrannus verticalis",[p_id("1507birdingwest",46)],["cabake","7/2015",gmap("Beale Park",35.36253,-119.02511),"","","比尔公园"]);
  birds[j++] = new myBird("20-05-12T09:40","TYRANNID","Scissor-tailed Flycatcher","剪尾王霸鹟","Tyrannus forficatus",[m_id("20200512_006_Scissor-tailedFlycatcher")],["mdmdmd","5/2020",gmap("Severn-Danza Park",39.13755,-76.67865)+", Anne Arundel County","","","安妮阿伦德尔郡塞文丹扎公园"]);
//birds[j++] = new myBird("21-00-00T00:00","TYRANNID","Fork-tailed Flycatcher","叉尾王霸鹟","Tyrannus savana",[m_id("")],["mdocin","3/2017"],"fotfly");
  birds[j++] = new myBird("06-05-06T11:03","TYRANNID","Eastern Kingbird","东王霸鹟","Tyrannus tyrannus",[p_id("1512bhill",28)],["mdbhrp","6/2015"]);
  birds[j++] = new myBird("15-01-05T14:08","TYRANNID","Gray Kingbird","灰王霸鹟","Tyrannus dominicensis",[p_id("1501prbirding",43)],["prsanj","1/2015"],"grykin");
  birds[j++] = new myBird("15-01-02T07:13","TYRANNID","Loggerhead Kingbird","圆头王霸鹟","Tyrannus caudifasciatus",[p_id("1501prbirding",4)],["arb","1/2015",gmap("Mayagüez",18.23614,-67.16159)+", Puerto Rico, USA","美国波多黎各马亚圭斯市"],"logkin");
  birds[j++] = new myBird("15-07-12T09:58","TYRANNID","Ash-throated Flycatcher","灰喉蝇霸鹟","Myiarchus cinerascens",[p_id("1507birdingwest",43)],["cabake","7/2015",gmap("Yokuts Park",35.37584,-119.04749),"","","约库特公园"]);
  birds[j++] = new myBird("14-08-10T10:54","TYRANNID","Great Crested Flycatcher","大冠蝇霸鹟","Myiarchus crinitus",[m_id("20200525_026_GreatCrestedFlycatcher")],["mdcorl","5/2020"]);
  birds[j++] = new myBird("15-01-03T10:03","TYRANNID","Puerto Rican Flycatcher","波多黎各蝇霸鹟","Myiarchus antillarum",[p_id("1501prbirding",14)],["prcnwr","1/2015"],"purfly1");
//birds[j++] = new myBird("21-00-00T00:00","COTINGID","Andean Cock-of-the-rock","安第斯冠伞鸟","Rupicola peruvianus",[m_id("")],["mdbhrp","9/2015"],"andcot1");
//birds[j++] = new myBird("21-00-00T00:00","PIPRIDAE","Golden-winged Manakin","金翅娇鹟","Masius chrysopterus",[m_id("")],["mdbhrp","9/2015"],"gowman1");
//birds[j++] = new myBird("21-00-00T00:00","TITYRIDA","Sharpbill","尖喙鸟","Oxyruncus cristatus",[m_id("")],["mdbhrp","9/2015"],"sharpb1");
//birds[j++] = new myBird("21-00-00T00:00","MENURIDA","Superb Lyrebird","华丽琴鸟","Menura novaehollandiae",[m_id("")],["mdbhrp","9/2015"],"suplyr1");
//birds[j++] = new myBird("21-00-00T00:00","ATRICHOR","Rufous Scrubbird","棕薮鸟","Atrichornis rufescens",[m_id("")],["mdbhrp","9/2015"],"rusbir1");
//birds[j++] = new myBird("21-00-00T00:00","PTILONOR","White-eared Catbird","白耳园丁鸟","Ailuroedus buccoides",[m_id("")],["mdbhrp","9/2015"],"whecat1");
//birds[j++] = new myBird("21-00-00T00:00","CLIMACTE","White-throated Treecreeper","白喉短嘴旋木雀","Cormobates leucophaea",[m_id("")],["mdbhrp","9/2015"],"whttre3");
//birds[j++] = new myBird("21-00-00T00:00","MALURIDA","Wallace's Fairywren","华氏鹩莺","Sipodotus wallacii",[m_id("")],["mdbhrp","9/2015"],"walfai1");
//birds[j++] = new myBird("21-00-00T00:00","MELIPHAG","Black Honeyeater","黑吸蜜鸟","Sugomel niger",[m_id("")],["mdbhrp","9/2015"],"blahon1");
//birds[j++] = new myBird("21-00-00T00:00","DASYORNI","Eastern Bristlebird","棕刺莺","Dasyornis brachypterus",[m_id("")],["mdbhrp","9/2015"],"easbri1");
//birds[j++] = new myBird("21-00-00T00:00","PARDALOT","Spotted Pardalote","斑翅食蜜鸟","Pardalotus punctatus",[m_id("")],["mdbhrp","9/2015"],"spopar1");
//birds[j++] = new myBird("21-00-00T00:00","ACANTHIZ","Large-billed Gerygone","沼泽刺嘴莺","Gerygone magnirostris",[m_id("")],["mdbhrp","9/2015"],"labger1");
//birds[j++] = new myBird("21-00-00T00:00","POMATOST","Grey-crowned Babbler","灰冠弯嘴鹛","Pomatostomus temporalis",[m_id("")],["mdbhrp","9/2015"],"gycbab1");
//birds[j++] = new myBird("21-00-00T00:00","ORTHONYC","Australian Logrunner","刺尾鸫","Orthonyx temminckii",[m_id("")],["mdbhrp","9/2015"],"soulog1");
//birds[j++] = new myBird("21-00-00T00:00","CNEMOPHI","Loria's Satinbird","鸦嘴极乐鸟","Cnemophilus loriae",[m_id("")],["mdbhrp","9/2015"],"lorsat1");
//birds[j++] = new myBird("21-00-00T00:00","MELANOCH","Black Berrypecker","黑啄果鸟","Melanocharis nigra",[m_id("")],["mdbhrp","9/2015"],"blaber1");
//birds[j++] = new myBird("21-00-00T00:00","PARAMYTH","Tit Berrypecker","拟雀啄果鸟","Oreocharis arfaki",[m_id("")],["mdbhrp","9/2015"],"titber1");
//birds[j++] = new myBird("21-00-00T00:00","CALLAEID","North Island Kokako","北岛垂耳鸦","Callaeas wilsoni",[m_id("")],["mdbhrp","9/2015"],"kokako3");
//birds[j++] = new myBird("21-00-00T00:00","NOTIOMYS","Stitchbird","缝叶吸蜜鸟","Notiomystis cincta",[m_id("")],["mdbhrp","9/2015"],"stitch1");
//birds[j++] = new myBird("21-00-00T00:00","PSOPHODI","Eastern Whipbird","绿啸冠鸫","Psophodes olivaceus",[m_id("")],["mdbhrp","9/2015"],"easwhi1");
//birds[j++] = new myBird("21-00-00T00:00","CINCLOSO","Spotted Quail-thrush","斑鹑鸫","Cinclosoma punctatum",[m_id("")],["mdbhrp","9/2015"],"spqthr1");
//birds[j++] = new myBird("21-00-00T00:00","PLATYSTE","Brown-throated Wattle-eye","褐喉饰眼鹟","Platysteira cyanea",[m_id("")],["mdbhrp","9/2015"],"btweye2");
//birds[j++] = new myBird("21-00-00T00:00","MALACONO","Grey-headed Bushshrike","灰头丛鵙","Malaconotus blanchoti",[m_id("")],["mdbhrp","9/2015"],"gyhbus1");
//birds[j++] = new myBird("21-00-00T00:00","MACHAERI","Yellow-breasted Boatbill","黄胸船嘴鹟","Machaerirhynchus flaviventer",[m_id("")],["mdbhrp","9/2015"],"yebboa1");
//birds[j++] = new myBird("21-00-00T00:00","VANGIDAE","Red-tailed Vanga","红尾钩嘴鵙","Calicalicus madagascariensis",[m_id("")],["mdbhrp","9/2015"],"retvan1","钩嘴鵙");
//birds[j++] = new myBird("21-00-00T00:00","VANGIDAE","White-crested Helmetshrike","长冠盔鵙","Prionops plumatus",[m_id("")],["mdbhrp","9/2015"],"whihel1","");
//birds[j++] = new myBird("21-00-00T00:00","VANGIDAE","Large Woodshrike","钩嘴林鵙","Tephrodornis virgatus",[p_id("1601china",)],["cnbjjp","1/2016"],"larwoo1");
//birds[j++] = new myBird("21-00-00T00:00","VANGIDAE","African Shrike-flycatcher","非洲鵙鹟","Megabyas flammulatus",[m_id("")],["mdbhrp","9/2015"],"afrshf1",2853);
//birds[j++] = new myBird("21-00-00T00:00","PITYRIAS","Bornean Bristlehead","棘头鵙","Pityriasis gymnocephala",[m_id("")],["mdbhrp","9/2015"],"borbri1",4138);
//birds[j++] = new myBird("21-00-00T00:00","ARTAMIDA","Ashy Woodswallow","灰燕鵙","Artamus fuscus",[m_id("")],["mdbhrp","9/2015"],"ashwoo2");
//birds[j++] = new myBird("21-00-00T00:00","RHAGOLOG","Mottled Berryhunter","斑啸鹟","Rhagologus leucostigma",[m_id("")],["mdbhrp","9/2015"],"motwhi1");
//birds[j++] = new myBird("21-00-00T00:00","AEGITHIN","Common Iora","黑翅雀鹎","Aegithina tiphia",[m_id("")],["mdbhrp","9/2015"],"comior1");
//birds[j++] = new myBird("21-00-00T00:00","CAMPEPHA","Grey-chinned Minivet","灰喉山椒鸟","Pericrocotus solaris",[p_id("1601china",)],["cnbjjp","1/2016"],"gycmin1");
  birds[j++] = new myBird("17-04-04T06:42","CAMPEPHA","Scarlet Minivet","赤红山椒鸟","Pericrocotus speciosus",p_id("1704longyan",[15,14]),["cnlydp","4/2017","Female"],"scamin1");
//birds[j++] = new myBird("21-00-00T00:00","MOHOUIDA","Whitehead","白头刺莺","Mohoua albicilla",[m_id("")],["mdbhrp","9/2015"],"whiteh1");
//birds[j++] = new myBird("21-00-00T00:00","NEOSITTI","Varied Sittella","杂色澳䴓","Daphoenositta chrysoptera",[m_id("")],["mdbhrp","9/2015"],"varsit2");
//birds[j++] = new myBird("21-00-00T00:00","EULACEST","Wattled Ploughbill","肉垂鵙雀鹟","Eulacestoma nigropectus",[m_id("")],["mdbhrp","9/2015"],"watplo1","");
//birds[j++] = new myBird("21-00-00T00:00","OREOICID","Rufous-naped Bellbird","棕颈啸鹟","Aleadryas rufinucha",[m_id("")],["mdbhrp","9/2015"],"runwhi1");
//birds[j++] = new myBird("21-00-00T00:00","FALCUNCU","Crested Shriketit","鵙雀鹟","Falcunculus frontatus",[m_id("")],["mdbhrp","9/2015"],"crstit1");
//birds[j++] = new myBird("21-00-00T00:00","PACHYCEP","Maroon-backed Whistler","栗背啸鹟","Coracornis raveni",[m_id("")],["mdbhrp","9/2015"],"mabwhi1");
  birds[j++] = new myBird("16-01-10T09:41","LANIIDAE","Long-tailed Shrike","棕背伯劳","Lanius schach",[p_id("1601china",43)],["cnlynv","1/2016"],"lotshr1");
  birds[j++] = new myBird("16-02-05T09:01","LANIIDAE","Loggerhead Shrike","呆头伯劳","Lanius ludovicianus",[p_id("1612savannah",11)],["scsnwr","12/2016"]);
  birds[j++] = new myBird("16-12-10T08:44","LANIIDAE","Northern Shrike","北伯劳","Lanius borealis",[m_id("20161210_138_NorthernShrike")],["mdmdmd","12/2016",gmap("Ben's Point Road",39.15365,-75.98918)+", Queen Anne's County","","","安妮女王郡本点路"],"伯劳");
//birds[j++] = new myBird("21-00-00T00:00","LANIIDAE","Great Gray Shrike","灰伯劳","Lanius excubitor",[m_id()],["scsnwr","12/2016"]);
  birds[j++] = new myBird("15-05-02T08:40","VIREONID","Red-eyed Vireo","红眼莺雀","Vireo olivaceus",m_id(["20160515_062_Red-eyedVireo","20160515_061_Red-eyedVireo"]),["mdpvsp","5/2016"]);
  birds[j++] = new myBird("20-10-01T10:07","VIREONID","Philadelphia Vireo","费城莺雀","Vireo philadelphicus",[p_id("2020lbrp",31)],["mdlbrp","10/2020"]);
  birds[j++] = new myBird("15-08-22T07:06","VIREONID","Warbling Vireo","歌莺雀","Vireo gilvus",[m_id("20160514_056_WarblingVireo"),p_id("1705ohio",13)],["nyjbwr","5/2016","ohmage","5/2017"]);
  birds[j++] = new myBird("17-06-11T08:21","VIREONID","Yellow-throated Vireo","黄喉莺雀","Vireo flavifrons",[m_id("20170611_074_Yellow-throatedVireo")],["mdmwma","6/2017"]);
  birds[j++] = new myBird("16-04-23T08:15","VIREONID","Blue-headed Vireo","蓝头莺雀","Vireo solitarius",[m_id("20161106_114_Blue-headedVireo"),p_id("1609vtcanbirding",15)],["mdcrvp","11/2016","cactnw","9/2016"]);
  birds[j++] = new myBird("15-09-13T07:30","VIREONID","White-eyed Vireo","白眼莺雀","Vireo griseus",[m_id("20160911_095_White-eyedVireo"),m_id("20150913_095_White-eyedVireo(I)")],["mdlbrp","9/2016","mdlbrp","9/2015","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","ORIOLIDA","Black-naped Oriole","黑枕黄鹂","Oriolus chinensis",[m_id("")],["mdbhrp","9/2015"],"blnori1");
//birds[j++] = new myBird("21-00-00T00:00","DICRURID","Square-tailed Drongo","方尾卷尾","Dicrurus ludwigii",[m_id("")],["mdbhrp","9/2015"],"sqtdro1");
//birds[j++] = new myBird("21-00-00T00:00","RHIPIDUR","White-throated Fantail","白喉扇尾鹟","Rhipidura albicollis",[m_id("")],["mdbhrp","9/2015"],"whtfan1");
//birds[j++] = new myBird("21-00-00T00:00","MONARCHI","Black-naped Monarch","黑枕王鹟","Hypothymis azurea",[m_id("")],["mdbhrp","9/2015"],"blnmon1");
  birds[j++] = new myBird("16-09-15T06:39","CORVIDAE","Canada Jay","灰噪鸦","Perisoreus canadensis",[p_id("1609vtcanbirding",2),p_id("1709algonquin",14)],["vtwwma","9/2016","caalgp","9/2017"]);
  birds[j++] = new myBird("20-01-25T08:58","CORVIDAE","Green Jay","绿蓝鸦","Cyanocorax luxuosus",[p_id("2001txbirding",40)],["txsnwr","1/2020"]);
  birds[j++] = new myBird("18-12-06T06:57","CORVIDAE","Brown Jay","褐鸦","Psilorhinus morio",[p_id("1812crbirding",70)],["crarol","12/2018"],"brnjay");
  birds[j++] = new myBird("06-03-04T15:28","CORVIDAE","Blue Jay","冠蓝鸦","Cyanocitta cristata",[p_id("1412mckee-beshers",34),m_id("20170506_053_BlueJay")],["mdmwma","11/2014","nycenp","5/2017"]);
  birds[j++] = new myBird("15-07-08T19:39","CORVIDAE","Steller's Jay","暗冠蓝鸦","Cyanocitta stelleri",[p_id("1507birdingwest",14)],["waolnp","7/2015","",""," at Marymere Falls Trail","玛莉密瀑布小道"]);
//birds[j++] = new myBird("21-00-00T00:00","CORVIDAE","Woodhouse's Scrub-Jay","伍氏丛鸦","Aphelocoma woodhouseii",[p_id("1601china",)],["mxunam","5/2019"],"西丛鸦落基山亚种");
  birds[j++] = new myBird("05-12-28T13:13","CORVIDAE","Florida Scrub-Jay","佛罗里达丛鸦","Aphelocoma coerulescens",p_id("0512merritt",[19,21]),["flmnwr","12/2005"]);
  birds[j++] = new myBird("16-01-03T09:56","CORVIDAE","Azure-winged Magpie","灰喜鹊","Cyanopica cyanus",[p_id("1601china",4)],["cnbjjp","1/2016"],"azwmag2");
//birds[j++] = new myBird("21-00-00T00:00","CORVIDAE","Red-billed Blue Magpie","红嘴蓝鹊","Urocissa erythroryncha",[p_id("1601china",)],["cnbjjp","1/2016"],"rbbmag");
  birds[j++] = new myBird("16-01-15T13:37","CORVIDAE","Eurasian Magpie","喜鹊","Pica pica",[p_id("1601china",66)],["cnbjsp","1/2016"],"eurmag1");
  birds[j++] = new myBird("13-07-14T18:39","CORVIDAE","Black-billed Magpie","黑嘴喜鹊","Pica hudsonia",[p_id("1307alaskabirding",3)],["akknpp","7/2013"]);
  birds[j++] = new myBird("06-04-15T11:43","CORVIDAE","American Crow","短嘴鸦","Corvus brachyrhynchos",[m_id("20170625_078_AmericanCrow"),p_id("1507birdingwest",23)],["mdcovl","6/2017","wahobb","7/2015"]);
  birds[j++] = new myBird("15-03-29T08:49","CORVIDAE","Fish Crow","鱼鸦","Corvus ossifragus",[m_id("20150329_048_FishCrow")],["vavava","3/2015",gmap("Ford's Landing Park",38.79702,-77.04008)+", Alexandria","","","亚历山大市福特码头公园"]);
//birds[j++] = new myBird("21-00-00T00:00","CORVIDAE","Carrion Crow","小嘴乌鸦","Corvus corone",[p_id("1601china",)],["cnbjjp","1/2016"],"carcro1");
  birds[j++] = new myBird("16-01-15T12:07","CORVIDAE","Large-billed Crow","大嘴乌鸦","Corvus macrorhynchos",[p_id("1601china",65)],["cnbjsp","1/2016"],"labcro1");
  birds[j++] = new myBird("14-07-05T17:51","CORVIDAE","Common Raven","渡鸦","Corvus corax",p_id("1407michiganbirding",[4,5]),["arb","7/2014",gmap("Painted Rocks National Lakeshore")+", Michigan, USA","美国密西根州画石国家湖岸"]);
//birds[j++] = new myBird("21-00-00T00:00","CORCORAC","White-winged Chough","白翅澳鸦","Corcorax melanorhamphos",[m_id("")],["mdbhrp","9/2015"],"whwcho1");
//birds[j++] = new myBird("21-00-00T00:00","MELAMPIT","Lesser Melampitta","小黑脚风鸟","Melampitta lugubris",[m_id("")],["mdbhrp","9/2015"],"lesmel1");
//birds[j++] = new myBird("21-00-00T00:00","IFRITIDA","Blue-capped Ifrit","蓝顶鹛鸫","Ifrita kowaldi",[m_id("")],["mdbhrp","9/2015"],"bucifr1");
//birds[j++] = new myBird("21-00-00T00:00","PARADISA","Victoria's Riflebird","小掩鼻风鸟","Ptiloris victoriae",[m_id("")],["aucass","9/2015"],"vicrif1");
//birds[j++] = new myBird("21-00-00T00:00","PARADISA","Magnificent Bird-of-paradise","丽色极乐鸟","Diphyllodes magnificus",[m_id("")],["mdbhrp","9/2015"],"mbopar2");
//birds[j++] = new myBird("21-00-00T00:00","PETROICI","Ashy Robin","地丛鹟","Heteromyias albispecularis",[m_id("")],["mdbhrp","9/2015"],"gyhrob1");
//birds[j++] = new myBird("21-00-00T00:00","PICATHAR","White-necked Rockfowl","白颈岩鹛","Picathartes gymnocephalus",[m_id("")],["mdbhrp","9/2015"],"whnroc1");
//birds[j++] = new myBird("21-00-00T00:00","CHAETOPI","Cape Rockjumper","棕岩鸫","Chaetops frenatus",[m_id("")],["mdbhrp","9/2015"],"rufroc1");
//birds[j++] = new myBird("21-00-00T00:00","EUPETIDA","Rail-babbler","白眉长颈鸫","Eupetes macrocerus",[m_id("")],["mdbhrp","9/2015"],"marbab1");
//birds[j++] = new myBird("21-00-00T00:00","BOMBYCIL","Bohemian Waxwing","太平鸟","Bombycilla garrulus",[p_id("1601china",)],["cnbjjp","1/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","BOMBYCIL","Japanese Waxwing","小太平鸟","Bombycilla japonica",[p_id("1601china",)],["cnbjjp","1/2016"],"japwax1");
  birds[j++] = new myBird("06-06-08T15:54","BOMBYCIL","Cedar Waxwing","雪松太平鸟","Bombycilla cedrorum",[p_id("1412mckee-beshers",39),p_id("1512bhill",30)],["mdmwma","12/2014","mdbhrp","8/2015","Juvenile"]);
  birds[j++] = new myBird("15-07-06T13:21","PTILIOGO","Phainopepla","黑丝鹟","Phainopepla nitens",[p_id("1507birdingwest",6)],["nvdnwr","7/2015","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","HYPOCOLI","Grey Hypocolius","灰连雀","Hypocolius ampelinus",[m_id("")],["mdbhrp","9/2015"],"hypoco1");
//birds[j++] = new myBird("21-00-00T00:00","DULIDAE ","Palmchat","棕榈鵖","Dulus dominicus",[m_id("")],["mdbhrp","9/2015"],"palmch1");
//birds[j++] = new myBird("21-00-00T00:00","HYLOCITR","Hylocitrea","林啸鹟","Hylocitrea bonensis",[m_id("")],["mdbhrp","9/2015"],"olfwhi1");
//birds[j++] = new myBird("21-00-00T00:00","STENOSTI","Grey-headed Canary-flycatcher","方尾鹟","Culicicapa ceylonensis",[m_id("")],["mdbhrp","9/2015"],"gyhcaf1");
  birds[j++] = new myBird("16-01-06T09:14","PARIDAE ","Yellow-bellied Tit","黄腹山雀","Pardaliparus venustulus",p_id("1601china",[29,28]),["cnjsxp","1/2016","Male","cnjsxp","1/2016","Female"],"yebtit4");
  birds[j++] = new myBird("06-03-16T14:27","PARIDAE ","Tufted Titmouse","美洲凤头山雀","Baeolophus bicolor",[m_id("20161112_120_TuftedTitmouse")],["mdbhrp","11/2016"]);
  birds[j++] = new myBird("20-01-25T08:44","PARIDAE ","Black-crested Titmouse","黑冠凤头山雀","Baeolophus atricristatus",[p_id("2001txbirding",38)],["txsnwr","1/2020"],3593);
//birds[j++] = new myBird("21-00-00T00:00","PARIDAE ","Boreal Chickadee","北山雀","Poecile hudsonicus",[p_id("",2)],["caalgp","9/2017"],3631);
  birds[j++] = new myBird("06-02-18T12:26","PARIDAE ","Carolina Chickadee","卡罗山雀","Poecile carolinensis",[p_id("1412mckee-beshers",24),m_id("20210130_021_CarolinaChickadee")],["mdmwma","11/2014","vavava","1/2021",gmap("Bacon Street",37.2323,-76.50624)+", Yorktown","","","约克镇培根街"],3620);
  birds[j++] = new myBird("13-07-17T16:16","PARIDAE ","Black-capped Chickadee","黑顶山雀","Poecile atricapillus",[p_id("1609vtcanbirding",11),p_id("1409fingerlake",2)],["arb","9/2016",gmap("Le Domaine de Maizerets",46.83991,-71.21153)+", Québec City, Québec, Canada","加拿大魁北克省魁北克市Domaine de Maizerets公园","arb","8/2014",gmap("Sapsucker Woods Sanctuary")+", Ithaca, New York, USA","美国纽约州伊萨卡啄木鸟树林保护区"]);
  birds[j++] = new myBird("16-01-15T13:47","PARIDAE ","Willow Tit","褐头山雀","Poecile montanus",[p_id("1601china",68)],["cnbjsp","1/2016"],"wiltit1");
//birds[j++] = new myBird("21-00-00T00:00","PARIDAE ","Great Tit","大山雀","Parus major",p_id("1601china",[21,22]),["cnjsxp","1/2016"],"gretit1");
  birds[j++] = new myBird("16-01-05T10:13","PARIDAE ","Japanese Tit","远东山雀","Parus minor",p_id("1601china",[21,22]),["cnjsxp","1/2016"],"gretit4");
  birds[j++] = new myBird("19-05-14T08:25","REMIZIDA","Verdin","黄头金雀","Auriparus flaviceps",[p_id("1905mxbird",25)],["mxguan","5/2019"]);
//birds[j++] = new myBird("21-00-00T00:00","NICATORI","Western Nicator","黄翼斑斗鹎","Nicator chloris",[m_id("")],["mdbhrp","9/2015"],"yesnic1");
//birds[j++] = new myBird("21-00-00T00:00","PANURIDA","Bearded Reedling","文须雀","Panurus biarmicus",[m_id("")],["mdbhrp","9/2015"],"bearee1");
  birds[j++] = new myBird("15-03-15T10:45","ALAUDIDA","Horned Lark","角百灵","Eremophila alpestris",m_id(["20160507_042_HornedLark(M)","20150315_036_HornedLark(F)","20160507_043_HornedLark(I)"]),["mdcapc","5/2016","Male","mdswhf","3/2015","Female","mdcapc","5/2016","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","PYCNONOT","Chestnut Bulbul","栗背短脚鹎","Hemixos castanonotus",[p_id("1601china",)],["cnlydp","1/2016","Male"],"chebul1");
//birds[j++] = new myBird("21-00-00T00:00","PYCNONOT","Mountain Bulbul","绿翅短脚鹎","Ixos mcclellandii",[p_id("1601china",)],["cnlydp","1/2016","Male"],"moubul2");
  birds[j++] = new myBird("16-01-09T14:54","PYCNONOT","Black Bulbul","黑短脚鹎","Hypsipetes leucocephalus",[p_id("1704longyan",3),p_id("1601china",38)],["cnlydp","4/2017","cnlydp","1/2016","White-headed form","白头形"],"blabul1");
  birds[j++] = new myBird("16-01-10T10:01","PYCNONOT","Collared Finchbill","领雀嘴鹎","Spizixos semitorques",[p_id("1601china",42)],["cnlynv","1/2016"],"colfin1");
  birds[j++] = new myBird("16-01-05T10:09","PYCNONOT","Light-vented Bulbul","白头鹎","Pycnonotus sinensis",[p_id("1601china",20)],["cnjsxp","1/2016"],"livbul1");
  birds[j++] = new myBird("16-01-10T10:03","PYCNONOT","Red-whiskered Bulbul","红耳鹎","Pycnonotus jocosus",[p_id("1601china",44)],["cnlynv","1/2016"],"rewbul");
//birds[j++] = new myBird("21-00-00T00:00","PYCNONOT","Sooty-headed Bulbul","白喉红臀鹎","Pycnonotus aurigaster",[p_id("1601china",)],["cnbjjp","1/2016"],"sohbul1");
  birds[j++] = new myBird("13-07-17T17:11","HIRUNDIN","Bank Swallow","崖沙燕","Riparia riparia",[p_id("1307alaskabirding",6)],["arb","7/2013",gmap("Point Woronzof Park",61.2031,-150.01951)+", Anchorage, Alaska, USA","美国阿拉斯加州安克雷奇沃隆佐夫角公园"]);
  birds[j++] = new myBird("06-04-30T08:56","HIRUNDIN","Tree Swallow","双色树燕","Tachycineta bicolor",[m_id("20150405_049_TreeSwallow"),p_id("1505puffin",1)],["mdbmnt","4/2015","Male","ctciws","5/2015","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","HIRUNDIN","Violet-green Swallow","紫绿树燕","Tachycineta thalassina",[m_id("")],["nvdnwr","7/2015"]);
  birds[j++] = new myBird("06-04-09T11:23","HIRUNDIN","Northern Rough-winged Swallow","中北美毛翅燕","Stelgidopteryx serripennis",[m_id("20210419_051_NorthernRough-wingedSwallow")],["mdmwma","4/2021"]);
  birds[j++] = new myBird("18-12-06T08:52","HIRUNDIN","Southern Rough-winged Swallow","红翎毛翅燕","Stelgidopteryx ruficollis",[p_id("1812crbirding",75)],["crarol","12/2018"],"srwswa1");
  birds[j++] = new myBird("15-05-09T11:56","HIRUNDIN","Purple Martin","紫崖燕","Progne subis",[p_id("1505capemay",5),p_id("1505puffin",3)],["njcmsp","5/2015","Female left, male right","ctciws","5/2015","Male"]);
  birds[j++] = new myBird("12-06-09T09:07","HIRUNDIN","Barn Swallow","家燕","Hirundo rustica",[p_id("1206brooksidebirding",10),p_id("1505capemay",8),p_id("1704longyan",7),m_id("20200629_053_BarnSwallow")],["mdwhrp","6/2012","",""," at Brookside Gardens","溪边花园","njscmm","5/2015","cnlynv","4/2017","mdmdmd","6/2020","Nest, Germantown","鸟巢","","德国镇"]);
  birds[j++] = new myBird("16-01-11T14:49","HIRUNDIN","Red-rumped Swallow","金腰燕","Cecropis daurica",[p_id("1601china",47)],["cnlydp","1/2016"],"rerswa1");
  birds[j++] = new myBird("15-05-16T09:59","HIRUNDIN","Cliff Swallow","美洲燕","Petrochelidon pyrrhonota",[m_id("20150516_074_CliffSwallow")],["mdloch","5/2015","",""," at Paper Mill Road Bridge","造纸厂路桥"]);
//birds[j++] = new myBird("21-00-00T00:00","HIRUNDIN","Cave Swallow","穴崖燕","Petrochelidon fulva",[m_id("")],["mdocin","11/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PNOEPYGI","Pygmy Cupwing","小鳞胸鹪鹛","Pnoepyga pusilla",[m_id("")],["mdbhrp","9/2015"],"pywbab1");
//birds[j++] = new myBird("21-00-00T00:00","MACROSPH","Moustached Grass Warbler","须薮莺","Melocichla mentalis",[m_id("")],["mdbhrp","9/2015"],"mogwar1");
//birds[j++] = new myBird("21-00-00T00:00","CETTIIDA","Mountain Tailorbird","栗头缝叶莺","Phyllergates cucullatus",[m_id("")],["mdbhrp","9/2015"],"moutai2");
//birds[j++] = new myBird("21-00-00T00:00","SCOTOCER","Streaked Scrub Warbler","纹鹪莺","Scotocerca inquieta",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","ERYTHROC","Chestnut-capped Flycatcher","栗顶红鹟","Erythrocercus mccallii",[m_id("")],["mdbhrp","9/2015"],"chcfly1");
//birds[j++] = new myBird("21-00-00T00:00","HYLIIDAE","Green Hylia","绿莺","Hylia prasina",[m_id("")],["mdbhrp","9/2015"],"grehyl1");
  birds[j++] = new myBird("16-01-05T10:40","AEGITHAL","Black-throated Bushtit","红头长尾山雀","Aegithalos concinnus",p_id("1601china",[24,25]),["cnjsxp","1/2016"],"blttit2");
  birds[j++] = new myBird("19-05-12T09:51","AEGITHAL","Bushtit","短嘴长尾山雀","Psaltriparus minimus",[p_id("1905mxbird",14)],["mxunam","5/2019","Male, melanotis group"]);
  birds[j++] = new myBird("17-04-04T07:01","PHYLLOSC","Yellow-browed Warbler","黄眉柳莺","Phylloscopus inornatus",[p_id("1704longyan",17)],["cnlydp","4/2017"],"yebwar3");
//birds[j++] = new myBird("21-00-00T00:00","PHYLLOSC","Arctic Warbler","极北柳莺","Phylloscopus borealis",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","ACROCEPH","Lesser Swamp Warbler","细嘴苇莺","Acrocephalus gracilirostris",[m_id("")],["mdbhrp","9/2015"],"leswar1");
//birds[j++] = new myBird("21-00-00T00:00","LOCUSTEL","Common Grasshopper Warbler","黑斑蝗莺","Locustella naevia",[m_id("")],["mdcapc","9/2015"],"cogwar1");
//birds[j++] = new myBird("21-00-00T00:00","DONACOBI","Black-capped Donacobius","黑顶鹪鹩","Donacobius atricapilla",[m_id("")],["mdbhrp","9/2015"],"bkcdon");
//birds[j++] = new myBird("21-00-00T00:00","BERNIERI","White-throated Oxylabes","白喉尖鹛","Oxylabes madagascariensis",[m_id("")],["mdbhrp","9/2015"],"whtoxy1");
  birds[j++] = new myBird("17-04-03T11:10","CISTICOL","Hill Prinia","山鹪莺","Prinia superciliaris",p_id("1704longyan",[10,11]),["cnlynv","4/2017"],"hilpri2");
  birds[j++] = new myBird("17-04-03T11:10","CISTICOL","Yellow-bellied Prinia","黄腹鹪莺","Prinia flaviventris",[p_id("1704longyan",9)],["cnlynv","4/2017"],"yebpri1");
  birds[j++] = new myBird("16-01-12T16:09","CISTICOL","Common Tailorbird","长尾缝叶莺","Orthotomus sutorius",p_id("1601china",[54,55]),["cnlydp","1/2016"],"comtai1");
//birds[j++] = new myBird("21-00-00T00:00","SYLVIIDA","Eurasian Blackcap","黑顶林莺","Sylvia atricapilla",[m_id("")],["mdbhrp","9/2015"],"blackc1");
//birds[j++] = new myBird("21-00-00T00:00","PARADOXO","Wrentit","鹪雀莺","Chamaea fasciata",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","ZOSTEROP","Striated Yuhina","栗耳凤鹛","Staphida castaniceps",[p_id("1601china",)],["cnlydp","1/2016","Male"],"stryuh1");
//birds[j++] = new myBird("21-00-00T00:00","ZOSTEROP","Swinhoe's White-eye","中华绣眼鸟","Zosterops simplex",[m_id()],["cnlydp","4/2017"],"swiwhe1","暗绿绣眼鸟普通亚种");
  birds[j++] = new myBird("16-01-11T14:29","ZOSTEROP","Warbling White-eye","暗绿绣眼鸟","Zosterops japonicus",[p_id("1704longyan",13),p_id("1601china",46)],["cnlydp","4/2017","cnlydp","1/2016"],"warwhe1");
//birds[j++] = new myBird("21-00-00T00:00","TIMALIID","Streak-breasted Scimitar Babbler","棕颈钩嘴鹛","Pomatorhinus ruficollis",[m_id("")],["mdbhrp","9/2015"],"sbsbab3");
//birds[j++] = new myBird("21-00-00T00:00","PELLORNE","Dusky Fulvetta","褐顶雀鹛","Schoeniparus brunneus",[m_id("")],["mdbhrp","9/2015"],"dusful1");
  birds[j++] = new myBird("16-01-05T09:34","LEIOTHRI","Red-billed Leiothrix","红嘴相思鸟","Leiothrix lutea",[p_id("1601china",17)],["cnjsxp","1/2016"],"reblei");
  birds[j++] = new myBird("16-01-06T10:14","LEIOTHRI","Chinese Hwamei","画眉","Garrulax canorus",p_id("1601china",[32,33]),["cnjsxp","1/2016"],"melthr");
//birds[j++] = new myBird("21-00-00T00:00","MODULATR","Dapple-throat","纹喉鵖","Arcanator orostruthus",[m_id("")],["mdbhrp","9/2015"],"dapthr1");
//birds[j++] = new myBird("21-00-00T00:00","PROMEROP","Cape Sugarbird","南非食蜜鸟","Promerops cafer",[m_id("")],["mdbhrp","9/2015"],"capsug1",4115);
//birds[j++] = new myBird("21-00-00T00:00","IRENIDAE","Asian Fairy-bluebird","和平鸟","Irena puella",["0504zoo/0504zoo__11"],["natzo","4/2005"],"asfblu1");
  birds[j++] = new myBird("09-04-12T13:39","REGULIDA","Ruby-crowned Kinglet","红冠戴菊","Corthylio calendula",m_id(["20171014_115_Ruby-crownedKinglet","20151024_110_Ruby-crownedKinglet(M)"]),["mdlbrp","10/2017","mdbmnt","10/2015","Male"]);
  birds[j++] = new myBird("07-02-10T12:17","REGULIDA","Golden-crowned Kinglet","金冠戴菊","Regulus satrapa",["2007cobirding/20070210_028_Golden-crownedKinglet(M)",m_id("20201020_103_Golden-crownedKinglet")],["mdcovl","2/2007","mdmwma","10/2020","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","ELACHURI","Spotted Elachura","丽星鹩鹛","Elachura formosa",[m_id("")],["mdbhrp","9/2015"],"spwbab1");
//birds[j++] = new myBird("21-00-00T00:00","HYLIOTID","Yellow-bellied Hyliota","黄腹丛莺","Hyliota flavigaster",[m_id("")],["mdbhrp","9/2015"],"yebhyl1");
//birds[j++] = new myBird("21-00-00T00:00","TROGLODY","Cactus Wren","棕曲嘴鹪鹩","Campylorhynchus brunneicapillus",[m_id("")],["nvdnwr","7/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","TROGLODY","Rock Wren","岩鹪鹩","Salpinctes obsoletus",[m_id("")],["mdocin","10/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","TROGLODY","Canyon Wren","墨西哥鹪鹩","Catherpes mexicanus",[m_id("")],["mdocin","10/2015"]);
  birds[j++] = new myBird("17-10-15T08:16","TROGLODY","Sedge Wren","短嘴沼泽鹪鹩","Cistothorus stellaris",m_id(["20171015_119_SedgeWren","20171015_117_SedgeWren"]),["mdlbrp","10/2017"]);
  birds[j++] = new myBird("15-05-17T09:53","TROGLODY","Marsh Wren","长嘴沼泽鹪鹩","Cistothorus palustris",[p_id("1505bombayhook",6)],["debnwr","5/2015"]);
  birds[j++] = new myBird("19-05-12T10:14","TROGLODY","Bewick's Wren","比氏苇鹪鹩","Thryomanes bewickii",p_id("1905mxbird",[28,35]),["mxguan","5/2019","mxmcal","5/2019"]);
  birds[j++] = new myBird("06-04-15T10:41","TROGLODY","Carolina Wren","卡罗苇鹪鹩","Thryothorus ludovicianus",[p_id("1512bhill",21),m_id("20160221_017_CarolinaWren")],["mdbhrp","2/2015","mdcorl","2/2016"]);
  birds[j++] = new myBird("06-03-04T15:46","TROGLODY","Winter Wren","冬鹪鹩","Troglodytes hiemalis",["2006cobirding/WinterWren_20060304_007","2007cobirding/20070107_004_WinterWren"],["mdcorl","3/2006","mdcorl","1/2007"]);
  birds[j++] = new myBird("15-07-09T12:26","TROGLODY","Pacific Wren","太平洋鹪鹩","Troglodytes pacificus",[p_id("1507birdingwest",20)],["wacape","7/2015"],"冬鹪鹩阿拉斯加亚种");
  birds[j++] = new myBird("15-04-18T09:12","TROGLODY","House Wren","莺鹪鹩","Troglodytes aedon",[m_id("20150418_055_HouseWren"),m_id("20150719_083_HouseWren"),p_id("1812crbirding",18)],["mdbmnt","4/2015","mdbmnt","7/2015","crarol","12/2018"]);
  birds[j++] = new myBird("06-04-30T09:54","POLIOPTI","Blue-gray Gnatcatcher","灰蓝蚋莺","Polioptila caerulea",[m_id("20150425_060_Blue-grayGnatcatcher"),p_id("1512bhill",31),m_id("20200523_024_Blue-grayGnatcatcher")],["mdbmnt","4/2015","Male","mdbhrp","8/2015","Female","mdcorl","5/2020","Nest"]);
//birds[j++] = new myBird("21-00-00T00:00","POLIOPTI","Black-tailed Gnatcatcher","黑尾蚋莺","Polioptila melanura",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("06-02-20T13:41","SITTIDAE","White-breasted Nuthatch","白胸䴓","Sitta carolinensis",m_id(["20161111_119_White-breastedNuthatch(M)","20160130_004_White-breastedNuthatch(F)"]),["mdbhrp","11/2016","Male","mdbhrp","1/2016","Female"]);
//birds[j++] = new myBird("21-00-00T00:00","SITTIDAE","Pygmy Nuthatch","小䴓","Sitta pygmaea",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("15-11-26T11:20","SITTIDAE","Brown-headed Nuthatch","棕头䴓","Sitta pusilla",p_id("1604asheville",[6,7]),["ncllmp","4/2016","ncllmp","4/2016","Immature"],"棕头鳾");
  birds[j++] = new myBird("16-09-15T08:27","SITTIDAE","Red-breasted Nuthatch","红胸䴓","Sitta canadensis",p_id("1609vtcanbirding",[7,8]),["vtwwma","9/2016"]);
  birds[j++] = new myBird("16-01-15T13:49","SITTIDAE","Chinese Nuthatch","黑头䴓","Sitta villosa",[p_id("1601china",69)],["cnbjsp","1/2016"],"snbnut1");
//birds[j++] = new myBird("21-00-00T00:00","TICHODRO","Wallcreeper","红翅旋壁雀","Tichodroma muraria",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("07-02-04T12:26","CERTHIID","Brown Creeper","美洲旋木雀","Certhia americana",[p_id("1512bhill",24)],["mdbhrp","2/2015"]);
  birds[j++] = new myBird("06-04-29T08:10","MIMIDAE ","Gray Catbird","灰嘲鸫","Dumetella carolinensis",[m_id("20160924_098_GrayCatbird"),p_id("1206brooksidebirding",5)],["mdlbrp","9/2016","mdwhrp","6/2012","Juvenile",""," at Brookside Gardens","溪边花园"]);
  birds[j++] = new myBird("06-03-18T09:06","MIMIDAE ","Northern Mockingbird","小嘲鸫","Mimus polyglottos",[p_id("1512bhill",9),p_id("1509charleston",16)],["mdbhrp","1/2015","arb","9/2015",gmap("Patriots Point",32.78888,-79.90322)+", Charleston, South Carolina, USA","美国南卡罗来纳州查尔斯顿爱国者海角"]);
  birds[j++] = new myBird("15-04-25T14:13","MIMIDAE ","Brown Thrasher","褐弯嘴嘲鸫","Toxostoma rufum",p_id("1512bhill",[26,33]),["mdbhrp","4/2015","mdbhrp","8/2015","Immature, with minor crossed-bill deformity","未成年，嘴略显交叉畸形"]);
  birds[j++] = new myBird("20-01-25T08:16","MIMIDAE ","Long-billed Thrasher","长弯嘴嘲鸫","Toxostoma longirostre",[p_id("2001txbirding",36)],["txsnwr","1/2020"]);
  birds[j++] = new myBird("19-05-12T09:21","MIMIDAE ","Curve-billed Thrasher","弯嘴嘲鸫","Toxostoma curvirostre",p_id("1905mxbird",[5,33]),["mxunam","5/2019","mxmcal","5/2019","Adult and juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","MIMIDAE ","LeConte's Thrasher","勒氏弯嘴嘲鸫","Toxostoma lecontei",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("15-01-08T12:54","MIMIDAE ","Pearly-eyed Thrasher","珠眼嘲鸫","Margarops fuscatus",[p_id("1501prbirding",49)],["prsanj","1/2015"],"peethr1");
//birds[j++] = new myBird("21-00-00T00:00","STURNIDA","Crested Myna","八哥","Acridotheres cristatellus",[p_id("1601china",)],["cnsbg","1/2016","Male"],"cremyn");
  birds[j++] = new myBird("16-01-04T08:04","STURNIDA","Red-billed Starling","丝光椋鸟","Spodiopsar sericeus",[p_id("1601china",9)],["cnjsxp","1/2016","Female"],"rebsta1");
  birds[j++] = new myBird("16-01-03T09:46","STURNIDA","White-cheeked Starling","灰椋鸟","Spodiopsar cineraceus",[p_id("1601china",3)],["cnbjjp","1/2016"],"whcsta1");
  birds[j++] = new myBird("06-03-18T08:21","STURNIDA","European Starling","欧椋鸟","Sturnus vulgaris",[m_id("20170506_036_EuropeanStarling"),p_id("1407michiganbirding",11)],["nycenp","5/2017","mimack","7/2014","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","BUPHAGID","Yellow-billed Oxpecker","黄嘴牛椋鸟","Buphagus africanus",[m_id("")],["mdbhrp","9/2015"],"yeboxp1");
  birds[j++] = new myBird("20-11-11T09:57","TURDIDAE","Mountain Bluebird","山蓝鸲","Sialia currucoides",m_id(["20201111_121_MountainBluebird","20201111_122_MountainBluebird"]),["mdswhf","11/2020","Immature male"]);
//birds[j++] = new myBird("21-00-00T00:00","TURDIDAE","Western Bluebird","西蓝鸲","Sialia mexicana",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("06-03-26T16:35","TURDIDAE","Eastern Bluebird","东蓝鸲","Sialia sialis",p_id("2009cobirding",[22,3]),["mdcovl","5/2009","Male","mdcovl","2/2009","Female"]);
  birds[j++] = new myBird("20-12-07T11:16","TURDIDAE","Townsend's Solitaire","坦氏孤鸫","Myadestes townsendi",[m_id("20201207_132_TownsendSolitaire")],["papapa","12/2020",gmap("Caledonia State Park",39.90866,-77.47876)+", Franklin County","","","富兰克林郡喀里多尼亚州立公园"]);
  birds[j++] = new myBird("15-06-21T09:04","TURDIDAE","Wood Thrush","棕林鸫","Hylocichla mustelina",[m_id("20150621_078_WoodThrush")],["mdpvsp","6/2015"]);
  birds[j++] = new myBird("15-07-08T19:10","TURDIDAE","Swainson's Thrush","斯氏夜鸫","Catharus ustulatus",[m_id("20170506_043_Swainson'sThrush"),p_id("1507birdingwest",12)],["nycenp","5/2017","waolnp","7/2015","",""," at Marymere Falls Trail","玛莉密瀑布小道"]);
  birds[j++] = new myBird("06-10-29T12:42","TURDIDAE","Hermit Thrush","隐夜鸫","Catharus guttatus",[p_id("1612savannah",2)],["scsnwr","12/2016"]);
  birds[j++] = new myBird("17-09-30T07:59","TURDIDAE","Gray-cheeked Thrush","灰颊夜鸫","Catharus minimus",m_id(sas(["20170930_109","20210504_060"],"_Gray-cheekedThrush")),["mdorpk","9/2017","mdmdmd","5/2021",gmap("Kinder Farm Park",39.1018,-76.58972)+", Anne Arundel County","","","安妮·阿伦德尔郡金德农场公园"]);
//birds[j++] = new myBird("21-00-00T00:00","TURDIDAE","Bicknell's Thrush","比氏夜鸫","Catharus bicknelli",[m_id("")],["mdorpk","9/2017"]);
  birds[j++] = new myBird("15-08-29T07:46","TURDIDAE","Veery","棕夜鸫","Catharus fuscescens",[p_id("1512bhill",36)],["mdbhrp","8/2015"]);
  birds[j++] = new myBird("16-01-05T08:16","TURDIDAE","Chinese Blackbird","乌鸫","Turdus mandarinus",p_id("1601china",[70,16]),["cnbjsp","1/2016","Male","cnjsxp","1/2016","Female"],"chibla1","乌鸫普通亚种");
//birds[j++] = new myBird("21-00-00T00:00","TURDIDAE","Common Blackbird","乌鸫","Turdus merula",p_id("1601china",[16,70]),["cnjsxp","1/2016","cnbjsp","1/2016"],"eurbla");
  birds[j++] = new myBird("17-04-02T07:18","TURDIDAE","Grey-backed Thrush","灰背鸫","Turdus hortulorum",[p_id("1704longyan",2)],["cnlydp","4/2017","Male"],"gybthr1");
//birds[j++] = new myBird("21-00-00T00:00","TURDIDAE","Red-throated Thrush","赤颈鸫","Turdus ruficollis",[p_id("1601china",)],["cnlydp","1/2016","Male"],"retthr1");
//birds[j++] = new myBird("21-00-00T00:00","TURDIDAE","Dusky Thrush","斑鸫","Turdus eunomus",[p_id("1601china",)],["cnbjjp","1/2016"],"dusthr2","斑鸫北方亚种");
  birds[j++] = new myBird("16-01-03T10:09","TURDIDAE","Naumann's Thrush","红尾鸫","Turdus naumanni",p_id("1601china",[8,72]),["cnbjjp","1/2016","arb","1/2016",wikiurl("Temple of Heaven","Temple of Heaven")+", Beijing, China","中国北京"+baikeurl("天坛","天坛公园")],"dusthr1");
  birds[j++] = new myBird("06-04-29T08:15","TURDIDAE","American Robin","旅鸫","Turdus migratorius",[m_id("20170506_042_AmericanRobin"),p_id("1206brooksidebirding",12),p_id("1204robin",2)],["nycenp","5/2017","mdwhrp","6/2012","Juvenile",""," at Brookside Gardens","溪边花园","mdmdmd","4/2012","Germantown","","","德国镇"]);
  birds[j++] = new myBird("15-01-08T07:25","TURDIDAE","Red-legged Thrush","红腿鸫","Turdus plumbeus",[p_id("1501prbirding",36)],["prsanj","1/2015"],"relthr1");
  birds[j++] = new myBird("19-05-16T08:28","TURDIDAE","Rufous-backed Thrush","棕背鸲鸫","Turdus rufopalliatus",[p_id("1905mxbird",31)],["mxmcal","5/2019"],"rubrob");
  birds[j++] = new myBird("18-12-04T07:50","TURDIDAE","Clay-colored Thrush","褐背鸫","Turdus grayi",[p_id("1812crbirding",29)],["crarol","12/2018"],"clcrob");
  birds[j++] = new myBird("16-01-06T09:03","MUSCICAP","Oriental Magpie-Robin","鹊鸲","Copsychus saularis",[p_id("1601china",26)],["cnjsxp","1/2016","Male"],"magrob");
//birds[j++] = new myBird("21-00-00T00:00","MUSCICAP","Bluethroat","蓝喉歌鸲","Luscinia svecica",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("16-01-05T09:41","MUSCICAP","Red-flanked Bluetail","红胁蓝尾鸲","Tarsiger cyanurus",p_id("1601china",[18,19]),["cnjsxp","1/2016","Female"],"refblu");
  birds[j++] = new myBird("17-04-03T06:42","MUSCICAP","Narcissus Flycatcher","黄眉姬鹟","Ficedula narcissina",[p_id("1704longyan",4)],["cnlydp","4/2017","Male"],"narfly");
  birds[j++] = new myBird("16-01-04T11:02","MUSCICAP","Daurian Redstart","北红尾鸲","Phoenicurus auroreus",p_id("1601china",[45,12,34]),["cnlynv","1/2016","Male","cnjsxp","1/2016","Female","cnjsxp","1/2016","Female"],"daured1");
  birds[j++] = new myBird("16-01-12T15:01","MUSCICAP","Plumbeous Water Redstart","红尾水鸲","Phoenicurus fuliginosus",p_id("1601china",[52,51]),["cnlydp","1/2016","Male","cnlydp","1/2016","Female"],"plured1");
  birds[j++] = new myBird("16-01-11T14:52","MUSCICAP","Stejneger's Stonechat","黑喉石鵖","Saxicola stejnegeri",p_id("1601china",[48,49]),["cnlydp","1/2016","Male","cnlydp","1/2016","Female"],"stonec7");
//birds[j++] = new myBird("21-00-00T00:00","CINCLIDA","American Dipper","美洲河乌","Cinclus mexicanus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","CHLOROPS","Blue-winged Leafbird","蓝翅叶鹎","Chloropsis moluccensis",[p_id("1601china",)],["cnlydp","1/2016","Male"],"blwlea1");
  birds[j++] = new myBird("16-01-05T08:00","CHLOROPS","Orange-bellied Leafbird ","橙腹叶鹎","Chloropsis hardwickii",p_id("1601china",[13,15]),["cnjsxp","1/2016","Male","cnjsxp","1/2016","Female"],"orblea1");
//birds[j++] = new myBird("21-00-00T00:00","DICAEIDA","Fire-breasted Flowerpecker","红胸啄花鸟","Dicaeum ignipectus",[p_id("1601china",)],["cnlydp","1/2016","Male"],"fibflo2");
  birds[j++] = new myBird("16-01-09T15:13","NECTARIN","Fork-tailed Sunbird","叉尾太阳鸟","Aethopyga christinae",p_id("1601china",[39,40]),["cnlydp","1/2016","Male","cnlydp","1/2016","Female"],"fotsun1");
  birds[j++] = new myBird("16-01-03T09:54","PASSERID","Eurasian Tree Sparrow","树麻雀","Passer montanus",[p_id("1601china",6)],["cnbjjp","1/2016"]);
  birds[j++] = new myBird("15-01-04T07:12","PASSERID","House Sparrow","家麻雀","Passer domesticus",m_id(sas("20150315_",["032_HouseSparrow(M)","031_HouseSparrow(F)"])),["mdmdmd","3/2015","Male, "+gmap("Havre de Grace",39.5446,-76.08766),"","","哈佛德格雷斯市","mdmdmd","3/2015","Female, "+gmap("Havre de Grace",39.5446,-76.08766),"","","哈佛德格雷斯市"]);
//birds[j++] = new myBird("21-00-00T00:00","PLOCEIDA","Red-billed Quelea","红嘴奎利亚雀","Quelea quelea",[p_id("1601china",)],["cnbjjp","1/2016"],"rebque1");
  birds[j++] = new myBird("15-01-05T14:42","ESTRILDI","Bronze Mannikin","铜色文鸟","Spermestes cucullata",p_id("1501prbirding",[27,28]),["prceci","1/2015","prceci","1/2015","Immature"],"broman1");
//birds[j++] = new myBird("21-00-00T00:00","ESTRILDI","Scaly-breasted Munia","斑文鸟","Lonchura punctulata",[p_id("1601china",)],["cnlydp","1/2016","Male"],"nutman");
  birds[j++] = new myBird("16-01-04T10:48","ESTRILDI","White-rumped Munia","白腰文鸟","Lonchura striata",p_id("1601china",[10,11]),["cnjsxp","1/2016"],"whrmun");
//birds[j++] = new myBird("21-00-00T00:00","VIDUIDAE","Village Indigobird","靛蓝维达雀","Vidua chalybeata",[m_id("")],["mdbhrp","9/2015"],"vilind");
//birds[j++] = new myBird("21-00-00T00:00","PEUCEDRA","Olive Warbler","橄榄绿森莺","Peucedramus taeniatus",[m_id("")],["mdbhrp","9/2015"],"oliwar");
//birds[j++] = new myBird("21-00-00T00:00","PRUNELLI","Alpine Accentor","领岩鹨","Prunella collaris",[m_id("")],["mdbhrp","9/2015"],"alpacc1");
  birds[j++] = new myBird("16-01-12T15:04","MOTACILL","Grey Wagtail","灰鹡鸰","Motacilla cinerea",[p_id("1601china",50)],["cnlydp","1/2016"],"grywag");
  birds[j++] = new myBird("16-01-06T09:42","MOTACILL","White Wagtail","白鹡鸰","Motacilla alba",p_id("1601china",[31,56,59,60]),["cnjsxp","1/2016","cnlydp","1/2016","cnxmjm","1/2016","cnxmjm","1/2016"],"whiwag");
  birds[j++] = new myBird("16-01-12T16:06","MOTACILL","Olive-backed Pipit","树鹨","Anthus hodgsoni",[p_id("1601china",53)],["cnlydp","1/2016"],"olbpip");
  birds[j++] = new myBird("15-07-08T17:06","MOTACILL","American Pipit","黄腹鹨","Anthus rubescens",[p_id("1507birdingwest",11)],["waolnp","7/2015","",""," at Hurricane Ridge","飓风脊"]);
//birds[j++] = new myBird("21-00-00T00:00","UROCYNCH","Przevalski's Finch","朱鹀","Urocynchramus pylzowi",[m_id("")],["mdbhrp","9/2015"],"przros1");
  birds[j++] = new myBird("16-01-03T09:36","FRINGILL","Brambling","燕雀","Fringilla montifringilla",p_id("1601china",[1,2]),["cnbjjp","1/2016","Female"],"brambl");
  birds[j++] = new myBird("20-11-16T10:43","FRINGILL","Evening Grosbeak","黄昏锡嘴雀","Hesperiphona vespertina",m_id(sas("20201116_12",["4","5","6"],"_EveningGrosbeak")),["vavava","11/2020","M"+(tmp1="ale, "+gmap("Shenandoah River Campus at Cool Spring Battlefield",39.13753,-77.87044)),"","",(tmp2="雪兰多大学冷泉战场临河校区"),"vavava","11/2020","Fem"+tmp1,"","",tmp2]);
  birds[j++] = new myBird("16-01-06T09:08","FRINGILL","Chinese Grosbeak","黑尾蜡嘴雀","Eophona migratoria",[p_id("1601china",27)],["cnjsxp","1/2016","Female"],"yebgro1");
  birds[j++] = new myBird("14-11-15T11:10","FRINGILL","Purple Finch","紫朱雀","Haemorhous purpureus",m_id(["20161016_104_PurpleFinch(M)","20161106_115_PurpleFinch(F)"]),["mdbhrp","10/2016","Male","mdcrvp","11/2016","Female"]);
  birds[j++] = new myBird("06-08-11T17:33","FRINGILL","House Finch","家朱雀","Haemorhous mexicanus",p_id("1412mckee-beshers",[1,35,2]),["mdmwma","8/2014","Male","mdmwma","11/2014","Male","mdmwma","8/2014","Female"]);
  birds[j++] = new myBird("16-01-16T09:02","FRINGILL","Grey-capped Greenfinch","金翅雀","Chloris sinica",[p_id("1601china",71)],["arb","1/2016",wikiurl("Temple of Heaven","Temple of Heaven")+", Beijing, China","中国北京"+baikeurl("天坛","天坛公园")],"origre");
  birds[j++] = new myBird("15-01-20T08:48","FRINGILL","Common Redpoll","白腰朱顶雀","Acanthis flammea",[p_id("1512bhill",7),m_id("20201027_115")],["mdbhrp","1/2015","Female, with a "+b_link("Pine Siskin")+" on the right","雌性，右边是一只"+b_link("松金翅雀"),"mdocci","10/2020","Female, "+gmap("Sunset Park",38.32765,-75.09067),"","","日落公园"]);
  birds[j++] = new myBird("21-01-24T11:53","FRINGILL","Hoary Redpoll","极北朱顶雀","Acanthis hornemanni",m_id(["20210124_017_HoaryRedpoll","20210124_018_HoaryRedpoll"]),["papapa","1/2021",gmap("N. Oak Lane",40.80544,-77.91384)+", State College","","","州立大学北橡树巷"]);
  birds[j++] = new myBird("17-02-11T11:47","FRINGILL","Red Crossbill","红交嘴雀","Loxia curvirostra",[m_id("20170211_020_RedCrossbill")],["papapa","2/2017","Males red, females yellow-green, "+gmap("Owl Creek Park",40.79602,-75.92817)+", Schuylkill County","雄性带红色，雌性黄绿色","","斯古吉尔郡鸮河公园"]);
  birds[j++] = new myBird("21-04-08T10:03","FRINGILL","White-winged Crossbill","白翅交嘴雀","Loxia leucoptera",m_id(["20210408_040_White-wingedCrossbill","20210408_041_White-wingedCrossbill"]),["mdmdmd","4/2021","Female, "+gmap("Hermitage Drive",39.25509,-76.8594)+", Ellicott City","","","埃利科特城埃尔米塔奇路"]);
//birds[j++] = new myBird("21-01-15T09:09","FRINGILL","European Goldfinch","红额金翅雀","Carduelis carduelis",[m_id("20210115_011_EuropeanGoldfinch")],["mdmdmd","1/2021",gmap("Mother Nature's Store",39.17974,-76.82792)+", Columbia","","","哥伦比亚市大自然母亲鸟店"],"eurgol");
  birds[j++] = new myBird("06-08-05T11:23","FRINGILL","American Goldfinch","美洲金翅雀","Spinus tristis",[p_id("1412mckee-beshers",9),p_id("1412mckee-beshers",10),p_id("1512bhill",44)],["mdmwma","8/2014","Male","mdmwma","8/2014","Female","mdbhrp","11/2015","Winter female"]);
  birds[j++] = new myBird("13-12-25T19:22","FRINGILL","Lesser Goldfinch","暗背金翅雀","Spinus psaltria",[p_id("1312bigbendbirding",19)],["txbbnp","12/2013","Female"]);
  birds[j++] = new myBird("15-01-20T08:48","FRINGILL","Pine Siskin","松金翅雀","Spinus pinus",[m_id("20201112_122_PineSiskin")],["mdbhrp","11/2020"]);
  birds[j++] = new myBird("18-12-04T06:30","FRINGILL","Yellow-throated Euphonia","黄喉歌雀","Euphonia hirundinacea",p_id("1812crbirding",[26,27]),["crarol","12/2018","Male","crarol","12/2018","Female"],"yeteup1");
  birds[j++] = new myBird("18-12-06T07:57","FRINGILL","Olive-backed Euphonia","绿背歌雀","Euphonia gouldi",[p_id("1812crbirding",72)],["crarol","12/2018","Female"],"olbeup1");
  birds[j++] = new myBird("18-12-04T06:27","FRINGILL","Tawny-capped Euphonia","黄顶歌雀","Euphonia anneae",[p_id("1812crbirding",19)],["crarol","12/2018","Male"],"taceup1");
  birds[j++] = new myBird("16-12-04T09:51","CALCARII","Lapland Longspur","铁爪鹀","Calcarius lapponicus",[m_id("20161204_136_LaplandLongspur")],["nyjbsp","12/2016","Female"]);
  birds[j++] = new myBird("16-12-04T08:10","CALCARII","Snow Bunting","雪鹀","Plectrophenax nivalis",[m_id("20161204_129_SnowBunting")],["nyjbsp","12/2016","Winter plumage"]);
//birds[j++] = new myBird("21-00-00T00:00","RHODINOC","Rosy Thrush-Tanager","鸫唐纳雀","Rhodinocichla rosea",[m_id("")],["mdbhrp","9/2015"],"rottan2");
//birds[j++] = new myBird("21-00-00T00:00","EMBERIZI","Pine Bunting","白头鹀","Emberiza leucocephalos",p_id("1601china",[1,2]),["cnbjjp","1/2016"],"pinbun");
  birds[j++] = new myBird("18-06-04T07:56","PASSEREL","Bachman's Sparrow","巴氏猛雀鹀","Peucaea aestivalis",[m_id("20180604_002_Bachman'sSparrow")],["sclobp","6/2018"]);
  birds[j++] = new myBird("16-07-16T07:02","PASSEREL","Grasshopper Sparrow","黄胸草鹀","Ammodramus savannarum",m_id(["20160716_086_GrasshopperSparrow","20160716_087_GrasshopperSparrow"]),["mdmdmd","7/2016",(t1=gmap("Oland Road",39.29524,-77.45986)+", Frederick County"),"","",(t2="弗雷德里克郡欧蓝德路"),"mdmdmd","7/2016","Juvenile, "+t1,"","",t2]);
//birds[j++] = new myBird("21-00-00T00:00","PASSEREL","Black-striped Sparrow","大黑纹头雀","Arremonops conirostris",[p_id("1501prbirding",2)],["crarol","4/2015"],"blsspa1");
//birds[j++] = new myBird("21-00-00T00:00","PASSEREL","Black-throated Sparrow","黑喉漠鹀","Amphispiza bilineata",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("16-01-31T08:24","PASSEREL","Lark Sparrow","鹨雀鹀","Chondestes grammacus",m_id(sas("20160131_0",["08","10"],"_LarkSparrow")),["mdcapc","1/2016"]);
  birds[j++] = new myBird("15-04-18T07:36","PASSEREL","Chipping Sparrow","棕顶雀鹀","Spizella passerina",[m_id("20160409_034_ChippingSparrow"),p_id("1612savannah",12)],["mdmdmd","4/2016",gmap("Agricultural History Farm Park",39.165,-77.1347),"","","农史农场公园","scjwwc","12/2016","Winter plumage"]);
  birds[j++] = new myBird("17-09-16T10:48","PASSEREL","Clay-colored Sparrow","褐雀鹀","Spizella pallida",[m_id("20170916_103_Clay-coloredSparrow")],["mdocci","9/2017",gmap("Sunset Park",38.32765,-75.09067),"","","日落公园"]);
//birds[j++] = new myBird("21-00-00T00:00","PASSEREL","Black-chinned Sparrow","黑颏雀鹀","Spizella atrogularis",[m_id("")],["mxunam","5/2019"]);
  birds[j++] = new myBird("15-04-12T08:59","PASSEREL","Field Sparrow","田雀鹀","Spizella pusilla",m_id(["20151018_108_FieldSparrow","20160417_040_FieldSparrow"]),["mdbmnt","10/2015","mdbhrp","4/2016"]);
  birds[j++] = new myBird("15-04-05T07:51","PASSEREL","Fox Sparrow","狐色雀鹀","Passerella iliaca",[m_id("20150405_051_FoxSparrow")],["mdbmnt","4/2015","Red form","红色形"]);
  birds[j++] = new myBird("15-03-21T14:05","PASSEREL","American Tree Sparrow","美洲树雀鹀","Spizelloides arborea",[m_id("20150321_044_AmericanTreeSparrow")],["mdswhf","3/2015"]);
  birds[j++] = new myBird("06-03-18T15:59","PASSEREL","Dark-eyed Junco","暗眼灯草鹀","Junco hyemalis",[p_id("1512bhill",6),m_id("20201112_123"),p_id("1507birdingwest",24)],["mdbhrp","1/2015","M"+(t1="ale, slate-colored form"),"雄"+(t2="性，石板色形"),"mdbhrp","11/2020","Fem"+t1,"雌"+t2,"wahobb","7/2015","Male, Oregon form","雄性，俄勒冈形"]);
  birds[j++] = new myBird("18-12-02T08:51","PASSEREL","Rufous-collared Sparrow","红领带鹀","Zonotrichia capensis",[p_id("1812crbirding",7)],["crsanj","12/2018",gmap("La Sabana Park",9.93542,-84.10246),"","","萨瓦纳公园"],"rucspa1");
  birds[j++] = new myBird("15-07-09T13:51","PASSEREL","White-crowned Sparrow","白冠带鹀","Zonotrichia leucophrys",[p_id("1507birdingwest",25),m_id("20160131_011_White-crownedSparrow")],["wahobb","7/2015","mdcapc","1/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","PASSEREL","Golden-crowned Sparrow","金冠带鹀","Zonotrichia atricapilla",[m_id("")],["vaonwr","2/2020"]);
  birds[j++] = new myBird("17-11-24T15:49","PASSEREL","Harris's Sparrow","赫氏带鹀","Zonotrichia querula",[m_id("20171124_126_Harris'sSparrow")],["mdmdmd","11/2017",gmap("Anacostia River Park",38.92403,-76.93735)+", Prince George's County","","","乔治王子郡安那考斯迪亚河畔小径"]);
  birds[j++] = new myBird("06-02-16T16:03","PASSEREL","White-throated Sparrow","白喉带鹀","Zonotrichia albicollis",m_id(["20161030_109_White-throatedSparrow","20161113_123_White-throatedSparrow"]),["mdmwma","10/2016","mdbmnt","11/2016"]);
  birds[j++] = new myBird("16-10-22T13:34","PASSEREL","Vesper Sparrow","栗肩雀鹀","Pooecetes gramineus",[m_id("20161022_105_VesperSparrow")],["mdmdmd","10/2016",gmap("Perryman Park",39.47289,-76.21604)+", Aberdeen","","","阿伯丁市佩里曼公园"]);
//birds[j++] = new myBird("21-00-00T00:00","PASSEREL","LeConte's Sparrow","莱氏沙鹀","Ammospiza leconteii",[m_id("")],["vaonwr","2/2020"]);
  birds[j++] = new myBird("16-05-29T15:32","PASSEREL","Seaside Sparrow","海滨沙鹀","Ammospiza maritima",m_id(["20160529_073_SeasideSparrow","20160529_068_SeasideSparrow"]),["mdsclr","5/2016","mdtrlr","5/2016"]);
  birds[j++] = new myBird("17-02-12T11:54","PASSEREL","Nelson's Sparrow","尼尔森沙鹀","Ammospiza nelsoni",m_id(["20170212_023_Nelson'sSparrow","20170212_024_Nelson'sSparrow"]),["deinri","2/2017"]);
  birds[j++] = new myBird("16-05-29T15:00","PASSEREL","Saltmarsh Sparrow","尖尾沙鹀","Ammospiza caudacuta",m_id(["20160529_065_SaltmarshSparrow","20160529_071_SaltmarshSparrow"]),["mdtrlr","5/2016","mdsclr","5/2016"]);
  birds[j++] = new myBird("17-05-27T07:23","PASSEREL","Henslow's Sparrow","亨氏草鹀","Centronyx henslowii",p_id("1705ohio",[1,2]),["ohbath","5/2017"]);
  birds[j++] = new myBird("13-07-17T18:46","PASSEREL","Savannah Sparrow","稀树草鹀","Passerculus sandwichensis",[p_id("1307alaskabirding",8)],["arb","7/2013",gmap("Potter Marsh",61.07619,-149.82917)+", Anchorage, Alaska, USA","美国阿拉斯加州安克雷奇波特沼泽"]);
  birds[j++] = new myBird("06-03-04T15:56","PASSEREL","Song Sparrow","歌带鹀","Melospiza melodia",m_id(["20161112_121_SongSparrow","20161030_108_SongSparrow"]),["mdbhrp","11/2016","mdmwma","10/2016","Partially leucistic"]);
  birds[j++] = new myBird("17-03-05T09:21","PASSEREL","Lincoln's Sparrow","林氏带鹀","Melospiza lincolnii",[m_id("20170305_030_Lincoln'sSparrow"),p_id("2001txbirding",23)],["vaonwr","3/2017","txsnwr","1/2020"]);
  birds[j++] = new myBird("06-02-19T13:42","PASSEREL","Swamp Sparrow","沼泽带鹀","Melospiza georgiana",[p_id("1412mckee-beshers",14)],["mdmwma","10/2014"]);
  birds[j++] = new myBird("19-05-12T09:54","PASSEREL","Canyon Towhee","棕喉唧鹀","Melozone fusca",[p_id("1905mxbird",15)],["mxunam","5/2019","",""]);
  birds[j++] = new myBird("19-05-12T09:44","PASSEREL","Rufous-crowned Sparrow","棕顶猛雀鹀","Aimophila ruficeps",[p_id("1905mxbird",9)],["mxunam","5/2019"]);
  birds[j++] = new myBird("21-01-06T10:52","PASSEREL","Green-tailed Towhee","绿尾唧鹀","Pipilo chlorurus",[m_id("20210106_005_Green-tailedTowhee")],["vavava","1/2021",gmap("Sky Meadows State Park",38.98744,-77.94284),"","","天空草地州立公园"]);
  birds[j++] = new myBird("12-06-09T09:55","PASSEREL","Eastern Towhee","棕胁唧鹀","Pipilo erythrophthalmus",m_id(["20150405_050_EasternTowhee(M)","20150628_079_EasternTowhee(I)"]),["mdbmnt","4/2015","Male","mdbmnt","6/2015","Juvenile"]);
//birds[j++] = new myBird("21-00-00T00:00","CALYPTOP","Eastern Chat-Tanager","东拟䳭唐纳雀","Calyptophilus frugivorus",[m_id("")],["mdbhrp","9/2015"],"eactan1","");
//birds[j++] = new myBird("21-00-00T00:00","PHAENICO","Black-crowned Palm-Tanager","黑顶棕榈唐纳雀","Phaenicophilus palmarum",[m_id("")],["mdbhrp","9/2015"],"bcptan1");
//birds[j++] = new myBird("21-00-00T00:00","NESOSPIN","Puerto Rican Tanager","波多黎各唐纳雀","Nesospingus speculiferus",[m_id("")],["mdbhrp","9/2015"],"purtan1");
//birds[j++] = new myBird("21-00-00T00:00","SPINDALI","Western Spindalis","纹头唐纳雀","Spindalis zena",[m_id("")],["mdbhrp","9/2015"],"wesspi");
//birds[j++] = new myBird("21-00-00T00:00","SPINDALI","Hispaniolan Spindalis","海地纹头唐纳雀","Spindalis dominicensis",[m_id("")],["mdbhrp","9/2015"],"hisspi");
  birds[j++] = new myBird("15-01-03T06:35","SPINDALI","Puerto Rican Spindalis","波多纹头唐纳雀","Spindalis portoricensis",p_id("1501prbirding",[11,54]),["arb","1/2015","Male, "+gmap("Ponce",18.01138,-66.61393)+", Puerto Rico, USA","雄性，美国波多黎各蓬塞市","prsanj","1/2015","Female"],"purspi");
//birds[j++] = new myBird("21-00-00T00:00","SPINDALI","Jamaican Spindalis","牙买加纹头唐纳雀","Spindalis nigricephala",[m_id("")],["mdbhrp","9/2015"],"jamspi");
//birds[j++] = new myBird("21-00-00T00:00","ZELEDONI","Wrenthrush","冠鹩森莺","Zeledonia coronata",[m_id("")],["mdbhrp","9/2015"],"wrenth1");
//birds[j++] = new myBird("21-00-00T00:00","TERETIST","Yellow-headed Warbler","黄头灰森莺","Teretistris fernandinae",[m_id("")],["mdbhrp","9/2015"],"yehwar1");
  birds[j++] = new myBird("15-05-09T10:41","ICTERIID","Yellow-breasted Chat","黄胸大鵖莺","Icteria virens",[p_id("1507birdingwest",1)],["nvdnwr","7/2015"],"","");
  birds[j++] = new myBird("21-04-17T12:09","ICTERIDA","Yellow-headed Blackbird","黄头黑鹂","Xanthocephalus xanthocephalus",[m_id("20210417_049_Yellow-headedBlackbird")],["vavava","4/2021","Female/immature male, "+gmap("Brandywine Ave",37.38551,-77.43008)+", Richmond","","","里士满市布兰迪维因街"]);
  birds[j++] = new myBird("17-05-27T07:28","ICTERIDA","Bobolink","刺歌雀","Dolichonyx oryzivorus",[p_id("1705ohio",3)],["ohbath","5/2017","Male"]);
//birds[j++] = new myBird("21-00-00T00:00","ICTERIDA","Western Meadowlark","西草地鹨","Sturnella neglecta",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("16-03-27T08:18","ICTERIDA","Eastern Meadowlark","东草地鹨","Sturnella magna",m_id(sas("20160327_03",["1","2"],"_EasternMeadowlark")),["ncoutb","3/2016","",""," at Cape Hatteras Cape Point Campground","哈特拉斯角野营地"]);
  birds[j++] = new myBird("18-12-04T06:39","ICTERIDA","Montezuma Oropendola","褐拟棕鸟","Psarocolius montezuma",[p_id("1812crbirding",22)],["crarol","12/2018"],"monoro1");
  birds[j++] = new myBird("21-04-10T11:44","ICTERIDA","Scott's Oriole","斯氏拟鹂","Icterus parisorum",m_id(["20210410_043_ScottOriole","20210410_044_ScottOriole"]),["papapa","4/2021","Male, "+gmap("Morrison Mill Road",39.8451,-76.05827)+", Lancaster County","","","兰开斯特郡莫里森磨坊路"]);
  birds[j++] = new myBird("20-01-24T11:22","ICTERIDA","Altamira Oriole","橙头拟鹂","Icterus gularis",[p_id("2001txbirding",26)],["txsnwr","1/2020"]);
  birds[j++] = new myBird("15-07-12T09:26","ICTERIDA","Bullock's Oriole","布氏拟鹂","Icterus bullockii",[p_id("1507birdingwest",40)],["cabake","7/2015","Female, "+gmap("Yokuts Park",35.37584,-119.04749),"","","约库特公园"]);
  birds[j++] = new myBird("06-05-24T18:03","ICTERIDA","Baltimore Oriole","橙腹拟鹂","Icterus galbula",[m_id("20150830_093_BaltimoreOriole(M)"),p_id("1812crbirding",95),m_id("20170618_077_BaltimoreOriole")],["mdwhrp","8/2015","Male","crsanj","12/2018","Female, "+gmap("Morazán Park",9.93547,-84.07544),"","","莫拉桑公园","mdcovl","6/2017","Nest"]);
  birds[j++] = new myBird("15-01-03T13:57","ICTERIDA","Venezuelan Troupial","委内瑞拉拟黄鹂","Icterus icterus",[p_id("1501prbirding",20)],["arb","1/2015",gmap("Guanica Dry Forest",17.95422,-66.85136)+", Puerto Rico, USA","美国波多黎各瓜尼卡干燥森林"],"ventro1");
//birds[j++] = new myBird("21-00-00T00:00","ICTERIDA","Hooded Oriole","巾冠拟鹂","Icterus cucullatus",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("06-07-01T09:43","ICTERIDA","Orchard Oriole","圃拟鹂","Icterus spurius",[p_id("1604asheville",11),p_id("1604asheville",10),p_id("1505bombayhook",12)],["ncllmp","4/2016","Male","ncllmp","4/2016","Female","debnwr","5/2015","Juvenile male"]);
//birds[j++] = new myBird("21-00-00T00:00","ICTERIDA","Tricolored Blackbird","三色黑鹂","Agelaius tricolor",[m_id("")],["njscmm","5/2015"]);
  birds[j++] = new myBird("06-07-22T10:00","ICTERIDA","Red-winged Blackbird","红翅黑鹂","Agelaius phoeniceus",[p_id("1505capemay",9),p_id("1206brooksidebirding",8),m_id("20170611_071_Red-wingedBlackbird(I)")],["njscmm","5/2015","Male","mdwhrp","6/2012","Female",""," at Brookside Gardens","溪边花园","mdmwma","6/2017","Immature"]);
//birds[j++] = new myBird("21-00-00T00:00","ICTERIDA","Shiny Cowbird","紫辉牛鹂","Molothrus bonariensis",[m_id("")],["flevnp","6/2016"]);
  birds[j++] = new myBird("19-05-12T10:37","ICTERIDA","Bronzed Cowbird","铜色牛鹂","Molothrus aeneus",[p_id("1905mxbird",22)],["mxunam","5/2019","Male"]);
  birds[j++] = new myBird("06-07-16T09:30","ICTERIDA","Brown-headed Cowbird","褐头牛鹂","Molothrus ater",[m_id("20160417_039_Brown-headedCowbird(M)"),p_id("1412mckee-beshers",29)],["mdbhrp","4/2016","Male","mdmwma","11/2014","Female"]);
  birds[j++] = new myBird("18-12-06T13:54","ICTERIDA","Melodious Blackbird","艳拟鹂","Dives dives",[p_id("1812crbirding",80)],["crarol","12/2018"],"melbla1");
  birds[j++] = new myBird("14-11-11T12:32","ICTERIDA","Rusty Blackbird","锈色黑鹂","Euphagus carolinus",p_id("1412mckee-beshers",[27,28]),["mdmwma","11/2014","Male","mdmwma","11/2014","Female"]);
  birds[j++] = new myBird("15-07-12T09:23","ICTERIDA","Brewer's Blackbird","蓝头黑鹂","Euphagus cyanocephalus",p_id("1507birdingwest",[39,38]),["cabake","7/2015","M"+(t1="ale, "+gmap("Yokuts Park",35.37584,-119.04749)),"","","约库特公园","cabake","7/2015","Fem"+t1,"","","约库特公园"]);
  birds[j++] = new myBird("06-04-11T17:11","ICTERIDA","Common Grackle","普通拟八哥","Quiscalus quiscula",["2006cobirding/CommonGrackle_20060411_002","2006cobirding/CommonGrackle_20060622_007",p_id("2009cobirding",39)],["mdcocn","4/2006","mdcocn","6/2006","mdcocn","7/2009","Immature"],6524);
  birds[j++] = new myBird("15-01-02T09:39","ICTERIDA","Greater Antillean Grackle","黑拟八哥","Quiscalus niger",p_id("1501prbirding",[6,7]),["arb","1/2015",gmap("Rincón",18.34083,-67.25537)+", Puerto Rico, USA","美国波多黎各林孔市"],"gragra1","黑拟八哥");
  birds[j++] = new myBird("11-12-30T11:34","ICTERIDA","Boat-tailed Grackle","宽尾拟八哥","Quiscalus major",p_id("1612savannah",[16,17]),["arb","12/2016","Male"+(t1=", "+gmap("Tybee Island",31.98666,-80.85212)+", Georgia, USA"),"雄性"+(t2="，美国乔治亚州泰碧岛"),"arb","12/2016","Female"+t1,"雌性"+t2]);
  birds[j++] = new myBird("18-12-02T06:19","ICTERIDA","Great-tailed Grackle","大尾拟八哥","Quiscalus mexicanus",p_id("1812crbirding",[3,9]),["crsanj","12/2018","Male, "+gmap("Park of Social Guarantees",9.93167,-84.07648),"","","社会保障公园","crsanj","12/2018","Female, "+gmap("La Sabana Park",9.93542,-84.10246),"","","萨瓦纳公园"]);
  birds[j++] = new myBird("15-05-24T08:16","PARULIDA","Ovenbird","橙顶灶莺","Seiurus aurocapilla",[p_id("1505puffin",8),m_id("20170506_051_Ovenbird")],["melocp","5/2015","nycenp","5/2017"]);
  birds[j++] = new myBird("16-04-24T10:25","PARULIDA","Worm-eating Warbler","食虫莺","Helmitheros vermivorum",[p_id("1604asheville",15)],["nccrsp","4/2016"]);
  birds[j++] = new myBird("15-01-06T09:16","PARULIDA","Louisiana Waterthrush","白眉灶莺","Parkesia motacilla",[p_id("1501prbirding",31),p_id("2020lbrp",9)],["arb","1/2015",gmap("El Yunque National Forest")+", Puerto Rico, USA","美国波多黎各云盖热带雨林","mdlbrp","6/2020"]);
  birds[j++] = new myBird("16-05-14T09:55","PARULIDA","Northern Waterthrush","黄眉灶莺","Parkesia noveboracensis",[m_id("20160514_054_NorthernWaterthrush")],["nyjbwr","5/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Golden-winged Warbler","金翅虫森莺","Vermivora chrysoptera",[m_id("")],["scpatp","9/2015"]);
  birds[j++] = new myBird("15-08-30T08:54","PARULIDA","Blue-winged Warbler","蓝翅虫森莺","Vermivora cyanoptera",[m_id("20150830_091_Blue-wingedWarbler")],["mdwhrp","8/2015","Male",""," at Brookside Gardens","溪边花园"]);
  birds[j++] = new myBird("15-05-24T07:17","PARULIDA","Black-and-white Warbler","黑白森莺","Mniotilta varia",[m_id("20210510_069_Black-and-whiteWarbler"),p_id("1512bhill",39)],["mdlbrp","5/2021","Male","mdbhrp","9/2015","Female"]);
  birds[j++] = new myBird("06-07-01T10:10","PARULIDA","Prothonotary Warbler","蓝翅黄森莺","Protonotaria citrea",[m_id("20200617_045_ProthonotaryWarbler"),"2006cobirding/ProthonotaryWarbler_F_20060730_009",m_id("20170611_073_Prothonotary(I)")],["mdmwma","6/2020","Male","mdcorl","7/2006","Female","mdmwma","6/2017","Immature"]);
  birds[j++] = new myBird("21-05-01T11:52","PARULIDA","Swainson's Warbler","白眉食虫莺","Limnothlypis swainsonii",[m_id("20210501_057_SwainsonsWarbler")],["papapa","5/2021",gmap("Black Moshannon State Park",40.91271,-78.05921)+", Centre County","","","中心郡黑莫香农州立公园"]);
  birds[j++] = new myBird("16-04-24T09:47","PARULIDA","Tennessee Warbler","灰冠虫森莺","Leiothlypis peregrina",[p_id("1604asheville",14),m_id("20201020_106_TennesseeWarbler"),p_id("1812crbirding",4)],["nccrsp","4/2016","mdmwma","10/2020","Fall plumage","crsanj","12/2018",gmap("Park of Social Guarantees",9.93167,-84.07648),"","","社会保障公园"]);
  birds[j++] = new myBird("15-07-10T10:26","PARULIDA","Orange-crowned Warbler","橙冠虫森莺","Leiothlypis celata",[p_id("1507birdingwest",29)],["arb","7/2015",gmap("Cannon Beach",45.88457,-123.96488)+", Oregon, USA","美国俄勒冈州卡农海滩"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Colima Warbler","黄腰虫森莺","Leiothlypis crissalis",[m_id("")],["mdbhrp","9/2015"],"colwar");
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Lucy's Warbler","赤腰虫森莺","Leiothlypis luciae",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("17-09-02T07:39","PARULIDA","Nashville Warbler","黄喉虫森莺","Leiothlypis ruficapilla",[p_id("1709algonquin",1),m_id("20210506_061_NashvilleWarbler")],["caalgp","9/2017","mdlbrp","5/2021"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Virginia's Warbler","黄胸虫森莺","Leiothlypis virginiae",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Connecticut Warbler","灰喉地莺","Oporornis agilis",[m_id("")],["papapa","9/2021","Immature, "+gmap("Logan Square",39.95575,-75.16896)+", Philadelphia","","","费城洛根广场"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","MacGillivray's Warbler","灰头地莺","Geothlypis tolmiei",[p_id("1905mxbird",)],["mxunam","5/2019"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Mourning Warbler","黑胸地莺","Geothlypis philadelphia",[m_id("")],["papapa","5/2021",npsurl("John_Heinz",true,"John Heinz National Wildlife Refuge"),"","",npsurl("John_Heinz",true,"约翰·亨氏国家野生动物保护区")]);
  birds[j++] = new myBird("20-05-19T09:11","PARULIDA","Kentucky Warbler","黄腹地莺","Geothlypis formosa",[p_id("2020lbrp",4)],["mdlbrp","5/2020"]);
  birds[j++] = new myBird("06-04-30T08:59","PARULIDA","Common Yellowthroat","黄喉地莺","Geothlypis trichas",[m_id("20150426_062_CommonYellowthroat(M)"),p_id("1505bombayhook",11),m_id("20170930_112_CommonYellowthroat(IM)")],["mdbmnt","4/2015","Male","debnwr","5/2015","Female","mdorpk","9/2017","Immature male"]);
  birds[j++] = new myBird("19-05-12T09:50","PARULIDA","Hooded Yellowthroat","纳氏黄喉地莺","Geothlypis nelsoni",p_id("1905mxbird",[13,12]),["mxunam","5/2019","Male"],"hooyel1");
  birds[j++] = new myBird("16-04-24T10:49","PARULIDA","Hooded Warbler","黑枕威森莺","Setophaga citrina",p_id("1604asheville",[18,17]),["nccrsp","4/2016","Male"]);
  birds[j++] = new myBird("14-07-07T16:57","PARULIDA","American Redstart","橙尾鸲莺","Setophaga ruticilla",[p_id("1407michiganbirding",20),m_id("20170826_090_AmericanRedstart(F)")],["mimack","7/2014","Male","mdmwma","8/2017","Female"]);
  birds[j++] = new myBird("21-10-05T11:37","PARULIDA","Kirtland's Warbler","黑纹背林莺","Setophaga kirtlandii",m_id(sas("20211005_12",["1","2"],"_KirtlandWarbler")),["mdmdmd","10/2021","Female/immature, "+gmap("Swann Park",39.26556,-76.62025)+", Baltimore","","","巴尔的摩市斯旺公园"]);
  birds[j++] = new myBird("16-09-03T08:39","PARULIDA","Cape May Warbler","栗颊林莺","Setophaga tigrina",m_id(["20160903_093_CapeMayWarbler(M)","20160903_094_CapeMayWarbler(M)"]),["mdbhrp","9/2016","Male, nonbreeding plumage"]);
  birds[j++] = new myBird("16-05-15T07:51","PARULIDA","Cerulean Warbler","蓝林莺","Setophaga cerulea",m_id(["20160515_064_CeruleanWarbler","20160515_063_CeruleanWarbler"]),["mdpvsp","5/2016"],4734);
  birds[j++] = new myBird("15-05-03T08:33","PARULIDA","Northern Parula","北森莺","Setophaga americana",[m_id("20150503_072_NorthernParula(M)"),p_id("1505puffin",4),p_id("2020lbrp",17),p_id("2020lbrp",16)],["mdcopl","5/2015","Male","melocp","5/2015","Female","mdlbrp","9/2020","Immature male","mdlbrp","9/2020","Immature female"]);
  birds[j++] = new myBird("15-05-24T07:55","PARULIDA","Magnolia Warbler","纹胸林莺","Setophaga magnolia",[m_id("20170506_038_MagnoliaWarbler(M)"),p_id("1512bhill",41)],["nycenp","5/2017","Male","mdbhrp","9/2015","Female"]);
  birds[j++] = new myBird("18-12-05T14:14","PARULIDA","Bay-breasted Warbler","栗胸林莺","Setophaga castanea",[p_id("1812crbirding",68)],["crarol","12/2018","Nonbreeding female/immature male"]);
  birds[j++] = new myBird("16-04-23T14:07","PARULIDA","Blackburnian Warbler","橙胸林莺","Setophaga fusca",[p_id("1705ohio",12),p_id("1604asheville",4)],["ohmage","5/2017","Male","ncbpkw","4/2016","Male"]);
  birds[j++] = new myBird("15-04-26T09:16","PARULIDA","Yellow Warbler","黄林莺","Setophaga petechia",m_id(["20150426_063_YellowWarbler(M)","20160514_047_YellowWarbler(F)","20160514_048_YellowWarbler"]),["mdbmnt","4/2015","Male","nyjbwr","5/2016","Female","nyjbwr","5/2016","Nest"]);
  birds[j++] = new myBird("15-09-12T07:38","PARULIDA","Chestnut-sided Warbler","栗胁林莺","Setophaga pensylvanica",[m_id("20210506_063_Chestnut-sidedWarbler"),p_id("1812crbirding",23),m_id("20170827_094_Chestnut-sidedWarbler")],["mdlbrp","5/2021","Male","crarol","12/2018","Female","mdlbrp","8/2017","Immature"]);
  birds[j++] = new myBird("17-05-28T10:42","PARULIDA","Blackpoll Warbler","白颊林莺","Setophaga striata",[p_id("2020lbrp",3),p_id("1705ohio",11)],["mdlbrp","5/2020","Male","ohmage","5/2017","Female"]);
  birds[j++] = new myBird("15-05-10T12:54","PARULIDA","Black-throated Blue Warbler","黑喉蓝林莺","Setophaga caerulescens",m_id(["20201020_101_Black-throatedBlueWarbler","20201027_118_Black-throatedBlueWarbler"]),["mdmwma","10/2020","Male","mdocci","10/2020","Female, "+gmap("Sunset Park",38.32765,-75.09067),"","","日落公园"]);
  birds[j++] = new myBird("06-04-09T10:02","PARULIDA","Palm Warbler","棕榈林莺","Setophaga palmarum",[p_id("1604asheville",9),m_id("20151025_112_PalmWarbler"),m_id("20210503_059_PalmWarbler")],["ncllmp","4/2016","mdbmnt","10/2015","Fall plumage","mdlbrp","5/2021","Western","西部亚种"]);
  birds[j++] = new myBird("15-07-26T10:08","PARULIDA","Pine Warbler","松莺","Setophaga pinus",p_id("1612savannah",[14,13]),["scjwwc","12/2016","Male"]);
  birds[j++] = new myBird("06-04-02T11:16","PARULIDA","Yellow-rumped Warbler","黄腰林莺","Setophaga coronata",[p_id("1604asheville",8),m_id("20151101_121_Yellow-rumpedWarbler(I)")],["ncllmp","4/2016","Male, Myrtle form","雄性，长春花形","mdbmnt","11/2015","Female/immature, Myrtle form","雌性/未成年，长春花形"]);
  birds[j++] = new myBird("19-08-30T09:11","PARULIDA","Yellow-throated Warbler","黄喉林莺","Setophaga dominica",[m_id("20190830_012_Yellow-throatedWarbler")],["flapop","8/2019"]);
  birds[j++] = new myBird("15-05-09T09:59","PARULIDA","Prairie Warbler","草原林莺","Setophaga discolor",m_id(["20170709_082_PrairieWarbler(M)","20190830_011_PrairieWarbler(F)","20170709_081_PrairieWarbler(I)"]),["mdlbrp","7/2017","Male","flapop","8/2019","Female","mdlbrp","7/2017","Immature"]);
  birds[j++] = new myBird("15-01-03T10:58","PARULIDA","Adelaide's Warbler","黄腹灰林莺","Setophaga adelaidae",[p_id("1501prbirding",18)],["prcnwr","1/2015"],"adewar1");
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Grace's Warbler","黄喉纹胁林莺","Setophaga graciae",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Black-throated Gray Warbler","黑喉灰林莺","Setophaga nigrescens",[m_id("")],["mdhadg","12/2016"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Townsend's Warbler","黄眉林莺","Setophaga townsendi",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Hermit Warbler","黄脸林莺","Setophaga occidentalis",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Golden-cheeked Warbler","金颊黑背林莺","Setophaga chrysoparia",[m_id("")],["mdbhrp","9/2015"]);
  birds[j++] = new myBird("15-09-26T08:56","PARULIDA","Black-throated Green Warbler","黑喉绿林莺","Setophaga virens",[p_id("1705ohio",16),p_id("1609vtcanbirding",9)],["ohmage","5/2017","Male","vtwwma","9/2016","Female"]);
  birds[j++] = new myBird("18-12-05T09:48","PARULIDA","Buff-rumped Warbler","黄腰王森莺","Myiothlypis fulvicauda",[p_id("1812crbirding",57)],["crarol","12/2018"],"burwar1");
  birds[j++] = new myBird("17-08-19T08:25","PARULIDA","Canada Warbler","加拿大威森莺","Cardellina canadensis",m_id(["20200525_027_CanadaWarbler","20170826_092_CanadaWarbler"]),["mdcorl","5/2020","Male","mdmwma","8/2017","Female"]);
  birds[j++] = new myBird("21-03-21T12:39","PARULIDA","Wilson's Warbler","黑头威森莺","Cardellina pusilla",[m_id("20210321_034_WilsonWarbler")],["vavava","3/2021","Male, "+gmap("Moore House Road",37.22262,-76.48905)+", Yorktown","","","约克镇摩尔庄园路"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Red-faced Warbler","红脸森莺","Cardellina rubrifrons",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","PARULIDA","Painted Redstart","彩鸲莺","Myioborus pictus",[m_id("")],["mdbhrp","9/2015"]);
//birds[j++] = new myBird("21-00-00T00:00","MITROSPI","Dusky-faced Tanager","乌脸唐纳雀","Mitrospingus cassinii",[m_id("")],["mdbhrp","9/2015"],"duftan1");
//birds[j++] = new myBird("21-00-00T00:00","CARDINAL","Hepatic Tanager","暗红丽唐纳雀","Piranga hepatica",[p_id("",87)],["crarol","12/2018","Male"]);
  birds[j++] = new myBird("15-05-02T08:21","CARDINAL","Summer Tanager","玫红丽唐纳雀","Piranga rubra",[p_id("1812crbirding",87),p_id("1812crbirding",32),m_id("20170625_079_SummerTanager(M)")],["crarol","12/2018","Male","crarol","12/2018","Female","mdcovl","6/2017","Male"]);
  birds[j++] = new myBird("15-05-03T08:03","CARDINAL","Scarlet Tanager","猩红丽唐纳雀","Piranga olivacea",[p_id("2020lbrp",10),m_id("20160514_051_ScarletTanager(F)"),m_id("20160514_052_ScarletTanager(M)")],["mdlbrp","6/2020","Male","nyjbwr","5/2016","Female","nyjbwr","5/2016","Male"]);
  birds[j++] = new myBird("21-01-30T11:53","CARDINAL","Western Tanager","黄腹丽唐纳雀","Piranga ludoviciana",[m_id("20210130_020_WesternTanager")],["vavava","1/2021","Female, "+gmap("Bacon Street",37.2323,-76.50624)+", Yorktown","","","约克镇培根街"]);
  birds[j++] = new myBird("14-08-30T16:45","CARDINAL","Rose-breasted Grosbeak","玫胸白斑翅雀","Pheucticus ludovicianus",[p_id("1409fingerlake",6),p_id("1512bhill",42)],["arb","8/2014","Female, "+gmap("Salmon Creek Road",42.5912,-76.53306)+", Tompkins County, New York, USA","雌性，美国纽约州汤普金斯郡鲑鱼河路","mdbhrp","9/2015","Immature male"]);
  birds[j++] = new myBird("19-05-12T09:59","CARDINAL","Black-headed Grosbeak","黑头白斑翅雀","Pheucticus melanocephalus",[p_id("1905mxbird",16)],["mxunam","5/2019","Male"]);
  birds[j++] = new myBird("05-12-24T16:03","CARDINAL","Northern Cardinal","主红雀","Cardinalis cardinalis",[p_id("1604asheville",16),m_id("20170108_006_NorthernCardinal(F)")],["nccrsp","4/2016","Male","mdmapp","1/2017","Female"]);
  birds[j++] = new myBird("13-12-25T18:10","CARDINAL","Pyrrhuloxia","灰额主红雀","Cardinalis sinuatus",p_id("1312bigbendbirding",[16,17]),["txbbnp","12/2013","Male","txbbnp","12/2013","Female"]);
  birds[j++] = new myBird("17-05-24T07:33","CARDINAL","Dickcissel","美洲雀","Spiza americana",m_id(["20170524_065_Dickcissel(M)","20170524_064_Dickcissel(F)"]),["mdmdmd","5/2017","Male"+(t1=", "+gmap("Underwood Road",39.33038,-76.97791)+", Howard County"),"","","霍华德郡安德伍德路","mdmdmd","5/2017","Female"+t1,"","","霍华德郡安德伍德路"]);
  birds[j++] = new myBird("14-08-10T11:40","CARDINAL","Blue Grosbeak","斑翅蓝彩鹀","Passerina caerulea",[p_id("1505bombayhook",13)],["debnwr","5/2015","Male"]);
  birds[j++] = new myBird("06-06-08T15:10","CARDINAL","Indigo Bunting","靛彩鹀","Passerina cyanea",[p_id("1505bombayhook",14),m_id("20170709_083_IndigoBunting(F)")],["debnwr","5/2015","Male","mdlbrp","7/2017","Female"]);
  birds[j++] = new myBird("16-06-08T16:12","CARDINAL","Painted Bunting","丽彩鹀","Passerina ciris",p_id("1606florida",[1,2]),["schbsp","6/2016","Male","schbsp","6/2016","Female"]);
  birds[j++] = new myBird("18-12-04T08:56","THRAUPID","Green Honeycreeper","绿旋蜜雀","Chlorophanes spiza",p_id("1812crbirding",[39,40]),["crarol","12/2018","Male","crarol","12/2018","Female"],"grehon1");
  birds[j++] = new myBird("18-12-04T09:45","THRAUPID","Red-legged Honeycreeper","红脚旋蜜雀","Cyanerpes cyaneus",p_id("1812crbirding",[36,37,38]),["crarol","12/2018","Male","crarol","12/2018","Female","crarol","12/2018","Male, nonbreeding plumage"],"relhon1");
  birds[j++] = new myBird("18-12-08T08:46","THRAUPID","Grayish Saltator","灰背舞雀","Saltator coerulescens",[p_id("1812crbirding",96)],["crsanj","12/2018",gmap("Morazán Park",9.93547,-84.07544),"","","莫拉桑公园"],"grasal1");
  birds[j++] = new myBird("18-12-05T07:00","THRAUPID","Buff-throated Saltator","黄喉舞雀","Saltator maximus",[p_id("1812crbirding",52)],["crarol","12/2018"],"butsal1");
  birds[j++] = new myBird("15-01-01T14:06","THRAUPID","Bananaquit","曲嘴森莺","Coereba flaveola",[p_id("1501prbirding",2),p_id("1812crbirding",17)],["arb","1/2015",gmap("Bayamón",18.4248,-66.15996)+", Puerto Rico, USA","美国波多黎各巴亚蒙市","crarol","12/2018"],"banana");
  birds[j++] = new myBird("18-12-06T09:09","THRAUPID","Yellow-faced Grassquit","黄脸草雀","Tiaris olivaceus",p_id("1812crbirding",[76,77]),["crarol","12/2018","Male","crarol","12/2018","Female"],"yefgra1");
  birds[j++] = new myBird("15-01-07T07:05","THRAUPID","Black-faced Grassquit","黑脸草雀","Melanospiza bicolor",p_id("1501prbirding",[50,33]),["prsanj","1/2015","Male","prsanj","1/2015","Female"],"bkfgra");
  birds[j++] = new myBird("18-12-05T06:57","THRAUPID","Scarlet-rumped Tanager","红腰厚嘴唐纳雀","Ramphocelus passerinii",[p_id("1812crbirding",51)],["crarol","12/2018","Male"],"pastan1");
  birds[j++] = new myBird("18-12-06T13:54","THRAUPID","Variable Seedeater","杂色食籽雀","Sporophila corvina",p_id("1812crbirding",[82,81]),["crarol","12/2018","Male","crarol","12/2018","Female"],"varsee3");
  birds[j++] = new myBird("15-01-07T07:12","THRAUPID","Saffron Finch","橙黄雀鹀","Sicalis flaveola",p_id("1501prbirding",[34,55]),["prsanj","1/2015","prsanj","1/2015","Juvenile"],"saffin");
  birds[j++] = new myBird("19-05-12T11:07","THRAUPID","Cinnamon-bellied Flowerpiercer","肉桂腹刺花鸟","Diglossa baritula",[p_id("1905mxbird",18)],["mxunam","5/2019","Female"],"cibflo1");
  birds[j++] = new myBird("18-12-04T09:09","THRAUPID","Blue-gray Tanager","灰蓝裸鼻雀","Thraupis episcopus",[p_id("1812crbirding",34)],["crarol","12/2018"],"bugtan");
  birds[j++] = new myBird("18-12-04T07:00","THRAUPID","Palm Tanager","棕榈裸鼻雀","Thraupis palmarum",[p_id("1812crbirding",28)],["crarol","12/2018"],"paltan1");
  birds[j++] = new myBird("18-12-03T16:02","THRAUPID","Golden-hooded Tanager","金头唐加拉雀","Stilpnia larvata",[p_id("1812crbirding",16)],["crarol","12/2018"],"gohtan1");
  birds[j++] = new myBird("18-12-05T13:58","THRAUPID","Bay-headed Tanager","栗头唐加拉雀","Tangara gyrola",[p_id("1812crbirding",65)],["crarol","12/2018"],"bahtan1");
  birds[j++] = new myBird("18-12-03T15:50","THRAUPID","Emerald Tanager","翠绿唐加拉雀","Tangara florida",[p_id("1812crbirding",15)],["crarol","12/2018"],"emetan1");
//-->