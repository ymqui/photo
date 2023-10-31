<!--
var info_url   = "https://www2.montgomeryschoolsmd.org/schools/fallsmeades/";
var title      = (["Nathan at Fallsmead Elementary School","球球在Fallsmead小学的照片"])[cn_ind];
var dir        = maindir+"pics/2023fallsmead/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();
var url        = "";
homeurl        = homeurl+"showphoto.html?qiuqiu";
var pagelist   = [["2310parade","10/2023 Halloween Parade","10/2023 万圣节游行"]];
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
//    makeface[j++] = i;
    this[0][i]    = "20230828_0";
    this[1][i++]  = (["Walking to school","开学第一天走路去上学"])[cn_ind];
    this[0][i]    = "20230828_1";
    this[1][i++]  = (["The first day of kindergarten at Fallsmead","在Fallsmead小学上幼儿园的第一天"])[cn_ind];
    this[0][i]    = "20231019_064";
    this[1][i++]  = (["On the way home","放学回家的路上"])[cn_ind];
    this[0][i]    = "20231023_1";
    this[1][i++]  = (["Class picture","班级照片"])[cn_ind];
    this[0][i]    = ["2310parade/2310parade_3","2310parade/2310parade_9","20231023"];
    this[1][i++]  = (["Halloween parade","万圣节游行"])[cn_ind];

    adddate(this);
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
