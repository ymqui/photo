<!--
var info_url   = "http://www.travelchinaguide.com/cityguides/lijiang.htm";
var title      = "Dandan's trip to Lijiang";
var cam_img    = "camera_canon_rebelxt.jpg";
var cam_tit    = "Canon SLR Digital Rebel XT, 8.0 Mega Pixels.";
var dir        = maindir+"pics/0504lijiang/";  //directory where pics are
var interval   = 5000;                         //interval for slide show in millisecond
var thumb_dir  = maindir+"thumbnail/";         //thumbnail directory
var ext        = ".jpg";                       //extension of the pic files
var midi_file  = "Sept.mid";	               //midi file name
var midi_cr    = new Array("Terra","http://www.geocities.com/RainForest/Canopy/5681/");

if(window.usechinese){
    cam_tit    = "佳能单镜头反光式 Digital Rebel XT, 800万像素。";
    title      = "欧旦旦同学的丽江游记";
}

document.title = title;

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos, shown as browser status
    this[0][0] = "0504lijiang_00";
    this[1][0] = "";
    for(var i=1;i<=25;i++){
       this[0][i] = "0504lijiang_"+(i-1).toString();
       this[1][i] = "";
    }
    if(window.usechinese){
       this[1][0]  = "生活在别处，即使生活不在别处，旅游却一定是在别处的，别处就是丽江吧";
       this[1][1]  = "在丽江，除了风景和行走之外";
       this[1][2]  = "一定有什么东西被我们忽略了";
       this[1][3]  = "只要带上心";
       this[1][4]  = "就会有那温柔的心意";
       this[1][5]  = "在丽江什么都可以做。艳遇……";
       this[1][6]  = "发呆……";
       this[1][7]  = "豪饮……";
       this[1][8]  = "放歌……";
       this[1][10]  = "那些萍水相逢的日子是留给记忆的最好礼物";
       this[1][11]  = "那些萍水相逢的日子是留给记忆的最好礼物";
       this[1][12] = "感受纳西的音乐精灵，想轻狂，想舞动";
       this[1][13] = "忙得没时间享受美好事物的说法在丽江不是事实";
       this[1][14] = "街上的生意人";
       this[1][15] = "会停下买卖来欣赏一丛鲜花";
       this[1][16] = "或凝视一会儿清澈的溪流水底";
       this[1][17] = "农夫会暂停活计";
       this[1][18] = "远望雪山变化的容颜";
       this[1][20] = "集市上的人群";
       this[1][21] = "会屏气观看一行高飞的大雁";
       this[1][22] = "满怀着寻找精神家园的冲动";
       this[1][24] = "来来往往，杂沓的人潮里，他们心存丽江";
       this[1][25] = "也听得到丽江对他们的召唤……就像你一样";
    }else{
       this[1][0]  = "Living where you are, you long to be somewhere else. Let that somewhere be Lijiang.";
       this[1][1]  = "In Lijiang, you can wander around the beautiful scenery.";
       this[1][2]  = "Yet, something is missing.";
       this[1][3]  = "Only if you bring your heart,";
       this[1][4]  = "Can you feel the tender moments.";
       this[1][5]  = "You can do anything in Lijiang. Romantic encounters...";
       this[1][6]  = "Daydreaming...";
       this[1][7]  = "Ordering a drink...";
       this[1][8]  = "Singing your heart out...";
       this[1][9]  = "Or sneering at strangers.";
       this[1][10] = "The best memories are always those effortless ones,";
       this[1][11] = "In a quiet alley, on someone else's doorstep.";
       this[1][12] = "The music in the zephyr makes you want to dance.";
       this[1][13] = "You can never be too busy to enjoy life here.";
       this[1][14] = "Shoppers on the street,";
       this[1][15] = "Will pause for the fragrance of the spring bloom,";
       this[1][16] = "Or spend a moment listening to the lullabys of the creek.";
       this[1][17] = "You simply stop,";
       this[1][18] = "To look at the clouds in the blue sky,";
       this[1][19] = "Or the ever changing face of the snow capped mountains.";
       this[1][20] = "You enjoy the crowd,";
       this[1][21] = "Yet a flock of northbound geese can always light up her face.";
       this[1][22] = "Yearning for new highs,";
       this[1][23] = "Nothing can stop your journey.";
       this[1][24] = "Even in the bustling market,";
       this[1][25] = "You can always hear the call from Lijiang."
    }
}

//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
