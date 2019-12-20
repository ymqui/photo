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
    this[1][i++]  = (["Playing with classmate Samuel","和同学Samuel一起玩玩具"])[cn_ind];
    this[0][i]    = "20180917_1";
    this[1][i++]  = (["Reading","看书"])[cn_ind];
    this[0][i]    = "20180918_1";
    this[1][i++]  = (["Reaching for photos","伸手拿照片"])[cn_ind];
    this[0][i]    = "20180919_1";
    this[1][i++]  = (["Painting with tree leaves","用树叶画画"])[cn_ind];
    this[0][i]    = "20180920_1";
    this[1][i++]  = (["Exploring toy fruit with Duke","和同学Duke一起研究玩具水果"])[cn_ind];
    this[0][i]    = "20180921_1";
    this[1][i++]  = (["Group painting","集体绘画"])[cn_ind];
    this[0][i]    = "20180924_1";
    this[1][i++]  = (["Little firefighter","小小消防员"])[cn_ind];
    this[0][i]    = "20180924_2";
    this[1][i++]  = (["Playing with red paint","徒手画画"])[cn_ind];
    this[0][i]    = "20180924_3";
    this[1][i++]  = (["Eating finger food","吃切成小块的水果"])[cn_ind];
    this[0][i]    = "20180926_1";
    this[1][i++]  = (["Classmate Sawyer's birthday celebration","同学Sawyer的生日"])[cn_ind];
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
    this[1][i++]  = (["Classmate Serafina's birthday celebration","同学Serafina的生日"])[cn_ind];
    this[0][i]    = "20181010_1";
    this[1][i++]  = (["Playing with classmate Serafina","和同学Serafina一起玩"])[cn_ind];
    this[0][i]    = "20181010_2";
    this[1][i++]  = (["Little artist","小画家"])[cn_ind];
    this[0][i]    = "20181011_1";
    this[1][i++]  = (["Gluing feathers","粘羽毛"])[cn_ind];
    this[0][i]    = "20181012_1";
    this[1][i++]  = (["Having snack together","一起吃零食"])[cn_ind];
    this[0][i]    = "20181016_1";
    this[1][i++]  = (["Gluing hexagons","粘图"])[cn_ind];
    this[0][i]    = "20181017_1";
    this[1][i++]  = (["Playing with classmate Duke","和同学Duke一起玩"])[cn_ind];
    this[0][i]    = "20181022_1";
    this[1][i++]  = (["Wearing hard hat","戴安全帽"])[cn_ind];
    this[0][i]    = "20181023_1";
    this[1][i++]  = (["Playing with classmate Brayden","和同学Brayden一起玩"])[cn_ind];
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
    this[1][i++]  = (["Exploring the tunnel with Brayden","和同学Brayden一起玩"])[cn_ind];
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
    this[1][i++]  = (["Reading with classmate Samuel","和同学Samuel一起读书"])[cn_ind];
    this[0][i]    = "20181119_1";
    this[1][i++]  = (["Making a paper art","粘纸作画"])[cn_ind];
    this[0][i]    = "20181120_1";
    this[1][i++]  = (["Wearing pilgrim's hat","庆祝感恩节戴清教徒的帽子"])[cn_ind];
    this[0][i]    = "20181210_1";
    this[1][i++]  = (["Painting with a bingo dotter","用宾果笔画画"])[cn_ind];
    this[0][i]    = "20181211_1";
    this[1][i++]  = (["Exploring the bubble wrap","在泡泡包装膜上爬"])[cn_ind];
    this[0][i]    = "20181211_2";
    this[1][i++]  = (["Enjoying the playtime with Samuel","和同学Samuel一起玩得很开心"])[cn_ind];
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
    this[1][i++]  = (["Picking up marshmallows with Theo","和同学Theo一起拿棉花糖"])[cn_ind];
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
    this[1][i++]  = (["Classmate Theo's birthday celebration","同学Theo的生日"])[cn_ind];
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
    this[1][i++]  = (["Playing with plastic fast food with Adeleine","和同学Adeleine一起玩塑料快餐模型"])[cn_ind];
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
    this[1][i++]  = (["Playing in the playhouse with Brayden and Theo","和同学Brayden和Theo在户外活动"])[cn_ind];
    this[0][i]    = "20190329_1";
    this[1][i++]  = (["Learning to jump in and out of the hoola hoop","户外活动:学习跳进和跳出呼啦圈"])[cn_ind];
    this[0][i]    = "20190401_1";
    this[1][i++]  = (["Helping to clean up after playing","户外活动后帮老师收拾玩具"])[cn_ind];
    this[0][i]    = "20190402_1";
    this[1][i++]  = (["Ready for an adventure","整装待发"])[cn_ind];
    this[0][i]    = "20190403_1";
    this[1][i++]  = (["Friend Duke","小伙伴Duke"])[cn_ind];
    this[0][i]    = "20190403_2";
    this[1][i++]  = (["Playing in the playground","户外活动"])[cn_ind];
    this[0][i]    = "20190404_1";
    this[1][i++]  = (["Playing in the playground with Duke and Brayden","和同学Duke和Brayden在户外活动"])[cn_ind];
    this[0][i]    = "20190405_1";
    this[1][i++]  = (["Painting with a toy truck","用玩具卡车画画"])[cn_ind];
    this[0][i]    = "20190408_1";
    this[1][i++]  = (["Painting with toy carrots","用胡萝卜玩具画画"])[cn_ind];
    this[0][i]    = "20190409_1";
    this[1][i++]  = (["Painting with green beans","用豆角画画"])[cn_ind];
    this[0][i]    = "20190411_1";
    this[1][i++]  = (["Painting with celery","用芹菜画画"])[cn_ind];
    this[0][i]    = "20190415_1";
    this[1][i++]  = (["Painting with cookie cutters with classmate Theo","和同学Theo用饼干模具绘画"])[cn_ind];
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
    this[1][i++]  = (["Working together with classmate Brayden","和同学Brayden一块画画"])[cn_ind];
    this[0][i]    = "20190430_1";
    this[1][i++]  = (["Classmate Adeleine's birthday","同学Adeleine的生日"])[cn_ind];
    this[0][i]    = "20190501_1";
    this[1][i++]  = (["Painting with a cookie cutter","用饼干模具绘画"])[cn_ind];
    this[0][i]    = "20190501_2";
    this[1][i++]  = (["Playing with natural fibers","感受纤维的质感"])[cn_ind];
    this[0][i]    = "20190502_1";
    this[1][i++]  = (["Making a collage using hay and popsicle sticks","用胶水粘拼贴画"])[cn_ind];
    this[0][i]    = "20190506_1";
    this[1][i++]  = (["Goal of painting: making a mess","徒手画画"])[cn_ind];
    this[0][i]    = "20190507_1";
    this[1][i++]  = (["Playing with paper","玩纸片"])[cn_ind];
    this[0][i]    = "20190508_1";
    this[1][i++]  = (["Painting with a cookie cutter","用饼干模具绘画"])[cn_ind];
    this[0][i]    = "20190508_2";
    this[1][i++]  = (["Playing in the playground with Brayden and Theo","和同学Theo和Brayden在户外活动"])[cn_ind];
    this[0][i]    = "20190508_3";
    this[1][i++]  = (["Working on the Mother's Day project","准备母亲节礼物"])[cn_ind];
    this[0][i]    = "20190508_4";
    this[1][i++]  = (["Mother's Day gift","母亲节礼物"])[cn_ind];
    this[0][i]    = "20190520_1";
    this[1][i++]  = (["Mixing paint in a ziplock bag","在三明治袋中混涂料"])[cn_ind];
    this[0][i]    = "20190528_1";
    this[1][i++]  = (["Painting with a flower","用一朵花绘画"])[cn_ind];
    this[0][i]    = "20190529_1";
    this[1][i++]  = (["Feeling the texture of a bag of soil","感受一袋泥土的质感"])[cn_ind];
    this[0][i]    = "20190605_1";
    this[1][i++]  = (["Painting with a paintbrush left-handed","用左手拿画笔绘画"])[cn_ind];
    this[0][i]    = "20190611_1";
    this[1][i++]  = (["Riding the mini trike","骑小三轮车"])[cn_ind];
    this[0][i]    = "20190612_2";
    this[1][i++]  = (["Father's day gifts","父亲节礼物"])[cn_ind];
    this[0][i]    = "20190612_1";
    this[1][i++]  = (["Father's day gifts. Nathan's handprint is on the coffee mug","父亲节礼物。咖啡杯上的鱼是球球的手印"])[cn_ind];
    this[0][i]    = "20190612_3";
    this[1][i++]  = (["Transitioning to big boy nap, no longer at the crib","开始新的午睡方式，不再睡婴儿床"])[cn_ind];
    this[0][i]    = "20190613_1";
    this[1][i++]  = (["No problem napping in the rollee pollee sheet for the second straight day","午睡"])[cn_ind];
    this[0][i]    = "20190614_letter";
    this[1][i++]  = (['"...to know that you are special just because you are you!"-letter from Mrs. Bringas and Ms. Wahrhaftig',"Bringas老师和Wahrhaftig老师给球球的毕业留言"])[cn_ind];
    this[0][i]    = "20190614_diploma";
    this[1][i++]  = (["Diploma from Caterpillar Classroom","毛毛虫教室的毕业证书"])[cn_ind];
    this[0][i]    = "20190617_1";
    this[1][i++]  = (["Having morning snack on the first day at the new Bee Classroom","在小蜜蜂新教室的第一天集体吃零食"])[cn_ind];
    this[0][i]    = "20190618_1";
    this[1][i++]  = (["Painting with pool noodle","用泡沫圈绘画"])[cn_ind];
    this[0][i]    = "20190618_2";
    this[1][i++]  = this[1][i-2];
    this[0][i]    = "20190619_1";
    this[1][i++]  = (["Pointing to the balls inside the toy","指出玩具里面的小球"])[cn_ind];
    this[0][i]    = "20190621_1";
    this[1][i++]  = (["Water day","玩水"])[cn_ind];
    this[0][i]    = "20190624_1";
    this[1][i++]  = (["Taking pictures","拍照"])[cn_ind];
    this[0][i]    = "20190625_1";
    this[1][i++]  = (["Having a great time outside riding trike","很开心地在户外骑三轮车"])[cn_ind];
    this[0][i]    = "20190626_1";
    this[1][i++]  = (["Collecting feathers with Theo","和同学Theo一起收集羽毛"])[cn_ind];
    this[0][i]    = "20190626_2";
    this[1][i++]  = (["Drawing on the ground with Ms Barnes","和Barnes老师一起在地上画画"])[cn_ind];
    this[0][i]    = "20190627_1";
    this[1][i++]  = (["Reading time","读书"])[cn_ind];
    this[0][i]    = "20190628_1";
    this[1][i++]  = (["Pointing out where the nose is","跟老师指出鼻子在哪里"])[cn_ind];
    this[0][i]    = "20190701_1";
    this[1][i++]  = (["Out for a walk","户外活动"])[cn_ind];
    this[0][i]    = "20190701_2";
    this[1][i++]  = (["Playing in the tree house","在树屋里玩"])[cn_ind];
    this[0][i]    = "20190702_1";
    this[1][i++]  = (["Close encounter with a pony","还是不敢骑小马"])[cn_ind];
    this[0][i]    = "20190703_1";
    this[1][i++]  = (["Nathan is reading his favorite book, Goodnight Moon","球球在读他最喜欢的书<<晚安月亮>>"])[cn_ind];
    this[0][i]    = "20190708_1";
    this[1][i++]  = (["Playing with play dough (Nathan weighs 26 lb 11 oz today)","玩橡皮泥(球球今天测体重24.2斤)"])[cn_ind];
    this[0][i]    = "20190709_1";
    this[1][i++]  = (["Drawing with rainbow crayons","用绑在一起的彩虹蜡笔画画"])[cn_ind];
    this[0][i]    = "20190710_1";
    this[1][i++]  = (["Gluing shapes together to form a collage","和同学一起粘拼贴画"])[cn_ind];
    this[0][i]    = "20190711_1";
    this[1][i++]  = (["Using cups to paint a circle collage","用杯子画圆形拼贴画"])[cn_ind];
    this[0][i]    = "20190712_1";
    this[1][i++]  = (["Painting with a ball","用球画画"])[cn_ind];
    this[0][i]    = "20190715_1";
    this[1][i++]  = (["Gluing colored tissue paper pieces","粘贴彩色薄纸片"])[cn_ind];
    this[0][i]    = "20190715_2";
    this[1][i++]  = (["Playing with cutout pictures of fish","玩鱼的图片"])[cn_ind];
    this[0][i]    = "20190716_1";
    this[1][i++]  = (["Painting with a Q-tip","用棉签画画"])[cn_ind];
    this[0][i]    = "20190717_1";
    this[1][i++]  = (["Making a phone call","打电话"])[cn_ind];
    this[0][i]    = "20190718_1";
    this[1][i++]  = (["Playing a game with classmates and Ms Barnes using a plastic egg","Barnes老师带大家用塑料蛋玩游戏"])[cn_ind];
    this[0][i]    = "20190719_1";
    this[1][i++]  = (["Painting with fly swatter with the help of Ms Luczon","Luczon老师带着用苍蝇拍画画"])[cn_ind];
    this[0][i]    = "20190722_1";
    this[1][i++]  = (["Drawing with chalk","用粉笔在地上画画"])[cn_ind];
    this[0][i]    = "20190723_1";
    this[1][i++]  = (["Making a collage of paper shapes","粘纸张拼贴画"])[cn_ind];
    this[0][i]    = "20190724_1";
    this[1][i++]  = (["Using a mold to cut out a butterfly from rubber clay","从橡皮泥里切出一只蝴蝶来"])[cn_ind];
    this[0][i]    = "20190725_1";
    this[1][i++]  = (["Outdoor fun","Luczon老师带着大家在户外活动"])[cn_ind];
    this[0][i]    = "20190730_1";
    this[1][i++]  = (["Painting with bare hands","徒手画画"])[cn_ind];
    this[0][i]    = "20190731_1";
    this[1][i++]  = (["Jumping on stars","在星星图案上跳"])[cn_ind];
    this[0][i]    = "20190801_1";
    this[1][i++]  = (["Reading with Ms. Cruz","和Cruz老师一起读书"])[cn_ind];
    this[0][i]    = "20190802_1";
    this[1][i++]  = (["Drawing on paper plate","在纸盘子上画画"])[cn_ind];
    this[0][i]    = "20190802_2";
    this[1][i++]  = (["Pointing out friends","Barnes老师带大家玩游戏"])[cn_ind];
    this[0][i]    = "20190805_1";
    this[1][i++]  = (["Painting with a paint brush","用画笔画画"])[cn_ind];
    this[0][i]    = "20190806_1";
    this[1][i++]  = (["Mixing red paint and yellow paint to make orange","混合红色和黄色颜料调配出橙色"])[cn_ind];
    this[0][i]    = "20190808_1";
    this[1][i++]  = (["Singing the Choo Choo Train song","Luczon老师带大家一起唱火车呜呜歌"])[cn_ind];
    this[0][i]    = "20190809_1";
    this[1][i++]  = (["Making a collage of color paper","粘纸张拼贴画"])[cn_ind];
    this[0][i]    = "20190812_1";
    this[1][i++]  = (["Flying like a butterfly","小蝴蝶飞呀飞"])[cn_ind];
    this[0][i]    = "20190813_1";
    this[1][i++]  = (["Drawing dots with a Bingo dabber","用宾果笔画圆点"])[cn_ind];
    this[0][i]    = "20190813_2";
    this[1][i++]  = (["Playing in the playground","户外活动"])[cn_ind];
    this[0][i]    = "20190814_1";
    this[1][i++]  = (["Painting with a fork","用叉子画画"])[cn_ind];
    this[0][i]    = "20190814_2";
    this[1][i++]  = (["Pushing the train outside","推小火车"])[cn_ind];
    this[0][i]    = "20190815_1";
    this[1][i++]  = (["Painting with a sponge","用海绵画画"])[cn_ind];
    this[0][i]    = "20190816_1";
    this[1][i++]  = (["Drawing on the wallpaper","在墙纸上画画"])[cn_ind];
    this[0][i]    = "20190819_1";
    this[1][i++]  = (["Reading","读书"])[cn_ind];
    this[0][i]    = "20190820_1";
    this[1][i++]  = (["Riding the trike","骑小三轮车"])[cn_ind];
    this[0][i]    = "20190821_1";
    this[1][i++]  = (["Playing with play dough","玩橡皮泥"])[cn_ind];
    this[0][i]    = "20190826_1";
    this[1][i++]  = (["Drawing","Luczon老师带大家画画"])[cn_ind];
    this[0][i]    = "20190906_1";
    this[1][i++]  = (["Painting on the first day in the new classroom","在新教室的第一天"])[cn_ind];
    this[0][i]    = "20190909_1";
    this[1][i++]  = (["Nathan loves painting","喜爱画画的球球"])[cn_ind];
    this[0][i]    = "20190909_2";
    this[1][i++]  = (["Dancing and making music with instruments","球球边跳舞边和同学一起演奏音乐"])[cn_ind];
    this[0][i]    = "20190910_1";
    this[1][i++]  = (["Counting bears","数小熊"])[cn_ind];
    this[0][i]    = "20190911_1";
    this[1][i++]  = (["Gluing cutouts of different body parts","粘不同身体部位的纸张"])[cn_ind];
    this[0][i]    = "20190912_1";
    this[1][i++]  = (["Taste testing the sunflower butter","品尝葵花籽酱的味道"])[cn_ind];
    this[0][i]    = "20190913_1";
    this[1][i++]  = (["Picking out color balls with a pair of tweezers","用镊子夹出彩球"])[cn_ind];
    this[0][i]    = "20190916_1";
    this[1][i++]  = (["Ms Burke domonstrates how to create an ocean in a bottle","坐在Burke老师身边看她给大家演示瓶子里的海洋"])[cn_ind];
    this[0][i]    = "20190916_2";
    this[1][i++]  = (["Ms Burke domonstrates how to create an ocean in a bottle","坐在Burke老师身边看她给大家演示瓶子里的海洋"])[cn_ind];
    this[0][i]    = "20190917_1";
    this[1][i++]  = (["Painting a family tree","画画"])[cn_ind];
    this[0][i]    = "20190917_2";
    this[1][i++]  = (["Playing with sponges","玩海绵"])[cn_ind];
    this[0][i]    = "20190918_1";
    this[1][i++]  = (["Using yarn to paint a picture","用纱线画画"])[cn_ind];
    this[0][i]    = "20190919_1";
    this[1][i++]  = (["Searching for people under the beans","在豆子下找小人"])[cn_ind];
    this[0][i]    = "20190920_1";
    this[1][i++]  = (["Feeling the texture of rice and beans","感受大米和豆子的质感"])[cn_ind];
    this[0][i]    = "20190920_2";
    this[1][i++]  = (["Playing in the gym","在健身房玩球"])[cn_ind];
    this[0][i]    = "20190923_1";
    this[1][i++]  = (["Building with the straws and popsicle sticks","用吸管和小木棒搭房子"])[cn_ind];
    this[0][i]    = "20190923_2";
    this[1][i++]  = (["Creating a picture with paper of different shapes","用不同形状的纸张拼图"])[cn_ind];
    this[0][i]    = "20190924_1";
    this[1][i++]  = (["Playing outside","户外活动"])[cn_ind];
    this[0][i]    = "20190926_1";
    this[1][i++]  = (["Painting with a sponge","用海绵画画"])[cn_ind];
    this[0][i]    = "20190927_1";
    this[1][i++]  = (["Painting with a fork","用叉子画画"])[cn_ind];
    this[0][i]    = "20190930_1";
    this[1][i++]  = (["Playing with playdough","玩橡皮泥"])[cn_ind];
    this[0][i]    = "20190930_2";
    this[1][i++]  = (["Watching the rain","看雨"])[cn_ind];
    this[0][i]    = "20191001_1";
    this[1][i++]  = (["Using fingers to paint with different fall colors","用手指画秋天不同的色彩"])[cn_ind];
    this[0][i]    = "20191002_1";
    this[1][i++]  = (["Using an apple to paint with different fall colors","用苹果画秋天不同的色彩"])[cn_ind];
    this[0][i]    = "20191003_1";
    this[1][i++]  = (["First yoga class","在健身房上第一堂瑜伽课"])[cn_ind];
    this[0][i]    = "20191003_2";
    this[1][i++]  = (["First yoga class","在健身房上第一堂瑜伽课"])[cn_ind];
    this[0][i]    = "20191004_1";
    this[1][i++]  = (["Making a leaf collage","拼贴红叶"])[cn_ind];
    this[0][i]    = "20191007_1";
    this[1][i++]  = (["Painting with a fork","用叉子画画"])[cn_ind];
    this[0][i]    = "20191007_2";
    this[1][i++]  = (["Digging for grasshoppers","挖蚱蜢"])[cn_ind];
    this[0][i]    = "20191008_1";
    this[1][i++]  = (["Learning how to use a pair of scissors to cut spots out of a piece of paper","练习使用剪刀剪纸"])[cn_ind];
    this[0][i]    = "20191008_2";
    this[1][i++]  = (["Watching Ms Burke performing a science experiment","看Burke老师给大家演示化学反应"])[cn_ind];
    this[0][i]    = "20191009_1";
    this[1][i++]  = (["Gluing color paper","贴彩色小纸片"])[cn_ind];
    this[0][i]    = "20191010_1";
    this[1][i++]  = (["Visiting a fire truck after meeting the firefighers","参观消防车"])[cn_ind];
    this[0][i]    = "20191010_2";
    this[1][i++]  = (["A special visit from the firefighters","消防员来学校进行防火安全教育"])[cn_ind];
    this[0][i]    = "20191011_1";
    this[1][i++]  = (["Sorting pictures of fireman hats by their size","按大小分列消防员帽子的图片"])[cn_ind];
    this[0][i]    = "20191011_2";
    this[1][i++]  = (["Drawing a phone","画电话"])[cn_ind];
    this[0][i]    = "20191015_1";
    this[1][i++]  = (["Using a hammer to splatter paint","玩塑料锤子"])[cn_ind];
    this[0][i]    = "20191017_1";
    this[1][i++]  = (["Learning a new yoga pose, Downward Dog","跟老师学新的瑜伽姿势-下犬式"])[cn_ind];
    this[0][i]    = "20191017_2";
    this[1][i++]  = (["Matching dump trucks by their size","按翻斗卡车大小匹配图片"])[cn_ind];
    this[0][i]    = "20191021_1";
    this[1][i++]  = (["Making a collage with pictures of pumpkins","用胶水贴南瓜图"])[cn_ind];
    this[0][i]    = "20191021_2";
    this[1][i++]  = (["Making a collage with pictures of pumpkins","用胶水贴南瓜图"])[cn_ind];
    this[0][i]    = "20191021_3";
    this[1][i++]  = (["Having fun in the gym","在健身房玩"])[cn_ind];
    this[0][i]    = "20191022_1";
    this[1][i++]  = (["Having fun in the gym","在健身房玩"])[cn_ind];
    this[0][i]    = "20191023_1";
    this[1][i++]  = (["Tasting canned pumpkin","品尝南瓜的味道"])[cn_ind];
    this[0][i]    = "20191024_1";
    this[1][i++]  = (["Practicing yoga with Ms. Burtcher","跟Burtcher老师一起练习瑜伽"])[cn_ind];
    this[0][i]    = "20191025_1";
    this[1][i++]  = (["Drawing pumpkins","画南瓜"])[cn_ind];
    this[0][i]    = "20191025_2";
    this[1][i++]  = (["Learning sign language from Ms. Bassett","跟Bassett老师学手语"])[cn_ind];
    this[0][i]    = "20191028_1";
    this[1][i++]  = (["Moving while pushing on the scooter","提高运动能力"])[cn_ind];
    this[0][i]    = "20191030_1";
    this[1][i++]  = (["Picking a pumpkin","挑一个南瓜"])[cn_ind];
    this[0][i]    = "20191030_2";
    this[1][i++]  = (["Picking a pumpkin","挑南瓜"])[cn_ind];
    this[0][i]    = "20191031_1";
    this[1][i++]  = (["Painting a pumpkin","涂南瓜"])[cn_ind];
    this[0][i]    = "20191031_2";
    this[1][i++]  = (["Happy Birthday!","生日快乐！"])[cn_ind];
    this[0][i]    = "20191031_3";
    this[1][i++]  = (["Halloween group photo","万圣节集体照"])[cn_ind];
    this[0][i]    = "20191104_1";
    this[1][i++]  = (["Matching colored bean bags with the colored spots","将彩色豆袋放在相匹配的彩色斑点里"])[cn_ind];
    this[0][i]    = "20191104_2";
    this[1][i++]  = (["Scooping up beans with a measuring cup","用量杯装豆子"])[cn_ind];
    this[0][i]    = "20191105_1";
    this[1][i++]  = (["Painting with a cotton swab","用棉签画画"])[cn_ind];
    this[0][i]    = "20191105_2";
    this[1][i++]  = (["Watching Ms Burke making a fizzy lemonade","看Burke老师调泡泡柠檬水"])[cn_ind];
    this[0][i]    = "20191106_1";
    this[1][i++]  = (["Mixing cookie dough","混合饼干面团"])[cn_ind];
    this[0][i]    = "20191107_1";
    this[1][i++]  = (["Helping Ms Burke to make playdough","帮Burke老师制作橡皮泥"])[cn_ind];
    this[0][i]    = "20191108_1";
    this[1][i++]  = (["Singing and dancing","唱歌跳舞"])[cn_ind];
    this[0][i]    = "20191108_2";
    this[1][i++]  = (["Singing and dancing with Mrs Worley","Worley老师带大家唱歌跳舞"])[cn_ind];
    this[0][i]    = "20191108_3";
    this[1][i++]  = (["Watching Ms Burke making a fizzy Kool-Aid","看Burke老师调泡泡饮料"])[cn_ind];
    this[0][i]    = "20191111_1";
    this[1][i++]  = (["Pouring water from a cup into a measuring cup","将水从杯子倒入量杯"])[cn_ind];
    this[0][i]    = "20191113_1";
    this[1][i++]  = (["Tasting a piece of lemon","品尝柠檬的味道"])[cn_ind];
    this[0][i]    = "20191115_1";
    this[1][i++]  = (["Painting with a dotter","用宾果笔画圆点"])[cn_ind];
    this[0][i]    = "20191118_1";
    this[1][i++]  = (["Mixing lemonade","帮老师搅拌柠檬水"])[cn_ind];
    this[0][i]    = "20191119_1";
    this[1][i++]  = (["Setting a placemat","在餐垫上放置餐具"])[cn_ind];
    this[0][i]    = "20191119_2";
    this[1][i++]  = (["Learning Spanish with Ms Quinones","跟Quinones老师学西班牙语"])[cn_ind];
    this[0][i]    = "20191120_1";
    this[1][i++]  = (["Painting with bubble wrap","用气泡包装膜画画"])[cn_ind];
    this[0][i]    = "20191120_2";
    this[1][i++]  = (["Singing with Ms Worley","Worley老师带大家唱歌"])[cn_ind];
    this[0][i]    = "20191121_1";
    this[1][i++]  = (["Painting with a pepper","用青椒画画"])[cn_ind];
    this[0][i]    = "20191121_2";
    this[1][i++]  = (["Making a trail mix with Ms Burke","看Burke老师混合什锦干果"])[cn_ind];
    this[0][i]    = "20191125_1";
    this[1][i++]  = (["Getting ready for the Turkey Trot","准备参加感恩节“火鸡跑”"])[cn_ind];
    this[0][i]    = "20191125_2";
    this[1][i++]  = (["Lining up for the Turkey Trot","排队出发"])[cn_ind];
    this[0][i]    = "20191125_3";
    this[1][i++]  = (["Getting some stretches in","等待比赛开始"])[cn_ind];
    this[0][i]    = "20191125_4";
    this[1][i++]  = (["On the marks","在起跑线上"])[cn_ind];
    this[0][i]    = "20191125_5";
    this[1][i++]  = (["Off to the races","开始比赛"])[cn_ind];
    this[0][i]    = "20191126_1";
    this[1][i++]  = (["Drawing with crayons","用蜡笔画画"])[cn_ind];
    this[0][i]    = "20191202_1";
    this[1][i++]  = (["Hanging out with Ms Aya in the gym","和Aya老师在健身房玩球"])[cn_ind];
    this[0][i]    = "20191203_1";
    this[1][i++]  = (["Solving a puzzle","玩拼图游戏"])[cn_ind];
    this[0][i]    = "20191203_2";
    this[1][i++]  = (["Learning Spanish with Ms Quinones","跟Quinones老师学西班牙语"])[cn_ind];
    this[0][i]    = "20191204_1";
    this[1][i++]  = (["Singing a song about gingerbread men with Ms Worley","Worley老师带大家唱姜饼人的歌"])[cn_ind];
    this[0][i]    = "20191209_1";
    this[1][i++]  = (["Painting snowflake","画雪花"])[cn_ind];
    this[0][i]    = "20191210_1";
    this[1][i++]  = (["Playing a color game with Ms Quinones in Spanish","跟Quinones老师用西班牙语玩游戏"])[cn_ind];
    this[0][i]    = "20191211_1";
    this[1][i++]  = (["Counting hats","数帽子"])[cn_ind];
    this[0][i]    = "20191212_1";
    this[1][i++]  = (["Glueing marshmallows along the letter N","沿字母N粘棉花糖"])[cn_ind];
    this[0][i]    = "20191213_1";
    makeface[j++] = i;
    this[1][i++]  = (["Dressing up with friends","玩打扮游戏"])[cn_ind];
    this[0][i]    = "20191213_2";
    this[1][i++]  = (["Glueing cotton balls","粘棉花球"])[cn_ind];
    this[0][i]    = "20191216_1";
    this[1][i++]  = (["Playing indoor hockey","打室内曲棍球"])[cn_ind];
    this[0][i]    = "20191216_2";
    this[1][i++]  = (["Walking in the snow","踏雪"])[cn_ind];
    this[0][i]    = "20191219_1";
    this[1][i++]  = (["Practicing the butterfly pose in Ms Burcher's yoga class","练习Burcher老师教的瑜伽新姿势"])[cn_ind];
    this[0][i]    = "20191220_1";
    this[1][i++]  = (["Listening to Alexander's Mom reading a story","听同学Alexander的妈妈读故事"])[cn_ind];
    this[0][i]    = "20191220_2";
    this[1][i++]  = (["Listening to Cadence's Mom reading a story","听同学Cadence的妈妈读故事"])[cn_ind];

    for (var i=0;i<this[0].length;i++){
        this[1][i] = getdate(this[0][i],this[1][i]);
    }    
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
