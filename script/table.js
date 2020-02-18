<!--
/****************************
*    9/2004 Yiming Qiu      *
****************************/
if (window.is_thumb) {
   //determine page numbers and thumbnails
   var numperpage = 12;		//12 number of images per page
   var col        = 4;		//number of columns
   var page_num   = window.location.search.substring(1);
   if(page_num.length==0){
       page_num   = 1;
   }else{
       page_num   = Math.floor(page_num);
   }
   if (cellphone){
       fsizet     = '200%';
       numperpage = 15;
       col        = 3;
       if (window.birdalbum) numperpage = 12;
   }else{
       fsizet     = '100%';
   }
   if (Math.floor(Math.random()*20)==0 && page_num==1 && (!cellphone)) {
       numperpage = info[0].length;
       col = 5;
       for(var i=0;i<=4;i++) {info[i].reverse();}
       info[7].reverse();
   }
   var totpagenum = Math.floor((info[0].length+numperpage-1)/numperpage);

   if ((page_num<=0)||(page_num>totpagenum)) page_num = 1;
   
   var end_tnind   = info[0].length-1-(page_num-1)*numperpage;
   var start_tnind = end_tnind-numperpage+1;
   if (start_tnind<0) start_tnind = 0; 

   var id     = start_tnind;
   var wh_str = new Array(" width=120 height=90 "," width=120 height=160 "," width=120 height=80 "," width=110 height=165 ");
   if(screen.availWidth<1025) wh_str = new Array(" width=110 height=82 "," width=110 height=147 "," width=110 height=73 "," width=100 height=150 ");
   //var wh_str = new Array(" "," "," "," ");
   while((id<=end_tnind)&&(id>=start_tnind)){
       document.write('<TABLE border=0 cellspacing=15 cellpadding=15 align=center style="font-family:Arial,Times New Roman;font-size:'+fsizet+';">');
       document.write('<tr>');
       var left = end_tnind-id+1;	//number of thumbnails left to be displayed
       for (var j=0; j<Math.min(left,col);j++){
           document.write('<td align="center" valign="center" bgcolor="black">');
           document.write('<A HREF="showphoto.html?'+info[0][id]+'" style="text-decoration:none">');
           document.write('<IMG align="middle"'+wh_str[info[2][id]]+' border=1');
           document.write('  name="'+info[0][id]+'"');
           document.write('  onMouseover = "popupmesg(info[4]['+id.toString()+']);return true;"');
           document.write('  onMouseout  = "window.status=update;killpopup();"');
           if ((info[0][id].charAt(0)>="1")&&(info[0][id].charAt(0)<="9")){
              document.write('  src="'+maindir+'thumbnail'+info[0][id].charAt(0)+'/'+info[0][id]+'_0'+info[6]+'"></A><br>');
           }else{
              document.write('  src="'+info[5]+info[0][id]+'_0'+info[6]+'"></A><br>');
           }           
           if(info[7][id]){
               document.write('<IMG border="0" margin="0" align="bottom" style="margin-bottom:-2px" src="'+info[5]+'lock.png"');
               if(window.usechinese){
                  document.write('  onMouseover = "popupmesg('+"'密码保护'"+');return true;"');
               }else{
                  document.write('  onMouseover = "popupmesg('+"'Password Protected'"+');return true;"');
               }
               document.write('  onMouseout  = "killpopup();">');
           }else{
               document.write('<IMG border="0" margin="0" align="bottom" style="margin-bottom:-2px" src="'+info[5]+'nolock.png">');
           }
           document.write('<br><A HREF="showphoto.html?'+info[0][id]+'" style="text-decoration:none">');
           document.write(info[3][id]+'</A></td>');
           id++;
       }
       document.write('</tr>');
       document.write('</TABLE>');
   }
}else{
   document.write('<TABLE border=0 cellspacing=15 cellpadding=15 align=center>');
   for(id=info[0].length-1;id>=0;id--){
       document.write('<tr>');
       document.write('<td align="center">');
       document.write('<A HREF="showphoto.html?'+info[0][id]+'">');
       if ((info[0][id].charAt(0)>="1")&&(info[0][id].charAt(0)<="9")){
          document.write('<img  src="'+maindir+'thumbnail'+info[0][id].charAt(0)+'/'+info[0][id]+'_0'+info[6]+'" border="0"></A></td>');
       }else{
          document.write('<img  src="'+info[5]+info[0][id]+'_0'+info[6]+'" border="0"></A></td>');
       }
       document.write('<td align="left">');
       document.write('<A HREF="showphoto.html?'+info[0][id]+'">');
       document.write(info[3][id]+'</A></td>');
       document.write('<td align="left">');
       document.write('<A HREF="showphoto.html?'+info[0][id]+'" style="text-decoration:none">');
       document.write(info[4][id]+'</A></td>');
       document.write('</tr>');
   }
   document.write('</TABLE>');
}
//-->
