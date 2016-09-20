﻿<!--
var info_url   = "http://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States";
var title      = "Welcome to the USA";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/usstates/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "ComingToAmerica.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "环游美国";
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
    i = 0;
    if(window.usechinese){
        this[1][i++] = "阿拉巴马州，12/26/2011。";
        this[1][i++] = "阿拉斯加州，7/12/2013。";
//        this[1][i++] = "美属萨摩亚，。";
        this[1][i++] = "亚利桑那州，12/20/2012。";
        this[1][i++] = "阿肯色州，12/22/2013。";
        this[1][i++] = "加利福尼亚州，12/25/2012。";
        this[1][i++] = "科罗拉多州，12/29/2012。";
        this[1][i++] = "康涅狄格州，12/25/2014。";
        this[1][i++] = "特拉华州，1/27/2012。";
        this[1][i++] = "哥伦比亚特区，12/3/2011。";
        this[1][i++] = "佛罗里达州，12/26/2011。";
        this[1][i++] = "乔治亚州，12/30/2011。";
//        this[1][i++] = "关岛，。";
//        this[1][i++] = "夏威夷州，。";
        this[1][i++] = "爱达荷州，侯子和毛毛，6/29/2011。";
        this[1][i++] = "伊利诺伊州，侯子和毛毛，6/24/2011。";
        this[1][i++] = "印第安纳州，侯子和毛毛，6/24/2011。";
        this[1][i++] = "爱荷华州，7/3/2014。";
        this[1][i++] = "堪萨斯州，12/21/2013。";
        this[1][i++] = "肯塔基州，8/15/2012。";
        this[1][i++] = "路易斯安那州，12/23/2011。";
        this[1][i++] = "缅因州，10/5/2013。";
        this[1][i++] = "马里兰州，10/8/2011。";
        this[1][i++] = "马萨诸塞州，9/3/2011。";
        this[1][i++] = "密西根州，7/5/2014。";
        this[1][i++] = "明尼苏达州，侯子和毛毛，7/2/2011。";
        this[1][i++] = "密西西比州，艳梅和毛毛，12/22/2011。";
        this[1][i++] = "密苏里州，侯子和毛毛，6/25/2011。";
        this[1][i++] = "蒙大拿州，侯子和毛毛，6/29/2011。";
        this[1][i++] = "内布拉斯加州，侯子和毛毛，6/25/2011。";
        this[1][i++] = "内华达州，12/20/2012。";
        this[1][i++] = "新罕布什尔州，10/5/2013。";
        this[1][i++] = "新泽西州，1/27/2012。";
        this[1][i++] = "新墨西哥州，12/29/2012。";
        this[1][i++] = "纽约州，9/3/2011。";
        this[1][i++] = "北卡罗来纳州，12/31/2011。";
        this[1][i++] = "北达科他州，7/4/2014。";
//        this[1][i++] = "北马里亚纳群岛，。";
        this[1][i++] = "俄亥俄州，侯子和毛毛，6/24/2011。";
        this[1][i++] = "俄克拉荷马州，12/22/2013。";
        this[1][i++] = "俄勒冈州，7/10/2015。";
        this[1][i++] = "宾夕法尼亚州，侯子和毛毛，7/3/2011。";
        this[1][i++] = "波多黎各，1/7/2015。";
        this[1][i++] = "罗得岛州，9/3/2011。";
        this[1][i++] = "南卡罗来纳州，12/30/2011。";
        this[1][i++] = "南达科他州，侯子和毛毛，7/1/2011。";
        this[1][i++] = "田纳西州，12/21/2011。";
        this[1][i++] = "得克萨斯州，12/24/2013。";
        this[1][i++] = "犹他州，12/30/2012。";
        this[1][i++] = "佛蒙特州，10/6/2013。";
//        this[1][i++] = "美属维尔京群岛，。";
        this[1][i++] = "弗吉尼亚州，侯子和毛毛，7/4/2011。";
        this[1][i++] = "华盛顿州，7/9/2015。";
        this[1][i++] = "西弗吉尼亚州，侯子和毛毛，6/24/2011。";
        this[1][i++] = "威斯康辛州，7/4/2014。";
        this[1][i++] = "怀俄明州，侯子和毛毛，6/26/2011。";
    }else{
        this[1][i++] = "Alabama, 12/26/2011.";
        this[1][i++] = "Alaska, 7/12/2013.";
//        this[1][i++] = "American Samoa,.";
        this[1][i++] = "Arizona, 12/20/2012.";
        this[1][i++] = "Arkansas, 12/22/2013.";
        this[1][i++] = "California, 12/25/2012.";
        this[1][i++] = "Colorado, 12/29/2012.";
        this[1][i++] = "Connecticut, 12/25/2014.";
        this[1][i++] = "Delaware, 1/27/2012.";
        this[1][i++] = "District of Columbia, 12/3/2011.";
        this[1][i++] = "Florida, 12/26/2011.";
        this[1][i++] = "Georgia, 12/30/2011.";
//        this[1][i++] = "Guam,.";
//        this[1][i++] = "Hawaii,.";
        this[1][i++] = "Idaho, Houzi and Maomao, 6/29/2011.";
        this[1][i++] = "Illinois, Houzi and Maomao, 6/24/2011.";
        this[1][i++] = "Indiana, Houzi and Maomao, 6/24/2011.";
        this[1][i++] = "Iowa, 7/3/2014.";
        this[1][i++] = "Kansas, 12/21/2013.";
        this[1][i++] = "Kentucky, 8/15/2012.";
        this[1][i++] = "Louisiana, 12/23/2011.";
        this[1][i++] = "Maine, 10/5/2013.";
        this[1][i++] = "Maryland, 10/8/2011.";
        this[1][i++] = "Massachusetts, 9/3/2011.";
        this[1][i++] = "Michigan, 7/5/2014.";
        this[1][i++] = "Minnesota, Houzi and Maomao, 7/2/2011.";
        this[1][i++] = "Mississippi, Yanmei and Maomao, 12/22/2011.";
        this[1][i++] = "Missouri, Houzi and Maomao, 6/25/2011.";
        this[1][i++] = "Montana, Houzi and Maomao, 6/29/2011.";
        this[1][i++] = "Nebraska, Houzi and Maomao, 6/25/2011.";
        this[1][i++] = "Nevada, 12/20/2012.";
        this[1][i++] = "New Hampshire, 10/5/2013.";
        this[1][i++] = "New Jersey, 1/27/2012.";
        this[1][i++] = "New Mexico, 12/29/2012.";
        this[1][i++] = "New York, 9/3/2011.";
        this[1][i++] = "North Carolina, 12/31/2011.";
        this[1][i++] = "North Dakota, 7/4/2014.";
//        this[1][i++] = "Northern Mariana Islands,.";
        this[1][i++] = "Ohio, Houzi and Maomao, 6/24/2011.";
        this[1][i++] = "Oklahoma, 12/22/2013.";
        this[1][i++] = "Oregon, 7/10/2015.";
        this[1][i++] = "Pennsylvania, Houzi and Maomao, 7/3/2011.";
        this[1][i++] = "Puerto Rico, 1/7/2015.";
        this[1][i++] = "Rhode Island, 9/3/2011.";
        this[1][i++] = "South Carolina, 12/30/2011.";
        this[1][i++] = "South Dakota, Houzi and Maomao, 7/1/2011.";
        this[1][i++] = "Tennessee, 12/21/2011.";
        this[1][i++] = "Texas, 12/24/2013.";
        this[1][i++] = "Utah, 12/30/2012.";
        this[1][i++] = "Vermont, 10/6/2013.";
//        this[1][i++] = "Virgin Islands,.";
        this[1][i++] = "Virginia, Houzi and Maomao, 7/4/2011.";
        this[1][i++] = "Washington, 7/9/2015.";
        this[1][i++] = "West Virginia, Houzi and Maomao, 6/24/2011.";
        this[1][i++] = "Wisconsin, 7/4/2014.";
        this[1][i++] = "Wyoming, Houzi and Maomao, 6/26/2011.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
