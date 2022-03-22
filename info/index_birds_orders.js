<!--
  //variables for stat counting
  var loc_cnts  = {};
  var py_cnts   = {};
  var misc_cnts = [0,0,0];
  var dig_cnts  = 0;
  var pic_cnts  = 0;
  var ebirdlist = [];
  var dateregex = /\d+\/\d+/;
  var all_new   = true;

  function newOrder(name, cname, desc, cdesc, family){
     this.name   = name;
     this.cname  = cname;
     this.desc   = desc;
     this.cdesc  = cdesc; 
     this.family = family;
  }

  function newFamily(name, cname, desc, cdesc){
     this.name   = name;
     this.cname  = cname;
     this.desc   = desc;
     this.cdesc  = cdesc; 
  }
	
  //according to http://www.worldbirdnames.org/ioc-lists/master-list-2/

  var orders = [];         
  var i = 0;

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("STRUTHIONIDAE","鸵鸟科","Ostriches","鸵鸟");
  orders[i++] = new newOrder("STRUTHIONIFORMES","鸵鸟目","Ostriches","鸵鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("RHEIDAE","美洲鸵鸟科","Rheas","美洲鸵鸟");
  orders[i++] = new newOrder("RHEIFORMES","美洲鸵鸟目","Rheas","美洲鸵鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("APTERYGIDAE","鹬鸵科","Kiwis","鹬鸵");
  orders[i++] = new newOrder("APTERYGIFORMES","鹬鸵目","Kiwis","鹬鸵",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CASUARIIDAE","鹤鸵科","Cassowaries and Emus","鹤鸵和鸸鹋");
  orders[i++] = new newOrder("CASUARIIFORMES","鹤鸵目","Cassowaries and Emus","鹤鸵和鸸鹋",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("TINAMIDAE","䳍科","Tinamous","䳍鸟");
  orders[i++] = new newOrder("TINAMIFORMES","䳍形目","Tinamous","䳍鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("ANHIMIDAE","叫鸭科","Screamers","叫鸭");
  family[j++] = new newFamily("ANSERANATIDAE","鹊雁科","Magpie-Goose","鹊雁");
  family[j++] = new newFamily("ANATIDAE","鸭科","Ducks, Geese, and Swans","鸭，雁和天鹅");
  orders[i++] = new newOrder("ANSERIFORMES","雁形目","Ducks, Geese, and Swans","鸭，雁和天鹅",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("MEGAPODIIDAE","冢雉科","Megapodes","冢雉");
  family[j++] = new newFamily("CRACIDAE","凤冠雉科","Chachalacas, Curassows and Guans","小冠雉，凤冠雉和冠雉");
  family[j++] = new newFamily("NUMIDIDAE","珠鸡科","Guineafowl","珠鸡");
  family[j++] = new newFamily("ODONTOPHORIDAE","齿鹑科","New World Quail","美洲鹑");
  family[j++] = new newFamily("PHASIANIDAE","雉科","Partridges, Grouse, Turkeys and Old World Quail","山鹑，松鸡，火鸡和旧大陆的鹑");
  orders[i++] = new newOrder("GALLIFORMES","鸡形目","Grouse, Quail, and Allies","鸡，鹑和雉等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CAPRIMULGIDAE","夜鹰科","Nightjars","夜鹰");
  orders[i++] = new newOrder("CAPRIMULGIFORMES","夜鹰目","Nightjars","夜鹰",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("STEATORNITHIDAE","油鸱科","Oilbird","油鸱");
  orders[i++] = new newOrder("STEATORNITHIFORMES","油鸱目","Oilbird","油鸱",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("NYCTIBIIDAE","林鸮科","Potoos","林鸮");
  orders[i++] = new newOrder("NYCTIBIIFORMES","林鸮目","Potoos","林鸮",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("PODARGIDAE","蟆口鸱科","Frogmouths","蟆口鸱");
  orders[i++] = new newOrder("PODARGIFORMES","蟆口鸱目","Frogmouths","蟆口鸱",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("AEGOTHELIDAE","裸鼻鸱科","Owlet-nightjars","裸鼻鸱");
  orders[i++] = new newOrder("AEGOTHELIFORMES","裸鼻鸱目","Owlet-nightjars","裸鼻鸱",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("HEMIPROCNIDAE","凤头雨燕科","Treeswifts","凤头雨燕");
  family[j++] = new newFamily("APODIDAE","雨燕科","Swifts","雨燕");
  family[j++] = new newFamily("TROCHILIDAE","蜂鸟科","Hummingbirds","蜂鸟");
  orders[i++] = new newOrder("APODIFORMES","雨燕目","Swifts and Hummingbirds","雨燕和蜂鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("MUSOPHAGIDAE","蕉鹃科","Turacos","蕉鹃");
  orders[i++] = new newOrder("MUSOPHAGIFORMES","蕉鹃目","Turacos","蕉鹃",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("OTIDIDAE","鸨科","Bustards","鸨");
  orders[i++] = new newOrder("OTIDIFORMES","鸨形目","Bustards","鸨",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CUCULIDAE","杜鹃科","Cuckoos, Roadrunners, and Anis","杜鹃，走鹃和犀鹃");
  orders[i++] = new newOrder("CUCULIFORMES","鹃形目","Cuckoos","杜鹃等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("MESITORNITHIDAE","拟鹑科","Mesites","拟鹑");
  orders[i++] = new newOrder("MESITORNITHIFORMES","拟鹑目","Mesites","拟鹑",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("PTEROCLIDAE","沙鸡科","Sandgrouse","沙鸡");
  orders[i++] = new newOrder("PTEROCLIFORMES","沙鸡目","Sandgrouse","沙鸡",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("COLUMBIDAE","鸽鸠科","Pigeons and Doves","鸽和鸠");
  orders[i++] = new newOrder("COLUMBIFORMES","鸽形目","Pigeons and Doves","鸽和鸠",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("HELIORNITHIDAE","日鷉科","Finfoots","鳍趾鷉");
  family[j++] = new newFamily("SAROTHRURIDAE","侏秧鸡科","Flufftails","侏秧鸡");
  family[j++] = new newFamily("RALLIDAE","秧鸡科","Rails, Gallinules, and Coots","秧鸡，水鸡和骨顶鸡");
  family[j++] = new newFamily("PSOPHIIDAE","喇叭鸟科","Trumpeters","喇叭鸟");
  family[j++] = new newFamily("GRUIDAE","鹤科","Cranes","鹤");
  family[j++] = new newFamily("ARAMIDAE","秧鹤科","Limpkins","秧鹤");
  orders[i++] = new newOrder("GRUIFORMES","鹤形目","Cranes and Rails","鹤和秧鸡等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("PODICIPEDIDAE","鸊鷉科","Grebes","鸊鷉");
  orders[i++] = new newOrder("PODICIPEDIFORMES","鸊鷉目","Grebes","鸊鷉",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("PHOENICOPTERIDAE","火烈鸟科","Flamingos","火烈鸟");
  orders[i++] = new newOrder("PHOENICOPTERIFORMES","火烈鸟目","Flamingos","火烈鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("TURNICIDAE","三趾鹑科","Buttonquail","三趾鹑科");
  family[j++] = new newFamily("BURHINIDAE","石鸻科","Thick-knees","石鸻");
  family[j++] = new newFamily("CHIONIDAE","鞘嘴鸥科","Sheathbills","鞘嘴鸥");
  family[j++] = new newFamily("PLUVIANELLIDAE","麦哲伦鸻科","Magellanic Plover","麦哲伦鸻");
  family[j++] = new newFamily("HAEMATOPODIDAE","蛎鹬科","Oystercatchers","蛎鹬");
  family[j++] = new newFamily("IBIDORHYNCHIDAE","鹮嘴鹬科","Ibisbill","鹮嘴鹬");
  family[j++] = new newFamily("RECURVIROSTRIDAE","反嘴鹬科","Stilts and Avocets","长脚鹬和反嘴鹬");
  family[j++] = new newFamily("CHARADRIIDAE","鸻科","Plovers and Lapwings","鸻和麦鸡");
  family[j++] = new newFamily("PLUVIANIDAE","埃及燕鸻科","Egyptian Plover","埃及燕鸻");
  family[j++] = new newFamily("ROSTRATULIDAE","彩鹬科","Painted-snipes","彩鹬");
  family[j++] = new newFamily("JACANIDAE","水雉科","Jacanas","水雉");
  family[j++] = new newFamily("PEDIONOMIDAE","领鹑科","Plains-wanderer","领鹑");
  family[j++] = new newFamily("THINOCORIDAE","籽鹬科","Seedsnipes","籽鹬");
  family[j++] = new newFamily("SCOLOPACIDAE","鹬科","Sandpipers, Phalaropes, and Allies","矶鹬和瓣蹼鹬等");
  family[j++] = new newFamily("DROMADIDAE","蟹鸻科","Crab Plover","蟹鸻");
  family[j++] = new newFamily("GLAREOLIDAE","燕鸻科","Coursers and Pratincoles","走鸻和燕鸻");
  family[j++] = new newFamily("LARIDAE","鸥科","Gulls, Terns, and Skimmers","鸥，燕鸥和剪嘴鸥");
  family[j++] = new newFamily("STERCORARIIDAE","贼鸥科","Skuas and Jaegers","贼鸥");
  family[j++] = new newFamily("ALCIDAE","海雀科","Auks, Murres, and Puffins","海雀，海鸦和海鹦");
  orders[i++] = new newOrder("CHARADRIIFORMES","鸻形目","Plovers, Sandpipers, and Allies","鸻，鹬和鸥等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("RHYNOCHETIDAE","鹭鹤科","Rhynochetos","鹭鹤");
  family[j++] = new newFamily("EURYPYGIDAE","日鳽科","Sunbittern","日鳽");
  orders[i++] = new newOrder("EURYPYGIFORMES","日鳽目","Rhynochetos and Sunbittern","鹭鹤和日鳽",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("PHAETHONTIDAE","鹲科","Tropicbirds","鹲");
  orders[i++] = new newOrder("PHAETHONTIFORMES","鹲形目","Tropicbird","鹲",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("GAVIIDAE","潜鸟科","Loons","潜鸟");
  orders[i++] = new newOrder("GAVIIFORMES","潜鸟目","Loons","潜鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("SPHENISCIDAE","企鹅科","Penguin","企鹅");
  orders[i++] = new newOrder("SPHENISCIFORMES","企鹅目","Penguin","企鹅",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("OCEANITIDAE","洋海燕科","Austral Storm Petrels","澳洲海燕");
  family[j++] = new newFamily("DIOMEDEIDAE","信天翁科","Albatrosses","信天翁");
  family[j++] = new newFamily("HYDROBATIDAE","海燕科","Storm-Petrels","小海燕");
  family[j++] = new newFamily("PROCELLARIIDAE","鹱科","Shearwaters and Petrels","鹱和海燕");
  orders[i++] = new newOrder("PROCELLARIIFORMES","鹱形目","Tubenoses","管鼻类鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CICONIIDAE","鹳科","Storks","鹳");
  orders[i++] = new newOrder("CICONIIFORMES","鹳形目","Storks","鹳",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("FREGATIDAE","军舰鸟科","Frigatebirds","军舰鸟");
  family[j++] = new newFamily("SULIDAE","鲣鸟科","Boobies and Gannets","鲣鸟");
  family[j++] = new newFamily("ANHINGIDAE","蛇鹈科","Darters","蛇鹈");
  family[j++] = new newFamily("PHALACROCORACIDAE","鸬鹚科","Cormorants","鸬鹚");
  orders[i++] = new newOrder("SULIFORMES","鲣鸟目","Frigatebirds, Boobies, Cormorants, Darters, and Allies","军舰鸟，鲣鸟，鸬鹚和蛇鹈等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("THRESKIORNITHIDAE","鹮科","Ibises and Spoonbills","朱鹭和琵鹭");
  family[j++] = new newFamily("ARDEIDAE","鹭科","Bitterns, Herons, and Allies","鹭和麻鳽");
  family[j++] = new newFamily("SCOPIDAE","锤头鹳科","Hamerkop","锤头鹳");
  family[j++] = new newFamily("BALAENICIPITIDAE","鲸头鹳科","Shoebill","鲸头鹳");
  family[j++] = new newFamily("PELECANIDAE","鹈鹕科","Pelicans","鹈鹕");
  orders[i++] = new newOrder("PELECANIFORMES","鹈形目","Pelicans, Herons, Ibises, and Allies","鹈鹕，鹭和朱鹭等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("OPISTHOCOMIDAE","麝雉科","Hoatzin","麝雉");
  orders[i++] = new newOrder("OPISTHOCOMIFORMES","麝雉目","Hoatzin","麝雉",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CATHARTIDAE","美洲鹫科","New World Vultures","美洲鹫");
  family[j++] = new newFamily("SAGITTARIIDAE","蛇鹫科","Secretarybird","蛇鹫");
  family[j++] = new newFamily("PANDIONIDAE","鹗科","Ospreys","鹗");
  family[j++] = new newFamily("ACCIPITRIDAE","鹰科","Kites, Hawks, Eagles, and Allies","鹰");
  orders[i++] = new newOrder("ACCIPITRIFORMES","鹰形目","Hawks, Kites, Eagles, and Allies","鹰，鹗和鹫等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("TYTONIDAE","草鸮科","Barn Owls","仓鸮");
  family[j++] = new newFamily("STRIGIDAE","鸱鸮科","Typical Owls","鸮");
  orders[i++] = new newOrder("STRIGIFORMES","鸮形目","Owls","鸮",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("COLIIDAE","鼠鸟科","Mousebirds","鼠鸟");
  orders[i++] = new newOrder("COLIIFORMES","鼠鸟目","Mousebirds","鼠鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("LEPTOSOMIDAE","鹃三宝鸟科","Cuckoo Roller","鹃三宝鸟");
  orders[i++] = new newOrder("LEPTOSOMIFORMES","鹃三宝鸟目","Cuckoo Roller","鹃三宝鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("TROGONIDAE","咬鹃科","Trogons and Quetzals","咬鹃和绿咬鹃");
  orders[i++] = new newOrder("TROGONIFORMES","咬鹃目","Trogons and Quetzals","咬鹃和绿咬鹃",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("UPUPIDAE","戴胜科","Hoopoes","戴胜");
  family[j++] = new newFamily("PHOENICULIDAE","林戴胜科","Wood Hoopoes","林戴胜");
  family[j++] = new newFamily("BUCORVIDAE","地犀鸟科","Ground Hornbills","地犀鸟");
  family[j++] = new newFamily("BUCEROTIDAE","犀鸟科","Hornbills","犀鸟");
  orders[i++] = new newOrder("BUCEROTIFORMES","犀鸟目","Hornbills, Hoopoes and Wood Hoopoes","犀鸟，戴胜和林戴胜",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CORACIIDAE","佛法僧科","Rollers","三宝鸟");
  family[j++] = new newFamily("BRACHYPTERACIIDAE","地三宝鸟科","Ground-Rollers","地三宝鸟");
  family[j++] = new newFamily("ALCEDINIDAE","翠鸟科","Kingfishers","翠鸟");
  family[j++] = new newFamily("TODIDAE","短尾鴗科","Todies","短尾鴗");
  family[j++] = new newFamily("MOMOTIDAE","翠鴗科","Motmots","翠鴗");
  family[j++] = new newFamily("MEROPIDAE","蜂虎科","Bee-eaters","蜂虎");
  orders[i++] = new newOrder("CORACIIFORMES","佛法僧目","Kingfishers and Allies","翠鸟等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("GALBULIDAE","鹟鴷科","Jacamars","鹟鴷");
  family[j++] = new newFamily("BUCCONIDAE","蓬头鴷科","Puffbirds","蓬头鴷");
  family[j++] = new newFamily("CAPITONIDAE","须鴷科","New World Barbets","须鴷");
  family[j++] = new newFamily("SEMNORNITHIDAE","巨嘴拟鴷科","Toucan-barbets","巨嘴拟鴷");
  family[j++] = new newFamily("RAMPHASTIDAE","巨嘴鸟科","Toucans, Aracaris and Toucanets","巨嘴鸟");
  family[j++] = new newFamily("MEGALAIMIDAE","拟鴷科","Asian Barbets","拟鴷");
  family[j++] = new newFamily("LYBIIDAE","非洲拟啄木鸟科","African Barbets and Tinkerbirds","非洲拟鴷");
  family[j++] = new newFamily("INDICATORIDAE","响蜜鴷科","Honeyguides","响蜜鴷");
  family[j++] = new newFamily("PICIDAE","啄木鸟科","Woodpeckers and Allies","啄木鸟等");
  orders[i++] = new newOrder("PICIFORMES","䴕形目","Woodpeckers","啄木鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CARIAMIDAE","叫鹤科","Seriemas","叫鹤");
  orders[i++] = new newOrder("CARIAMIFORMES","叫鹤目","Seriemas","叫鹤",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("FALCONIDAE","隼科","Caracaras and Falcons","隼");
  orders[i++] = new newOrder("FALCONIFORMES","隼形目","Caracaras and Falcons","隼",family);
  
  var family  = [];
  var j = 0;
  family[j++] = new newFamily("STRIGOPIDAE","鸮鹦鹉科","New Zealand Parrots","新西兰鹦鹉");
  family[j++] = new newFamily("CACATUIDAE","凤头鹦鹉科","Cockatoos","凤头鹦鹉");
  family[j++] = new newFamily("PSITTACIDAE","鹦鹉科","African and American Parrots","非洲和美洲鹦鹉");
  family[j++] = new newFamily("PSITTACULIDAE","旧大陆鹦鹉科","Old World Parrots","旧大陆鹦鹉");
  orders[i++] = new newOrder("PSITTACIFORMES","鹦形目","Parrots and Allies","鹦鹉",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("ACANTHISITTIDAE","刺鹩科","New Zealand Wrens","刺鹩");
  family[j++] = new newFamily("SAPAYOIDAE","阔嘴鸟科","Sapayoa","阔嘴霸鹟");
  family[j++] = new newFamily("PHILEPITTIDAE","裸眉鸫科","Asities","裸眉鸫");
  family[j++] = new newFamily("EURYLAIMIDAE","阔嘴鸟科","Broadbills","阔嘴鸟");
  family[j++] = new newFamily("CALYPTOMENIDAE","绿阔嘴鸟","African & Green Broadbills","绿阔嘴鸟");
  family[j++] = new newFamily("PITTIDAE","八色鸫科","Pittas","八色鸫");
  family[j++] = new newFamily("FURNARIIDAE","灶鸟科","Ovenbirds","灶鸟");
  family[j++] = new newFamily("THAMNOPHILIDAE","蚁鸟科","Antbirds","蚁鸟");
  family[j++] = new newFamily("FORMICARIIDAE","蚁鸫科","Ant-thrushes","蚁鸫");
  family[j++] = new newFamily("GRALLARIIDAE","蚁八色鸫科","Ant-pittas","蚁鸫");
  family[j++] = new newFamily("CONOPOPHAGIDAE","食蚊鸟科","Gnateaters","食蚊鸟");
  family[j++] = new newFamily("RHINOCRYPTIDAE","窜鸟科","Tapaculos","窜鸟");
  family[j++] = new newFamily("MELANOPAREIIDAE","月胸窜鸟科","Crescent-chests","月胸窜鸟");
  family[j++] = new newFamily("TYRANNIDAE","霸鹟科","Tyrant Flycatchers","霸鹟");
  family[j++] = new newFamily("COTINGIDAE","伞鸟科","Cotingas","伞鸟");
  family[j++] = new newFamily("PIPRIDAE","娇鹟科","Manakins","娇鹟科");
  family[j++] = new newFamily("TITYRIDAE","蒂泰霸鹟科","Tityras and Becards","蒂泰霸鹟和厚嘴霸鹟");
  family[j++] = new newFamily("MENURIDAE","琴鸟科","Lyrebirds","琴鸟");
  family[j++] = new newFamily("ATRICHORNITHIDAE","薮鸟科","Scrub-birds","薮鸟");
  family[j++] = new newFamily("PTILONORHYNCHIDAE","园丁鸟科","Bowerbirds","园丁鸟");
  family[j++] = new newFamily("CLIMACTERIDAE","短嘴旋木雀科","Australasian Treecreepers","短嘴旋木雀科");
  family[j++] = new newFamily("MALURIDAE","细尾鹩莺科","Australasian Wrens","细尾鹩莺");
  family[j++] = new newFamily("MELIPHAGIDAE","吸蜜鸟科","Honeyeaters","吸蜜鸟");
  family[j++] = new newFamily("DASYORNITHIDAE","刺莺科","Bristlebirds","刺莺");
  family[j++] = new newFamily("PARDALOTIDAE","斑食蜜鸟科","Gerygones and allies","食蜜鸟");
  family[j++] = new newFamily("ACANTHIZIDAE","细嘴莺科","Australasian Warblers","细嘴莺");
  family[j++] = new newFamily("POMATOSTOMIDAE","弯嘴鹛科","Australasian Babblers","弯嘴鹛");
  family[j++] = new newFamily("ORTHONYCHIDAE","刺尾鸫科","Logrunners","刺尾鸫");
  family[j++] = new newFamily("CNEMOPHILIDAE","冠极乐鸟科","Satinbirds","极乐鸟");
  family[j++] = new newFamily("MELANOCHARITIDAE","啄果鸟科","Berrypeckers and Longbills","啄果鸟和弯嘴吸蜜鸟");
  family[j++] = new newFamily("PARAMYTHIIDAE","冠啄果鸟科","Painted Berrypeckers","啄果鸟");
  family[j++] = new newFamily("CALLAEIDAE","垂耳鸦科","New Zealand Wattlebirds","垂耳鸦");
  family[j++] = new newFamily("NOTIOMYSTIDAE","缝叶吸蜜鸟科","Stitchbird","缝叶吸蜜鸟");
  family[j++] = new newFamily("PSOPHODIDAE","啸冠鸫科","Whipbirds, Jewel-babblers and Quail-thrushes","鹑鸫和丽鸫");
  family[j++] = new newFamily("CINCLOSOMATIDAE","啸冠鸫科","Quail-thrushes and Jewel-babblers","鹑鸫和丽鸫");
  family[j++] = new newFamily("PLATYSTEIRIDAE","疣眼鹟科","Wattle-eyes and Batises","饰眼鹟和蓬背鹟");
  family[j++] = new newFamily("MALACONOTIDAE","丛鵙科","Bush-shrikes and Puffbacks","丛鵙和篷背鵙");
  family[j++] = new newFamily("MACHAERIRHYNCHIDAE","船嘴鹟科","Boatbills","船嘴鹟");
  family[j++] = new newFamily("VANGIDAE","钩嘴鵙科","Vangas","钩嘴鵙");
  family[j++] = new newFamily("PITYRIASIDAE","棘头鵙科","Bristlehead","棘头鵙");
  family[j++] = new newFamily("ARTAMIDAE","燕鵙科","Woodswallows and Butcherbirds","燕鵙和钟鹊");
  family[j++] = new newFamily("RHAGOLOGIDAE","斑啸鹟科","Mottled Berryhunter","斑啸鹟");
  family[j++] = new newFamily("AEGITHINIDAE","雀鹎科","Ioras","雀鹎");
  family[j++] = new newFamily("CAMPEPHAGIDAE","山椒鸟科","Cuckooshrikes","山椒鸟");
  family[j++] = new newFamily("MOHOUIDAE","黄头刺莺科","Whitehead & allies","刺莺");
  family[j++] = new newFamily("NEOSITTIDAE","澳鳾科","Sittellas","澳鳾");
  family[j++] = new newFamily("EULACESTOMATIDAE","肉垂鵙雀鹟科","Ploughbill","肉垂鵙雀鹟");
  family[j++] = new newFamily("OREOICIDAE","钟鹟科","Australo-Papuan Bellbirds","钟鹟");
  family[j++] = new newFamily("FALCUNCULIDAE","鵙雀鹟科","Shriketit","鵙雀鹟");
  family[j++] = new newFamily("PACHYCEPHALIDAE","啸鹟科","Whistlers","啸鹟");
  family[j++] = new newFamily("LANIIDAE","伯劳科","Shrikes","伯劳");
  family[j++] = new newFamily("VIREONIDAE","绿鹃科","Vireos","莺雀");
  family[j++] = new newFamily("ORIOLIDAE","黄鹂科","Orioles and Figbirds","黄鹂和裸眼鹂");
  family[j++] = new newFamily("DICRURIDAE","卷尾科","Drongos","卷尾");
  family[j++] = new newFamily("RHIPIDURIDAE","扇尾鹟科","Fantails","扇尾鹟");
  family[j++] = new newFamily("MONARCHIDAE","王鹟科","Monarchs","王鹟");
  family[j++] = new newFamily("PLATYLOPHIDAE","冠鸦科","Jayshrike","冠鸦");
  family[j++] = new newFamily("CORVIDAE","鸦科","Jays, Magpies and Crows","鸦和喜鹊");
  family[j++] = new newFamily("CORCORACIDAE","澳鸦科","Australian Mudnesters","澳鸦");
  family[j++] = new newFamily("MELAMPITTIDAE","黑脚风鸟科","Melampitta","黑脚风鸟");
  family[j++] = new newFamily("IFRITIDAE","蓝顶鹛鸫科","Ifrit","蓝顶鹛鸫");
  family[j++] = new newFamily("PARADISAEIDAE","极乐鸟科","Birds-of-paradise","极乐鸟");
  family[j++] = new newFamily("PETROICIDAE","鸲鹟科","Australasian Robins","澳大拉西亚鸲鹟");
  family[j++] = new newFamily("PICATHARTIDAE","岩鹛科","Rockfowl","岩鹛");
  family[j++] = new newFamily("CHAETOPIDAE","岩鸫科","Rockjumpers","岩鸫");
  family[j++] = new newFamily("EUPETIDAE","长颈鸫科","Rail-babbler","长颈鸫");
  family[j++] = new newFamily("BOMBYCILLIDAE","太平鸟科","Waxwings","太平鸟");
  family[j++] = new newFamily("PTILIOGONATIDAE","丝鹟科","Silky-flycatchers","丝鹟");
  family[j++] = new newFamily("HYPOCOLIIDAE","连雀科","Hypocolius","连雀");
  family[j++] = new newFamily("DULIDAE","棕榈鵖科","Palmchat","棕榈鵖");
  family[j++] = new newFamily("MOHOIDAE","夏威夷吸蜜鸟科","Hawaiian Honeyeaters","夏威夷吸蜜鸟");
  family[j++] = new newFamily("HYLOCITREIDAE","林啸鹟科","Hylocitrea","林啸鹟");
  family[j++] = new newFamily("STENOSTIRIDAE","莺鹟科","Fairy Flycatchers","仙莺等");
  family[j++] = new newFamily("PARIDAE","山雀科","Chickadees and Titmice","山雀");
  family[j++] = new newFamily("REMIZIDAE","攀雀科","Penduline-Tits","攀雀");
  family[j++] = new newFamily("NICATORIDAE","斗鹎科","Nicators","斗鹎");
  family[j++] = new newFamily("PANURIDAE","文须雀科","Bearded Reedling","文须雀");
  family[j++] = new newFamily("ALAUDIDAE","百灵科","Larks","百灵");
  family[j++] = new newFamily("PYCNONOTIDAE","鹎科","Bulbuls","鹎 ");
  family[j++] = new newFamily("HIRUNDINIDAE","燕科","Swallows","燕");
  family[j++] = new newFamily("PNOEPYGIDAE","鳞胸鹪鹛科","Wren-babblers","鹪鹛");
  family[j++] = new newFamily("MACROSPHENIDAE","长嘴莺科","Crombecs and African Warblers","森莺和长嘴莺");
  family[j++] = new newFamily("CETTIIDAE","树莺科","Cettid Warblers","树莺");
  family[j++] = new newFamily("SCOTOCERCIDAE","纹鹪莺科","Streaked Scrub Warbler","纹鹪莺");
  family[j++] = new newFamily("ERYTHROCERCIDAE","红鹟科","Yellow Flycatchers","红鹟");
  family[j++] = new newFamily("HYLIIDAE","绿莺科","Hylias","绿莺");
  family[j++] = new newFamily("AEGITHALIDAE","长尾山雀科","Bushtits","长尾山雀");
  family[j++] = new newFamily("PHYLLOSCOPIDAE","柳莺科","Leaf Warblers","柳莺");
  family[j++] = new newFamily("ACROCEPHALIDAE","苇莺科","Reed-Warblers","苇莺");
  family[j++] = new newFamily("LOCUSTELLIDAE","蝗莺科","Grassbirds","蝗莺");
  family[j++] = new newFamily("DONACOBIIDAE","黑顶鹪鹩科","Donacobius","黑顶鹪鹩");
  family[j++] = new newFamily("BERNIERIDAE","马岛鹎科","Malagasy Warblers","马岛鹎");
  family[j++] = new newFamily("CISTICOLIDAE","扇尾莺科","Cisticolas","扇尾莺");
  family[j++] = new newFamily("SYLVIIDAE","莺科","Old World Warblers","旧大陆莺");
  family[j++] = new newFamily("PARADOXORNITHIDAE","鸦雀科","Parrotbills and allies","鸦雀");
  family[j++] = new newFamily("ZOSTEROPIDAE","绣眼鸟科","White-eyes","绣眼鸟");
  family[j++] = new newFamily("TIMALIIDAE","画眉科","Babblers and Scimitar-Babblers","画眉");
  family[j++] = new newFamily("PELLORNEIDAE","幽鹛科","Fulvettas and Ground Babblers","幽鹛");
  family[j++] = new newFamily("ALCIPPEIDAE","雀鹛科","Alcippe Fulvettas","雀鹛");
  family[j++] = new newFamily("LEIOTHRICHIDAE","噪鹛科","Laughingthrushes","噪鹛");
  family[j++] = new newFamily("MODULATRICIDAE","纹喉鵖科","Dapplethroat and allies","纹喉鵖");
  family[j++] = new newFamily("PROMEROPIDAE","非洲食蜜鸟科","Sugarbirds","非洲食蜜鸟");
  family[j++] = new newFamily("IRENIDAE","和平鸟科","Fairy Bluebirds","和平鸟");
  family[j++] = new newFamily("REGULIDAE","戴菊科","Kinglets","戴菊");
  family[j++] = new newFamily("ELACHURIDAE","丽星鹩鹛科","Elachura","丽星鹩鹛");
  family[j++] = new newFamily("HYLIOTIDAE","丛莺科","Hyliotas","丛莺");
  family[j++] = new newFamily("TROGLODYTIDAE","鹪鹩科","Wrens","鹪鹩");
  family[j++] = new newFamily("POLIOPTILIDAE","蚋莺科","Gnatcatchers","蚋莺");
  family[j++] = new newFamily("SITTIDAE","䴓科","Nuthatches","䴓");
  family[j++] = new newFamily("TICHODROMIDAE","旋壁雀科","Wallcreeper","旋壁雀");
  family[j++] = new newFamily("CERTHIIDAE","旋木雀科","Creepers","旋木雀");
  family[j++] = new newFamily("MIMIDAE","嘲鸫科","Mockingbirds, Thrashers, and Allies","嘲鸫");
  family[j++] = new newFamily("STURNIDAE","椋鸟科","Starlings and Allies","椋鸟");
  family[j++] = new newFamily("BUPHAGIDAE","牛椋鸟科","Oxpeckers","牛椋鸟");
  family[j++] = new newFamily("TURDIDAE","鸫科","Thrushes","鸫");
  family[j++] = new newFamily("MUSCICAPIDAE","鹟科","Old World Flycatchers","旧大陆鹟");
  family[j++] = new newFamily("CINCLIDAE","河乌科","Dippers","河乌");
  family[j++] = new newFamily("CHLOROPSEIDAE","叶鹎科","Leafbirds","叶鹎");
  family[j++] = new newFamily("DICAEIDAE","啄花鸟科","Flowerpeckers","啄花鸟");
  family[j++] = new newFamily("NECTARINIIDAE","太阳鸟科","Sunbirds","太阳鸟");
  family[j++] = new newFamily("PASSERIDAE","雀科","Old World Sparrows","旧大陆麻雀");
  family[j++] = new newFamily("PLOCEIDAE","织布鸟科","Weavers","织布鸟");
  family[j++] = new newFamily("ESTRILDIDAE","梅花雀科","weaver-finches","梅花雀");
  family[j++] = new newFamily("VIDUIDAE","维达雀科","Indigobirds and Whydahs","维达雀");
  family[j++] = new newFamily("PEUCEDRAMIDAE","绿森莺科","Olive Warbler","绿森莺");
  family[j++] = new newFamily("PRUNELLIDAE","岩鹨科","Accentors","岩鹨");
  family[j++] = new newFamily("MOTACILLIDAE","鹡鸰科","Wagtails and Pipits","鹡和鸰鹨 ");
  family[j++] = new newFamily("UROCYNCHRAMIDAE","朱鹀科","Przevalski's Finch","朱鹀");
  family[j++] = new newFamily("FRINGILLIDAE","燕雀科","Finches and Allies","燕雀等");
  family[j++] = new newFamily("CALCARIIDAE","铁爪鹀科","Longspurs and Snow Buntings","铁爪鹀和雪鹀");
  family[j++] = new newFamily("RHODINOCICHLIDAE","鸫唐纳雀科","Thrush-tanager","鸫唐纳雀");
  family[j++] = new newFamily("EMBERIZIDAE","鹀科","New World Sparrows and Allies","美洲鹀");
  family[j++] = new newFamily("PASSERELLIDAE","美洲麻雀科","New World Sparrows","美洲麻雀");
  family[j++] = new newFamily("CALYPTOPHILIDAE","拟鵖唐纳雀科","Chat-tanagers","拟鵖唐纳雀");
  family[j++] = new newFamily("PHAENICOPHILIDAE","棕榈唐纳雀科","Hispaniolan Tanagers","海地唐纳雀");
  family[j++] = new newFamily("NESOSPINGIDAE","波多黎各唐纳雀科","Puerto Rican Tanager","波多黎各唐纳雀");
  family[j++] = new newFamily("SPINDALIDAE","纹头唐纳雀科","Spindalises","纹头唐纳雀");
  family[j++] = new newFamily("ZELEDONIIDAE","冠鹩森莺科","Wrenthrush","冠鹩森莺");
  family[j++] = new newFamily("TERETISTRIDAE","灰森莺科","Cuban Warblers","古巴莺");
  family[j++] = new newFamily("ICTERIIDAE","黄胸大鵖莺科","Yellow-breasted Chat","黄胸大鵖莺");
  family[j++] = new newFamily("ICTERIDAE","拟鹂科","Blackbirds and Allies","拟鹂");
  family[j++] = new newFamily("PARULIDAE","森莺科","Wood-Warblers","森莺");
  family[j++] = new newFamily("MITROSPINGIDAE","乌脸唐纳雀科","Mitrospingid Tanagers","乌脸唐纳雀");
  family[j++] = new newFamily("CARDINALIDAE","美洲雀科","Cardinals, Grosbeaks, and Allies","美洲雀");
  family[j++] = new newFamily("THRAUPIDAE","裸鼻雀科","Tanagers and Allies","唐纳雀");
  orders[i++] = new newOrder("PASSERIFORMES","雀形目","Perching Birds","雀",family);

  //functions and variables used in index_birds_names
  //table for Chinese pinyin, string.localeCompare() does not work in all browsers
  var py  =  { 额:"e2", 鹅:"e2", 鹗:"e4", 阿:"a1", 峨:"e2", 恶:"e4", 纳:"na4",蚁:"yi3",鸸:"er2", 斗:"dou4",树:"shu4",茶:"cha2",林:"lin2",白:"bai2",赤:"chi4",肉:"rou4",竹:"zhu2",寒:"han2",台:"tai2",雷:"lei2", 环:"huan2",平:"ping2",横:"heng2",苍:"cang1",娇:"jiao1",寿:"shou4",亨:"heng1", 胜:"sheng4",
      拿:"na2",绿:"lv4",艾:"ai4",鸡:"ji1",狐:"hu2",曲:"qu1",牙:"ya2",稀:"xi1",菊:"ju2",利:"li4", 海:"hai3",喉:"hou2",太:"tai4",沙:"sha1",雉:"zhi4",珠:"zhu1",齿:"chi3",麦:"mai4",织:"zhi1",群:"qun2",莱:"lai2", 东:"dong1",鸻:"heng2",尖:"jian1",杓:"shao2",连:"lian2",蒙:"meng2",孔:"kong3", 椋:"liang2",
      巨:"ju4",夜:"ye4",克:"ke4",鹭:"lu4",唧:"ji1",麻:"ma2",叶:"ye4",苦:"ku3",特:"te4",墨:"mo2", 鹫:"jiu4",华:"hua2",灰:"hui1",叉:"cha1",粉:"fen3",三:"san1",牛:"niu2",本:"ben3",新:"xin1",逊:"xun4",国:"guo2", 脸:"lian3",州:"zhou1",鹰:"ying1",鸿:"hong2",方:"fang1",蕉:"jiao1",剪:"jian3", 声:"sheng1",
      细:"xi4",紫:"zi3",羽:"yu3",蛎:"li4",鹬:"yu4",矶:"ji1",丽:"li4",笛:"di2",和:"he2",赫:"he4", 金:"jin1",丘:"qiu1",丹:"dan1",蓑:"suo1",厚:"hou4",半:"ban4",云:"yun2",侏:"zhu1",靴:"xue3",直:"zhi2",霍:"huo4", 田:"tian2",青:"qing1",领:"ling3",震:"zhen4",翘:"qiao4",端:"duan1",桑:"sang1", 冢:"zhong3",
      大:"da4",尔:"er3",地:"di4",崖:"ya2",鸦:"ya1",鸽:"ge1",耳:"er3",卡:"ka3",密:"mi4",䳭:"ji2", 伞:"san3",滨:"bin1",噪:"zao4",趾:"zhi3",鸠:"jiu1",威:"wei1",朱:"zhu1",裸:"luo3",翡:"fei3",池:"chi2",掩:"yan3", 冰:"bing1",鹦:"ying1",皱:"zhou4",绒:"rong2",沼:"zhao3",星:"xing1",阳:"yang2", 船:"chuan2",
      栖:"qi1",雨:"yu3",各:"ge4",颏:"ke1",木:"mu4",哥:"ge1",渡:"du4",扑:"pu1",哀:"ai1",米:"mi3", 鸱:"chi1",翠:"cui4",狗:"gou3",汁:"zhi1",鴷:"lie4",游:"you2",淡:"dan4",南:"nan2",帆:"fan1",葵:"kui2",艳:"yan4", 园:"yuan2",丁:"ding1",鹪:"jiao1",棉:"mian2",鹩:"liao2",蜂:"feng1",芒:"mang2", 塍:"cheng2",
      伯:"bo2",暗:"an4",丝:"si1",蜡:"la4",鹀:"wu2",犀:"xi1",乐:"le4",欧:"ou1",马:"ma3",迪:"di2", 带:"dai4",钩:"gou1",呆:"dai1",劳:"lao2",百:"bai3",鹎:"bei1",罗:"luo2",绣:"xiu4",鹛:"mei2",维:"wei2",坦:"tan3", 圆:"yuan2",脚:"jiao3",嘲:"chao2",丛:"cong2",缝:"feng2",董:"dong3",藏:"zang4", 长:"chang2",
      鸲:"qu2",鹡:"ji2",圃:"pu3",布:"bu4",河:"he2",鵖:"bi1",斯:"si1",鸬:"lu2",苏:"su1",那:"na4", 玫:"mei2",昏:"hun1",弯:"wan1",腿:"tui3",花:"hua1",灶:"zao4",文:"wen2",琉:"liu2",穗:"sui4",支:"zhi1",赛:"sai4", 窜:"cuan4",鸰:"ling2",唐:"tang2",剑:"jian4",松:"song1",枞:"cong1",爪:"zhao3", 鵟:"kuang2",
      鹉:"wu3",热:"re4",勒:"le4",鹕:"hu2",霸:"ba4",拉:"la1",鹚:"ci2",波:"bo1",簇:"cu4",髭:"zi1", 蚋:"rui4",鸵:"tuo2",贼:"zei2",反:"fan3",信:"xin4",纹:"wen2",黑:"hei1",燕:"yan4",岩:"yan2",非:"fei1",钝:"dun4", 潜:"qian2",鳽:"jian1",靛:"dian4",扁:"bian3",勺:"shao2",囱:"cong1",灵:"ling2", 橡:"xiang4",
      鹈:"ti2",漠:"mo4",姬:"ji1",刺:"ci4",吉:"ji2",骨:"gu3",鴗:"li4",鼻:"bi2",吸:"xi1",奥:"ao4", 蛇:"she2",戴:"dai4",咬:"yao3",巾:"jin1",加:"jia1",秋:"qiu1",费:"fei4",食:"shi2",疣:"you2",瑞:"rui4",瘤:"liu2", 榛:"zhen1",洲:"zhou1",叫:"jiao4",纯:"chun2",针:"zhen1",鹲:"meng2",卷:"juan3", 虫:"chong2",
      褐:"he4",普:"pu3",弗:"fu2",尼:"ni2",䴙:"pi4",西:"xi1",八:"ba1",旅:"lv3",籽:"zi3",沃:"wo4", 北:"bei3",毛:"mao2",鹞:"yao4",烟:"yan1",果:"guo3",家:"jia1",柳:"liu3",胁:"xie2",隐:"yin3",高:"gao1",小:"xiao3",神:"shen2",角:"jiao3",短:"duan3",铜:"tong2",蓬:"peng2",漂:"piao1",镰:"lian2", 疆:"jiang1",
      浮:"fu2",黎:"li2",企:"qi3",达:"da2",鵙:"ju2",佛:"fo2",鹤:"he4",琵:"pi2",及:"ji2",火:"huo3",石:"shi2",印:"yin4",铁:"tie3",苇:"wei3",锈:"xiu4",内:"nei4",恺:"kai3",委:"wei3",岛:"dao3",鸺:"xiu1",冠:"guan1",山:"shan1",鹋:"miao2",水:"shui3",宽:"kuan1",跷:"qiao1",䳍:"gong1",旋:"xuan2", 相:"xiang1",
      鸭:"ya1",色:"se4",鹱:"hu4",蹼:"pu3",鸥:"ou1",博:"bo2",里:"li3",喜:"xi3",埃:"ai1",眉:"mei2",主:"zhu3",多:"duo1",刀:"dao1",翅:"chi4",嘴:"zui3",鹊:"que4",氏:"shi4",雪:"xue3",鹠:"liu2",刘:"liu2",垂:"chui2",鸯:"yang1",鹳:"guan4",鸳:"yuan1",王:"wang2",鹇:"xian2",鸢:"yuan1",僧:"seng1", 城:"cheng2",
      乌:"wu1",披:"pi1",栗:"li4",亚:"ya4",安:"an1",鱼:"yu2",榈:"lv2",鹂:"li2",蜜:"mi4",番:"fan1",桂:"gui4",买:"mai3",䴓:"shi1",森:"sen1",瓣:"ban4",隼:"sun3",矛:"mao2",眼:"yan3",甘:"gan1",兰:"lan2",雕:"diao1",锥:"zhui1",顶:"ding3",鹟:"weng1",鸫:"dong1",秧:"yang1",冕:"mian3",鸣:"ming2", 胸:"xiong1", 
      腹:"fu4",巴:"ba1",比:"bi3",库:"ku4",极:"ji2",科:"ke1",歌:"ge1",拟:"ni3",虎:"hu3",头:"tou2",颊:"jia2",伦:"lun2",油:"you2",走:"zou3",鼠:"shu3",喙:"hui4",画:"hua4",鬼:"gui3",赭:"zhe3",辉:"hui1",啄:"zhuo2",丑:"chou3",笑:"xiao4",原:"yuan2",风:"feng1",颈:"jing3",肛:"gang1",棕:"zong1", 黄:"huang2",
      䴘:"ti1",鳍:"qi2",日:"ri4",须:"xu1",第:"di4",棘:"ji2",杂:"za2",澳:"ao4",翼:"yi4",绯:"fei1",臀:"tun2",蚊:"wen2",智:"zhi4",橄:"gan3",掘:"jue2",榄:"lan3",蟹:"xie4",楔:"xie1",豆:"dou4",麝:"she4",扇:"shan4",天:"tian1",点:"dian3",硬:"ying4",刚:"gang1",鹑:"chun2",灯:"deng1",交:"jiao1", 中:"zhong1",强:"qiang2",   
      几:"ji3",壁:"bi4",帝:"di4",锡:"xi1",叭:"ba1",喇:"la3",法:"fa3",蟆:"ma2",凫:"fu2",薮:"sou3",索:"suo3",奎:"kui2",滑:"hua2",背:"bei4",穴:"xue2",流:"liu2",美:"mei3",鳞:"lin2",草:"cao3",曼:"man4",膀:"bang3",枕:"zhen3",肩:"jian1",鹮:"huan2",猩:"xing1",舰:"jian4",鲣:"jian1",鲸:"jing1", 眶:"kuang4",响:"xiang3",
      理:"li3",伍:"wu3",奇:"qi2",希:"xi1",思:"si1",距:"ju4",肃:"su4",蜗:"wo1",舞:"wu3",蛛:"zhu1",旦:"dan4",痣:"zhi4",湾:"wan1",曙:"shu3",道:"dao4",稻:"dao4",黍:"shu3",煤:"mei2",盘:"pan2",球:"qiu2",纵:"zong4",仙:"xian1",锤:"chui2",远:"yuan3",翁:"weng1",冬:"dong1",蝇:"ying2",鞘:"qiao4", 蝗:"huang2",亮:"liang4",
      篱:"li2",域:"yu4",岸:"an4",溪:"xi1",贺:"he4",塔:"ta3",足:"zu2",曳:"ye4",可:"ke3",斑:"ban1",蓝:"lan2",军:"jun1",尾:"wei3",银:"yin2",雀:"que4",琴:"qin2",宝:"bao3",暴:"bao4",哲:"zhe2",舌:"she2",红:"hong2",啸:"xiao4",洋:"yang2",仓:"cang1",莺:"ying1",凤:"feng4",鹃:"juan1",玄:"xuan2", 煌:"huang2",川:"chuan1",
      穆:"mu4",胡:"hu2",遗:"yi2",女:"nv3",泽:"ze2",古:"gu3",孤:"gu1",渔:"yu2",戈:"ge1",口:"kou3",彩:"cai3",盔:"kui1",翻:"fan1",腰:"yao1",鸨:"bao3",雁:"yan4",鹨:"liu4",月:"yue3",阔:"kuo4",饰:"shi4",翎:"ling2",通:"tong1",鸮:"xiao1",猛:"meng3",椒:"jiao1",鸟:"niao3",虹:"hong2",橙:"cheng2",光:"guang1",双:"shuang1"};

  var pt_eng  = ["males* left, *females* right","males*, *breeding plumage","males*, *nonbreeding plumage","males*","(immature|juvenile) males*","(immature|juvenile) females*","(immatures*|juveniles*)","females*\/immature males*","females*\/immatures*",
                 "females* left, *males* right","females* and chicks*","females*","winter plumage","1st winter","2nd winter","3rd winter","fall plumage","winter females*","eclipse males*","adults* and (immatures*|juveniles*)","adults*",
                 "breeding (adults*|plumage)","nonbreeding adult\/immature","nonbreeding (adults*|plumage)","nonbreeding females*\/immature males*","nonbreeding females*","nonbreeding males*","(partially)* *leucistic","mating display","nest"];
  var pt_chn  = ["左雄性，右雌性","雄性，繁殖羽","雄性，非繁殖羽","雄性","未成年雄性","未成年雌性","未成年","雌性/未成年雄性","雌性/未成年","左雌性，右雄性","雌性和幼鸟","雌性","冬羽","一龄冬羽","二龄冬羽","三龄冬羽","秋羽","冬羽雌性","蚀羽雄性","成年和未成年",
                 "成年","繁殖羽","非繁殖羽/未成年","非繁殖羽","非繁殖羽雌性/未成年雄性","非繁殖羽雌性","非繁殖羽雄性","白变种","求偶展示","鸟巢"];     
  var lnksty  = "' style='color: #3399FF; text-decoration: underline;'"; 
  var fam_ln  = 8;						//family length
  var order   = ((window.location.search.substring(1)).match(/&order|^order/i)!=null);
  
  function myBird(liferdate, family, name, cname, latin, photo, info, ebid, curl){
     this.lifer    = new Date("20"+liferdate+":00"); 
     this.family   = family.trim().slice(0,fam_ln).toUpperCase(); 
     this.name     = name.trim();
     this.name1    = reform(this.name);
     this.cname    = cname.trim();
     this.pinyin   = getpinyin(this.cname);
     this.newbird  = false;
     this.latin    = latin.trim().charAt(0).toUpperCase()+latin.trim().slice(1).toLowerCase();
     this.genus    = (latin.trim()).substring(0,this.latin.indexOf(' '));
     this.info     = [];
     this.cinfo    = [];
     this.locs     = [];
     if (photo.constructor == Array){
        this.photo = photo;
     }else{
        this.photo = [photo]; 
     }
     pic_cnts = pic_cnts+this.photo.length;
     info = reform_locs(info);
     var tmp_info  = [];
     var tmp_cinfo = [];
     var tmp_date  = new Date();
     var tmp_monyr = [];
     for (var i=0;i<Math.floor((info.length-1)/6.0)+1;i++){
         if (typeof info[2+6*i]!=='undefined'){
            if (typeof info[3+6*i]==='undefined'){info.splice(3+6*i,0,"");}
            if (info[3+6*i].trim().length==0){
               var tmp = info[2+6*i].trim();
               for (var j=0;j<pt_eng.length;j++){
                   var rexp = new RegExp("^"+pt_eng[j],"i");        
                   if (rexp.test(tmp)){
                      info[3+6*i] = pt_chn[j];
                      break;
                   }
               }
            }
         }
         this.locs.push(info[6*i]);
         tmp_info[i]   = loclink(info[6*i],info[1+6*i],false,info[2+6*i],info[4+6*i]); 
         tmp_cinfo[i]  = loclink(info[6*i],info[1+6*i],true,info[3+6*i],info[5+6*i]);
         tmp_monyr     = (info[1+6*i].match(dateregex))[0].split("/");
         tmp_date      = new Date(parseInt(tmp_monyr[1]),parseInt(tmp_monyr[0])-1);
         if (tmp_date.getTime()>modTim){this.newbird = true;}
     }
     for (var i=0;i<this.photo.length;i++){
         if ((""+this.photo[i]).match(/_dig_/i)!=null){dig_cnts++;}
         this.info.push(tmp_info[Math.min(i,tmp_info.length-1)]); 
         this.cinfo.push(tmp_cinfo[Math.min(i,tmp_cinfo.length-1)]);
     }
     
     if(typeof ebid == 'undefined'){ 
        ebid = "";  
     }else if(typeof ebid == "string"){
        if (ebid.match(/[\u3400-\u9FBF]/)) {
           curl = ebid;
           ebid = "";
        }
     }else{
        curl = ebid;
        ebid = "";
     }
     if (ebid !==""){
        this.url = ebirdurl(ebid);
     }else{
        this.url = cornellurl(this.name1);
     }
     
     if (window.usechinese) {
        if (typeof curl == 'undefined') {curl = this.cname;} 
        if (curl.constructor == Array){
           if (typeof curl[0] == "string"){
              curl = curl[0];
           }
        }
        if ((typeof curl == "string") && (curl.match(/^http/))){
           this.url = curl;
        }else if (curl !==""){
           this.url = baikeurl(curl);
        }
     }
   
     //check if this bird needs to be added to modBrd
     if ((modTim<=this.lifer.getTime()) || this.newbird){
        this.newbird = (modTim<=this.lifer.getTime());
        modBrd.name[modBrd.name.length]   = this.name;
        modBrd.cname[modBrd.cname.length] = this.cname;
        modBrd.newbird[modBrd.newbird.length] = this.newbird;
        if (!this.newbird) {
           all_new = false;
        } 
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

  function birdFound(id){
     for (var i=0;i<birds.length;i++){
         if (birds[i].name1 == id) return true;
     }
     return false; 
  }

  function b_link(bid,info){
     if (typeof info === 'undefined') {var info = bid;} else {
        if (info==='s'){info = bid.trim()+info;}
     }
     if (order){bid = bid+"&order";}
     return "<a href='showbird.html?name="+reform(bid)+lnksty+">"+info+"</a>";
  }

  function getByCountry(id, myArray){
     if (id.match(/[\u3400-\u9FBF]/)){
        return myArray.filter(function(obj) {
           for (var i=0;i<obj.cinfo.length;i++){
               var tmp = reform(obj.cinfo[i]);
               if(tmp.indexOf(id)==0||tmp.indexOf("，"+id)!=-1||tmp.indexOf("，_"+id)!=-1) { return obj; }
           }
        })
     }else{
        return myArray.filter(function(obj) {
           for (var i=0;i<obj.info.length;i++){
               var tmp = reform(obj.info[i]);
               if(tmp.indexOf(","+id)!=-1||tmp.indexOf(",_"+id)!=-1) { return obj; }
           }
        })
     }
  } 

  function getByFamily(id, myArray) {
     var tmpid = id.slice(0,fam_ln);
     return myArray.filter(function(obj) {if(obj.family == tmpid) { return obj; }});
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

  function getByHanzi(id, myArray){
     if (id.match(/[\u3400-\u9FBF]/)){
        return myArray.filter(function(obj) {
            if(obj.cname.indexOf(id)!=-1) { return obj; }
        })
     }
  } 

  function getByLocs(id, myArray){
     return myArray.filter(function(obj) {
        if(obj.locs.indexOf(id) != -1) { return obj; }
     })
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

  function m_id(id,num){
     var ind = 0;
     if (typeof num === 'undefined'){num = "";}else{ind=num;}
     if (id.constructor == Array) {
        misc_cnts[ind] = misc_cnts[ind]+id.length;
     }else{
        misc_cnts[ind] = misc_cnts[ind]+1;
     }
     return sas("misc_birds"+num.toString()+"/",id);
  }

  function p_id(album,id){
     return sas(album+"/"+album+"_",id);
  }

  function baikeurl(bid,name){
     if (typeof bid == "string"){
        if (typeof name === 'undefined'){
           return "https://baike.baidu.com/item/"+bid;
        }else{
           return "<a href='https://baike.baidu.com/item/"+bid+lnksty+" target='"+bid+"'>"+name+"</a>";
        }    
     }else{
        return "http://www.niaobaike.com/baike/"+bid.toString()+".html";
     }
  }

  function cornellurl(bid){
     return "https://www.allaboutbirds.org/guide/"+bid.trim()+"/id";
  }

  function ebirdurl(bid){
     return "https://ebird.org/species/"+bid.trim()+"/";
  }

  function ebird(date,id){
     ebirdlist.push(id);
     return "<a href='https://ebird.org/checklist/"+id+lnksty+" target='"+id+"'>"+date+"</a>";
  }

  function gmap(name,latt,long){
     if ((typeof latt === 'undefined') || (typeof long === 'undefined')){   
        return "<a href='https://www.google.com/maps/search/?api=1&query="+reform(name,'+')+lnksty+" target='gmap'>"+name+"</a>";
     }else{
        return "<a href='https://www.google.com/maps/search/?api=1&query="+latt.toString()+"%2C"+long.toString()+lnksty+" target='gmap'>"+name+"</a>";
     }
  }

  //https://lbsyun.baidu.com/index.php?title=uri/api or with offset [latt,long]+[0.0057,0.0064]
  function bmap(name,latt,long){
     if ((typeof latt === 'undefined') || (typeof long === 'undefined')){   
        return name;
     }else{
        return "<a href='http://api.map.baidu.com/marker?location="+latt.toString()+"%2C"+long.toString()+"&output=html&coord_type=gcj02&title="+name+lnksty+" target='bmap'>"+name+"</a>";
     }
  }

  function npsurl(pid,isfws,name){
     if (typeof isfws === 'undefined'){
        return "https://www.nps.gov/"+pid+"/";
     }else if(typeof isfws == "string"){
        return "<a href='https://www.nps.gov/"+pid+"/"+lnksty+" target='"+pid+"'>"+isfws+"</a>";
     }else{
        if (typeof name === 'undefined'){
           return "https://www.fws.gov/refuge/"+pid+"/";
        }else{
           return "<a href='https://www.fws.gov/refuge/"+pid+"/"+lnksty+" target='"+pid+"'>"+name+"</a>";
        }
     }
  }

  function wikiurl(bid,name){
     if (typeof name === 'undefined'){
        return "https://en.wikipedia.org/wiki/"+reform(bid,"_","%27",true);
     }else{
        return "<a href='https://en.wikipedia.org/wiki/"+reform(bid,"_","%27",true)+lnksty+" target='"+bid+"'>"+name+"</a>";
     }
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

  function reform_locs(link){
     var indx = 2;
     var prev = 0;
     while(indx<link.length){
         if (typeof locurl[link[indx]] !== 'undefined'){
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
     var cn_ind = usechinese?1:0;
     var comma  = ([", ","，"])[cn_ind];
     var id_0   = ([0,2])[cn_ind];
     if (usechinese){
        if (typeof loc_cnts[pid] === 'undefined') loc_cnts[pid] = 0;
        loc_cnts[pid]++;
     }
     if (typeof date === 'undefined') {var date  = "";}
     if (typeof header === 'undefined') {header = "";} 
     if (header.length>0) {header = header+comma;}
     if (typeof extra === 'undefined') {var extra = "";}
     if (typeof locurl[pid] === 'undefined') {return header+extra+date;}
     var tmp = locurl[pid].slice(0);
     if (locurl[pid].length>=7){
        extra = tmp[([1,4])[cn_ind]];
        tmp.splice(4,1);
        tmp.splice(1,1);
     }
     if ((typeof tmp[5]!=='undefined') && usechinese){tmp[4] = tmp[5];}
     if ((extra.length>0)||(usechinese&&(tmp[0+id_0].length>0))){extra = extra+comma;}
     if ((tmp[0+id_0].length>0) && (!usechinese)) {
        if (extra.length==0) { extra = comma+extra;}
        if ((header.length==0) && (tmp[0].charAt(0)==tmp[0].charAt(0).toLowerCase())) {tmp[0]=tmp[0].charAt(0).toUpperCase()+tmp[0].slice(1);}
     }
     if (tmp[1+id_0].length>0 && (!usechinese)){ tmp[1+id_0] = tmp[1+id_0]+comma;}
     if (typeof tmp[4] !== 'undefined') {
        if (tmp[4].length > 0) {
           return ([header+"<a href='"+tmp[4]+lnksty+" target='"+pid+"'>"+tmp[0+id_0]+"</a>"+extra+tmp[1+id_0]+date,header+tmp[1+id_0]+"<a href='"+tmp[4]+lnksty+" target='"+pid+"'>"+tmp[0+id_0]+"</a>"+extra+date])[cn_ind];
        }
     }
     return ([header+tmp[0+id_0]+extra+tmp[1+id_0]+date,header+tmp[1+id_0]+tmp[0+id_0]+extra+date])[cn_ind];
  }
//-->
