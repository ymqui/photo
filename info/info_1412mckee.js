<!--
//Created by Album Builder Program Sun Dec 28 09:48:17 2014
var info_url   = "http://www.dnr.state.md.us/wildlife/Publiclands/central/mckeebeshers.asp";
var title      = "Birding in McKee-Beshers WMA";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1412mckee/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AWholeNewWorld.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "McKee-Beshers野生动物管理区观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<39;i++){
        this[0][i] = "1412mckee_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "家朱雀，雄性。";
        this[1][1] = "家朱雀，雌性。";
        this[1][3] = "美洲绿鹭。";
        this[1][5] = "石鸡，这是一只释放鸟。";
        this[1][6] = "灰蓝蚋莺。";
        this[1][7] = "卡罗苇鹪鹩。";
        this[1][8] = "美洲金翅雀，雄性。";
        this[1][9] = "美洲金翅雀，雌性。";
        this[1][10] = "东菲比霸鹟/灰胸长尾霸鹟。";
        this[1][11] = "红喉北蜂鸟，雌性。";
        this[1][12] = "北扑翅鴷，雄性。";
        this[1][13] = "沼泽带鹀。";
        this[1][14] = "沼泽带鹀。";
        this[1][15] = "东菲比霸鹟/灰胸长尾霸鹟。";
        this[1][16] = "黄腰白喉林莺";
        this[1][17] = "绒啄木鸟。";
        this[1][18] = "白喉带鹀。";
        this[1][19] = "歌带鹀。";
        this[1][20] = "白胸鳾，雄性。";
        this[1][21] = "白胸鳾，雌性。";
        this[1][22] = "北美黑啄木鸟，雌性。";
        this[1][23] = "卡罗山雀。";
        this[1][24] = "隐夜鸫。";
        this[1][25] = "红翅黑鹂，雌性。";
        this[1][26] = "锈色黑鹂，雄性。";
        this[1][27] = "锈色黑鹂，雌性。";
        this[1][28] = "棕头牛鹂，雌性。";
        this[1][29] = "圃拟鹂，雌性。";
        this[1][30] = "美洲金翅雀。";
        this[1][31] = "紫朱雀，雄性。";
        this[1][32] = "红尾鵟，未成年。";
        this[1][33] = "冠蓝鸦。";
        this[1][34] = "家朱雀，雄性。";
        this[1][35] = "家朱雀，雄性。";
        this[1][36] = "白胸鳾，雌性。";
        this[1][37] = "赤肩鵟。";
        this[1][38] = "雪松太平鸟。";
    }else{
        this[1][0] = "House finch, male.";
        this[1][1] = "House finch, female.";
        this[1][3] = "Green heron.";
        this[1][5] = "Chukar, a release bird.";
        this[1][6] = "Blue-gray gnatcatcher.";
        this[1][7] = "Carolina wren.";
        this[1][8] = "American goldfich, male.";
        this[1][9] = "American goldfich, female.";
        this[1][10] = "Eastern phoebe.";
        this[1][11] = "Ruby-throated hummingbird, female.";
        this[1][12] = "Northern flicker, male.";
        this[1][13] = "Swamp sparrow.";
        this[1][14] = "Swamp sparrow.";
        this[1][15] = "Eastern phoebe.";
        this[1][16] = "Yellow-rumped warbler.";
        this[1][17] = "Downy woodpecker.";
        this[1][18] = "White-throated sparrow.";
        this[1][19] = "Song sparrow.";
        this[1][20] = "White-breasted nuthatch, male.";
        this[1][21] = "White-breasted nuthatch, female.";
        this[1][22] = "Pileated woodpecker, female.";
        this[1][23] = "Carolina chickadee.";
        this[1][24] = "Hermit thrush.";
        this[1][25] = "Red-winged blackbird, female.";
        this[1][26] = "Rusty blackbird, male.";
        this[1][27] = "Rusty blackbird, female.";
        this[1][28] = "Brown-headed cowbird, female.";
        this[1][29] = "Orchard oriole, female.";
        this[1][30] = "American goldfinch.";
        this[1][31] = "Purple finch, male.";
        this[1][32] = "Red-tailed hawk, juvenile.";
        this[1][33] = "Blue jay.";
        this[1][34] = "House finch, male.";
        this[1][35] = "House finch, male.";
        this[1][36] = "White-breasted nuthatch, female.";
        this[1][37] = "Red-shouldered hawk.";
        this[1][38] = "Cedar waxwing.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->