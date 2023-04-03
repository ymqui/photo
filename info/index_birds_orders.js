<!--
  //variables for stat counting
  var loc_cnts   = {};
  var py_cnts    = {};
  var misc_cnts  = [0,0,0];
  var dig_cnts   = 0;
  var pic_cnts   = 0;
  var ebirdlist  = [];

  function myOrder(name,cname,desc,cdesc,family){
     return {name:name,cname:cname,desc:desc,cdesc:cdesc,family:family};
  }

  function myFamily(info){
     var tmp = [];
     for (var i=0;i<Math.round((info.length)/4.0);i++){
         tmp.push({name:info[4*i],cname:info[4*i+1],desc:info[4*i+2],cdesc:info[4*i+3]});
     }
     return tmp;
  }
	
  //according to http://www.worldbirdnames.org/ioc-lists/master-list-2/
  //chinese names https://dongniao.net/taxonomy.html
  var orders = [], family = [];

  family = myFamily(["STRUTHIONIDAE","鸵鸟科","Ostriches","鸵鸟"]);
  orders.push(myOrder("STRUTHIONIFORMES","鸵鸟目","Ostriches","鸵鸟",family));

  family = myFamily(["RHEIDAE","美洲鸵鸟科","Rheas","美洲鸵鸟"]);
  orders.push(myOrder("RHEIFORMES","美洲鸵鸟目","Rheas","美洲鸵鸟",family));

  family = myFamily(["APTERYGIDAE","鹬鸵科","Kiwis","几维鸟"]);
  orders.push(myOrder("APTERYGIFORMES","鹬鸵目","Kiwis","几维鸟",family));

  family = myFamily(["CASUARIIDAE","鹤鸵科","Cassowaries and Emus","鹤鸵和鸸鹋"]);
  orders.push(myOrder("CASUARIIFORMES","鹤鸵目","Cassowaries and Emus","鹤鸵和鸸鹋",family));

  family = myFamily(["TINAMIDAE","䳍科","Tinamous","䳍鸟"]);
  orders.push(myOrder("TINAMIFORMES","䳍形目","Tinamous","䳍鸟",family));

  family = myFamily(["ANHIMIDAE","叫鸭科","Screamers","叫鸭",                       
     "ANSERANATIDAE","鹊雁科","Magpie Goose","鹊雁",
     "ANATIDAE","鸭科","Ducks, Geese, and Swans","鸭，雁和天鹅"]);
  orders.push(myOrder("ANSERIFORMES","雁形目","Ducks, Geese, and Swans","鸭，雁和天鹅",family));

  family = myFamily(["MEGAPODIIDAE","塚雉科","Megapodes","塚雉",
     "CRACIDAE","凤冠雉科","Chachalacas, Curassows, and Guans","小冠雉，凤冠雉和冠雉",
     "NUMIDIDAE","珠鸡科","Guineafowl","珠鸡",
     "ODONTOPHORIDAE","齿鹑科","New World Quail","美洲鹑",
     "PHASIANIDAE","雉科","Pheasants and Allies","雉鸡，松鸡，火鸡和旧大陆的鹑"]);
  orders.push(myOrder("GALLIFORMES","鸡形目","Grouse, Quail, and Allies","鸡，鹑和雉等",family));

  family = myFamily(["CAPRIMULGIDAE","夜鹰科","Nightjars","夜鹰"]);
  orders.push(myOrder("CAPRIMULGIFORMES","夜鹰目","Nightjars","夜鹰",family));

  family = myFamily(["STEATORNITHIDAE","油鸱科","Oilbird","油鸱"]);
  orders.push(myOrder("STEATORNITHIFORMES","油鸱目","Oilbird","油鸱",family));

  family = myFamily(["NYCTIBIIDAE","林鸮科","Potoos","林鸮"]);
  orders.push(myOrder("NYCTIBIIFORMES","林鸮目","Potoos","林鸮",family));

  family = myFamily(["PODARGIDAE","蛙口夜鹰科","Frogmouths","蛙口夜鹰"]);
  orders.push(myOrder("PODARGIFORMES","蛙口夜鹰目","Frogmouths","蛙口夜鹰",family));

  family = myFamily(["AEGOTHELIDAE","裸鼻鸱科","Owlet-nightjars","裸鼻鸱"]);
  orders.push(myOrder("AEGOTHELIFORMES","裸鼻鸱目","Owlet-nightjars","裸鼻鸱",family));

  family = myFamily(["HEMIPROCNIDAE","凤头雨燕科","Treeswifts","凤头雨燕",
    "APODIDAE","雨燕科","Swifts","雨燕",
    "TROCHILIDAE","蜂鸟科","Hummingbirds","蜂鸟"]);
  orders.push(myOrder("APODIFORMES","雨燕目","Swifts and Hummingbirds","雨燕和蜂鸟",family));

  family = myFamily(["MUSOPHAGIDAE","蕉鹃科","Turacos","蕉鹃"]);
  orders.push(myOrder("MUSOPHAGIFORMES","蕉鹃目","Turacos","蕉鹃",family));

  family = myFamily(["OTIDIDAE","鸨科","Bustards","鸨"]);
  orders.push(myOrder("OTIDIFORMES","鸨形目","Bustards","鸨",family));

  family = myFamily(["CUCULIDAE","杜鹃科","Cuckoos, Roadrunners, and Anis","杜鹃，走鹃和犀鹃"]);
  orders.push(myOrder("CUCULIFORMES","鹃形目","Cuckoos","杜鹃等",family));

  family = myFamily(["MESITORNITHIDAE","拟鹑科","Mesites","拟鹑"]);
  orders.push(myOrder("MESITORNITHIFORMES","拟鹑目","Mesites","拟鹑",family));

  family = myFamily(["PTEROCLIDAE","沙鸡科","Sandgrouse","沙鸡"]);
  orders.push(myOrder("PTEROCLIFORMES","沙鸡目","Sandgrouse","沙鸡",family));

  family = myFamily(["COLUMBIDAE","鸽鸠科","Pigeons and Doves","鸽和鸠"]);
  orders.push(myOrder("COLUMBIFORMES","鸽形目","Pigeons and Doves","鸽和鸠",family));

  family = myFamily(["HELIORNITHIDAE","日鷉科","Finfoots","鳍趾鷉",
    "SAROTHRURIDAE","侏秧鸡科","Flufftails","侏秧鸡",
    "RALLIDAE","秧鸡科","Rails, Gallinules, and Coots","秧鸡，水鸡和骨顶鸡",
    "PSOPHIIDAE","喇叭鸟科","Trumpeters","喇叭声鹤",
    "GRUIDAE","鹤科","Cranes","鹤",
    "ARAMIDAE","秧鹤科","Limpkins","秧鹤"]);
  orders.push(myOrder("GRUIFORMES","鹤形目","Cranes and Rails","鹤和秧鸡等",family));

  family = myFamily(["PODICIPEDIDAE","䴙䴘科","Grebes","䴙䴘"]);
  orders.push(myOrder("PODICIPEDIFORMES","䴙䴘目","Grebes","䴙䴘",family));

  family = myFamily(["PHOENICOPTERIDAE","火烈鸟科","Flamingos","火烈鸟"]);
  orders.push(myOrder("PHOENICOPTERIFORMES","火烈鸟目","Flamingos","火烈鸟",family));

  family = myFamily(["TURNICIDAE","三趾鹑科","Buttonquail","三趾鹑",
    "BURHINIDAE","石鸻科","Thick-knees","石鸻",
    "CHIONIDAE","鞘嘴鸥科","Sheathbills","鞘嘴鸥",
    "PLUVIANELLIDAE","短腿鸻科","Magellanic Plover","短腿鸻",
    "HAEMATOPODIDAE","蛎鹬科","Oystercatchers","蛎鹬",
    "IBIDORHYNCHIDAE","鹮嘴鹬科","Ibisbill","鹮嘴鹬",
    "RECURVIROSTRIDAE","反嘴鹬科","Stilts and Avocets","长脚鹬和反嘴鹬",
    "CHARADRIIDAE","鸻科","Plovers and Lapwings","鸻和麦鸡",
    "PLUVIANIDAE","埃及燕鸻科","Egyptian Plover","埃及燕鸻",
    "ROSTRATULIDAE","彩鹬科","Painted-snipes","彩鹬",
    "JACANIDAE","水雉科","Jacanas","水雉",
    "PEDIONOMIDAE","领鹑科","Plains-wanderer","领鹑",
    "THINOCORIDAE","籽鹬科","Seedsnipes","籽鹬",
    "SCOLOPACIDAE","鹬科","Sandpipers, Phalaropes, and Allies","鹬，矶鹬和瓣蹼鹬等",
    "DROMADIDAE","蟹鸻科","Crab Plover","蟹鸻",
    "GLAREOLIDAE","燕鸻科","Coursers and Pratincoles","走鸻和燕鸻",
    "LARIDAE","鸥科","Gulls, Terns, and Skimmers","鸥，燕鸥和剪嘴鸥",
    "STERCORARIIDAE","贼鸥科","Skuas and Jaegers","贼鸥",
    "ALCIDAE","海雀科","Auks, Murres, and Puffins","海雀，海鸦和海鹦"]);
  orders.push(myOrder("CHARADRIIFORMES","鸻形目","Plovers, Sandpipers, and Allies","鸻，鹬和鸥等",family));

  family = myFamily(["RHYNOCHETIDAE","鹭鹤科","Rhynochetos","鹭鹤",
    "EURYPYGIDAE","日鳽科","Sunbittern","日鳽"]);
  orders.push(myOrder("EURYPYGIFORMES","日鳽目","Rhynochetos and Sunbittern","鹭鹤和日鳽",family));

  family = myFamily(["PHAETHONTIDAE","鹲科","Tropicbirds","鹲"]);
  orders.push(myOrder("PHAETHONTIFORMES","鹲形目","Tropicbird","鹲",family));

  family = myFamily(["GAVIIDAE","潜鸟科","Loons","潜鸟"]);
  orders.push(myOrder("GAVIIFORMES","潜鸟目","Loons","潜鸟",family));

  family = myFamily(["SPHENISCIDAE","企鹅科","Penguin","企鹅"]);
  orders.push(myOrder("SPHENISCIFORMES","企鹅目","Penguin","企鹅",family));

  family = myFamily(["OCEANITIDAE","洋海燕科","Austral Storm Petrels","澳洲海燕",
    "DIOMEDEIDAE","信天翁科","Albatrosses","信天翁",
    "HYDROBATIDAE","海燕科","Storm-Petrels","海燕",
    "PROCELLARIIDAE","鹱科","Shearwaters and Petrels","鹱"]);
  orders.push(myOrder("PROCELLARIIFORMES","鹱形目","Tubenoses","管鼻类鸟",family));

  family = myFamily(["CICONIIDAE","鹳科","Storks","鹳"]);
  orders.push(myOrder("CICONIIFORMES","鹳形目","Storks","鹳",family));

  family = myFamily(["FREGATIDAE","军舰鸟科","Frigatebirds","军舰鸟",
    "SULIDAE","鲣鸟科","Boobies and Gannets","鲣鸟",
    "ANHINGIDAE","蛇鹈科","Darters","蛇鹈",
    "PHALACROCORACIDAE","鸬鹚科","Cormorants","鸬鹚"]);
  orders.push(myOrder("SULIFORMES","鲣鸟目","Frigatebirds, Boobies, Cormorants, Darters, and Allies","军舰鸟，鲣鸟，鸬鹚和蛇鹈等",family));

  family = myFamily(["THRESKIORNITHIDAE","鹮科","Ibises and Spoonbills","鹮和琵鹭",
    "ARDEIDAE","鹭科","Bitterns, Herons, and Allies","鹭和麻鳽",
    "SCOPIDAE","锤头鹳科","Hamerkop","锤头鹳",
    "BALAENICIPITIDAE","鲸头鹳科","Shoebill","鲸头鹳",
    "PELECANIDAE","鹈鹕科","Pelicans","鹈鹕"]);
  orders.push(myOrder("PELECANIFORMES","鹈形目","Pelicans, Herons, Ibises, and Allies","鹈鹕，鹭和朱鹭等",family));

  family = myFamily(["OPISTHOCOMIDAE","麝雉科","Hoatzin","麝雉"]);
  orders.push(myOrder("OPISTHOCOMIFORMES","麝雉目","Hoatzin","麝雉",family));

  family = myFamily(["CATHARTIDAE","美洲鹫科","New World Vultures","美洲鹫",
    "SAGITTARIIDAE","鹭鹰科","Secretarybird","鹭鹰",
    "PANDIONIDAE","鹗科","Ospreys","鹗",
    "ACCIPITRIDAE","鹰科","Kites, Hawks, Eagles, and Allies","鹰"]);
  orders.push(myOrder("ACCIPITRIFORMES","鹰形目","Hawks, Kites, Eagles, and Allies","鹰，鹗和鹫等",family));

  family = myFamily(["TYTONIDAE","仓鸮科","Barn Owls","仓鸮",
    "STRIGIDAE","鸱鸮科","Typical Owls","鸮"]);
  orders.push(myOrder("STRIGIFORMES","鸮形目","Owls","鸮",family));

  family = myFamily(["COLIIDAE","鼠鸟科","Mousebirds","鼠鸟"]);
  orders.push(myOrder("COLIIFORMES","鼠鸟目","Mousebirds","鼠鸟",family));

  family = myFamily(["LEPTOSOMIDAE","鹃三宝鸟科","Cuckoo Roller","鹃三宝鸟"]);
  orders.push(myOrder("LEPTOSOMIFORMES","鹃三宝鸟目","Cuckoo Roller","鹃三宝鸟",family));

  family = myFamily(["TROGONIDAE","咬鹃科","Trogons and Quetzals","咬鹃和绿咬鹃"]);
  orders.push(myOrder("TROGONIFORMES","咬鹃目","Trogons and Quetzals","咬鹃和绿咬鹃",family));

  family = myFamily(["UPUPIDAE","戴胜科","Hoopoes","戴胜",
    "PHOENICULIDAE","林戴胜科","Wood Hoopoes","林戴胜",
    "BUCORVIDAE","地犀鸟科","Ground Hornbills","地犀鸟",
    "BUCEROTIDAE","犀鸟科","Hornbills","犀鸟"]);
  orders.push(myOrder("BUCEROTIFORMES","犀鸟目","Hornbills, Hoopoes and Wood Hoopoes","犀鸟，戴胜和林戴胜",family));

  family = myFamily(["CORACIIDAE","佛法僧科","Rollers","三宝鸟",
    "BRACHYPTERACIIDAE","地三宝鸟科","Ground-Rollers","地三宝鸟",
    "ALCEDINIDAE","翠鸟科","Kingfishers","翠鸟",
    "TODIDAE","短尾鴗科","Todies","短尾鴗",
    "MOMOTIDAE","翠鴗科","Motmots","翠鴗",
    "MEROPIDAE","蜂虎科","Bee-eaters","蜂虎"]);
  orders.push(myOrder("CORACIIFORMES","佛法僧目","Kingfishers and Allies","翠鸟等",family));

  family = myFamily(["GALBULIDAE","鹟鴷科","Jacamars","鹟鴷",
    "BUCCONIDAE","蓬头鴷科","Puffbirds","蓬头鴷",
    "CAPITONIDAE","须鴷科","New World Barbets","须鴷",
    "SEMNORNITHIDAE","巨嘴拟鴷科","Toucan-barbets","巨嘴拟鴷",
    "RAMPHASTIDAE","巨嘴鸟科","Toucans, Aracaris and Toucanets","巨嘴鸟",
    "MEGALAIMIDAE","拟鴷科","Asian Barbets","拟鴷",
    "LYBIIDAE","非洲拟啄木鸟科","African Barbets and Tinkerbirds","非洲拟鴷",
    "INDICATORIDAE","响蜜鴷科","Honeyguides","响蜜鴷",
    "PICIDAE","啄木鸟科","Woodpeckers and Allies","啄木鸟等"]);
  orders.push(myOrder("PICIFORMES","䴕形目","Woodpeckers","啄木鸟",family));

  family = myFamily(["CARIAMIDAE","叫鹤科","Seriemas","叫鹤"]);
  orders.push(myOrder("CARIAMIFORMES","叫鹤目","Seriemas","叫鹤",family));

  family = myFamily(["FALCONIDAE","隼科","Caracaras and Falcons","隼"]);
  orders.push(myOrder("FALCONIFORMES","隼形目","Caracaras and Falcons","隼",family));
  
  family = myFamily(["STRIGOPIDAE","鸮鹦鹉科","New Zealand Parrots","新西兰鹦鹉",
    "CACATUIDAE","凤头鹦鹉科","Cockatoos","凤头鹦鹉",
    "PSITTACIDAE","鹦鹉科","African and American Parrots","非洲和美洲鹦鹉",
    "PSITTACULIDAE","长尾鹦鹉科","Old World Parrots","旧大陆鹦鹉"]);
  orders.push(myOrder("PSITTACIFORMES","鹦形目","Parrots and Allies","鹦鹉",family));

  family = myFamily(["ACANTHISITTIDAE","刺鹩科","New Zealand Wrens","刺鹩",
    "SAPAYOIDAE","阔嘴霸鹟科","Sapayoa","阔嘴霸鹟",
    "PHILEPITTIDAE","裸眉鸫科","Asities","裸眉鸫",
    "EURYLAIMIDAE","阔嘴鸟科","Broadbills","阔嘴鸟",
    "CALYPTOMENIDAE","绿阔嘴鸟","African & Green Broadbills","绿阔嘴鸟",
    "PITTIDAE","八色鸫科","Pittas","八色鸫",
    "FURNARIIDAE","灶鸟科","Ovenbirds","灶鸟",
    "THAMNOPHILIDAE","蚁鸟科","Antbirds","蚁鸟",
    "FORMICARIIDAE","蚁鸫科","Antthrushes","蚁鸫",
    "GRALLARIIDAE","蚁八色鸫科","Antpittas","蚁鸫",
    "CONOPOPHAGIDAE","食蚊鸟科","Gnateaters","食蚊鸟",
    "RHINOCRYPTIDAE","窜鸟科","Tapaculos","窜鸟",
    "MELANOPAREIIDAE","月胸窜鸟科","Crescent-chests","月胸窜鸟",
    "TYRANNIDAE","霸鹟科","Tyrant Flycatchers","霸鹟",
    "COTINGIDAE","伞鸟科","Cotingas","伞鸟",
    "PIPRIDAE","娇鹟科","Manakins","娇鹟科",
    "TITYRIDAE","蒂泰霸鹟科","Tityras and Becards","蒂泰霸鹟和厚嘴霸鹟",
    "MENURIDAE","琴鸟科","Lyrebirds","琴鸟",
    "ATRICHORNITHIDAE","薮鸟科","Scrub-birds","薮鸟",
    "PTILONORHYNCHIDAE","园丁鸟科","Bowerbirds","园丁鸟",
    "CLIMACTERIDAE","短嘴旋木雀科","Australasian Treecreepers","短嘴旋木雀科",
    "MALURIDAE","细尾鹩莺科","Australasian Wrens","细尾鹩莺",
    "MELIPHAGIDAE","吸蜜鸟科","Honeyeaters","吸蜜鸟",
    "DASYORNITHIDAE","刺莺科","Bristlebirds","刺莺",
    "PARDALOTIDAE","斑食蜜鸟科","Pardalotes","斑食蜜鸟",
    "ACANTHIZIDAE","细嘴莺科","Australasian Warblers","细嘴莺",
    "POMATOSTOMIDAE","弯嘴鹛科","Australasian Babblers","弯嘴鹛",
    "ORTHONYCHIDAE","刺尾鸫科","Logrunners","刺尾鸫",
    "CNEMOPHILIDAE","冠极乐鸟科","Satinbirds","极乐鸟",
    "MELANOCHARITIDAE","啄果鸟科","Berrypeckers and Longbills","啄果鸟和弯嘴吸蜜鸟",
    "PARAMYTHIIDAE","冠啄果鸟科","Painted Berrypeckers","冠啄果鸟",
    "CALLAEIDAE","垂耳鸦科","New Zealand Wattlebirds","垂耳鸦",
    "NOTIOMYSTIDAE","缝叶吸蜜鸟科","Stitchbird","缝叶吸蜜鸟",
    "PSOPHODIDAE","啸冠鸫科","Whipbirds","啸冠鸫",
    "CINCLOSOMATIDAE","鹑鸫科","Quail-thrushes and Jewel-babblers","鹑鸫和丽鸫",
    "PLATYSTEIRIDAE","疣眼鹟科","Wattle-eyes and Batises","疣眼鹟和蓬背鹟",
    "MALACONOTIDAE","丛鵙科","Bush-shrikes and Puffbacks","丛鵙和篷背鵙",
    "MACHAERIRHYNCHIDAE","船嘴鹟科","Boatbills","船嘴鹟",
    "VANGIDAE","钩嘴鵙科","Vangas","钩嘴鵙",
    "PITYRIASIDAE","棘头鵙科","Bristlehead","棘头鵙",
    "ARTAMIDAE","燕鵙科","Woodswallows and Butcherbirds","燕鵙和钟鹊",
    "RHAGOLOGIDAE","斑啸鹟科","Mottled Berryhunter","斑啸鹟",
    "AEGITHINIDAE","雀鹎科","Ioras","雀鹎",
    "CAMPEPHAGIDAE","鹃鵙科","Cuckooshrikes","鹃鵙",
    "MOHOUIDAE","黄头刺莺科","Whiteheads","刺莺",
    "NEOSITTIDAE","澳鳾科","Sittellas","澳鳾",
    "EULACESTOMATIDAE","肉垂鵙雀鹟科","Ploughbill","肉垂鵙雀鹟",
    "OREOICIDAE","冠钟鹟科","Australo-Papuan Bellbirds","钟鹟",
    "FALCUNCULIDAE","鵙雀鹟科","Shriketit","鵙雀鹟",
    "PACHYCEPHALIDAE","啸鹟科","Whistlers","啸鹟",
    "LANIIDAE","伯劳科","Shrikes","伯劳",
    "VIREONIDAE","莺雀科","Vireos","莺雀",
    "ORIOLIDAE","黄鹂科","Orioles and Figbirds","黄鹂和裸眼鹂",
    "DICRURIDAE","卷尾科","Drongos","卷尾",
    "RHIPIDURIDAE","扇尾鹟科","Fantails","扇尾鹟",
    "MONARCHIDAE","王鹟科","Monarchs","王鹟",
    "PLATYLOPHIDAE","冠鸦科","Jayshrike","冠鸦",
    "CORVIDAE","鸦科","Jays, Magpies and Crows","鸦和喜鹊",
    "CORCORACIDAE","澳鸦科","Australian Mudnesters","澳鸦",
    "MELAMPITTIDAE","黑脚风鸟科","Melampitta","黑脚风鸟",
    "IFRITIDAE","蓝顶鹛鸫科","Ifrit","蓝顶鹛鸫",
    "PARADISAEIDAE","极乐鸟科","Birds-of-paradise","极乐鸟",
    "PETROICIDAE","鸲鹟科","Australasian Robins","鸲鹟",
    "PICATHARTIDAE","岩鹛科","Rockfowl","岩鹛",
    "CHAETOPIDAE","岩鸫科","Rockjumpers","岩鸫",
    "EUPETIDAE","长颈鸫科","Rail-babbler","长颈鸫",
    "BOMBYCILLIDAE","太平鸟科","Waxwings","太平鸟",
    "PTILIOGONATIDAE","丝鹟科","Silky-flycatchers","丝鹟",
    "HYPOCOLIIDAE","连雀科","Hypocolius","连雀",
    "DULIDAE","棕榈䳭科","Palmchat","棕榈䳭",
    "MOHOIDAE","夏威夷吸蜜鸟科","Hawaiian Honeyeaters","夏威夷吸蜜鸟",
    "HYLOCITREIDAE","林啸鹟科","Hylocitrea","林啸鹟",
    "STENOSTIRIDAE","仙莺科","Fairy Flycatchers","仙莺",
    "PARIDAE","山雀科","Chickadees and Titmice","山雀",
    "REMIZIDAE","攀雀科","Penduline-Tits","攀雀",
    "NICATORIDAE","斗鹎科","Nicators","斗鹎",
    "PANURIDAE","文须雀科","Bearded Reedling","文须雀",
    "ALAUDIDAE","百灵科","Larks","百灵",
    "PYCNONOTIDAE","鹎科","Bulbuls","鹎 ",
    "HIRUNDINIDAE","燕科","Swallows","燕",
    "PNOEPYGIDAE","鳞胸鹪鹛科","Cupwings","鹪鹛",
    "MACROSPHENIDAE","长嘴莺科","Crombecs and African Warblers","森莺和长嘴莺",
    "CETTIIDAE","树莺科","Cettid Warblers","树莺",
    "SCOTOCERCIDAE","纹鹪莺科","Streaked Scrub Warbler","纹鹪莺",
    "ERYTHROCERCIDAE","红鹟科","Yellow Flycatchers","红鹟",
    "HYLIIDAE","拟攀雀科","Hylias","拟攀雀",
    "AEGITHALIDAE","长尾山雀科","Bushtits","长尾山雀",
    "PHYLLOSCOPIDAE","柳莺科","Leaf Warblers","柳莺",
    "ACROCEPHALIDAE","苇莺科","Reed-Warblers","苇莺",
    "LOCUSTELLIDAE","蝗莺科","Grassbirds","蝗莺",
    "DONACOBIIDAE","黑顶鹪鹩科","Donacobius","黑顶鹪鹩",
    "BERNIERIDAE","马岛鹎科","Madagascan Warblers","马岛鹎",
    "CISTICOLIDAE","扇尾莺科","Cisticolas","扇尾莺",
    "SYLVIIDAE","莺鹛科","Old World Warblers","旧大陆莺",
    "PARADOXORNITHIDAE","鸦雀科","Parrotbills and allies","鸦雀",
    "ZOSTEROPIDAE","绣眼鸟科","White-eyes","绣眼鸟",
    "TIMALIIDAE","鹛科","Babblers and Scimitar-Babblers","鹛和钩嘴鹛",
    "PELLORNEIDAE","幽鹛科","Fulvettas and Ground Babblers","幽鹛",
    "ALCIPPEIDAE","雀鹛科","Alcippe Fulvettas","雀鹛",
    "LEIOTHRICHIDAE","噪鹛科","Laughingthrushes","噪鹛",
    "MODULATRICIDAE","斑喉䳭科","Dapplethroat and allies","斑喉䳭",
    "PROMEROPIDAE","非洲食蜜鸟科","Sugarbirds","非洲食蜜鸟",
    "IRENIDAE","和平鸟科","Fairy Bluebirds","和平鸟",
    "REGULIDAE","戴菊科","Kinglets","戴菊",
    "ELACHURIDAE","丽星鹩鹛科","Elachura","丽星鹩鹛",
    "HYLIOTIDAE","丛莺科","Hyliotas","丛莺",
    "TROGLODYTIDAE","鹪鹩科","Wrens","鹪鹩",
    "POLIOPTILIDAE","蚋莺科","Gnatcatchers","蚋莺",
    "SITTIDAE","䴓科","Nuthatches","䴓",
    "TICHODROMIDAE","旋壁雀科","Wallcreeper","旋壁雀",
    "CERTHIIDAE","旋木雀科","Creepers","旋木雀",
    "MIMIDAE","嘲鸫科","Mockingbirds, Thrashers, and Allies","嘲鸫",
    "STURNIDAE","椋鸟科","Starlings and Allies","椋鸟",
    "BUPHAGIDAE","牛椋鸟科","Oxpeckers","牛椋鸟",
    "TURDIDAE","鸫科","Thrushes","鸫",
    "MUSCICAPIDAE","鹟科","Old World Flycatchers","旧大陆鹟",
    "CINCLIDAE","河乌科","Dippers","河乌",
    "CHLOROPSEIDAE","叶鹎科","Leafbirds","叶鹎",
    "DICAEIDAE","啄花鸟科","Flowerpeckers","啄花鸟",
    "NECTARINIIDAE","太阳鸟科","Sunbirds","太阳鸟",
    "PASSERIDAE","雀科","Old World Sparrows","旧大陆麻雀",
    "PLOCEIDAE","织雀科","Weavers","织雀",
    "ESTRILDIDAE","梅花雀科","Waxbills，Munias and Allies","梅花雀和文鸟等",
    "VIDUIDAE","维达雀科","Indigobirds and Whydahs","维达雀",
    "PEUCEDRAMIDAE","绿森莺科","Olive Warbler","绿森莺",
    "PRUNELLIDAE","岩鹨科","Accentors","岩鹨",
    "MOTACILLIDAE","鹡鸰科","Wagtails and Pipits","鹡鸰和鹨 ",
    "UROCYNCHRAMIDAE","朱鹀科","Przevalski's Finch","朱鹀",
    "FRINGILLIDAE","燕雀科","Finches and Allies","燕雀等",
    "CALCARIIDAE","铁爪鹀科","Longspurs and Snow Buntings","铁爪鹀和雪鹀",
    "RHODINOCICHLIDAE","鸫唐纳雀科","Thrush-tanager","鸫唐纳雀",
    "EMBERIZIDAE","鹀科","Buntings","鹀",
    "PASSERELLIDAE","雀鹀科","New World Sparrows","美洲麻雀",
    "CALYPTOPHILIDAE","拟䳭唐纳雀科","Chat-tanagers","䳭唐纳雀",
    "PHAENICOPHILIDAE","棕榈唐纳雀科","Hispaniolan Tanagers","海地唐纳雀",
    "NESOSPINGIDAE","波多黎各唐纳雀科","Puerto Rican Tanager","波多黎各唐纳雀",
    "SPINDALIDAE","纹头唐纳雀科","Spindalises","纹头唐纳雀",
    "ZELEDONIIDAE","冠鹩森莺科","Wrenthrush","冠鹩森莺",
    "TERETISTRIDAE","灰森莺科","Cuban Warblers","古巴莺",
    "ICTERIIDAE","黄胸大䳭莺科","Yellow-breasted Chat","黄胸大䳭莺",
    "ICTERIDAE","拟鹂科","Blackbirds and Allies","拟鹂",
    "PARULIDAE","森莺科","Wood-Warblers","森莺",
    "MITROSPINGIDAE","乌脸唐纳雀科","Mitrospingid Tanagers","乌脸唐纳雀",
    "CARDINALIDAE","美洲雀科","Cardinals, Grosbeaks, and Allies","美洲雀",
    "THRAUPIDAE","裸鼻雀科","Tanagers and Allies","唐纳雀等"]);
  orders.push(myOrder("PASSERIFORMES","雀形目","Perching Birds","栖鸟",family));

  //functions and variables used in index_birds_names
  //table for Chinese pinyin, string.localeCompare() does not work in all browsers
  var py  =  { 额:"e2", 鹅:"e2", 鹗:"e4", 阿:"a1", 恶:"e4", 唧:"ji1", 姬:"ji1", 斗:"dou4",树:"shu4",茶:"cha2",林:"lin2",白:"bai2",赤:"chi4",肉:"rou4", 环:"huan2",平:"ping2",横:"heng2",苍:"cang1",娇:"jiao1",玄:"xuan2",
      拿:"na2",绿:"lv4",艾:"ai4",鸡:"ji1",狐:"hu2",曲:"qu1",牙:"ya2",稀:"xi1", 海:"hai3",喉:"hou2",太:"tai4",沙:"sha1",雉:"zhi4",珠:"zhu1",齿:"chi3", 东:"dong1",鸻:"heng2",尖:"jian1",杓:"shao2",连:"lian2",鸢:"yuan1",
      巨:"ju4",夜:"ye4",克:"ke4",鹭:"lu4",无:"wu2",麻:"ma2",叶:"ye4",苦:"ku3", 鹫:"jiu4",华:"hua2",灰:"hui1",叉:"cha1",粉:"fen3",三:"san1",牛:"niu2", 面:"mian2",脸:"lian3",州:"zhou1",鹰:"ying1",方:"fang1",蕉:"jiao1",
      细:"xi4",紫:"zi3",羽:"yu3",蛎:"li4",鹬:"yu4",矶:"ji1",丽:"li4",金:"jin1",丘:"qiu1",丹:"dan1",蓑:"suo1",厚:"hou4",半:"ban4",云:"yun2",侏:"zhu1", 田:"tian2",青:"qing1",领:"ling3",翘:"qiao4",端:"duan1",桑:"sang1",
      大:"da4",地:"di4",崖:"ya2",鸦:"ya1",鸽:"ge1",耳:"er3",卡:"ka3",伞:"san3",滨:"bin1",噪:"zao4",趾:"zhi3",鸠:"jiu1",威:"wei1",朱:"zhu1",裸:"luo3", 冰:"bing1",鹦:"ying1",绒:"rong2",沼:"zhao3",星:"xing1",阳:"yang2",
      栖:"qi1",雨:"yu3",各:"ge4",颏:"ke1",木:"mu4",哥:"ge1",渡:"du4",扑:"pu1", 鸱:"chi1",翠:"cui4",狗:"gou3",汁:"zhi1",游:"you2",淡:"dan4",南:"nan2", 园:"yuan2",丁:"ding1",鹪:"jiao1",鹩:"liao2",蜂:"feng1",芒:"mang2",
      伯:"bo2",暗:"an4",丝:"si1",蜡:"la4",鹀:"wu2",犀:"xi1",乐:"le4",带:"dai4",钩:"gou1",呆:"dai1",劳:"lao2",百:"bai3",鹎:"bei1",罗:"luo2",绣:"xiu4", 圆:"yuan2",脚:"jiao3",嘲:"chao2",丛:"cong2",缝:"feng2",藏:"zang4",
      鸲:"qu2",鹡:"ji2",圃:"pu3",布:"bu4",河:"he2",斯:"si1",鸬:"lu2",玫:"mei2",昏:"hun1",弯:"wan1",腿:"tui3",花:"hua1",灶:"zao4",文:"wen2",刘:"liu2", 窜:"cuan4",鸰:"ling2",唐:"tang2",松:"song1",枞:"cong1",爪:"zhao3",
      鹉:"wu3",热:"re4",勒:"le4",鹕:"hu2",霸:"ba4",拉:"la1",鹚:"ci2",蚋:"rui4",鸵:"tuo2",贼:"zei2",反:"fan3",信:"xin4",纹:"wen2",黑:"hei1",燕:"yan4", 潜:"qian2",鳽:"jian1",靛:"dian4",囱:"cong1",灵:"ling2",镰:"lian2",
      鹈:"ti2",漠:"mo4",及:"ji2",刺:"ci4",吉:"ji2",骨:"gu3",鴗:"li4",蛇:"she2",戴:"dai4",咬:"yao3",巾:"jin1",加:"jia1",秋:"qiu1",费:"fei4",食:"shi2", 榛:"zhen1",洲:"zhou1",叫:"jiao4",纯:"chun2",针:"zhen1",亨:"heng1",
      褐:"he4",普:"pu3",弗:"fu2",尼:"ni2",䴙:"pi4",西:"xi1",八:"ba1",北:"bei3",毛:"mao2",鹞:"yao4",烟:"yan1",果:"guo3",家:"jia1",柳:"liu3",胁:"xie2", 小:"xiao3",神:"shen2",角:"jiao3",短:"duan3",铜:"tong2",鲸:"jing1", 黄:"huang2",
      浮:"fu2",黎:"li2",企:"qi3",达:"da2",鵙:"ju2",佛:"fo2",鹤:"he4",火:"huo3",石:"shi2",印:"yin4",铁:"tie3",苇:"wei3",锈:"xiu4",恺:"kai3",岛:"dao3", 冠:"guan1",山:"shan1",鹋:"miao2",水:"shui3",宽:"kuan1",僧:"seng1", 相:"xiang1",
      鸭:"ya1",色:"se4",鹱:"hu4",蹼:"pu3",鸥:"ou1",喜:"xi3",埃:"ai1",眉:"mei2",主:"zhu3",多:"duo1",刀:"dao1",翅:"chi4",嘴:"zui3",鹊:"que4",氏:"shi4", 垂:"chui2",鸯:"yang1",鹳:"guan4",鸳:"yuan1",王:"wang2",孔:"kong3", 橙:"cheng2",
      乌:"wu1",披:"pi1",栗:"li4",亚:"ya4",安:"an1",鱼:"yu2",榈:"lv2",番:"fan1",桂:"gui4",买:"mai3",䴓:"shi1",森:"sen1",瓣:"ban4",隼:"sun3",矛:"mao2", 雕:"diao1",锥:"zhui1",顶:"ding3",鹟:"weng1",鸫:"dong1",剑:"jian4", 胸:"xiong1",
      腹:"fu4",巴:"ba1",比:"bi3",库:"ku4",极:"ji2",科:"ke1",歌:"ge1",头:"tou2",颊:"jia2",油:"you2",走:"zou3",鼠:"shu3",喙:"hui4",画:"hua4",鬼:"gui3", 啄:"zhuo2",丑:"chou3",笑:"xiao4",原:"yuan2",风:"feng1",鹲:"meng2", 城:"cheng2",
      䴘:"ti1",日:"ri4",须:"xu1",第:"di4",棘:"ji2",杂:"za2",澳:"ao4",绯:"fei1",臀:"tun2",蚊:"wen2",智:"zhi4",橄:"gan3",榄:"lan3",蟹:"xie4",豆:"dou4", 扇:"shan4",天:"tian1",点:"dian3",硬:"ying4",刚:"gang1",中:"zhong1",蝗:"huang2",
      几:"ji3",壁:"bi4",帝:"di4",锡:"xi1",叭:"ba1",喇:"la3",法:"fa3",薮:"sou3",奎:"kui2",滑:"hua2",背:"bei4",穴:"xue2",流:"liu2",美:"mei3",鳞:"lin2", 枕:"zhen3",肩:"jian1",鹮:"huan2",猩:"xing1",舰:"jian4",响:"xiang3",煌:"huang2",
      伍:"wu3",思:"si1",距:"ju4",舞:"wu3",蒂:"di4",䳭:"ji2",那:"na4",酋:"qiu2",莱:"lai2",䴕:"lie4",瑰:"gui1",泰:"tai4",坦:"tan3",沟:"gou1",鸺:"xiu1", 锤:"chui2",远:"yuan3",翁:"weng1",冬:"dong1",蝇:"ying2",塚:"zhong3",光:"guang1",
      纳:"na4",蚁:"yi3",菊:"ju2",墨:"mo2",和:"he2",髭:"zi1",哈:"ha1",斑:"ban1",蓝:"lan2",军:"jun1",尾:"wei3",银:"yin2",雀:"que4",琴:"qin2",宝:"bao3", 红:"hong2",啸:"xiao4",洋:"yang2",仓:"cang1",莺:"ying1",钟:"zhong1",椋:"liang2",
      泽:"ze2",孤:"gu1",格:"ge2",利:"li4",迪:"di2",奥:"ao4",可:"ke3",口:"kou3",彩:"cai3",翻:"fan1",腰:"yao1",鸨:"bao3",雁:"yan4",鹨:"liu4",月:"yue3", 膀:"bang3",翎:"ling2",通:"tong1",鸮:"xiao1",猛:"meng3",声:"sheng1",塍:"cheng2",
      蜜:"mi4",籽:"zi3",吸:"xi1",簇:"cu4",犁:"li2",马:"ma3",哀:"ai1",高:"gao1",优:"you3",掩:"yan3",鹠:"liu2",螺:"luo2",赭:"zhe3",维:"wei2",雷:"lei2", 鲣:"jian1",鸟:"niao3",鹃:"juan1",鸣:"ming2",剪:"jian3",鵟:"kuang2",长:"chang2",
      鸸:"er2",哑:"ya3",赫:"he4",牡:"mu3",虎:"hu3",五:"wu2",蛙:"wa1",草:"cao3",楔:"xie1",麝:"she4",辉:"hui1",眼:"yan3",雪:"xue3",隐:"yin3",穗:"sui2", 灯:"deng1",鞘:"qiao4",仙:"xian1",棕:"zong1",䳍:"gong1",虫:"chong2",靓:"liang4",
      伊:"yi1",沃:"wo4",翼:"yi4",拟:"ni3",鹂:"li2",雅:"ya3",琵:"pi2",岩:"yan2",舌:"she2",艳:"yan4",帆:"fan1",霍:"huo4",池:"chi2",疣:"you2",凤:"feng4",旋:"xuan2",颈:"jing3",鹇:"xian2",蓬:"peng2",交:"jiao1",船:"chuan2",胜:"sheng4",
      旅:"lv3",鼻:"bi2",波:"bo1",苏:"su1",欧:"ou1",密:"mi4",笛:"di2",非:"fei1",暴:"bao4",鹛:"mei2",阔:"kuo4",本:"ben3",麦:"mai4",群:"qun2",椒:"jiao1",卷:"juan3",鹑:"chun2",秧:"yang1",跷:"qiao1",铅:"qian1",橡:"xiang4",双:"shuang1"};

  var pt_eng  = ["males* left, *females* right","males*, *breeding plumage","males*, *nonbreeding plumage","males*","(immature|juvenile) males*","(immature|juvenile) females*","(immatures*|juveniles*)","females*\/immature males*",
                 "females*\/immatures*","females* left, *males* right","females* and chicks*","females* and (immature|juvenile)s*","females*","winter plumage","1st winter","2nd winter","2nd year","3rd winter","3rd year","fall plumage",
                 "winter females*","eclipse males*","molting adult","adults* and (immatures*|juveniles*)","adults*","breeding (adults*|plumage)","breeding males*","breeding females*","nonbreeding *(adult)*\/immature",
                 "nonbreeding (adults*|plumage)","nonbreeding females*\/immature males*","nonbreeding females*","nonbreeding males*","(partially)* *leucistic","mating display","nest","light morph","dark morph"];
  var pt_chn  = ["左雄性，右雌性","雄性，繁殖羽","雄性，非繁殖羽","雄性","未成年雄性","未成年雌性","未成年","雌性/未成年雄性","雌性/未成年","左雌性，右雄性","雌性和幼鸟","雌性和未成年","雌性","冬羽","一龄冬羽","二龄冬羽","二龄羽","三龄冬羽","三龄羽",
                 "秋羽","冬羽雌性","蚀羽雄性","换羽成年鸟","成年和未成年","成年","繁殖羽","繁殖羽雄性","繁殖羽雌性","非繁殖羽/未成年","非繁殖羽","非繁殖羽雌性/未成年雄性","非繁殖羽雌性","非繁殖羽雄性","白变种","求偶展示","鸟巢","浅色型","暗色型"];
  var fam_ln  = 8;  //family length
  var order   = (/&order|^order/i).test(window.location.search.substring(1));
  var all_new = true;
  var comma   = [", ","，"];
  var cnrexp  = /[\u3400-\u9FBF]/;
  var expandinfo = (/(stat\.html|country=|loc=|query=)/i).test(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));

  //info format: ["flflfl","5/2022,S111311543",gmap("Key West",24.5613, -81.8044),"","","西礁岛"]
  //info[1] can also be "5/2022","S111311543","", or optional if info[2] is not empty string. If date string mon/year is not provided, the date string will be constructed from the file name.
  //info[2,3] - English and Chinese info attached before the locid description, a comma will be added at the end.
  //info[4,5] - English and Chinese info attached after the locid description, no extra characters will be added.
  function Bird(liferdate, family, name, cname, latin, photo, info, ebid, cbid){
     family      = family.trim().slice(0,fam_ln).toUpperCase();
     name        = name.trim();
     cname       = cname.trim();
     latin       = latin.trim().charAt(0).toUpperCase()+latin.trim().slice(1).toLowerCase();
     var genus   = latin.substring(0,latin.indexOf(' '));
     var lifer   = new Date("20"+liferdate+":00");
     var newbird = (modTim<=lifer.getTime());
     var name1   = reform(name);
     var pinyin  = getpinyin(cname);
     var cinfo   = [], locs = [];
     if (!Array.isArray(photo)){photo = [photo];}else{photo = Array.prototype.concat.apply([],photo);}
     pic_cnts    = pic_cnts+photo.length;
     var tmp_match = photo.join().match(/_dig/gi);
     if (tmp_match!=null){dig_cnts=dig_cnts+tmp_match.length;}

     //check if this bird needs to be added to modBrd
     var tmp_date,add_mod = false;
     if (!newbird){
        for (var i=0;i<photo.length;i++){
            tmp_date = getdate(photo[i],true);
            if (typeof tmp_date !== 'undefined'){
               add_mod = (modTim<=tmp_date.getTime());
               if (add_mod){all_new = false; break;}
            }
        }
     }
     if (newbird||add_mod){
        modBrd.name[modBrd.name.length] = name;
        modBrd.cname[modBrd.cname.length] = cname;
        modBrd.newbird[modBrd.newbird.length] = newbird;
     }

     if (window.expandinfo){
        var tmp_info = reform_locs(info,photo);
        info  = tmp_info.info;
        cinfo = tmp_info.cinfo;
        locs  = tmp_info.locs;
     }

     return {lifer:lifer,newbird:newbird,family:family,genus:genus,name:name,name1:name1,cname:cname,pinyin:pinyin,latin:latin,info:info,cinfo:cinfo,locs:locs,photo:photo,ebid:ebid,cbid:cbid};
  }

  function stradd(...arrays) {
     const n = arrays.reduce((max, xs) => Math.max(max, Array.isArray(xs)?xs.length:1), 0);
     const result = Array.from({ length: n });
     return result.map((_, i) => arrays.map(xs => (Array.isArray(xs)?xs[Math.min(i,xs.length-1)]:xs)).reduce((sum, x) => sum + x, ''));
  }

  //if no ',' return [str,''] else return separted string array
  function strsplit(str){
     var tmp,tmp1;
     if (Array.isArray(str)) {tmp = str[0];}else{tmp=str;}
     tmp1 = tmp.indexOf(',');
     if (tmp1===-1) {return [tmp,''];}
     return [tmp.substring(0,tmp1),tmp.substring(tmp1)];
  }

  //upper case to the first letter, works for href link
  function strupcase(str){
     var tmpstr = str.trim();
     var tmp1 = tmpstr.indexOf('<');
     var tmp2 = tmpstr.indexOf('>');
     if ((tmp1===0)&&(tmp2!==-1)) {tmpstr = tmpstr.substring(0,tmp2+1)+strupcase(tmpstr.substring(tmp2+1));}
     return tmpstr.charAt(0).toUpperCase()+tmpstr.slice(1);
  }

  function birdFound(id){
     for (var i=0;i<birds.length;i++){
         if (birds[i].name1 == id) return true;
     }
     return false;
  }
  
  function my_href(url,name,target){
     if (typeof name === 'undefined')   {return "<a href='"+url+"' style='color: #3399FF; text-decoration: underline;'>";}
     if (typeof target === 'undefined') {return "<a href='"+url+"' style='color: #3399FF; text-decoration: underline;'>"+name+"</a>";}
     return "<a href='"+url+"' style='color: #3399FF; text-decoration: underline;' target='"+target+"'>"+name+"</a>";
  }

  function b_link(bid,info){
     if (typeof info === 'undefined') {info = bid;} else {
        if (info==='s'){info = bid.trim()+info;}
     }
     if (order){bid = bid+"&order";}
     return my_href('showbird.html?name='+reform(bid),info);
  }

  function getByCountry(id, myArray){
     if (cnrexp.test(id)){
        var rexp = new RegExp('(^'+id+'|@@_*'+id+'|，_*'+id+')');
        return myArray.filter((el)=>rexp.test(reform(el.cinfo.join('@@'))));
     }else{
        var rexp = new RegExp(',_*'+id);
        return myArray.filter((el)=>rexp.test(reform(el.info.join('@@'))));
     }
  }

  function getByFamily(id, myArray) {
     id = id.slice(0,fam_ln);
     return myArray.filter((el)=>el.family === id);
  }

  function getByLiferYear(year, myArray){
     year = parseInt(year);
     return myArray.filter((el)=>el.lifer.getFullYear() === year);
  }

  function getByQuery(id, myArray){
     if (cnrexp.test(id)){
        return myArray.filter((el)=>reform(el.cinfo.join('@@')).match(id)!==null);
     }else{
        return myArray.filter((el)=>reform(el.info.join('@@')).match(id)!==null);
     }
  }

  function getByHanzi(id, myArray){
     if (cnrexp.test(id)){
        return myArray.filter((el)=>el.cname.match(id)!==null);
     }
  }

  function getByLocs(id, myArray){
     return myArray.filter((el)=>el.locs.indexOf(id)!==-1);
  }

  function getdate(path,returndate){
     var date = "",year = "",mon = "",name;
     if (Array.isArray(path)) {
        name = path[0].substr(path[0].lastIndexOf('/') + 1);
     }else{
        name = path.substr(path.lastIndexOf('/') + 1);
     }
     var pos = name.search(/20[0-9]{4,}/);
     if (pos == -1){
        if (returndate) {return;}
        pos = name.search(/[0-9]{4,}/);
        if (pos >= 0){
           year = name.substring(pos+0,pos+2);
           mon  = name.substring(pos+2,pos+4);
        }
     }else{
        year = name.substring(pos+0,pos+4);
        mon  = name.substring(pos+4,pos+6);
        if (returndate){
           day = name.substring(pos+6,pos+8);
           if (isNaN(day.parseInt)){day=0;}
           mon = parseInt(mon)-1;
           return new Date(year,mon,day);
        }
     }
     if (mon.substring(0,1) == "0"){mon = mon.substring(1,2);}
     if (year.length == 2){year = "20"+year;}
     if (mon.length != 0) {date = date+mon+"/";}
     if (year.length != 0){date = date+year;}
     return date;
  }

  function getpinyin(cname){
     var tmp = '';
     for (var i=0;i<cname.length;i++){
         if (typeof py[cname.charAt(i)] !== 'undefined'){
            tmp = tmp+py[cname.charAt(i)]+' ';
            if (typeof py_cnts[cname.charAt(i)] === 'undefined') py_cnts[cname.charAt(i)] = 0;
            py_cnts[cname.charAt(i)]++;
         }else{
            document.write('<br>'+cname.charAt(i)+' pinyin not found!<br>');
         }
     }
     return tmp;
  }

  function mysort(a,b){
     if (window.lifer){
        return (a.lifer < b.lifer)?(-1):((a.lifer > b.lifer)?1:0);
     }else if (window.usechinese){
        return (a.pinyin < b.pinyin )?(-1):((a.pinyin > b.pinyin)?1:0); 
     }
     return (a.name < b.name )?(-1):((a.name > b.name)?1:0);
  }

  //append '20' to id automatically
  function m_id(id,num){
     var ind = 0;
     if (typeof num === 'undefined'){num = "";}else{ind=num;}
     misc_cnts[ind] = (Array.isArray(id))?(misc_cnts[ind]+id.length):(misc_cnts[ind]+1);
     return stradd("misc_birds"+num.toString()+"/20",id);
  }

  function p_id(album,id){
     return stradd(album+"/"+album+"_",id);
  }

  function baike(name,before,afterin,afterout){
     if (typeof name !== 'string') {return "https://dongniao.net/nd/"+name.toString();}
     name = replace_acronym(name);
     if (typeof before === 'undefined') {return "https://baike.baidu.com/item/"+name;}
     var tmp1='',tmp2='';
     if (typeof afterin  !== 'undefined') {tmp1=afterin;}
     if (typeof afterout !== 'undefined') {tmp2=afterout;}
     return before+my_href("https://baike.baidu.com/item/"+name,name+tmp1,name)+tmp2;
  }

  function cornellurl(bid){
     return "https://www.allaboutbirds.org/guide/"+bid.trim()+"/id";
  }

  function ebirdurl(bid){
     return "https://ebird.org/species/"+bid.trim()+"/";
  }

  function hotspot(id,name){
     if (typeof name !== 'string') {return "https://birdinghotspots.org/hotspot/"+id;}
     var tmp = strsplit(name);
     return my_href("https://birdinghotspots.org/hotspot/"+id,tmp[0],id)+tmp[1];
  }

  function gmap(name,latt,long){
     var tmp  = strsplit(name);
     tmp[0]   = replace_acronym(tmp[0]);
     var tmp1 = ((typeof latt === 'undefined')||(typeof long === 'undefined'))?reform(tmp[0],"+"):(latt.toString()+"%2C"+long.toString());
     return my_href("https://www.google.com/maps/search/?api=1&query="+tmp1,tmp[0],"gmap")+tmp[1];
  }

  //https://lbsyun.baidu.com/index.php?title=uri/api or with offset [latt,long]+[0.0057,0.0064]
  function bmap(name,latt,long){
     if ((typeof latt === 'undefined') || (typeof long === 'undefined')) {return name;}
     return my_href("http://api.map.baidu.com/marker?location="+latt.toString()+"%2C"+long.toString()+"&output=html&coord_type=gcj02&title="+name,name,"bmap");
  }

  function nps(pid,isfws,name){
     var url = 'https://www.'+((typeof isfws === 'boolean')?'fws.gov/refuge/':'nps.gov/')+pid+'/';
     if (typeof isfws === "string"){name = isfws;}
     if (typeof name === 'string'){
        var tmp = strsplit(name);
        url = my_href(url,tmp[0],pid)+tmp[1];
     }
     return url;
  }

  function wiki(id,name){
     if (typeof name === 'undefined') {return "https://en.wikipedia.org/wiki/"+reform(id,"_","%27",true);}
     id = replace_acronym(id);
     if ((typeof name !== 'string')||(name === '')) {name = id;}
     return my_href("https://en.wikipedia.org/wiki/"+reform(id,"_","%27",true),name,id);
  }

  function reform(name,space,apostrophe,notlowercase){
     if (typeof space === 'undefined') {space = '_';}
     if (typeof apostrophe === 'undefined') {apostrophe = '';}
     var tmp = name.replace(/ |\+/g,space);
     tmp = tmp.replace(/'/g,apostrophe);
     if (notlowercase) {return tmp;}
     return tmp.toLowerCase();
  }

  function reform_locs(info,photo){
     var indx = 1;
     var prev = 0;
     while(indx<info.length){
         if (typeof lurls[info[indx]] !== 'undefined'){
            prev = prev+6;
            for (var i=0;i<prev-indx;i++){info.splice(indx,0,"");}
            indx = prev;
         }else if((indx==prev+1)&&(info[indx].length>0)&&(!(/([0-9]{1,2}\/[0-9]{4}|s[0-9]{8,})/i).test(info[indx]))){
            info.splice(indx,0,"");
         }
         indx++;
     }
     var tmp_einfo = [];
     var tmp_cinfo = [];
     var tmp_locs  = [];
     var tmp1,tmp2,tmp3,rexp,tmp,pid,date,head,tail;
     for (var i=0;i<Math.floor((info.length-1)/6.0)+1;i++){
         if (typeof info[6*i+1]==='undefined'){info.splice(6*i+1,0,"");}
         info[6*i+1] = info[6*i+1].trim();
         tmp3 = info[6*i+1].lastIndexOf(',');
         tmp1 = (tmp3>=0)?info[6*i+1].substr(0,tmp3):((/[0-9]{1,2}\/[0-9]{4}/.test(info[6*i+1]))?info[6*i+1]:'');
         tmp2 = (tmp3>=0)?info[6*i+1].substr(tmp3+1):((!(/[0-9]{1,2}\/[0-9]{4}/.test(info[6*i+1])))?info[6*i+1]:'');
         if (tmp1.length==0){tmp1=getdate(photo[i]);}
         if (tmp2.length>0){
            if (ebirdlist.indexOf(tmp2)===-1){ebirdlist.push(tmp2);}
            date = my_href("https://ebird.org/checklist/"+tmp2,tmp1,tmp2);
         }else{
            date = tmp1;
         }
         if (typeof info[6*i+2]!=='undefined'){
            if (typeof info[6*i+3]==='undefined'){info.splice(6*i+3,0,"");}
            if (info[6*i+3].trim().length==0){
               for (var j=0;j<pt_eng.length;j++){
                   rexp = new RegExp("^ *"+pt_eng[j],"i");
                   if (rexp.test(info[6*i+2])){
                      info[6*i+3] = pt_chn[j];
                      break;
                   }
               }
            }
         }
         pid  = info[6*i].trim().toLowerCase();
         if (typeof lurls[pid] === 'undefined') {continue;}
         head = (typeof info[6*i+2]!=='undefined')?info.slice(6*i+2,6*i+4):['',''];
         tail = (typeof info[6*i+4]!=='undefined')?info.slice(6*i+4,6*i+6):['',''];
         if (typeof loc_cnts[pid] === 'undefined') loc_cnts[pid] = 0;
         loc_cnts[pid]++;
     	 if (date.length>0) {date = stradd(comma,date);}
         tmp = lurls[pid].slice(0);
         if ((head[0].length>0)&&((tmp[0]+tmp[1]+tail[0]).length>0)) {head[0] = head[0]+comma[0];}
         if ((head[1].length>0)&&((tmp[2]+tmp[3]+tail[1]).length>0)) {head[1] = head[1]+comma[1];}
         if ((tmp[0].length>0)&&(tail[0].length>0)) {tail[0] = ' '+tail[0];}
         if (tmp[1].length>0) {tmp[1] = comma[0]+tmp[1];}
         if (typeof tmp[4] !== 'undefined') {
            if (typeof tmp[5] === 'undefined') {tmp[5] = tmp[4];}
            if (tmp[4].length > 0) {tmp[0] = my_href(tmp[4],tmp[0],pid);}
            if (tmp[5].length > 0) {tmp[2] = my_href(tmp[5],tmp[2],pid);}
         }
         tmp_einfo[i] = replace_acronym(strupcase(head[0]+tmp[0]+tail[0]+tmp[1]+date[0]));
         tmp_cinfo[i] = replace_acronym(head[1]+tmp[3]+tmp[2]+tail[1]+date[1]);
         tmp_locs[i]  = pid;
     }
     return {info:tmp_einfo,cinfo:tmp_cinfo,locs:tmp_locs};
  }

  function reform_url(name,cname,ebid,cbid){
     if (typeof ebid === 'undefined') {ebid = "";}
     if ((typeof ebid !== 'string')||(cnrexp.test(ebid))){
        cbid = ebid;
        ebid = "";
     }
     if (typeof cbid === 'undefined') {cbid = cname;}
     return (window.usechinese && (cbid !== ""))?baike(cbid):((ebid !== "")?ebirdurl(ebid):cornellurl(name));
  }
  
  //acronym is case sensitive 
  var acronym = {NWR:['National Wildlife Refuge','国家野生动物保护区'],NP:['National Park','国家公园'],WMA:['Wildlife Management Area','野生动物管理区'],WR:['Wildlife Refuge','野生动物保护区']};
  var acrrexp = new RegExp('('+Object.keys(acronym).join('|')+')','g');
  function replace_acronym(name){
     var indx = cnrexp.test(name)?1:0;
     var tmp  = name.match(acrrexp);
     if (tmp!==null){for(var i=0;i<tmp.length;i++){name = name.replace(tmp[i],(acronym[tmp[i]])[indx]);}}
     return name;
  }
//-->