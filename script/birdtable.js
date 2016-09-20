<!--
document.write('<center>');
document.write('<table bgcolor="#FFFFFF" border="1" cellpadding="0" cellspacing="0">');
document.write('<tr><td style="border:0;background:url('+mdir+'thumbnail/vBar.jpg)">');
var tmp = '/thumbnail/';
if (window.birdfamily){   
   tmp=tmp+'byFamily';
}else{
   tmp=tmp+'byAlphabet';
}
if (window.usechinese){
   tmp = tmp+'_c';
}
document.write('<img src="'+mdir+tmp+'.jpg" usemap="#map" border="0">');
document.write('</td></tr>');
document.write('<tr><td style="border:0">');
if (window.birdfamily){	//order by family
   document.write('<br>');
   document.write('<form name="form_order">');
   document.write('&nbsp;&nbsp;&nbsp;<select name="select_order" size="-1" style="font-family: Arial"');
   document.write(' onChange="self.location.href=this.form.select_order.options[this.form.select_order.selectedIndex].value">');
   if (window.usechinese){
      document.write('<option lable="Taxonomic Order" value="" selected>-----按科目排序选择-----</option>'); 
   }else{
      document.write('<option lable="Taxonomic Order" value="" selected>-----Select Bird Taxonomically-----</option>'); 
   }
   for(var i=0;i<orders.length;i++){
      if (window.usechinese){
         document.write('<option label="'+orders[i].name+'" value="" style="color: #EC532F">'+orders[i].cname+' ('+orders[i].name+')</option>');
         for(var j=0;j<orders[i].family.length;j++){
            document.write('<option label="'+orders[i].family[j].name+'" value="" style="margin-left: 13px">'+orders[i].family[j].cname);
            document.write(' ('+orders[i].family[j].name+')</option>');
            for (var k=0;k<birds.length;k++){
               if (orders[i].family[j].name==birds[k].family){
	  document.write('<option label="'+birds[k].name+'" value="showbird.html?'+birds[k].name1+'" style="color: blue; text-decoration: underline; margin-left: 13px;">'+birds[k].cname+' '+birds[k].name+'</option>');
               } 
            }
         }
      }else{
         document.write('<option label="'+orders[i].name+'" value="" style="color: #EC532F">'+orders[i].name+'</option>');
         for(var j=0;j<orders[i].family.length;j++){
            document.write('<option label="'+orders[i].family[j].name+'" value="" style="margin-left: 13px">'+orders[i].family[j].name+'</option>');
            for (var k=0;k<birds.length;k++){
               if (orders[i].family[j].name==birds[k].family){
                  document.write('<option label="'+birds[k].name+'" value="showbird.html?'+birds[k].name1+'" style="color: blue; text-decoration: underline; margin-left: 13px;">'+birds[k].name+'</option>');
               } 
            }
         }
      }
   }
   document.write('</select></form>');

   for(var i=0;i<orders.length;i++){
      if (window.usechinese){
         document.write('<h2>&nbsp;&nbsp;'+orders[i].cname+' ('+orders[i].name+')</h2>');
         for(var j=0;j<orders[i].family.length;j++){
            if (j!=0){
               document.write('<br>');
            }
            document.write('&nbsp;&nbsp;&nbsp;<b>'+orders[i].family[j].cname);
            document.write(' ('+orders[i].family[j].name+')</b><br>');
            for (var k=0;k<birds.length;k++){
               if (orders[i].family[j].name==birds[k].family){
                  document.write('&nbsp;&nbsp;&nbsp;<a href="showbird.html?'+birds[k].name1+'">'+birds[k].cname+' '+birds[k].name+':&nbsp;<i>'+birds[k].latin+'</i></a>');
                  if (isnewBird(birds[k].name)){
                     document.write(' <img src="'+mdir+'/thumbnail/new.gif">');
                  }
                  document.write('<br>');
               } 
            }
         }
      }else{
         document.write('<h2>&nbsp;&nbsp;Order: '+orders[i].name+' ');
         if (orders[i].desc.length!=0){
            document.write('('+orders[i].desc+')');
         }
         document.write('</h2>');
         for(var j=0;j<orders[i].family.length;j++){
            if (j!=0){
               document.write('<br>');
            }
            document.write('&nbsp;&nbsp;&nbsp;<b>Family: '+orders[i].family[j].name+' ');
            if (orders[i].family[j].desc.length!=0){
               document.write('('+orders[i].family[j].desc+')'); 
            }
            document.write('</b><br>');  
            for (var k=0;k<birds.length;k++){
               if (orders[i].family[j].name==birds[k].family){
                  document.write('&nbsp;&nbsp;&nbsp;<a href="showbird.html?'+birds[k].name1+'">'+birds[k].name+':&nbsp;<i>'+birds[k].latin+'</i></a>');
                  if (isnewBird(birds[k].name)){
                     document.write(' <img src="'+mdir+'/thumbnail/new.gif">');
                  }
                  document.write('<br>');
               } 
            }
         }
      }
   }
}else{	//order ny name
   document.write('<br>');
   document.write('<form name="form_alpha">');
   document.write('&nbsp;&nbsp;&nbsp;<select name="select_alpha" size="-1" style="font-family: Arial"');
   document.write(' onChange="self.location.href=this.form.select_alpha.options[this.form.select_alpha.selectedIndex].value">');
   if (window.usechinese){
      document.write('<option lable="Alphabetic Order" value="" selected>-----按英文字母排序选择-----</option>'); 
   }else{
      document.write('<option lable="Alphabetic Order" value="" selected>-----Select Bird Alphabetically-----</option>'); 
   }
   for(var i=0;i<birds.length;i++){
      if (window.usechinese){
         document.write('<option label="'+birds[i].cname+' '+birds[i].name+'" value="showbird.html?'+birds[i].name1+'" style="color: blue; text-decoration: underline;">'+birds[i].cname+' '+birds[i].name+'</option>');
      }else{
         document.write('<option label="'+birds[i].name+'" value="showbird.html?'+birds[i].name1+'" style="color: blue; text-decoration: underline;">'+birds[i].name+'</option>');
      }
   }
   document.write('</select></form>');
   for(var i=0;i<birds.length;i++){
      if (window.usechinese){
         document.write('&nbsp;&nbsp;&nbsp;<a href="showbird.html?'+birds[i].name1+'">'+birds[i].cname+' '+birds[i].name+':&nbsp;<i>'+birds[i].latin+'</i></a>');
      }else{
         document.write('&nbsp;&nbsp;&nbsp;<a href="showbird.html?'+birds[i].name1+'">'+birds[i].name+':&nbsp;<i>'+birds[i].latin+'</i></a>');
      }
      if (isnewBird(birds[i].name)){
         document.write(' <img src="'+mdir+'/thumbnail/new.gif">');
      }
      document.write('<br>');
   }
}
document.write('<br></td></tr></table>');
document.write('<map name="map">');
if (window.birdfamily){
   if (window.usechinese){
      document.write('<area shape="rect" coords="12,1,161,28" href="index_old.html" alt="按英文字母排" target="_self">');
   }else{
      document.write('<area shape="rect" coords="12,1,161,28" href="index_old.html" alt="Browse Alphabetically" target="_self">');
   }
}else{
   if (window.usechinese){
      document.write('<area shape="rect" coords="167,1,293,28" href="index_family_old.html" alt="按科目排" target="_self">');
   }else{
      document.write('<area shape="rect" coords="167,1,293,28" href="index_family_old.html" alt="Browse by Family" target="_self">');
   }
}
document.write('</map>');
//-->

