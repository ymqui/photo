<!--
var loc_cnts  = {};
var hz_cnts   = {};
var misc_cnts = [];
var dig_cnts  = 0;
var pic_cnts  = 0;
var ebirdlist = [];
var cnrexp    = /[\u3400-\u9FBF]/;

function myOrder(info){
    return info.map((el)=>({name:el[0]+"IFORMES",cname:el[1]+"目",family:(el.slice(2)).reduce((fam,ele,ind,ar)=>{if(!cnrexp.test(ele))fam.push({name:ele+"IDAE",cname:ar[ind+1]+"科"}); return fam;},[])}));
}

//https://www.avilist.org/
//http://www.worldbirdnames.org/ioc-lists/master-list-2/
//https://dongniao.net/taxonomy.html
var orders = myOrder([
    ["STRUTHION","鸵鸟","STRUTHION","鸵鸟"],
    ["CASUARI","鹤鸵","CASUARI","鹤鸵"],
    ["APTERYG","鹬鸵","APTERYG","鹬鸵"],
    ["RHE","美洲鸵鸟","RHE","美洲鸵鸟"],
    ["TINAM","䳍形","TINAM","䳍"],
    ["ANSER","雁形","ANHIM","叫鸭","ANSERANAT","鹊雁","ANAT","鸭"],
    ["GALL","鸡形","MEGAPODI","冢雉","CRAC","凤冠雉","NUMID","珠鸡","ODONTOPHOR","齿鹑","PHASIAN","雉"],
    ["PHOENICOPTER","红鹳","PHOENICOPTER","红鹳"],
    ["PODICIPED","䴙䴘","PODICIPED","䴙䴘"],
    ["MUSOPHAG","蕉鹃","MUSOPHAG","蕉鹃"],
    ["OTID","鸨形","OTID","鸨"],
    ["CUCUL","鹃形","CUCUL","杜鹃"],
    ["MESITORNITH","拟鹑","MESITORNITH","拟鹑"],
    ["PTEROCL","沙鸡","PTEROCL","沙鸡"],
    ["COLUMB","鸽形","COLUMB","鸠鸽"],
    ["OPISTHOCOM","麝雉","OPISTHOCOM","麝雉"],
    ["GRU","鹤形","PSOPHI","喇叭鸟","ARAM","秧鹤","GRU","鹤","HELIORNITH","日䴘","SAROTHRUR","侏秧鸡","RALL","秧鸡"],
    ["CHARADRI","鸻形","PLUVIANELL","麦哲伦鸻","CHION","鞘嘴鸥","BURHIN","石鸻","PLUVIAN","埃及燕鸻","RECURVIROSTR","反嘴鹬","IBIDORHYNCH","鹮嘴鹬","HAEMATOPOD","蛎鹬","CHARADRI","鸻",
     "PEDIONOM","领鹑","THINOCOR","籽鹬","ROSTRATUL","彩鹬","JACAN","水雉","SCOLOPAC","丘鹬","TURNIC","三趾鹑","DROMAD","蟹鸻","GLAREOL","燕鸻","STERCORARI","贼鸥","ALC","海雀","LAR","鸥"],
    ["EURYPYG","日鳽","EURYPYG","日鳽","RHYNOCHET","鹭鹤"],
    ["PHAETHONT","鹲形","PHAETHONT","鹲"],
    ["GAVI","潜鸟","GAVI","潜鸟"],
    ["SPHENISC","企鹅","SPHENISC","企鹅"],
    ["PROCELLARI","鹱形","DIOMEDE","信天翁","OCEANIT","洋海燕","HYDROBAT","海燕","PROCELLARI","鹱"],
    ["CICONI","鹳形","CICONI","鹳"],
    ["SUL","鲣鸟","FREGAT","军舰鸟","SUL","鲣鸟","ANHING","蛇鹈","PHALACROCORAC","鸬鹚"],
    ["PELECAN","鹈形","THRESKIORNITH","鹮","BALAENICIPIT","鲸头鹳","SCOP","锤头鹳","PELECAN","鹈鹕","ARDE","鹭"],
    ["CAPRIMULG","夜鹰","CAPRIMULG","夜鹰"],
    ["STEATORNITH","油夜鹰","STEATORNITH","油夜鹰"],
    ["NYCTIBI","钩嘴夜鹰","NYCTIBI","钩嘴夜鹰"],
    ["PODARG","蛙口夜鹰","PODARG","蛙口夜鹰"],
    ["AEGOTHEL","裸鼻夜鹰","AEGOTHEL","裸鼻夜鹰"],
    ["APOD","雨燕","HEMIPROCN","树燕","APOD","雨燕","TROCHIL","蜂鸟"],
    ["STRIG","鸮形","TYTON","仓鸮","STRIG","鸱鸮"],
    ["CATHART","美洲鹫","CATHART","美洲鹫"],
    ["ACCIPITR","鹰形","SAGITTARI","鹭鹰","PANDION","鹗","ACCIPITR","鹰"],
    ["COLI","鼠鸟","COLI","鼠鸟"],
    ["LEPTOSOM","鹃三宝鸟","LEPTOSOM","鹃三宝鸟"],
    ["TROGON","咬鹃","TROGON","咬鹃"],
    ["BUCEROT","犀鸟","UPUP","戴胜","PHOENICUL","林戴胜","BUCEROT","犀鸟"],
    ["CORACI","佛法僧","BRACHYPTERACI","地三宝鸟","CORACI","佛法僧","MEROP","蜂虎","TOD","短尾鴗","MOMOT","翠鴗","ALCEDIN","翠鸟"],
    ["GALBUL","鹟䴕","GALBUL","鹟䴕","BUCCON","蓬头䴕"],
    ["PIC","䴕形","MEGALAIM","拟啄木鸟","LYBI","非洲拟啄木鸟","CAPITON","须䴕","SEMNORNITH","巨嘴拟䴕","RAMPHAST","巨嘴鸟","INDICATOR","响蜜䴕","PIC","啄木鸟"],
    ["CARIAM","叫鹤","CARIAM","叫鹤"],
    ["FALCON","隼形","FALCON","隼"],
    ["PSITTAC","鹦形","STRIGOP","鸮鹦鹉","CACATU","凤头鹦鹉","PSITTAC","鹦鹉","PSITTACUL","长尾鹦鹉"],
    ["PASSER","雀形","ACANTHISITT","刺鹩","PHILEPITT","裸眉鸫","EURYLAIM","阔嘴鸟","CALYPTOMEN","绿阔嘴鸟","SAPAYO","阔嘴霸鹟","PITT","八色鸫","PIPR","娇鹟","COTING","伞鸟","TITYR","蒂泰霸鹟","OXYRUNC","尖喙霸鹟","ONYCHORHYNCH","皇霸鹟",
     "TYRANN","霸鹟","MELANOPAREI","月胸窜鸟","CONOPOPHAG","食蚊鸟","THAMNOPHIL","蚁鸟","GRALLARI","蚁八色鸫","RHINOCRYPT","窜鸟","FORMICARI","蚁鸫","FURNARI","灶鸟","MENUR","琴鸟","ATRICHORNITH","薮鸟","CLIMACTER","短嘴旋木雀",
     "PTILONORHYNCH","园丁鸟","MALUR","细尾鹩莺","DASYORNITH","刺莺","PARDALOT","斑食蜜鸟","ACANTHIZ","细嘴莺","MELIPHAG","吸蜜鸟","ORTHONYCH","刺尾鸫","POMATOSTOM","弯嘴鹛","CINCLOSOMAT","鹑鸫","CAMPEPHAG","鹃鵙","MOHOU","黄头刺莺",
     "MACHAERIRHYNCH","船嘴鹟","ARTAM","燕鵙","RHAGOLOG","斑啸鹟","PITYRIAS","棘头鵙","AEGITHIN","雀鹎","MALACONOT","丛鵙","PLATYSTEIR","疣眼鹟","VANG","钩嘴鵙","NEOSITT","澳鳾","PSOPHOD","啸冠鸫","EULACESTOMAT","肉垂鵙雀鹟",
     "OREOIC","冠钟鹟","FALCUNCUL","鵙雀鹟","PARAMYTHI","冠啄果鸟","VIREON","莺雀","ORIOL","黄鹂","PACHYCEPHAL","啸鹟","RHIPIDUR","扇尾鹟","DICRUR","卷尾","MONARCH","王鹟","CORCORAC","澳鸦","IFRIT","蓝顶鹛鸫","PARADISAE","极乐鸟",
     "MELAMPITT","黑脚风鸟","PLATYLOPH","冠鸦","LANI","伯劳","CORV","鸦","CNEMOPHIL","冠极乐鸟","MELANOCHARIT","啄果鸟","NOTIOMYST","缝叶吸蜜鸟","CALLAE","垂耳鸦","EUPET","长颈鸫","CHAETOP","岩鸫","PICATHART","岩鹛","PETROIC","鸲鹟",
     "STENOSTIR","仙莺","HYLIOT","丛莺","REMIZ","攀雀","PAR","山雀","PANUR","文须雀","ALAUD","百灵","NICATOR","斗鹎","MACROSPHEN","长嘴莺","CISTICOL","扇尾莺","ACROCEPHAL","苇莺","DONACOBI","黑顶鹪鹩","BERNIER","马岛鹎","LOCUSTELL","蝗莺",
     "PNOEPYG","鳞胸鹪鹛","HIRUNDIN","燕","HYLI","拟攀雀","AEGITHAL","长尾山雀","ERYTHROCERC","红鹟","CETTI","树莺","PHYLLOSCOP","柳莺","PYCNONOT","鹎","SYLVI","莺鹛","PARADOXORNITH","鸦雀","ZOSTEROP","绣眼鸟","TIMALI","鹛",
     "PELLORNE","幽鹛","LEIOTHRICH","噪鹛","DUL","棕榈䳭","BOMBYCILL","太平鸟","PTILIOGONAT","丝鹟","HYLOCITRE","林啸鹟","HYPOCOLI","连雀","MOHO","夏威夷吸蜜鸟","REGUL","戴菊","TICHODROM","旋壁雀","SITT","䴓","SALPORNITH","斑旋木雀",
     "CERTHI","旋木雀","POLIOPTIL","蚋莺","TROGLODYT","鹪鹩","ELACHUR","丽星鹩鹛","BUPHAG","牛椋鸟","MIM","嘲鸫","STURN","椋鸟","CINCL","河乌","TURD","鸫","MUSCICAP","鹟","PROMEROP","非洲食蜜鸟","MODULATRIC","斑喉䳭","DICAE","啄花鸟",
     "NECTARINI","太阳鸟","CHLOROPSE","叶鹎","IREN","和平鸟","PEUCEDRAM","绿森莺","UROCYNCHRAM","朱鹀","PLOCE","织雀","VIDU","维达雀","ESTRILD","梅花雀","PRUNELL","岩鹨","PASSER","雀","MOTACILL","鹡鸰","FRINGILL","燕雀",
     "RHODINOCICHL","鸫唐纳雀","CALCARI","铁爪鹀","EMBERIZ","鹀","PASSERELL","雀鹀","CALYPTOPHIL","拟䳭唐纳雀","ZELEDONI","冠鹩森莺","PHAENICOPHIL","棕榈唐纳雀","NESOSPING","波多黎各唐纳雀","SPINDAL","纹头唐纳雀","TERETISTR","灰森莺",
     "ICTER","拟鹂","PARUL","森莺","CARDINAL","美洲雀","MITROSPING","乌脸唐纳雀","THRAUP","裸鼻雀"]
]);
var pt_front = [["males* left","左雄性"],["males* right","右雄性"],["females* left","左雌性"],["females* right","右雌性"],["adults* left","左成年"],["adults* right","右成年"],["(immatures*|juveniles*) left","左未成年"],
    ["(immatures*|juveniles*) right","右未成年"],[".*males* and .*females* *[(]center[)]","雄性和雌性(中间)"],[".*females* and .*males* *[(]center[)]","雌性和雄性(中间)"],["(males*, *breeding plumage|breeding males*)","繁殖羽雄性"],
    ["(males*, *nonbreeding plumage|nonbreeding males*)","非繁殖羽雄性"],["(females*, *nonbreeding plumage|nonbreeding females*)","非繁殖羽雌性"],["(immature|juvenile) males*","未成年雄性"],["spring molt","春羽"],["yellow","黄色亚种"],
    ["(immature|juvenile) females*","未成年雌性"],["(immatures*|juveniles*)","未成年"],["females*/immature males*","雌性/未成年雄性"],["females*/immatures*","雌性/未成年"],["females* and (chicks*|hatchlings*)","雌性和幼鸟"],
    ["females* and (immature|juvenile)s*","雌性和未成年"],["males* at nest cavity","雄性在鸟巢口"],["females* at nest cavity","雌性在鸟巢口"],["(females*, *breeding plumage|breeding females*)","繁殖羽雌性"],["mating display","求偶展示"],
    ["nonbreeding females*/immature males*","非繁殖羽雌性/未成年雄性"],["males*","雄性"],["females*","雌性"],["fall plumage","秋羽"],["winter plumage","冬羽"],["1st winter","一龄冬羽"],["2nd winter","二龄冬羽"],["2nd year","二龄羽"],
    ["3rd winter","三龄冬羽"],["3rd year","三龄羽"],["winter females*","冬羽雌性"],["winter males*","冬羽雄性"],["molting (immatures*|juveniles*)","换羽未成年鸟"],["eclipse males*","蚀羽雄性"],["molting adult","换羽成年鸟"],
    ["(partially)* *leucistic","白变种"],["nonbreeding *(adult)*/immature","非繁殖羽/未成年"],["adult feeding young","成年鸟喂雏鸟"],["breeding adults* (with|and) (juveniles*|chicks*)","成年繁殖羽和幼鸟"],["nests*","鸟巢"],
    ["adults* and (chicks*|hatchlings*)","成年和幼鸟"],["adults* and (immatures*|juveniles*)","成年和未成年"],["breeding (adults*|plumage)","繁殖羽"],["nonbreeding (adults*|plumage)","非繁殖羽"],["common","普通型"],["cuban","古巴亚种"],
    ["american","美洲亚种"],["atlantic form","大西洋亚种"],["blackish","黑色型"],["black-backed","黑背型"],["broad-billed","阔嘴型"],["chestnut-mandibled","栗嘴亚种"],["cismontanus","黑冠型"],["dark (morph|form)","深色型"],
    ["eurasian","欧亚亚种"],["extimus","佛罗里达亚种"],["gray-crowned","灰冠型"],["gray-headed","灰头型"],["gray (morph|form)","灰色型"],["hepburn's","灰颊型"],["hoary","极北型"],["interior","内部种群"],["lemon-rumped","柠檬腰型"],
    ["light (morph|form)","浅色型"],["melanotis group","黑耳亚种"],["mexicana group","墨西哥亚种"],["migrating kettle","迁徙集群"],["myrtle form","长春花型"],["oregon form","俄勒冈型"],["pink-sided","红胁型"],["red (morph|form)","红色型"],
    ["slate-colored form","石板色型"],["taiga","泰加林种"],["western","西部亚种"],["white-browed","白眉型"],["white (morph|form)","白色型"],["white-headed *(form)*","白头型"],["red-shafted","红羽"],["yellow-shafted","黄羽"],
    ["(nest|fledg)ling","雏鸟"],["(chicks*|hatchlings*)","幼鸟"],["at the back","在后面"],["at the front","在前面"],["(on the)* *left","左边"],["(on the)* *right","右边"]];
var pt_back = [["Accomack","阿科马克"],["Adams","亚当斯"],["Amherst","阿默斯特"],["Anne Arundel","安妮阿伦德尔"],["Atlantic","大西洋"],["Baltimore","巴尔的摩"],["Bradford","布拉德福德"],["Broward","布劳沃德"],["Caroline","卡罗琳"],
    ["Centre","中心"],["Chester","切斯特"],["Clarke*","克拉克"],["Cochise","科奇斯"],["Cumberland","坎伯兰"],["Dorchester","多切斯特"],["Essex","埃塞克斯"],["Fairfax","费尔法克斯"],["Fauquier","福基尔"],["Franklin","富兰克林"],
    ["Frederick","弗雷德里克"],["Fulton","富尔顿"],["Hampton","汉普顿"],["Harford","哈福德"],["Highland","高地"],["Horry","霍里"],["Howard","霍华德"],["Jefferson","杰斐逊"],["Kent","肯特"],["Lancaster","兰开斯特"],["Lee","李"],
    ["Loudoun","劳登"],["Maricopa","马里科帕"],["Marion","马里恩"],["Mifflin","米夫林"],["Monroe","门罗"],["Montgomery","蒙哥马利"],["Ocean","海洋"],["Orange","奥兰治"],["Ottawa","渥太华"],["Pima","皮马"],["Pinellas","皮尼拉斯"],
    ["Prince George's","乔治王子"],["Prince William","威廉王子"],["Queen Anne's","安妮女王"],["Rockingham","洛金汉"],["Sarasota","萨拉索塔"],["Schuylkill","斯古吉尔"],["Suffolk","萨福克"],["Sussex","苏塞克斯"],["York","约克"]];
pt_back.forEach((el)=>{el[0] = el[0]+" *County";el[1] = el[1]+"郡";});
pt_back.push(["Alameda Central","阿拉米达中央公园"],["Alaska","阿拉斯加州"],["Art.+Agape","艾盖浦艺术别墅酒店"],["Ash.+Sanctuary","灰谷鸟类保护区"],["Auvergne-Rhône-Alpes","奥弗涅-罗纳-阿尔卑斯大区"],["Bakkatjörn","巴卡特约恩湖"],
    ["Baltimore","巴尔的摩市"],["Bayamón","巴亚蒙市",],["Beale Park","比尔公园"],["Bear.+Lakewood","莱克伍德市熊溪湖公园"],["Black Point Park.+","黑角公园及码头"],["Blackwater NWR","黑水NWR"],["Blue Mountains NP","蓝山NP"],
    ["Bocca.+Serchio","塞尔基奥河口"],["Bois.+Boulogne","布洛涅森林"],["Bowers Beach","鲍尔斯海滩"],["Box.+Road","盒子峡谷路"],["Cabo.+NWR","卡波罗霍NWR"],["California","加利福尼亚州"],["Cambridge","剑桥市"],["Campania","坎帕尼亚大区"],
    ["Canada","加拿大"],["Cannon Beach","卡农海滩"],["Cape Flattery","夫拉特角"],["Cape Hatteras","哈特拉斯角"],["Cape May.+SP","五月岬SP"],["Ceiba.+Inn","西巴乡村客栈"],["Central Park","中央公园"],["Cerro.+Cruz","十字架山"],
    ["Charleston","查尔斯顿"],["Chimney Rock SP","烟囱岩SP"],["China","中国"],["Chincoteague NWR","钦科蒂格NWR"],["Clear Creek Trail","清溪步道"],["Colón Province","科隆省"],["Congress.+Poolesville","普尔斯维尔镇国会马球俱乐部"],
    ["Connecticut","康涅狄格州"],["Cove.+Stamford","斯坦福市科夫岛WR"],["Crandon Park","克兰登公园"],["Cromwell Valley Park","克伦威尔溪谷公园"],["Denver","丹佛市"],["Desert NWR","沙漠NWR"],["Drangsnes","德朗斯内斯小镇"],
    ["Dunn.+Ann","圣安堂区奥乔里奥斯邓恩河瀑布"],["Eastern Neck NWR","东内克NWR"],["Edwin.+NWR","埃德温·福赛斯NWR"],["El Pipila Monument","皮毕拉纪念碑"],["Etang.+Crau","圣马丁德克罗镇桤木池塘"],["Fjallsárlón","Fjallsárlón冰河湖"],
    ["Florence","佛罗伦萨市"],["Fort McHenry","麦克亨利堡"],["France","法国"],["Frederick","弗雷德里克市"],["Frog Pond WMA","蛙塘WMA"],["Fucecchio Marsh","富切基奥沼泽"],["Gamboa","甘博阿镇"],["Georgia","乔治亚州"],
    ["Golfklú.+jarnarnes","塞尔特贾纳内斯高尔夫球场"],["Grassy Key","草岛"],["Guanajuato City","瓜纳华托城"],["Guanajuato","瓜纳华托州"],["Halibut.+SP","大比目鱼角SP"],["Haute-Savoie","上萨瓦省"],["Herit.+Park","遗产岛公园"],
    ["Hobuck Beach","霍巴克海滩"],["Holywell Park","霍利韦尔公园"],["Homer.+Park","荷马古德尔斯基公园"],["Hope.+Gardens","霍普植物园"],["Hólmavík","侯尔马维克小镇"],["Hót.+hóll","Laugarhóll旅馆"],["Iceland","冰岛"],
    ["Indian.+Inlet","印第安河入海口"],["Italy","意大利"],["Jiang.+meiren","江山睡美人"],["Jiangsh.+Greenway","江山港滨水绿道"],["Jimei","集美"],["Jingshan Park","景山公园"],["Jones B.+SP","琼斯海滩SP"],["Jökulsárlón","杰古沙龙冰河湖"],
    ["Katmai.+Preserve","卡特迈NP"],["Kennedy Park","肯尼迪公园"],["Key West","西礁岛"],["Kjarnaskógur","Kjarnaskógur森林"],["Lake Massaciuccoli","马萨丘科利湖"],["La Sabana Park","萨瓦纳公园"],["Látrabjarg","拉特拉尔角"],
    ["Lianhua.+Park","莲花山公园"],["Little.+Lagoon","小埃斯特罗泻湖"],["Littleton","利特尔顿市"],["Longyan","龙岩市"],["Mackinac Island","麦基诺岛"],["Madera.+Trail","马德拉峡谷嘉莉国家山道"],["Madera.+Lodge","马德拉峡谷圣丽塔旅馆"],
    ["Magee.+Area","玛吉沼泽WR"],["Maine","缅因州"],["Manasquan Inlet","马纳斯泉海口"],["Mariner.+Park","水手角公园"],["Maryland Heights","马里兰高地一带"],["Matheson.+Park","马西森硬木公园"],["Mexico City","墨西哥城"],
    ["Michigan","密西根州"],["Montego Bay","蒙特哥湾"],["Montezuma NWR","蒙特祖玛NWR"],["Morazán Park","莫拉桑公园"],["Morro.+Bay","莫罗湾莫罗岩"],["Morse.+Lure","路尔湖摩士公园"],["Mouth.+Lagni","Regi Lagni运河口"],["Nevada","内华达州"],
    ["New York City","纽约市"],["Nianbadu","廿八都"],["Northwestern Region","西北地区"],["Ocean City","大洋城"],["Ohio","俄亥俄州"],["Old Hos.+Park","老医院公园"],["Olympic NP","奥林匹克NP"],["Ontario","安大略省"],["Oregon","俄勒冈州"],
    ["Panama","巴拿马"],["Paris","巴黎市"],["Park.+Guarantees","社会保障公园"],["Patapsco.+Henryton","帕塔普斯科河谷SP"],["Paton.+Hummingbirds","佩顿蜂鸟中心"],["Pennyfield Lock","彭尼菲尔德闸"],["Pitt.+Causeway","皮特街堤道"],
    ["Plantation Preserve","种植园保留地"],["Red Rocks Park","红石公园"],["Riley.+Lock","莱利闸"],["Rincón","林孔市"],["Rocky.+NWR","落基山阿森纳NWR"],["Saint Andrew","圣安德鲁堂区"],["Saint James","圣詹姆斯堂区"],
    ["San San.+Road","三三派出所路"],["Savannah NWR","萨凡纳NWR"],["Scottsdale.+College.*","斯科茨代尔市社区大学"],["Scotts.+Road","斯科茨码头路"],["Shamrock.+Center","三叶草公园"],["South Cape May Meadows","南五月岬草甸"],
    ["Stellwagen.+Sanctuary","斯特尔瓦根浅滩国家海洋保护区"],["Summer Palace","颐和园"],["Sunset Park","日落公园"],["Taoranting Park","陶然亭公园"],["The Bund.+Shanghai","上海外滩"],["Tjörnin.+Reykjavík","雷克雅未克托宁湖"],
    ["Truitts.+Road","特鲁伊特码头路"],["Tucson","图森市"],["Two.+May","五月岬两英里码头"],["Tybee Island","泰碧岛"],["United Kingdom","英国"],["Van.+Hamilton","汉密尔顿市范瓦格纳湖滩"],["Vermont","佛蒙特州"],["Violettes Lock","紫罗兰闸"],
    ["Waggoner's Gap.+","瓦格纳山口观鹰台"],["Washington","华盛顿州"],["Waterton Canyon","沃特顿峡谷"],["Wenlock WMA","温洛克WMA"],["Western Region","西部地区"],["Wheat Ridge","麦岭市"],["Xiamen","厦门"],["Xianxia.+Trail","仙霞关古道"],
    ["Yokuts Park","约库特公园"],["Yongding Hongkeng Tulou","永定洪坑土楼"],["Yuan.+Park","圆明园"]);
var pt_cnt  = new Array(pt_back.length).fill(0);
var fam_ln  = 8;  //family length
var order   = (/&order|^order/i).test(window.location.search.substring(1));
var comma   = [", ","，"];
var modBrd  = {name:[],cname:[],newbird:[]},modDat;
var expandinfo = (/(stat\.html|country=|loc=|query=)/i).test(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
    
function myBirds(info){
    return info.map((el)=>{
      el[0] = new Date("20"+el[0].substring(0,2)+"-"+el[0].substring(2,4)+"-"+el[0].substring(4,6)+"T"+el[0].substring(6,8)+":"+el[0].substring(8)+":00");
      el[1] = el[1].trim().slice(0,fam_ln).toUpperCase();
      el[2] = el[2].trim();
      el[3] = el[3].trim();
      el[4] = el[4].trim().charAt(0).toUpperCase()+el[4].trim().slice(1).toLowerCase();
      el[5] = p_id(el[5]);
      pic_cnts = pic_cnts+el[5].length;
      dig_cnts = el[5].reduce((tot,ele)=>tot+((/_dig/i.test(ele))?1:0),dig_cnts);
      let newb = (modTim<=el[0].getTime());  
      if (newb||el[5].some((ele)=>{tmp_date=getdate(ele,true);return (tmp_date!=null)?(modTim<=tmp_date.getTime()):false;})){
         if ((tmp_date!=null) && (modDat.getTime()<tmp_date.getTime())) {modDat=tmp_date;}
         modBrd.name.push(el[2]);
         modBrd.cname.push(el[3]);
         modBrd.newbird.push(newb);
      }
      var cinfo = [], locs = [];
      if (window.expandinfo){
         let tmp_info = reform_locs(el[6],el[5]);
         el[6] = tmp_info.info;
         cinfo = tmp_info.cinfo;
         locs  = tmp_info.locs;
         (el[3].split('')).forEach((ele)=>hz_cnts[ele] = (typeof hz_cnts[ele] === 'undefined')?1:(hz_cnts[ele]+1));
      }
      return {lifer:el[0],family:el[1],name:el[2],cname:el[3],latin:el[4],photo:el[5],info:el[6],ebid:el[7],cbid:el[8],newbird:newb,genus:el[4].substring(0,el[4].indexOf(' ')),name1:reform(el[2]),cinfo:cinfo,locs:locs};
    });
}

//return a time that is n_days before the datstr (modDat)
//if n_days is not specified, return the begining of the month
function modTime(datstr,n_days){
    modDat = new Date(datstr+"T08:00");
    if (n_days==null) n_days = modDat.getDate();
    return modDat.getTime()-n_days*3600*24*1000;
}

function stradd(...arrays) {
    const n = arrays.reduce((max, xs) => Math.max(max, Array.isArray(xs)?xs.length:1), 0);
    const result = Array.from({ length: n });
    return result.map((_, i) => arrays.map(xs => (Array.isArray(xs)?xs[Math.min(i,xs.length-1)]:xs)).reduce((sum, x) => sum + x, ''));
}

//return splitted string array:['',part1,''] or ['',part1,', '+part2] or [part1+', ',part2,', '+part3]
function strsplit(str){
    let tmp = (Array.isArray(str))?str[0]:str;
    let tmp1 = tmp.split(/, */);
    if (tmp1.length==1) return ['',tmp,''];
    while ((tmp1.length>2) && pt_front.some((el)=>(new RegExp("^ *"+el[0],"i")).test(tmp1[0])) && pt_front.some((el)=>(new RegExp("^ *"+el[0],"i")).test(tmp1[1]))){
          tmp1[1] = tmp1[0]+', '+tmp1[1];
          tmp1.shift();
    }
    if (((tmp1[0].split(/ +/)).length>1) && !pt_front.some((el)=>(new RegExp("^ *"+el[0],"i")).test(tmp1[0]))) tmp1.unshift('');
    if (tmp1.length==2) tmp1.push('');
    if (tmp1[0].length>0) tmp1[0] = tmp1[0]+', ';
    if (tmp1[2].length>0) tmp1[2] = ', '+tmp1.slice(2,tmp.length).join(', ');
    return [tmp1[0],tmp1[1],tmp1[2]];
}

//upper case to the first letter, works for href link
function strupcase(str){
    let tmpstr = str.trim();
    let tmp = tmpstr.indexOf('>');
    if ((tmpstr.indexOf('<')==0)&&(tmp!=-1)) tmpstr = tmpstr.substring(0,tmp+1)+strupcase(tmpstr.substring(tmp+1));
    return tmpstr.charAt(0).toUpperCase()+tmpstr.slice(1);
}

function birdFound(id){
    return birds.some((el)=>el.name1===id);
}
  
function my_href(url,name,target){
    let tmp = "<a href='"+url+"' style='color: #3399FF; text-decoration: underline;'";
    if (target!=null) tmp = tmp+" target='"+target+"'";
    if (name!=null) tmp = tmp+">"+name+"</a";
    return tmp+">";
}

function b_link(bid,name,extra){
    if (name==null) name = bid;
    if (name==='s') name = bid.trim()+'s';
    if ((name==='right') || (name==='left')) {
       extra = name;
       name  = bid;
    }
    if (extra==null) {extra = '';}else{
       if ((extra==='right') || (extra==='left')) extra = ' on the '+extra;
    }
    if (order) bid = bid+'&order';
    return my_href('showbird.html?name='+reform(bid),name)+extra;
}

function getByCountry(id,myArray){
    var rexp = new RegExp((cnrexp.test(id))?'(^'+id+'|@@_*'+id+'|，_*'+id+')':',_*'+id);
    if (cnrexp.test(id)) return myArray.filter((el)=>rexp.test(reform(el.cinfo.join('@@'))));
    else return myArray.filter((el)=>rexp.test(reform(el.info.join('@@'))));
}

function getByFamily(id,myArray) {
    id = id.slice(0,fam_ln);
    return myArray.filter((el)=>el.family===id);
}

function getByLiferYear(year,myArray){
    year = parseInt(year);
    return myArray.filter((el)=>el.lifer.getFullYear()===year);
}

function getByQuery(id,myArray){
    if (cnrexp.test(id)) return myArray.filter((el)=>reform(el.cinfo.join('@@')).match(id)!==null);
    else return myArray.filter((el)=>reform(el.info.join('@@')).match(id)!==null);
}

function getByHanzi(id,myArray){
    if (cnrexp.test(id)) return myArray.filter((el)=>el.cname.match(id)!==null);
}

function getByLocs(id,myArray){
    return myArray.filter((el)=>el.locs.includes(id));
}

function getdate(path,retdate){
    let year = '',mon = '',day = '',off = 4;
    let name = (Array.isArray(path))?(path[0].substr(path[0].lastIndexOf('/')+1)):(path.substr(path.lastIndexOf('/')+1));
    let pos = name.search(/20[0-9]{4,}/);
    if (pos==-1){
       pos = name.search(/[0-9]{4,}/);
       off = 2;
    }
    if (pos>=0){
       year = name.substring(pos,pos+off);
       mon  = name.substring(pos+off,pos+off+2);
       day  = name.substring(pos+off+2,pos+off+4);
       if (year.length==2) year = '20'+year;
       if (mon.substring(0,1)=='0') mon = mon.substring(1,2);
       if (isNaN(parseInt(day))) day='0';
       if (retdate) return new Date(year,parseInt(mon)-1,day);
    }else if (retdate){return;}
    return mon+((mon.length>0)?'/':'')+year;
}

function mysort(a,b){
    if (window.lifer) return a.lifer.toJSON().localeCompare(b.lifer.toJSON());
    if (window.usechinese) return a.cname.localeCompare(b.cname,'zh-CN');
    return a.name.localeCompare(b.name,'en');
}

function a_id(albumid){
    let tmp1 = albumid.split(/, */);
    return stradd(tmp1[0]+"/"+tmp1[0]+"_",tmp1.slice(1));
}

//append '20' to id automatically
function m_id(id){
    if (!Array.isArray(id)){id = [id];}
    let num = 0; //Math.floor(parseInt(id[0].slice(0,6))/300000);
    if (misc_cnts[num]==null) misc_cnts[num]=0;
    misc_cnts[num] = misc_cnts[num]+id.length;
    return stradd("misc_birds"+((num===0)?"":num.toString())+"/20",id);
}

function is_num(num){
    if (Array.isArray(num)) return !num.some((el)=>!Number.isFinite(el));
    return Number.isFinite(num);
}

function p_id(photo){
    if (!Array.isArray(photo)){photo = [photo];}
    return Array.prototype.concat.apply([],photo.map((el)=>/,/.test(el)?a_id(el):(/\//.test(el)?el:m_id(el))));
}

function baike(name,before,aftin,aftout){
    if (is_num(name)) return "https://dongniao.net/nd/"+name.toString();
    name = replace_acronym(name);
    if (before==null) return "https://baike.baidu.com/item/"+name;
    if (aftin==null) aftin='';
    if (aftout==null) aftout='';
    return before+my_href("https://baike.baidu.com/item/"+name,name+aftin,name)+aftout;
}

function cornellurl(bid){
    return "https://www.allaboutbirds.org/guide/"+bid.trim()+"/id";
}

function ebirdurl(bid){
    if (bid===bid.toUpperCase()) return cornellurl(bid);
    return "https://ebird.org/species/"+bid.trim()+"/";
}

function spot(id,name){
    if (typeof name!=='string') return "https://birdinghotspots.org/hotspot/"+id;
    let tmp = strsplit(name);
    return tmp[0]+my_href("https://birdinghotspots.org/hotspot/"+id,tmp[1],id)+tmp[2];
}

function map(name,lat,lon){
    let tmp  = strsplit(name);
    let tmp1 = ((lat==null)||(lon==null))?reform(tmp[1],"+"):(lat.toString()+"%2C"+lon.toString());
    if (cnrexp.test(name))return tmp[0]+my_href("http://api.map.baidu.com/marker?location="+tmp1+"&output=html&coord_type=gcj02&title="+tmp[1],tmp[1],"map")+tmp[2];
    return tmp[0]+my_href("https://www.google.com/maps/search/?api=1&query="+tmp1,tmp[1],"map")+tmp[2];
}

function nps(pid,isfws,name){
    if (typeof isfws==='string') {
       name = isfws;
       if (name.toLowerCase().indexOf('wildlife refuge')!=-1) isfws = true;
       if (name.toLowerCase().indexOf('national forest')!=-1) isfws = false;
    }
    let url = 'https://www.'+((typeof isfws==='boolean')?(isfws?'fws.gov/refuge/':'fs.usda.gov/'):'nps.gov/')+pid+'/';
    if (typeof name==='string'){
       let tmp = strsplit(name);
       url = tmp[0]+my_href(url,tmp[1],pid)+tmp[2];
    }
    return url;
}

function wiki(id,name){
    id = replace_acronym(id);
    if (name==null) return "https://en.wikipedia.org/wiki/"+reform(id,"_","%27",true);
    if ((typeof name!=='string')||(name==='')) name = id;
    return my_href("https://en.wikipedia.org/wiki/"+reform(id,"_","%27",true),name,id);
}

function reform(name,space,apost,notlc){
    if (space==null) space = '_';
    if (apost==null) apost = '';
    let tmp = name.replace(/ |\+/g,space);
    tmp = tmp.replace(/'/g,apost);
    return (notlc)?tmp:tmp.toLowerCase();
}

var info3cnt = new Array();

//loc = ["locid","date,ebirdID","beforeEng","afterChn","beforeChn","afterEng"]
function reform_locs(loc,photo){
    let info = [], tmp_einf = [], tmp_cinf = [], tmp_locs  = [];
    let tmp1,tmp2,tmp3,tmp4,tmp5,tmp,pid,date,head,tail;
    loc.forEach((el)=>{
        el = el.trim();
        if (((info.length%6)>0)&&(lurls[el]!=null)){info.push(...Array(6-(info.length%6)).fill(''));}
        else if (((info.length%6)==1)&&(!(/([0-9]{1,2}\/[0-9]{4}|s[0-9]{8,})/i).test(el))){info.push('');} 
        info.push(el);
    });
    if ((info.length%6)>0) info.push(...Array(6-(info.length%6)).fill(''));
    for (var i=0;i<Math.ceil(info.length/6.0);i++){
        tmp3 = info[6*i+1].split(/[,/] */);
        tmp2 = ((tmp3.length==1)||(tmp3.length==3))?tmp3[tmp3.length-1]:"";
        tmp1 = ((tmp3.length==2)||(tmp3.length==3))?tmp3[0]+'/'+tmp3[1]:getdate(photo[i]);
        if ((tmp2.length>0)&&(!ebirdlist.includes(tmp2))) ebirdlist.push(tmp2);
        date = ((tmp2.length>0)&&(tmp1.length>0))?my_href("https://ebird.org/checklist/"+tmp2,tmp1,tmp2):tmp1;
        if (info[6*i+3].length>0){
           if (info3cnt.some((el,indx)=>{tmp5=indx;return (el[0]===info[6*i+3]);})){
              info3cnt[tmp5][1]=info3cnt[tmp5][1]+1;
           }else{
              info3cnt.push([info[6*i+3],1]);
           };
        }
        if (info[6*i+2].length>0){
           let tmp_info = info[6*i+2];
           let tmp_chn  = "";
           while (pt_front.some((el)=>{tmp4=el[1];return (new RegExp("^ *"+el[0]+" *($|,)","i")).test(tmp_info);})) {
              tmp_chn  = tmp_chn+((tmp_chn.length>0)?comma[1]:"")+tmp4;
              tmp_info = RegExp.rightContext;
           }
           if (tmp_chn.length>0){
              info[6*i+4] = tmp_chn+((info[6*i+4].length>0)?comma[1]:"")+info[6*i+4];
           }
           if (tmp_info.length>0) {
              tmp_chn = "";
              while (pt_back.some((el,indx)=>{tmp4=el[1];tmp5=indx;return  (new RegExp("(^|,) *(<[^<>]+>)* *"+el[0]+" *(</a>)* *$","i")).test(tmp_info);})) {
                 tmp_chn  = tmp_chn+tmp4;
                 tmp_info = RegExp.leftContext;
                 pt_cnt[tmp5] = pt_cnt[tmp5]+1;
              }
              if (tmp_chn.length>0) {
                 info[6*i+3] = tmp_chn+info[6*i+3];
              }
           }
        }
        pid  = info[6*i].toLowerCase();
        tmp  = (lurls[pid]==null)?['','','','']:(lurls[pid].slice(0));
        head = [info[6*i+2],info[6*i+4]];
        tail = [info[6*i+5],info[6*i+3]];
        if (loc_cnts[pid]==null) loc_cnts[pid] = 0;
        loc_cnts[pid]++;
        if (date.length>0) {date = stradd(comma,date);}else{date=["",""];}
        if ((head[0].length>0)&&((tmp[0]+tmp[1]+tail[0]).length>0)) head[0] = head[0]+comma[0];
        if ((head[1].length>0)&&((tmp[2]+tmp[3]+tail[1]).length>0)) head[1] = head[1]+comma[1];
        if ((tmp[0].length>0)&&(tail[0].length>0)) tail[0] = ' '+tail[0];
        if ((tmp[1].length>0)&&(tmp[0].length>0)) tmp[1] = comma[0]+tmp[1];
        if (tmp[4]!=null) {
           if (tmp[5]==null) tmp[5] = tmp[4];
           if (tmp[4].length>0) tmp[0] = my_href(tmp[4],tmp[0],pid);
           if (tmp[5].length>0) tmp[2] = my_href(tmp[5],tmp[2],pid);
        }
        tmp_einf.push(replace_acronym(strupcase(head[0]+tmp[0]+tail[0]+tmp[1]+date[0])));
        tmp_cinf.push(replace_acronym(head[1]+tmp[3]+tmp[2]+tail[1]+date[1]));
        tmp_locs.push(pid);
    }
    return {info:tmp_einf,cinfo:tmp_cinf,locs:tmp_locs};
}

function reform_url(name,cname,ebid,cbid){
    if (ebid==null) ebid = "";
    if (cbid==null) cbid = cname;
    if ((is_num(ebid))||(cnrexp.test(ebid))){
       cbid = ebid;
       ebid = "";
    }
    return (window.usechinese && (cbid!==""))?baike(cbid):((ebid!=="")?ebirdurl(ebid):cornellurl(name));
}

//acronym is case sensitive 
var acronym = {NWR:["National Wildlife Refuge","国家野生动物保护区"],NP:["National Park","国家公园"],SP:["State Park","州立公园"],WMA:["Wildlife Management Area","野生动物管理区"],WR:["Wildlife Refuge","野生动物保护区"]};
var acrrexp = new RegExp('('+Object.keys(acronym).join('|')+')','g');
function replace_acronym(name){
   let indx = cnrexp.test(name)?1:0;
   let tmp  = name.match(acrrexp);
   if (tmp!==null){for(var i=0;i<tmp.length;i++){name = name.replace(tmp[i],(acronym[tmp[i]])[indx]);}}
   return name;
}
//-->