<!--
  document.write('</td></tr><tr><td align=center valign=center>');
  var modiDate = new Date();    //current date
  var modiYear = modiDate.getYear();
  modiYear = (modiYear<2000)?modiYear+1900:modiYear;  
  document.write("&copy; 2004");
  if(modiYear>2004){
     document.write("-"+modiYear);
  }
  if(window.friendalbum||window.familyalbum){
     document.write(" All rights reserved by photo owners. ");
  }else{
     document.write(" All rights reserved. ");
  }
  if(window.usechinese){
     document.write("版权所有 ");
  }
  document.write('<a href="mailto:ymqui@yahoo.com">');     
  //document.write('<img border="0" margin="0" align="bottom" style="margin-bottom:-2px" src="'+info[5]+'insignia_'+Math.floor(Math.random()*4).toString()+'.png" ');
  document.write('<img border="0" margin="0" align="bottom" style="margin-bottom:-2px" src="'+info[5]+'insignia.png" ');
  document.write('     onMouseover="window.status=tmpeml;popupmesg(tmpeml);return true;"');
  document.write('     onMouseout="window.status='+"' '"+';killpopup();"></A>');
  document.write('</td></tr></table>');
  document.write('</font>');
  //web counter
  if(window.sc_project){
     document.write('<script type="text/javascript" language="javascript" src="http://www.statcounter.com/counter/counter.js"></script>');
  }
//-->
