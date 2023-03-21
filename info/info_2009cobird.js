<!--
//Created by Album Builder Program Thu Dec 31 14:11:24 2009
var info_url   = "http://www.nps.gov/choh/index.htm";
var title      = "Birding at C&O Canal in 2009";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/2009cobird/";
//var dir        = csdpdir+"pics/2009cobird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CarolinaOnMyMind.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "2009年C&O运河观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<46;i++){
        this[0][i] = "2009cobird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "白喉带鹀，2/2009。";
        this[1][1] = "绒啄木鸟，雌性，12/2009。";
        this[1][2] = "东蓝鸲，雌性，2/2009。";
        this[1][3] = "卡罗山雀，2/2009。";
        this[1][4] = "主红雀，雄性，2/2009。";
        this[1][5] = "赤肩鵟，2/2009。";
        this[1][6] = "赤肩鵟，2/2009。";
        this[1][7] = "哀鸽，2/2009。";
        this[1][8] = "赤肩鵟，3/2009。";
        this[1][9] = "赤肩鵟，3/2009。";
        this[1][10] = "主红雀，雄性，3/2009。";
        this[1][11] = "绿头鸭，3/2009。";
        this[1][12] = "红腹啄木鸟，雄性，3/2009。";
        this[1][13] = "白胸鳾，3/2009。";
        this[1][14] = "东菲比霸鹟，3/2009。";
        this[1][15] = "红腹啄木鸟，雄性，4/2009。";
        this[1][16] = "卡罗山雀，4/2009。";
        this[1][17] = "红冠戴菊，雄性，4/2009。";
        this[1][18] = "东菲比霸鹟，4/2009。";
        this[1][19] = "靛彩鹀，雄性，5/2009。";
        this[1][20] = "东菲比霸鹟，5/2009。";
        this[1][21] = "东蓝鸲，雄性，5/2009。";
        this[1][22] = "卡罗苇鹪鹩，5/2009。";
        this[1][23] = "蓝翅黄森莺，雄性，5/2009。";
        this[1][24] = "主红雀，雌性，5/2009。";
        this[1][25] = "大蓝鹭，5/2009。";
        this[1][26] = "东菲比霸鹟，6/2009。";
        this[1][27] = "黄嘴美洲鹃，6/2009。";
        this[1][28] = "黄嘴美洲鹃，6/2009。";
        this[1][29] = "大蓝鹭，6/2009。";
        this[1][30] = "大蓝鹭，6/2009。";
        this[1][31] = "蓝翅黄森莺，6/2009。";
        this[1][32] = "蓝翅黄森莺，6/2009。";
        this[1][33] = "赤肩鵟，6/2009。";
        this[1][34] = "东菲比霸鹟，6/2009。";
        this[1][35] = "大蓝鹭，6/2009。";
        this[1][36] = "纹霸鹟，7/2009。";
        this[1][37] = "赤肩鵟，7/2009。";
        this[1][38] = "普通拟八哥，未成年，7/2009。";
        this[1][39] = "林鸳鸯，未成年，7/2009。";
        this[1][40] = "美洲金翅雀，雄性，8/2009。";
        this[1][41] = "雪松太平鸟，11/2009。";
        this[1][42] = "红腹啄木鸟，雄性，11/2009。";
        this[1][43] = "大蓝鹭，12/2009。";
        this[1][44] = "绒啄木鸟，雌性，12/2009。";
        this[1][45] = "暗眼灯草鹀，12/2009。";
    }else{
        this[1][0] = "White-throated Sparrow, 2/2009.";
        this[1][1] = "Downy Woodpecker, Female, 2/2009.";
        this[1][2] = "Eastern Bluebird, Female, 2/2009.";
        this[1][3] = "Carolina Chickadee, 2/2009.";
        this[1][4] = "Northern Cardinal, Male, 2/2009.";
        this[1][5] = "Red-shouldered Hawk, 2/2009.";
        this[1][6] = "Red-shouldered Hawk, 2/2009.";
        this[1][7] = "Mourning Dove, 2/2009.";
        this[1][8] = "Red-shouldered Hawk, 3/2009.";
        this[1][9] = "Red-shouldered Hawk, 3/2009.";
        this[1][10] = "Northern Cardinal, Male, 3/2009.";
        this[1][11] = "Mallard, 3/2009.";
        this[1][12] = "Red-bellied Woodpecker, Male, 3/2009.";
        this[1][13] = "White-breasted Nuthatch, 3/2009.";
        this[1][14] = "Eastern Phoebe, 3/2009.";
        this[1][15] = "Red-bellied Woodpecker, Male, 4/2009.";
        this[1][16] = "Carolina Chickadee, 4/2009.";
        this[1][17] = "Ruby-crowned Kinglet, Male, 4/2009.";
        this[1][18] = "Eastern Phoebe, 4/2009.";
        this[1][19] = "Indigo Bunting, Male, 5/2009.";
        this[1][20] = "Eastern Phoebe, 5/2009.";
        this[1][21] = "Eastern Bluebird, Male, 5/2009.";
        this[1][22] = "Carolina Wren, 5/2009.";
        this[1][23] = "Prothonotary Warbler, Male, 5/2009.";
        this[1][24] = "Northern Cardinal, Female, 5/2009.";
        this[1][25] = "Great Blue Heron, 5/2009.";
        this[1][26] = "Eastern Phoebe, 6/2009.";
        this[1][27] = "Yellow-billed Cuckoo, 6/2009.";
        this[1][28] = "Yellow-billed Cuckoo, 6/2009.";
        this[1][29] = "Great Blue Heron, 6/2009.";
        this[1][30] = "Great Blue Heron, 6/2009.";
        this[1][31] = "Prothonotary Warbler, 6/2009.";
        this[1][32] = "Prothonotary Warbler, 6/2009.";
        this[1][33] = "Red-shouldered Hawk, 6/2009.";
        this[1][34] = "Eastern Phoebe, 6/2009.";
        this[1][35] = "Great Blue Heron, 6/2009.";
        this[1][36] = "Willow Flycatcher, 7/2009.";
        this[1][37] = "Red-shouldered Hawk, 7/2009.";
        this[1][38] = "Common Grackle, Juvenile, 7/2009.";
        this[1][39] = "Wood Duck, Juvenile, 7/2009.";
        this[1][40] = "American Goldfinch, Male, 8/2009.";
        this[1][41] = "Cedar Waxwing, 11/2009.";
        this[1][42] = "Red-bellied Woodpecker, Male, 11/2009.";
        this[1][43] = "Great Blue Heron, 12/2009.";
        this[1][44] = "Downy Woodpecker, Female, 12/2009.";
        this[1][45] = "Dark-eyed Junco, 12/2009.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58"; 
//-->