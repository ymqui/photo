<!--
var title      = (["Travelling around the world","环游世界"])[cn_ind];
var dir        = maindir+"pics/world/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
homeurl        = homeurl+"showphoto.html?qiuqiu";
var pagelist   = [["1812costarica","12/2018 Trip to "+coltext("Costa Rica"),"12/2018 游"+coltext("哥斯达黎加")],["1904dcmuseum","4/2019 Visiting the Smithonian Museums, "+coltext("USA"),"4/2019 "+coltext("美国")+"华盛顿特区参观博物馆"],
                  ["1905mexico","5/2019 Vacationing in "+coltext("Mexico"),"5/2019 "+coltext("墨西哥")+"度假"], ["2208canada","8/2022 Trip to "+coltext("Canada"),"8/2022 "+coltext("加拿大")+"之行"]];

document.title = title;

function coltext(text,col){
    if(typeof col=== 'undefined'){col="#44BBFF";}
    return '<font color="'+col+'">'+text+'</font>'; 
} 

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    var i = 0;    
    this[0][i]    = "20181204_CostaRica";
    this[1][i++]  = pagelink("1812costarica",(["Arenal Volcano, Alajuela Province, Costa Rica","哥斯达黎加阿拉胡埃拉省阿雷纳火山"])[cn_ind]);
    this[0][i]    = "20190420_USA";
    this[1][i++]  = pagelink("1904dcmuseum",(["National Mall, Washington DC, United States","美国华盛顿特区国家广场"])[cn_ind]);
    this[0][i]    = "20190511_Mexico";
    this[1][i++]  = pagelink("1905mexico",(["Teotihucan Pyramid of the Sun, Mexico","墨西哥特奥蒂瓦坎古城太阳金字塔"])[cn_ind]);
    this[0][i]    = "20220826_Canada";
    this[1][i++]  = pagelink("2208canada",(["Niagara Falls, Ontario, Canada","加拿大安大略省尼亚加拉大瀑布"])[cn_ind]);

    adddate(this);
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
