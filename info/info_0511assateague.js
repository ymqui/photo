<!--
//Created by Album Builder Program Sun Nov 27 15:54:28 2005
var info_url   = "http://www.nps.gov/asis/index.htm";
var title      = "Assateague Island";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0511assateague/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AirThatIBreathe.mid";
var midi_cr    = new Array("Midi Page","http://rivendell.fortunecity.com/redguard/636/midi.html");
 
if(window.usechinese){
    title      = "阿萨替格岛";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<29;i++){
        this[0][i] = "0511assateague_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "通往马里兰东岸的切瑟匹克湾大桥。";
        this[1][1] = "尽管天气严寒，还是有很多人在阿萨替格岛的沙滩上钓鱼。";
        this[1][2] = "阿萨替格岛位于马里兰州和维吉尼亚州的海岸边，这里野生动物很多。";
        this[1][3] = "在大西洋里钓鱼。";
        this[1][4] = "继承祖业。";
        this[1][5] = "日落前的沙丘。";
        this[1][6] = "露营地日落时的景色。";
        this[1][7] = "今晚抵挡寒风全靠它了。";
        this[1][8] = "日出。";
        this[1][9] = "日出。";
        this[1][10] = "海岸边的沙丘。";
        this[1][11] = "岛上的野马。";
        this[1][12] = "野马。";
        this[1][13] = "野马。";
        this[1][14] = "一只雄性的软毛啄木鸟，白背，头顶有红斑，嘴小。";
        this[1][15] = "环嘴海鸥，嘴上有黑环，翅膀尖是黑色的。";
        this[1][16] = "一只亚洲鹿。岛上共有两种鹿。";
        this[1][17] = "本地的白尾鹿。尾巴翘起来可以看到一片白。";
        this[1][18] = "冬青果。";
        this[1][19] = "岛上维吉尼亚州一边的灯塔。";
        this[1][20] = "运气真好，看到了一只濒危的得马维狐狸松鼠。这种松鼠尾长，体型大，耳较短圆，嘴部颜色浅。";
        this[1][21] = "一只大蓝鹭。";
        this[1][22] = "一只大白鹭。";
        this[1][23] = "这只大白鹭的午饭有着落了。";
        this[1][24] = "一只大蓝鹭落在树顶上。";
        this[1][25] = "大蓝鹭捕鱼。";
        this[1][26] = "一只大白鹭。";
        this[1][27] = "炸群的雪雁。";
        this[1][28] = "一只小天鹅。";
    }else{
        this[1][0] = "Chesapeake Bay Bridge.";
        this[1][1] = "Anglers on the beach of Assateague Island.";
        this[1][2] = "A seagull strolling the sandy beach.";
        this[1][3] = "A surf angler.";
        this[1][4] = "Passing on the skills.";
        this[1][5] = "Sand dune in the twilight.";
        this[1][6] = "The camp ground at sunset.";
        this[1][7] = "My small tent.";
        this[1][8] = "Sunrise off the Atlantic coast.";
        this[1][9] = "Sunrise.";
        this[1][10] = "Sand dune.";
        this[1][11] = "Wild horses on the island.";
        this[1][12] = "Wild horse.";
        this[1][13] = "Wild horse.";
        this[1][14] = "A male Downy Woodpecker.";
        this[1][15] = "A Ring-billed Gull.";
        this[1][16] = "A Sika Elk. Sika elk is actually an Asian species.";
        this[1][17] = "A native White-tailed Deer.";
        this[1][18] = "Holly berry.";
        this[1][19] = "USCG Lighthouse on the Virginia end of Assateague Island.";
        this[1][20] = "An endangered Delmarva Fox Squirrel.";
        this[1][21] = "A Great Blue Heron.";
        this[1][22] = "A Great Egret.";
        this[1][23] = "A Great Egret catching a fish.";
        this[1][24] = "A Great Blue Heron perching on top of a pine tree.";
        this[1][25] = "A Great Blue Heron catching a fish.";
        this[1][26] = "A Great Egret resting in the water.";
        this[1][27] = "Snow Geese.";
        this[1][28] = "A Tundra Swan, formerly known as Whistling Swan.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58";
//-->
