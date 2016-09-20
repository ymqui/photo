<!--
//Created by Album Builder Program Tue Aug 29 21:41:09 2006
var info_url   = "http://www.rennfest.com/";
var title      = "Maryland Renaissance Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0608renaissance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "OgniAmante.mid";
var midi_cr    = new Array("Alexa","http://www.manteau.de/midi.html");
 
if(window.usechinese){
    title      = "马里兰州文艺复兴节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<77;i++){
        this[0][i] = "0608renaissance_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "国王来了。";
        this[1][2] = "卖花环的女孩。";
        this[1][3] = "英国国王亨利八世和他的姐，苏格兰女王。";
        this[1][4] = "谦卑的女随从。";
        this[1][5] = "宫廷舞蹈。";
        this[1][7] = "卖花女。";
        this[1][8] = "吹泡泡的大女孩。";
        this[1][9] = "吹泡泡的小女孩。";
        this[1][11] = "花季少女。";
        this[1][12] = "女王。";
        this[1][13] = "卖饼干的女孩。";
        this[1][16] = "买饮料的宫廷号手。";
        this[1][17] = "自动取款机前等候的长队。";
        this[1][20] = "给小朋友讲故事的贵夫人。";
        this[1][24] = "杂耍。";
        this[1][25] = "卖小号角的顽皮女孩。";
        this[1][27] = "画脸的艺术家。";
        this[1][32] = "三位游客。";
        this[1][33] = "静物。";
        this[1][35] = "罗宾汉。";
        this[1][36] = "上台表演的小观众演员。";
        this[1][39] = "竞技场。";
        this[1][40] = "裁判。";
        this[1][41] = "参赛一方。";
        this[1][44] = "马下比武。";
        this[1][45] = "马上短棒争斗，是真打。";
        this[1][46] = "劈头盖脸地打。";
        this[1][47] = "棍子都打断了。";
        this[1][48] = "开始长矛较技。";
        this[1][49] = "长矛是木制的。";
        this[1][53] = "琴师。";
        this[1][55] = "跳肚皮舞的女郎。";
        this[1][67] = "很滑稽的表演。当他们亮出火焰时，全场爆笑。";
        this[1][70] = "独一无二的穿裙子踩钢丝。下面就是观众。很搞笑。";
        this[1][75] = "精灵。";
        this[1][76] = "卖花女。";
    }else{
        this[1][0] = "The King arrived at Revel Grove, the location of the annual Maryland Renaissance Festival.";
        this[1][1] = "Thousands of visitors dressed in medieval costumes took part in the festivity.";
        this[1][3] = "The King Henry VIII and his sister, Queen of Scotland.";
        this[1][5] = "Royal dance.";
        this[1][12] = "Queen of Scotland.";
        this[1][15] = "Revel grove.";
        this[1][17] = "ATM line.";
        this[1][24] = "Juggler.";
        this[1][27] = "Face painting lady.";
        this[1][32] = "Visitors.";
        this[1][35] = "Robinhood.";
        this[1][39] = "The joust arena.";
        this[1][55] = "Belly dancer.";
        this[1][67] = "Three very funny performers.";
        this[1][70] = "An excellent performer and high-wire walker, very funny guy.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
