<!--
//Created by Album Builder Program Sat Aug 18 16:29:46 2012
var info_url   = "http://www.nps.gov/maca/index.htm";
var title      = "Mammoth Cave Wild Cave Tour";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1208mammothcave/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SetFireToTheRain.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "猛犸洞穴探奇";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<25;i++){
        this[0][i] = "1208mammothcave_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "猛犸洞穴是世界上最长的溶洞。";
        this[1][1] = "导游John给大家介绍洞穴探索的基本要点。";
        this[1][2] = "我们参加的是最困难的一个队，历时6小时。";
        this[1][3] = "由于有些地方很窄，胸和臀围大于1.07米的人不允许参加。";
        this[1][4] = "团里的一个成员钻出裸洞。叫裸洞是因为很多人爬出来时裤子都被挂掉了。";
        this[1][5] = "第二导游Jackie是最后一个爬出裸洞的。";
        this[1][7] = "这个狭窄的出口叫生殖道。";
        this[1][12] = "探险队实施守护天使的制度：每个人都得负责跟在自己后面那个人的安全。";
        this[1][21] = "这里叫封冻的尼亚加拉。";
    }else{
        this[1][0] = "Mammoth Cave is the longest cave system in the world.";
        this[1][1] = "Our tour guide John gives out instructions on basics of caving.";
        this[1][2] = "The wild cave tour is the most strenous tour offered by the park.";
        this[1][3] = "People with hip and chest size above 42 inches are not allowed to join the tour.";
        this[1][4] = "A fellow caver crawls out of the bare hole.";
        this[1][5] = "Our second tour guide Jackie is the last person to come out of the bare hole.";
        this[1][7] = "This narrow exit is called birth canal.";
        this[1][12] = "The group implements a guardian angel system: every person must be the guardian angel of the person immediately following him/her.";
        this[1][21] = "The frozen Niagara formation.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
