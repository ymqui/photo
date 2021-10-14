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
    this[0][i]    = ["2108vacation/2108vacation_2","20210807"];
    this[1][i++]  = (["Carnegie Mellon University, Pittsburgh, Pennsylvania, United States","卡内基梅隆大学，美国宾夕法尼亚州匹兹堡"])[cn_ind];
    this[0][i]    = ["2108vacation/2108vacation_39","2108vacation/2108vacation_38","20210812"];
    this[1][i++]  = (["Massachusetts Institute of Technology, Cambridge, Massachusetts, United States","麻省理工学院，美国马萨诸塞州剑桥市"])[cn_ind];
    this[0][i]    = ["2108vacation/2108vacation_40","20210812"];
    this[1][i++]  = (["Harvard University, Cambridge, Massachusetts, United States","哈佛大学，美国马萨诸塞州剑桥市"])[cn_ind];
    this[0][i]    = ["2108vacation/2108vacation_44","2108vacation/2108vacation_42","20210813"];
    this[1][i++]  = (["Princeton University, Princeton, New Jersey, United States","普林斯顿大学，美国新泽西州普林斯顿"])[cn_ind];

    for (var i=0;i<this[0].length;i++){
        if (this[0][i].constructor != Array){ 
           this[1][i] = getdate(this[0][i],this[1][i]);
        }else{
           if (/^\d+$/.test(this[0][i][this[0][i].length-1])){
              this[1][i] = getdate(this[0][i][this[0][i].length-1],this[1][i]);
              this[0][i].splice(-1);
              for (var j=0;j<this[0][i].length;j++){
                  this[0][i][j] = "../"+this[0][i][j];
              }
              if (this[0][i].length==1){
                  this[0][i] = this[0][i][0];
              }
           }else{
              this[1][i] = getdate(this[0][i][0],this[1][i]);
           }
        }
    }  
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->