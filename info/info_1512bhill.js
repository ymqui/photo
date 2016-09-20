<!--
//Created by Album Builder Program Tue Dec 29 07:51:07 2015
var info_url   = "http://www.montgomeryparks.org/facilities/regional_parks/blackhill/";
var title      = "Black Hill Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1512bhill/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TenThousandOceans.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "黑山公园观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<45;i++){
        this[0][i] = "1512bhill_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "隐夜鸫。";
        this[1][1] = "家朱雀，雄性。";
        this[1][2] = "雪雁。";
        this[1][3] = "赤膀鸭，雌性。";
        this[1][4] = "帆背潜鸭，左雄性，右雌性。";
        this[1][5] = "暗眼灯草鹀，雄性。";
        this[1][6] = "白腰朱顶雀，雌性，和松金翅雀。";
        this[1][7] = "绿眉鸭，雄性。";
        this[1][8] = "小嘲鸫。";
        this[1][9] = "黑嘴天鹅。";
        this[1][10] = "黑嘴天鹅。";
        this[1][11] = "赤膀鸭，雄性。";
        this[1][12] = "棕胁秋沙鸭，左雄性，右雌性。";
        this[1][13] = "棕硬尾鸭，雌性。";
        this[1][14] = "帆背潜鸭，雌性。";
        this[1][15] = "小潜鸭，雄性。";
        this[1][16] = "环颈潜鸭。";
        this[1][17] = "白枕鹊鸭，雌性。";
        this[1][18] = "美洲凤头山雀。";
        this[1][19] = "北美黑鸭。";
        this[1][20] = "卡罗苇鹪鹩。";
        this[1][21] = "红腹啄木鸟，雄性。";
        this[1][22] = "红腹啄木鸟，雄性。";
        this[1][23] = "美洲旋木雀。";
        this[1][24] = "灰背隼。";
        this[1][25] = "褐弯嘴嘲鸫r。";
        this[1][26] = "林鸳鸯，雌性和未成年。";
        this[1][27] = "东王霸鹟。";
        this[1][28] = "黄腹纹霸鹟。";
        this[1][29] = "雪松太平鸟，未成年。";
        this[1][30] = "灰蓝蚋莺。";
        this[1][31] = "歌莺雀。";
        this[1][32] = "褐弯嘴嘲鸫，未成年。";
        this[1][33] = "灰嘲鸫。";
        this[1][34] = "小纹霸鹟。";
        this[1][35] = "棕夜鸫。";
        this[1][36] = "白腹鱼狗，雄性。";
        this[1][37] = "草原林莺，雄性。";
        this[1][38] = "黑白森莺，雌性。";
        this[1][39] = "黄嘴美洲鹃。";
        this[1][40] = "纹胸林莺，雌性。";
        this[1][41] = "玫胸白斑翅雀，未成年雄性。";
        this[1][42] = "斑嘴巨鸊鷉，冬羽。";
        this[1][43] = "美洲金翅雀，冬季雌性。";
        this[1][44] = "白胸鳾。";
    }else{
        this[1][0] = "Hermit Thrush.";
        this[1][1] = "House Finch, male.";
        this[1][2] = "Snow Goose.";
        this[1][3] = "Gadwall, female.";
        this[1][4] = "Canvasback, male and female.";
        this[1][5] = "Dark-eyed Junco, male.";
        this[1][6] = "Common Redpoll, female, and Pine Siskin.";
        this[1][7] = "American Wigeon, male.";
        this[1][8] = "Northern Mockingbird.";
        this[1][9] = "Trumpeter Swan.";
        this[1][10] = "Trumpeter Swan.";
        this[1][11] = "Gadwall, male.";
        this[1][12] = "Hooded Merganser, male and female.";
        this[1][13] = "Ruddy Duck, female.";
        this[1][14] = "Canvasback, female.";
        this[1][15] = "Lesser Scaup, male.";
        this[1][16] = "Ring-necked Duck.";
        this[1][17] = "Bufflehead, female.";
        this[1][18] = "Tufted Titmouse.";
        this[1][19] = "American Black Duck.";
        this[1][20] = "Carolina Wren.";
        this[1][21] = "Red-bellied Woodpecker, male.";
        this[1][22] = "Red-bellied Woodpecker, male.";
        this[1][23] = "Brown Creeper.";
        this[1][24] = "Merlin.";
        this[1][25] = "Brown Thrasher.";
        this[1][26] = "Wood Duck, female and immature.";
        this[1][27] = "Eastern Kingbird.";
        this[1][28] = "Yellow-bellied Flycatcher.";
        this[1][29] = "Cedar Waxwing, immature.";
        this[1][30] = "Blue-gray Gnatcatcher.";
        this[1][31] = "Warbling Vireo.";
        this[1][32] = "Brown Thrasher, immature.";
        this[1][33] = "Gray Catbird.";
        this[1][34] = "Least Flycatcher.";
        this[1][35] = "Veery.";
        this[1][36] = "Belted Kingfisher, male.";
        this[1][37] = "Prairie Warbler, male.";
        this[1][38] = "Black-and-white Warbler, female.";
        this[1][39] = "Yellow-billed Cuckoo.";
        this[1][40] = "Magnolia Warbler, female.";
        this[1][41] = "Rose-breasted Grosbeak, immature male.";
        this[1][42] = "Pied-billed Grebe, winter plumage.";
        this[1][43] = "American Goldfinch, winter female.";
        this[1][44] = "White-breasted Nuthatch.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
