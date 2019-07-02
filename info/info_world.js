<!--
var cn_ind     = window.usechinese?1:0;
var title      = (["Travelling around the world","环游世界"])[cn_ind];
var dir        = maindir+"pics/world/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    var i = 0;    
    this[0][i]    = "20181204_CostaRica";
    this[1][i++]  = (["Arenal Volcano, Costa Rica","哥斯达黎加阿雷纳火山"])[cn_ind];
    this[0][i]    = "20190420_USA";
    this[1][i++]  = (["National Mall, United States","美国国家广场"])[cn_ind];
    this[0][i]    = "20190511_Mexico";
    this[1][i++]  = (["Teotihucan Pyramid of the Sun, Mexico","墨西哥特奥蒂瓦坎古城太阳金字塔"])[cn_ind];

    for (var i=0;i<this[0].length;i++){
        this[1][i] = getdate(this[0][i],this[1][i]);
    }   
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
