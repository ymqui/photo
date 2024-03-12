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
    this[0][i]    = "20230828_0";
    this[1][i++]  = (["Walking to school","开学第一天走路去上学"])[cn_ind];
    this[0][i]    = "20230828_1";
    this[1][i++]  = (["The first day of kindergarten at Fallsmead","在Fallsmead小学上幼儿园的第一天"])[cn_ind];
    this[0][i]    = "20231019_064";
    this[1][i++]  = (["On the way home","放学回家的路上"])[cn_ind];
    this[0][i]    = "20231023_1";
    this[1][i++]  = (["Class picture","班级照片"])[cn_ind];
    this[0][i]    = ["2310parade/2310parade_3","2310parade/2310parade_9","20231031"];
    this[1][i++]  = pagelink("2310parade",(["Halloween parade","万圣节游行"])[cn_ind]);
    this[0][i]    = "20240110_001";
    this[1][i++]  = (["Picked up by Daddy today","今天爸爸来接球球"])[cn_ind];
    this[0][i]    = "20240111";
    this[1][i++]  = (["Perfect score","满分成绩单"])[cn_ind];
    this[0][i]    = ["20240124_016","20240124_017"];
    this[1][i++]  = (["Picked up by Mommy after school","放学妈妈来接球球"])[cn_ind];
    this[0][i]    = "20240128";
    this[1][i++]  = (["Nathan's 100th day project: a Chinese dragon decorated with 100 sequins","球球庆祝幼儿园第100天的作业：用100个亮片装饰的中国龙"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20240215_1";
    this[1][i++]  = (["100 is special","100很特别: 100年后我希望我能看视频； 如果我有100美元，我会买玩具"])[cn_ind];
    this[0][i]    = "20240223";
    this[1][i++]  = (["Art project: a colorful hat that also works as a phone","在学校制作的艺术帽子"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20240311_1";
    this[1][i++]  = (["My plan to get ready for first grade math","我为一年级数学做好准备的计划: 爸爸是帮助我练习的人； 我练习的地方； 这是我做好准备上一年级"])[cn_ind];

    adddate(this);
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
