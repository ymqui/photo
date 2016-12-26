<!--
//Created by Album Builder Program Mon Dec 26 11:55:49 2016
var info_url   = "";
var title      = "Savannah Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1612savannah/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Unsent.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "萨凡纳观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "1612savannah_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "美洲黑水鸡，萨凡纳国家野生动物保护区。";
        this[1][1] = "隐夜鸫，萨凡纳国家野生动物保护区。";
        this[1][2] = "隐夜鸫，萨凡纳国家野生动物保护区。";
        this[1][3] = "北鹞，雌性，萨凡纳国家野生动物保护区。";
        this[1][4] = "斑嘴巨䴙䴘，冬羽，萨凡纳国家野生动物保护区。";
        this[1][5] = "呆头伯劳，萨凡纳国家野生动物保护区。";
        this[1][6] = "长嘴沼泽鹪鹩，萨凡纳国家野生动物保护区。";
        this[1][7] = "红尾鵟，未成年，萨凡纳国家野生动物保护区。";
        this[1][8] = "赤肩鵟，未成年，萨凡纳国家野生动物保护区。";
        this[1][9] = "赤肩鵟，未成年，萨凡纳国家野生动物保护区。";
        this[1][10] = "呆头伯劳，萨凡纳国家野生动物保护区。";
        this[1][11] = "棕顶雀鹀，冬羽，詹姆斯·韦伯野生动物中心。";
        this[1][12] = "松莺，雄性，詹姆斯·韦伯野生动物中心。";
        this[1][13] = "松莺，雄性，詹姆斯·韦伯野生动物中心。";
        this[1][14] = "三趾滨鹬，冬羽，泰碧岛。";
        this[1][15] = "宽尾拟八哥，雄性，泰碧岛。";
        this[1][16] = "宽尾拟八哥，雌性，泰碧岛。";
    }else{
        this[1][0] = "Common Gallinule, Savannah National Wildlife Refuge.";
        this[1][1] = "Hermit Thrush, Savannah National Wildlife Refuge.";
        this[1][2] = "Hermit Thrush, Savannah National Wildlife Refuge.";
        this[1][3] = "Northern Harrier, female, Savannah National Wildlife Refuge.";
        this[1][4] = "Pied-billed Grebe, winter plumage, Savannah National Wildlife Refuge.";
        this[1][5] = "Loggerhead Shrike, Savannah National Wildlife Refuge.";
        this[1][6] = "Marsh Wren, Savannah National Wildlife Refuge.";
        this[1][7] = "Red-tailed Hawk, immature, Savannah National Wildlife Refuge.";
        this[1][8] = "Red-shouldered Hawk, immature, Savannah National Wildlife Refuge.";
        this[1][9] = "Red-shouldered Hawk, immature, Savannah National Wildlife Refuge.";
        this[1][10] = "Loggerhead Shrike, Savannah National Wildlife Refuge.";
        this[1][11] = "Chipping Sparrow, winter plumage, James Webb Wildlife Center.";
        this[1][12] = "Pine Warbler, male, James Webb Wildlife Center.";
        this[1][13] = "Pine Warbler, male, James Webb Wildlife Center.";
        this[1][14] = "Sanderling, winter plumage, Tybee Island.";
        this[1][15] = "Boat-tailed Grackle, male, Tybee Island.";
        this[1][16] = "Boat-tailed Grackle, female, Tybee Island.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
