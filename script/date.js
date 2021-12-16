<!--
  var modYear = modDat.getYear();
  modYear = (modYear<2000)?modYear+1900:modYear;
  var tmpdat = "";
  if(window.usechinese){
     tmpdat = '最后更新: '+modYear+'年'+(modDat.getMonth()+1).toString()+'月'+modDat.getUTCDate()+"日"; 
  }else{
     var monthName = new Array("January","February","March","April","May",
	    "June","July","August","September","October","November","December");
     tmpdat = 'Last modified: '+monthName[modDat.getMonth()]+" "+modDat.getUTCDate()+", "+modYear;
  }
  document.write(tmpdat);
//-->