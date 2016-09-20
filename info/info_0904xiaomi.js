<!--
//Created by Album Builder Program Tue Apr 28 23:17:17 2009
var info_url   = "http://www.marylandday.umd.edu/";
var title      = "Xiaomi at University of Maryland 2009 Maryland Day";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0904xiaomi/";
//var dir        = csdpdir+"pics/0904xiaomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ForTheGoodTimes.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "小米在马里兰大学过马里兰日";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<21;i++){
        this[0][i] = "0904xiaomi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小米还不到两岁半，就已经参加了3届马里兰日。";
        this[1][3] = "小米和奶奶、爸爸、妈妈一起。";
        this[1][6] = "小米画画。";
        this[1][11] = "小米捞到了一只鸭子。";
        this[1][12] = "捞到了两只。";
    }else{
        this[1][0] = "Xiaomi is less than  two and a half years old, yet this is her 3rd Maryland Day.";
        this[1][3] = "Xiaomi with grandma and parents.";
        this[1][6] = "Xiaomi learns how to paint.";
        this[1][11] = "Xiaomi has caught a duck.";
        this[1][12] = "She caught two!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
