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
var pagelist   = [["2310parade","10/2023 Halloween Parade","10/2023 万圣节游行"],["2410halloween","10/2024 Halloween Parade & Party","10/2024 万圣节游行和联欢会"]];
 
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
    this[0][i]    = "20240318";
    this[1][i++]  = (["Art project: clay bird nest","在学校用粘土捏的鸟巢"])[cn_ind];
    this[0][i]    = "20240408_1";
    this[1][i++]  = (["Watching solar eclipse after school","放学后看日食"])[cn_ind];
    this[0][i]    = ["20240408_2","20240408_3","20240408_4"];
    this[1][i++]  = (["Watching solar eclipse after school","放学后看日食"])[cn_ind];
    this[0][i]    = "20240410";
    this[1][i++]  = (["Painting a robin","一只旅鸫"])[cn_ind];
    this[0][i]    = ["20240414_1","20240414_2"];
    this[1][i++]  = (["Orienteering with friend Jason in Cabin John Regional Park","和朋友Jason在Cabin John公园参加定向越野活动"])[cn_ind];
    this[0][i]    = "20240415";
    this[1][i++]  = (["Walking to school","走路去上学"])[cn_ind];
    this[0][i]    = "20240416";
    var urltmp    = (['N_yAu7Jc6XQ','g_MZNn0vtC4'])[Math.round(Math.random())];
    this[1][i++]  = ([urllink(url=("https://youtube.com/shorts/"+urltmp+"?feature=share"),"Monster creation (YouTube Video)"),urllink(url,"球球画的恶魔(YouTube视频)")])[cn_ind];
    this[0][i]    = "20240422";
    this[1][i++]  = (["Riding scooter on asynchronous learning day","异步在家学习日骑滑板车"])[cn_ind];
    this[0][i]    = "20240428_1";
    this[1][i++]  = (["Orienteering with friend Jason in Rock Creek Park","和朋友Jason在岩溪公园参加定向越野活动"])[cn_ind];
    this[0][i]    = "20240428_2";
    this[1][i++]  = (["Orienteering in Rock Creek Park","在岩溪公园参加定向越野活动"])[cn_ind];
    this[0][i]    = "20240506";
    this[1][i++]  = ([urllink(url=("https://youtu.be/4UT84x5GyMM"),"Paper puppet made at school (Puppet show in YouTube Video)"),urllink(url,"在学校制作的纸偶(纸偶表演YouTube视频)")])[cn_ind];
    this[0][i]    = "20240516";
    this[1][i++]  = (["Field trip to the zoo","参观动物园"])[cn_ind];
    this[0][i]    = ["20240531_1","20240531_2"];
    this[1][i++]  = (["Playing basketball with Nathan W. at the end-of-year community celebration","在庆祝学年结束社区活动中和朋友Nathan W.一起打篮球"])[cn_ind];
    this[0][i]    = "20240607";
    this[1][i++]  = (["Mrs Donovan's kindergarten class photo taken during the end-of-year graduation party","庆祝学年结束联欢会中拍摄的Donovan老师的幼儿园班级照片"])[cn_ind];
    this[0][i]    = "20240919";
    this[1][i++]  = (["Mrs. Wasser telling parents about the 1st grade science curriculum at the back to school night","Wasser老师在返校之夜向家长讲述一年级的科学课程规划"])[cn_ind];
    this[0][i]    = "20241014";
    this[1][i++]  = (["Doctor Nathan holding his badge and a syringe pen","球球在学校当医生"])[cn_ind];
    this[0][i]    = ["2410halloween/2410halloween_4","2410halloween/2410halloween_13","20241031"];
    this[1][i++]  = pagelink("2410halloween",(["Halloween parade and party","万圣节游行和联欢会"])[cn_ind]);
    this[0][i]    = "20241031_1";
    this[1][i++]  = (["Fire evacuation during the Halloween party","火警疏散，大家在操场集合"])[cn_ind];
    this[0][i]    = "20241031_2";
    this[1][i++]  = (["Nathan is in the Kindness Garden","球球上了友善花园榜"])[cn_ind];
    this[0][i]    = "20241031_3";
    this[1][i++]  = (["Getting ready to go to the afterschool group music class","放学了，准备去参加课后音乐课"])[cn_ind];
    this[0][i]    = "20241111";
    this[1][i++]  = (["Math class by Mrs. Wasser","听Wasser老师上数学课"])[cn_ind];
    this[0][i]    = "20241202";
    this[1][i++]  = (["Preparing a poster about Chinese New Year for the family culture project","为学校做关于春节的海报"])[cn_ind];
    this[0][i]    = "20241207";
    this[1][i++]  = (["Celebrating Brandon's 7th birthday","庆祝同学Brandon的7岁生日"])[cn_ind];
    this[0][i]    = ["20250211_1","20250211_2"];
    this[1][i++]  = (["Picked up by Mommy after school on a snowy day","下雪天放学后妈妈来接球球回家"])[cn_ind];
    this[0][i]    = "20250403";
    this[1][i++]  = (["Mrs. Wasser's star student","当选为Wasser老师的明星学生"])[cn_ind];
    this[0][i]    = "20250423";
    this[1][i++]  = (["Shape party","班里举行形状派对"])[cn_ind];
    this[0][i]    = "20250517";
    this[1][i++]  = (["Playing with Jason at Fallsmead's 50th anniversary celebration","在Fallsmead小学50周年庆典上和朋友Jason一起玩"])[cn_ind];
    this[0][i]    = "20250610_1";
    this[1][i++]  = (["End-of-year party","学校年终联欢会"])[cn_ind];
    this[0][i]    = ["20250610_2","20250610_3"];
    this[1][i++]  = (["End-of-year party","学校年终联欢会"])[cn_ind];
    this[0][i]    = ["20250610_4","20250610_5"];
    this[1][i++]  = (["Mrs Wasser's 1st grade class photo taken during the end-of-year party","庆祝学年结束联欢会中拍摄的Wasser老师的一年级班级照片"])[cn_ind];

    adddate(this);
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
