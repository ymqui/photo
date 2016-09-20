<!--
//Created by Album Builder Program Mon Dec 28 19:16:27 2015
var info_url   = "";
var title      = "Boston Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1512boston/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DayInTheLife.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "波士顿观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "1512boston_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "灰背隼，帕克河国家野生动物保护区。";
        this[1][1] = "绒啄木鸟，雄性，帕克河国家野生动物保护区。";
        this[1][2] = "绒啄木鸟，雄性，帕克河国家野生动物保护区。";
        this[1][3] = "红胸秋沙鸭，雌性，波士顿城堡岛。";
        this[1][4] = "欧绒鸭，波士顿城堡岛。";
        this[1][5] = "鹊鸭，雄性，波士顿城堡岛。";
        this[1][6] = "鹊鸭，左雌右雄，波士顿城堡岛。";
        this[1][7] = "红胸秋沙鸭，雄性，波士顿城堡岛。";
        this[1][8] = "白翅海番鸭，左雌右雄，大比目鱼角州立公园。";
        this[1][9] = "红胸秋沙鸭，雄性，大比目鱼角州立公园。";
        this[1][10] = "白枕鹊鸭，大比目鱼角州立公园。";
        this[1][11] = "欧绒鸭，大比目鱼角州立公园。";
        this[1][12] = "丑鸭，大比目鱼角州立公园。";
        this[1][13] = "斑头海番鸭，大比目鱼角州立公园。";
    }else{
        this[1][0] = "Merlin, Parker River National Wildlife Refuge.";
        this[1][1] = "Downy Woodpecker, male, Parker River National Wildlife Refuge.";
        this[1][2] = "Downy Woodpecker, male, Parker River National Wildlife Refuge.";
        this[1][3] = "Red-breasted Merganser, female, Castle Island.";
        this[1][4] = "Common Eider, Castle Island.";
        this[1][5] = "Common Goldeneye, male, Castle Island.";
        this[1][6] = "Common Goldeneye, female and male, Castle Island.";
        this[1][7] = "Red-breasted Merganser, male, Castle Island.";
        this[1][8] = "White-winged Scoter, female and male, Halibut Point State Park.";
        this[1][9] = "Red-breasted Merganser, male, Halibut Point State Park.";
        this[1][10] = "Bufflehead, Halibut Point State Park.";
        this[1][11] = "Common Eider, Halibut Point State Park.";
        this[1][12] = "Harlequin Duck, Halibut Point State Park.";
        this[1][13] = "Surf Scoter, Halibut Point State Park.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
