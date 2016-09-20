<!--
var maxlistnum = 10;
if (cellphone) {fsizem = "5";}else{fsizem = "3";}
function page_url(num){
    if(num==1) return "./";
    return "index.html?"+num.toString();
}

var init_num = page_num-maxlistnum+1;
if (init_num<1) init_num = 1;
var stop_num = page_num+maxlistnum-1;
if (stop_num>totpagenum) stop_num = totpagenum;
if(totpagenum>1){
  document.write('<p><center>');
  document.write('<font color="#AAAAAA" size='+fsizem+' face="Times New Roman">');
  if(page_num>init_num){
    var link = page_url(page_num-1);
    var prev = "Prev";
    if(window.usechinese) prev="上一页";
    if (init_num>1){
       prev = "First";
       link = page_url(1);
       if(window.usechinese) prev="第一页";
    }
    document.write('<b><a href="'+link+'" target="_self">'+prev+'</a></b>&nbsp;&nbsp;');
    link = page_url(page_num-1);
    document.write('<a href="'+link+'" target="_self">');
    document.write('<img src="'+info[5]+'ar_prev.gif" width=7 height=13 border=0 alt=""></a>&nbsp;&nbsp;');
  }
  for(var i=init_num;i<=stop_num;i++){
    var link = page_url(i);
    if(i==page_num){
        document.write('<font color=Orange>'+i.toString()+'</font>&nbsp;&nbsp;');
    }else{
        document.write('<a href="'+link+'" target="_self">'+i.toString()+'</a>&nbsp;&nbsp;');
    }
  }
  if(page_num<stop_num){
    var link = page_url(page_num+1);
    var next = "Next";
    if(window.usechinese) next = "下一页";
    document.write('<a href="'+link+'" target="_self">');
    document.write('<img src="'+info[5]+'ar_next.gif" width=7 height=13 border=0 alt=""></a>&nbsp;&nbsp;');
    if (stop_num<totpagenum){
       next = "Last";
       link = page_url(totpagenum);
       if(window.usechinese) next="最后一页"; 
    }
    document.write('<b><a href="'+link+'" target="_self">'+next+'</a></b>&nbsp;&nbsp;');
  }
  document.write('</font></center></p>');
}
//-->
