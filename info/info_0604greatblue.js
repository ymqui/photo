<!--
//Created by Album Builder Program Mon Apr 03 23:15:36 2006
var info_url   = "http://www.nps.gov/choh/index.htm";
var title      = "Great Blue Heron";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0604greatblue/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ButterflyKisses.mid";
var midi_cr    = new Array("Jack's Midi Music","http://www.discoverynet.com/~ajsnead/gospel/gospel.html");
 
if(window.usechinese){
    title      = "大蓝鹭的故事";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<15;i++){
        this[0][i] = "0604greatblue_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "话说有一只大蓝鹭。";
        this[1][1] = "看到一群乌龟小朋友在晒太阳。";
        this[1][2] = "大蓝鹭左看看。";
        this[1][3] = "右看看。";
        this[1][4] = "没人注意，露出了罪恶的嘴脸。";
        this[1][5] = "咦，怎么这么硬？";
        this[1][6] = "“有种的把头伸出来。”";
        this[1][7] = "算了，乌龟吃了上火。";
        this[1][8] = "还是另找别的吃吧。";
        this[1][9] = "俺走也。";
        this[1][14] = "边上引颈关注的大乌龟们都松了口气。";
    }else{
        this[1][0] = "Once upon a time, there lived a great blue heron.";
        this[1][1] = "One day, he came across a group of baby turtles sunbathing in the pond.";
        this[1][2] = "The heron looked to the left.";
        this[1][3] = "And the right.";
        this[1][4] = "When he saw that no one was paying attention, he preyed on the innocent turtle.";
        this[1][5] = '"Hmm, how come the shell is so hard?"';
        this[1][6] = '"Be a man, come out and have a fight."';
        this[1][7] = '"Anyway, turtle meat is not as good as fish."';
        this[1][8] = '"Better go fishing."';
        this[1][9] = "Going.";
        this[1][10] = "Going.";
        this[1][11] = "Going.";
        this[1][12] = "Gone.";
        this[1][14] = "The adult turtles waching nearby could now let go their breath.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58"; 
//-->