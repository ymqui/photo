<!--
  var setWidth     = 900;             //window width
  var setHeight    = 900;             //window height
  var info   = new Array(8);          //image info
  info[0]    = new Array();           //image names, page info will be "info_"+image_name+".js"
  info[1]    = new Array();           //number of thumbnails, file names will be image_name+'_'+number+image_ext
  info[2]    = new Array();           //thumbnail layout 0-landscape(4:3) 1-portrait(3:4) 2-landscape(3:2) 3-portrait(2:3)
  info[3]    = new Array();           //image title to be shown
  info[4]    = new Array();           //image captions to be shown in the status bar
  info[5]    = maindir+"thumbnail/";  //thumbnail directory
  info[6]    = ".jpg";                //image extension
  info[7]    = new Array();           //flag to show password protection
  var j      = 0;
  info[0][j] = "0501wedding";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "1/2005 Wedding";
  info[4][j++] = "Liu Yun and Huigang's wedding at Gu Lang Yu(Fujian, China).";  
  info[0][j] = "050102yunmisc";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "1/2005 Sweet Home";
  info[4][j++] = "Liu Yun and Huigang with family members(Fujian, China).";  
  info[0][j] = "0504lijiang";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2005 Lijiang";
  info[4][j++] = "Ou Dandan's trip to Lijiang(Yunnan, China).";  
  info[0][j] = "0601dandan";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "1/2006 Dandan";
  info[4][j++] = "Happy New Year from Dandan(Guangdong, China).";  
  info[0][j] = "0605haohao";
  info[1][j] = 3;
  info[2][j] = 1;
  info[3][j] = "5/2006 Haohao";
  info[4][j++] = "Haohao's baby photos(Fujian, China).";  
  info[0][j] = "0908reunion";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "8/2009 894 Reunion";
  info[4][j++] = "894 20th anniversary of graduation reunion in Xiamen(Fujian, China).";  
  if(window.usechinese){
     j = 0;
     info[3][j]   = "1/2005 小韵婚礼";
     info[4][j++] = "刘韵和汇钢在厦门鼓浪屿的婚礼(中国福建)。";
     info[3][j]   = "1/2005 小韵亲友";
     info[4][j++] = "刘韵和汇钢与亲友团聚(中国福建)。";       
     info[3][j]   = "4/2005 旦旦丽江行";
     info[4][j++] = "殴旦旦同学的丽江游记(中国云南)。";       
     info[3][j]   = "1/2006 旦旦拜年";
     info[4][j++] = "旦旦给大家拜年(中国广东)。";      
     info[3][j]   = "5/2006 昊昊";
     info[4][j++] = "小公鸡昊昊(中国福建)。";     
     info[3][j]   = "8/2009 二十周年聚会";
     info[4][j++] = "龙岩二中89届四班毕业二十周年厦门聚会(中国福建)。";         
  } 
  //special touch
  info[4][0] = info[4][0]+'<br><center><img src="'+info[5]+'rose.gif" style="border:0px"></img></center>';
  //info[4][3] = info[4][3]+'<br><center><img src="'+info[5]+'newyear.gif"></img></center>';
  //show password protection status
  for(var tmp=0;tmp<info[0].length;tmp++) info[7][tmp] = false;  //no password protection if not specified

  //date
  var modiDate = new Date("2009-09-10T10:00:00");
//-->