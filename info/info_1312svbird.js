<!--
//Created by Album Builder Program Wed Jan 08 22:04:53 2014
var info_url   = "http://www.fws.gov/savannah/";
var title      = "Birding in Savannah National Wildlife Refuge";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1312svbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Bailamos.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "萨凡纳国家野生动物保护区观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "1312svbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "美洲黑水鸡。";
        this[1][1] = "北鹞。";
        this[1][2] = "白鹮。";
        this[1][3] = "未成年小蓝鹭。";
        this[1][4] = "美洲骨顶。";
        this[1][6] = "仿声鸟。";
        this[1][7] = "红翅黑鹂，雄鸟。";
        this[1][8] = "东菲比霸鹟（灰胸长尾霸鹟）。";
        this[1][9] = "未成年褐鹈鹕。";
        this[1][10] = "双冠鸬鹚。";
    }else{
        this[1][0] = "Common gallinule.";
        this[1][1] = "Northern harrier";
        this[1][2] = "White ibis.";
        this[1][3] = "Little blue heron, immature.";
        this[1][4] = "American coot.";
        this[1][6] = "Northern mockingbird.";
        this[1][7] = "Red-winged blackbird, male.";
        this[1][8] = "Eastern phoebe.";
        this[1][9] = "Brown pelican, juvenile.";
        this[1][10] = "Double-crested corrmorant.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->