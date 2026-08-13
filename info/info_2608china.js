<!--
var info_url   = "";
var title      = (["Trip to China","中国之行"])[cn_ind];
var dir        = maindir+"pics/2608china/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var makeface   = new Array();
var url        = "";
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]    = "20260804_001_IAD";
    this[1][i++]  = (["Reading while waiting at Washington Dulles International Airport for the flight to Seoul","在华盛顿杜勒斯国际机场等候飞往首尔的航班"])[cn_ind];
    this[0][i]    = "20260805_002_ICN";
    this[1][i++]  = (["Having dinner during a layover at Incheon International Airport in Korea","在韩国仁川国际机场转机期间吃晚餐"])[cn_ind];
    this[0][i]    = "20260805_003_ICN";
    this[1][i++]  = (["Having dinner during a layover at Incheon International Airport in Korea","在韩国仁川国际机场转机期间吃晚餐"])[cn_ind];
    this[0][i]    = "20260805_004_ICN";
    this[1][i++]  = (["Having dinner during a layover at Incheon International Airport in Korea","在韩国仁川国际机场转机期间吃晚餐"])[cn_ind];
    this[0][i]    = "20260806_005_ICN";
    this[1][i++]  = (["Eating breakfast during a layover at Incheon International Airport in Korea","在韩国仁川国际机场转机期间吃早餐"])[cn_ind];
    this[0][i]    = ["20260809_006_Longyan","20260809_007_Longyan"];
    this[1][i++]  = (["Playing a claw machine in Longyan, Fujian","在福建龙岩玩抓娃娃机"])[cn_ind];
    this[0][i]    = ["20260810_008_Jiangshan","20260810_009_Jiangshan"];
    this[1][i++]  = (["Enjoying Mei Cai Kou Rou (steamed pork belly with preserved mustard greens) cooked by Grandpa in Jiangshan, Zhejiang","在浙江江山吃外公做的梅菜扣肉"])[cn_ind];
    this[0][i]    = "20260810_010_Jiangshan";
    this[1][i++]  = (["Meeting Mommy's middle school teacher in Jiangshan, Zhejiang","在浙江江山和妈妈的初中老师见面"])[cn_ind];
    this[0][i]    = "20260810_011_Jiangshan";
    this[1][i++]  = (["Meeting Mommy's middle school classmates in Jiangshan, Zhejiang","在浙江江山和妈妈的初中同学见面"])[cn_ind];
    this[0][i]    = "20260810_012_Jiangshan";
    this[1][i++]  = (["At Grandparents' house in Jiangshan, Zhejiang","在浙江江山的外公外婆家"])[cn_ind];
    this[0][i]    = "20260811_013_Jiangshan";
    this[1][i++]  = (["Meeting Mommy's childhood friend at Grandparents' house in Jiangshan, Zhejiang","在浙江江山的外公外婆家见到妈妈的儿时好友"])[cn_ind];
    this[0][i]    = "20260811_014_Jiangshan";
    this[1][i++]  = (["Helping with the laundary at Grandparents' house in Jiangshan, Zhejiang","在浙江江山的外公外婆家帮忙挂衣服"])[cn_ind];
    this[0][i]    = "20260812_015_Jiangshan";
    this[1][i++]  = (["Biting a piece of pear out of Grandpa's hand in Jiangshan, Zhejiang","在浙江江山吃外公手里的梨"])[cn_ind];
    this[0][i]    = "20260812_016_Quzhou";
    this[1][i++]  = (["Visiting Shui Ting Men in Quzhou, Zhejiang","游浙江衢州水亭门"])[cn_ind];
    this[0][i]    = ["20260812_017_Quzhou","20260812_018_Quzhou"];
    this[1][i++]  = (["Visiting the Shui Ting Men historic art district in Quzhou, Zhejiang","游浙江衢州水亭门历史文化街区"])[cn_ind];
    this[0][i]    = ["20260812_019_Quzhou","20260812_020_Quzhou"];
    this[1][i++]  = (["Taking part in hands-on activity at a craft store at Shui Ting Men historic art district in Quzhou, Zhejiang","在浙江衢州水亭门历史文化街区的一家手工艺品店参与手工制作活动"])[cn_ind];
    this[0][i]    = "20260812_021_Quzhou";
    this[1][i++]  = (["Taking part in hands-on activity at a craft store at Shui Ting Men historic art district in Quzhou, Zhejiang","在浙江衢州水亭门历史文化街区的一家手工艺品店参与手工制作活动"])[cn_ind];
    this[0][i]    = "20260812_022_Quzhou";
    this[1][i++]  = (["Taking part in hands-on activity at a craft store at Shui Ting Men historic art district in Quzhou, Zhejiang","在浙江衢州水亭门历史文化街区的一家手工艺品店参与手工制作活动"])[cn_ind];
    this[0][i]    = "20260812_023_Quzhou";
    this[1][i++]  = (["Swimming in the hotel swimming pool in Quzhou, Zhejiang","在浙江衢州的酒店泳池游泳"])[cn_ind];
    this[0][i]    = "20260812_024_Quzhou";
    this[1][i++]  = (["Meeting niece Eva in Quzhou, Zhejiang","在浙江衢州和侄女果冻见面"])[cn_ind];
    this[0][i]    = "20260813_025_Jiangshan";
    this[1][i++]  = (["Hugging a Labubu given by cousin at Grandparents' house in Jiangshan, Zhejiang","在浙江江山的外公外婆家抱着表哥送的Labubu"])[cn_ind];
    this[0][i]    = "20260813_026_Jiangshan";
    this[1][i++]  = (["At Grandparents' house in Jiangshan, Zhejiang","在浙江江山的外公外婆家"])[cn_ind];

    adddate(this);
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
