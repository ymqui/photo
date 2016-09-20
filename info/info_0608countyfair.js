<!--
//Created by Album Builder Program Mon Aug 07 22:04:55 2006
var info_url   = "http://www.howardcountyfair.com/html/fair.htm";
var title      = "2006 Howard County Fair";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0608countyfair/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IceCastle.mid";
var midi_cr    = new Array("The Boss's Midi Favorites","http://www.afcsat.com/midi_fav.html");
 
if(window.usechinese){
    title      = "马里兰州霍华德郡年度农牧大会";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<51;i++){
        this[0][i] = "0608countyfair_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "不同年代模型的农用车。";
        this[1][1] = "抱小兔的女孩。";
        this[1][2] = "兔子。";
        this[1][3] = "女孩和兔子。";
        this[1][4] = "漂亮的鸡。";
        this[1][5] = "男孩和他的牛。";
        this[1][6] = "帮忙抓山羊的小女孩。";
        this[1][7] = "正在被梳理的绵羊。";
        this[1][8] = "舍不得离开的小男孩。";
        this[1][9] = "小男孩和小山羊。";
        this[1][10] = "让人抚摸的小鸡。";
        this[1][11] = "女孩和她的小牛犊。";
        this[1][12] = "小毛驴。";
        this[1][13] = "想喝牛奶吗？";
        this[1][14] = "漂亮的牛。";
        this[1][15] = "女孩和她的山羊。";
        this[1][16] = "坐在猪圈里的小女孩。";
        this[1][17] = "吃馅饼比赛。";
        this[1][18] = "吃馅饼的小女孩。";
        this[1][19] = "第一个吃完的。";
        this[1][20] = "刚下赛场的男孩。";
        this[1][21] = "这个女孩吃相太斯文。";
        this[1][22] = "这位吃得才象样子。";
        this[1][23] = "小男孩和他的小狗参加最漂亮动物比赛。";
        this[1][24] = "小女孩和她的山羊。";
        this[1][25] = "小女孩和她的马。";
        this[1][26] = "小女孩和她的羊驼。";
        this[1][27] = "象不象火星来的狗？";
        this[1][28] = "小BB和山羊。";
        this[1][29] = "男孩和他的山羊。";
        this[1][30] = "小男孩和他的狗。";
        this[1][31] = "小女孩和她的狗。";
        this[1][32] = "女孩和狗。";
        this[1][33] = "很刺激的大转轮。";
        this[1][34] = "这个也很刺激。";
        this[1][35] = "挤牛奶比赛。参赛的都是观众。";
        this[1][36] = "挤牛奶。";
        this[1][37] = "挤牛奶。";
        this[1][38] = "挤牛奶比赛。牛并不感到不舒服。";
        this[1][39] = "挤牛奶比赛。黑心的黄花是马里兰的州花。";
        this[1][40] = "挤牛奶比赛。";
        this[1][41] = "灯火辉煌的夜晚。";
        this[1][42] = "游乐摊档。";
        this[1][43] = "惊险转轮。";
        this[1][44] = "惊险转轮。";
        this[1][45] = "令人头晕目眩的转车。";
        this[1][46] = "惊险转轮。";
        this[1][47] = "热闹的夜晚。";
        this[1][48] = "小吃摊。";
        this[1][49] = "五彩大转轮。";
        this[1][50] = "停下来的样子。";
    }else{
        this[1][0] = "Different year models of John Deere.";
        this[1][1] = "Girl with a bunny.";
        this[1][2] = "Rabbits.";
        this[1][3] = "Girls and bunnies.";
        this[1][4] = "A beautiful chicken.";
        this[1][5] = "Boy with his cow.";
        this[1][6] = "Girl with a goat.";
        this[1][7] = "A sheep being groomed.";
        this[1][8] = "Don't want to leave.";
        this[1][9] = "A boy tending a baby goat in the petting zoo.";
        this[1][10] = "A chicken in the petting zoo.";
        this[1][11] = "A girl tending her small cow in the petting zoo.";
        this[1][12] = "A donkey.";
        this[1][13] = "Got milk?";
        this[1][14] = "A beautiful cow.";
        this[1][15] = "Girl with her goat.";
        this[1][16] = "Girls sitting in the pig pen.";
        this[1][17] = "Pie eating contest.";
        this[1][18] = "Girl in the pie eating contest.";
        this[1][19] = "The first one to finish the pie.";
        this[1][20] = "Boy with a game face.";
        this[1][21] = "Girl in the pie eating contest.";
        this[1][22] = "Girl in the pie eating contest.";
        this[1][23] = "Boy and his dog in the pretty animal contest.";
        this[1][24] = "Girl and her goat in the pretty animal contest.";
        this[1][25] = "Girl with her horse in the pretty animal contest.";
        this[1][26] = "Girl with her alpaca in the pretty animal contest.";
        this[1][27] = "Martian dog?";
        this[1][28] = "Baby with her goat in the pretty animal contest.";
        this[1][29] = "Boy and his goat in the pretty animal contest.";
        this[1][30] = "Boy and his dog in the pretty animal contest.";
        this[1][31] = "Girl with her dog in the pretty animal contest.";
        this[1][32] = "Girl and her dog in the pretty animal contest.";
        this[1][33] = "Rides in the county fair.";
        this[1][34] = "Rides in the county fair.";
        this[1][35] = "Cow milking contest. The contestants were from the audience.";
        this[1][36] = "Cow milking contest.";
        this[1][37] = "Cow milking contest.";
        this[1][38] = "Cow milking contest.";
        this[1][39] = "Cow milking contest.";
        this[1][40] = "Cow milking contest.";
        this[1][41] = "The fairground at night.";
        this[1][42] = "Entertainments.";
        this[1][43] = "The rides are even more exciting at night.";
    }
    makeface = new Array();
    makeface[0] = 13;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
