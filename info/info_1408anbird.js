 <!--
//Created by Album Builder Program Mon Aug 11 21:26:03 2014
var info_url   = "http://www.fws.gov/chesapeakebay/greenpt.html";
var title      = "Birding in Annapolis";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1408anbird/";
var thumb_dir  = maindir+"thumbnail/"; 
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IBelongToYou.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "安纳波利斯观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "1408anbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "鹗。";
        this[1][1] = "苍鹭。";
        this[1][2] = "红腹啄木鸟，雄性。";
        this[1][3] = "大冠蝇霸鹟。";
        this[1][4] = "大冠蝇霸鹟。";
        this[1][5] = "红翅黑鹂，雌性。";
        this[1][6] = "东王霸鹟。";
        this[1][7] = "家燕。";
        this[1][8] = "斑翅蓝彩鹀，雄性。";
        this[1][9] = "纹腹鹰追捕欧椋鸟。";
        this[1][10] = "纹腹鹰追捕欧椋鸟。";
        this[1][11] = "东蓝鸲。";
        this[1][12] = "美洲金翅雀。";
        this[1][13] = "绿鹭。";
        this[1][14] = "斑翅蓝彩鹀，雄性。";
        this[1][15] = "鹗。";
        this[1][16] = "鹗。";
        this[1][17] = "东菲比霸鹟（灰胸长尾霸鹟）。";
        this[1][18] = "东菲比霸鹟（灰胸长尾霸鹟）。";
        this[1][19] = "灰蓝蚋莺。";
    }else{
        this[1][0] = "Osprey.";
        this[1][1] = "Great blue heron.";
        this[1][2] = "Red-bellied woodpecker, male.";
        this[1][3] = "Great crested flycatcher.";
        this[1][4] = "Great crested flycatcher.";
        this[1][5] = "Red-winged blackbird, female.";
        this[1][6] = "Eastern kingbird.";
        this[1][7] = "Barn swallow.";
        this[1][8] = "Blue grosbeak, male.";
        this[1][9] = "A sharp-shinned hawk chasing a flock of European starlings.";
        this[1][10] = "A sharp-shinned hawk chasing a flock of European starlings.";
        this[1][11] = "Eastern bluebird.";
        this[1][12] = "American goldfinch.";
        this[1][13] = "Green heron.";
        this[1][14] = "Blue grosbeak, male.";
        this[1][15] = "Osprey.";
        this[1][16] = "Osprey.";
        this[1][17] = "Eastern phoebe.";
        this[1][18] = "Eastern phoebe.";
        this[1][19] = "Blue-gray gnatcatcher.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->