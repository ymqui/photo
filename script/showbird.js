<!--
document.onmousedown=function(event){
   if (!event) var event = window.event;
   if ((event.button==2)&&(!googledrive)){
      if (window.usechinese){
         alert('该网页上的照片受版权保护，欲使用请联系ymqui@yahoo.com。');
       }else{
         alert('The photograph is copyright protected. Please contact ymqui@yahoo.com for more information.');
       }
   }
}

function mouseclick(evt){
    try{
       if(document.body && typeof(document.body.clientWidth)=='number'){
          //Gecko 1.0(Netscape 7) and IE5+
          winWidth  = document.body.clientWidth-20;
       }else if(typeof(window.innerWidth)=='number'){
          //Navigator 4.x, Netscape 6.x, CompuServe 7 and Opera  
          winWidth  = window.innerWidth-30;
       }else if(document.body&&typeof(document.body.offsetWidth)=='number'){
          //IE4
          winWidth  = document.body.offsetWidth-50;
       }else{ 
          winWidth  = 900;
       }
    }catch(er){
       winWidth  = 900;
    }
    if (window.event){
       if (typeof(window.event.x)=='number'){
          evtx = window.event.x;
       }
    }else{
       try{
          evtx = evt.clientX;
       }catch(er){
       }
    }
    if (evtx){
       var tname;
       if (evtx >(winWidth/2)){
          if(nbid!=null){tname = nbid.name1;}
       }else{
          if(pbid!=null){tname = pbid.name1;}
       }
       if(tname !== undefined){
          if(order){ tname=tname+'&order';}
          window.location.assign('showbird.html?name='+tname+q_count.replace(/amp;/g,''));
       }
    }
}

function myrandom(){
   seed = Math.sin(Math.floor(Date.now()/600000))*10000;
   return seed-Math.floor(seed);
}

var bid     = null;
var pbid    = null;
var nbid    = null;
var oid     = 0;
var tmp     = "";
var query   = window.location.search.substring(1);
var order   = false;
var lifer   = false;
var vars    = query.split("&");
var family1 = "";
var family2 = "";
var bname   = "";
var country = "";
var q_count = "";
var q_name  = "";
var algn    = "";
var title   = "";
var ocnt    = 0;
var fcnt    = 0;
var fstyle  = "";
var capcnt  = 0;

if (window.usechinese){
   newpic = maindir+"thumbnail/new_c.gif";
   p_lang = "birdenglish_v.png";
   if (googledrive){
      langurl = "https://ymqui.github.io/photo/birds/showbird.html?"+query;  
   }else{
      langurl = "http://www.pha.jhu.edu/~qiuym/photo/birds/showbird.html?"+query;
   }  
}else{
   newpic = maindir+"thumbnail/new.gif";
   p_lang = "birdchinese_v.png";
   if (googledrive){
      langurl = "https://ymqui.github.io/zhaopian/birds/showbird.html?"+query;
   }else{
      langurl = "http://www.pha.jhu.edu/~qiuym/zhaopian/birds/showbird.html?"+query;
   }
}

//var newsty  = 'background-image:url('+newpic+');background-repeat:no-repeat;background-position:right;';
var newsty  = 'background:url('+newpic+') no-repeat right;';

for(var i=0;i<vars.length;i++) {
   var pair = vars[i].split("=");
   switch(pair[0].toLowerCase()){
      case "order":
           order = true;
           break;
      case "name":
           bname = decodeURIComponent(pair[1]);
           if(!(bname.match(/[\u3400-\u9FFF]/))){
              bname = bname.toLowerCase();
           }
           q_name = "&amp;"+vars[i];
           break;
      case "country":
           country = decodeURIComponent(pair[1]);
           tmp = getByCountry(reform(country), birds);
           if(tmp.length!=0){
              birds = tmp;
              if (title.length!=0) title = title+" ";
              title = title+country;
           }
           q_count = q_count+"&amp;"+vars[i];
           break;
      case "query":
           tmp = getByQuery(reform(decodeURIComponent(pair[1])), birds);
           if(tmp.length!=0) birds = tmp;
           q_count = q_count+"&amp;"+vars[i];
           break;
      case "liferyear":
           tmp = getByLiferYear(pair[1].trim(), birds);
           if(tmp.length!=0){
              birds = tmp;
              if (window.usechinese) {
                 title = title+pair[1].trim()+"年";
              }else{
                 if (title.length!=0) title = title+" ";
                 title = title+pair[1].trim();
              }
           }
           q_count = q_count+"&amp;"+vars[i].trim();
           break
      case "lifer":
           lifer = true;
           q_count = q_count+"&amp;lifer";
           break;
   }
}

if (lifer) order = false;

if ((bname=='')&&(modiBird.name.length>0)){
   bname = reform(modiBird.name[Math.floor(myrandom()*(modiBird.name.length))]);
}

if (cellphone){
   fstyle = "font-family:Arial;font-size:225%;max-width: 66%;";
   qfont  = "font-size:200%;";
   p_home = maindir+"thumbnail/c_home.png";
   p_info = maindir+"thumbnail/c_birdinfo.png";
   p_lang = maindir+"thumbnail/c_"+p_lang;
   arrow  = "--->";
   document.write("<br>");
}else{
   fstyle = "font-family:Arial;max-width:70%;";
   qfont  = "font-size:100%;";
   p_home = maindir+"thumbnail/b_home.png";
   p_info = maindir+"thumbnail/birdinfo.png";
   p_lang = maindir+"thumbnail/"+p_lang;
   arrow  = "&#x27f9;"
}
space1 = "0px 10px 0px 35px";
space  = "0px 10px";

document.write('<center>');
document.write('<form name="form_alpha">');
document.write('<select name="select_alpha" size="-1" style="'+fstyle+'"');
document.write(' onChange="self.location.href=this.form.select_alpha.options[this.form.select_alpha.selectedIndex].value">');


if(order){
   //menu by order
   if (window.usechinese){
      document.write('<option label="按中文拼音字母排序'+arrow+'" value="showbird.html?'+q_count+q_name+'" style="color:blue;text-decoration:underline;">按中文拼音字母排序'+arrow+'</option>');
      document.write('<option label="按收录日期排序'+arrow+'" value="showbird.html?lifer'+q_count+q_name+'" style="color:blue;text-decoration:underline;">按收录日期排序'+arrow+'</option>');  
   }else{
      document.write('<option label="List Birds Alphabetically'+arrow+'" value="showbird.html?'+q_count+q_name+'" style="color:blue;text-decoration:underline;">List Birds Alphabetically'+arrow+'</option>');
      document.write('<option label="List Birds According to Lifer Date'+arrow+'" value="showbird.html?lifer'+q_count+q_name+'" style="color:blue;text-decoration:underline;">List Birds According to Lifer Date'+arrow+'</option>'); 
   }
   var itmp = 0;
   var fbid = null;
   var lbid = null;
   for(var i=0;i<orders.length;i++){
      var ordercnt = 0;
      for(var j=0;j<orders[i].family.length;j++){
         tmp = getByFamily(orders[i].family[j].name, birds);
         if (tmp.length==0) continue;
         ordercnt = 1;
         if (family1.length==0) {family1=orders[i].family[j].name;}
         else if (family2.length==0) {family2=orders[i].family[j].name;}
         break;
      }
      if (ordercnt!=0){
         if (window.usechinese){
            label = orders[i].cname+' ('+orders[i].name+')';
         }else{
            label = orders[i].name;
         }
         document.write('<option label="'+label+'" value="" style="color:#EC532F">'+label+'</option>');
         ocnt++;
         if(bid==null){
           oid++;
         }
      }else{
         continue;
      }     
      for(var j=0;j<orders[i].family.length;j++){
         tmp1 = getByFamily(orders[i].family[j].name, birds);
         if (tmp1.length==0) continue;
         if (fbid==null) fbid = tmp1[0];
         lbid = tmp1[tmp1.length-1];
         fcnt++;
         if (window.usechinese){
            label = orders[i].family[j].cname+' ('+orders[i].family[j].name+')';
         }else{
            label = orders[i].family[j].name;
         }
         document.write('<option label="'+label+'" value="" style="margin-left:13px;color:#2E8B57;">'+label+'</option>');
         if(bid==null){
            oid++;
         }else if(nbid==null){
            nbid = tmp1[0];
         }
         for(var k=0;k<tmp1.length;k++){
            if ((bname==tmp1[k].name1.toLowerCase())||(bname==tmp1[k].cname)) {
               bid = tmp1[k];
               tmp = " selected";
               if(k>=1){pbid = tmp1[k-1];}
               if(k<(tmp1.length-1)){nbid = tmp1[k+1];}
            }else{
               tmp = "";
            }
            if(bid==null){
               oid++;
            }
            if (window.usechinese){
               label = (itmp+1).toString()+' '+tmp1[k].cname+' '+tmp1[k].name;
            }else{
               label = (itmp+1).toString()+' '+tmp1[k].name;
            }
            if (tmp1[k].name.slice(-1)=="*") capcnt++;
            if (tmp1[k].newbird){
               optstyle = 'style="color:blue;text-decoration:underline;margin-left:13px;'+newsty+'"';
            }else{
               optstyle = 'style="color:blue;text-decoration:underline;margin-left:13px;"';
            }
            document.write('<option label="'+label+'" value="showbird.html?name='+tmp1[k].name1+q_count+'&amp;order" '+optstyle+tmp+'>'+label+'</option>');
            itmp++;
         }
         if(bid==null){pbid = tmp1[tmp1.length-1];}   
      }
      
   }
   if (bid!=null){
      if (pbid==null) pbid = lbid;
      if (nbid==null) nbid = fbid; 
   } 
   if (capcnt>0){
      if (window.usechinese){
         label = "* 圈养拍摄";
      }else{
         label = "* Photographed in Captivity";
      }
      document.write('<option label="'+label+'" value="" style="margin-left:10px;">'+label+'</option>'); 
   } 
   label = "("+title;
   if (window.usechinese){
      if(title.length!=0) label=label+"，";
      label = label+ocnt.toString()+"目，"+fcnt.toString()+"科";
      if (capcnt>0) label = label+"，"+capcnt.toString()+"圈养鸟";
   }else{
      if(title.length!=0) label=label+", ";
      label = label+ocnt.toString()+" orders, "+fcnt.toString()+" families";
      if (capcnt>0) label = label+", "+capcnt.toString()+" in captivity";
   }
   label = label+")";  
   document.write('<option label="'+label+'" value="" style="margin-left:10px;">'+label+'</option>');
}else{
   //menu by name
   birds.sort(mysort);
   if (window.lifer){
      var tmp_q_count = q_count.toLowerCase().replace("&amp;liferyear","a*s*d*f*")+q_name;
      tmp_q_count = tmp_q_count.replace("&amp;lifer","");
      tmp_q_count = tmp_q_count.replace("a*s*d*f*","&amp;liferyear");
      if (window.usechinese){
         document.write('<option label="按科目排序'+arrow+'" value="showbird.html?order'+tmp_q_count+'" style="color:blue;text-decoration:underline;">按科目排序'+arrow+'</option>');
         document.write('<option label="按中文拼音字母排序'+arrow+'" value="showbird.html?'+tmp_q_count+'" style="color:blue;text-decoration:underline;">按中文拼音字母排序'+arrow+'</option>');
      }else{
         document.write('<option label="List Birds Taxonomically'+arrow+'" value="showbird.html?order'+tmp_q_count+'" style="color:blue;text-decoration:underline;">List Birds Taxonomically'+arrow+'</option>');
         document.write('<option label="List Birds Alphabetically'+arrow+'" value="showbird.html?'+tmp_q_count+'" style="color:blue;text-decoration:underline;">List Birds Alphabetically'+arrow+'</option>');
      }
   }else{
      if (window.usechinese){
         document.write('<option label="按科目排序'+arrow+'" value="showbird.html?order'+q_count+q_name+'" style="color:blue;text-decoration:underline;">按科目排序'+arrow+'</option>');
         document.write('<option label="按收录日期排序'+arrow+'" value="showbird.html?lifer'+q_count+q_name+'" style="color:blue;text-decoration:underline;">按收录日期排序'+arrow+'</option>');  

      }else{
         document.write('<option label="List Birds Taxonomically'+arrow+'" value="showbird.html?order'+q_count+q_name+'" style="color:blue;text-decoration:underline;">List Birds Taxonomically'+arrow+'</option>');  
         document.write('<option label="List Birds According to Lifer Date'+arrow+'" value="showbird.html?lifer'+q_count+q_name+'" style="color:blue;text-decoration:underline;">List Birds According to Lifer Date'+arrow+'</option>'); 
      }
   }
   for(var i=0;i<birds.length;i++){
      if ((bname==birds[i].name1.toLowerCase())||(bname==birds[i].cname)) {
         bid = birds[i];
         oid = i;
         tmp = " selected";
         if (i>0) {pbid = birds[i-1];} 
         else {pbid = birds[birds.length-1];}
         if (i<(birds.length-1)) {nbid = birds[i+1];}
         else {nbid = birds[0];}
      }else{
         tmp = "";
      }
      label = (i+1).toString();
      //if (window.lifer) label = label+' ('+birds[i].lifer.toLocaleDateString()+') ';
      if (window.lifer) label = label+' ('+birds[i].lifer.toISOString().slice(0,10)+') ';
      if (window.usechinese){
         label = label+' '+birds[i].cname+' '+birds[i].name;
      }else{
         label = label+' '+birds[i].name;
      }
      if (birds[i].name.slice(-1)=="*") capcnt++;
      if (birds[i].newbird){
         optstyle = 'style="color:blue;text-decoration:underline;'+newsty+'"';
      }else{
         optstyle = 'style="color:blue;text-decoration:underline;"';
      }
      document.write('<option label="'+label+'" value="showbird.html?name='+birds[i].name1+q_count+'" '+optstyle+tmp+'>'+label+'</option>');
   }
   if (capcnt>0){
      if (window.usechinese){
         label = "* 圈养拍摄";
      }else{
         label = "* Photographed in Captivity";
      }
      document.write('<option label="'+label+'" value="">'+label+'</option>'); 
   }
   if ((capcnt>0)||(title.length!=0)){
      label = "("+title;
      if (capcnt>0){
         if (window.usechinese){
            if(title.length!=0) label=label+"，";
            label = label+capcnt.toString()+"圈养鸟";
         }else{
            if(title.length!=0) label=label+", ";
            label = label+capcnt.toString()+" in captivity";
         }     
      } 
      label = label+")";  
      document.write('<option label="'+label+'" value="">'+label+'</option>');
   }
}
if(bid==null){
   if (order){
      tmp1 = getByFamily(family1, birds);
      bid  = tmp1[0];
      oid  = 2;
      if(tmp1.length>1){nbid = tmp1[1];}
      else{
         tmp1 = getByFamily(family2, birds);
         nbid = tmp1[0];
      }
   }else{
      bid  = birds[0];
      oid  = 0;
      pbid = birds[birds.length-1];
      nbid = birds[1];
   }
}


document.write('</select>');
if(window.usechinese){
   mesg1 = bid.cname+"("+bid.latin+")的详细信息";
   mesg2 = "鸟类相册主页";
   mesg3 = "英文版/English Version";
}else{
   mesg1 = "Detailed Info about "+bid.name+" ("+bid.latin+")";
   mesg2 = "Bird Photo Album Home";
   mesg3 = "Chinese Version/中文版";  
}
document.write('<a href="'+bid.url+'" style="text-decoration:none" target="_blank">');
document.write('<IMG SRC="'+p_info+'"'+borderstr(mesg1)+' align="top" border="0" style="margin:'+space1+'"></a>');
document.write('<a href="'+langurl+'" target="_self">');
document.write('<IMG SRC="'+p_lang+'"'+borderstr(mesg3)+' align="top" border="0" style="margin:'+space+'"></a>');
document.write('<a href="'+homeurl+'birds/" target="_self">');
document.write('<IMG SRC="'+p_home+'"'+borderstr(mesg2)+' align="top" border="0" style="margin:'+space+'"></a>');
document.write('</form>');
document.form_alpha.select_alpha.selectedIndex = oid+2;
if(cellphone) document.write("<br>");

if(window.usechinese){
   title = "老Q的"+title+"鸟种记录: ";
}else{
   if (title.length!=0) title = title+" ";
   title = "LaoQ's "+title+"Life List: ";
}

var sameinfo = true;
for (var i=0;i<bid.photo.length;i++){
    if(bid.cinfo[i]!=bid.cinfo[0]){sameinfo = false;}
}

if(window.usechinese){
   document.title = title+bid.cname;
   for(var i=0;i<bid.photo.length;i++){
      document.write('<p><img onclick="mouseclick(event)" src="'+maindir+"pics/"+bid.photo[i]+'.jpg" alt="" style="max-width:100%;">');
      if((!sameinfo)||(i==bid.photo.length-1)) {document.write('<p style="'+qfont+'">'+bid.cinfo[i]);}
   }
}else{
   document.title = title+bid.name;
   for(var i=0;i<bid.photo.length;i++){
      document.write('<p><img onclick="mouseclick(event)" src="'+maindir+"pics/"+bid.photo[i]+'.jpg" alt="" style="max-width:100%;">');
      if((!sameinfo)||(i==bid.photo.length-1)) {document.write('<p style="'+qfont+'"><i>'+bid.info[i]+'</i>');}
   }
}
document.write("</center>");
//-->
