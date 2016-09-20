<!--
//Created by Album Builder Program Tue Jun 13 19:03:19 2006
var info_url   = "http://www.poconoraceway.com/";
var title      = "2006 Pocono 500 Auto Race";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0606pocono/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "NiceAndSlow.mid";
var midi_cr    = new Array("Midi Database","http://pop.mididb.com/usher/");
 
if(window.usechinese){
    title      = "2006年Pocono 500赛车";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<37;i++){
        this[0][i] = "0606pocono_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "场外满是车。";
        this[1][1] = "观众络绎不绝。";
        this[1][2] = "大看台主体建筑。";
        this[1][3] = "烧烤火鸡腿。";
        this[1][4] = "卖漏斗糕的售货亭。";
        this[1][7] = "六块钱的啤酒，太宰人了。";
        this[1][8] = "卖漏斗糕的女孩。";
        this[1][9] = "我的漏斗糕来了，很好吃，就是撒的糖粉很容易吹到相机上。";
        this[1][10] = "赛车场全景。";
        this[1][11] = "大看台。";
        this[1][14] = "8号车Dale Earnhardt Jr.的车迷。";
        this[1][15] = "唱国歌时。";
        this[1][16] = "11号车组在唱国歌时。";
        this[1][17] = "比赛开始了，全程500英里，共200圈。";
        this[1][21] = "这个赛车场是三角形的，这是第三拐角处。";
        this[1][22] = "Jeff Gordon的24号赛车，现在还挺神气的，过一会儿吗，呵呵。";
        this[1][23] = "Dale Earnhardt Jr. 的8号车。";
        this[1][24] = "32号车从维修道开出。";
        this[1][25] = "11号车在换轮胎加油。";
        this[1][27] = "第一拐角处，这里转弯很急。";
        this[1][28] = "精彩一瞬。";
        this[1][29] = "满身伤痕的41号车。";
        this[1][30] = "在第190圈时，24号车在第一拐角煞车失灵，撞上了护栏。";
        this[1][31] = "人没事。";
        this[1][32] = "剩下的比赛排名基本没变。";
        this[1][33] = "方格旗落，出发时排第一的11号车结束也第一。";
        this[1][34] = "观众有喜有忧。";
        this[1][35] = "最后的排名。";
        this[1][36] = "赛场出口的水塔。比赛结束的很及时，再过会儿看来要下雨。";
    }else{
        this[1][0] = "Parkling lot.";
        this[1][1] = "Fans going to the race track.";
        this[1][2] = "The grandstand building.";
        this[1][3] = "Turkey leg stand.";
        this[1][4] = "Funnel cakes stand.";
        this[1][7] = "Expensive beer.";
        this[1][8] = "Funnel cake lady.";
        this[1][9] = "My order of funnel cake was ready.";
        this[1][10] = "Panaramic view of the Pocono raceway.";
        this[1][11] = "The grandstand.";
        this[1][14] = "Dale Earnhardt Jr.'s fan.";
        this[1][15] = "National anthem.";
        this[1][16] = "During the national anthem.";
        this[1][17] = "Race started. 500 miles, 200 laps.";
        this[1][21] = "The track is a tri-oval design. This is at turn three.";
        this[1][22] = "Jeff Gordon's No 24 car.";
        this[1][23] = "Dale Earnhardt Jr.'s No 8 car.";
        this[1][24] = "Travis Kvapil's No 32 car.";
        this[1][25] = "Denny Hamlin's No 11 car at pit stop.";
        this[1][27] = "Turn one at the race track.";
        this[1][28] = "Fan.";
        this[1][29] = "Reed Sorenson's No 41 car.";
        this[1][30] = "Jeff Gordon's No 24 car lost brake and crashed to the soft wall on lap 190.";
        this[1][31] = "The damaged car.";
        this[1][32] = "The race resumed 13 minutes after the accident.";
        this[1][33] = "Denny Hamlin, a rookie, took the chequered flag with No 11 car.";
        this[1][35] = "The final result.";
        this[1][36] = "Water towers at the gate.";
    }
    makeface = new Array();
    makeface[0] = 14;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
