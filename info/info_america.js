﻿<!--
var info_url   = "http://www.convertit.com/go/convertit/reference/states.asp";
var title      = "Welcome to the North America";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/usstates/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "ComingToAmerica.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "环游北美";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
    info_url   = "http://baike.baidu.com/view/2748751.htm";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    var i = 0;    
    this[0][i++] = "USStates_Alabama_20111226_Maomao_1";
    this[0][i++] = "USStates_Alaska_20130712_Maomao_1";
//    this[0][i++] = "";
    this[0][i++] = "USStates_Arizona_20121220_Maomao";
    this[0][i++] = "USStates_Arkansas_20131222_Maomao";
    this[0][i++] = "USStates_Canifornia_20121225_Maomao_2";
    this[0][i++] = "USStates_Colorado_20121229_Maomao";
    this[0][i++] = "USStates_Connecticut_20141225_Maomao";
    this[0][i++] = "USStates_Delaware_20120127";
    this[0][i++] = "USStates_DC_20111203_Maomao";
    this[0][i++] = "USStates_Florida_20111226_Maomao";
    this[0][i++] = "USStates_Georgia_20111230_Maomao";
//    this[0][i++] = "";
//    this[0][i++] = "";
    this[0][i++] = "USStates_Idaho_20110629_MaomaoHouzi";
    this[0][i++] = "USStates_Illinois_20110624_MaomaoHouzi";
    this[0][i++] = "USStates_Indiana_20110624_MaomaoHouzi_1";
    this[0][i++] = "USStates_Iowa_20140703_Maomao_2";
    this[0][i++] = "USStates_Kansas_20131221_Maomao";
    this[0][i++] = "USStates_Kentucky_20120815_I64";
    this[0][i++] = "USStates_Louisiana_20111223_Maomao";
    this[0][i++] = "USStates_Maine_20131005_Maomao";
    this[0][i++] = "USStates_Maryland_20111008_Maomao";
    this[0][i++] = "USStates_Massachusetts_20110903_Maomao";
    this[0][i++] = "USStates_Michigan_20140705_Maomao_2";
    this[0][i++] = "USStates_Minnesota_20110702_MaomaoHouzi_1";
    this[0][i++] = "USStates_Mississippi_20111222_MaomaoYanmei";
    this[0][i++] = "USStates_Missouri_20110625_MaomaoHouzi";
    this[0][i++] = "USStates_Montana_20110629_MaomaoHouzi";
    this[0][i++] = "USStates_Nebraska_20110625_MaomaoHouzi";
    this[0][i++] = "USStates_Nevada_20121220_Maomao";
    this[0][i++] = "USStates_NewHampshire_20131005_Maomao";
    this[0][i++] = "USStates_NewJersey_20120127";
    this[0][i++] = "USStates_NewMexico_20121229_Maomao";
    this[0][i++] = "USStates_NewYork_20110903_Maomao";
    this[0][i++] = "USStates_NorthCarolina_20111231_Maomao_2";
    this[0][i++] = "USStates_NorthDakota_20140704_Maomao_1";
//    this[0][i++] = "";
    this[0][i++] = "USStates_Ohio_20110624_MaomaoHouzi_1";
    this[0][i++] = "USStates_Oklahoma_20131222_Maomao";
    this[0][i++] = "USStates_Oregon_20150710_Maomao";
    this[0][i++] = "USStates_Pennsylvania_20110703_MaomaoHouzi";
    this[0][i++] = "USStates_PuertoRico_20150107_Maomao";
    this[0][i++] = "USStates_RhodeIsland_20110903_Maomao";
    this[0][i++] = "USStates_SouthCarolina_20111230_Maomao";
    this[0][i++] = "USStates_SouthDakota_20110701_MaomaoHouzi";
    this[0][i++] = "USStates_Tennessee_20111221_Maomao";
    this[0][i++] = "USStates_Texas_20131224_Maomao";
    this[0][i++] = "USStates_Utah_20121230_Maomao_1";
    this[0][i++] = "USStates_Vermont_20131006_Maomao_2";
//    this[0][i++] = "";
    this[0][i++] = "USStates_Virginia_20110704_MaomaoHouzi";
    this[0][i++] = "USStates_Washington_20150709_Maomao";
    this[0][i++] = "USStates_WestVirginia_20110624_MaomaoHouzi";
    this[0][i++] = "USStates_Wisconsin_20140704_Maomao";
    this[0][i++] = "USStates_Wyoming_20110626_MaomaoHouzi_2";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
    this[0][i++] = "Canada_Ontario_20170901";
//    this[0][i++] = "";
    this[0][i++] = "Canada_Quebec_20160915";
//    this[0][i++] = "";
//    this[0][i++] = "";
    this[0][i++] = "Canada_Yukon_20130712";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
    this[0][i++] = "Mexico_Guanajuato_20190513";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
    this[0][i++] = "Mexico_MexicoState_20190511";
    this[0][i++] = "Mexico_MexicoCity_20190516";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
//    this[0][i++] = "";
    i = 0;
    if(window.usechinese){
        this[1][i++] = "美国阿拉巴马州，12/26/2011。";
        this[1][i++] = "美国阿拉斯加州，7/12/2013。";
//        this[1][i++] = "美属萨摩亚，。";
        this[1][i++] = "美国亚利桑那州，12/20/2012。";
        this[1][i++] = "美国阿肯色州，12/22/2013。";
        this[1][i++] = "美国加利福尼亚州，12/25/2012。";
        this[1][i++] = "美国科罗拉多州，12/29/2012。";
        this[1][i++] = "美国康涅狄格州，12/25/2014。";
        this[1][i++] = "美国特拉华州，1/27/2012。";
        this[1][i++] = "美国哥伦比亚特区，12/3/2011。";
        this[1][i++] = "美国佛罗里达州，12/26/2011。";
        this[1][i++] = "美国乔治亚州，12/30/2011。";
//        this[1][i++] = "美国关岛，。";
//        this[1][i++] = "美国夏威夷州，。";
        this[1][i++] = "美国爱达荷州，侯子和毛毛，6/29/2011。";
        this[1][i++] = "美国伊利诺伊州，侯子和毛毛，6/24/2011。";
        this[1][i++] = "美国印第安纳州，侯子和毛毛，6/24/2011。";
        this[1][i++] = "美国爱荷华州，7/3/2014。";
        this[1][i++] = "美国堪萨斯州，12/21/2013。";
        this[1][i++] = "美国肯塔基州，8/15/2012。";
        this[1][i++] = "美国路易斯安那州，12/23/2011。";
        this[1][i++] = "美国缅因州，10/5/2013。";
        this[1][i++] = "美国马里兰州，10/8/2011。";
        this[1][i++] = "美国马萨诸塞州，9/3/2011。";
        this[1][i++] = "美国密西根州，7/5/2014。";
        this[1][i++] = "美国明尼苏达州，侯子和毛毛，7/2/2011。";
        this[1][i++] = "美国密西西比州，艳梅和毛毛，12/22/2011。";
        this[1][i++] = "美国密苏里州，侯子和毛毛，6/25/2011。";
        this[1][i++] = "美国蒙大拿州，侯子和毛毛，6/29/2011。";
        this[1][i++] = "美国内布拉斯加州，侯子和毛毛，6/25/2011。";
        this[1][i++] = "美国内华达州，12/20/2012。";
        this[1][i++] = "美国新罕布什尔州，10/5/2013。";
        this[1][i++] = "美国新泽西州，1/27/2012。";
        this[1][i++] = "美国新墨西哥州，12/29/2012。";
        this[1][i++] = "美国纽约州，9/3/2011。";
        this[1][i++] = "美国北卡罗来纳州，12/31/2011。";
        this[1][i++] = "美国北达科他州，7/4/2014。";
//        this[1][i++] = "美国北马里亚纳群岛，。";
        this[1][i++] = "美国俄亥俄州，侯子和毛毛，6/24/2011。";
        this[1][i++] = "美国俄克拉荷马州，12/22/2013。";
        this[1][i++] = "美国俄勒冈州，7/10/2015。";
        this[1][i++] = "美国宾夕法尼亚州，侯子和毛毛，7/3/2011。";
        this[1][i++] = "美国波多黎各，1/7/2015。";
        this[1][i++] = "美国罗得岛州，9/3/2011。";
        this[1][i++] = "美国南卡罗来纳州，12/30/2011。";
        this[1][i++] = "美国南达科他州，侯子和毛毛，7/1/2011。";
        this[1][i++] = "美国田纳西州，12/21/2011。";
        this[1][i++] = "美国得克萨斯州，12/24/2013。";
        this[1][i++] = "美国犹他州，12/30/2012。";
        this[1][i++] = "美国佛蒙特州，10/6/2013。";
//        this[1][i++] = "美属维尔京群岛，。";
        this[1][i++] = "美国弗吉尼亚州，侯子和毛毛，7/4/2011。";
        this[1][i++] = "美国华盛顿州，7/9/2015。";
        this[1][i++] = "美国西弗吉尼亚州，侯子和毛毛，6/24/2011。";
        this[1][i++] = "美国威斯康辛州，7/4/2014。";
        this[1][i++] = "美国怀俄明州，侯子和毛毛，6/26/2011。";
//        this[1][i++] = "加拿大阿尔伯塔省，。";
//        this[1][i++] = "加拿大不列颠哥伦比亚省省，。";
//        this[1][i++] = "加拿大曼尼托巴省省，。";
//        this[1][i++] = "加拿大新不伦瑞克省，。";
//        this[1][i++] = "加拿大纽芬兰与拉布拉多省省，。";
//        this[1][i++] = "加拿大西北地区，。";
//        this[1][i++] = "加拿大新斯科舍省省，。";
        this[1][i++] = "加拿大安大略省，9/1/2017。";
//        this[1][i++] = "加拿大爱德华王子岛省，。";
        this[1][i++] = "加拿大魁北克省，9/15/2016。";
//        this[1][i++] = "加拿大萨斯喀彻温省，。";
//        this[1][i++] = "加拿大努纳武特地区，。";
        this[1][i++] = "加拿大育空地区，7/12/2013。";
//        this[1][i++] = "墨西哥阿瓜斯卡连特斯州，。";
//        this[1][i++] = "墨西哥下加利福尼亚州，。";
//        this[1][i++] = "墨西哥南下加利福尼亚州，。";
//        this[1][i++] = "墨西哥坎佩切州，。";
//        this[1][i++] = "墨西哥恰帕斯州，。";
//        this[1][i++] = "墨西哥奇瓦瓦州，。";
//        this[1][i++] = "墨西哥科阿韦拉州，。";
//        this[1][i++] = "墨西哥科利马州，。";
//        this[1][i++] = "墨西哥杜兰戈州，。";
        this[1][i++] = "墨西哥瓜纳华托州瓜纳华托城，5/13/2019。";
//        this[1][i++] = "墨西哥格雷罗州，。";
//        this[1][i++] = "墨西哥伊达尔戈州，。";
//        this[1][i++] = "墨西哥哈利斯科州，。";
        this[1][i++] = "墨西哥墨西哥州特奥蒂瓦坎金字塔，5/11/2019。";
        this[1][i++] = "墨西哥墨西哥城宪法广场，5/16/2019。";
//        this[1][i++] = "墨西哥米却肯州，。";
//        this[1][i++] = "墨西哥莫雷洛斯州，。";
//        this[1][i++] = "墨西哥纳亚里特州，。";
//        this[1][i++] = "墨西哥新莱昂州，。";
//        this[1][i++] = "墨西哥瓦哈卡州，。";
//        this[1][i++] = "墨西哥普埃布拉州，。";
//        this[1][i++] = "墨西哥克雷塔罗州，。";
//        this[1][i++] = "墨西哥金塔纳罗奥州科巴玛雅遗址，。";
//        this[1][i++] = "墨西哥圣路易斯波托西州，。";
//        this[1][i++] = "墨西哥锡那罗亚州，。";
//        this[1][i++] = "墨西哥索诺拉州，。";
//        this[1][i++] = "墨西哥塔巴斯科州，。";
//        this[1][i++] = "墨西哥塔毛利帕斯州，。";
//        this[1][i++] = "墨西哥特拉斯卡拉州，。";
//        this[1][i++] = "墨西哥韦拉克鲁斯州，。";
//        this[1][i++] = "墨西哥尤卡坦州，。";
//        this[1][i++] = "墨西哥萨卡特卡斯州，。";
    }else{
        this[1][i++] = "Alabama, United States, 12/26/2011.";
        this[1][i++] = "Alaska, United States, 7/12/2013.";
//        this[1][i++] = "American Samoa,.";
        this[1][i++] = "Arizona, United States, 12/20/2012.";
        this[1][i++] = "Arkansas, United States, 12/22/2013.";
        this[1][i++] = "California, United States, 12/25/2012.";
        this[1][i++] = "Colorado, United States, 12/29/2012.";
        this[1][i++] = "Connecticut, United States, 12/25/2014.";
        this[1][i++] = "Delaware, United States, 1/27/2012.";
        this[1][i++] = "District of Columbia, United States, 12/3/2011.";
        this[1][i++] = "Florida, United States, 12/26/2011.";
        this[1][i++] = "Georgia, United States, 12/30/2011.";
//        this[1][i++] = "Guam, United States,.";
//        this[1][i++] = "Hawaii, United States,.";
        this[1][i++] = "Idaho, United States, Houzi and Maomao, 6/29/2011.";
        this[1][i++] = "Illinois, United States, Houzi and Maomao, 6/24/2011.";
        this[1][i++] = "Indiana, United States, Houzi and Maomao, 6/24/2011.";
        this[1][i++] = "Iowa, United States, 7/3/2014.";
        this[1][i++] = "Kansas, United States, 12/21/2013.";
        this[1][i++] = "Kentucky, United States, 8/15/2012.";
        this[1][i++] = "Louisiana, United States, 12/23/2011.";
        this[1][i++] = "Maine, United States, 10/5/2013.";
        this[1][i++] = "Maryland, United States, 10/8/2011.";
        this[1][i++] = "Massachusetts, United States, 9/3/2011.";
        this[1][i++] = "Michigan, United States, 7/5/2014.";
        this[1][i++] = "Minnesota, United States, Houzi and Maomao, 7/2/2011.";
        this[1][i++] = "Mississippi, United States, Yanmei and Maomao, 12/22/2011.";
        this[1][i++] = "Missouri, United States, Houzi and Maomao, 6/25/2011.";
        this[1][i++] = "Montana, United States, Houzi and Maomao, 6/29/2011.";
        this[1][i++] = "Nebraska, United States, Houzi and Maomao, 6/25/2011.";
        this[1][i++] = "Nevada, United States, 12/20/2012.";
        this[1][i++] = "New Hampshire, United States, 10/5/2013.";
        this[1][i++] = "New Jersey, United States, 1/27/2012.";
        this[1][i++] = "New Mexico, United States, 12/29/2012.";
        this[1][i++] = "New York, United States, 9/3/2011.";
        this[1][i++] = "North Carolina, United States, 12/31/2011.";
        this[1][i++] = "North Dakota, United States, 7/4/2014.";
//        this[1][i++] = "Northern Mariana Islands, United States,.";
        this[1][i++] = "Ohio, United States, Houzi and Maomao, 6/24/2011.";
        this[1][i++] = "Oklahoma, United States, 12/22/2013.";
        this[1][i++] = "Oregon, United States, 7/10/2015.";
        this[1][i++] = "Pennsylvania, United States, Houzi and Maomao, 7/3/2011.";
        this[1][i++] = "Puerto Rico, United States, 1/7/2015.";
        this[1][i++] = "Rhode Island, United States, 9/3/2011.";
        this[1][i++] = "South Carolina, United States, 12/30/2011.";
        this[1][i++] = "South Dakota, United States, Houzi and Maomao, 7/1/2011.";
        this[1][i++] = "Tennessee, United States, 12/21/2011.";
        this[1][i++] = "Texas, United States, 12/24/2013.";
        this[1][i++] = "Utah, United States, 12/30/2012.";
        this[1][i++] = "Vermont, United States, 10/6/2013.";
//        this[1][i++] = "Virgin Islands, United States,.";
        this[1][i++] = "Virginia, United States, Houzi and Maomao, 7/4/2011.";
        this[1][i++] = "Washington, United States, 7/9/2015.";
        this[1][i++] = "West Virginia, United States, Houzi and Maomao, 6/24/2011.";
        this[1][i++] = "Wisconsin, United States, 7/4/2014.";
        this[1][i++] = "Wyoming, United States, Houzi and Maomao, 6/26/2011.";
//        this[1][i++] = "Alberta, Canada,.";
//        this[1][i++] = "British Columbia, Canada,.";
//        this[1][i++] = "Manitoba, Canada,.";
//        this[1][i++] = "New Brunswick, Canada,.";
//        this[1][i++] = "Newfoundland and Labrador, Canada,.";
//        this[1][i++] = "Northwest Territories, Canada,.";
//        this[1][i++] = "Nova Scotia, Canada,.";
//        this[1][i++] = "Nunavut, Canada,.";
        this[1][i++] = "Ontario, Canada, 9/1/2017.";
//        this[1][i++] = "Prince Edward Island, Canada,.";
        this[1][i++] = "Quebec, Canada, 9/15/2016.";
//        this[1][i++] = "Saskatchewan, Canada,.";
        this[1][i++] = "Yukon Territory, Canada, 7/12/2013.";
//        this[1][i++] = "Aguascalientes, Mexico, .";
//        this[1][i++] = "Baja California, Mexico, .";
//        this[1][i++] = "Baja California Sur, Mexico, .";
//        this[1][i++] = "Campeche, Mexico, .";
//        this[1][i++] = "Chiapas, Mexico, .";
//        this[1][i++] = "Chihuahua, Mexico, .";
//        this[1][i++] = "Coahuila, Mexico, .";
//        this[1][i++] = "Colima, Mexico, .";
//        this[1][i++] = "Durango, Mexico, .";
        this[1][i++] = "Guanajuato City, Guanajuato, Mexico, 5/13/2019.";
//        this[1][i++] = "Guerrero, Mexico, .";
//        this[1][i++] = "Hidalgo, Mexico, .";
//        this[1][i++] = "Jalisco, Mexico, .";
        this[1][i++] = "Teotihuacan, México, Mexico, 5/11/2019.";
        this[1][i++] = "Zocalo, Mexico City, Mexico, 5/16/2019.";
//        this[1][i++] = "Michoacán, Mexico, .";
//        this[1][i++] = "Morelos, Mexico, .";
//        this[1][i++] = "Nayarit, Mexico, .";
//        this[1][i++] = "Nuevo León, Mexico, .";
//        this[1][i++] = "Oaxaca, Mexico, .";
//        this[1][i++] = "Puebla, Mexico, .";
//        this[1][i++] = "Querétaro, Mexico, .";
//        this[1][i++] = "Coba Ruins, Quintana Roo, Mexico, .";
//        this[1][i++] = "San Luis Potosí, Mexico, .";
//        this[1][i++] = "Sinaloa, Mexico, .";
//        this[1][i++] = "Sonora, Mexico, .";
//        this[1][i++] = "Tabasco, Mexico, .";
//        this[1][i++] = "Tamaulipas, Mexico, .";
//        this[1][i++] = "Tlaxcala, Mexico, .";
//        this[1][i++] = "Veracruz, Mexico, .";
//        this[1][i++] = "Yucatán, Mexico, .";
//        this[1][i++] = "Zacatecas, Mexico, .";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
