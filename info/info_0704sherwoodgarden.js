<!--
//Created by Album Builder Program Mon Apr 23 23:00:34 2007
var info_url   = "http://www.guilfordnews.com/guilfordstratford.htm";
var title      = "Spring in Sherwood Garden";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0704sherwoodgarden/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "America.mid";
var midi_cr    = new Array("Michael MacDonald","http://www.mmacdonald.com/midi/");
var blocksave  = false;
 
if(window.usechinese){
    title      = "春游雪木花园";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<39;i++){
        this[0][i] = "0704sherwoodgarden_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小韵汇钢推着小米逛公园。";
        this[1][4] = "小米和奶奶。";
        this[1][5] = "小韵和汇钢。";
        this[1][8] = "小米跟妈妈在户外玩得很开心。";
        this[1][14] = "爷爷奶奶在郁金香前留影。";
    }else{
        this[1][0] = "Xiaomi with parents.";
        this[1][4] = "Xiaomi with Grandma.";
        this[1][5] = "Yun and Huigang.";
        this[1][8] = "Xiaomi enjoys the outdoors with Mom.";
        this[1][14] = "Grandpa and Grandma like the tulips.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
