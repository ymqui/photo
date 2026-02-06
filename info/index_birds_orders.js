<!--
var loc_cnts  = {};
var hz_cnts   = {};
var misc_cnts = [];
var dig_cnts  = 0;
var pic_cnts  = 0;
var ebirdlist = [];
var cnrexp    = /[\u3400-\u9FBF]/;

function myOrder(info){
    return info.map((el)=>({name:el[0],cname:el[1]+"目",family:(el.slice(2)).reduce((fam,ele,ind,ar)=>{if(!cnrexp.test(ele))fam.push({name:ele,cname:ar[ind+1]+"科"}); return fam;},[])}));
}

//https://www.avilist.org/
//http://www.worldbirdnames.org/ioc-lists/master-list-2/
//https://dongniao.net/taxonomy.html
var orders = myOrder([
    ["STRUTHIONIFORMES","鸵鸟","STRUTHIONIDAE","鸵鸟"],
    ["CASUARIIFORMES","鹤鸵","CASUARIIDAE","鹤鸵"],
    ["APTERYGIFORMES","鹬鸵","APTERYGIDAE","鹬鸵"],
    ["RHEIFORMES","美洲鸵鸟","RHEIDAE","美洲鸵鸟"],
    ["TINAMIFORMES","䳍形","TINAMIDAE","䳍"],
    ["ANSERIFORMES","雁形","ANHIMIDAE","叫鸭","ANSERANATIDAE","鹊雁","ANATIDAE","鸭"],
    ["GALLIFORMES","鸡形","MEGAPODIIDAE","冢雉","CRACIDAE","凤冠雉","NUMIDIDAE","珠鸡","ODONTOPHORIDAE","齿鹑","PHASIANIDAE","雉"],
    ["PHOENICOPTERIFORMES","红鹳","PHOENICOPTERIDAE","红鹳"],
    ["PODICIPEDIFORMES","䴙䴘","PODICIPEDIDAE","䴙䴘"],
    ["MUSOPHAGIFORMES","蕉鹃","MUSOPHAGIDAE","蕉鹃"],
    ["OTIDIFORMES","鸨形","OTIDIDAE","鸨"],
    ["CUCULIFORMES","鹃形","CUCULIDAE","杜鹃"],
    ["MESITORNITHIFORMES","拟鹑","MESITORNITHIDAE","拟鹑"],
    ["PTEROCLIFORMES","沙鸡","PTEROCLIDAE","沙鸡"],
    ["COLUMBIFORMES","鸽形","COLUMBIDAE","鸠鸽"],
    ["OPISTHOCOMIFORMES","麝雉","OPISTHOCOMIDAE","麝雉"],
    ["GRUIFORMES","鹤形","PSOPHIIDAE","喇叭鸟","ARAMIDAE","秧鹤","GRUIDAE","鹤","HELIORNITHIDAE","日䴘","SAROTHRURIDAE","侏秧鸡","RALLIDAE","秧鸡"],
    ["CHARADRIIFORMES","鸻形","PLUVIANELLIDAE","麦哲伦鸻","CHIONIDAE","鞘嘴鸥","BURHINIDAE","石鸻","PLUVIANIDAE","埃及燕鸻","RECURVIROSTRIDAE","反嘴鹬","IBIDORHYNCHIDAE","鹮嘴鹬","HAEMATOPODIDAE","蛎鹬","CHARADRIIDAE","鸻",
     "PEDIONOMIDAE","领鹑","THINOCORIDAE","籽鹬","ROSTRATULIDAE","彩鹬","JACANIDAE","水雉","SCOLOPACIDAE","丘鹬","TURNICIDAE","三趾鹑","DROMADIDAE","蟹鸻","GLAREOLIDAE","燕鸻","STERCORARIIDAE","贼鸥","ALCIDAE","海雀","LARIDAE","鸥"],
    ["EURYPYGIFORMES","日鳽","EURYPYGIDAE","日鳽","RHYNOCHETIDAE","鹭鹤"],
    ["PHAETHONTIFORMES","鹲形","PHAETHONTIDAE","鹲"],
    ["GAVIIFORMES","潜鸟","GAVIIDAE","潜鸟"],
    ["SPHENISCIFORMES","企鹅","SPHENISCIDAE","企鹅"],
    ["PROCELLARIIFORMES","鹱形","DIOMEDEIDAE","信天翁","OCEANITIDAE","洋海燕","HYDROBATIDAE","海燕","PROCELLARIIDAE","鹱"],
    ["CICONIIFORMES","鹳形","CICONIIDAE","鹳"],
    ["SULIFORMES","鲣鸟","FREGATIDAE","军舰鸟","SULIDAE","鲣鸟","ANHINGIDAE","蛇鹈","PHALACROCORACIDAE","鸬鹚"],
    ["PELECANIFORMES","鹈形","THRESKIORNITHIDAE","鹮","BALAENICIPITIDAE","鲸头鹳","SCOPIDAE","锤头鹳","PELECANIDAE","鹈鹕","ARDEIDAE","鹭"],
    ["CAPRIMULGIFORMES","夜鹰","CAPRIMULGIDAE","夜鹰"],
    ["STEATORNITHIFORMES","油夜鹰","STEATORNITHIDAE","油夜鹰"],
    ["NYCTIBIIFORMES","钩嘴夜鹰","NYCTIBIIDAE","钩嘴夜鹰"],
    ["PODARGIFORMES","蛙口夜鹰","PODARGIDAE","蛙口夜鹰"],
    ["AEGOTHELIFORMES","裸鼻夜鹰","AEGOTHELIDAE","裸鼻夜鹰"],
    ["APODIFORMES","雨燕","HEMIPROCNIDAE","树燕","APODIDAE","雨燕","TROCHILIDAE","蜂鸟"],
    ["STRIGIFORMES","鸮形","TYTONIDAE","仓鸮","STRIGIDAE","鸱鸮"],
    ["CATHARTIFORMES","美洲鹫","CATHARTIDAE","美洲鹫"],
    ["ACCIPITRIFORMES","鹰形","SAGITTARIIDAE","鹭鹰","PANDIONIDAE","鹗","ACCIPITRIDAE","鹰"],
    ["COLIIFORMES","鼠鸟","COLIIDAE","鼠鸟"],
    ["LEPTOSOMIFORMES","鹃三宝鸟","LEPTOSOMIDAE","鹃三宝鸟"],
    ["TROGONIFORMES","咬鹃","TROGONIDAE","咬鹃"],
    ["BUCEROTIFORMES","犀鸟","UPUPIDAE","戴胜","PHOENICULIDAE","林戴胜","BUCEROTIDAE","犀鸟"],
    ["CORACIIFORMES","佛法僧","BRACHYPTERACIIDAE","地三宝鸟","CORACIIDAE","佛法僧","MEROPIDAE","蜂虎","TODIDAE","短尾鴗","MOMOTIDAE","翠鴗","ALCEDINIDAE","翠鸟"],
    ["GALBULIFORMES","鹟䴕","GALBULIDAE","鹟䴕","BUCCONIDAE","蓬头䴕"],
    ["PICIFORMES","䴕形","MEGALAIMIDAE","拟啄木鸟","LYBIIDAE","非洲拟啄木鸟","CAPITONIDAE","须䴕","SEMNORNITHIDAE","巨嘴拟䴕","RAMPHASTIDAE","巨嘴鸟","INDICATORIDAE","响蜜䴕","PICIDAE","啄木鸟"],
    ["CARIAMIFORMES","叫鹤","CARIAMIDAE","叫鹤"],
    ["FALCONIFORMES","隼形","FALCONIDAE","隼"],
    ["PSITTACIFORMES","鹦形","STRIGOPIDAE","鸮鹦鹉","CACATUIDAE","凤头鹦鹉","PSITTACIDAE","鹦鹉","PSITTACULIDAE","长尾鹦鹉"],
    ["PASSERIFORMES","雀形","ACANTHISITTIDAE","刺鹩","PHILEPITTIDAE","裸眉鸫","EURYLAIMIDAE","阔嘴鸟","CALYPTOMENIDAE","绿阔嘴鸟","SAPAYOIDAE","阔嘴霸鹟","PITTIDAE","八色鸫","PIPRIDAE","娇鹟","COTINGIDAE","伞鸟","TITYRIDAE","蒂泰霸鹟",
     "OXYRUNCIDAE","尖喙霸鹟","ONYCHORHYNCHIDAE","皇霸鹟","TYRANNIDAE","霸鹟","MELANOPAREIIDAE","月胸窜鸟","CONOPOPHAGIDAE","食蚊鸟","THAMNOPHILIDAE","蚁鸟","GRALLARIIDAE","蚁八色鸫","RHINOCRYPTIDAE","窜鸟","FORMICARIIDAE","蚁鸫",
     "FURNARIIDAE","灶鸟","MENURIDAE","琴鸟","ATRICHORNITHIDAE","薮鸟","CLIMACTERIDAE","短嘴旋木雀","PTILONORHYNCHIDAE","园丁鸟","MALURIDAE","细尾鹩莺","DASYORNITHIDAE","刺莺","PARDALOTIDAE","斑食蜜鸟","ACANTHIZIDAE","细嘴莺",
     "MELIPHAGIDAE","吸蜜鸟","ORTHONYCHIDAE","刺尾鸫","POMATOSTOMIDAE","弯嘴鹛","CINCLOSOMATIDAE","鹑鸫","CAMPEPHAGIDAE","鹃鵙","MOHOUIDAE","黄头刺莺","MACHAERIRHYNCHIDAE","船嘴鹟","ARTAMIDAE","燕鵙","RHAGOLOGIDAE","斑啸鹟",
     "PITYRIASIDAE","棘头鵙","AEGITHINIDAE","雀鹎","MALACONOTIDAE","丛鵙","PLATYSTEIRIDAE","疣眼鹟","VANGIDAE","钩嘴鵙","NEOSITTIDAE","澳鳾","PSOPHODIDAE","啸冠鸫","EULACESTOMATIDAE","肉垂鵙雀鹟","OREOICIDAE","冠钟鹟",
     "FALCUNCULIDAE","鵙雀鹟","PARAMYTHIIDAE","冠啄果鸟","VIREONIDAE","莺雀","ORIOLIDAE","黄鹂","PACHYCEPHALIDAE","啸鹟","RHIPIDURIDAE","扇尾鹟","DICRURIDAE","卷尾","MONARCHIDAE","王鹟","CORCORACIDAE","澳鸦","IFRITIDAE","蓝顶鹛鸫",
     "PARADISAEIDAE","极乐鸟","MELAMPITTIDAE","黑脚风鸟","PLATYLOPHIDAE","冠鸦","LANIIDAE","伯劳","CORVIDAE","鸦","CNEMOPHILIDAE","冠极乐鸟","MELANOCHARITIDAE","啄果鸟","NOTIOMYSTIDAE","缝叶吸蜜鸟","CALLAEIDAE","垂耳鸦",
     "EUPETIDAE","长颈鸫","CHAETOPIDAE","岩鸫","PICATHARTIDAE","岩鹛","PETROICIDAE","鸲鹟","STENOSTIRIDAE","仙莺","HYLIOTIDAE","丛莺","REMIZIDAE","攀雀","PARIDAE","山雀","PANURIDAE","文须雀","ALAUDIDAE","百灵","NICATORIDAE","斗鹎",
     "MACROSPHENIDAE","长嘴莺","CISTICOLIDAE","扇尾莺","ACROCEPHALIDAE","苇莺","DONACOBIIDAE","黑顶鹪鹩","BERNIERIDAE","马岛鹎","LOCUSTELLIDAE","蝗莺","PNOEPYGIDAE","鳞胸鹪鹛","HIRUNDINIDAE","燕","HYLIIDAE","拟攀雀",
     "AEGITHALIDAE","长尾山雀","ERYTHROCERCIDAE","红鹟","CETTIIDAE","树莺","PHYLLOSCOPIDAE","柳莺","PYCNONOTIDAE","鹎","SYLVIIDAE","莺鹛","PARADOXORNITHIDAE","鸦雀","ZOSTEROPIDAE","绣眼鸟","TIMALIIDAE","鹛","PELLORNEIDAE","幽鹛",
     "LEIOTHRICHIDAE","噪鹛","DULIDAE","棕榈䳭","BOMBYCILLIDAE","太平鸟","PTILIOGONATIDAE","丝鹟","HYLOCITREIDAE","林啸鹟","HYPOCOLIIDAE","连雀","MOHOIDAE","夏威夷吸蜜鸟","REGULIDAE","戴菊","TICHODROMIDAE","旋壁雀","SITTIDAE","䴓",
     "SALPORNITHIDAE","斑旋木雀","CERTHIIDAE","旋木雀","POLIOPTILIDAE","蚋莺","TROGLODYTIDAE","鹪鹩","ELACHURIDAE","丽星鹩鹛","BUPHAGIDAE","牛椋鸟","MIMIDAE","嘲鸫","STURNIDAE","椋鸟","CINCLIDAE","河乌","TURDIDAE","鸫",
     "MUSCICAPIDAE","鹟","PROMEROPIDAE","非洲食蜜鸟","MODULATRICIDAE","斑喉䳭","DICAEIDAE","啄花鸟","NECTARINIIDAE","太阳鸟","CHLOROPSEIDAE","叶鹎","IRENIDAE","和平鸟","PEUCEDRAMIDAE","绿森莺","UROCYNCHRAMIDAE","朱鹀",
     "PLOCEIDAE","织雀","VIDUIDAE","维达雀","ESTRILDIDAE","梅花雀","PRUNELLIDAE","岩鹨","PASSERIDAE","雀","MOTACILLIDAE","鹡鸰","FRINGILLIDAE","燕雀","RHODINOCICHLIDAE","鸫唐纳雀","CALCARIIDAE","铁爪鹀","EMBERIZIDAE","鹀",
     "PASSERELLIDAE","雀鹀","CALYPTOPHILIDAE","拟䳭唐纳雀","ZELEDONIIDAE","冠鹩森莺","PHAENICOPHILIDAE","棕榈唐纳雀","NESOSPINGIDAE","波多黎各唐纳雀","SPINDALIDAE","纹头唐纳雀","TERETISTRIDAE","灰森莺","ICTERIDAE","拟鹂",
     "PARULIDAE","森莺","CARDINALIDAE","美洲雀","MITROSPINGIDAE","乌脸唐纳雀","THRAUPIDAE","裸鼻雀"]
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
    ["Frederick","弗雷德里克"],["Fulton","富尔顿"],["Haford","哈福德"],["Hampton","汉普顿"],["Harford","哈福德"],["Highland","高地"],["Horry","霍里"],["Howard","霍华德"],["Jefferson","杰斐逊"],["Kent","肯特"],["Lancaster","兰开斯特"],
    ["Lee","李"],["Loudoun","劳登"],["Maricopa","马里科帕"],["Marion","马里恩"],["Mifflin","米夫林"],["Monroe","门罗"],["Montgomery","蒙哥马利"],["Ocean","海洋"],["Orange","奥兰治"],["Ottawa","渥太华"],["Pima","皮马"],
    ["Pinellas","皮尼拉斯"],["Prince George's","乔治王子"],["Prince William","威廉王子"],["Queen Anne's","安妮女王"],["Rockingham","洛金汉"],["Sarasota","萨拉索塔"],["Schuylkill","斯古吉尔"],["Suffolk","萨福克"],["Sussex","苏塞克斯"],
    ["York","约克"]];
pt_back.forEach((el)=>{el[0] = el[0]+" *County";el[1] = el[1]+"郡";});
pt_back.push(["Alameda Central","阿拉米达中央公园"],["Alaska","阿拉斯加州"],["Art.+Agape","艾盖浦艺术别墅酒店"],["Ash.+Sanctuary","灰谷鸟类保护区"],["Auvergne-Rhône-Alpes","奥弗涅-罗纳-阿尔卑斯大区"],["Bakkatjörn","巴卡特约恩湖"],
    ["Baltimore","巴尔的摩市"],["Beale Park","比尔公园"],["Bear.+Lakewood","莱克伍德市熊溪湖公园"],["Black Point Park.+","黑角公园及码头"],["Blackwater NWR","黑水NWR"],["Blue Mountains NP","蓝山NP"],["Bocca di Serchio","塞尔基奥河口"],
    ["Bois de Boulogne","布洛涅森林"],["Bowers Beach","鲍尔斯海滩"],["Box.+Road","盒子峡谷路"],["Cabo.+NWR","卡波罗霍NWR"],["California","加利福尼亚州"],["Cambridge","剑桥市"],["Campania","坎帕尼亚大区"],["Canada","加拿大"],
    ["Cannon Beach","卡农海滩"],["Cape Flattery","夫拉特角"],["Cape Hatteras","哈特拉斯角"],["Cape May.+SP","五月岬SP"],["Ceiba.+Inn","西巴乡村客栈"],["Central Park","中央公园"],["Cerro.+Cruz","十字架山"],["Charleston","查尔斯顿"],
    ["Chimney Rock SP","烟囱岩SP"],["China","中国"],["Chincoteague NWR","钦科蒂格NWR"],["Clear Creek Trail","清溪步道"],["Colón Province","科隆省"],["Congress.+Poolesville","普尔斯维尔镇国会马球俱乐部"],["Connecticut","康涅狄格州"],
    ["Cove.+Stamford","斯坦福市科夫岛WR"],["Crandon Park","克兰登公园"],["Cromwell Valley Park","克伦威尔溪谷公园"],["Denver","丹佛市"],["Desert NWR","沙漠NWR"],["Drangsnes","德朗斯内斯小镇"],["Eastern Neck NWR","东内克NWR"],
    ["El Pipila Monument","皮毕拉纪念碑"],["Etang.+Crau","圣马丁德克罗镇桤木池塘"],["Fjallsárlón","Fjallsárlón冰河湖"],["Florence","佛罗伦萨市"],["Fort McHenry","麦克亨利堡"],["France","法国"],["Frederick","弗雷德里克市"],
    ["Frog Pond WMA","蛙塘WMA"],["Fucecchio Marsh","富切基奥沼泽"],["Gamboa","甘博阿镇"],["Georgia","乔治亚州"],["Golfklúbbur Seltjarnarnes","塞尔特贾纳内斯高尔夫球场"],["Grassy Key","草岛"],["Guanajuato City","瓜纳华托城"],
    ["Guanajuato","瓜纳华托州"],["Halibut Point SP","大比目鱼角SP"],["Haute-Savoie","上萨瓦省"],["Heritage.+Park","遗产岛公园"],["Hobuck Beach","霍巴克海滩"],["Holywell Park","霍利韦尔公园"],["Homer.+Park","荷马古德尔斯基公园"],
    ["Hope.+Gardens","霍普植物园"],["Hólmavík","侯尔马维克小镇"],["Hótel Laugarhóll","Laugarhóll旅馆"],["Iceland","冰岛"],["Indian.+Inlet","印第安河入海口"],["Italy","意大利"],["Jiangshan Shuimeiren","江山睡美人"],
    ["Jiangsh.+Greenway","江山港滨水绿道"],["Jimei","集美"],["Jingshan Park","景山公园"],["Jones Beach SP","琼斯海滩SP"],["Jökulsárlón","杰古沙龙冰河湖"],["Kennedy Park","肯尼迪公园"],["Key West","西礁岛"],
    ["Kjarnaskógur","Kjarnaskógur森林"],["Lake Massaciuccoli","马萨丘科利湖"],["La Sabana Park","萨瓦纳公园"],["Látrabjarg","拉特拉尔角"],["Lianhuashan Park","莲花山公园"],["Little Estero Lagoon","小埃斯特罗泻湖"],
    ["Littleton","利特尔顿市"],["Longyan","龙岩市"],["Mackinac Island","麦基诺岛"],["Madera.+Trail","马德拉峡谷嘉莉国家山道"],["Madera.+Lodge","马德拉峡谷圣丽塔旅馆"],["Magee.+Area","玛吉沼泽WR"],["Maine","缅因州"],
    ["Manasquan Inlet","马纳斯泉海口"],["Mariner.+Park","水手角公园"],["Maryland Heights","马里兰高地一带"],["Matheson.+Park","马西森硬木公园"],["Mexico City","墨西哥城"],["Michigan","密西根州"],["Montego Bay","蒙特哥湾"],
    ["Montezuma NWR","蒙特祖玛NWR"],["Morazán Park","莫拉桑公园"],["Morro.+Bay","莫罗湾莫罗岩"],["Morse.+Lure","路尔湖摩士公园"],["Mouth.+Lagni","Regi Lagni运河口"],["Nevada","内华达州"],["New York City","纽约市"],["Nianbadu","廿八都"],
    ["Northwestern Region","西北地区"],["Ocean City","大洋城"],["Ohio","俄亥俄州"],["Old Hospital Park","老医院公园"],["Olympic NP","奥林匹克NP"],["Ontario","安大略省"],["Oregon","俄勒冈州"],["Panama","巴拿马"],["Paris","巴黎市"],
    ["Park.+Guarantees","社会保障公园"],["Patapsco.+Henryton","帕塔普斯科河谷SP"],["Paton.+Hummingbirds","佩顿蜂鸟中心"],["Pennyfield Lock","彭尼菲尔德闸"],["Pitt.+Causeway","皮特街堤道"],["Plantation Preserve","种植园保留地"],
    ["Red Rocks Park","红石公园"],["Riley's Lock","莱利闸"],["Rincón","林孔市"],["Rocky.+NWR","落基山阿森纳NWR"],["Saint Andrew","圣安德鲁堂区"],["Saint Ann","圣安堂区"],["Saint James","圣詹姆斯堂区"],["San San.+Road","三三派出所路"],
    ["Savannah NWR","萨凡纳NWR"],["Scottsdale Community College.*","斯科茨代尔市社区大学"],["Scotts.+Road","斯科茨码头路"],["Shamrock.+Center","三叶草公园"],["South Cape May Meadows","南五月岬草甸"],
    ["Stellwagen.+Sanctuary","斯特尔瓦根浅滩国家海洋保护区"],["Summer Palace","颐和园"],["Sunset Park","日落公园"],["Taoranting Park","陶然亭公园"],["The Bund.+Shanghai","上海外滩"],["Tjörnin.+Reykjavík","雷克雅未克托宁湖"],
    ["Truitts.+Road","特鲁伊特码头路"],["Tucson","图森市"],["Two.+May","五月岬两英里码头"],["Tybee Island","泰碧岛"],["United Kingdom","英国"],["Vermont","佛蒙特州"],["Violettes Lock","紫罗兰闸"],["Waggoner's Gap.+","瓦格纳山口观鹰台"],
    ["Washington","华盛顿州"],["Waterton Canyon","沃特顿峡谷"],["Wenlock WMA","温洛克WMA"],["Western Region","西部地区"],["Wheat Ridge","麦岭市"],["Xiamen","厦门"],["Xianxiaguan Trail","仙霞关古道"],["Yokuts Park","约库特公园"],
    ["Yongding Hongkeng Tulou","永定洪坑土楼"],["Yuanmingyuan Park","圆明园"]);
var pt_cnt  = new Array(pt_back.length).fill(0);
var fam_ln  = 8;  //family length
var order   = (/&order|^order/i).test(window.location.search.substring(1));
var comma   = [", ","，"];
var modBrd  = {name:[],cname:[],newbird:[]},modDat;
var expandinfo = (/(stat\.html|country=|loc=|query=)/i).test(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
var cornell_name = [["whistling_duck","whistling-duck"],["brant_goose","brant"],["common_pheasant","ring-necked_pheasant"],["squirrel_cuckoo","squirrel-cuckoo"],["grey_plover","black-bellied_plover"],
    ["american_grey_flycatcher","gray_flycatcher"],["wood_pigeon","wood-pigeon"],["grey","gray"],["golden_plover","golden-plover"],["little_auk","dovekie"],["storm_petrel","storm-petrel"],
    ["american_white_ibis","white_ibis"],["screech_owl","screech-owl"],["rough-legged_buzzard","rough-legged_hawk"],["wood_pewee","wood-pewee"],["scrub_jay","scrub-jay"],["western_jackdaw","eurasian_jackdaw"],
    ["northern_raven","common_raven"],["sand_martin","bank_swallow"],["american_cliff_swallow","cliff_swallow"],["american_bushtit","bushtit"],["common_starling","european_starling"],
    ["common_blackbird","eurasian_blackbird"],["two-barred_crossbill","white-winged_crossbill"],["american_yellow_warbler","norther_yellow_warbler"],["rosy_finch","rosy-finch"],
    ["lucifer_sheartail","lucifer_hummingbird"],["black-necked_grebe","eared_grebe"],["collared_dove","collared-dove"],["rock_dove","rock_pigeon"],["cattle_egret","cattle-egret"]];

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
    return mon+'/'+year;
}

function mysort(a,b){
    if (window.lifer) return a.lifer.toJSON().localeCompare(b.lifer.toJSON());
    if (window.usechinese) return a.cname.localeCompare(b.cname,'zh-CN');
    return a.name.localeCompare(b.name,'en');
}

function a_id(album,id){
    return stradd(album+"/"+album+"_",id);
}

//append '20' to id automatically
function m_id(id){
    if (!Array.isArray(id)){id = [id];}
    let num = 0; //Math.floor(parseInt(id[0].slice(0,6))/900000);
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
    if (is_num(photo[1])) return a_id(photo[0],photo[1]);
    return Array.prototype.concat.apply([],photo.map((el)=>Array.isArray(el)?(is_num(el[1])?a_id(el[0],el[1]):m_id(el)):(/\//.test(el)?el:m_id(el))));
}

function baike(name,before,aftin,aftout){
    if (typeof name!=='string') return "https://dongniao.net/nd/"+name.toString();
    name = replace_acronym(name);
    if (before==null) return "https://baike.baidu.com/item/"+name;
    if (aftin==null) aftin='';
    if (aftout==null) aftout='';
    return before+my_href("https://baike.baidu.com/item/"+name,name+aftin,name)+aftout;
}

function cornellurl(bid){
    cornell_name.forEach((el)=>{bid = bid.replace(el[0],el[1]);});  //currently Avilist name doesn't agree with allaboutbirds
    return "https://www.allaboutbirds.org/guide/"+bid.trim()+"/id";
}

function ebirdurl(bid){
    return "https://ebird.org/species/"+bid.trim()+"/";
}

function spot(id,name){
    if (typeof name!=='string') return "https://birdinghotspots.org/hotspot/"+id;
    let tmp = strsplit(name);
    return tmp[0]+my_href("https://birdinghotspots.org/hotspot/"+id,tmp[1],id)+tmp[2];
}

function gmap(name,lat,lon){
    let tmp  = strsplit(name);
    let tmp1 = ((lat==null)||(lon==null))?reform(tmp[1],"+"):(lat.toString()+"%2C"+lon.toString());
    return tmp[0]+my_href("https://www.google.com/maps/search/?api=1&query="+tmp1,tmp[1],"gmap")+tmp[2];
}

function bmap(name,lat,lon){
    if ((lat==null)||(lon==null)) return name;
    return my_href("http://api.map.baidu.com/marker?location="+lat.toString()+"%2C"+lon.toString()+"&output=html&coord_type=gcj02&title="+name,name,"bmap");
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
    let tmp1,tmp2,tmp3,tmp4,tmp5,tmp6,tmp,pid,date,head,tail;
    loc.forEach((el)=>{
        el = el.trim();
        if (((info.length%6)>0)&&(lurls[el]!=null)){info.push(...Array(6-(info.length%6)).fill(''));}
        else if (((info.length%6)==1)&&(!(/([0-9]{1,2}\/[0-9]{4}|s[0-9]{8,})/i).test(el))){info.push('');} 
        info.push(el);
    });
    if ((info.length%6)>0) info.push(...Array(6-(info.length%6)).fill(''));
    for (var i=0;i<Math.ceil(info.length/6.0);i++){
        tmp3 = info[6*i+1].lastIndexOf(',');
        tmp4 = /[0-9]{1,2}\/[0-9]{4}/.test(info[6*i+1]);
        tmp1 = (tmp3>=0)?info[6*i+1].substr(0,tmp3):(tmp4?info[6*i+1]:'');
        tmp2 = (tmp3>=0)?info[6*i+1].substr(tmp3+1):(tmp4?'':info[6*i+1]);
        if (tmp1.length==0) tmp1=getdate(photo[i]);
        if ((tmp2.length>0)&&(!ebirdlist.includes(tmp2))) ebirdlist.push(tmp2);
        date = (tmp2.length>0)?my_href("https://ebird.org/checklist/"+tmp2,tmp1,tmp2):tmp1;
        if (info[6*i+3].length>0){
           if (info3cnt.some((el,indx)=>{tmp6=indx;return (el[0]===info[6*i+3]);})){
              info3cnt[tmp6][1]=info3cnt[tmp6][1]+1;
           }else{
              info3cnt.push([info[6*i+3],1]);
           };
        }
        if (info[6*i+2].length>0){
           let tmp_info = info[6*i+2];
           let tmp_chn  = "";
           while (pt_front.some((el)=>{tmp5=el[1];return (new RegExp("^ *"+el[0]+" *($|,)","i")).test(tmp_info);})) {
              tmp_chn  = tmp_chn+((tmp_chn.length>0)?comma[1]:"")+tmp5;
              tmp_info = RegExp.rightContext;
           }
           if (tmp_chn.length>0){
              info[6*i+4] = tmp_chn+((info[6*i+4].length>0)?comma[1]:"")+info[6*i+4];
           }
           if (tmp_info.length>0) {
              tmp_chn = "";
              while (pt_back.some((el,indx)=>{tmp5=el[1];tmp6=indx;return  (new RegExp("(^|,) *(<[^<>]+>)* *"+el[0]+" *(</a>)* *$","i")).test(tmp_info);})) {
                 tmp_chn  = tmp_chn+tmp5;
                 tmp_info = RegExp.leftContext;
                 pt_cnt[tmp6] = pt_cnt[tmp6]+1;
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
        if (date.length>0) date = stradd(comma,date);
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
    if ((typeof ebid!=='string')||(cnrexp.test(ebid))){
       cbid = ebid;
       ebid = "";
    }
    if (cbid==null) cbid = cname;
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