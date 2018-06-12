<!--
  document.write('<p><center>');
  document.write('<font color="#AAAAAA" size=3 face="Times New Roman">');
  var tmpdir = "";
  var tmplan = "";
  var tmpfam = "";
  var tmpfri = "";
  var tmpbrd = "";
  var tmplif = "";
  var tmpres = "";
  var tmpsum = "";
  var tmpoth = "";
  var tmpyun = "";
  var tmpeml = "Comments";
  if(window.usechinese){
     if (googledrive){
        tmpdir = "https://ymqui.github.io/photo/";  
     }else{
        tmpdir = "http://www.pha.jhu.edu/~qiuym/photo/";
     }  
     tmpeml = "留言";
     if(window.is_thumb){
        tmpoth = '&nbsp;&nbsp;|&nbsp; <A href="../" target="_self" >其它照片</A>';
        tmpyun = '&nbsp;&nbsp;|&nbsp; <A href="../yun/" target="_self" >小韵照片</A>';
     }else{
        tmpoth = '&nbsp;&nbsp;|&nbsp; <A href="../index_text.html" target="_self" >其它照片</A>';
        tmpyun = '&nbsp;&nbsp;|&nbsp; <A href="../yun/index_text.html" target="_self" >小韵照片</A>';
     }
     if(window.friendalbum){
        tmpdir = tmpdir+"friend/";
     }else if(window.yunalbum){
        tmpdir = tmpdir+"yun/";
        tmpyun = '';
     }else if(window.restalbum){
        tmpdir = tmpdir+"restaurant/";
        tmpbrd = '&nbsp;&nbsp;|&nbsp; <A href="../birds/" target="_self">鸟类照片</A>';
        tmpyun = '';
     }else if(window.familyalbum){
        tmpdir = tmpdir+"family/";
        tmpyun = '';
     }else if(window.birdalbum){
        tmpdir = tmpdir+"birds/";
        tmplif = '&nbsp;&nbsp;|&nbsp; <A href="../birds/showbird.html?order" target="_self">鸟种记录</A>'; 
        tmpyun = '';
     }else{
        if (window.is_thumb) {
           tmpoth = '';
        }else{
           tmpoth = 'index_text.html';
        }
        tmpfam = '&nbsp;&nbsp;|&nbsp; <A href="family/'+tmpoth+'" target="_self" >家人照片</A>';
        tmpfri = '&nbsp;&nbsp;|&nbsp; <A href="friend/'+tmpoth+'" target="_self" >朋友照片</A>';
        tmpbrd = '&nbsp;&nbsp;|&nbsp; <A href="birds/" target="_self">鸟类照片</A>';
	tmpres = '&nbsp;&nbsp;|&nbsp; <A href="restaurant/" target="_self">餐馆照片</A>';
        tmpoth = '';
        tmpyun = '';
     }
     if(window.is_thumb){
        tmplan = '<A href="'+tmpdir+page_url(page_num)+'" target="_self" ';
     }else{
        tmplan = '<A href="'+tmpdir+'index_text.html" target="_self" ';
     }
     tmplan = tmplan+'   onMouseover="window.status='+"'英文版'"+';popupmesg('+"'英文版'"+');return true;"';
     tmplan = tmplan+'   onMouseout="window.status='+"' '"+';killpopup();">English Version</A>';
     if (window.is_thumb){
        tmpsum = '&nbsp;&nbsp;|&nbsp; <A href="./index_text.html" target="_self" >文字模式</A>';
     }else{
        tmpsum = '&nbsp;&nbsp;|&nbsp; <A href="./" target="_self" >图形模式</A>';
     }
  }else{
     if (googledrive){
        tmpdir = "https://ymqui.github.io/zhaopian/";
     }else{
        tmpdir = "http://www.pha.jhu.edu/~qiuym/zhaopian/";
     }
     if(window.is_thumb){
        tmpoth = '&nbsp;&nbsp;|&nbsp; <A href="../" target="_self" >Other&nbsp;Photos</A>';
        tmpyun = '&nbsp;&nbsp;|&nbsp; <A href="../yun/" target="_self" >Yun'+"'"+'s&nbsp;Photos</A>';
     }else{
        tmpoth = '&nbsp;&nbsp;|&nbsp; <A href="../index_text.html" target="_self" >Other&nbsp;Photos</A>';
        tmpyun = '&nbsp;&nbsp;|&nbsp; <A href="../yun/index_text.html" target="_self" >Yun'+"'"+'s&nbsp;Photos</A>';
     }
     if(window.friendalbum){
        tmpdir = tmpdir+"friend/";
     }else if(window.yunalbum){
        tmpdir = tmpdir+"yun/";
        tmpyun = '';
     }else if(window.restalbum){
        tmpdir = tmpdir+"restaurant/";
        tmpbrd = '&nbsp;&nbsp;|&nbsp; <A href="../birds/" target="_self">Bird&nbsp;Photos</A>';
        tmpyun = '';
     }else if(window.familyalbum){
        tmpdir = tmpdir+"family/";
        tmpyun = '';
     }else if(window.birdalbum){
        tmpdir = tmpdir+"birds/";
        tmplif = '&nbsp;&nbsp;|&nbsp; <A href="../birds/showbird.html?order" target="_self">Lifer List&nbsp;Photos</A>';
        tmpyun = '';
     }else{
        if (window.is_thumb) {
           tmpoth = '';
        }else{
           tmpoth = 'index_text.html';
        }
        tmpfam = '&nbsp;&nbsp;|&nbsp; <A href="family/'+tmpoth+'" target="_self" >Family'+"'"+'s&nbsp;Photos</A>';
        tmpfri = '&nbsp;&nbsp;|&nbsp; <A href="friend/'+tmpoth+'" target="_self">Friend'+"'"+'s&nbsp;Photos</A>';
        tmpbrd = '&nbsp;&nbsp;|&nbsp; <A href="birds/" target="_self">Bird&nbsp;Photos</A>';
	tmpres = '&nbsp;&nbsp;|&nbsp; <A href="restaurant/" target="_self">Restaurant&nbsp;Photos</A>';
        tmpoth = '';
        tmpyun = '';
     }
     if(window.is_thumb){
        tmplan = '<A href="'+tmpdir+page_url(page_num)+'" target="_self" ';
     }else{
        tmplan = '<A href="'+tmpdir+'index_text.html" target="_self" ';
     }
     tmplan = tmplan+'   onMouseover="window.status='+"'Chinese Version'"+';popupmesg('+"'Chinese Version'"+');return true;"';
     tmplan = tmplan+'   onMouseout="window.status='+"' '"+';killpopup();">中文版</A>';
//     if(window.is_thumb){
//        tmplan = '<A href="'+tmpdir+page_url(page_num)+'" target="_self" style="text-decoration:none">';
//     }else{
//        tmplan = '<A href="'+tmpdir+'index_text.html" target="_self" style="text-decoration:none">';
//     }
//     tmplan = tmplan+'<img border="0" margin="0" src="'+info[5]+'chinese.png" align=middle';
//     tmplan = tmplan+'     onMouseover="window.status='+"'Chinese version.'"+';popupmesg('+"'Chinese Version'"+');return true;"';
//     tmplan = tmplan+'     onMouseout="window.status='+"' '"+';killpopup();"></A>';
     if (window.is_thumb){
        tmpsum = '&nbsp;&nbsp;|&nbsp; <A href="./index_text.html" target="_self" >Summary</A>';
     }else{
        tmpsum = '&nbsp;&nbsp;|&nbsp; <A href="./" target="_self" >Thumbnail</A>';
     }
  }
  if (cellphone) {fsizec = "150%;";}else{fsizec = "100%;";}
  document.write('<table border=0 align=center>');
  document.write('<tr><td align=center valign=center>');
  document.write('<div style="line-height:200%; font-size:'+fsizec+'">');
  document.write(tmplan);
  document.write(tmpyun);
  document.write(tmplif);
  document.write(tmpoth);
  document.write(tmpbrd);
  document.write(tmpres);
  document.write(tmpfam);
  document.write(tmpfri);
  document.write(tmpsum);
  document.write('</div>');
  document.write('</td></tr><tr><td align=center valign=center>');
//-->