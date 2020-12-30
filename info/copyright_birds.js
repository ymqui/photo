<!--
  if (!cellphone) document.write('<center>');
  document.write('<br><p style="font-family:Times New Roman;">');
  document.write('<SCRIPT TYPE="text/javascript" LANGUAGE="javascript" SRC="https://ymqui.github.io/photo/script/date.js"></SCRIPT>');
  for (var i=0;i<modiBird.name.length;i++){
      mname = reform(modiBird.name[i]);
      if ((mname!=bname) && birdFound(mname)){
         mname=mname+q_count;
         if(order) mname=mname+'&amp;order'; 
         style_b = "<a href='showbird.html?name="+mname+lnksty+">";
         style_e = "</A>";
      }else{
         style_b = "<font color='#22CCEE'>";
         style_e = "</font>";
      }
      
      if(i==0){
         if(window.usechinese){
            document.write('，新加'+style_b+modiBird.cname[i]+"("+modiBird.name[i]+")"+style_e);
         }else{
            document.write(', added '+style_b+modiBird.name[i]+style_e);
         }
      }else{
         if (i==modiBird.name.length-1){
            if(window.usechinese){
               st_str="和";
            }else{
               if(modiBird.name.length==2){st_str=" and ";}else{st_str=", and ";}
            }
         }else{
            if(window.usechinese){st_str="，";}else{st_str=", ";}
         }
         if(window.usechinese){
            document.write(st_str+style_b+modiBird.cname[i]+"("+modiBird.name[i]+")"+style_e);
         }else{
            document.write(st_str+style_b+modiBird.name[i]+style_e);
         }
      }
  }
  if(window.usechinese){
     document.write('。');
  }else{
     document.write('.');
  }
  document.write("<br>");
  var tmpDate = new Date();    //current date
  var modiYear = tmpDate.getYear();
  modiYear = (modiYear<2000)?modiYear+1900:modiYear;  
  document.write("&copy; 2005");
  if(modiYear>2005){
     document.write("-"+modiYear);
  }
  document.write(" All rights reserved. ");
  var tmpeml = "Stats";
  if(window.usechinese){
     document.write("版权所有 ");
     tmpeml = "统计资料";
  }
  document.write("<a href='showphoto.html?LaoQ"+lnksty+" target='_blank'>");     
  document.write('<img border="0" margin="0" align="bottom" style="margin-bottom:-2px" src="'+maindir+'thumbnail/insignia.png" ');
  document.write('     onMouseover="window.status=tmpeml;popupmesg(tmpeml);return true;"');
  document.write('     onMouseout="window.status='+"' '"+';killpopup();"></A>');

  //webcounter
  var sc_project=1818758; 
  var sc_invisible=1; 
  var sc_partition=13; 
  var sc_security="382e0c58"; 
  var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
  document.write('<script type="text/javascript" language="javascript" async src="'+scJsHost+'statcounter.com/counter/counter.js"></script>'); window.focus();
//-->