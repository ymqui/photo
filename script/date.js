<!--
  var modiYear = modiDate.getYear();
  modiYear = (modiYear<2000)?modiYear+1900:modiYear;
  var tmpdat = "";
  if(window.usechinese){
     tmpdat = '最后更新: '+modiYear+'年'+(modiDate.getMonth()+1).toString()+'月'+modiDate.getUTCDate()+"日"; 
  }else{
     var monthName = new Array("January","February","March","April","May",
	    "June","July","August","September","October","November","December");
     tmpdat = 'Last modified: '+monthName[modiDate.getMonth()]+" "+modiDate.getUTCDate()+", "+modiYear;
  }
  document.write(tmpdat);
//-->