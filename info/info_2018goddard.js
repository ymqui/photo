<!--
var info_url   = "";
var title      = "Nathan's Photos at Goddard School";
var dir        = maindir+"pics/2018goddard/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();
 
if(window.usechinese){
    title      = "球球在托儿所的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
 //   makeface[j++] = i;
    this[0][i]    = "20180618_1";
    this[1][i++]  = "First day at the daycare";
    this[0][i]    = "20180619_1";
    this[1][i++]  = "Painting with a pig";
    this[0][i]    = "20180620_1";
    this[1][i++]  = "Pony ride";
    this[0][i]    = "20180620_2";
    this[1][i++]  = "Looking at pictures of horses";
    this[0][i]    = "20180621_1";
    this[1][i++]  = "Holding two animal toys";
    this[0][i]    = "20180622_1";
    this[1][i++]  = "Fitting the puzzle";
    this[0][i]    = "20180622_2";
    this[1][i++]  = "Reading";
    this[0][i]    = "20180625_1";
    this[1][i++]  = "Painting with bare hands";


    if(window.usechinese){
        i = 0;
        this[1][i++] = "托儿所第一天";
        this[1][i++] = "用小猪画画";
        this[1][i++] = "骑小马"
        this[1][i++] = "看马图"
        this[1][i++] = "同时拿着两只动物玩具"
        this[1][i++] = "拼图玩具"
        this[1][i++] = "看书"
        this[1][i++] = "涂手画画"
    }

    for (var i=0;i<this[0].length;i++){
        this[1][i] = this[1][i]+getdate(this[0][i]);
    }    
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->