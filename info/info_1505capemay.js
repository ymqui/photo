<!--
//Created by Album Builder Program Sun May 10 15:38:20 2015
var info_url   = "";
var title      = "Cape May Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1505capemay/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HardToSayImSorry.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "五月岬观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<15;i++){
        this[0][i] = "1505capemay_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "草原林莺，雄性，希格比海滩野生动物管理区。";
        this[1][1] = "黄胸大鵖莺， 希格比海滩野生动物管理区。";
        this[1][2] = "笑鸥，五月岬州立公园。";
        this[1][3] = "弗氏燕鸥， 五月岬州立公园。";
        this[1][4] = "紫崖燕，左雌右雄，五月岬州立公园。";
        this[1][5] = "美洲蛎鹬，南五月岬草原。";
        this[1][6] = "疣鼻天鹅，南五月岬草原。";
        this[1][7] = "家燕，南五月岬草原。";
        this[1][8] = "红翅黑鹂，雄性，南五月岬草原。";
        this[1][9] = "长嘴半蹼鹬，湿地研究所。";
        this[1][10] = "斑翅鹬，湿地研究所。";
        this[1][11] = "斑翅鹬，湿地研究所。";
        this[1][12] = "美洲小滨鹬，湿地研究所。";
        this[1][13] = "长嘴半蹼鹬，湿地研究所。";
        this[1][14] = "笑鸥，芦苇滩。";
    }else{
        this[1][0] = "Prairie Warbler, male, Higbee Beach Wildlife Management Area.";
        this[1][1] = "Yellow-breasted Chat, Higbee Beach Wildlife Management Area.";
        this[1][2] = "Laughing Gull, Cape May Point State Park.";
        this[1][3] = "Forster's Tern, Cape May Point State Park.";
        this[1][4] = "Purple Martin, female and male, Cape May Point State Park.";
        this[1][5] = "American Oystercatcher, South Cape May Meadows.";
        this[1][6] = "Mute Swan, South Cape May Meadows.";
        this[1][7] = "Barn Swallow, South Cape May Meadows.";
        this[1][8] = "Red-winged Blackbird, male, South Cape May Meadows.";
        this[1][9] = "Long-billed Dowitcher, Wetlands Institute.";
        this[1][10] = "Willet, Wetlands Institute.";
        this[1][11] = "Willet, Wetlands Institute.";
        this[1][12] = "Least Sandpiper, Wetlands Institute.";
        this[1][13] = "Long-billed Dowitcher, Wetlands Institute.";
        this[1][14] = "Laughing Gull, Reeds Beach.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
