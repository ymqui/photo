<!--
//Created by Album Builder Program Tue Sep 08 07:48:05 2015
var info_url   = "http://www.crbo.net/Charleston.html";
var title      = "查尔斯顿观鸟";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1509charleston/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CarolineNo.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Charleston Birding";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<21;i++){
        this[0][i] = "1509charleston_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "松莺，卡罗来纳沙丘国家野生动物保护区。";
        this[1][1] = "红顶啄木鸟，卡罗来纳沙丘国家野生动物保护区。";
        this[1][2] = "红顶啄木鸟，卡罗来纳沙丘国家野生动物保护区。";
        this[1][3] = "红尾鵟，未成年，527号公路。";
        this[1][4] = "红尾鵟，未成年，527号公路。";
        this[1][5] = "橙嘴凤头燕鸥，皮特街堤道。";
        this[1][6] = "美洲绿鹭，皮特街堤道。";
        this[1][7] = "云斑塍鹬，皮特街堤道。";
        this[1][8] = "长嘴秧鸡，皮特街堤道。";
        this[1][9] = "长嘴秧鸡，皮特街堤道。";
        this[1][10] = "灰斑鸻，雌性，皮特街堤道。";
        this[1][11] = "宽尾拟八哥，雄性，皮特街堤道。";
        this[1][12] = "宽尾拟八哥，雌性，皮特街堤道。";
        this[1][13] = "黑剪嘴鸥，皮特街堤道。";
        this[1][14] = "密西西比灰鸢，未成年，爱国者海角。";
        this[1][15] = "小嘲鸫，爱国者海角。";
        this[1][16] = "三趾滨鹬，莫尔特里堡。";
        this[1][17] = "红眼莺雀，莫尔特里堡。";
        this[1][18] = "美洲蛎鹬，皮特街堤道。";
        this[1][19] = "斑翅鹬，皮特街堤道。";
        this[1][20] = "黄冠夜鹭，皮特街堤道。";
    }else{
        this[1][0] = "Pine Warbler, Carolina Sandhills National Wildlife Refuge.";
        this[1][1] = "Red-cockaded Woodpecker, Carolina Sandhills National Wildlife Refuge.";
        this[1][2] = "Red-cockaded Woodpecker, Carolina Sandhills National Wildlife Refuge.";
        this[1][3] = "Red-tailed Hawk, juvenile, Rt 527.";
        this[1][4] = "Red-tailed Hawk, juvenile, Rt 527.";
        this[1][5] = "Royal Tern, Pitt Street Causeway.";
        this[1][6] = "Green Heron, Pitt Street Causeway.";
        this[1][7] = "Marbled Godwit, Pitt Street Causeway.";
        this[1][8] = "Clapper Rail, Pitt Street Causeway.";
        this[1][9] = "Clapper Rail, Pitt Street Causeway.";
        this[1][10] = "Black-bellied Plover, female, Pitt Street Causeway.";
        this[1][11] = "Boat-tailed Grackle, male, Pitt Street Causeway.";
        this[1][12] = "Boat-tailed Grackle, female, Pitt Street Causeway.";
        this[1][13] = "Black Skimmer, Pitt Street Causeway.";
        this[1][14] = "Mississippi Kite, juvenile, Patriots Point.";
        this[1][15] = "Northern Mockingbird, Patriots Point.";
        this[1][16] = "Sanderling, Fort Moultrie.";
        this[1][17] = "Red-eyed Vireo, Fort Moultrie.";
        this[1][18] = "American Oystercatcher, Pitt Street Causeway.";
        this[1][19] = "Willet, Pitt Street Causeway.";
        this[1][20] = "Yellow-crowned Night-Heron, Pitt Street Causeway.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
