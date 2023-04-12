<!--
  var loc_cnts  = {};
  var hz_cnts   = {};
  var misc_cnts = [];
  var dig_cnts  = 0;
  var pic_cnts  = 0;
  var ebirdlist = [];
  var orders    = [];
  var cnrexp    = /[\u3400-\u9FBF]/;

  function Ord(info){
     if (info.length==2) info.push(info[0]);
     if (info.length==3) info.push((info[1].slice(-1)==='形')?info[1].slice(0,-1):info[1]);
     return {name:info[0]+"IFORMES",cname:info[1]+"目",family:(info.slice(2)).reduce((fam,el,ind,ar)=>{if(!cnrexp.test(el))fam.push({name:el+"IDAE",cname:ar[ind+1]+"科"}); return fam;},[])};
  }

  //http://www.worldbirdnames.org/ioc-lists/master-list-2/
  //https://dongniao.net/taxonomy.html
  orders.push(Ord(["STRUTHION","鸵鸟"]));
  orders.push(Ord(["RHE","美洲鸵鸟"]));
  orders.push(Ord(["APTERYG","鹬鸵"]));
  orders.push(Ord(["CASUARI","鹤鸵"]));
  orders.push(Ord(["TINAM","䳍形"]));
  orders.push(Ord(["ANSER","雁形","ANHIM","叫鸭","ANSERANAT","鹊雁","ANAT","鸭"]));
  orders.push(Ord(["GALL","鸡形","MEGAPODI","塚雉","CRAC","凤冠雉","NUMID","珠鸡","ODONTOPHOR","齿鹑","PHASIAN","雉"]));
  orders.push(Ord(["CAPRIMULG","夜鹰"]));
  orders.push(Ord(["STEATORNITH","油鸱"]));
  orders.push(Ord(["NYCTIBI","林鸮"]));
  orders.push(Ord(["PODARG","蛙口夜鹰"]));
  orders.push(Ord(["AEGOTHEL","裸鼻鸱"]));
  orders.push(Ord(["APOD","雨燕","HEMIPROCN","凤头雨燕","APOD","雨燕","TROCHIL","蜂鸟"]));
  orders.push(Ord(["MUSOPHAG","蕉鹃"]));
  orders.push(Ord(["OTID","鸨形"]));
  orders.push(Ord(["CUCUL","鹃形","CUCUL","杜鹃"]));
  orders.push(Ord(["MESITORNITH","拟鹑"]));
  orders.push(Ord(["PTEROCL","沙鸡"]));
  orders.push(Ord(["COLUMB","鸽形","COLUMB","鸽鸠"]));
  orders.push(Ord(["GRU","鹤形","HELIORNITH","日鷉","SAROTHRUR","侏秧鸡","RALL","秧鸡","PSOPHI","喇叭鸟","GRU","鹤","ARAM","秧鹤"]));
  orders.push(Ord(["PODICIPED","䴙䴘"]));
  orders.push(Ord(["PHOENICOPTER","火烈鸟"]));
  orders.push(Ord(["CHARADRI","鸻形","TURNIC","三趾鹑","BURHIN","石鸻","CHION","鞘嘴鸥","PLUVIANELL","短腿鸻","HAEMATOPOD","蛎鹬","IBIDORHYNCH","鹮嘴鹬","RECURVIROSTR","反嘴鹬","CHARADRI","鸻",
      "PLUVIAN","埃及燕鸻","ROSTRATUL","彩鹬","JACAN","水雉","PEDIONOM","领鹑","THINOCOR","籽鹬","SCOLOPAC","鹬","DROMAD","蟹鸻","GLAREOL","燕鸻","LAR","鸥","STERCORARI","贼鸥","ALC","海雀"]));
  orders.push(Ord(["EURYPYG","日鳽","RHYNOCHET","鹭鹤","EURYPYG","日鳽"]));
  orders.push(Ord(["PHAETHONT","鹲形"]));
  orders.push(Ord(["GAVI","潜鸟"]));
  orders.push(Ord(["SPHENISC","企鹅"]));
  orders.push(Ord(["PROCELLARI","鹱形","OCEANIT","洋海燕","DIOMEDE","信天翁","HYDROBAT","海燕","PROCELLARI","鹱"]));
  orders.push(Ord(["CICONI","鹳形"]));
  orders.push(Ord(["SUL","鲣鸟","FREGAT","军舰鸟","SUL","鲣鸟","ANHING","蛇鹈","PHALACROCORAC","鸬鹚"]));
  orders.push(Ord(["PELECAN","鹈形","THRESKIORNITH","鹮","ARDE","鹭","SCOP","锤头鹳","BALAENICIPIT","鲸头鹳","PELECAN","鹈鹕"]));
  orders.push(Ord(["OPISTHOCOM","麝雉"]));
  orders.push(Ord(["ACCIPITR","鹰形","CATHART","美洲鹫","SAGITTARI","鹭鹰","PANDION","鹗","ACCIPITR","鹰"]));
  orders.push(Ord(["STRIG","鸮形","TYTON","仓鸮","STRIG","鸱鸮"]));
  orders.push(Ord(["COLI","鼠鸟"]));
  orders.push(Ord(["LEPTOSOM","鹃三宝鸟"]));
  orders.push(Ord(["TROGON","咬鹃"]));
  orders.push(Ord(["BUCEROT","犀鸟","UPUP","戴胜","PHOENICUL","林戴胜","BUCORV","地犀鸟","BUCEROT","犀鸟"]));
  orders.push(Ord(["CORACI","佛法僧","CORACI","佛法僧","BRACHYPTERACI","地三宝鸟","ALCEDIN","翠鸟","TOD","短尾鴗","MOMOT","翠鴗","MEROP","蜂虎"]));
  orders.push(Ord(["PIC","䴕形","GALBUL","鹟鴷","BUCCON","蓬头鴷","CAPITON","须鴷","SEMNORNITH","巨嘴拟鴷","RAMPHAST","巨嘴鸟","MEGALAIM","拟鴷","LYBI","非洲拟啄木鸟","INDICATOR","响蜜鴷","PIC","啄木鸟"]));
  orders.push(Ord(["CARIAM","叫鹤"]));
  orders.push(Ord(["FALCON","隼形"]));
  orders.push(Ord(["PSITTAC","鹦形","STRIGOP","鸮鹦鹉","CACATU","凤头鹦鹉","PSITTAC","鹦鹉","PSITTACUL","长尾鹦鹉"]));
  orders.push(Ord(["PASSER","雀形","ACANTHISITT","刺鹩","SAPAYO","阔嘴霸鹟","PHILEPITT","裸眉鸫","EURYLAIM","阔嘴鸟","CALYPTOMEN","绿阔嘴鸟","PITT","八色鸫","FURNARI","灶鸟","THAMNOPHIL","蚁鸟","FORMICARI","蚁鸫",
      "GRALLARI","短尾蚁鸫","CONOPOPHAG","食蚊鸟","RHINOCRYPT","窜鸟","MELANOPAREI","月胸窜鸟","TYRANN","霸鹟","COTING","伞鸟","PIPR","娇鹟","TITYR","蒂泰霸鹟","MENUR","琴鸟","ATRICHORNITH","薮鸟","PTILONORHYNCH","园丁鸟",
      "CLIMACTER","短嘴旋木雀","MALUR","细尾鹩莺","MELIPHAG","吸蜜鸟","DASYORNITH","刺莺","PARDALOT","斑食蜜鸟","ACANTHIZ","细嘴莺","POMATOSTOM","弯嘴鹛","ORTHONYCH","刺尾鸫","CNEMOPHIL","短嘴极乐鸟","MELANOCHARIT","啄果鸟",
      "PARAMYTHI","冠啄果鸟","CALLAE","垂耳鸦","NOTIOMYST","缝叶吸蜜鸟","PSOPHOD","啸冠鸫","CINCLOSOMAT","鹑鸫","PLATYSTEIR","疣眼鹟","MALACONOT","丛鵙","MACHAERIRHYNCH","船嘴鹟","VANG","钩嘴鵙","PITYRIAS","棘头鵙",
      "ARTAM","燕鵙","RHAGOLOG","斑啸鹟","AEGITHIN","雀鹎","CAMPEPHAG","鹃鵙","MOHOU","黄头刺莺","NEOSITT","澳鳾","EULACESTOMAT","肉垂鵙雀鹟","OREOIC","冠钟鹟","FALCUNCUL","鵙雀鹟","PACHYCEPHAL","啸鹟","LANI","伯劳","VIREON","莺雀",
      "ORIOL","黄鹂","DICRUR","卷尾","RHIPIDUR","扇尾鹟","MONARCH","王鹟","PLATYLOPH","冠鸦","CORV","鸦","CORCORAC","澳鸦","MELAMPITT","黑脚风鸟","IFRIT","蓝顶鹛鸫","PARADISAE","极乐鸟","PETROIC","鸲鹟","PICATHART","岩鹛",
      "CHAETOP","岩鸫","EUPET","长颈鸫","BOMBYCILL","太平鸟","PTILIOGONAT","丝鹟","HYPOCOLI","连雀","DUL","棕榈䳭","MOHO","夏威夷吸蜜鸟","HYLOCITRE","林啸鹟","STENOSTIR","仙莺","PAR","山雀","REMIZ","攀雀","NICATOR","斗鹎",
      "PANUR","文须雀","ALAUD","百灵","PYCNONOT","鹎","HIRUNDIN","燕","PNOEPYG","鳞胸鹪鹛","MACROSPHEN","长嘴莺","CETTI","树莺","SCOTOCERC","纹鹪莺","ERYTHROCERC","红鹟","HYLI","拟攀雀","AEGITHAL","长尾山雀","PHYLLOSCOP","柳莺",
      "ACROCEPHAL","苇莺","LOCUSTELL","蝗莺","DONACOBI","黑顶鹪鹩","BERNIER","马岛鹎","CISTICOL","扇尾莺","SYLVI","莺鹛","PARADOXORNITH","鸦雀","ZOSTEROP","绣眼鸟","TIMALI","鹛","PELLORNE","幽鹛","ALCIPPE","雀鹛","LEIOTHRICH","噪鹛",
      "MODULATRIC","斑喉䳭","PROMEROP","非洲食蜜鸟","IREN","和平鸟","REGUL","戴菊","ELACHUR","丽星鹩鹛","HYLIOT","丛莺","TROGLODYT","鹪鹩","POLIOPTIL","蚋莺","SITT","䴓","TICHODROM","旋壁雀","CERTHI","旋木雀","MIM","嘲鸫",
      "STURN","椋鸟","BUPHAG","牛椋鸟","TURD","鸫","MUSCICAP","鹟","CINCL","河乌","CHLOROPSE","叶鹎","DICAE","啄花鸟","NECTARINI","太阳鸟","PASSER","雀","PLOCE","织雀","ESTRILD","梅花雀","VIDU","维达雀","PEUCEDRAM","绿森莺",
      "PRUNELL","岩鹨","MOTACILL","鹡鸰","UROCYNCHRAM","朱鹀","FRINGILL","燕雀","CALCARI","铁爪鹀","RHODINOCICHL","鸫唐纳雀","EMBERIZ","鹀","PASSERELL","雀鹀","CALYPTOPHIL","拟䳭唐纳雀","PHAENICOPHIL","棕榈唐纳雀",
      "NESOSPING","波多黎各唐纳雀","SPINDAL","纹头唐纳雀","ZELEDONI","冠鹩森莺","TERETISTR","灰森莺","ICTERI","黄胸大䳭莺","ICTER","拟鹂","PARUL","森莺","MITROSPING","乌脸唐纳雀","CARDINAL","美洲雀","THRAUP","裸鼻雀"]));

  var pt_eng  = ["males* left, *females* right","(males*, *breeding plumage|breeding males*)","(males*, *nonbreeding plumage|nonbreeding males*)","males*","(immature|juvenile) males*","(immature|juvenile) females*",
      "(immatures*|juveniles*)","females*\/immature males*","females*\/immatures*","females* left, *males* right","females* and (chicks*|hatchlings*)","females* and (immature|juvenile)s*","spring molt",
      "(females*, *breeding plumage|breeding females*)","nonbreeding females*\/immature males*","(females*, *nonbreeding plumage|nonbreeding females*)","females*","winter plumage","1st winter","2nd winter",
      "2nd year","3rd winter","3rd year","fall plumage","winter females*","eclipse males*","molting adult","adults* and (immatures*|juveniles*)","adults*","breeding (adults*|plumage)","nonbreeding *(adult)*\/immature",
      "nonbreeding (adults*|plumage)","(partially)* *leucistic","mating display","light morph","dark morph","immature dark morph","(chicks*|hatchlings*)","nest","males* at nest cavity"];
  var pt_chn  = ["左雄性，右雌性","繁殖羽雄性","非繁殖羽雄性","雄性","未成年雄性","未成年雌性","未成年","雌性/未成年雄性","雌性/未成年","左雌性，右雄性","雌性和幼鸟","雌性和未成年","春羽","繁殖羽雌性","非繁殖羽雌性/未成年雄性",
      "非繁殖羽雌性","雌性","冬羽","一龄冬羽","二龄冬羽","二龄羽","三龄冬羽","三龄羽","秋羽","冬羽雌性","蚀羽雄性","换羽成年鸟","成年和未成年","成年","繁殖羽","非繁殖羽/未成年","非繁殖羽","白变种","求偶展示","淡色型","深色型",
      "未成年深色型","幼鸟","鸟巢","雄性在鸟巢口"];
  var fam_ln  = 8;  //family length
  var order   = (/&order|^order/i).test(window.location.search.substring(1));
  var all_new = true;
  var comma   = [", ","，"];
  var expandinfo = (/(stat\.html|country=|loc=|query=)/i).test(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));

  function allBirds(info){
     return info.reduce((brds,el)=>{brds.push(Bird(...el));return brds;},[]);
  }

  function Bird(lifer,family,name,cname,latin,photo,info,ebid,cbid){
     family      = family.trim().slice(0,fam_ln).toUpperCase();
     name        = name.trim();
     cname       = cname.trim();
     latin       = latin.trim().charAt(0).toUpperCase()+latin.trim().slice(1).toLowerCase();
     var genus   = latin.substring(0,latin.indexOf(' '));
     lifer       = new Date("20"+lifer+":00");
     var newbird = (modTim<=lifer.getTime());
     var name1   = reform(name);
     var cinfo   = [], locs = [];
     photo       = p_id(photo);
     pic_cnts    = pic_cnts+photo.length;
     dig_cnts    = photo.reduce((tot,el)=>tot+((/_dig/i.test(el))?1:0),dig_cnts);
     //check if this bird needs to be added to modBrd
     if (newbird||photo.some((el)=>{tmp_date=getdate(el,true);return (tmp_date!=null)?(modTim<=tmp_date.getTime()):false;})){
        modBrd.name.push(name);
        modBrd.cname.push(cname);
        modBrd.newbird.push(newbird);
        if (!newbird) all_new = false;
     }
     if (window.expandinfo){
        var tmp_info = reform_locs(info,photo);
        info  = tmp_info.info;
        cinfo = tmp_info.cinfo;
        locs  = tmp_info.locs;
        (cname.split('')).forEach((el)=>hz_cnts[el] = (typeof hz_cnts[el] === 'undefined')?1:(hz_cnts[el]+1));
     }
     return {lifer:lifer,newbird:newbird,family:family,genus:genus,name:name,name1:name1,cname:cname,latin:latin,info:info,cinfo:cinfo,locs:locs,photo:photo,ebid:ebid,cbid:cbid};
  }

  function stradd(...arrays) {
     const n = arrays.reduce((max, xs) => Math.max(max, Array.isArray(xs)?xs.length:1), 0);
     const result = Array.from({ length: n });
     return result.map((_, i) => arrays.map(xs => (Array.isArray(xs)?xs[Math.min(i,xs.length-1)]:xs)).reduce((sum, x) => sum + x, ''));
  }

  //if no ',' return [str,''] else return splitted string array
  function strsplit(str){
     var tmp,tmp1;
     if (Array.isArray(str)) {tmp = str[0];}else{tmp=str;}
     tmp1 = tmp.indexOf(',');
     if (tmp1===-1) return [tmp,''];
     return [tmp.substring(0,tmp1),tmp.substring(tmp1)];
  }

  //upper case to the first letter, works for href link
  function strupcase(str){
     var tmpstr = str.trim();
     var tmp = tmpstr.indexOf('>');
     if ((tmpstr.indexOf('<')==0)&&(tmp!=-1)) tmpstr = tmpstr.substring(0,tmp+1)+strupcase(tmpstr.substring(tmp+1));
     return tmpstr.charAt(0).toUpperCase()+tmpstr.slice(1);
  }

  function birdFound(id){
     return birds.some((el)=>el.name1===id);
  }
  
  function my_href(url,name,target){
     var tmp = "<a href='"+url+"' style='color: #3399FF; text-decoration: underline;'";
     if (target!=null) tmp = tmp+" target='"+target+"'";
     if (name!=null) tmp = tmp+">"+name+"</a";
     return tmp+">";
  }

  function b_link(bid,info){
     if (info==null) info = bid;
     if (info==='s') info = bid.trim()+'s';
     if (order) bid = bid+'&order';
     return my_href('showbird.html?name='+reform(bid),info);
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
     var year = '',mon = '',day = '',off = 4;
     var name = (Array.isArray(path))?(path[0].substr(path[0].lastIndexOf('/')+1)):(path.substr(path.lastIndexOf('/')+1));
     var pos = name.search(/20[0-9]{4,}/);
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
  function m_id(id,num){
     if (num==null) num = 0;
     if (misc_cnts[num]==null) misc_cnts[num]=0;
     misc_cnts[num] = (Array.isArray(id))?(misc_cnts[num]+id.length):(misc_cnts[num]+1);
     return stradd("misc_birds"+((num===0)?"":num.toString())+"/20",id);
  }

  function is_num(num){
     if (Array.isArray(num)) return !num.some((el)=>!Number.isFinite(el));
     return Number.isFinite(num);
  }

  function p_id(photo){
     if (!Array.isArray(photo)){photo = [photo];}
     if (is_num(photo[1])) return a_id(photo[0],photo[1]);
     return Array.prototype.concat.apply([],photo.map((el)=>Array.isArray(el)?(is_num(el[0])?m_id(el[1],el[0]):(is_num(el[1])?a_id(el[0],el[1]):m_id(el))):(/\//.test(el)?el:m_id(el))));
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
     return "https://www.allaboutbirds.org/guide/"+bid.trim()+"/id";
  }

  function ebirdurl(bid){
     return "https://ebird.org/species/"+bid.trim()+"/";
  }

  function hotspot(id,name){
     if (typeof name!=='string') return "https://birdinghotspots.org/hotspot/"+id;
     var tmp = strsplit(name);
     return my_href("https://birdinghotspots.org/hotspot/"+id,tmp[0],id)+tmp[1];
  }

  function gmap(name,lat,lon){
     var tmp  = strsplit(name);
     tmp[0]   = replace_acronym(tmp[0]);
     var tmp1 = ((lat==null)||(lon==null))?reform(tmp[0],"+"):(lat.toString()+"%2C"+lon.toString());
     return my_href("https://www.google.com/maps/search/?api=1&query="+tmp1,tmp[0],"gmap")+tmp[1];
  }

  function bmap(name,lat,lon){
     if ((lat==null)||(lon==null)) return name;
     return my_href("http://api.map.baidu.com/marker?location="+lat.toString()+"%2C"+lon.toString()+"&output=html&coord_type=gcj02&title="+name,name,"bmap");
  }

  function nps(pid,isfws,name){
     var url = 'https://www.'+((typeof isfws==='boolean')?'fws.gov/refuge/':'nps.gov/')+pid+'/';
     if (typeof isfws==='string') name = isfws;
     if (typeof name==='string'){
        var tmp = strsplit(name);
        url = my_href(url,tmp[0],pid)+tmp[1];
     }
     return url;
  }

  function wiki(id,name){
     if (name==null) return "https://en.wikipedia.org/wiki/"+reform(id,"_","%27",true);
     id = replace_acronym(id);
     if ((typeof name!=='string')||(name==='')) name = id;
     return my_href("https://en.wikipedia.org/wiki/"+reform(id,"_","%27",true),name,id);
  }

  function reform(name,space,apost,notlc){
     if (space==null) space = '_';
     if (apost==null) apost = '';
     var tmp = name.replace(/ |\+/g,space);
     tmp = tmp.replace(/'/g,apost);
     return (notlc)?tmp:tmp.toLowerCase();
  }

  function reform_locs(loc,photo){
     var info = [], tmp_einf = [], tmp_cinf = [], tmp_locs  = [];
     var tmp1,tmp2,tmp3,tmp4,tmp,pid,date,head,tail,indx;
     loc.forEach((el)=>{
          el = el.trim();
          if (((info.length%6)>0)&&(lurls[el]!=null)){info.push(...Array(6-(info.length%6)).fill(''));}
          else if (((info.length%6)==1)&&(el.length>0)&&(!(/([0-9]{1,2}\/[0-9]{4}|s[0-9]{8,})/i).test(el))){info.push('');} 
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
         if ((info[6*i+2].length>0)&&(info[6*i+3].length==0)){
            if (pt_eng.some((el,ind)=>{indx=ind;return (new RegExp("^ *"+el+" *($|,)","i")).test(info[6*i+2]);})) info[6*i+3] = pt_chn[indx];
         }
         pid  = info[6*i].toLowerCase();
         tmp  = (lurls[pid]==null)?['','','','']:(lurls[pid].slice(0));
         head = info.slice(6*i+2,6*i+4);
         tail = info.slice(6*i+4,6*i+6);
         if (loc_cnts[pid]==null) loc_cnts[pid] = 0;
         loc_cnts[pid]++;
     	 if (date.length>0) date = stradd(comma,date);
         if ((head[0].length>0)&&((tmp[0]+tmp[1]+tail[0]).length>0)) head[0] = head[0]+comma[0];
         if ((head[1].length>0)&&((tmp[2]+tmp[3]+tail[1]).length>0)) head[1] = head[1]+comma[1];
         if ((tmp[0].length>0)&&(tail[0].length>0)) tail[0] = ' '+tail[0];
         if (tmp[1].length>0) tmp[1] = comma[0]+tmp[1];
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

  var acronym = {NWR:['National Wildlife Refuge','国家野生动物保护区'],NP:['National Park','国家公园'],WMA:['Wildlife Management Area','野生动物管理区'],WR:['Wildlife Refuge','野生动物保护区']};
  var acrrexp = new RegExp('('+Object.keys(acronym).join('|')+')','g');  //case sensitive
  function replace_acronym(name){
     var indx = cnrexp.test(name)?1:0;
     var tmp  = name.match(acrrexp);
     if (tmp!==null){for(var i=0;i<tmp.length;i++){name = name.replace(tmp[i],(acronym[tmp[i]])[indx]);}}
     return name;
  }
//-->