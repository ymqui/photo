<!--
//Created by Album Builder Program Sun Nov 26 10:46:15 2006
var info_url   = "";
var title      = "Motherhood";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0611yun/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HeavenOfBeauty.mid";
var midi_cr    = new Array("Jalal Ali","http://www.jalalmusic.com");
 
if(window.usechinese){
    title      = "小韵有宝宝啦";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<4;i++){
        this[0][i] = "0610yun_"+(i+1).toString();
        this[1][i] = "";
    }
    for (var i=4;i<16;i++){
        this[0][i] = "0611yun_"+(i-3).toString();
        this[1][i] = "";
    }

    if(window.usechinese){
        this[1][0] = "10/19/2006";
        this[1][4] = "小韵拥抱着小宝宝, 11/23/2006";
        this[1][5] = "读育婴书。";
        this[1][6] = "幸福的小韵和汇钢。";
        this[1][10] = "11/24/2006";
        this[1][13] = "小宝宝又踢了。";
    }else{
        this[1][0] = "10/19/2006";
        this[1][4] = "A happy mother hugging the baby, 11/23/2006.";
        this[1][5] = "Learning how to be a good mother.";
        this[1][6] = "Happy young parents.";
        this[1][10] = "11/24/2006";
        this[1][13] = "Kicking again.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
