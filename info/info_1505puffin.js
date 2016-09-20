<!--
//Created by Album Builder Program Tue May 26 19:56:22 2015
var info_url   = "";
var title      = "Puffin Watch";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1505puffin/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MoreThanThis.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "观海鹦";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "1505puffin_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "双色树燕，科夫岛野生动物保护区，康涅狄格州。";
        this[1][1] = "纹霸鹟，科夫岛野生动物保护区，康涅狄格州。";
        this[1][2] = "紫崖燕，雄性，科夫岛野生动物保护区，康涅狄格州。";
        this[1][3] = "北森莺，雌性，龙虾湾保护区，缅因州。";
        this[1][4] = "黑白森莺，雄性，龙虾湾保护区，缅因州。";
        this[1][5] = "红喉北蜂鸟，雌性，龙虾湾保护区，缅因州。";
        this[1][6] = "纹胸林莺，雄性，龙虾湾保护区，缅因州。";
        this[1][7] = "橙顶灶莺，龙虾湾保护区，缅因州。";
        this[1][8] = "橙顶灶莺，龙虾湾保护区，缅因州。";
        this[1][9] = "红眼莺雀，龙虾湾保护区，缅因州。";
        this[1][10] = "欧绒鸭，雌性，新港，缅因州。";
        this[1][11] = "欧绒鸭，雄性，新港，缅因州。";
        this[1][13] = "白翅斑海鸽，新港，缅因州。";
        this[1][14] = "北极海鹦，东蛋岩岛，缅因州。";
        this[1][16] = "普通燕鸥，东蛋岩岛，缅因州。";
        this[1][17] = "白翅斑海鸽，东蛋岩岛，缅因州。";
        this[1][18] = "欧绒鸭，东蛋岩岛，缅因州。";
        this[1][19] = "东蛋岩岛上的两位研究人员，晚上就睡帐篷，敬业精神很让人佩服。";
    }else{
        this[1][0] = "Tree Swallow, Cove Island Wildlife Sanctuary, Connecticut.";
        this[1][1] = "Willow Flycatcher, Cove Island Wildlife Sanctuary, Connecticut.";
        this[1][2] = "Purple Martin, male, Cove Island Wildlife Sanctuary, Connecticut.";
        this[1][3] = "Northern Parula, female, Lobster Cove Preserve, Maine.";
        this[1][4] = "Black-and-white Warbler, male, Lobster Cove Preserve, Maine.";
        this[1][5] = "Ruby-throated Hummingbird, female, Lobster Cove Preserve, Maine.";
        this[1][6] = "Magnolia Warbler, male, Lobster Cove Preserve, Maine.";
        this[1][7] = "Ovenbird, Lobster Cove Preserve, Maine.";
        this[1][8] = "Ovenbird, Lobster Cove Preserve, Maine.";
        this[1][9] = "Red-eyed Vireo, Lobster Cove Preserve, Maine.";
        this[1][10] = "Common Eider, female, New Harbor, Maine.";
        this[1][11] = "Common Eider, male, New Harbor, Maine.";
        this[1][13] = "Black Guillemot, New Harbor, Maine.";
        this[1][14] = "Atlantic Puffin, Eastern Egg Rock, Maine.";
        this[1][16] = "Common Tern, Eastern Egg Rock, Maine.";
        this[1][17] = "Black Guillemot, Eastern Egg Rock, Maine.";
        this[1][18] = "Common Eider, Eastern Egg Rock, Maine.";
        this[1][19] = "Two researchers at Eastern Egg Rock.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
