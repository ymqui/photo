<!--
//Created by Album Builder Program Sun May 17 21:01:26 2015
var info_url   = "http://www.fws.gov/refuge/bombay_hook/";
var title      = "Bombay Hook National Wildlife Refuge Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1505bombayhook/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DogAndButterfly.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "庞贝‧虎克国家野生动物保护区观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "1505bombayhook_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "莺鹪鹩。";
        this[1][1] = "黄林莺，雌性。";
        this[1][2] = "黄林莺，雄性。";
        this[1][3] = "黄林莺，雄性。";
        this[1][4] = "恺木纹霸鹟。";
        this[1][5] = "长嘴沼泽鹪鹩。";
        this[1][6] = "半蹼鸻。";
        this[1][7] = "半蹼滨鹬。";
        this[1][8] = "黑腹滨鹬。";
        this[1][9] = "黑颈长脚鹬。";
        this[1][10] = "黄喉地莺，雌性。";
        this[1][11] = "圃拟鹂，未成年雄性。";
        this[1][12] = "斑翅蓝彩鹀，雄性。";
        this[1][13] = "靛彩鹀，雄性。";
        this[1][14] = "短嘴半蹼鹬.";
        this[1][15] = "灰斑鸻。";
    }else{
        this[1][0] = "House Wren.";
        this[1][1] = "Yellow Warbler, female.";
        this[1][2] = "Yellow Warbler, male.";
        this[1][3] = "Yellow Warbler, male.";
        this[1][4] = "Alder Flycatcher.";
        this[1][5] = "Marsh Wren.";
        this[1][6] = "Semipalmated Plover.";
        this[1][7] = "Semipalmated Sandpiper.";
        this[1][8] = "Dunlin.";
        this[1][9] = "Black-necked Stilt.";
        this[1][10] = "Common Yellowthroat, female.";
        this[1][11] = "Orchard Oriole, juvenile male.";
        this[1][12] = "Blue Grosbeak, male.";
        this[1][13] = "Indigo Bunting, male.";
        this[1][14] = "Short-billed Dowitcher.";
        this[1][15] = "Black-bellied Plover.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
