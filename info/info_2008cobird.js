<!--
//Created by Album Builder Program Sat Jan 03 00:01:56 2009
var info_url   = "http://www.nps.gov/choh/index.htm";
var title      = "Birding at C&O Canal in 2008";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/2008cobird/";
//var dir        = csdpdir+"pics/2008cobird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IfTomorrowNeverComes.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "2008年C&O运河观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<34;i++){
        this[0][i] = "2008cobird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "绒啄木鸟，雌性，3/2008。";
        this[1][1] = "白胸鳾，3/2008。";
        this[1][2] = "红腹啄木鸟，雄性，3/2008。";
        this[1][3] = "赤肩鵟，3/2008。";
        this[1][4] = "美洲旋木雀，3/2008。";
        this[1][5] = "黄腹吸汁啄木鸟，雄性，3/2008。";
        this[1][6] = "黄腹吸汁啄木鸟，雄性，3/2008。";
        this[1][7] = "大蓝鹭，3/2008。";
        this[1][8] = "主红雀，4/2008。";
        this[1][9] = "灰嘲鸫，4/2008。";
        this[1][10] = "黄腰白喉林莺，雄性，4/2008。";
        this[1][11] = "北美黑啄木鸟，雄性，4/2008。";
        this[1][12] = "绿鹭，4/2008。";
        this[1][13] = "卡罗苇鹪鹩，4/2008。";
        this[1][14] = "大蓝鹭，4/2008。";
        this[1][15] = "绿鹭，5/2008。";
        this[1][16] = "黑秃鹫，5/2008。";
        this[1][17] = "灰嘲鸫，5/2008。";
        this[1][18] = "主红雀，雄性，5/2008。";
        this[1][19] = "绿头鸭，左雌右雄，5/2008。";
        this[1][20] = "蓝翅黄森莺，5/2008。";
        this[1][21] = "中北美毛翅燕，5/2008。";
        this[1][22] = "绿头鸭，雌性，5/2008。";
        this[1][23] = "绿头鸭，雄性，5/2008。";
        this[1][24] = "橙腹拟鹂，雄性，5/2008。";
        this[1][25] = "加拿大黑雁，5/2008。";
        this[1][26] = "大蓝鹭，5/2008。";
        this[1][27] = "东菲比霸鹟，5/2008。";
        this[1][28] = "长嘴啄木鸟，雌性，5/2008。";
        this[1][29] = "东菲比霸鹟，6/2008。";
        this[1][30] = "大蓝鹭，7/2008。";
        this[1][31] = "大蓝鹭，8/2008。";
        this[1][32] = "北扑翅鴷，雌性，12/2008。";
        this[1][33] = "大蓝鹭，12/2008。";
    }else{
        this[1][0] = "Downy Woodpecker, Female, 3/2008.";
        this[1][1] = "White-breasted Nuthatch, 3/2008.";
        this[1][2] = "Red-bellied Woodpecker, Male, 3/2008.";
        this[1][3] = "Red-shouldered Hawk, 3/2008.";
        this[1][4] = "Brown Creeper, 3/2008.";
        this[1][5] = "Yellow-bellied Sapsucker, Male, 3/2008.";
        this[1][6] = "Yellow-bellied Sapsucker, Male, 3/2008.";
        this[1][7] = "Great Blue Heron, 3/2008.";
        this[1][8] = "Northern Cardinal, Male, 4/2008.";
        this[1][9] = "Gray Catbird, 4/2008.";
        this[1][10] = "Yellow-rumped Warbler, Male, 4/2008.";
        this[1][11] = "Pileated Woodpecker, Male, 4/2008.";
        this[1][12] = "Green Heron, 4/2008.";
        this[1][13] = "Carolina Wren, 4/2008.";
        this[1][14] = "Great Blue Heron, 4/2008.";
        this[1][15] = "Green Heron, 5/2008.";
        this[1][16] = "Black Vulture, 5/2008.";
        this[1][17] = "Gray Catbird, 5/2008.";
        this[1][18] = "Northern Cardinal, Male, 5/2008.";
        this[1][19] = "Mallard, Female and Male, 5/2008.";
        this[1][20] = "Prothonotary Warbler, 5/2008.";
        this[1][21] = "Northern Rough-winged Swallow, 5/2008.";
        this[1][22] = "Mallard, Female, 5/2008.";
        this[1][23] = "Mallard, Male, 5/2008.";
        this[1][24] = "Baltimore Oriole, Male, 5/2008.";
        this[1][25] = "Canada Goose, 5/2008.";
        this[1][26] = "Great Blue Heron, 5/2008.";
        this[1][27] = "Eastern Phoebe, 5/2008.";
        this[1][28] = "Hairy Woodpecker, Female, 5/2008.";
        this[1][29] = "Eastern Phoebe, 6/2008.";
        this[1][30] = "Great Blue Heron, 7/2008.";
        this[1][31] = "Great Blue Heron, 8/2008.";
        this[1][32] = "Northern Flicker, Female, 12/2008.";
        this[1][33] = "Great Blue Heron, 12/2008.";
    }
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58"; 
//-->