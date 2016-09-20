<!--
//Created by Album Builder Program Tue Apr 04 23:48:49 2006
var info_url   = "";
var title      = "Yongding Hakka Tulou";
var cam_img    = "camera_samsung_a40.jpg";
var cam_tit    = "Samsung Digimax A40, 4 Mega Pixels.";
var dir        = maindir+"pics/0602tulou/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DriftAway.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "永定土楼";
    cam_tit    = "三星Digimax A40数码相机, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "0602tulou_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "永定土楼。";
        this[1][1] = "小红开发旅游路线。";
        this[1][2] = "土楼内景。";
        this[1][3] = "振成楼。";
        this[1][4] = "小红。";
        this[1][5] = "小红在武夷山的下梅古民居。";
        this[1][6] = "武夷山的下梅古民居。";
    }else{
        this[1][0] = "Famous Yongding Hakka Tulou.";
        this[1][2] = "Inside view of a Tulou.";
        this[1][3] = "Zhen Cheng Lou, one of the most beautiful Hakka Tulou.";
        this[1][5] = "Historic buildings at the foothill of Wuyi Mountain.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->