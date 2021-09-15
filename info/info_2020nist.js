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
    this[0][i]    = "20201223_1";
    this[1][i++]  = (["Playing with cream","玩奶油"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20201228_1";
    this[1][i++]  = (["Teacher's notes","老师今天的观察记录"])[cn_ind];
    this[0][i]    = "20201230_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210104_1";
    this[1][i++]  = (["Science experiment","做科学实验"])[cn_ind];
    this[0][i]    = "20210104_2";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210105_1";
    this[1][i++]  = (["Playing with ice","玩冰"])[cn_ind];
    this[0][i]    = "20210105_2";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210106_1";
    this[1][i++]  = (["Making a snowman","做雪人"])[cn_ind];
    this[0][i]    = "20210107_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210107_2";
    this[1][i++]  = (["Playing with ice","玩冰"])[cn_ind];
    this[0][i]    = "20210108_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210108_2";
    this[1][i++]  = (["Making Oreo Truffles","做奥利奥松露"])[cn_ind];
    this[0][i]    = "20210108_3";
    this[1][i++]  = (["Making Oreo Truffles","做奥利奥松露"])[cn_ind];
    this[0][i]    = "20210112_1";
    this[1][i++]  = (["Tracing letter B","描字母B"])[cn_ind];
    this[0][i]    = "20210113_1";
    this[1][i++]  = (["Finger painting","徒手画画"])[cn_ind];
    this[0][i]    = "20210114_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20210114_2";
    this[1][i++]  = (["Teacher's notes","老师今天的观察记录"])[cn_ind];
    this[0][i]    = "20210119_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210119_2";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210122_1";
    this[1][i++]  = (["Helping with the calendar and weather","帮忙调整日历和天气"])[cn_ind];
    this[0][i]    = "20210125_1";
    this[1][i++]  = (["Making paper snowflakes","做纸片雪花"])[cn_ind];
    this[0][i]    = "20210126_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210126_2";
    this[1][i++]  = (["Spelling out the name","用字母拼出名字"])[cn_ind];
    this[0][i]    = "20210128_1";
    this[1][i++]  = (["Making snowflakes with pretzel sticks and marshmallows","用棉花糖和椒盐脆饼棍制作雪花"])[cn_ind];
    this[0][i]    = "20210128_2";
    this[1][i++]  = (["Creating shapes with sugar","用糖抹出形状"])[cn_ind];
    this[0][i]    = "20210129_1";
    this[1][i++]  = (["Making paper snowflakes","做纸片雪花"])[cn_ind];
    this[0][i]    = "20210201_1";
    this[1][i++]  = (["Helping prepare the morning snack","帮忙准备早点"])[cn_ind];
    this[0][i]    = "20210203_1";
    this[1][i++]  = (["Playing with snow","玩雪"])[cn_ind];
    this[0][i]    = "20210203_2";
    this[1][i++]  = (["Playing with snow","玩雪"])[cn_ind];
    this[0][i]    = "20210203_3";
    this[1][i++]  = (["Playing with snow","玩雪"])[cn_ind];
    this[0][i]    = "20210204_1";
    this[1][i++]  = (["Painting with a golf ball","用高尔夫球画画"])[cn_ind];
    this[0][i]    = "20210208_1";
    this[1][i++]  = (["Making an art project","制作贴画"])[cn_ind];
    this[0][i]    = "20210209_1";
    this[1][i++]  = (["Early construction crew with Roman","一早就和同学Roman在施工现场"])[cn_ind];
    this[0][i]    = "20210209_2";
    this[1][i++]  = (["Lining up candies","排糖果"])[cn_ind];
    this[0][i]    = "20210210_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210210_2";
    this[1][i++]  = (["Ms Sally is preparing for today's experiment","Sally老师在为今天的实验做准备"])[cn_ind];
    this[0][i]    = "20210211_1";
    this[1][i++]  = (["Lanterns decorating the hallway to celebrate the Chinese New Year","走廊挂满灯笼来庆祝农历新年"])[cn_ind];
    this[0][i]    = "20210216_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210219_1";
    this[1][i++]  = (["Writing down the name on the first page of the journal","在日记首页上写下名字"])[cn_ind];
    this[0][i]    = "20210219_2";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210222_1";
    this[1][i++]  = (["Virtual school visit","网上学校参观。球球坐在角落里听Sally老师讲故事"])[cn_ind];
    this[0][i]    = "20210222_2";
    this[1][i++]  = (["Virtual school visit","网上学校参观。球球和同学Ellie跟Joy老师学刷牙"])[cn_ind];
    this[0][i]    = "20210222_3";
    this[1][i++]  = (["Virtual school visit","网上学校参观。球球和同学Ellie帮Joy老师擦桌子"])[cn_ind];
    this[0][i]    = "20210222_4";
    this[1][i++]  = (["Virtual school visit","网上学校参观。球球和同学Ellie站在一起"])[cn_ind];
    this[0][i]    = "20210223_1";
    this[1][i++]  = (["Making toothpaste squishy bag","玩牙膏湿软包"])[cn_ind];
    this[0][i]    = "20210225_1";
    this[1][i++]  = (["Brushing an egg","用牙刷刷鸡蛋"])[cn_ind];
    this[0][i]    = "20210225_2";
    this[1][i++]  = (["Gluing tooth cavity","贴黑纸片模拟蛀牙"])[cn_ind];
    this[0][i]    = "20210225_3";
    this[1][i++]  = (["Tracing the word cavity","描英文单词蛀牙"])[cn_ind];
    this[0][i]    = "20210301_1";
    this[1][i++]  = (["Writing the word foot","写英文单词脚"])[cn_ind];
    this[0][i]    = "20210301_2";
    this[1][i++]  = (["Painting with foot with the help of Ms Joy","在Joy老师的帮助下用脚画画"])[cn_ind];
    this[0][i]    = "20210302_1";
    this[1][i++]  = (["Cracking an egg to make the birthday cake for Dr. Seuss","打鸡蛋准备做苏斯博士的生日蛋糕"])[cn_ind];
    this[0][i]    = "20210302_2";
    this[1][i++]  = (["Playing with playdough and cookie cutter","玩橡皮泥"])[cn_ind];
    this[0][i]    = "20210303_1";
    this[1][i++]  = (["Eating Dr. Seuss's birthday cake","吃苏斯博士的生日蛋糕"])[cn_ind];
    this[0][i]    = "20210308_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210308_2";
    this[1][i++]  = (["Tracing letter J with dots","在字母J上描点"])[cn_ind];
    this[0][i]    = "20210312_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210315_1";
    this[1][i++]  = (["Drawing a face","画画"])[cn_ind];
    this[0][i]    = "20210315_2";
    this[1][i++]  = (["Spanish enrichment class with Ms Nadya","Nadya老师给大家上西班牙语课"])[cn_ind];
    this[0][i]    = "20210315_3";
    this[1][i++]  = (["Spanish enrichment class with Ms Nadya","Nadya老师给大家上西班牙语课"])[cn_ind];
    this[0][i]    = "20210315_4";
    this[1][i++]  = (["Spanish enrichment class with Ms Nadya","Nadya老师给大家上西班牙语课"])[cn_ind];
    this[0][i]    = "20210316_1";
    this[1][i++]  = (["Preparing for the leprechaun (tomorrow is St Patrick's day)","为爱尔兰小矮妖的到来做准备(明天是圣帕特里克节)"])[cn_ind];
    this[0][i]    = "20210316_2";
    this[1][i++]  = (["Preparing for the leprechaun (tomorrow is St Patrick's day)","为爱尔兰小矮妖的到来做准备(明天是圣帕特里克节)"])[cn_ind];
    this[0][i]    = "20210316_3";
    this[1][i++]  = (["Balancing a bean bag on a racket","在球拍上平衡豆袋"])[cn_ind];
    this[0][i]    = "20210317_1";
    this[1][i++]  = (["Making a pot of gold","做一坛金币"])[cn_ind];
    this[0][i]    = "20210318_1";
    this[1][i++]  = (["Gluing a paper flower","贴纸花"])[cn_ind];
    this[0][i]    = "20210318_2";
    this[1][i++]  = (["Gluing a paper flower","贴纸花"])[cn_ind];
    this[0][i]    = "20210318_3";
    this[1][i++]  = (["Matching shapes","匹配形状"])[cn_ind];
    this[0][i]    = "20210319_1";
    this[1][i++]  = (["Music class with Ms Dinah","Dinah老师给大家上音乐课"])[cn_ind];
    this[0][i]    = "20210319_2";
    this[1][i++]  = (["Music class with Ms Dinah","Dinah老师给大家上音乐课"])[cn_ind];
    this[0][i]    = "20210322_1";
    this[1][i++]  = (["Coloring the bear black","把熊涂成黑色"])[cn_ind];
    this[0][i]    = "20210323_1";
    this[1][i++]  = (["Running around the playground","绕着操场跑"])[cn_ind];
    this[0][i]    = "20210324_1";
    this[1][i++]  = (["Turning buttons into flowers in the art class","在美术课中把钮扣变成花朵"])[cn_ind];
    this[0][i]    = "20210325_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210325_2";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210325_3";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210326_1";
    this[1][i++]  = (["Playing games outdoors with Ms Joy","Joy老师带大家在户外玩游戏"])[cn_ind];
    this[0][i]    = "20210326_2";
    this[1][i++]  = (["Playing games outdoors with Ms Joy","Joy老师带大家在户外玩游戏"])[cn_ind];
    this[0][i]    = "20210326_3";
    this[1][i++]  = (["Going home","回家喽"])[cn_ind];
    this[0][i]    = "20210329_1";
    this[1][i++]  = (["Cutting flower petals","剪纸花"])[cn_ind];
    this[0][i]    = "20210330_1";
    this[1][i++]  = (["Outdoor PE class with Mr Palmer","Palmer老师的户外体育课"])[cn_ind];
    this[0][i]    = "20210331_1";
    this[1][i++]  = (["Drawing","画画"])[cn_ind];
    this[0][i]    = "20210331_2";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210402_1";
    this[1][i++]  = (["Solving a wooden block puzzle","看图搭积木"])[cn_ind];
    this[0][i]    = "20210402_2";
    this[1][i++]  = (["Using marshmallow to paint bunny","用棉花糖画兔子"])[cn_ind];
    this[0][i]    = "20210405_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210405_2";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210405_3";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210407_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210408_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210408_2";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210413_1";
    this[1][i++]  = (["Virtual school visit","网上学校参观。Joy老师带着球球在拌面"])[cn_ind];
    this[0][i]    = "20210414_1";
    this[1][i++]  = (["Making a paper collage in Ms Tiny's art class","在Tiny老师的美术课上制作纸拼贴画"])[cn_ind];
    this[0][i]    = "20210414_2";
    this[1][i++]  = (["Making rain sticks","将雨水倒入瓶中"])[cn_ind];
    this[0][i]    = "20210415_1";
    this[1][i++]  = (["Coloring rice for the rainbow day","给大米染色"])[cn_ind];
    this[0][i]    = "20210415_1";
    this[1][i++]  = (["Coloring rice for the rainbow day","给大米染色"])[cn_ind];
    this[0][i]    = "20210415_3";
    this[1][i++]  = (["PE class with Mr Palmer","Palmer老师的体育课"])[cn_ind];
    this[0][i]    = "20210415_4";
    this[1][i++]  = (["PE class with Mr Palmer","Palmer老师的体育课"])[cn_ind];
    this[0][i]    = "20210419_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210421_1";
    this[1][i++]  = (["Cutting a spiral","剪螺旋形纸片"])[cn_ind];
    this[0][i]    = "20210422_1";
    this[1][i++]  = (["Outdoor PE class","户外体育课"])[cn_ind];
    this[0][i]    = "20210422_2";
    this[1][i++]  = (["Coloring the paper earth","给纸地球上色"])[cn_ind];
    this[0][i]    = "20210423_1";
    this[1][i++]  = (["Playing with Charlie and Remy","和Charlie和Remy一起玩"])[cn_ind];
    this[0][i]    = "20210429_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210429_2";
    this[1][i++]  = (["Making a volcano","制作火山"])[cn_ind];
    this[0][i]    = "20210429_3";
    this[1][i++]  = (["Playing with marshmallow","玩棉花糖"])[cn_ind];
    this[0][i]    = "20210429_4";
    this[1][i++]  = (["Playing with shaving cream","玩剃须膏"])[cn_ind];
    this[0][i]    = "20210503_1";
    this[1][i++]  = (['Playing "speckled frog" game',"玩“斑点青蛙”游戏"])[cn_ind];
    this[0][i]    = "20210503_2";
    this[1][i++]  = (['Playing "speckled frog" game',"玩“斑点青蛙”游戏"])[cn_ind];
    this[0][i]    = "20210505_1";
    this[1][i++]  = (["Playing with Cara","和Cara一起玩过家家"])[cn_ind];
    this[0][i]    = "20210506_1";
    this[1][i++]  = (["Outdoor PE class with Mr Palmer","Palmer老师的户外体育课"])[cn_ind];
    this[0][i]    = "20210510_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210510_2";
    this[1][i++]  = (["Drawing vegetables","画蔬菜"])[cn_ind];
    this[0][i]    = "20210511_1";
    this[1][i++]  = (["Outdoor PE class with Mr Palmer","Palmer老师的户外体育课"])[cn_ind];
    this[0][i]    = "20210511_2";
    this[1][i++]  = (["Pizza picnic","比萨野餐"])[cn_ind];
    this[0][i]    = "20210513_1";
    this[1][i++]  = (["Painting","画画"])[cn_ind];
    this[0][i]    = "20210517_1";
    this[1][i++]  = (["Spanish enrichment class with Ms Nadya","Nadya老师给大家上西班牙语课"])[cn_ind];
    this[0][i]    = "20210518_1";
    this[1][i++]  = (["Outdoor PE class with Mr Palmer","Palmer老师的户外体育课"])[cn_ind];
    this[0][i]    = "20210519_1";
    this[1][i++]  = (["Searching for cicadas","在户外寻找蝉"])[cn_ind];
    this[0][i]    = "20210519_2";
    this[1][i++]  = (["Holding a live cicada","拿着一只活的知了"])[cn_ind];
    this[0][i]    = "20210520_1";
    this[1][i++]  = (["Outdoor PE class with Mr Palmer","Palmer老师的户外体育课"])[cn_ind];
    this[0][i]    = "20210521_1";
    this[1][i++]  = (["Morning music time with Ms Dinah","Dinah老师的早间音乐课"])[cn_ind];
    this[0][i]    = "20210521_2";
    this[1][i++]  = (["Leaving the work of cooking and childcare up to Molly and Philomena","将烹饪和育儿工作留给Molly和Philomena"])[cn_ind];
    this[0][i]    = "20210521_3";
    this[1][i++]  = (["Making a phone call","打电话"])[cn_ind];
    this[0][i]    = "20210524_1";
    this[1][i++]  = (["Nap time","午睡"])[cn_ind];
    this[0][i]    = "20210524_2";
    this[1][i++]  = (["Afternoon snack","下午的点心"])[cn_ind];
    this[0][i]    = "20210526_1";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210527_1";
    this[1][i++]  = (["Parent-teacher conference with Ms Sally and Ms Joy","跟Sally老师和Joy老师开家长会"])[cn_ind];
    this[0][i]    = "20210528_1";
    this[1][i++]  = (["Happy Memorial Day","周末愉快"])[cn_ind];
    this[0][i]    = "20210603_1";
    this[1][i++]  = (["Holding a parachute","一起拿着降落伞"])[cn_ind];
    this[0][i]    = "20210607_1";
    this[1][i++]  = (["Catching a cicada with Molly","和Molly抓知了"])[cn_ind];
    this[0][i]    = "20210607_2";
    this[1][i++]  = (["Dancing class with Ms Nadya","在Nadya老师的课上跳舞"])[cn_ind];
    this[0][i]    = "20210607_3";
    this[1][i++]  = (["Drawing family picture with Ms Nadya","和Nadya老师一起画家庭成员"])[cn_ind];
    this[0][i]    = "20210608_1";
    this[1][i++]  = (["Handing off to Keshan in the beanbag balancing relay","在豆袋平衡接力中递给Keshan"])[cn_ind];
    this[0][i]    = "20210617_1";
    this[1][i++]  = (["Painting a jellyfish","画水母"])[cn_ind];
    this[0][i]    = "20210623_1";
    this[1][i++]  = (["Running like a train","像火车一样奔跑"])[cn_ind];
    this[0][i]    = "20210623_2";
    this[1][i++]  = (["Lunch","午餐"])[cn_ind];
    this[0][i]    = "20210625_1";
    this[1][i++]  = (["Running like a train","像火车一样奔跑"])[cn_ind];
    this[0][i]    = "20210625_2";
    this[1][i++]  = (["Painting crabs","画螃蟹"])[cn_ind];
    this[0][i]    = "20210629_1";
    this[1][i++]  = (["Building with friends","和同学一起搭积木"])[cn_ind];
    this[0][i]    = "20210706_1";
    this[1][i++]  = (["Tiger art","老虎拼图"])[cn_ind];
    this[0][i]    = "20210707_1";
    this[1][i++]  = (["Letter recognition practice","字母识别练习"])[cn_ind];
    this[0][i]    = "20210715_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210721_1";
    this[1][i++]  = (["Painting with aluminum foil","用铝箔涂油漆"])[cn_ind];
    this[0][i]    = "20210721_2";
    this[1][i++]  = (["Painting","涂油漆"])[cn_ind];
    this[0][i]    = "20210721_3";
    this[1][i++]  = (["Making a sensory bottle","制作感官瓶"])[cn_ind];
    this[0][i]    = "20210727_1";
    this[1][i++]  = (["Water day","户外玩水日"])[cn_ind];
    this[0][i]    = "20210727_2";
    this[1][i++]  = (["Water day","户外玩水日"])[cn_ind];
    this[0][i]    = "20210728_1";
    this[1][i++]  = (["Making a watermelon","贴西瓜"])[cn_ind];
    this[0][i]    = "20210804_1";
    this[1][i++]  = (["Playing with toy cars","玩玩具车"])[cn_ind];
    this[0][i]    = "20210804_2";
    this[1][i++]  = (["Making a mosaic art piece","贴纸片"])[cn_ind];
    this[0][i]    = "20210817_1";
    this[1][i++]  = (["Making an ocean animal mosaic","拼海洋动物"])[cn_ind];
    this[0][i]    = "20210817_2";
    this[1][i++]  = (["Making a jellyfish","制作水母图"])[cn_ind];
    this[0][i]    = "20210818_1";
    this[1][i++]  = (["Jellyfish","水母"])[cn_ind];
    this[0][i]    = "20210831_1";
    this[1][i++]  = (["Putting the final touch on the name Nathan","给名字Nathan加上最后点缀"])[cn_ind];
    this[0][i]    = "20210908_1";
    this[1][i++]  = (["What makes me special","我为什么很特别"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20210909_1";
    this[1][i++]  = (["Family painting","家庭画"])[cn_ind];
    this[0][i]    = "20210913_1";
    this[1][i++]  = (["Making a friendship bracelet for a friend","制作友谊手链送给朋友"])[cn_ind];
    this[0][i]    = "20210914_1";
    this[1][i++]  = (["Practice writing letters","练习写字母"])[cn_ind];
    this[0][i]    = "20210915_1";
    this[1][i++]  = (["Friendship Recipe cooking activity","友谊食谱烹饪活动"])[cn_ind];
    this[0][i]    = "20210915_2";
    this[1][i++]  = (["Friendship Recipe cooking activity","友谊食谱烹饪活动"])[cn_ind];
    this[0][i]    = "20210915_3";
    this[1][i++]  = (["Friendship Recipe cooking activity","友谊食谱烹饪活动"])[cn_ind];

    for (var i=0;i<this[0].length;i++){
        this[1][i] = getdate(this[0][i],this[1][i]);
    }    
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
