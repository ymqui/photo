<!--
var info_url   = "http://www.nps.gov/acad/";
var title      = "Acadia National Park";
var cam_img    = "camera_canon_a80.jpg"
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels."
var dir        = maindir+"pics/0409acadia/"; //directory where pics are
var interval   = 5000;                       //interval for slide show in millisecond
var thumb_dir  = maindir+"thumbnail/";       //thumbnail directory
var ext        = ".jpg";                     //extension of the pic files
var midi_file  = "Shenando.mid";
var midi_cr    = new Array("Muzition's Corner","http://snow.prohosting.com/muzition/new.html");
//a folk song 

if(window.usechinese){
    cam_tit    = "佳能Powershot A80, 400万像素。";
    title      = "阿卡迪亚公园";
}

document.title = title;

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos, shown as browser status
    for (var i=0;i<61;i++){
        this[0][i] = "0409acadia_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "海墙，位于阿卡迪亚公园所在的沙漠山岛南端。";
        this[1][1] = "海墙露营地。";
        this[1][2] = "帐篷前。";
        this[1][3] = "8:00入睡袋，久久难以合眼。";
        this[1][4] = "煮啥？";
        this[1][5] = "方便面。";
        this[1][6] = "桂花鱼港。";
        this[1][7] = "桂花鱼港灯塔。";
        this[1][8] = "沼泽地。";
        this[1][9] = "Upper Hadlock塘。";
        this[1][10] = "东北港。";
        this[1][11] = "东北港。";
        this[1][12] = "海豹港。";
        this[1][13] = "Bar Harbor小镇。";
        this[1][14] = "Bar Harbor小镇。";
        this[1][15] = "Bar岛。";
        this[1][16] = "豪猪岛。";
        this[1][17] = "缅因州典型的路边龙虾饭店。";
        this[1][18] = "烧木头的炉灶，颇象老家制酒的炉子。";
        this[1][19] = "是我的吗？";
        this[1][20] = "真馋人。";
        this[1][21] = "呵呵，壳虽硬，可难不倒我。";
        this[1][22] = "应声湖。";
        this[1][23] = "阿卡迪亚峰顶。";
        this[1][24] = "泡泡湖。";
        this[1][25] = "卡迪拉克峰顶。";
        this[1][26] = "Bar Harbor小镇和周围的小岛。";
        this[1][27] = "海狸坝塘。";
        this[1][28] = "阡沛岭(Champlain)峰东侧，悬崖道隐藏其间。";
        this[1][29] = "悬崖道，蓝色印记为路标。";
        this[1][30] = "悬崖道。";
        this[1][31] = "悬崖道。";
        this[1][32] = "悬崖道。";
        this[1][33] = "悬崖道。";
        this[1][34] = "俯视停车场。";
        this[1][35] = "悬崖道。";
        this[1][36] = "悬崖道。有劲没胆莫上来。";
        this[1][37] = "悬崖道。";
        this[1][38] = "法国人湾。";
        this[1][39] = "阡沛岭峰顶。";
        this[1][40] = "豪猪岛。";
        this[1][41] = "熊溪道，比起悬崖道来好走多了。";
        this[1][42] = "沙滩。";
        this[1][43] = "沙滩。";
        this[1][44] = "响雷洞附近的石崖。";
        this[1][45] = "响雷洞附近的石崖。";
        this[1][46] = "响雷洞。";
        this[1][47] = "海獭湾。";
        this[1][48] = "我叫它海獭塘。";
        this[1][49] = "公园环路。";
        this[1][50] = "约旦湖。";
        this[1][51] = "约旦湖。";
        this[1][52] = "约旦湖，那两座小山叫泡泡山。";
        this[1][53] = "约旦湖。";
        this[1][54] = "约旦湖。";
        this[1][55] = "约旦湖，象不象睡美人？";
        this[1][56] = "环约旦湖小道西侧的木板路。";
        this[1][57] = "西南港。";
        this[1][58] = "海墙观日出，最好的地点是卡迪拉克峰顶。";
        this[1][59] = "海岸黎明。";
        this[1][60] = "海岸黎明。再见了，阿卡迪亚！";
    }else{
        this[1][0] = "Seawall at the southern end of Mount Desert Island, where the Acadia National Park is located.";
        this[1][1] = "Seawall campsite.";
        this[1][2] = "In front of the tent.";
        this[1][3] = "Eyes wide open, that's what happens when you go to bed at 8:00pm.";
        this[1][4] = "What's cooking?";
        this[1][5] = "Ramen, mushroom, and cilantro.";
        this[1][6] = "Bass Harbor.";
        this[1][7] = "Historic Bass Harbor Head Lighthouse.";
        this[1][8] = "Marsh land.";
        this[1][9] = "Upper Hadlock Pond.";
        this[1][10] = "Northeast Harbor.";
        this[1][11] = "Northeast Harbor.";
        this[1][12] = "Seal Harbor.";
        this[1][13] = "Bar Harbor town.";
        this[1][14] = "Bar Harbor town.";
        this[1][15] = "Bar Island.";
        this[1][16] = "Porcupine Islands.";
        this[1][17] = "In Maine, a lobster pound is the best place for some delicious lobsters.";
        this[1][18] = "Wood burning stoves. Lobsters take their final swimming in sea water.";
        this[1][19] = "Yummy!";
        this[1][20] = "Can't wait to get my hands on them.";
        this[1][21] = "Ready for some serious shell cracking.";
        this[1][22] = "Echo Lake.";
        this[1][23] = "Acadia Mountain summit, the background is Somes Sound.";
        this[1][24] = "Bubble Pond, created by glacier movement.";
        this[1][25] = "Cadillac Mountain summit.";
        this[1][26] = "Bar Harbor and nearby islands.";
        this[1][27] = "Beaver Dam Pond.";
        this[1][28] = "East side of Champlain Mountain. The Precipice Trail is named quite properly.";
        this[1][29] = "Precipice Trail.";
        this[1][30] = "Precipice Trail.";
        this[1][31] = "Precipice Trail. The climbing is very strenuous.";
        this[1][32] = "Precipice Trail.";
        this[1][33] = "Precipice Trail.";
        this[1][34] = "Looking down to the parking lot from the cliff.";
        this[1][35] = "Precipice Trail.";
        this[1][36] = "Precipice Trail, definitely not for the faint of heart.";
        this[1][37] = "Precipice Trail.";
        this[1][38] = "Frenchman Bay seen from the Champlain Mountain summit.";
        this[1][39] = "Champlain Mountain summit.";
        this[1][40] = "Porcupine Islands.";
        this[1][41] = "Bear Brook Trail, longer but easier way to go down the Champlain Mountain.";
        this[1][42] = "Sand Beach.";
        this[1][43] = "Sand Beach.";
        this[1][44] = "Cliffs near Thunder Hole.";
        this[1][45] = "Cliffs near Thunder Hole.";
        this[1][46] = "Thunder Hole, named after the large noise when the wave hits a hole.";
        this[1][47] = "Otter Cove.";
        this[1][48] = "Otter Pond, or so I called it.";
        this[1][49] = "Scenic Park Loop Road.";
        this[1][50] = "Jordan Pond, the best place to enjoy some easy hiking in the park.";
        this[1][51] = "Jordan Pond.";
        this[1][52] = "Jordan Pond. If you wonder, those two hills are called the Bubbles.";
        this[1][53] = "Jordan Pond.";
        this[1][54] = "Jordan Pond.";
        this[1][55] = "Jordan Pond and the Bubbles.";
        this[1][56] = "Jordan Pond Trail. The elevated wood panel trail is contructed to protect the fragile ecosystem.";
        this[1][57] = "Southwest Harbor in a sunny afternoon.";
        this[1][58] = "Sunrise off the Seawall coast. The best place to see the sunrise is the Cadillac Mountain though.";
        this[1][59] = "Coastal morning.";
        this[1][60] = "Coastal morning. Good Bye, Acadia!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
