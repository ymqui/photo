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
    this[0][i]    = "20201202_1";
    this[1][i++]  = (["Drawing","画画"])[cn_ind];
    this[0][i]    = "20201203_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20201204_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20201204_2";
    this[1][i++]  = (["Decorating cookies","装点饼干"])[cn_ind];
    this[0][i]    = "20201207_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20201207_2";
    this[1][i++]  = (["Wearing the crown for good behaviors","今天表现出色得以戴上皇冠"])[cn_ind];
    this[0][i]    = "20201207_3";
    this[1][i++]  = (["Science experiment","做科学实验"])[cn_ind];
    this[0][i]    = "20201208_1";
    this[1][i++]  = (["Making menorah candles","贴七枝烛台的纸蜡烛"])[cn_ind];
    this[0][i]    = "20201210_1";
    this[1][i++]  = (["Making marshmallow dreidel","制作棉花糖陀螺"])[cn_ind];
    this[0][i]    = "20201211_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20201215_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20201215_2";
    this[1][i++]  = (["Painting","画画"])[cn_ind];
    this[0][i]    = "20201216_1";
    this[1][i++]  = (["Playing with shaving cream in a snow day","下雪天玩剃须膏堆成的雪"])[cn_ind];
    this[0][i]    = "20201216_2";
    this[1][i++]  = (["Playing with shaving cream in a snow day","下雪天玩剃须膏堆成的雪"])[cn_ind];
    this[0][i]    = "20201216_3";
    this[1][i++]  = (["Playing with the real snow","玩真正的雪"])[cn_ind];
    this[0][i]    = "20201218_1";
    this[1][i++]  = (["Stringing bells into a necklace","串铃铛项链"])[cn_ind];
    this[0][i]    = "20201221_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20201222_1";
    this[1][i++]  = (["Decorating the candy cane","装饰拐棍糖"])[cn_ind];
    
    for (var i=0;i<this[0].length;i++){
        this[1][i] = getdate(this[0][i],this[1][i]);
    }    
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
