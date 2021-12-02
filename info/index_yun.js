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
  info[4][j++] = "Wedding at Gu Lang Yu(Fujian, China).";  
  info[0][j] = "050102yunmisc";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "1/2005 Sweet Home";
  info[4][j++] = "With family members(Fujian, China).";  
  info[0][j] = "0604tulip";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2006 Sherwood Garden";
  info[4][j++] = "Visiting Sherwood Garden in north Baltimore(Maryland).";
  info[0][j] = "0611yun";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "11/2006 Motherhood";
  info[4][j++] = "Yun and her baby girl(Maryland).";
  info[0][j] = "0612xiaomi";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2006 Baby Girl";
  info[4][j++] = "Two weeks old Xiao Mi(Maryland).";
  info[0][j] = "0612commencement";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "12/2006 Commencement";
  info[4][j++] = "Huigang attending the 2006 University of Maryland Commencement(Maryland).";
  info[0][j] = "0702xiaomi";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "2/2007 Xiao Mi";
  info[4][j++] = "Two and a half months old Xiao Mi on Chinese New Year's Eve(Maryland).";
  info[0][j] = "0703xiaomi";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "3/2007 Xiao Mi";
  info[4][j++] = "One hundred days old Xiao Mi(Maryland).";
  info[0][j] = "0704sherwoodgarden";
  info[1][j] = 6;
  info[2][j] = 3;
  info[3][j] = "4/2007 Sherwood Garden";
  info[4][j++] = "Xiao Mi visiting Baltimore's Sherwood Garden with parents and grandparents(Maryland).";
  info[0][j] = "0712xiaomi";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "12/2007 Xiao Mi";
  info[4][j++] = "Xiao Mi in Xiamen(Fujian, China).";
  info[0][j] = "0804xiaomi";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2008 Xiao Mi";
  info[4][j++] = "Xiao Mi and parents viewed the cherry blossoms in Kenwood Chevy Chase(Maryland).";
  info[0][j] = "0809xiaomi";
  info[1][j] = 3;
  info[2][j] = 3;
  info[3][j] = "9/2008 Xiao Mi";
  info[4][j++] = "Xiao Mi at 2008 MCBSG party(Maryland).";
  info[0][j] = "0812xiaomi";
  info[1][j] = 5;
  info[2][j] = 3;
  info[3][j] = "12/2008 Xiao Mi";
  info[4][j++] = "Two-year-old Xiao Mi(Maryland).";
  info[0][j] = "0904xiaomi";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "4/2009 Xiao Mi";
  info[4][j++] = "Xiao Mi at University of Maryland 2009 Maryland Day(Maryland).";
  info[0][j] = "1005commencement";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "5/2010 Commencement";
  info[4][j++] = "Yun attending 2010 Univerisity of Maryland Commencement(Maryland).";

  if(window.usechinese){
     j = 0;
     info[3][j]   = "1/2005 小韵婚礼";
     info[4][j++] = "刘韵和汇钢在厦门鼓浪屿的婚礼(中国福建)。";
     info[3][j]   = "1/2005 小韵亲友";
     info[4][j++] = "刘韵和汇钢与亲友团聚(中国福建)。";       
     info[3][j]   = "4/2006 郁金香";
     info[4][j++] = "在巴尔的摩的雪木花园观赏郁金香(马里兰州)。";
     info[3][j]   = "11/2006 初为人母";
     info[4][j++] = "小韵和肚里的小宝宝(马里兰州)。";
     info[3][j]   = "12/2006 小米";
     info[4][j++] = "两周大的小米(马里兰州)。";
     info[3][j]   = "12/2006 毕业典礼";
     info[4][j++] = "汇钢参加马里兰大学的2006年毕业典礼(马里兰州)。";
     info[3][j]   = "2/2007 小米过年";
     info[4][j++] = "两个半月大的小米过除夕(马里兰州)。";
     info[3][j]   = "3/2007 小米百日";
     info[4][j++] = "一百天大的小米(马里兰州)。";
     info[3][j]   = "4/2007 雪木花园";
     info[4][j++] = "小米和爸爸妈妈爷爷奶奶在巴尔的摩游雪木花园(马里兰州)。";
     info[3][j]   = "12/2007 小米";
     info[4][j++] = "小米在厦门(中国福建)。";
     info[3][j]   = "4/2008 小米看樱花";
     info[4][j++] = "小米和爸妈春游赏樱花(马里兰州)。";
     info[3][j]   = "9/2008 小米";
     info[4][j++] = "2008迎新晚会上的小米(马里兰州)。";
     info[3][j]   = "12/2008 小米";
     info[4][j++] = "两岁的小米(马里兰州)。";
     info[3][j]   = "4/2009 小米过马里兰日";
     info[4][j++] = "小米和爸妈奶奶在马里兰大学过马里兰日(马里兰州)。";
     info[3][j]   = "5/2010 毕业典礼";
     info[4][j++] = "小韵在马里兰大学的博士毕业典礼(马里兰州)。";
  } 
  //special touch
  info[4][0] = info[4][0]+'<br><center><img src="'+info[5]+'rose.gif" style="border:0px"></img></center>';
  //info[4][3] = info[4][3]+'<br><center><img src="'+info[5]+'newyear.gif"></img></center>';
  //show password protection status
  for(var tmp=0;tmp<info[0].length;tmp++) info[7][tmp] = false;  //no password protection if not specified

  //date
  var modDate = new Date("2010-06-05T10:00:00");
//-->