<!--
//Created by Album Builder Program Sun Apr 17 23:52:39 2005
var info_url   = "http://nationalzoo.si.edu/";
var title      = "National Zoo";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0504zoo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TheDance.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy4.html/");
 
if(window.usechinese){
    title      = "动物园";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<39;i++){
        this[0][i] = "0504zoo__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "大熊猫美香和添添。";
        this[1][1] = "大熊猫。";
        this[1][2] = "斑马。";
        this[1][3] = "猎豹，跑得最快的动物。";
        this[1][4] = "长颈鹿，最高的动物。";
        this[1][5] = "亚洲大象。另有两种大象在非洲。";
        this[1][6] = "尼罗河河马。";
        this[1][7] = "丹顶鹤。";
        this[1][8] = "白枕鹤。";
        this[1][9] = "南非蓑羽鹤。";
        this[1][10] = "和平鸟。";
        this[1][11] = "孔雀。";
        this[1][12] = "鸳鸯。";
        this[1][13] = "火烈鸟。";
        this[1][14] = "红鹮。";
        this[1][15] = "王鹫。";
        this[1][16] = "水獭。";
        this[1][17] = "秃头鹰。";
        this[1][18] = "加里佛尼亚海狮。";
        this[1][19] = "淡水鳐。";
        this[1][20] = "巨骨舌鱼, 最大的淡水鱼之一。";
        this[1][21] = "一只小红鹮。";
        this[1][22] = "绯红金刚鹦鹉。";
        this[1][23] = "不知名的小鸟。可能是一只银嘴唐纳雀。";
        this[1][24] = "不知名的小鸟。可能是一只棕榈唐纳雀。";
        this[1][25] = "睡狮。";
        this[1][26] = "猛虎。";
        this[1][27] = "绿海葵。";
        this[1][28] = "寄居蟹。";
        this[1][29] = "金环网蜘蛛。";
        this[1][30] = "蝴蝶。";
        this[1][31] = "蝴蝶。";
        this[1][32] = "蝴蝶。";
        this[1][33] = "蜂鸟。";
        this[1][34] = "蜂鸟。";
        this[1][35] = "扬子鳄。";
        this[1][36] = "巨蜥。";
        this[1][37] = "大猩猩。这种猩猩成年雄性背上有银白色的毛。";
        this[1][38] = "看腻了动物，看看郁金香吧。";
    }else{
        this[1][0] = "Visitor's favorite: Giant Pandas Mei Xiang and Tian Tian.";
        this[1][1] = "Giant Panda loaned from China.";
        this[1][2] = "Grevy's Zebra.";
        this[1][3] = "Cheetah mom and cub. Cheetah is the fastest land mammal.";
        this[1][4] = "Giraffe, the tallest animal in the world.";
        this[1][5] = "Asian Elephant. The other two species are the savanna and the forest elephants in Africa.";
        this[1][6] = "Nile Hippopotamus. Although hippos are vegetarian, they kill more humans then any other wild mammal does in Africa.";
        this[1][7] = "Red-crowned Crane. It can live for more than 70 years.";
        this[1][8] = "White-naped Crane.";
        this[1][9] = "Stanley Crane/Blue Crane. It is from southern Africa.";
        this[1][10] = "Fairy Bluebird. It is  from southern Asia.";
        this[1][11] = "Indian Peacock.";
        this[1][12] = "Mandarin Duck.";
        this[1][13] = "Flamingo.";
        this[1][14] = "Scarlet Ibis, the most colorful of all ibis species. It is native to South America.";
        this[1][15] = "King Vulture.";
        this[1][16] = "Beaver.";
        this[1][17] = "Bald Eagle.";
        this[1][18] = "California Sea Lion.";
        this[1][19] = "Amazon Freshwater Stingray.";
        this[1][20] = "Arapaima, one of the largest freshwater fish in the world.";
        this[1][21] = "A Scarlet Ibis chick.";
        this[1][22] = "Scarlet Macaw.";
        this[1][23] = "A cute little bird. It is probably a Silver-beaked Tanager.";
        this[1][24] = "A cute little bird. It is probably a Palm Tanager.";
        this[1][25] = "A Lion at sleep.";
        this[1][26] = "Tiger.";
        this[1][27] = "A green Anemone.";
        this[1][28] = "Hermit Crab.";
        this[1][29] = "A Golden Orb Spider.";
        this[1][30] = "A Butterfly.";
        this[1][31] = "A Butterfly.";
        this[1][32] = "A Butterfly.";
        this[1][33] = "A Costa's Hummingbird.";
        this[1][34] = "A Costa's Hummingbird.";
        this[1][35] = "Chinese Alligator, also called the Yangtze Alligator.";
        this[1][36] = "Komodo Dragon, the largest living lizard.";
        this[1][37] = "Western Lowland Gorrila. Adult males have silver hair on their backs.";
        this[1][38] = "Tired of animals? Tulips for a change.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
