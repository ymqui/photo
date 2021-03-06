<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "";
var title      = (["Nathan Visiting Universities","球球逛大学"])[cn_ind];
var dir        = maindir+"pics/qiuqiu/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();

document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;

    this[0][i]    = "20200607_MDNavalAcademy";
    this[1][i++]  = (["US Naval Academy, Annapolis, Maryland, United States","美国海军学院，美国马里兰州安纳波利斯市"])[cn_ind];
    this[0][i]    = "20210306_002_JHU";
    this[1][i++]  = (["Johns Hopkins University, Baltimore, Maryland, United States","约翰·霍普金斯大学，美国马里兰州巴尔的摩市"])[cn_ind];
    
    for (var i=0;i<this[0].length;i++){
        if (this[0][i].constructor != Array){ 
           this[1][i] = getdate(this[0][i],this[1][i]);
        }else{
           this[1][i] = getdate(this[0][i][1],this[1][i]);
           this[0][i] = "../"+this[0][i][0];
        }
    }  
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->