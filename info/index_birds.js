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
  var j  	 = 0;
  info[0][j] = "0510birding";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "10/2005 Blackwater";
  info[4][j++] = "Birding in the Blackwater National Wildlife Refuge(Maryland).";
  info[0][j] = "0511assateague";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "11/2005 Assateague";
  info[4][j++] = "Camping in Assateague Island(Maryland, Virginia).";
  info[0][j] = "0512everglades";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "12/2005 Everglades";
  info[4][j++] = "Everglades National Park(Florida).";
  info[0][j] = "0512biscayne";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "12/2005 Biscayne";
  info[4][j++] = "Biscayne National Park(Florida).";
  info[0][j] = "0512merritt";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "12/2005 Merritt Island";
  info[4][j++] = "Merritt Island National Wildlife Refuge(Florida).";
  info[0][j] = "0604greatblue";
  info[1][j] = 4;
  info[2][j] = 3;
  info[3][j] = "4/2006 Heron";
  info[4][j++] = "Story of a Great Blue Heron(Maryland).";
  info[0][j] = "2006cobirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2006 C&O Birds";
  info[4][j++] = "Birding at C&O Canal in 2006(Maryland).";
  info[0][j] = "0711blackwater";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "11/2007 Blackwater";
  info[4][j++] = "Birding in the Blackwater National Wildlife Refuge(Maryland).";
  info[0][j] = "2007cobirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2007 C&O Birds";
  info[4][j++] = "Birding at C&O Canal in 2007(Maryland).";
  info[0][j] = "2008cobirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2008 C&O Birds";
  info[4][j++] = "Birding at C&O Canal in 2008(Maryland).";
  info[0][j] = "2009cobirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2009 C&O Birds";
  info[4][j++] = "Birding at C&O Canal in 2009(Maryland).";
  info[0][j] = "1008hummingbird";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "8/2010 Hummingbird";
  info[4][j++] = "Ruby-throated Hummingbirds in Brookside Garden(Maryland).";
  info[0][j] = "1107brookside";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "7/2011 Brookside Garden";
  info[4][j++] = "Ruby-throated hummingbirds, grey catbird, red-winged blackbird, and green heron in Brookside Garden(Maryland).";
  info[0][j] = "1110hawkmtn";
  info[1][j] = 2;
  info[2][j] = 2;
  info[3][j] = "10/2011 Hawk Mountain";
  info[4][j++] = "Watching Migrant Hawks in Hawk Mountain(Pennsylvania).";
  info[0][j] = "1111chincoteague";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "11/2011 Chincoteague Birding";
  info[4][j++] = "Birding in Chincoteague National Wildlife Refuge(Virginia).";
  info[0][j] = "1112floridabirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "12/2011 Florida Birding";
  info[4][j++] = "Birding in the Everglades and the Merritt Island(Florida).";
  info[0][j] = "1203blackwater";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "3/2012 Blackwater Birding";
  info[4][j++] = "Birding in the Blackwater National Wildlife Refuge(Maryland).";
  info[0][j] = "1204robin";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "4/2012 American Robin";
  info[4][j++] = "An American Robin Nest(Maryland).";
  info[0][j] = "1206brooksidebirding";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "6/2012 Brookside Garden";
  info[4][j++] = "Birding in Brookside Garden(Maryland).";
  info[0][j] = "1303middlecreek";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "3/2013 Middle Creek";
  info[4][j++] = "Watching Migrant Snow Geese in Middle Creek Wildlife Management Area(Pennsylvania).";
  info[0][j] = "1307alaskabirding";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "7/2013 Alaska Birding";
  info[4][j++] = "Birding in Alaska(Alaska).";
  info[0][j] = "1312bigbendbirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "12/2013 Big Bend Birding";
  info[4][j++] = "Birding in Big Bend National Park(Texas).";
  info[0][j] = "1312savannahbirding";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "12/2013 Savannah Birding";
  info[4][j++] = "Birding in Savannah National Wildlife Refuge(South Carolina).";
  info[0][j] = "1407michiganbirding";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "7/2014 Michigan Birding";
  info[4][j++] = "Birding in Upper Michigan(Michigan).";
  info[0][j] = "1408annapolisbirding";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "8/2014 Annapolis Birding";
  info[4][j++] = "Birding at Greenbury Point in Annapolis(Maryland).";
  info[0][j] = "1409fingerlake";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2014 Finger Lakes Birding";
  info[4][j++] = "Birding in the Finger Lakes Region(New York).";
  info[0][j] = "1412mckee-beshers";
  info[1][j] = 7;
  info[2][j] = 2;
  info[3][j] = "12/2014 McKee-Beshers Birding";
  info[4][j++] = "Birding in McKee-Beshers Wildlife Management Area(Maryland).";
  info[0][j] = "1501prbirding";
  info[1][j] = 8;
  info[2][j] = 2;
  info[3][j] = "1/2015 Puerto Rico Birding";
  info[4][j++] = "Birding in Puerto Rico(Puerto Rico).";
  info[0][j] = "1503barnegat";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "3/2015 Barnegat Birding";
  info[4][j++] = "Birding in Barnegat Lighthouse State Park(New Jersey).";
  info[0][j] = "1505capemay";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2015 Cape May Birding";
  info[4][j++] = "Birding in Cape May(New Jersey).";
  info[0][j] = "1505bombayhook";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2015 Bombay Hook Birding";
  info[4][j++] = "Birding in Bombay Hook National Wildlife Refuge(Delaware).";
  info[0][j] = "1505puffin";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "5/2015 Puffin Watch";
  info[4][j++] = "Puffin Watch at Eastern Egg Rock(Connecticut, Maine).";
  info[0][j] = "1507birdingwest";
  info[1][j] = 7;
  info[2][j] = 2;
  info[3][j] = "7/2015 Birding West";
  info[4][j++] = "Birding on the West Coast(Nevada, Oregon, Washington, California).";
  info[0][j] = "1509charleston";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "7/2015 Charleston Birding";
  info[4][j++] = "Birding in Carolina Sandhills NWR and the Charleston Area(South Carolina).";
  info[0][j] = "1512boston";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "12/2015 Boston Birding";
  info[4][j++] = "Birding in the Boston Area(Massachusetts).";
  info[0][j] = "1512bhill";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "2015 Black Hill Birding";
  info[4][j++] = "Birding at Black Hill Regional Park in 2015(Maryland).";
  info[0][j] = "1601china";
  info[1][j] = 7;
  info[2][j] = 2;
  info[3][j] = "1/2016 China Birding";
  info[4][j++] = "Birding in China(Beijing, Shanghai, Zhejiang Province, Fujian Province, China).";
  info[0][j] = "1604asheville";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "4/2016 Asheville Birding";
  info[4][j++] = "Birding in Asheville Area(North Carolina).";
  info[0][j] = "1606florida";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "6/2016 Birding South";
  info[4][j++] = "Birding in South Carolina and Florida(South Carolina, Florida).";
  info[0][j] = "1609vtcanbirding";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "9/2016 Birding North";
  info[4][j++] = "Birding in Vermont and Quebec, Canada(Vermont, Quebec, Canada).";
  info[0][j] = "1612savannah";
  info[1][j] = 3;
  info[2][j] = 2;
  info[3][j] = "12/2016 Savannah Birding";
  info[4][j++] = "Birding in Savannah Area(South Carolina, Georgia).";
  info[0][j] = "1704longyan";
  info[1][j] = 5;
  info[2][j] = 2;
  info[3][j] = "4/2017 Longyan Birding";
  info[4][j++] = "Birding in Longyan(Fujian Province, China).";
  info[0][j] = "1705ohio";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2017 Ohio Birding";
  info[4][j++] = "Birding in Northern Ohio(Ohio).";
  info[0][j] = "1709algonquin";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "9/2017 Birding Algonquin";
  info[4][j++] = "Birding in Algonquin Provincial Park(Ontario, Canada).";
  info[0][j] = "1812crbirding";
  info[1][j] = 6;
  info[2][j] = 2;
  info[3][j] = "12/2018 Birding in Costa Rica";
  info[4][j++] = "Birding in Costa Rica(Costa Rica).";
  info[0][j] = "1905mxbird";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "5/2019 Birding in Mexico";
  info[4][j++] = "Birding in Mexico(Mexico).";
  info[0][j] = "2001txbirding";
  info[1][j] = 4;
  info[2][j] = 2;
  info[3][j] = "1/2020 Texas Birding";
  info[4][j++] = "Birding in Southern Texas(Texas).";

  if(window.usechinese){
     j = 0;
     info[3][j]   = "10/2005 观鸟";
     info[4][j++] = "黑水国家野生动物保护区观鸟(马里兰州)。";
     info[3][j]   = "11/2005 阿萨替格岛";
     info[4][j++] = "感恩节游阿萨替格岛(马里兰州，维吉尼亚州)。";
     info[3][j]   = "12/2005 大沼泽地";
     info[4][j++] = "大沼泽地国家公园(佛罗里达州)。";
     info[3][j]   = "12/2005 比斯凯恩";
     info[4][j++] = "比斯凯恩国家公园(佛罗里达州)。";
     info[3][j]   = "12/2005 美丽特岛";
     info[4][j++] = "美丽特岛野生动物保护区(佛罗里达州)。";
     info[3][j]   = "4/2006 大蓝鹭";
     info[4][j++] = "一只大蓝鹭的故事(马里兰州)。";
     info[3][j]   = "2006 河边看鸟";
     info[4][j++] = "2006年在C&O运河国家公园看鸟(马里兰州)。";
     info[3][j]   = "11/2007 观鸟";
     info[4][j++] = "黑水国家野生动物保护区观鸟(马里兰州)。";
     info[3][j]   = "2007 河边看鸟";
     info[4][j++] = "2007年在C&O运河国家公园看鸟(马里兰州)。";
     info[3][j]   = "2008 河边看鸟";
     info[4][j++] = "2008年在C&O运河国家公园看鸟(马里兰州)。";
     info[3][j]   = "2009 河边看鸟";
     info[4][j++] = "2009年在C&O运河国家公园看鸟(马里兰州)。";
     info[3][j]   = "8/2010 蜂鸟";
     info[4][j++] = "在溪边花园拍红喉北蜂鸟(马里兰州)。";
     info[3][j]   = "7/2011 溪边花园观鸟";
     info[4][j++] = "在溪边花园看蜂鸟，灰嘲鸫，红翅黑鹂和绿鹭(马里兰州)。";
     info[3][j]   = "10/2011 鹰山看鹰";
     info[4][j++] = "宾州中部的鹰山看鹰(宾夕法尼亚州)。";
     info[3][j]   = "11/2011 清客替格观鸟";
     info[4][j++] = "清客替格岛国家野生动物保护区观鸟(弗吉尼亚州)。";
     info[3][j]   = "12/2011 佛罗里达观鸟";
     info[4][j++] = "在沼泽地国家公园和美丽特岛野生动物保护区观鸟(佛罗里达州)。";
     info[3][j]   = "3/2012 黑水观鸟";
     info[4][j++] = "黑水国家野生动物保护区观鸟(马里兰州)。";
     info[3][j]   = "4/2012 旅鸫鸟巢";
     info[4][j++] = "拍旅鸫在巢里孵蛋（马里兰州）。";
     info[3][j]   = "6/2012 溪边花园观鸟";
     info[4][j++] = "在溪边花园观鸟（马里兰州）。";
     info[3][j]   = "3/2013 中溪观鸟";
     info[4][j++] = "中溪野生动物保护区看雪雁迁徙(宾夕法尼亚州)。";
     info[3][j]   = "7/2013 阿拉斯加观鸟";
     info[4][j++] = "阿拉斯加观鸟（阿拉斯加州）。";
     info[3][j]   = "12/2013 大弯观鸟";
     info[4][j++] = "在大弯国家公园观鸟（德克萨斯州）。";
     info[3][j]   = "12/2013 萨凡纳观鸟";
     info[4][j++] = "在萨凡纳国家野生动物保护区观鸟（南卡罗来纳州）。";
     info[3][j]   = "7/2014 密西根观鸟";
     info[4][j++] = "在密西根北部湖区观鸟（密西根州）。";
     info[3][j]   = "8/2014 安纳波利斯观鸟";
     info[4][j++] = "安纳波利斯格林伯瑞角观鸟(马里兰州)。";
     info[3][j]   = "9/2014 指形湖区观鸟";
     info[4][j++] = "伊萨卡附近指形湖区观鸟(纽约州)。";
     info[3][j]   = "12/2014 McKee-Beshers观鸟";
     info[4][j++] = "McKee-Beshers野生动物管理区观鸟(马里兰州)。";
     info[3][j]   = "1/2015 波多黎各观鸟";
     info[4][j++] = "波多黎各观鸟(波多黎各)。";
     info[3][j]   = "3/2015 巴尼加特观鸟";
     info[4][j++] = "巴尼加特灯塔州立公园观鸟(新泽西州)。";
     info[3][j]   = "5/2015 五月岬观鸟";
     info[4][j++] = "五月岬观鸟(新泽西州)。";
     info[3][j]   = "5/2015 庞贝‧虎克观鸟";
     info[4][j++] = "庞贝‧虎克国家野生动物保护区观鸟(特拉华州)。";
     info[3][j]   = "5/2015 观海鹦";
     info[4][j++] = "东蛋岩岛观海鹦(康涅狄格州，缅因州)。";
     info[3][j]   = "7/2015 美西观鸟";
     info[4][j++] = "美国西部观鸟(内华达州，俄勒冈州，华盛顿州，加利福尼亚州)。";
     info[3][j]   = "9/2015 查尔斯顿观鸟";
     info[4][j++] = "卡罗来纳沙丘国家野生动物保护区和查尔斯顿附近观鸟(南卡罗来纳州)。";
     info[3][j]   = "12/2015 波士顿观鸟";
     info[4][j++] = "波士顿附近观鸟(马萨诸塞州)。";
     info[3][j]   = "2015 黑山公园观鸟";
     info[4][j++] = "2015年黑山公园观鸟(马里兰州)。";
     info[3][j]   = "1/2016 中国观鸟";
     info[4][j++] = "中国各地观鸟(中国北京，上海，浙江省，福建省)。";
     info[3][j]   = "4/2016 阿什维尔观鸟";
     info[4][j++] = "阿什维尔一带观鸟(北卡罗来纳州)。";
     info[3][j]   = "6/2016 南部观鸟";
     info[4][j++] = "南卡罗来纳州和佛罗里达州观鸟(南卡罗来纳州，佛罗里达州)。";
     info[3][j]   = "9/2016 北部观鸟";
     info[4][j++] = "佛蒙特州和加拿大魁北克省观鸟(佛蒙特州，加拿大魁北克省)。";
     info[3][j]   = "12/2016 萨凡纳观鸟";
     info[4][j++] = "在萨凡纳附近观鸟（南卡罗来纳州，佐治亚州）。";
     info[3][j]   = "4/2017 龙岩观鸟";
     info[4][j++] = "中国龙岩观鸟(中国福建省)。";
     info[3][j]   = "5/2017 俄亥俄观鸟";
     info[4][j++] = "在俄亥俄州北部观鸟(俄亥俄州)。";
     info[3][j]   = "9/2017 阿岗昆观鸟";
     info[4][j++] = "在阿岗昆省立公园观鸟(加拿大安大略省)。";
     info[3][j]   = "12/2018 哥斯达黎加观鸟";
     info[4][j++] = "哥斯达黎加观鸟(哥斯达黎加)。";
     info[3][j]   = "5/2019 墨西哥观鸟";
     info[4][j++] = "墨西哥观鸟(墨西哥)。";
     info[3][j]   = "1/2020 德克萨斯观鸟";
     info[4][j++] = "在德克萨斯州南部观鸟(德克萨斯州)。";
  } 

  //special touch
  //info[4][28] = info[4][28]+'<br><center><img src="'+info[5]+'newyear.gif" style="border:0px"></img></center>';

  //show password protection status
  for(var tmp=0;tmp<info[0].length;tmp++) info[7][tmp] = false;
  //info[7][0] = true;

  //web counter
  var sc_project   = 1818758; 
  var sc_invisible = 1; 
  var sc_partition = 13; 
  var sc_security  = "382e0c58"; 

  //date
  var modiDate1 = new Date("2020-02-02T12:00:00");
  if (window.modiDate){
     if(modiDate1.getTime()>modiDate.getTime()) modiDate = modiDate1;  
  }else{
     modiDate = modiDate1;
  }
//-->
