<!--
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
var url        = "";
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
    this[0][i]    = ["20201104_1","20201104_2"];
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
    this[0][i]    = ["20201216_1","20201216_2"];
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
    this[0][i]    = ["20210108_2","20210108_3"];
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
    this[0][i]    = ["20210203_1","20210203_2"];
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
    this[0][i]    = ["20210315_2","20210315_3","20210315_4"];
    this[1][i++]  = (["Spanish enrichment class with Ms Nadya","Nadya老师给大家上西班牙语课"])[cn_ind];
    this[0][i]    = "20210316_1";
    this[1][i++]  = (["Preparing for the leprechaun (tomorrow is St Patrick's day)","为爱尔兰小矮妖的到来做准备(明天是圣帕特里克节)"])[cn_ind];
    this[0][i]    = "20210316_2";
    this[1][i++]  = (["Preparing for the leprechaun (tomorrow is St Patrick's day)","为爱尔兰小矮妖的到来做准备(明天是圣帕特里克节)"])[cn_ind];
    this[0][i]    = "20210316_3";
    this[1][i++]  = (["Balancing a bean bag on a racket","在球拍上平衡豆袋"])[cn_ind];
    this[0][i]    = "20210317_1";
    this[1][i++]  = (["Making a pot of gold","做一坛金币"])[cn_ind];
    this[0][i]    = ["20210318_1","20210318_2"];
    this[1][i++]  = (["Gluing a paper flower","贴纸花"])[cn_ind];
    this[0][i]    = "20210318_3";
    this[1][i++]  = (["Matching shapes","匹配形状"])[cn_ind];
    this[0][i]    = ["20210319_1","20210319_2"];
    this[1][i++]  = (["Music class with Ms Dinah","Dinah老师给大家上音乐课"])[cn_ind];
    this[0][i]    = "20210322_1";
    this[1][i++]  = (["Coloring the bear black","把熊涂成黑色"])[cn_ind];
    this[0][i]    = "20210323_1";
    this[1][i++]  = (["Running around the playground","绕着操场跑"])[cn_ind];
    this[0][i]    = "20210324_1";
    this[1][i++]  = (["Turning buttons into flowers in the art class","在美术课中把钮扣变成花朵"])[cn_ind];
    this[0][i]    = ["20210325_1","20210325_2","20210325_3"];
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = ["20210326_1","20210326_2"];
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
    this[0][i]    = ["20210405_1","20210405_2","20210405_3"];
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210407_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = ["20210408_1","20210408_2"];
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20210413_1";
    this[1][i++]  = (["Virtual school visit","网上学校参观。Joy老师带着球球在拌面"])[cn_ind];
    this[0][i]    = "20210414_1";
    this[1][i++]  = (["Making a paper collage in Ms Tiny's art class","在Tiny老师的美术课上制作纸拼贴画"])[cn_ind];
    this[0][i]    = "20210414_2";
    this[1][i++]  = (["Making rain sticks","将雨水倒入瓶中"])[cn_ind];
    this[0][i]    = ["20210415_1","20210415_2"];
    this[1][i++]  = (["Coloring rice for the rainbow day","给大米染色"])[cn_ind];
    this[0][i]    = ["20210415_3","20210415_4"];
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
    this[0][i]    = ["20210503_1","20210503_2"];
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
    this[0][i]    = ["20210727_1","20210727_2"];
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
    this[0][i]    = ["20210915_1","20210915_2","20210915_3"];
    this[1][i++]  = (["Friendship Recipe cooking activity","友谊食谱烹饪活动"])[cn_ind];
    this[0][i]    = "20210916_1";
    this[1][i++]  = (["Outdoor activity with Freddy","户外活动和Freddy一起玩"])[cn_ind];
    this[0][i]    = "20210917_1";
    this[1][i++]  = (["Music class with Ms Emma","上Emma老师的音乐课"])[cn_ind];
    this[0][i]    = "20210922_1";
    this[1][i++]  = (["Making a rainbow toast","画彩虹吐司"])[cn_ind];
    this[0][i]    = "20210922_2";
    this[1][i++]  = (["Dancing","跳舞"])[cn_ind];
    this[0][i]    = "20210930_1";
    this[1][i++]  = (["Music class with Ms Emma","上Emma老师的音乐课"])[cn_ind];
    this[0][i]    = "20211005_1";
    this[1][i++]  = (["Nathan wants to be a firefigher to help the community when he grows up","球球长大后想当消防员来帮助社会"])[cn_ind];
    this[0][i]    = "20211007_1";
    this[1][i++]  = (["Field trip to the Butler's Orchard","在巴特勒果园摘南瓜"])[cn_ind];
    this[0][i]    = ["20211007_2","20211007_4","20211007_5"];
    this[1][i++]  = (["Field trip to the Butler's Orchard","参观巴特勒果园"])[cn_ind];
    this[0][i]    = "20211007_3";
    this[1][i++]  = (["Field trip to the Butler's Orchard","参观巴特勒果园"])[cn_ind];
    this[0][i]    = "20211012_1";
    this[1][i++]  = (["Apple tasting","品尝苹果"])[cn_ind];
    this[0][i]    = "20211018_1";
    this[1][i++]  = (["Painting","画画"])[cn_ind];
    this[0][i]    = "20211019_1";
    this[1][i++]  = (["Making a pumpkin","制作南瓜"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20211028_1";
    this[1][i++]  = (["Self portrait","对着镜子画的自画像"])[cn_ind];
    this[0][i]    = "20211029_1";
    this[1][i++]  = (["Halloween costume party","万圣节化装合影"])[cn_ind];
    this[0][i]    = "20211101_1";
    this[1][i++]  = (["Trunk or treat at the parking lot","在停车场跟家长进行万圣节讨糖活动"])[cn_ind];
    this[0][i]    = "20211102_1";
    this[1][i++]  = (["Making faces to describe feelings","贴图来表达各种心情"])[cn_ind];
    this[0][i]    = "20211103_1";
    this[1][i++]  = (["Tracing letter J in salt","在盐上描字母J"])[cn_ind];
    this[0][i]    = "20211108_1";
    this[1][i++]  = (["Making letter K with play dough","用橡皮泥制作字母K"])[cn_ind];
    this[0][i]    = "20211108_2";
    this[1][i++]  = (["Art class with Ms Tiny","Tiny老师的美术课"])[cn_ind];
    this[0][i]    = "20211116_1";
    this[1][i++]  = (["Making a hot-air balloon","贴热气球"])[cn_ind];
    this[0][i]    = "20211209_1";
    this[1][i++]  = (["Group photo","集体照"])[cn_ind];
    this[0][i]    = "20211217_1";
    this[1][i++]  = ([urllink((url="https://youtu.be/HwFekbYxxrY?t=189"),"Virtual holiday performance (YouTube video)"),urllink(url,"节日表演(YouTube视频)")])[cn_ind];
    this[0][i]    = "20211217_2";
    this[1][i++]  = ([urllink(url,"Virtual holiday performance (YouTube video)"),urllink(url,"节日表演(YouTube视频)")])[cn_ind];
    this[0][i]    = "20211228_1";
    this[1][i++]  = (["Making a snowflake","制作雪花"])[cn_ind];
    this[0][i]    = "20220103_1";
    this[1][i++]  = (["Making an art project with balls and sticks","用小球和棍子拼图案"])[cn_ind];
    this[0][i]    = "20220201_1";
    this[1][i++]  = (["Reading a book","读书"])[cn_ind];
    this[0][i]    = "20220203_1";
    this[1][i++]  = (["Playing the fruit and vegetable game","玩游戏"])[cn_ind];
    this[0][i]    = "20220204_1";
    this[1][i++]  = (["Taste testing fruits","品尝水果"])[cn_ind];
    this[0][i]    = "20220214_1";
    this[1][i++]  = (['Making "a bowl of healthy food"',"贴图"])[cn_ind];
    this[0][i]    = "20220218_1";
    this[1][i++]  = (["Spanish class with Ms Luz","Luz老师的西班牙语课"])[cn_ind];
    this[0][i]    = "20220228_1";
    this[1][i++]  = (["Eating snack","吃零食"])[cn_ind];
    this[0][i]    = "20220303_1";
    this[1][i++]  = (["Outdoor activity","户外活动"])[cn_ind];
    this[0][i]    = "20220317_1";
    this[1][i++]  = (["Practice beginning letters","看图练习字母"])[cn_ind];
    this[0][i]    = "20220317_2";
    this[1][i++]  = (["Practice adding numbers","练习数字相加"])[cn_ind];
    this[0][i]    = "20220324_1";
    this[1][i++]  = (["Coloring a paper flower","给纸花上色"])[cn_ind];
    this[0][i]    = "20220329_1";
    this[1][i++]  = (["Practice counting numbers","练习数数"])[cn_ind];
    this[0][i]    = "20220330_1";
    this[1][i++]  = (["Fruit tasting","品尝水果"])[cn_ind];
    this[0][i]    = "20220408_1";
    this[1][i++]  = (["Family fun Friday activity","家长参与的特别星期五活动"])[cn_ind];
    this[0][i]    = "20220408_2";
    this[1][i++]  = (["Fitness class","健身课"])[cn_ind];
    this[0][i]    = "20220420_1";
    this[1][i++]  = (["Cleaning the classroom and recycling paper","打扫教室同时回收纸张"])[cn_ind];
    this[0][i]    = "20220420_2";
    this[1][i++]  = (["Cleaning the classroom window","擦窗户"])[cn_ind];
    this[0][i]    = "20220422_1";
    this[1][i++]  = (["Art class","美术课"])[cn_ind];
    this[0][i]    = ["20220425_1","20220425_2"];
    this[1][i++]  = (["Playing soccer with coach Shay","跟Shay教练学踢足球"])[cn_ind];
    this[0][i]    = ["20220425_3","20220425_4"];
    this[1][i++]  = (["Playing soccer","踢足球"])[cn_ind];
    this[0][i]    = "20220425_5";
    this[1][i++]  = (["Making a butterfly out of hand prints","制作手印蝴蝶"])[cn_ind];
    this[0][i]    = "20220520_1";
    this[1][i++]  = (["Making paper plate snake","制作纸盘蛇"])[cn_ind];
    this[0][i]    = "20220527_1";
    this[1][i++]  = (["Spanish class with Ms Luz","Luz老师的西班牙语课"])[cn_ind];
    this[0][i]    = ["20220622_1","20220622_2"];
    this[1][i++]  = (["Painting","画画"])[cn_ind];
    this[0][i]    = "20220624_1";
    this[1][i++]  = (["Field trip to the Seneca Creek State Park","去塞内卡溪州立公园郊游"])[cn_ind];
    this[0][i]    = "20220624_2";
    this[1][i++]  = (["Playing with Kiran and Raina","跟Kiran和Raina一起玩"])[cn_ind];
    this[0][i]    = "20220624_3";
    this[1][i++]  = (["Water break with Issac and Atharv","跟Issac和Atharv一起喝水"])[cn_ind];
    this[0][i]    = "20220624_4";
    this[1][i++]  = (["Playing with Atharv","跟Atharv一起玩"])[cn_ind];
    this[0][i]    = "20220624_5";
    this[1][i++]  = (["Playing with Raina","跟Raina一起玩"])[cn_ind];
    this[0][i]    = "20220624_6";
    this[1][i++]  = (["Playing with Issac and Atharv","在塞内卡溪州立公园郊游时跟Issac和Atharv一起玩"])[cn_ind];
    this[0][i]    = "20220628_1";
    this[1][i++]  = (["Playing with Raina on water day","跟Raina一起玩水"])[cn_ind];
    this[0][i]    = "20220628_2";
    this[1][i++]  = (["Playing with Kiran, Remi, and Annelise on water day","跟Kiran，Remi和Annelise一起玩水"])[cn_ind];
    this[0][i]    = "20220628_3";
    this[1][i++]  = (["Playing with Bella on water day","跟Bella一起玩水"])[cn_ind];
    this[0][i]    = "20220701_1";
    this[1][i++]  = (["Nathan and his masterpiece","球球画的火车"])[cn_ind];
    this[0][i]    = "20220701_2";
    this[1][i++]  = (["Painting on a T-shirt","在 T 恤上画画"])[cn_ind];
    this[0][i]    = "20220701_3";
    this[1][i++]  = (["Playing ball with Issac","和Issac一起打球"])[cn_ind];
    this[0][i]    = ["20220708_1","20220708_2","20220708_3"];
    this[1][i++]  = (["Field trip to the Castle Park in Germantown","去德国镇的城堡公园郊游"])[cn_ind];
    this[0][i]    = ["20220711_1","20220711_2","20220711_3"];
    this[1][i++]  = (["Water play","玩水"])[cn_ind];
    this[0][i]    = "20220712_1";
    this[1][i++]  = (["Playing in Bohrer Park","在Bohrer公园玩"])[cn_ind];
    this[0][i]    = "20220714_1";
    this[1][i++]  = (["Playing in the moon bounce","玩跳跳床"])[cn_ind];
    this[0][i]    = "20220715_1";
    this[1][i++]  = (["Having fun at the splash park","在水公园玩"])[cn_ind];
    this[0][i]    = "20220716_1";
    this[1][i++]  = (["Remi's birthday party at Wheaton Regional Park","同学Remi在惠顿公园的生日派对"])[cn_ind];
    this[0][i]    = "20220716_2";
    this[1][i++]  = (["Riding the minitrain with Raina on Remi's birthday party","在Remi的生日派对上和Raina一起坐小火车"])[cn_ind];
    this[0][i]    = "20220718_1";
    this[1][i++]  = (["Swimming in the pool","在游泳池里游泳"])[cn_ind];
    this[0][i]    = ["20220719_1","20220719_2"];
    this[1][i++]  = (["Water play","玩水"])[cn_ind];
    this[0][i]    = ["20220804_1","20220804_2"];
    this[1][i++]  = (["Enjoying Kona Ice","吃冰"])[cn_ind];
    this[0][i]    = "20220804_3";
    this[1][i++]  = (["Painting outdoors","户外画画"])[cn_ind];
    this[0][i]    = "20220805_1";
    this[1][i++]  = (["Playing soccer","踢足球"])[cn_ind];
    this[0][i]    = "20220922_1";
    this[1][i++]  = (["Showing Daddy the toys in the kindergarten classroom","给爸爸看教室里的玩具"])[cn_ind];
    this[0][i]    = "20220928_1";
    this[1][i++]  = (["Painting with Victor","和同学Victor一块画画"])[cn_ind];
    this[0][i]    = "20220930_1";
    this[1][i++]  = (["Painting with Bella","和同学Bella一块画画"])[cn_ind];
    this[0][i]    = "20221003_1";
    this[1][i++]  = (["Reading with Issac and Haocheng","和同学Issac和浩成一块看书"])[cn_ind];
    this[0][i]    = "20221005_1";
    this[1][i++]  = (["Playing with balls and pipes","架管子滚球玩"])[cn_ind];
    this[0][i]    = "20221006_1";
    this[1][i++]  = (["Nature walk","户外散步"])[cn_ind];
    this[0][i]    = "20221007_1";
    this[1][i++]  = (["Building a Lego helicopter","搭乐高直升飞机"])[cn_ind];
    this[0][i]    = ["20221015_Annelise_1","20221015_Annelise_2","20221015_Annelise_3","20221015_Annelise_4"];
    this[1][i++]  = (["Celebrating friend Annelise's 5th birthday","庆贺朋友Annelise的5岁生日"])[cn_ind];
    this[0][i]    = "20221018_1";
    this[1][i++]  = (["Playing with playdough","玩橡皮泥"])[cn_ind];
    this[0][i]    = ["20221020_1","20221020_2","20221020_3"];
    this[1][i++]  = ([pagelink("2210farm","Field trip to Summers Farm in Frederick"),pagelink("2210farm","去弗雷德里克郊区的Summers农场秋游")])[cn_ind];
    this[0][i]    = "20221028_1";
    this[1][i++]  = (["Spiderman and Batman","小蜘蛛侠和小蝙蝠侠"])[cn_ind];
    makeface[j++] = i;
    this[0][i]    = "20221101_1";
    this[1][i++]  = (["Batman goes trick-or-treating","小蝙蝠侠万圣节讨糖果的故事：我和爸爸妈妈出去讨糖果看到一只鬼，它在我身边飞来飞去嘲笑我，吓得我都摔倒了，这时一只巨大的蝙蝠飞来把鬼给吞了，然后我们接着讨糖完回家"])[cn_ind];
    this[0][i]    = "20221117_1";
    this[1][i++]  = (["Thanks at Thanksgiving","感恩节致谢：我特别感谢爸爸帮我一起做作业"])[cn_ind];
    this[0][i]    = ["20221117_2","20221117_3","20221117_4","20221117_5","20221117_6"];
    this[1][i++]  = (["Thanksgiving lunch","感恩节午餐"])[cn_ind];
    this[0][i]    = ["20221117_7","20221117_8","20221117_9"];
    this[1][i++]  = (["Visiting the NIST net zero house","参观NIST净零耗能住宅"])[cn_ind];
    this[0][i]    = "20221122_1";
    this[1][i++]  = (["Nathan and the cheerio turkey","球球和甜麦圈火鸡"])[cn_ind];
    this[0][i]    = "20230112_1";
    this[1][i++]  = (["Hanukkah","犹太光明节简介"])[cn_ind];
    this[0][i]    = "20230118_1";
    this[1][i++]  = (["Playing with marble run","滚玻璃珠"])[cn_ind];
    this[0][i]    = "20230120_1";
    this[1][i++]  = (["I have a dream","我有一个梦想：我想成为一个研究恐龙的古生物学家；大家都友好相处"])[cn_ind];
    this[0][i]    = "20230208_0";
    this[1][i++]  = (["Happy Chinese New Year","新年快乐"])[cn_ind];
    this[0][i]    = ["20230208_1","20230208_2"];
    this[1][i++]  = ([["Making a headband for the 100th day celebration","Celebrating the 100th day at kindergarten"],["制作头带庆祝学前班第100天","庆祝学前班第100天"]])[cn_ind];
    this[0][i]    = "20230214_1";
    this[1][i++]  = (["With Daddy","和爸爸在一起"])[cn_ind];
    this[0][i]    = "20230215_1";
    this[1][i++]  = (["Counting to 100 by 10s","以10为单位数到100"])[cn_ind];
    this[0][i]    = "20230216_1";
    this[1][i++]  = ([urllink((url="https://youtu.be/3xnQndXFw7I"),"Making a presentation about the arctic animal wolverine (YouTube video)"),urllink(url,"在课堂上做报告介绍北极动物貂熊(YouTube视频)")])[cn_ind];
    this[0][i]    = "20230223_0";
    this[1][i++]  = (["Celebrating Ms B's birthday","庆祝B老师生日快乐"])[cn_ind];
    this[0][i]    = ["20230223_1","20230223_2","20230223_3"];
    this[1][i++]  = (["Visiting the NIST fire and police department","参观NIST消防队和警察局"])[cn_ind];
    this[0][i]    = ["20230303_1","20230303_2"];
    this[1][i++]  = (["Reading with Akash's Mom","听Akash的妈妈读书"])[cn_ind];
    this[0][i]    = "20230303_3";
    this[1][i++]  = (["Snack time","吃零食"])[cn_ind];
    this[0][i]    = ["20230303_4","20230303_5"];
    this[1][i++]  = (["Visiting Remy's Mom's lab to learn about fire","参观Remy妈妈的实验室来了解什么是火"])[cn_ind];
    this[0][i]    = ["20230308_1","20230308_2","20230308_3"];
    this[1][i++]  = (["Reptiles show","爬行动物展示"])[cn_ind];
    this[0][i]    = ["20230315_1","20230315_2"];
    this[1][i++]  = (["Measuring with a ruler","用尺子量东西"])[cn_ind];
    this[0][i]    = "20230317_2";
    this[1][i++]  = (["Measuring the gingerbread man","测量姜饼人"])[cn_ind];
    this[0][i]    = "20230317_1";
    this[1][i++]  = (["My favorite cake: 3-layer vanilla cake","最喜欢的蛋糕：三层香草蛋糕"])[cn_ind];
    this[0][i]    = ["20230322_1","20230322_2"];
    this[1][i++]  = (["Visiting the polymer's lab","参观聚合物实验室"])[cn_ind];
    this[0][i]    = "20230323_1";
    this[1][i++]  = (["Building a person out of magnet tiles","用磁块搭人"])[cn_ind];
    this[0][i]    = "20230330_2";
    this[1][i++]  = (["A dinosaur","恐龙"])[cn_ind];
    this[0][i]    = "20230330_1";
    this[1][i++]  = ([urllink((url="https://youtu.be/cjoSwCbf6UE "),"Making a presentation about the Sun (YouTube video)"),urllink(url,"在课堂上做报告介绍太阳(YouTube视频)")])[cn_ind];
    this[0][i]    = "20230331_1";
    this[1][i++]  = (["In front of the solar system research project display","站在太阳系调研项目展示前"])[cn_ind];
    this[0][i]    = ["20230414_0","20230414_1","20230414_2"];
    this[1][i++]  = (["Easter egg hunt","寻找复活节彩蛋"])[cn_ind];
    this[0][i]    = "20230421_2";
    this[1][i++]  = (["Chinese flag","五星红旗"])[cn_ind];
    this[0][i]    = "20230421_1";
    this[1][i++]  = (["International week performance","国际周表演"])[cn_ind];
    this[0][i]    = ["20230501_1","20230501_2","20230501_3"];
    this[1][i++]  = (["Wearing the tie-dye t-shirt","穿自己染的扎染T恤"])[cn_ind];
    this[0][i]    = "20230504_1";
    this[1][i++]  = (["Nathan's dinosaur project","球球的恐龙调研项目"])[cn_ind];
    this[0][i]    = ["20230511_1","20230511_2"];
    this[1][i++]  = (["STEM Lab visit with Dr. Leber on funnels and ramps","参观Leber博士的实验室学习关于漏斗和坡道的知识"])[cn_ind];
    this[0][i]    = ["20230512_1","20230512_2"];
    this[1][i++]  = (["Making Mother's Day cupcakes","做母亲节蛋糕"])[cn_ind];
    this[0][i]    = ["20230515_1","20230515_2"];
    this[1][i++]  = (["Solar system walk with Dr. Adam Creuziger","Adam Creuziger博士的户外太阳系课"])[cn_ind];
    this[0][i]    = "20230531_1";
    this[1][i++]  = (["Painting a coconut shell for a bird feeder or planter","画椰子壳"])[cn_ind];
    this[0][i]    = "20230628_1";
    this[1][i++]  = (["Going to the movie theater","去电影院看电影"])[cn_ind];
    this[0][i]    = "20230630_1";
    this[1][i++]  = (["Enjoying the desert","吃甜食"])[cn_ind];
    this[0][i]    = "20230705_1";
    this[1][i++]  = (["Swimming at Bohrer park","在Bohrer公园游泳"])[cn_ind];
    this[0][i]    = ["20230706_1","20230706_2","20230706_3"];
    this[1][i++]  = (["Field trip to the Brookside Garden in Wheaton","去惠顿的溪边公园郊游"])[cn_ind];
    this[0][i]    = ["20230710_1","20230710_2"];
    this[1][i++]  = (["Swimming at Bohrer park","在Bohrer公园游泳"])[cn_ind];
    this[0][i]    = ["20230711_1","20230711_2"];
    this[1][i++]  = (["Visiting the National Aquarium in Baltimore","参观巴尔的摩的国家水族馆"])[cn_ind];
    this[0][i]    = "20230712_1";
    this[1][i++]  = (["Swimming at Bohrer park","在Bohrer公园游泳"])[cn_ind];
    this[0][i]    = "20230713_1";
    this[1][i++]  = (["Having fun at Dave & Buster's","在Dave & Buster's玩游戏"])[cn_ind];
    this[0][i]    = ["20230717_1","20230717_2"];
    this[1][i++]  = (["Swimming at Bohrer park","在Bohrer公园游泳"])[cn_ind];
    this[0][i]    = "20230718_1";
    this[1][i++]  = (["Having lunch during the trip to Catoctin Wildlife Preserve","在卡托克廷野生动物保护区吃午餐"])[cn_ind];
    this[0][i]    = ["20230721_1","20230721_2"];
    this[1][i++]  = (["Summer camp activity","夏令营活动"])[cn_ind];
    this[0][i]    = ["20230725_1","20230725_2"];
    this[1][i++]  = (["Visiting the Adventure Park USA","去游乐园玩"])[cn_ind];
    this[0][i]    = "20230726_1";
    this[1][i++]  = (["Swimming at Bohrer park","在Bohrer公园游泳"])[cn_ind];
    this[0][i]    = ["20230727_1","20230727_2","20230727_3"];
    this[1][i++]  = (["Having fun at Fourth Dimension Fun Center in Frederick","在弗雷德里克的第四维度游乐中心玩"])[cn_ind];
    this[0][i]    = ["20230731_1","20230731_2","20230731_3","20230731_4"];
    this[1][i++]  = (["Swimming at Bohrer park","在Bohrer公园游泳"])[cn_ind];
    this[0][i]    = ["20230802_1","20230802_2"];
    this[1][i++]  = (["Swimming at Bohrer park","在Bohrer公园游泳"])[cn_ind];
    this[0][i]    = ["20230803_1","20230803_2","20230803_3","20230803_4","20230803_5"];
    this[1][i++]  = (["Skating for the first time at Cabin John Ice Rink","在Cabin John溜冰场第一次滑冰"])[cn_ind];
    this[0][i]    = ["20230814_1","20230814_2"];
    this[1][i++]  = (["Swimming at Bohrer park","在Bohrer公园游泳"])[cn_ind];
    this[0][i]    = ["20230815_1","20230815_2"];
    this[1][i++]  = (["Foam party","泡泡派对"])[cn_ind];

    adddate(this);
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
