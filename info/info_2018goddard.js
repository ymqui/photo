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
    this[1][i++]  = (["Painting with bare hands","涂手画画"])[cn_ind];
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

    for (var i=0;i<this[0].length;i++){
        this[1][i] = this[1][i]+getdate(this[0][i]);
    }    
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->