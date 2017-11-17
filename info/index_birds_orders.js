<!--
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

  var birdfamily = true;
	
  //according to http://www.worldbirdnames.org/ioc-lists/master-list-2/ V7.3

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
  family[j++] = new newFamily("CASUARIIDAE","鹤鸵科","Cassowaries","鹤鸵");
//  family[j++] = new newFamily("DROMAIIDAE","鸸鹋科","Emus","鸸鹋");
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
//  family[j++] = new newFamily("PELECANOIDIDAE","鹈燕科","Diving-Petrels","鹈燕");
  orders[i++] = new newOrder("PROCELLARIIFORMES","鹱形目","Tubenoses","管鼻类鸟",family);

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
  family[j++] = new newFamily("PHAETHONTIDAE","鹲科","Storks","鹲");
  orders[i++] = new newOrder("PHAETHONTIFORMES","鹲形目","Tropicbird","鹲",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CICONIIDAE","鹳科","Storks","鹳");
  orders[i++] = new newOrder("CICONIIFORMES","鹳形目","Storks","鹳",family);

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
  family[j++] = new newFamily("FREGATIDAE","军舰鸟科","Frigatebirds","军舰鸟");
  family[j++] = new newFamily("SULIDAE","鲣鸟科","Boobies and Gannets","鲣鸟");
  family[j++] = new newFamily("PHALACROCORACIDAE","鸬鹚科","Cormorants","鸬鹚");
  family[j++] = new newFamily("ANHINGIDAE","蛇鹈科","Darters","蛇鹈");
  orders[i++] = new newOrder("SULIFORMES","鲣鸟目","Frigatebirds, Boobies, Cormorants, Darters, and Allies","军舰鸟，鲣鸟，鸬鹚和蛇鹈等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CATHARTIDAE","美洲鹫科","New World Vultures","美洲鹫");
  family[j++] = new newFamily("SAGITTARIIDAE","蛇鹫科","Secretarybird","蛇鹫");
  family[j++] = new newFamily("PANDIONIDAE","鹗科","Ospreys","鹗");
  family[j++] = new newFamily("ACCIPITRIDAE","鹰科","Kites, Hawks, Eagles, and Allies","鹰");
  orders[i++] = new newOrder("ACCIPITRIFORMES","鹰形目","Hawks, Kites, Eagles, and Allies","鹰，鹗和鹫等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("OTIDIDAE","鸨科","Bustards","鸨");
  orders[i++] = new newOrder("OTIDIFORMES","鸨形目","Bustards","鸨",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("MESITORNITHIDAE","拟鹑科","Mesites","拟鹑");
  orders[i++] = new newOrder("MESITORNITHIFORMES","拟鹑目","Mesites","拟鹑",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CARIAMIDAE","叫鹤科","Seriemas","叫鹤");
  orders[i++] = new newOrder("CARIAMIFORMES","叫鹤目","Seriemas","叫鹤",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("RHYNOCHETIDAE","鹭鹤科","Rhynochetos","鹭鹤");
  family[j++] = new newFamily("EURYPYGIDAE","日鳽科","Sunbittern","日鳽");
  orders[i++] = new newOrder("EURYPYGIFORMES","日鳽目","Rhynochetos and Sunbittern","鹭鹤和日鳽",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("SAROTHRURIDAE","侏秧鸡科","Flufftails","侏秧鸡");
  family[j++] = new newFamily("HELIORNITHIDAE","日鷉科","Finfoots","鳍趾鷉");
  family[j++] = new newFamily("RALLIDAE","秧鸡科","Rails, Gallinules, and Coots","秧鸡，水鸡和骨顶鸡");
  family[j++] = new newFamily("PSOPHIIDAE","喇叭鸟科","Trumpeters","喇叭鸟");
  family[j++] = new newFamily("GRUIDAE","鹤科","Cranes","鹤");
  family[j++] = new newFamily("ARAMIDAE","秧鹤科","Limpkins","秧鹤");
  orders[i++] = new newOrder("GRUIFORMES","鹤形目","Cranes and Rails","鹤和秧鸡等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("TURNICIDAE","三趾鹑科","Buttonquail","三趾鹑科");
  family[j++] = new newFamily("BURHINIDAE","石鸻科","Thick-knees","石鸻");
  family[j++] = new newFamily("CHIONIDAE","鞘嘴鸥科","Sheathbills","鞘嘴鸥");
  family[j++] = new newFamily("PLUVIANELLIDAE","麦哲伦鸻科","Magellanic Plover","麦哲伦鸻");
  family[j++] = new newFamily("HAEMATOPODIDAE","蛎鹬科","Oystercatchers","蛎鹬");
  family[j++] = new newFamily("DROMADIDAE","蟹鸻科","Crab Plover","蟹鸻");
  family[j++] = new newFamily("IBIDORHYNCHIDAE","鹮嘴鹬科","Ibisbill","鹮嘴鹬");
  family[j++] = new newFamily("RECURVIROSTRIDAE","反嘴鹬科","Stilts and Avocets","长脚鹬和反嘴鹬");
  family[j++] = new newFamily("CHARADRIIDAE","鸻科","Plovers and Lapwings","鸻和麦鸡");
  family[j++] = new newFamily("PLUVIANIDAE","埃及燕鸻科","Egyptian Plover","埃及燕鸻");
  family[j++] = new newFamily("ROSTRATULIDAE","彩鹬科","Painted-snipes","彩鹬");
  family[j++] = new newFamily("JACANIDAE","水雉科","Jacanas","水雉");
  family[j++] = new newFamily("PEDIONOMIDAE","领鹑科","Plains-wanderer","领鹑");
  family[j++] = new newFamily("THINOCORIDAE","籽鹬科","Seedsnipes","籽鹬");
  family[j++] = new newFamily("SCOLOPACIDAE","鹬科","Sandpipers, Phalaropes, and Allies","矶鹬和瓣蹼鹬等");
  family[j++] = new newFamily("GLAREOLIDAE","燕鸻科","Coursers and Pratincoles","走鸻和燕鸻");
  family[j++] = new newFamily("LARIDAE","鸥科","Gulls, Terns, and Skimmers","鸥，燕鸥和剪嘴鸥");
  family[j++] = new newFamily("STERCORARIIDAE","贼鸥科","Skuas and Jaegers","贼鸥");
  family[j++] = new newFamily("ALCIDAE","海雀科","Auks, Murres, and Puffins","海雀，海鸦和海鹦");
  orders[i++] = new newOrder("CHARADRIIFORMES","鸻形目","Plovers, Sandpipers, and Allies","鸻，鹬和鸥等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("PTEROCLIDIDAE","沙鸡科","Sandgrouse","沙鸡");
  orders[i++] = new newOrder("PTEROCLIFORMES","沙鸡目","Sandgrouse","沙鸡",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("COLUMBIDAE","鸽鸠科","Pigeons and Doves","鸽和鸠");
  orders[i++] = new newOrder("COLUMBIFORMES","鸽形目","Pigeons and Doves","鸽和鸠",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("OPISTHOCOMIDAE","麝雉科","Hoatzin","麝雉");
  orders[i++] = new newOrder("OPISTHOCOMIFORMES","麝雉目","Hoatzin","麝雉",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("MUSOPHAGIDAE","蕉鹃科","Turacos","蕉鹃");
  orders[i++] = new newOrder("MUSOPHAGIFORMES","蕉鹃目","Turacos","蕉鹃",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("CUCULIDAE","杜鹃科","Cuckoos, Roadrunners, and Anis","杜鹃，走鹃和犀鹃");
  orders[i++] = new newOrder("CUCULIFORMES","鹃形目","Cuckoos","杜鹃等",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("TYTONIDAE","草鸮科","Barn Owls","仓鸮");
  family[j++] = new newFamily("STRIGIDAE","鸱鸮科","Typical Owls","鸮");
  orders[i++] = new newOrder("STRIGIFORMES","鸮形目","Owls","鸮",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("PODARGIDAE","蟆口鸱科","Frogmouths","蟆口鸱");
  family[j++] = new newFamily("STEATORNITHIDAE","油鸱科","Oilbird","油鸱");
  family[j++] = new newFamily("NYCTIBIIDAE","林鸮科","Potoos","林鸮");
  family[j++] = new newFamily("CAPRIMULGIDAE","夜鹰科","Goatsuckers","夜鹰");
  orders[i++] = new newOrder("CAPRIMULGIFORMES","夜鹰目","Nightjars","夜鹰",family);

//  var family  = [];
//  var j = 0;
//  orders[i++] = new newOrder("PODARGIFORMES","蟆口鸱目","Frogmouths","蟆口鸱",family);

//  var family  = [];
//  var j = 0;
//  orders[i++] = new newOrder("STEATORNITHIFORMES","油鸱目","Oilbird","油鸱",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("AEGOTHELIDAE","裸鼻鸱科","Owlet-nightjars","裸鼻鸱");
  family[j++] = new newFamily("HEMIPROCNIDAE","凤头雨燕科","Treeswifts","凤头雨燕");
  family[j++] = new newFamily("APODIDAE","雨燕科","Swifts","雨燕");
  family[j++] = new newFamily("TROCHILIDAE","蜂鸟科","Hummingbirds","蜂鸟");
  orders[i++] = new newOrder("APODIFORMES","雨燕目","Swifts and Hummingbirds","雨燕和蜂鸟",family);

//  var family  = [];
//  var j = 0;
//  orders[i++] = new newOrder("AEGOTHELIFORMES","裸鼻鸱目","Owlet-nightjars","裸鼻鸱",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("COLIIDAE","鼠鸟科","Mousebirds","鼠鸟");
  orders[i++] = new newOrder("COLIIFORMES","鼠鸟目","Mousebirds","鼠鸟",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("TROGONIDAE","咬鹃科","Trogons and Quetzals","咬鹃和绿咬鹃");
  orders[i++] = new newOrder("TROGONIFORMES","咬鹃目","Trogons and Quetzals","咬鹃和绿咬鹃",family);

  var family  = [];
  var j = 0;
  family[j++] = new newFamily("LEPTOSOMIDAE","鹃三宝鸟科","Cuckoo Roller","鹃三宝鸟");
  orders[i++] = new newOrder("LEPTOSOMIFORMES","鹃三宝鸟目","Cuckoo Roller","鹃三宝鸟",family);

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
  family[j++] = new newFamily("UPUPIDAE","戴胜科","Hoopoes","戴胜");
  family[j++] = new newFamily("PHOENICULIDAE","林戴胜科","Wood Hoopoes","林戴胜");
  family[j++] = new newFamily("BUCORVIDAE","地犀鸟科","Ground Hornbills","地犀鸟");
  family[j++] = new newFamily("BUCEROTIDAE","犀鸟科","Hornbills","犀鸟");
  orders[i++] = new newOrder("BUCEROTIFORMES","犀鸟目","Hornbills, Hoopoes and Wood Hoopoes","犀鸟，戴胜和林戴胜",family);

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
  family[j++] = new newFamily("EURYLAIMIDAE","阔嘴鸟科","Broadbills","阔嘴鸟");
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
//  family[j++] = new newFamily("CINCLOSOMATIDAE","啸冠鸫科","Quail-thrushes and Jewel-babblers","鹑鸫和丽鸫");
  family[j++] = new newFamily("PLATYSTEIRIDAE","疣眼鹟科","Wattle-eyes and Batises","饰眼鹟和蓬背鹟");
  family[j++] = new newFamily("TEPHRODORNITHIDAE","林鵙科","Woodshrikes and allies","林鵙");
  family[j++] = new newFamily("PRIONOPIDAE","盔鵙科","Helmetshrikes","盔鵙");
  family[j++] = new newFamily("MALACONOTIDAE","丛鵙科","Bush-shrikes and Puffbacks","丛鵙和篷背鵙");
  family[j++] = new newFamily("MACHAERIRHYNCHIDAE","船嘴鹟科","Boatbills","船嘴鹟");
  family[j++] = new newFamily("VANGIDAE","钩嘴鵙科","Vangas","钩嘴鵙");
  family[j++] = new newFamily("PITYRIASEIDAE","棘头鵙科","Bristlehead","棘头鵙");
  family[j++] = new newFamily("ARTAMIDAE","燕鵙科","Woodswallows and Butcherbirds","燕鵙和钟鹊");
  family[j++] = new newFamily("RHAGOLOGIDAE","斑啸鹟科","Mottled Berryhunter","斑啸鹟");
  family[j++] = new newFamily("AEGITHINIDAE","雀鹎科","Ioras","雀鹎");
  family[j++] = new newFamily("CAMPEPHAGIDAE","山椒鸟科","Cuckooshrikes","山椒鸟");
  family[j++] = new newFamily("MOHOUIDAE","黄头刺莺科","Whitehead & allies","刺莺");
  family[j++] = new newFamily("NEOSITTIDAE","澳鳾科","Sittellas","澳鳾");
  family[j++] = new newFamily("EULACESTOMIDAE","肉垂鵙雀鹟科","Ploughbill","肉垂鵙雀鹟");
  family[j++] = new newFamily("OREOICIDAE","钟鹟科","Australo-Papuan Bellbirds","钟鹟");
  family[j++] = new newFamily("PACHYCEPHALIDAE","啸鹟科","Whistlers","啸鹟");
  family[j++] = new newFamily("LANIIDAE","伯劳科","Shrikes","伯劳");
  family[j++] = new newFamily("VIREONIDAE","绿鹃科","Vireos","莺雀");
  family[j++] = new newFamily("ORIOLIDAE","黄鹂科","Orioles and Figbirds","黄鹂和裸眼鹂");
  family[j++] = new newFamily("DICRURIDAE","卷尾科","Drongos","卷尾");
  family[j++] = new newFamily("RHIPIDURIDAE","扇尾鹟科","Fantails","扇尾鹟");
  family[j++] = new newFamily("MONARCHIDAE","王鹟科","Monarchs","王鹟");
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
  family[j++] = new newFamily("PTILOGONATIDAE","丝鹟科","Silky-flycatchers","丝鹟");
  family[j++] = new newFamily("HYPOCOLIIDAE","连雀科","Hypocolius","连雀");
  family[j++] = new newFamily("DULIDAE","棕榈鵖科","Palmchat","棕榈鵖");
  family[j++] = new newFamily("MOHOIDAE","夏威夷吸蜜鸟科","Hawaiian Honeyeaters","夏威夷吸蜜鸟");
  family[j++] = new newFamily("HYLOCITREIDAE","林啸鹟科","Hylocitrea","林啸鹟");
  family[j++] = new newFamily("STENOSTIRIDAE","莺鹟科","Fairy Flycatchers","仙莺等");
  family[j++] = new newFamily("PARIDAE","山雀科","Chickadees and Titmice","山雀");
  family[j++] = new newFamily("REMIZIDAE","攀雀科","Penduline-Tits","攀雀");
  family[j++] = new newFamily("NICATORIDAE","斗鹎科","Nicators","斗鹎");
  family[j++] = new newFamily("PANURIDAE","文须雀科","Bearded Reedling","文须雀");
//  family[j++] = new newFamily("PARADOXORNITHIDAE","鸦雀科","Parrotbills and Fulvettas","鸦雀和雀鹛");
  family[j++] = new newFamily("ALAUDIDAE","百灵科","Larks","百灵");
  family[j++] = new newFamily("PYCNONOTIDAE","鹎科","Bulbuls","鹎 ");
  family[j++] = new newFamily("HIRUNDINIDAE","燕科","Swallows","燕");
  family[j++] = new newFamily("PNOEPYGIDAE","鳞胸鹪鹛科","Wren-babblers","鹪鹛");
  family[j++] = new newFamily("MACROSPHENIDAE","长嘴莺科","Crombecs and African Warblers","森莺和长嘴莺");
  family[j++] = new newFamily("CETTIIDAE","树莺科","Cettid Warblers","树莺");
  family[j++] = new newFamily("SCOTOCERCIDAE","纹鹪莺科","Streaked Scrub Warbler","纹鹪莺");
  family[j++] = new newFamily("ERYTHROCERCIDAE","红鹟科","Yellow Flycatchers","红鹟");
  family[j++] = new newFamily("AEGITHALIDAE","长尾山雀科","Bushtits","长尾山雀");
  family[j++] = new newFamily("PHYLLOSCOPIDAE","柳莺科","Leaf Warblers","柳莺");
  family[j++] = new newFamily("ACROCEPHALIDAE","苇莺科","Reed-Warblers","苇莺");
  family[j++] = new newFamily("LOCUSTELLIDAE","蝗莺科","Grassbirds","蝗莺");
  family[j++] = new newFamily("DONACOBIIDAE","黑顶鹪鹩科","Donacobius","黑顶鹪鹩");
  family[j++] = new newFamily("BERNIERIDAE","马岛鹎科","Malagasy Warblers","马岛鹎");
  family[j++] = new newFamily("CISTICOLIDAE","扇尾莺科","Cisticolas","扇尾莺");
  family[j++] = new newFamily("TIMALIIDAE","画眉科","Babblers and Scimitar-Babblers","画眉");
  family[j++] = new newFamily("PELLORNEIDAE","幽鹛科","Fulvettas and Ground Babblers","幽鹛");
  family[j++] = new newFamily("LEIOTHRICHIDAE","噪鹛科","Laughingthrushes","噪鹛");
  family[j++] = new newFamily("SYLVIIDAE","莺科","Old World Warblers","旧大陆莺");
  family[j++] = new newFamily("ZOSTEROPIDAE","绣眼鸟科","White-eyes","绣眼鸟");
  family[j++] = new newFamily("MODULATRICIDAE","纹喉鵖科","Dapplethroat and allies","纹喉鵖");
//  family[j++] = new newFamily("ARCANATORIDAE","纹喉鵖科","Dapplethroat and allies","纹喉鵖");
  family[j++] = new newFamily("PROMEROPIDAE","非洲食蜜鸟科","Sugarbirds","非洲食蜜鸟");
  family[j++] = new newFamily("IRENIDAE","和平鸟科","Fairy Bluebirds","和平鸟");
  family[j++] = new newFamily("REGULIDAE","戴菊科","Kinglets","戴菊");
  family[j++] = new newFamily("ELACHURIDAE","丽星鹩鹛科","Elachura","丽星鹩鹛");
  family[j++] = new newFamily("HYLIOTIDAE","丛莺科","Hyliotas","丛莺");
  family[j++] = new newFamily("TROGLODYTIDAE","鹪鹩科","Wrens","鹪鹩");
  family[j++] = new newFamily("POLIOPTILIDAE","蚋莺科","Gnatcatchers","蚋莺");
  family[j++] = new newFamily("SITTIDAE","鳾科","Nuthatches","鳾");
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
  family[j++] = new newFamily("PARULIDAE","森莺科","Wood-Warblers","森莺");
  family[j++] = new newFamily("ICTERIIDAE","黄胸大鵖莺科","Yellow-breasted Chat","黄胸大鵖莺");
  family[j++] = new newFamily("ICTERIDAE","拟鹂科","Blackbirds and Allies","拟鹂");
  family[j++] = new newFamily("COEREBIDAE","曲嘴森莺科","Bananaquit","曲嘴森莺");
  family[j++] = new newFamily("EMBERIZIDAE","鹀科","New World Sparrows and Allies","美洲鹀");
  family[j++] = new newFamily("THRAUPIDAE","裸鼻雀科","Tanagers and Allies","唐纳雀");
  family[j++] = new newFamily("SPINDALIDAE","纹头唐纳雀科","Spindalises","纹头唐纳雀");
  family[j++] = new newFamily("CALCARIIDAE","铁爪鹀科","Longspurs and Snow Buntings","铁爪鹀和雪鹀");
  family[j++] = new newFamily("CARDINALIDAE","美洲雀科","Cardinals, Grosbeaks, and Allies","美洲雀");
  orders[i++] = new newOrder("PASSERIFORMES","雀形目","Perching Birds","雀",family);
//-->
