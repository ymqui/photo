﻿<!--
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
  info[0][j] = "0410picnic";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "10/2004 Barbecue";
  info[4][j++] = "My sister and her colleagues barbecuing at a forest park in Longyan(Fujian, China).";  
  info[0][j] = "0505zhangping";
  info[1][j] = 6;
  info[2][j] = 0;
  info[3][j] = "5/2005 Zhangping";
  info[4][j++] = "My sister visited Zhangping(Fujian, China).";  
  info[0][j] = "0505longyan";
  info[1][j] = 5;
  info[2][j] = 0;
  info[3][j] = "5/2005 Longyan";
  info[4][j++] = "Photos of my beautiful hometown Longyan(Fujian, China).";  
  info[0][j] = "0507tongbo";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "7/2005 Tongbo";
  info[4][j++] = "My sister went swimming in Tongbo(Fujian, China).";  
  info[0][j] = "0508dongshan";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "8/2005 Dongshan";
  info[4][j++] = "My sister and Qiqi visiting Dongshan Island(Fujian, China).";  
  info[0][j] = "0510xiamen";
  info[1][j] = 6;
  info[2][j] = 0;
  info[3][j] = "10/2005 Xiamen";
  info[4][j++] = "My family visited Xiamen during the National Day holiday(Fujian, China).";  
  info[0][j] = "0511mum";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "11/2005 Chrysanthemum";
  info[4][j++] = "Chrysanthemums in Longyan Zhongshan Park(Fujian, China).";  
  info[0][j] = "0601chunjie";
  info[1][j] = 5;
  info[2][j] = 0;
  info[3][j] = "1/2006 Family Dinner";
  info[4][j++] = "My family having dinner at my sister's home(Fujian, China).";  
  info[0][j] = "0602aunt";
  info[1][j] = 5;
  info[2][j] = 0;
  info[3][j] = "1/2006 Aunt";
  info[4][j++] = "My Aunt's family gathered to celebrate the new year(Fujian, China).";  
  info[0][j] = "0602country";
  info[1][j] = 5;
  info[2][j] = 0;
  info[3][j] = "2/2006 Country Side";
  info[4][j++] = "My sister's family visited the country side(Fujian, China).";  
  info[0][j] = "0602tulou";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "2/2006 Tulou";
  info[4][j++] = "My little sister Xiaohong visiting Yongding Hakka Tulou(Fujian, China).";  
  info[0][j] = "0605qiqi";
  info[1][j] = 4;
  info[2][j] = 0;
  info[3][j] = "5/2006 Qiqi's Birthday";
  info[4][j++] = "Qiqi celebrating her nineth birthday(Fujian, China).";  
  info[0][j] = "2006aliceparty";
  info[1][j] = 4;
  info[2][j] = 1;
  info[3][j] = "2006 Alice's Birthday";
  info[4][j++] = "Alice's 2006 Birthday Party(Pennsylvania).";  
  info[0][j] = "0607jiangxi";
  info[1][j] = 5;
  info[2][j] = 0;
  info[3][j] = "7/2006 Jiangxi";
  info[4][j++] = "My parents, Aunt, and Sister visited my Aunt in Jiangxi(Jiangxi, China).";  
  info[0][j] = "0712family";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "12/2007 My Family";
  info[4][j++] = "Visiting My Family in Longyan(Fujian, China).";


  if(window.usechinese){
     j = 0;
     info[3][j]   = "10/2004 烧烤";
     info[4][j++] = "姐和同事在龙岩东肖的森林公园烧烤(中国福建)。";
     info[3][j]   = "5/2005 游漳平";
     info[4][j++] = "姐和琦琦五一游漳平(中国福建)。";
     info[3][j]   = "5/2005 故乡龙岩";
     info[4][j++] = "姐拍的龙岩新貌(中国福建)。";
     info[3][j]   = "7/2005 龙岩铜钵";
     info[4][j++] = "姐拍的铜钵山景(中国福建)。";
     info[3][j]   = "8/2005 东山岛";
     info[4][j++] = "姐和琦琦游东山岛(中国福建)。";
     info[3][j]   = "10/2005 厦门";
     info[4][j++] = "姐和父母国庆游厦门(中国福建)。";
     info[3][j]   = "11/2005 赏菊";
     info[4][j++] = "龙岩中山公园赏菊(中国福建)。";
     info[3][j]   = "1/2006 吃火锅";
     info[4][j++] = "年初三全家人在姐家吃火锅(中国福建)。";
     info[3][j]   = "1/2006 回家过年";
     info[4][j++] = "村美叔叔合家团聚过新年(中国福建)。";
     info[3][j]   = "2/2006 乡村山野";
     info[4][j++] = "姐一家到乡下游山(中国福建)。";
     info[3][j]   = "2/2006 永定土楼";
     info[4][j++] = "小红游永定土楼(中国福建)。";
     info[3][j]   = "5/2006 琦琦生日";
     info[4][j++] = "琦琦过生日(中国福建)。";
     info[3][j]   = "2006 Alice生日";
     info[4][j++] = "Alice过生日(宾夕法尼亚州)。";
     info[3][j]   = "7/2006 江西姑妈";
     info[4][j++] = "爸妈，姑妈，和姐去江西姑妈家(中国江西)。";
     info[3][j]   = "12/2007 我的家人";
     info[4][j++] = "在龙岩和家人团聚(中国福建)。";
  } 
  //special touch
  //show password protection status
  for(var tmp=0;tmp<info[0].length;tmp++) info[7][tmp] = false;  //no password protection unless specified
  //info[7][5] = true;

  //date
  var modiDate = new Date("2008-03-09T10:00:00");
//-->
