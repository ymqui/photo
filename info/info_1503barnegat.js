<!--
//Created by Album Builder Program Mon Mar 09 19:57:11 2015
var info_url   = "http://www.state.nj.us/dep/parksandforests/parks/barnlig.html";
var title      = "Barnegat Lighthouse State Park Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1503barnegat/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Lights.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "巴尼加特灯塔州立公园观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "1503barnegat_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "巴尼加特灯塔州立公园是个观鸟的好地方。";
        this[1][1] = "红胸秋沙鸭，未成年。";
        this[1][2] = "红胸秋沙鸭，雄性。";
        this[1][3] = "红胸秋沙鸭，雌性。";
        this[1][5] = "红胸秋沙鸭，未成年。";
        this[1][6] = "黑雁(大西洋亚种)。";
        this[1][7] = "黑雁(大西洋亚种)。";
        this[1][8] = "银鸥，三龄冬羽。";
        this[1][9] = "大黑背鸥。";
        this[1][10] = "丑鸭。";
        this[1][11] = "丑鸭，雌性。";
        this[1][12] = "漂亮的雄丑鸭。";
        this[1][14] = "普通潜鸟，未成年。";
        this[1][15] = "普通潜鸟。";
    }else{
        this[1][0] = "Barnegat Lighthouse State Park is a great birding spot.";
        this[1][1] = "Immature Red-breasted Merganser.";
        this[1][2] = "Male Red-breasted Merganser.";
        this[1][3] = "Female Red-breasted Merganser.";
        this[1][5] = "Immature Red-breasted Merganser.";
        this[1][6] = "Brant (Atlantic).";
        this[1][7] = "Brant (Atlantic).";
        this[1][8] = "Herring Gull, 3rd winter.";
        this[1][9] = "Great Black-backed Gull.";
        this[1][10] = "Harlequin Duck.";
        this[1][11] = "Female Harlequin Duck.";
        this[1][12] = "Male Harlequin Duck.";
        this[1][14] = "Common Loon, immature.";
        this[1][15] = "Common Loon.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
