<!--
  if (!cellphone) document.write('<center>');
  document.write('<br><p style="font-family:Times New Roman;">');
  document.write('<SCRIPT TYPE="text/javascript" LANGUAGE="javascript" SRC="https://ymqui.github.io/photo/script/date.js"></SCRIPT>');
  
  for (var i=0;i<modBrd.name.length;i++){
      mname = reform(modBrd.name[i]);
      if ((mname!=bname) && birdFound(mname)){
         mname=mname+q_count;
         if(order) mname=mname+'&amp;order'; 
         style_b = "<a href='showbird.html?name="+mname+lnksty+">";
         style_e = "</A>";
      }else{
         style_b = "<font color='#22CCEE'>";
         style_e = "</font>";
      }
      if (modBrd.newbird[i] && (!all_new)){
         style_b = "<strong>"+style_b;
         style_e = style_e+"</strong>";
      }
      if(i==0){
         if(window.usechinese){
            document.write('，新加'+style_b+modBrd.cname[i]+"("+modBrd.name[i]+")"+style_e);
         }else{
            document.write(', added '+style_b+modBrd.name[i]+style_e);
         }
      }else{
         if (i==modBrd.name.length-1){
            if(window.usechinese){
               st_str="和";
            }else{
               if(modBrd.name.length==2){st_str=" and ";}else{st_str=", and ";}
            }
         }else{
            if(window.usechinese){st_str="，";}else{st_str=", ";}
         }
         if(window.usechinese){
            document.write(st_str+style_b+modBrd.cname[i]+"("+modBrd.name[i]+")"+style_e);
         }else{
            document.write(st_str+style_b+modBrd.name[i]+style_e);
         }
      }
  }
  if(!(birds.map(({newbird})=>newbird)).reduce((a,b)=>{return a||b;})){
     if(window.usechinese){
        document.write('照片');
     }else{
        document.write(' photo'+((modBrd.name.length>1)?'s':''));
     } 
  }
  if(window.usechinese){
     document.write('。');
  }else{
     document.write('.');
  }
  document.write("<br>");

  var tmpDate = new Date();    //current date
  var modYear = tmpDate.getYear();
  modYear = (modYear<2000)?modYear+1900:modYear;  
  document.write("&copy; 2005");
  if(modYear>2005){
     document.write("-"+modYear);
  }
  document.write(" All rights reserved. ");
  var tmpem1 = "LaoQ Birding";
  var tmpem2 = "Stats";
  var staturl = maindir+"stat.html";
  if(window.usechinese){
     document.write("版权所有 ");
     tmpem1 = "老Q打鸟";
     tmpem2 = "统计资料";
     staturl = staturl+"?chinese";
  }
  var emsp = '&nbsp;';
  if (cellphone) { emsp = '&emsp;';}
  document.write(emsp+'<a href="'+staturl+'" style="text-decoration:none" target="_blank">'); 
  document.write('<IMG SRC="'+maindir+'thumbnail/stat.png"'+borderstr(tmpem2)+' align="bottom" border="0" style="margin:2px 0px -2px 0px"></a>');   
  document.write(emsp+'<a href="showphoto.html?LaoQ" style="text-decoration:none" target="_blank">'); 
  document.write('<IMG SRC="'+maindir+'thumbnail/insignia.png"'+borderstr(tmpem1)+' align="bottom" border="0" style="margin:2px 0px -4px 0px"></a>');   

  //webcounter
  var sc_project=1818758; 
  var sc_invisible=1; 
  var sc_partition=13; 
  var sc_security="382e0c58"; 
  var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
  document.write('<script type="text/javascript" language="javascript" async src="'+scJsHost+'statcounter.com/counter/counter.js"></script>'); window.focus();
//-->