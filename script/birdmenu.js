<!--
   if(cellphone) document.write('<br>');
   document.write('<center>');
   document.write('<table style="max-width: 100%;">');
   document.write('<tr><td style="max-width:50%;">');
   if (cellphone){
      fstyle = "font-family: Arial; font-size: 150%;";
   }else{
      fstyle = "font-family: Arial;";
   }
   //menu by order
   document.write('<form name="form_order">');
   document.write('&nbsp;&nbsp;&nbsp;<select name="select_order" size="-1" style="'+fstyle+'"');
   document.write(' onChange="self.location.href=this.form.select_order.options[this.form.select_order.selectedIndex].value">');
   if (window.usechinese){
      document.write('<option label="-----按科目排序选择-----" value="" selected>-----按科目排序选择-----</option>'); 
      newpic = maindir+"thumbnail/new_c.gif";
   }else{
      document.write('<option label="-----Select Bird Taxonomically-----" value="" selected>-----Select Bird Taxonomically-----</option>'); 
      newpic = maindir+"thumbnail/new.gif";
   }
   
   var itmp = 0;
   var fcnt = 0;
   var ocnt = 0;
   var capcnt = 0;
   for(var i=0;i<orders.length;i++){
      var ordercnt = 0;
      for(var j=0;j<orders[i].family.length;j++){
         tmp = getByFamily(orders[i].family[j].name, birds);
         if (tmp.length==0) continue;
         ordercnt = 1;
         break;
      }
      if (ordercnt!=0){
         if (window.usechinese){
            label = orders[i].cname+' ('+orders[i].name+')';
         }else{
            label = orders[i].name;
         }
         document.write('<option label="'+label+'" value="" style="color: #EC532F">'+label+'</option>');
         ocnt++;
      }else{
         continue;
      }
      for(var j=0;j<orders[i].family.length;j++){
         tmp = getByFamily(orders[i].family[j].name, birds);
         if (tmp.length==0) continue;
         fcnt++;
         if (window.usechinese){
            label = orders[i].family[j].cname+' ('+orders[i].family[j].name+')';
         }else{
            label = orders[i].family[j].name;
         }
         document.write('<option label="'+label+'" value="" style="margin-left: 13px; color: #2E8B57;">'+label+'</option>');
         for(var k=0;k<tmp.length;k++){
            if (window.usechinese){
               label = (itmp+1).toString()+' '+tmp[k].cname+' '+tmp[k].name;
            }else{
               label = (itmp+1).toString()+' '+tmp[k].name;
            }
            if (tmp[k].name.slice(-1)=="*") capcnt++;
            if (isnewBird(tmp[k].name)){
               optstyle = 'style="color:blue; text-decoration:underline; margin-left:13px; background-image:url('+newpic+'); background-repeat:no-repeat; background-position:right;"';
            }else{
               optstyle = 'style="color:blue; text-decoration:underline; margin-left:13px;"';
            }
            document.write('<option label="'+label+'" value="showbird.html?name='+tmp[k].name1+'&amp;order" '+optstyle+'>'+label+'</option>');
            itmp++;
         }   
      }
   }
   if (capcnt>0){
      if (window.usechinese){
         label = "* 圈养拍摄";
      }else{
         label = "* Photographed in Captivity";
      }
      document.write('<option label="'+label+'" value="" style="margin-left: 10px;">'+label+'</option>'); 
   } 
   if (window.usechinese){
      label = "("+ocnt.toString()+"目，"+fcnt.toString()+"科";
      if (capcnt>0) label = label+"，"+capcnt.toString()+"圈养鸟";
   }else{
      label = "("+ocnt.toString()+" orders, "+fcnt.toString()+" families";
      if (capcnt>0) label = label+", "+capcnt.toString()+" in captivity";
   }
   label = label+")";  
   document.write('<option label="'+label+'" value="" style="margin-left: 10px;">'+label+'</option>');
   document.write('</select></form>');
   document.write('</td><td style="max-width: 50%;">');
   //menu by name
   birds.sort(mysort);
   document.write('<form name="form_alpha">');
   document.write('&nbsp;&nbsp;&nbsp;<select name="select_alpha" size="-1" style="'+fstyle+'"');
   document.write(' onChange="self.location.href=this.form.select_alpha.options[this.form.select_alpha.selectedIndex].value">');
   if (window.usechinese){
      document.write('<option label="-----按中文拼音字母排序选择-----" value="" selected>-----按中文拼音字母排序选择-----</option>'); 
   }else{
      document.write('<option label="-----Select Bird Alphabetically-----" value="" selected>-----Select Bird Alphabetically-----</option>'); 
   }
   for(var i=0;i<birds.length;i++){
      if (window.usechinese){
         label = (i+1).toString()+' '+birds[i].cname+' '+birds[i].name;   
      }else{
         label = (i+1).toString()+' '+birds[i].name;   
      }
      if (isnewBird(birds[i].name)){
         optstyle = 'style="color: blue; text-decoration: underline; background-image:url('+newpic+'); background-repeat:no-repeat; background-position:right;"';
      }else{
         optstyle = 'style="color: blue; text-decoration: underline;"';
      }
      document.write('<option label="'+label+'" value="showbird.html?name='+birds[i].name1+'" '+optstyle+'>'+label+'</option>');
   }
   if (capcnt>0){
      if (window.usechinese){
         document.write('<option label="* 圈养拍摄" value="">* 圈养拍摄</option>'); 
      }else{
         document.write('<option label="* Photographed in Captivity" value="">* Photographed in Captivity</option>'); 
      }
   }
   document.write('</select></form>');
   document.write('</td></tr></table>');
   document.write('<IMG SRC="'+info[5]+'divbar.gif">');
   document.write('</center>');
//-->