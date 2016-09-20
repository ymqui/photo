<!--
//Created by Album Builder Program Sat Dec 31 00:26:54 2005
var info_url   = "http://www.florida-keys.fl.us/maps/mainmap.htm";
var title      = "Florida Keys";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0512keys/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Beautiful.mid";
var midi_cr    = new Array("Dolphin's Dream","http://d21c.com/dolphinsdream/quietude.html");
 
if(window.usechinese){
    title      = "佛罗里达最南端的珊瑚礁岛";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素, 300D相机, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<29;i++){
        this[0][i] = "0512keys_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "海岸边的饭店和船坞。";
        this[1][1] = "岛上路边的蝴蝶。";
        this[1][2] = "沙滩。";
        this[1][3] = "水中嬉戏的环嘴鸥。";
        this[1][4] = "最南端西礁岛上海明威的故居。";
        this[1][5] = "在美国本土的最南端。";
        this[1][6] = "西礁岛日落。";
        this[1][7] = "黄昏时西礁岛上的钓鱼人。";
        this[1][8] = "日落后的西礁岛海岸。";
        this[1][9] = "日出时的棕榈树。";
        this[1][10] = "西礁岛日出。";
        this[1][11] = "西礁岛日出。";
        this[1][12] = "褐鹈鹕。";
        this[1][13] = "褐鹈鹕。";
        this[1][14] = "西礁岛上的查可瑞泰勒堡。";
        this[1][15] = "查可瑞泰勒堡。";
        this[1][16] = "西礁岛船坞里的各式游船。";
        this[1][17] = "两只褐鹈鹕。";
        this[1][18] = "西礁岛上的一家海鲜酒吧。";
        this[1][19] = "海龟园酒吧。";
        this[1][20] = "玻璃底的游船。";
        this[1][21] = "船。";
        this[1][22] = "船长或导游在介绍周围的景点。";
        this[1][23] = "一艘大型游轮停泊在西礁岛。";
        this[1][24] = "鹈鹕在海面上飞翔，远处是一个灯塔。";
        this[1][25] = "大伙在船底看珊瑚和鱼。";
        this[1][26] = "光线很弱，鱼很难拍，不过可真漂亮。";
        this[1][27] = "一艘返航的捕虾船。";
        this[1][28] = "船拖的飞伞。";
    }else{
        this[1][0] = "Marina and seashore restaurant.";
        this[1][1] = "A butterfly.";
        this[1][2] = "Beach.";
        this[1][3] = "Two ring-billed gulls at play.";
        this[1][4] = "Hemingway house at Key West.";
        this[1][5] = "At the southernmost point.";
        this[1][6] = "Sunset at Key West's Smathers beach.";
        this[1][7] = "Anglers at Key West.";
        this[1][8] = "Key West after sunset.";
        this[1][9] = "Palm trees at sunrise.";
        this[1][10] = "Sunrise off the coast of Key West.";
        this[1][11] = "Sunrise off the coast of Key West.";
        this[1][12] = "Brown pelican.";
        this[1][13] = "Brown pelican.";
        this[1][14] = "Fort Zachary Taylor at Key West.";
        this[1][15] = "Fort Zachary Taylor.";
        this[1][16] = "Boats at Mac's sea garden waterfront in Key West.";
        this[1][17] = "Two brown pelicans.";
        this[1][18] = "Half shell raw bar at the waterfront.";
        this[1][19] = "Turtle Kraals bar.";
        this[1][20] = "The Discovery glass bottom boat.";
        this[1][21] = "A beautiful boat.";
        this[1][22] = "Tour guide or maybe captain of the Discovery boat.";
        this[1][23] = "A cruise ship makes a stop at Key West.";
        this[1][24] = "Pelicans and light house.";
        this[1][25] = "At the bottom of the Discovery boat.";
        this[1][26] = "A colorful fish.";
        this[1][27] = "A shrimp boat returning to Key West.";
        this[1][28] = "Parasailing.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
