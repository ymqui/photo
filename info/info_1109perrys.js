<!--
//Created by Album Builder Program Sun Sep 25 21:24:52 2011
var info_url   = "http://www.perrysadamsmorgan.com/brunch/sunday/";
var title      = "Perry's Drag Queen Brunch";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1109perrys/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Guilty.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Perry餐馆的变装皇后早午餐";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "1109perrys_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Perry餐馆位于华盛顿多彩的亚当斯摩根一带。";
        this[1][1] = "餐馆最有名的是星期天的变装皇后自助早午餐。";
        this[1][6] = "这位变装皇后在量这个可怜人的？#￥。";
        this[1][7] = "男人往往是皇后们戏弄的对象。";
        this[1][8] = "变装皇后在逐个调侃生日的女士。";
        this[1][13] = "饭店的装饰看了很亲切。";
    }else{
        this[1][0] = "Perry's restaurant is located in colorful Adams Morgan.";
        this[1][1] = "Perrys is famous for the Sunday drag queen brunch.";
        this[1][6] = "The queen is sizing up this poor guy.";
        this[1][7] = "Men are easy targets for the Queens to poke fun at.";
        this[1][8] = "The queen is having chitchat with the birthday ladies.";
        this[1][13] = "Interesting decor.";
    }
    makeface = new Array();
    makeface[0] = 10;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
