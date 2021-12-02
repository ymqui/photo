<!--
  document.write('</td></tr><tr><td align=center valign=center>');
  var modDate = new Date();    //current date
  var modYear = modDate.getYear();
  modYear = (modYear<2000)?modYear+1900:modYear;  
  document.write("&copy; 2004");
  if(modYear>2004){
     document.write("-"+modYear);
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
     var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
     document.write('<script type="text/javascript" language="javascript" async src="'+scJsHost+'statcounter.com/counter/counter.js"></script>');
  }
//-->
