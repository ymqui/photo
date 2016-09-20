<!--
//Created by Album Builder Program Fri Dec 30 12:39:20 2005
var info_url   = "http://www.nps.gov/cosw/index.htm";
var title      = "Congaree National Park";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0512congaree/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Jesu.mid";
var midi_cr    = new Array("Bach Midi Page","http://www.bachcentral.com/midiindexcomplete.html");
 
if(window.usechinese){
    title      = "崆戈瑞国家公园";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "0512congaree_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "公园游客中心。";
        this[1][1] = "美国紫树。";
        this[1][2] = "落羽松。";
        this[1][3] = "奇特的落羽松辅根。";
        this[1][4] = "落羽松。";
        this[1][5] = "蜿蜒在沼泽里的公园小道。";
        this[1][6] = "落羽松和根。";
        this[1][7] = "落羽松的辅根。";
        this[1][8] = "落羽松。";
        this[1][9] = "高大的松树。";
        this[1][10] = "枯树。";
        this[1][11] = "松鼠。";
        this[1][12] = "长满美国紫树的沼泽地。";
    }else{
        this[1][0] = "Visitor center.";
        this[1][1] = "Water tupelo swamps.";
        this[1][2] = "Bald cypress tree.";
        this[1][3] = "Bald cypress "+'"knees"'+", which are part of the tree's root system.";
        this[1][4] = "Bald cypress tree.";
        this[1][5] = "Boardwalk.";
        this[1][6] = "Bald cypress trees and "+'"knees"'+".";
        this[1][7] = "Bald cypress "+'"knees"'+".";
        this[1][8] = "Bald cypress tree.";
        this[1][9] = "Pine tree.";
        this[1][10] = "Dead tree.";
        this[1][11] = "Squirrel.";
        this[1][12] = "Swamp with water tupelo trees.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
