﻿<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "https://www.goddardschool.com/washington/gaithersburg-wind-river-lane-md";
var title      = (["Nathan at Goddard School","球球在戈达德托儿所的照片"])[cn_ind];
var dir        = maindir+"pics/2018goddard/";
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
    this[0][i]    = "20180618_1";
    this[1][i++]  = (["First day at the daycare","托儿所第一天"])[cn_ind];
    this[0][i]    = "20180619_1";
    this[1][i++]  = (["Painting with a pig","用小猪画画"])[cn_ind];
    this[0][i]    = "20180620_1";
    this[1][i++]  = (["Pony ride","骑小马"])[cn_ind];
    this[0][i]    = "20180620_2";
    this[1][i++]  = (["Looking at pictures of horses","看马图"])[cn_ind];
    this[0][i]    = "20180621_1";
    this[1][i++]  = (["Holding two animal toys","同时拿着两只动物玩具"])[cn_ind];
    this[0][i]    = "20180622_1";
    this[1][i++]  = (["Fitting the puzzle","拼图玩具"])[cn_ind];
    this[0][i]    = "20180622_2";
    this[1][i++]  = (["Reading","看书"])[cn_ind];
    this[0][i]    = "20180625_1";
    this[1][i++]  = (["Painting with bare hands","徒手画画"])[cn_ind];
    this[0][i]    = "20180626_1";
    this[1][i++]  = (["Playing with an oil and water sensory bottle","玩油水感官瓶"])[cn_ind];
    this[0][i]    = "20180628_1";
    this[1][i++]  = (["Water day with Daddy","爸爸陪着玩水"])[cn_ind];
    this[0][i]    = "20180629_1";
    this[1][i++]  = (["Making a tissue paper flower","粘纸花"])[cn_ind];
    this[0][i]    = "20180702_1";
    this[1][i++]  = (["Feeling the scent and texture of the honeycomb cereal","感受小饼干的气味和质地"])[cn_ind];
    this[0][i]    = "20180703_1";
    this[1][i++]  = (["Looking for worms in a bag of soil","在一袋土里找蚯蚓"])[cn_ind];
    this[0][i]    = "20180705_1";
    this[1][i++]  = (["Painting with a stamp","用印章画画"])[cn_ind];
    this[0][i]    = "20180706_1";
    this[1][i++]  = (["Painting with a sponge","用海绵画画"])[cn_ind];
    this[0][i]    = "20180709_1";
    this[1][i++]  = (["Looking for a banana hidden under the blanket","找藏在毯子下面的香蕉"])[cn_ind];
    this[0][i]    = "20180710_1";
    this[1][i++]  = (["Enjoying the outdoors","户外活动"])[cn_ind];
    this[0][i]    = "20180711_1";
    this[1][i++]  = (["Playing with a stuffed toy","玩玩具熊"])[cn_ind];
    this[0][i]    = "20180712_1";
    this[1][i++]  = (["In a tree house","在树屋里"])[cn_ind];
    this[0][i]    = "20180713_1";
    this[1][i++]  = (["Art project","用羽毛和纸作画"])[cn_ind];
    this[0][i]    = "20180716_1";
    this[1][i++]  = (["Crocodile pictures","看鳄鱼图"])[cn_ind];
    this[0][i]    = "20180717_1";
    this[1][i++]  = (["Putting zigsaw puzzles together","玩拼图"])[cn_ind];
    this[0][i]    = "20180718_1";
    this[1][i++]  = (["Animal pictures","看动物图"])[cn_ind];
    this[0][i]    = "20180719_1";
    this[1][i++]  = (["Mixing dried beans with green paint","把豆子染成绿色"])[cn_ind];
    this[0][i]    = "20180720_1";
    this[1][i++]  = (["Painting with bare hands","小画家又开始作画"])[cn_ind];
    this[0][i]    = "20180723_1";
    this[1][i++]  = (["Feeling the texture of the cooked pasta","感受煮熟的通心粉的质地"])[cn_ind];
    this[0][i]    = "20180724_1";
    this[1][i++]  = (["Feeling the wet cotton balls","捏湿棉球"])[cn_ind];
    this[0][i]    = "20180725_1";
    this[1][i++]  = (["Painting","作画"])[cn_ind];
    this[0][i]    = "20180726_1";
    this[1][i++]  = (["Reading the Three Little Pigs","看<<三只小猪>>"])[cn_ind];
    this[0][i]    = "20180727_1";
    this[1][i++]  = (["Playing on a soft climbing ramp","在爬坡软垫上玩"])[cn_ind];
    this[0][i]    = "20180730_1";
    this[1][i++]  = (["Playing outside","户外活动(球球刚剪了头发)"])[cn_ind];
    this[0][i]    = "20180801_1";
    this[1][i++]  = (["Playing with a toy penguin","玩小企鹅"])[cn_ind];
    this[0][i]    = "20180802_1";
    this[1][i++]  = (["Drawing","画画"])[cn_ind];
    this[0][i]    = "20180803_1";
    this[1][i++]  = (["Gluing black and white tissue paper","用胶水粘黑白纸巾"])[cn_ind];
    this[0][i]    = "20180806_1";
    this[1][i++]  = (["Gluing yellow tissue paper","用胶水粘黄纸巾"])[cn_ind];
    this[0][i]    = "20180807_1";
    this[1][i++]  = (["Playing with a rope and balls","玩绳子和球"])[cn_ind];
    this[0][i]    = "20180808_1";
    makeface[j++] = i;
    this[1][i++]  = (["Wearing the clown costume","扮小丑"])[cn_ind];
    this[0][i]    = "20180809_1";
    this[1][i++]  = (["Playing with a water bottle","玩水瓶"])[cn_ind];
    this[0][i]    = "20180810_1";
    this[1][i++]  = (["Feeling the texture of a bag of popcorn","感受爆米花的质地"])[cn_ind];
    this[0][i]    = "20180813_1";
    this[1][i++]  = (["Painting with seashells","用贝壳画画"])[cn_ind];
    this[0][i]    = "20180814_1";
    this[1][i++]  = (["Making some noise with the beach bucket and shovel","玩沙滩小桶"])[cn_ind];
    this[0][i]    = "20180815_1";
    this[1][i++]  = (["Water day","户外玩水"])[cn_ind];
    this[0][i]    = "20180816_1";
    this[1][i++]  = (["Painting with tin foil","用铝箔作画"])[cn_ind];
    this[0][i]    = "20180820_1";
    this[1][i++]  = (["Making a paper art","粘纸画"])[cn_ind];
    this[0][i]    = "20180821_1";
    this[1][i++]  = (["Painting with q-tip","手指作画"])[cn_ind];
    this[0][i]    = "20180822_1";
    this[1][i++]  = (["Drawing with wet chalk","用湿粉笔画画"])[cn_ind];
    this[0][i]    = "20180823_1";
    this[1][i++]  = (["Gluing cotton strings","用胶水粘棉线"])[cn_ind];
    this[0][i]    = "20180827_1";
    this[1][i++]  = (["Playing with rubber clay","玩橡皮泥"])[cn_ind];
    this[0][i]    = "20180828_1";
    this[1][i++]  = (["Painting with a sponge","用海绵画画"])[cn_ind];
    this[0][i]    = "20180829_1";
    this[1][i++]  = (["Playing with a toy","玩玩具"])[cn_ind];
    this[0][i]    = "20180830_1";
    this[1][i++]  = (["Playing with a ball","玩橡皮球"])[cn_ind];
    this[0][i]    = "20180830_2";
    this[1][i++]  = (["Diploma from Ladybug Classroom","瓢虫教室的毕业证书"])[cn_ind];
    this[0][i]    = "20180904_1";
    this[1][i++]  = (["Reading","看书"])[cn_ind];
    this[0][i]    = "20180904_2";
    this[1][i++]  = (["Having fun in the Caterpillar Classroom with Ms Bringas","毛毛虫教室Bringas老师带大家玩游戏"])[cn_ind];
    this[0][i]    = "20180905_1";
    this[1][i++]  = (["Playing in the walker","在婴儿学步车里玩"])[cn_ind];
    this[0][i]    = "20180906_1";
    this[1][i++]  = (["Playing with toys","玩玩具"])[cn_ind];
    this[0][i]    = "20180907_1";
    this[1][i++]  = (["Happy little caterpillar","快乐的小毛毛虫"])[cn_ind];
    this[0][i]    = "20180910_1";
    this[1][i++]  = (["Putting toys back to the basket","把玩具放回篮子里"])[cn_ind];
    this[0][i]    = "20180911_1";
    this[1][i++]  = (["Looking at photos","看照片"])[cn_ind];
    this[0][i]    = "20180913_1";
    this[1][i++]  = (["Mixing paints","混颜料"])[cn_ind];
    this[0][i]    = "20180914_1";
    this[1][i++]  = (["Playing","玩玩具"])[cn_ind];
    this[0][i]    = "20180914_2";
    this[1][i++]  = (["Playing","玩玩具"])[cn_ind];
    this[0][i]    = "20180917_1";
    this[1][i++]  = (["Reading","看书"])[cn_ind];
    this[0][i]    = "20180918_1";
    this[1][i++]  = (["Reaching for photos","伸手拿照片"])[cn_ind];
    this[0][i]    = "20180919_1";
    this[1][i++]  = (["Painting with tree leaves","用树叶画画"])[cn_ind];
    this[0][i]    = "20180920_1";
    this[1][i++]  = (["Exploring toy fruit","研究玩具水果"])[cn_ind];
    this[0][i]    = "20180921_1";
    this[1][i++]  = (["Group painting","集体绘画"])[cn_ind];
    this[0][i]    = "20180924_1";
    this[1][i++]  = (["Little firefighter","小小消防员"])[cn_ind];
    this[0][i]    = "20180924_2";
    this[1][i++]  = (["Playing with red paint","徒手画画"])[cn_ind];
    this[0][i]    = "20180924_3";
    this[1][i++]  = (["Eating finger food","吃切成小块的水果"])[cn_ind];
    this[0][i]    = "20180926_1";
    this[1][i++]  = (["Classmate's birthday celebration","同学的生日"])[cn_ind];
    this[0][i]    = "20180926_2";
    this[1][i++]  = (["Enjoying the sippy cup","用吸管杯喝奶"])[cn_ind];
    this[0][i]    = "20181001_1";
    this[1][i++]  = (["Crawling towards his favorite toy","爬着去抓玩具"])[cn_ind];
    this[0][i]    = "20181002_1";
    this[1][i++]  = (["Enjoying the lunch","午餐"])[cn_ind];
    this[0][i]    = "20181002_2";
    this[1][i++]  = (["Enjoying the lunch","午餐"])[cn_ind];
    this[0][i]    = "20181003_1";
    this[1][i++]  = (["Painting with cookie cutters","用饼干模具绘画"])[cn_ind];
    this[0][i]    = "20181004_1";
    this[1][i++]  = (["Finding a leaf","找到一片叶子"])[cn_ind];
    this[0][i]    = "20181004_2";
    this[1][i++]  = (["Group painting","画画"])[cn_ind];
    this[0][i]    = "20181005_1";
    this[1][i++]  = (["Reaching for leaves","抓墙上的叶子"])[cn_ind];
    this[0][i]    = "20181005_2";
    this[1][i++]  = (["Classmate's birthday celebration","同学的生日"])[cn_ind];
    this[0][i]    = "20181010_1";
    this[1][i++]  = (["Playing with classmate","和同学一起玩"])[cn_ind];
    this[0][i]    = "20181010_2";
    this[1][i++]  = (["Little artist","小画家"])[cn_ind];
    this[0][i]    = "20181011_1";
    this[1][i++]  = (["Gluing feathers","粘羽毛"])[cn_ind];
    this[0][i]    = "20181012_1";
    this[1][i++]  = (["Having snack together","一起吃零食"])[cn_ind];
    this[0][i]    = "20181016_1";
    this[1][i++]  = (["Gluing hexagons","粘图"])[cn_ind];
    this[0][i]    = "20181017_1";
    this[1][i++]  = (["Playing with classmate","和同学一起玩"])[cn_ind];
    this[0][i]    = "20181022_1";
    this[1][i++]  = (["Wearing hard hat","戴安全帽"])[cn_ind];
    this[0][i]    = "20181023_1";
    this[1][i++]  = (["Playing with classmate","和同学一起玩"])[cn_ind];
    this[0][i]    = "20181025_1";
    this[1][i++]  = (["Bubble fun","玩泡泡"])[cn_ind];
    this[0][i]    = "20181029_1";
    this[1][i++]  = (["Learning about airplanes","看飞机"])[cn_ind];
    this[0][i]    = "20181030_1";
    this[1][i++]  = (["Enjoying the outdoors","户外活动"])[cn_ind];
    this[0][i]    = "20181031_1";
    this[1][i++]  = (["Happy Halloween","万圣节快乐"])[cn_ind];
    this[0][i]    = "20181031_2";
    this[1][i++]  = (["We found Nemo","小尼莫"])[cn_ind];
    this[0][i]    = "20181031_3";
    this[1][i++]  = (["Happy Halloween and Happy Birthday","生日快乐，万圣节快乐"])[cn_ind];
    this[0][i]    = "20181031_4";
    this[1][i++]  = (["Exploring the tunnel","和同学一起玩"])[cn_ind];
    this[0][i]    = "20181031_6";
    this[1][i++]  = (["Drinking formula milk with a straw cup","用吸管杯喝配方奶"])[cn_ind];
    this[0][i]    = "20181031_5";
    this[1][i++]  = (["Happy Birthday!","生日快乐！"])[cn_ind];
    this[0][i]    = "20181101_1";
    this[1][i++]  = (["Nathan loves book","爱读书的球球"])[cn_ind];
    this[0][i]    = "20181105_1";
    this[1][i++]  = (["Sticking fall pictures on the paper board","和同学一起贴图"])[cn_ind];
    this[0][i]    = "20181106_1";
    this[1][i++]  = (["Bear with me...","熊孩子"])[cn_ind];
    this[0][i]    = "20181107_1";
    this[1][i++]  = (["Painting with a cookie cutter","用饼干模具绘画"])[cn_ind];
    this[0][i]    = "20181109_1";
    this[1][i++]  = (["Reading time","读书时间"])[cn_ind];
    this[0][i]    = "20181119_1";
    this[1][i++]  = (["Making a paper art","粘纸画"])[cn_ind];
    this[0][i]    = "20181120_1";
    this[1][i++]  = (["Wearing pilgrim's hat","庆祝感恩节戴清教徒的帽子"])[cn_ind];
    this[0][i]    = "20181210_1";
    this[1][i++]  = (["Painting with a bingo dotter","用宾果笔画画"])[cn_ind];
    this[0][i]    = "20181211_1";
    this[1][i++]  = (["Exploring the bubble wrap","在泡泡包装膜上爬"])[cn_ind];
    this[0][i]    = "20181211_2";
    this[1][i++]  = (["Enjoying the playtime","玩得很开心"])[cn_ind];
    this[0][i]    = "20181218_1";
    this[1][i++]  = (["Classmate's birthday celebration","同学的生日"])[cn_ind];
    this[0][i]    = "20181221_1";
    this[1][i++]  = (["Happy Holidays!","节日快乐！"])[cn_ind];
    this[0][i]    = "20190102_1";
    this[1][i++]  = (["Playing with balls","球球玩球"])[cn_ind];
    this[0][i]    = "20190103_1";
    this[1][i++]  = (['Using sign language to say "more puffs please"!',"用手语说“请给我更多的泡芙麦圈”"])[cn_ind];
    this[0][i]    = "20190115_1";
    this[1][i++]  = (["Reaching for the art work","摘画"])[cn_ind];
    this[0][i]    = "20190116_1";
    this[1][i++]  = (["Reading a book","读书"])[cn_ind];
    this[0][i]    = "20190118_1";
    this[1][i++]  = (["Picking up marshmallows","拿棉花糖"])[cn_ind];
    this[0][i]    = "20190121_1";
    this[1][i++]  = (["Making an art project with yarns","用纱线作画"])[cn_ind];
    this[0][i]    = "20190122_1";
    this[1][i++]  = (["Having fun with bubbles","玩泡泡"])[cn_ind];
    this[0][i]    = "20190122_2";
    this[1][i++]  = (["Painting with a tooth brush","用牙刷画画"])[cn_ind];
    this[0][i]    = "20190123_1";
    this[1][i++]  = (["Painting with a sponge","用海绵画画"])[cn_ind];
    this[0][i]    = "20190124_1";
    this[1][i++]  = (["Painting with a bingo dotter","用宾果笔画画"])[cn_ind];
    this[0][i]    = "20190124_2";
    this[1][i++]  = (["Making a phone call","打电话"])[cn_ind];
    this[0][i]    = "20190124_3";
    this[1][i++]  = (["Feeling a bag of flour","感受手捏面粉的感觉"])[cn_ind];
    this[0][i]    = "20190125_1";
    this[1][i++]  = (["Painting with bare hands","徒手画画"])[cn_ind];
    this[0][i]    = "20190128_1";
    this[1][i++]  = (["Painting with whipped cream","徒手用各种颜色的奶油画画"])[cn_ind];
    this[0][i]    = "20190130_1";
    this[1][i++]  = (["Painting with bare hands","大手笔"])[cn_ind];
    this[0][i]    = "20190131_1";
    this[1][i++]  = (["Playing with playdough","玩橡皮泥"])[cn_ind];
    this[0][i]    = "20190201_1";
    this[1][i++]  = (["Painting with bingo dotters","用宾果笔画画"])[cn_ind];
    this[0][i]    = "20190204_1";
    this[1][i++]  = (["Gluing heart-shaped cutouts","贴心小宝"])[cn_ind];
    this[0][i]    = "20190206_1";
    this[1][i++]  = (["Gluing heart-shaped cutouts","贴心小宝"])[cn_ind];
    this[0][i]    = "20190214_1";
    this[1][i++]  = (["Valentine's card made by Mrs Bringas","球球老师做的情人节冰箱磁铁贺卡"])[cn_ind];
    this[0][i]    = "20190214_2";
    this[1][i++]  = (["A Valentine's card made from one of Nathan's paintings","球球的画做成的情人节贺卡"])[cn_ind];
    this[0][i]    = "20190215_1";
    this[1][i++]  = (["Sending a letter","寄信"])[cn_ind];
    this[0][i]    = "20190222_1";
    this[1][i++]  = (["Enjoying the lunch","吃午餐"])[cn_ind];
    this[0][i]    = "20190225_1";
    this[1][i++]  = (["Classmate's birthday celebration","同学的生日"])[cn_ind];
    this[0][i]    = "20190225_2";
    this[1][i++]  = (["Playing with water","玩水"])[cn_ind];
    this[0][i]    = "20190225_3";
    this[1][i++]  = (["Painting with bare hands","徒手画画"])[cn_ind];
    this[0][i]    = "20190228_1";
    this[1][i++]  = (["Painting with bare hands","徒手画画"])[cn_ind];
    this[0][i]    = "20190301_1";
    this[1][i++]  = (["Painting with animal stamps","用动物印章画画"])[cn_ind];
    this[0][i]    = "20190304_1";
    this[1][i++]  = (["Little artist","小画家"])[cn_ind];
    this[0][i]    = "20190305_1";
    this[1][i++]  = (["Learning to use chopsticks","学用筷子"])[cn_ind];
    this[0][i]    = "20190306_1";
    this[1][i++]  = (["Painting with crayons","用蜡笔蛋画画"])[cn_ind];
    this[0][i]    = "20190308_1";
    this[1][i++]  = (["Playing with plastic fast food","玩塑料快餐模型"])[cn_ind];
    this[0][i]    = "20190308_2";
    this[1][i++]  = (["Reading a book","读书"])[cn_ind];
    this[0][i]    = "20190311_1";
    this[1][i++]  = (["Outdoor time","户外玩耍"])[cn_ind];
    this[0][i]    = "20190311_2";
    this[1][i++]  = (["Outdoor time","户外玩耍"])[cn_ind];
    this[0][i]    = "20190312_1";
    this[1][i++]  = (["Painting","画画"])[cn_ind];
    this[0][i]    = "20190313_1";
    this[1][i++]  = (["Having fun with green paint","画画"])[cn_ind];
    this[0][i]    = "20190313_2";
    this[1][i++]  = (["Outdoor time","户外玩耍"])[cn_ind];
    this[0][i]    = "20190314_1";
    this[1][i++]  = (["Having fun playing outside (Nathan weighs 24 lb 13 oz today)","户外玩耍(球球今天测体重22.5斤)"])[cn_ind];
    this[0][i]    = "20190315_1";
    this[1][i++]  = (["Barefoot fun","光脚活动"])[cn_ind];
    this[0][i]    = "20190318_1";
    this[1][i++]  = (["Happy St. Patrick's Day!","穿绿衣服庆祝圣帕特里克节"])[cn_ind];
    this[0][i]    = "20190320_1";
    this[1][i++]  = (["The first day of spring","春天的第一天"])[cn_ind];
    this[0][i]    = "20190322_1";
    this[1][i++]  = (["Painting on aluminum foil with bare hands","徒手在铝箔上画画"])[cn_ind];
    this[0][i]    = "20190326_1";
    this[1][i++]  = (["Outdoor time","户外活动"])[cn_ind];
    this[0][i]    = "20190327_1";
    this[1][i++]  = (["Reading corner","阅读角落"])[cn_ind];
    this[0][i]    = "20190328_1";
    this[1][i++]  = (["Going through the tunnel","户外活动"])[cn_ind];
    this[0][i]    = "20190328_2";
    this[1][i++]  = (["Playing in the playhouse","户外活动"])[cn_ind];
    this[0][i]    = "20190329_1";
    this[1][i++]  = (["Learning to jump in and out of the hoola hoop","户外活动:学习跳进和跳出呼啦圈"])[cn_ind];
    this[0][i]    = "20190401_1";
    this[1][i++]  = (["Helping to clean up after playing","户外活动后帮老师收拾玩具"])[cn_ind];
    this[0][i]    = "20190402_1";
    this[1][i++]  = (["Ready for an adventure","整装待发"])[cn_ind];
    this[0][i]    = "20190403_1";
    this[1][i++]  = (["Friends","小伙伴"])[cn_ind];
    this[0][i]    = "20190403_2";
    this[1][i++]  = (["Playing in the playground","户外活动"])[cn_ind];
    this[0][i]    = "20190404_1";
    this[1][i++]  = (["Playing in the playground","户外活动"])[cn_ind];
    this[0][i]    = "20190405_1";
    this[1][i++]  = (["Painting with a toy truck","用玩具卡车画画"])[cn_ind];
    this[0][i]    = "20190408_1";
    this[1][i++]  = (["Painting with toy carrots","用胡萝卜玩具画画"])[cn_ind];
    this[0][i]    = "20190409_1";
    this[1][i++]  = (["Painting with green beans","用豆角画画"])[cn_ind];
    this[0][i]    = "20190411_1";
    this[1][i++]  = (["Painting with celery","用芹菜画画"])[cn_ind];
    this[0][i]    = "20190415_1";
    this[1][i++]  = (["Painting with cookie cutters","用饼干模具绘画"])[cn_ind];
    this[0][i]    = "20190416_1";
    this[1][i++]  = (["Painting with a pompom","用绒球画画"])[cn_ind];
    this[0][i]    = "20190417_1";
    this[1][i++]  = (["Planting seeds to celebrate next week's Earth Day","种植种子来庆祝下周的地球日"])[cn_ind];
    this[0][i]    = "20190423_1";
    this[1][i++]  = (["Painting with foam blocks","用泡沫块画画"])[cn_ind];
    this[0][i]    = "20190424_1";
    this[1][i++]  = (["Enjoy a quiet reading moment","喜欢读书的球球"])[cn_ind];
    this[0][i]    = "20190425_1";
    this[1][i++]  = (["Playing with friends","户内活动"])[cn_ind];
    this[0][i]    = "20190425_2";
    this[1][i++]  = (["Enjoying the touch of soft cotton ball","玩棉花球"])[cn_ind];
    this[0][i]    = "20190426_1";
    this[1][i++]  = (["Pasting aluminum foil on colored paper","在彩纸上粘铝箔"])[cn_ind];
    this[0][i]    = "20190429_1";
    this[1][i++]  = (["Working together","一块画画"])[cn_ind];
    this[0][i]    = "20190430_1";
    this[1][i++]  = (["Classmate's birthday","同学的生日"])[cn_ind];
    this[0][i]    = "20190501_1";
    this[1][i++]  = (["Painting with a cookie cutter","用饼干模具绘画"])[cn_ind];
//    this[0][i]    = "20190501_2";
//    this[1][i++]  = (["Playing with natural fibers","感受纤维的质感"])[cn_ind];

    for (var i=0;i<this[0].length;i++){
        this[1][i] = getdate(this[0][i],this[1][i]);
    }    
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->