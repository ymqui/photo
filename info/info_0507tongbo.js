<!--
//Created by Album Builder Program Fri Jul 22 14:53:40 2005
var info_url   = "";
var title      = "Tongbo, Longyan";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0507tongbo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Unknown.mid";
var midi_cr    = new Array("Ted","http://www.tedscho.com/midi.html");
 
if(window.usechinese){
    title      = "龙岩铜钵";
    cam_tit    = "佳能Powershot A80, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0507tongbo_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0]  = "山涧水积成的池塘。";
        this[1][1]  = "清澈见底的水潭。";
        this[1][2]  = "姐夫玩得象个小孩似的。";
        this[1][3]  = "琦琦";
        this[1][4]  = "小水堤";
        this[1][5]  = "";
        this[1][6]  = "正反，大小，高矮。";
        this[1][7]  = "琦琦";
        this[1][8]  = "山涧";
        this[1][9]  = "琦琦站在村美水库坝桥上。";
        this[1][10] = "姐";
        this[1][11] = "";
        this[1][12] = "琦琦给爸妈拍的合影。";
        this[1][13] = "村美水库";
        this[1][14] = "水面上飘的是养鱼场。这里的鱼极好吃。";
        this[1][15] = "湖光山色";
    }else{
        this[1][0]  = "Tongbo is a mountain village in Longyan.";
        this[1][1]  = "Here you can still find unspoiled natural beauties.";
        this[1][2]  = "My brother-in-law.";
        this[1][3]  = "My niece, Qiqi.";
        this[1][4]  = "";
        this[1][5]  = "";
        this[1][6]  = "Front, and back.";
        this[1][7]  = "Qiqi.";
        this[1][8]  = "";
        this[1][9]  = "Qiqi.";
        this[1][10] = "My sister.";
        this[1][11] = "";
        this[1][12] = "A happy couple.";
        this[1][13] = "Cunmei Reservoir. A floating fishery is visible in the photo.";
        this[1][14] = "";
        this[1][15] = "";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
