<!--
//Created by Album Builder Program Sun Jan 29 19:55:35 2006
var info_url   = "http://en.wikipedia.org/wiki/Chinese_New_Year";
var title      = "Spring Festival Eve Dinner Party";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0601party/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IfOnlyICould.mid";
var midi_cr    = new Array("Jack's MIDI Music","http://members.fortunecity.com/ajsmidi/easy/easy2.html");
 
if(window.usechinese){
    title      = "除夕夜吃火锅";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
    info_url   = "http://www.chunjie.net.cn/";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<23;i++){
        this[0][i] = "0601party_"+(i+1).toString();
        this[1][i] = "";
    }
    for (var i=23;i<31;i++){
        this[0][i] = "0601party_"+(i+2).toString();
        this[1][i] = "";
    }
    this[0][31] = "0601party_24";
    for (var i=32;i<41;i++){
        this[0][i] = "0601party_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小韵为今晚的火锅大餐准备燕皮馄饨。";
        this[1][1] = "一桌下火锅的美味。";
        this[1][2] = "大伙开吃。";
        this[1][3] = "今年的团圆饭人气颇旺。";
        this[1][4] = "汇钢边吃边谈。";
        this[1][5] = "我的头发都长回来了。";
        this[1][6] = "周诚，葛萦，和魏晶。";
        this[1][7] = "李荐扬总是热心地为大家捞好吃的。";
        this[1][8] = "小韵和汇钢。";
        this[1][9] = "两个火锅，一个辣的，一个不辣。";
        this[1][10] = "李华宁往火锅里加馄饨。";
        this[1][11] = "曹晴是今晚的女主人，得多谢她准备了这么丰盛的晚餐。";
        this[1][12] = "李华宁往火锅里加凤尾菇。";
        this[1][13] = "小韵和汇钢听得都忘了吃了。";
        this[1][14] = "李征也停箸倾听。";
        this[1][15] = "只有荐扬仍在替大伙捞吃的。";
        this[1][17] = "火锅特写。";
        this[1][18] = "陈远珍是今晚的主人。";
        this[1][19] = "李华宁。";
        this[1][20] = "葛萦准备把蔬菜捞出来。";
        this[1][21] = "周诚正在畅谈。";
        this[1][22] = "李华宁和曹晴。";
        this[1][23] = "荐扬，小韵，邓豫，和李征。";
        this[1][24] = "魏晶。";
        this[1][25] = "邓豫和周诚。";
        this[1][26] = "小韵。";
        this[1][27] = "李华宁。";
        this[1][28] = "汇钢和上海的家人通电话。";
        this[1][29] = "小韵和汇钢。";
        this[1][30] = "今晚大家吃得真开心。";
        this[1][31] = "陈远珍也是个摄影迷。以下的照片是由他拍的，所用的相机为佳能350D。";
        this[1][32] = "周诚。";
        this[1][33] = "小韵。";
        this[1][34] = "李华宁。";
        this[1][35] = "李华宁。";
        this[1][36] = "李荐扬。";
        this[1][37] = "魏晶。";
        this[1][38] = "邓豫和周诚。";
        this[1][39] = "葛萦。";
        this[1][40] = "祝大家新年快乐！";

    }else{
        this[1][0] = "Yun making dumplings.";
        this[1][1] = "Food for the hot pot.";
        this[1][2] = "Spring festival is the most important Chinese holiday.";
        this[1][3] = "On spring festival eve, families gather for the reunion dinner.";
        this[1][4] = "Huigang is talking about movies.";
        this[1][5] = "Yiming.";
        this[1][6] = "Cheng Zhou, Ying Ge, and Jing Wei are enjoying the food and conversation.";
        this[1][7] = "Jianyang is cooking the food for everyone.";
        this[1][8] = "Yun and Huigang.";
        this[1][9] = "The dinner table.";
        this[1][10] = "Huaning Li putting dumplings into the pot.";
        this[1][11] = "Qing Cao, the busy hostess.";
        this[1][12] = "Huaning Li adding mushrooms to the hot pot.";
        this[1][13] = "Yun and Huigang listening to the conversation.";
        this[1][14] = "Zheng Li is also absorbed in the conversation.";
        this[1][15] = "Jianyang is still busy cooking food for others.";
        this[1][17] = "The hot pot.";
        this[1][18] = "The host, Yuanzhen Chen.";
        this[1][19] = "Huaning Li.";
        this[1][20] = "Ying Ge.";
        this[1][21] = "Cheng Zhou is talking about the Chinese economists.";
        this[1][22] = "Huaning Li and Qing Cao.";
        this[1][23] = "Jianyang, Yun, Yu, and Zheng.";
        this[1][24] = "Jing Wei.";
        this[1][25] = "Yu Deng and Cheng Zhou.";
        this[1][26] = "Yun.";
        this[1][27] = "Huaning Li.";
        this[1][28] = "Huigang on a phone call to his family in Shanghai.";
        this[1][29] = "Yun and Huigang.";
        this[1][30] = "The table is left with empty dishes.";
        this[1][31] = "Yuanzhen Chen with his Canon 350D. The photos after this were shot by him.";
        this[1][32] = "Cheng Zhou.";
        this[1][33] = "Yun.";
        this[1][34] = "Huaning Li.";
        this[1][35] = "Huaning Li.";
        this[1][36] = "Jianyang Li.";
        this[1][37] = "Jing Wei.";
        this[1][38] = "Yu Deng and Cheng Zhou.";
        this[1][39] = "Ying Ge.";
        this[1][40] = "Happy New Year!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
