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
    ["GALLIFORMES","鸡形","MEGAPODIIDAE","塚雉","CRACIDAE","凤冠雉","NUMIDIDAE","珠鸡","ODONTOPHORIDAE","齿鹑","PHASIANIDAE","雉"],
    ["PHOENICOPTERIFORMES","火烈鸟","PHOENICOPTERIDAE","火烈鸟"],
    ["PODICIPEDIFORMES","䴙䴘","PODICIPEDIDAE","䴙䴘"],
    ["MUSOPHAGIFORMES","蕉鹃","MUSOPHAGIDAE","蕉鹃"],
    ["OTIDIFORMES","鸨形","OTIDIDAE","鸨"],
    ["CUCULIFORMES","鹃形","CUCULIDAE","杜鹃"],
    ["MESITORNITHIFORMES","拟鹑","MESITORNITHIDAE","拟鹑"],
    ["PTEROCLIFORMES","沙鸡","PTEROCLIDAE","沙鸡"],
    ["COLUMBIFORMES","鸽形","COLUMBIDAE","鸽鸠"],
    ["OPISTHOCOMIFORMES","麝雉","OPISTHOCOMIDAE","麝雉"],
    ["GRUIFORMES","鹤形","PSOPHIIDAE","喇叭鸟","ARAMIDAE","秧鹤","GRUIDAE","鹤","HELIORNITHIDAE","日鷉","SAROTHRURIDAE","侏秧鸡","RALLIDAE","秧鸡"],
    ["CHARADRIIFORMES","鸻形","PLUVIANELLIDAE","短腿鸻","CHIONIDAE","鞘嘴鸥","BURHINIDAE","石鸻","PLUVIANIDAE","埃及燕鸻","RECURVIROSTRIDAE","反嘴鹬","IBIDORHYNCHIDAE","鹮嘴鹬","HAEMATOPODIDAE","蛎鹬","CHARADRIIDAE","鸻",
     "PEDIONOMIDAE","领鹑","THINOCORIDAE","籽鹬","ROSTRATULIDAE","彩鹬","JACANIDAE","水雉","SCOLOPACIDAE","鹬","TURNICIDAE","三趾鹑","DROMADIDAE","蟹鸻","GLAREOLIDAE","燕鸻","STERCORARIIDAE","贼鸥","ALCIDAE","海雀","LARIDAE","鸥"],
    ["EURYPYGIFORMES","日鳽","EURYPYGIDAE","日鳽","RHYNOCHETIDAE","鹭鹤"],
    ["PHAETHONTIFORMES","鹲形","PHAETHONTIDAE","鹲"],
    ["GAVIIFORMES","潜鸟","GAVIIDAE","潜鸟"],
    ["SPHENISCIFORMES","企鹅","SPHENISCIDAE","企鹅"],
    ["PROCELLARIIFORMES","鹱形","DIOMEDEIDAE","信天翁","OCEANITIDAE","洋海燕","HYDROBATIDAE","海燕","PROCELLARIIDAE","鹱"],
    ["CICONIIFORMES","鹳形","CICONIIDAE","鹳"],
    ["SULIFORMES","鲣鸟","FREGATIDAE","军舰鸟","SULIDAE","鲣鸟","ANHINGIDAE","蛇鹈","PHALACROCORACIDAE","鸬鹚"],
    ["PELECANIFORMES","鹈形","THRESKIORNITHIDAE","鹮","BALAENICIPITIDAE","鲸头鹳","SCOPIDAE","锤头鹳","PELECANIDAE","鹈鹕","ARDEIDAE","鹭"],
    ["CAPRIMULGIFORMES","夜鹰","CAPRIMULGIDAE","夜鹰"],
    ["STEATORNITHIFORMES","油鸱","STEATORNITHIDAE","油鸱"],
    ["NYCTIBIIFORMES","林鸮","NYCTIBIIDAE","林鸮"],
    ["PODARGIFORMES","蛙口夜鹰","PODARGIDAE","蛙口夜鹰"],
    ["AEGOTHELIFORMES","裸鼻鸱","AEGOTHELIDAE","裸鼻鸱"],
    ["APODIFORMES","雨燕","HEMIPROCNIDAE","凤头雨燕","APODIDAE","雨燕","TROCHILIDAE","蜂鸟"],
    ["STRIGIFORMES","鸮形","TYTONIDAE","仓鸮","STRIGIDAE","鸱鸮"],
    ["CATHARTIFORMES","美洲鹫","CATHARTIDAE","美洲鹫"],
    ["ACCIPITRIFORMES","鹰形","SAGITTARIIDAE","鹭鹰","PANDIONIDAE","鹗","ACCIPITRIDAE","鹰"],
    ["COLIIFORMES","鼠鸟","COLIIDAE","鼠鸟"],
    ["LEPTOSOMIFORMES","鹃三宝鸟","LEPTOSOMIDAE","鹃三宝鸟"],
    ["TROGONIFORMES","咬鹃","TROGONIDAE","咬鹃"],
    ["BUCEROTIFORMES","犀鸟","UPUPIDAE","戴胜","PHOENICULIDAE","林戴胜","BUCEROTIDAE","犀鸟"],
    ["CORACIIFORMES","佛法僧","BRACHYPTERACIIDAE","地三宝鸟","CORACIIDAE","佛法僧","MEROPIDAE","蜂虎","TODIDAE","短尾鴗","MOMOTIDAE","翠鴗","ALCEDINIDAE","翠鸟"],
    ["GALBULIFORMES","鹟鴷","GALBULIDAE","鹟鴷","BUCCONIDAE","蓬头鴷"],
    ["PICIFORMES","䴕形","MEGALAIMIDAE","拟鴷","LYBIIDAE","非洲拟啄木鸟","CAPITONIDAE","须鴷","SEMNORNITHIDAE","巨嘴拟鴷","RAMPHASTIDAE","巨嘴鸟","INDICATORIDAE","响蜜鴷","PICIDAE","啄木鸟"],
    ["CARIAMIFORMES","叫鹤","CARIAMIDAE","叫鹤"],
    ["FALCONIFORMES","隼形","FALCONIDAE","隼"],
    ["PSITTACIFORMES","鹦形","STRIGOPIDAE","鸮鹦鹉","CACATUIDAE","凤头鹦鹉","PSITTACIDAE","鹦鹉","PSITTACULIDAE","长尾鹦鹉"],
    ["PASSERIFORMES","雀形","ACANTHISITTIDAE","刺鹩","PHILEPITTIDAE","裸眉鸫","EURYLAIMIDAE","阔嘴鸟","CALYPTOMENIDAE","绿阔嘴鸟","SAPAYOIDAE","阔嘴霸鹟","PITTIDAE","八色鸫","PIPRIDAE","娇鹟","COTINGIDAE","伞鸟","TITYRIDAE","蒂泰霸鹟",
     "OXYRUNCIDAE","尖喙霸鹟","ONYCHORHYNCHIDAE","皇霸鹟","TYRANNIDAE","霸鹟","MELANOPAREIIDAE","月胸窜鸟","CONOPOPHAGIDAE","食蚊鸟","THAMNOPHILIDAE","蚁鸟","GRALLARIIDAE","短尾蚁鸫","RHINOCRYPTIDAE","窜鸟","FORMICARIIDAE","蚁鸫",
     "FURNARIIDAE","灶鸟","MENURIDAE","琴鸟","ATRICHORNITHIDAE","薮鸟","CLIMACTERIDAE","短嘴旋木雀","PTILONORHYNCHIDAE","园丁鸟","MALURIDAE","细尾鹩莺","DASYORNITHIDAE","刺莺","PARDALOTIDAE","斑食蜜鸟","ACANTHIZIDAE","细嘴莺",
     "MELIPHAGIDAE","吸蜜鸟","ORTHONYCHIDAE","刺尾鸫","POMATOSTOMIDAE","弯嘴鹛","CINCLOSOMATIDAE","鹑鸫","CAMPEPHAGIDAE","鹃鵙","MOHOUIDAE","黄头刺莺","MACHAERIRHYNCHIDAE","船嘴鹟","ARTAMIDAE","燕鵙","RHAGOLOGIDAE","斑啸鹟",
     "PITYRIASIDAE","棘头鵙","AEGITHINIDAE","雀鹎","MALACONOTIDAE","丛鵙","PLATYSTEIRIDAE","疣眼鹟","VANGIDAE","钩嘴鵙","NEOSITTIDAE","澳鳾","PSOPHODIDAE","啸冠鸫","EULACESTOMATIDAE","肉垂鵙雀鹟","OREOICIDAE","冠钟鹟",
     "FALCUNCULIDAE","鵙雀鹟","PARAMYTHIIDAE","冠啄果鸟","VIREONIDAE","莺雀","ORIOLIDAE","黄鹂","PACHYCEPHALIDAE","啸鹟","RHIPIDURIDAE","扇尾鹟","DICRURIDAE","卷尾","MONARCHIDAE","王鹟","CORCORACIDAE","澳鸦","IFRITIDAE","蓝顶鹛鸫",
     "PARADISAEIDAE","极乐鸟","MELAMPITTIDAE","黑脚风鸟","PLATYLOPHIDAE","冠鸦","LANIIDAE","伯劳","CORVIDAE","鸦","CNEMOPHILIDAE","短嘴极乐鸟","MELANOCHARITIDAE","啄果鸟","NOTIOMYSTIDAE","缝叶吸蜜鸟","CALLAEIDAE","垂耳鸦",
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

var pt_eng_chn = [["males* left","左雄性"],["males* right","右雄性"],["females* left","左雌性"],["females* right","右雌性"],["adults* left","左成年"],["adults* right","右成年"],["(immatures*|juveniles*) left","左未成年"],
    ["(immatures*|juveniles*) right","右未成年"],["(males*, *breeding plumage|breeding males*)","繁殖羽雄性"],["(males*, *nonbreeding plumage|nonbreeding males*)","非繁殖羽雄性"],["males*","雄性"],["females*","雌性"],
    ["(immature|juvenile) males*","未成年雄性"],["(immature|juvenile) females*","未成年雌性"],["(immatures*|juveniles*)","未成年"],["females*\/immature males*","雌性/未成年雄性"],["females*\/immatures*","雌性/未成年"],
    ["females* and (chicks*|hatchlings*)","雌性和幼鸟"],["females* and (immature|juvenile)s*","雌性和未成年"],["spring molt","春羽"],["(females*, *breeding plumage|breeding females*)","繁殖羽雌性"],["fall plumage","秋羽"],
    ["nonbreeding females*\/immature males*","非繁殖羽雌性/未成年雄性"],["(females*, *nonbreeding plumage|nonbreeding females*)","非繁殖羽雌性"],["winter plumage","冬羽"],["1st winter","一龄冬羽"],["2nd winter","二龄冬羽"],
    ["2nd year","二龄羽"],["3rd winter","三龄冬羽"],["3rd year","三龄羽"],["winter females*","冬羽雌性"],["eclipse males*","蚀羽雄性"],["molting adult","换羽成年鸟"],["adult feeding young","成年鸟喂雏鸟"],["adults*","成年"],
    ["adults* and (chicks*|hatchlings*)","成年和幼鸟"],["adults* and (immatures*|juveniles*)","成年和未成年"],["breeding (adults*|plumage)","繁殖羽"],["nonbreeding *(adult)*\/immature","非繁殖羽/未成年"],["nests*","鸟巢"],
    ["nonbreeding (adults*|plumage)","非繁殖羽"],["(partially)* *leucistic","白变种"],["mating display","求偶展示"],["light morph","浅色型"],["(immature|juvenile) light morph","未成年浅色型"],["dark morph","深色型"],
    ["(immature|juvenile) dark morph","未成年深色型"],["(chicks*|hatchlings*)","幼鸟"],["males* at nest cavity","雄性在鸟巢口"],["females* at nest cavity","雌性在鸟巢口"],["(on the)* *left","左边"],["(on the)* *right","右边"],
    ["common","普通型"],["slate-colored form","石板色型"]];
var fam_ln  = 8;  //family length
var order   = (/&order|^order/i).test(window.location.search.substring(1));
var comma   = [", ","，"];
var modBrd  = {name:[],cname:[],newbird:[]},modDat;
var expandinfo = (/(stat\.html|country=|loc=|query=)/i).test(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
var cornell_name = [["whistling_duck","whistling-duck"],["brant_goose","brant"],["common_pheasant","ring-necked_pheasant"],["common_squirrel_cuckoo","squirrel_cuckoo"],["grey_plover","black-bellied_plover"],
    ["wood_pigeon","wood-pigeon"],["grey","gray"],["golden_plover","golden-plover"],["little_auk","dovekie"],["storm_petrel","storm-petrel"],["american_white_ibis","white_ibis"],["screech_owl","screech-owl"],
    ["rough-legged_buzzard","rough-legged_hawk"],["wood_pewee","wood-pewee"],["scrub_jay","scrub-jay"],["western_jackdaw","eurasian_jackdaw"],["northern_raven","common_raven"],["sand_martin","bank_swallow"],
    ["american_cliff_swallow","cliff_swallow"],["american_bushtit","bushtit"],["common_starling","european_starling"],["common_blackbird","eurasian_blackbird"],["two-barred_crossbill","white-winged_crossbill"],
    ["american_yellow_warbler","yellow_warbler"],["rosy_finch","rosy-finch"],["lucifer_sheartail","lucifer_hummingbird"]];

function myBirds(info){
    return info.map((el)=>{
      el[0] = new Date("20"+el[0]+":00");
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

//if no ',' return [str,''] else return splitted string array
function strsplit(str){
    let tmp = (Array.isArray(str))?str[0]:str;
    let tmp1 = tmp.indexOf(',');
    if (tmp1===-1) return [tmp,''];
    return [tmp.substring(0,tmp1),tmp.substring(tmp1)];
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

function hotspot(id,name){
    if (typeof name!=='string') return "https://birdinghotspots.org/hotspot/"+id;
    let tmp = strsplit(name);
    return my_href("https://birdinghotspots.org/hotspot/"+id,tmp[0],id)+tmp[1];
}

function gmap(name,lat,lon){
    let tmp  = strsplit(name);
    let tmp1 = ((lat==null)||(lon==null))?reform(tmp[0],"+"):(lat.toString()+"%2C"+lon.toString());
    return my_href("https://www.google.com/maps/search/?api=1&query="+tmp1,tmp[0],"gmap")+tmp[1];
}

function bmap(name,lat,lon){
    if ((lat==null)||(lon==null)) return name;
    return my_href("http://api.map.baidu.com/marker?location="+lat.toString()+"%2C"+lon.toString()+"&output=html&coord_type=gcj02&title="+name,name,"bmap");
}

function nps(pid,isfws,name){
    let url = 'https://www.'+((typeof isfws==='boolean')?'fws.gov/refuge/':'nps.gov/')+pid+'/';
    if (typeof isfws==='string') name = isfws;
    if (typeof name==='string'){
       let tmp = strsplit(name);
       url = my_href(url,tmp[0],pid)+tmp[1];
    }
    return url;
}

function wiki(id,name){
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
        tmp3 = info[6*i+1].lastIndexOf(',');
        tmp4 = /[0-9]{1,2}\/[0-9]{4}/.test(info[6*i+1]);
        tmp1 = (tmp3>=0)?info[6*i+1].substr(0,tmp3):(tmp4?info[6*i+1]:'');
        tmp2 = (tmp3>=0)?info[6*i+1].substr(tmp3+1):(tmp4?'':info[6*i+1]);
        if (tmp1.length==0) tmp1=getdate(photo[i]);
        if ((tmp2.length>0)&&(!ebirdlist.includes(tmp2))) ebirdlist.push(tmp2);
        date = (tmp2.length>0)?my_href("https://ebird.org/checklist/"+tmp2,tmp1,tmp2):tmp1;
        if (info[6*i+2].length>0){
           let tmp_info = info[6*i+2];
           let tmp_chn  = "";
           while (pt_eng_chn.some((el)=>{tmp5=el[1];return (new RegExp("^ *"+el[0]+" *($|,)","i")).test(tmp_info);})) {
              tmp_chn = tmp_chn+((tmp_chn.length>0)?comma[1]:"")+tmp5;
              tmp_info = RegExp.rightContext;
           }
           if (tmp_chn.length>0){
              info[6*i+4] = tmp_chn+((info[6*i+4].length>0)?comma[1]:"")+info[6*i+4];
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
        tmp_einf.push(strupcase(head[0]+tmp[0]+tail[0]+tmp[1]+date[0]));
        tmp_cinf.push(head[1]+tmp[3]+tmp[2]+tail[1]+date[1]);
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
//-->