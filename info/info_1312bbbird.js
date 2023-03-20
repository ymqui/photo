<!--
//Created by Album Builder Program Wed Jan 08 21:44:48 2014
var info_url   = "http://www.nps.gov/bibe/index.htm";
var title      = "Birding in Big Bend National Park";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1312bbbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BigPimpin.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "大弯国家公园观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "1312bbbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "纹背啄木鸟。";
        this[1][1] = "印加地鸠。";
        this[1][2] = "朱红霸鹟，雄鸟。";
        this[1][3] = "朱红霸鹟。";
        this[1][4] = "走鹃。";
        this[1][5] = "金额啄木鸟。";
        this[1][6] = "斑嘴巨鸊鷉。";
        this[1][7] = "棕腹长尾霸鹟。";
        this[1][8] = "棕腹长尾霸鹟。";
        this[1][9] = "白翅哀鸽。";
        this[1][11] = "安氏蜂鸟，雌鸟。";
        this[1][12] = "安氏蜂鸟，雄鸟。";
        this[1][13] = "安氏蜂鸟，雌鸟。";
        this[1][14] = "灰额主红雀，雄鸟。";
        this[1][15] = "灰额主红雀，雄鸟。";
        this[1][16] = "灰额主红雀，雌鸟。";
        this[1][17] = "黑长尾霸鹟。";
        this[1][18] = "暗背金翅雀，雌鸟。";
    }else{
        this[1][0] = "Ladder-backed woodpecker, male.";
        this[1][1] = "Inca dove.";
        this[1][2] = "Vermilion flycatcher, male.";
        this[1][3] = "Vermilion flycatcher, male.";
        this[1][4] = "Greater roadrunner.";
        this[1][5] = "Golden-fronted woodpecker.";
        this[1][6] = "Pied-billed grebe.";
        this[1][7] = "Say's phoebe.";
        this[1][8] = "Say's phoebe.";
        this[1][9] = "White-winged dove.";
        this[1][11] = "Anna’s hummingbird, female.";
        this[1][12] = "Anna’s hummingbird, male.";
        this[1][13] = "Anna’s hummingbird, female.";
        this[1][14] = "Pyrrhuloxia, male.";
        this[1][15] = "Pyrrhuloxia, male.";
        this[1][16] = "Pyrrhuloxia, female.";
        this[1][17] = "Black phoebe.";
        this[1][18] = "Lesser goldfinch, female.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->