<!--
//Created by Album Builder Program Sun Aug 15 20:20:38 2021
var info_url   = "https://www.nps.gov/caco/planyourvisit/race-point-beach.htm";
var title      = "Birding at Race Point, Provincetown, Massachusetts";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2108racepoint/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "马萨诸塞州普罗温斯敦横流点海滩观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "2108racepoint_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "黑浮鸥，非繁殖羽。";
        this[1][1] = "短尾贼鸥，未成年。";
        this[1][2] = "短尾贼鸥，未成年。";
        this[1][3] = "猛鹱。";
        this[1][4] = "粉红燕鸥。";
        this[1][5] = "笑鸥，未成年。";
        this[1][6] = "大鹱";
        this[1][7] = "大鹱";
        this[1][8] = "猛鹱。";
        this[1][9] = "三趾滨鹬。";
        this[1][10] = "猛鹱。";
        this[1][11] = "猛鹱。";
        this[1][12] = "普通剪水鹱。";
        this[1][13] = "黄蹼洋海燕。";
    }else{
        this[1][0] = "Black Terns, non-breeding adults.";
        this[1][1] = "Parasitic Jaeger, immature.";
        this[1][2] = "Parasitic Jaeger, immature.";
        this[1][3] = "Cory's Shearwater.";
        this[1][4] = "Roseate Tern.";
        this[1][5] = "Laughing Gull, juvenile.";
        this[1][6] = "Great Shearwater.";
        this[1][7] = "Great Shearwater.";
        this[1][8] = "Cory's Shearwater.";
        this[1][9] = "Sanderling.";
        this[1][10] = "Cory's Shearwater.";
        this[1][11] = "Cory's Shearwater.";
        this[1][12] = "Manx Shearwater.";
        this[1][13] = "Wilson's Storm-Petrel.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
