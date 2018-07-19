<!--
var info_url   = "https://www.goddardschool.com/washington/gaithersburg-wind-river-lane-md";
var title      = "Nathan's Photos at Goddard School";
var dir        = maindir+"pics/2018goddard/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();
 
if(window.usechinese){
    title      = "球球在戈达德托儿所的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
 //   makeface[j++] = i;
    this[0][i]    = "20180618_1";
    this[1][i++]  = "First day at the daycare";
    this[0][i]    = "20180619_1";
    this[1][i++]  = "Painting with a pig";
    this[0][i]    = "20180620_1";
    this[1][i++]  = "Pony ride";
    this[0][i]    = "20180620_2";
    this[1][i++]  = "Looking at pictures of horses";
    this[0][i]    = "20180621_1";
    this[1][i++]  = "Holding two animal toys";
    this[0][i]    = "20180622_1";
    this[1][i++]  = "Fitting the puzzle";
    this[0][i]    = "20180622_2";
    this[1][i++]  = "Reading";
    this[0][i]    = "20180625_1";
    this[1][i++]  = "Painting with bare hands";
    this[0][i]    = "20180626_1";
    this[1][i++]  = "Playing with an oil and water sensory bottle";
    this[0][i]    = "20180628_1";
    this[1][i++]  = "Water day with Daddy";
    this[0][i]    = "20180629_1";
    this[1][i++]  = "Making a tissue paper flower";
    this[0][i]    = "20180702_1";
    this[1][i++]  = "Feeling the scent and texture of the honeycomb cereal";
    this[0][i]    = "20180703_1";
    this[1][i++]  = "Looking for worms in a bag of soil";
    this[0][i]    = "20180705_1";
    this[1][i++]  = "Painting with a stamp";
    this[0][i]    = "20180706_1";
    this[1][i++]  = "Painting with a sponge";
    this[0][i]    = "20180709_1";
    this[1][i++]  = "Finding a banana hidden under the blanket";
    this[0][i]    = "20180710_1";
    this[1][i++]  = "Enjoying the outdoors";
    this[0][i]    = "20180711_1";
    this[1][i++]  = "Playing with a stuffed toy";
    this[0][i]    = "20180712_1";
    this[1][i++]  = "In a tree house";
    this[0][i]    = "20180713_1";
    this[1][i++]  = "Art project";
    this[0][i]    = "20180716_1";
    this[1][i++]  = "Crocodiles";
    this[0][i]    = "20180717_1";
    this[1][i++]  = "Putting zigsaw puzzles together";
    this[0][i]    = "20180718_1";
    this[1][i++]  = "Animal pictures";
    this[0][i]    = "20180719_1";
    this[1][i++]  = "Mixing beans with green paint";

    if(window.usechinese){
        i = 0;
        this[1][i++] = "托儿所第一天";
        this[1][i++] = "用小猪画画";
        this[1][i++] = "骑小马";
        this[1][i++] = "看马图";
        this[1][i++] = "同时拿着两只动物玩具";
        this[1][i++] = "拼图玩具";
        this[1][i++] = "看书";
        this[1][i++] = "涂手画画";
        this[1][i++] = "玩油水感官瓶";
        this[1][i++] = "爸爸陪着玩水";
        this[1][i++] = "粘纸花";
        this[1][i++] = "感受小饼干的气味和质地";
        this[1][i++] = "在一袋土里找蚯蚓";
        this[1][i++] = "用印章画画";
        this[1][i++] = "用海绵画画";
        this[1][i++] = "找藏在毯子下面的香蕉";
        this[1][i++] = "户外活动";
        this[1][i++] = "玩玩具熊";
        this[1][i++] = "在树屋里";
        this[1][i++] = "用羽毛和纸作画";
        this[1][i++] = "看鳄鱼图";
        this[1][i++] = "玩拼图";
        this[1][i++] = "看动物图";
        this[1][i++] = "把豆子染成绿色";
    }

    for (var i=0;i<this[0].length;i++){
        this[1][i] = this[1][i]+getdate(this[0][i]);
    }    
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->