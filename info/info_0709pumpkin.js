<!--
//Created by Album Builder Program Wed Oct 03 23:02:49 2007
var info_url   = "http://www.cooperstownchamber.org/";
var title      = "2007 Cooperstown Pumpkinfest";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0709pumpkin/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ColourMyWorld.mid";
var midi_cr    = new Array("MIDI4U","http://www.midi4u.com/artists/c/chicago/index.html");
 
if(window.usechinese){
    title      = "纽约州Cooperstown南瓜节上看大南瓜";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<44;i++){
        this[0][i] = "0709pumpkin_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Cooperstown有个家喻户晓的棒球名人堂。";
        this[1][1] = "但我来这儿是为了看南瓜，而且不是这些普通南瓜。";
        this[1][2] = "大南瓜由卡车运着来评比。";
        this[1][3] = "好大！";
        this[1][5] = "称重前先量尺寸。";
        this[1][6] = "做记录的女孩。";
        this[1][7] = "由一个铲土机把南瓜移到秤子上。";
        this[1][8] = "叉车是理想的运输工具。";
        this[1][10] = "裁判要检查南瓜底部，有烂掉的和穿洞的都不合格。";
        this[1][12] = "女孩和她种的squash(一种绿色的南瓜)。";
        this[1][13] = "他的南瓜是今天第一个超过1000磅的。";
        this[1][15] = "种这么大的南瓜显然得全家出力。";
        this[1][16] = "第三名。";
        this[1][17] = "最后秤的这两个是最重的。";
        this[1][18] = "裁判对最后两个南瓜查得更加认真。";
        this[1][19] = "第二名得主。";
        this[1][20] = "最大的南瓜。";
        this[1][21] = "第一名得主。";
        this[1][22] = "看到那个迷你小南瓜了吗？";
        this[1][23] = "跟姆指头那么大。";
        this[1][24] = "盛装的老人。";
        this[1][25] = "很漂亮的一家旅馆。";
        this[1][26] = "湖面上的月光。";
        this[1][27] = "晨雾。";
        this[1][28] = "用电锯刻南瓜船。";
        this[1][33] = "给南瓜船画点装饰。";
        this[1][36] = "岸上的观众。";
        this[1][37] = "比赛开始了。";
        this[1][38] = "争先恐后。";
    }else{
        this[1][0] = "Cooperstown is famous for the baseball hall of fame.";
        this[1][1] = "I came here to see pumpkins, but not these regular ones.";
        this[1][2] = "The giant pumpkins arrived by trucks for the weigh-in.";
        this[1][5] = "The judges measured the size of each pumpkin before the weigh-in.";
        this[1][7] = "The pumpkins were lifted to the scale by a backhoe.";
        this[1][8] = "The forklift was used to move the pumpkins around.";
        this[1][10] = "The judges were checking the bottom of the pumpkin to make sure that there were no rotton holes.";
        this[1][12] = "A proud girl with her squash.";
        this[1][13] = "Grower of the first pumpkin to go above 1000 pounds.";
        this[1][15] = "Pumpkin growing apparently is a family thing.";
        this[1][16] = "The third place winner.";
        this[1][17] = "The last two pumpkins to be weighed were the largest.";
        this[1][18] = "The judges were checking the second place pumpkin.";
        this[1][19] = "Second place winner.";
        this[1][20] = "First place pumpkin.";
        this[1][21] = "First place winner.";
        this[1][22] = "Have you noticed the tiny one?";
        this[1][23] = "It is no bigger than a thumb.";
        this[1][24] = "A costumed character.";
        this[1][25] = "The inn at Cooperstown.";
        this[1][26] = "Moon over the Otsego lake.";
        this[1][27] = "A misty Otsego lake in the morning.";
        this[1][28] = "Pumpkin boat carving.";
        this[1][31] = "A cute little boy.";
        this[1][32] = "A lovely young girl.";
        this[1][36] = "Audience.";
        this[1][37] = "The race started.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
