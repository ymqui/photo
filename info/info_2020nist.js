<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "https://nist.gov/ccc";
var title      = (["Nathan at NIST Daycare","球球在NIST托儿所的照片"])[cn_ind];
var dir        = maindir+"pics/2020nist/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
    //makeface[j++] = i;
    this[0][i]    = "20201102_1";
    this[1][i++]  = (["Nathan was this happy all day","球球一整天都这么开心"])[cn_ind];
    this[0][i]    = "20201104_1";
    this[1][i++]  = (["Making a turkey","贴火鸡"])[cn_ind];
    this[0][i]    = "20201104_2";
    this[1][i++]  = (["Making a turkey","贴火鸡"])[cn_ind];
    this[0][i]    = "20201106_1";
    this[1][i++]  = (["Roller painting with corn on the cob","用玉米棒子画画"])[cn_ind];
    this[0][i]    = "20201110_1";
    this[1][i++]  = (["Going to the car wash","去洗车"])[cn_ind];
    this[0][i]    = "20201110_2";
    this[1][i++]  = (["Writing a thank you card to the veterans","给退伍军人写感谢卡(明天是退伍军人节)"])[cn_ind];
    this[0][i]    = "20201112_1";
    this[1][i++]  = (["Glueing cotton balls on the paper","把棉球贴在纸上"])[cn_ind];
    this[0][i]    = "20201112_2";
    this[1][i++]  = (["Pumpkin bubble","泡泡南瓜"])[cn_ind];
    this[0][i]    = "20201113_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20201116_1";
    this[1][i++]  = (["Playing on the climber","户外活动"])[cn_ind];
    this[0][i]    = "20201120_1";
    this[1][i++]  = (["Playing on the slide","户外活动"])[cn_ind];
    this[0][i]    = "20201123_1";
    this[1][i++]  = (["Drawing","画画"])[cn_ind];
    this[0][i]    = "20201123_2";
    this[1][i++]  = (["Watching dancing craneberries with Ms Joy","和Joy老师一起看蔓越莓在水中跳舞"])[cn_ind];
    this[0][i]    = "20201124_1";
    this[1][i++]  = (["Cutting out a Thanksgiving meal","剪出感恩节大餐图"])[cn_ind];
    this[0][i]    = "20201125_1";
    this[1][i++]  = (["Making butter","尝试做黄油"])[cn_ind];
    
    for (var i=0;i<this[0].length;i++){
        this[1][i] = getdate(this[0][i],this[1][i]);
    }    
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
