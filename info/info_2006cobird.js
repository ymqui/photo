<!--
//Created by Album Builder Program Wed Mar 08 22:16:40 2006
var info_url   = "http://www.nps.gov/choh/index.htm";
var title      = "Birding at C&O Canal in 2006";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/2006cobird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "LastDate.mid";
var midi_cr    = new Array("Yahoo Group","http://groups.yahoo.com/group/americasmostbeautifulmusic/");
 
if(window.usechinese){
    title      = "2006年C&O运河观鸟";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    var i = 0;
    this[0][i++] = "20061110_001";
    this[0][i++] = "20060407_001";
    this[0][i++] = "20060407_004";
    this[0][i++] = "20060203_002";
    this[0][i++] = "20060407_035";
    this[0][i++] = "20060407_036";
    this[0][i++] = "20060701_053";
    this[0][i++] = "20060819_006";
    this[0][i++] = "20060414_011";
    this[0][i++] = "20060426_013";
    this[0][i++] = "20060426_014";
    this[0][i++] = "20060506_004";
    this[0][i++] = "20060708_026";
    this[0][i++] = "20060524_014";
    this[0][i++] = "20060506_100";
    this[0][i++] = "20060506_005";
    this[0][i++] = "20060315_008";
    this[0][i++] = "20060326_010";
    this[0][i++] = "20060315_027";
    this[0][i++] = "20060315_029";
    this[0][i++] = "20060415_016";
    this[0][i++] = "20060319_001";
    this[0][i++] = "20061110_000";
    this[0][i++] = "20060516_006";
    this[0][i++] = "20060417_001";
    this[0][i++] = "20060220_004";
    this[0][i++] = "20060907_006";
    this[0][i++] = "20060414_003";
    this[0][i++] = "20060409_005";
    this[0][i++] = "20060304_004";
    this[0][i++] = "20060610_006";
    this[0][i++] = "20060305_002";
    this[0][i++] = "20060305_005";
    this[0][i++] = "20060525_001";
    this[0][i++] = "20060506_000";
    this[0][i++] = "20060506_007";
    this[0][i++] = "20060423_004";
    this[0][i++] = "20060428_006";
    this[0][i++] = "20060219_007";
    this[0][i++] = "20060304_008";
    this[0][i++] = "20060429_007";
    this[0][i++] = "20060506_008";
    this[0][i++] = "20060805_003";
    this[0][i++] = "20060730_005";
    this[0][i++] = "20060730_000";
    this[0][i++] = "20060730_014";
    this[0][i++] = "20060507_004";
    this[0][i++] = "20060609_007";
    this[0][i++] = "20060907_001";
    this[0][i++] = "20060909_004";
    this[0][i++] = "20060917_009";
    this[0][i++] = "20060409_001";
    this[0][i++] = "20060610_004";
    this[0][i++] = "20060305_007";
    this[0][i++] = "20060318_012";
    this[0][i++] = "20061227_020";
    this[0][i++] = "20060219_011";
    this[0][i++] = "20060313_018";
    this[0][i++] = "20061227_053";
    this[0][i++] = "20061227_054";
    this[0][i++] = "20060219_023";
    this[0][i++] = "20060812_002";
    this[0][i++] = "20060413_030";
    this[0][i++] = "20060212_004";
    this[0][i++] = "20060218_007";
    this[0][i++] = "20060820_001";
    this[0][i++] = "20060414_010";
    this[0][i++] = "20060506_018";
    this[0][i++] = "20060506_002";
    this[0][i++] = "20060506_005";
    this[0][i++] = "20060304_007";
    this[0][i++] = "20060419_010";
    this[0][i++] = "20060415_008";
    this[0][i++] = "20060415_005";
    this[0][i++] = "20060430_000";
    this[0][i++] = "20060516_005";
    this[0][i++] = "20060409_006";
    this[0][i++] = "20060304_002";
    this[0][i++] = "20060218_019";
    this[0][i++] = "20060313_027";
    this[0][i++] = "20060316_020";
    this[0][i++] = "20060417_022";
    this[0][i++] = "20060220_001";
    this[0][i++] = "20060304_013";
    this[0][i++] = "20060415_009";
    this[0][i++] = "20060415_010";
    this[0][i++] = "20060701_017";
    this[0][i++] = "20060304_000";
    this[0][i++] = "20060430_004";
    this[0][i++] = "20060430_007";
    this[0][i++] = "20060326_011";
    this[0][i++] = "20060413_016";
    this[0][i++] = "20060429_004";
    this[0][i++] = "20060429_005";
    this[0][i++] = "20060429_002";
    this[0][i++] = "20060805_004";
    this[0][i++] = "20060318_001";
    this[0][i++] = "20060318_003";
    this[0][i++] = "20060622_008";
    this[0][i++] = "20060608_010";
    this[0][i++] = "20060608_011";
    this[0][i++] = "20060608_012";
    this[0][i++] = "20060402_003";
    this[0][i++] = "20060430_001";
    this[0][i++] = "20060409_003";
    this[0][i++] = "20060409_002";
    this[0][i++] = "20060701_000";
    this[0][i++] = "20060730_008";
    this[0][i++] = "20060730_009";
    this[0][i++] = "20060219_002";
    this[0][i++] = "20060304_005";
    this[0][i++] = "20060318_014";
    this[0][i++] = "20060216_001";
    this[0][i++] = "20061227_007";
    this[0][i++] = "20060318_006";
    this[0][i++] = "20060305_016";
    this[0][i++] = "20060219_014";
    this[0][i++] = "20060608_006";
    this[0][i++] = "20060616_007";
    this[0][i++] = "20060722_017";
    this[0][i++] = "20060411_002";
    this[0][i++] = "20060622_007";
    this[0][i++] = "20060701_001";
    this[0][i++] = "20060701_002";
    this[0][i++] = "20060524_003";
    this[0][i++] = "20060708_006";
    this[0][i++] = "20060811_001";
    this[0][i++] = "20060805_002";
    this[0][i++] = "20060805_001";
    if(window.usechinese){
         i = 0;
         this[1][i++] = "角鸊鷉，冬羽";
         this[1][i++] = "双冠鸬鹚";
         this[1][i++] = "双冠鸬鹚";
         this[1][i++] = "大蓝鹭";
         this[1][i++] = "大蓝鹭";
         this[1][i++] = "大蓝鹭";
         this[1][i++] = "大蓝鹭";
         this[1][i++] = "大白鹭";
         this[1][i++] = "绿鹭";
         this[1][i++] = "绿鹭";
         this[1][i++] = "绿鹭";
         this[1][i++] = "夜鹭";
         this[1][i++] = "夜鹭";
         this[1][i++] = "夜鹭，未成年";
         this[1][i++] = "黄冠夜鹭";
         this[1][i++] = "黄冠夜鹭";
         this[1][i++] = "黑美洲鹫";
         this[1][i++] = "黑美洲鹫";
         this[1][i++] = "红头美洲鹫";
         this[1][i++] = "红头美洲鹫";
         this[1][i++] = "加拿大黑雁";
         this[1][i++] = "加拿大黑雁";
         this[1][i++] = "小天鹅";
         this[1][i++] = "林鸳鸯，雌性";
         this[1][i++] = "林鸳鸯，雄性";
         this[1][i++] = "绿头鸭，左雌右雄";
         this[1][i++] = "绿头鸭，雌性";
         this[1][i++] = "蓝翅鸭，左雄右雌";
         this[1][i++] = "小潜鸭";
         this[1][i++] = "赤肩鵟";
         this[1][i++] = "赤肩鵟";
         this[1][i++] = "红尾鵟";
         this[1][i++] = "红尾鵟";
         this[1][i++] = "北美白嘴鸭(白冠鸡)";
         this[1][i++] = "褐腰草鹬";
         this[1][i++] = "褐腰草鹬";
         this[1][i++] = "斑腹矶鹬";
         this[1][i++] = "斑腹矶鹬";
         this[1][i++] = "银鸥，未成年";
         this[1][i++] = "银鸥";
         this[1][i++] = "哀鸽";
         this[1][i++] = "哀鸽";
         this[1][i++] = "家鸽";         
         this[1][i++] = "黄嘴美洲鹃";
         this[1][i++] = "黄嘴美洲鹃";
         this[1][i++] = "黄嘴美洲鹃";
         this[1][i++] = "横斑林鴞";
         this[1][i++] = "横斑林鴞";
         this[1][i++] = "红喉北蜂鸟，雌性";
         this[1][i++] = "红喉北蜂鸟，未成年雌性";
         this[1][i++] = "红喉北蜂鸟，未成年雄性";
         this[1][i++] = "白腹鱼狗，雌性";
         this[1][i++] = "白腹鱼狗，雄性";
         this[1][i++] = "红腹啄木鸟，雌性";
         this[1][i++] = "红腹啄木鸟，雄性";
         this[1][i++] = "红腹啄木鸟，雄性";
         this[1][i++] = "黄腹吸汁啄木鸟，雄性";
         this[1][i++] = "黄腹吸汁啄木鸟，雄性";
         this[1][i++] = "绒啄木鸟，雌性";
         this[1][i++] = "绒啄木鸟，雌性";
         this[1][i++] = "绒啄木鸟，雄性";
         this[1][i++] = "长嘴啄木鸟，雌性";
         this[1][i++] = "北美黑啄木鸟，雌性";
         this[1][i++] = "北美黑啄木鸟，雄性";
         this[1][i++] = "北美黑啄木鸟，雄性";
         this[1][i++] = "东林绿霸鹟";
         this[1][i++] = "东菲比霸鹟（灰胸长尾霸鹟）";
         this[1][i++] = "东菲比霸鹟（灰胸长尾霸鹟）";
         this[1][i++] = "东王霸鹟";
         this[1][i++] = "东王霸鹟";
         this[1][i++] = "冠蓝鸦";
         this[1][i++] = "冠蓝鸦";
         this[1][i++] = "短嘴鸦";
         this[1][i++] = "短嘴鸦";
         this[1][i++] = "双色树燕";
         this[1][i++] = "双色树燕";
         this[1][i++] = "中北美毛翅燕";
         this[1][i++] = "卡罗山雀";
         this[1][i++] = "卡罗山雀";
         this[1][i++] = "卡罗山雀";
         this[1][i++] = "美洲凤头山雀";
         this[1][i++] = "美洲凤头山雀";
         this[1][i++] = "白胸鳾";
         this[1][i++] = "白胸鳾，雄性";
         this[1][i++] = "卡罗苇鹪鹩";
         this[1][i++] = "卡罗苇鹪鹩";
         this[1][i++] = "卡罗苇鹪鹩";
         this[1][i++] = "冬鹪鹩";
         this[1][i++] = "灰蓝蚋莺";
         this[1][i++] = "灰蓝蚋莺";
         this[1][i++] = "东蓝鸲，雄性";
         this[1][i++] = "东蓝鸲";
         this[1][i++] = "旅鸫";
         this[1][i++] = "旅鸫";
         this[1][i++] = "灰嘲鸫";
         this[1][i++] = "灰嘲鸫";
         this[1][i++] = "小嘲鸫";
         this[1][i++] = "欧椋鸟";
         this[1][i++] = "欧椋鸟，未成年";
         this[1][i++] = "雪松太平鸟";
         this[1][i++] = "雪松太平鸟";
         this[1][i++] = "雪松太平鸟";
         this[1][i++] = "黄腰白喉林莺";
         this[1][i++] = "黄喉地莺，雄性";
         this[1][i++] = "棕榈林莺";
         this[1][i++] = "棕榈林莺";
         this[1][i++] = "蓝翅黄森莺";
         this[1][i++] = "蓝翅黄森莺，雌性";
         this[1][i++] = "蓝翅黄森莺，雌性";
         this[1][i++] = "沼泽带鹀";
         this[1][i++] = "歌带鹀";
         this[1][i++] = "歌带鹀";
         this[1][i++] = "白喉带鹀";
         this[1][i++] = "白喉带鹀";
         this[1][i++] = "暗眼灯草鹀，雄性，石板色型";
         this[1][i++] = "主红雀，雌性";
         this[1][i++] = "主红雀，雄性";
         this[1][i++] = "靛彩鹀，雄性";   
         this[1][i++] = "靛彩鹀，雄性";         
         this[1][i++] = "红翅黑鹂，雄性";     
         this[1][i++] = "普通拟八哥";   
         this[1][i++] = "普通拟八哥";     
         this[1][i++] = "圃拟鹂，雌性";
         this[1][i++] = "圃拟鹂，雌性";
         this[1][i++] = "橙腹拟鹂，雄性";         
         this[1][i++] = "橙腹拟鹂，雄性";      
         this[1][i++] = "家雀，雌性";
         this[1][i++] = "美洲金翅雀，雌性";
         this[1][i++] = "美洲金翅雀，雄性";            
    }else{
         i = 0;
         this[1][i++] = "Horned Grebe, winter plumage";
         this[1][i++] = "Double-crested Cormorant";
         this[1][i++] = "Double-crested Cormorant";
         this[1][i++] = "Great Blue Heron";
         this[1][i++] = "Great Blue Heron";
         this[1][i++] = "Great Blue Heron";
         this[1][i++] = "Great Blue Heron";
         this[1][i++] = "Great Egret";
         this[1][i++] = "Green Heron";
         this[1][i++] = "Green Heron";
         this[1][i++] = "Green Heron";
         this[1][i++] = "Black-crowned Night-Heron";
         this[1][i++] = "Black-crowned Night-Heron";
         this[1][i++] = "Black-crowned Night-Heron, juvenile";
         this[1][i++] = "Yellow-crowned Night-Heron";
         this[1][i++] = "Yellow-crowned Night-Heron";
         this[1][i++] = "Black Vulture";
         this[1][i++] = "Black Vulture";
         this[1][i++] = "Turkey Vulture";
         this[1][i++] = "Turkey Vulture";
         this[1][i++] = "Canada Goose";
         this[1][i++] = "Canada Goose";
         this[1][i++] = "Tundra Swan";
         this[1][i++] = "Wood Duck, female";
         this[1][i++] = "Wood Duck, male";
         this[1][i++] = "Mallard, male with iridescent green head ";
         this[1][i++] = "Mallard, female";
         this[1][i++] = "Blue-winged Teal, left male, right female";
         this[1][i++] = "Lesser Scaup";
         this[1][i++] = "Red-shouldered Hawk";
         this[1][i++] = "Red-shouldered Hawk";
         this[1][i++] = "Red-tailed Hawk, a hapless squirrel is the prey ";
         this[1][i++] = "Red-tailed Hawk";
         this[1][i++] = "American Coot";
         this[1][i++] = "Solitary Sandpiper";
         this[1][i++] = "Solitary Sandpiper";
         this[1][i++] = "Spotted Sandpiper";
         this[1][i++] = "Spotted Sandpiper";
         this[1][i++] = "Herring Gull, immature";
         this[1][i++] = "Herring Gull";
         this[1][i++] = "Mourning Dove";
         this[1][i++] = "Mourning Dove";
         this[1][i++] = "Domesticated Pigeon";
         this[1][i++] = "Yellow-billed Cuckoo";
         this[1][i++] = "Yellow-billed Cuckoo";
         this[1][i++] = "Yellow-billed Cuckoo";
         this[1][i++] = "Barred Owl";
         this[1][i++] = "Barred Owl";
         this[1][i++] = "Ruby-throated Hummingbird, female";
         this[1][i++] = "Ruby-throated Hummingbird, female, immature";
         this[1][i++] = "Ruby-throated Hummingbird, male, immature";
         this[1][i++] = "Belted Kingfisher, female";
         this[1][i++] = "Belted Kingfisher, male";
         this[1][i++] = "Red-bellied Woodpecker, female";
         this[1][i++] = "Red-bellied Woodpecker, male";
         this[1][i++] = "Red-bellied Woodpecker, male";
         this[1][i++] = "Yellow-bellied Sapsucker, male";
         this[1][i++] = "Yellow-bellied Sapsucker, male";
         this[1][i++] = "Downy Woodpecker, female";
         this[1][i++] = "Downy Woodpecker, female";
         this[1][i++] = "Downy Woodpecker, male";
         this[1][i++] = "Hairy Woodpecker, female";
         this[1][i++] = "Pileated Woodpecker, female";
         this[1][i++] = "Pileated Woodpecker, male";
         this[1][i++] = "Pileated Woodpecker, male";
         this[1][i++] = "Eastern Wood-Pewee";
         this[1][i++] = "Eastern Phoebe";
         this[1][i++] = "Eastern Phoebe";
         this[1][i++] = "Eastern Kingbird";
         this[1][i++] = "Eastern Kingbird";
         this[1][i++] = "Blue Jay";
         this[1][i++] = "Blue Jay";
         this[1][i++] = "American Crow";
         this[1][i++] = "American Crow";
         this[1][i++] = "Tree Swallow";
         this[1][i++] = "Tree Swallow";
         this[1][i++] = "Northern Rough-winged Swallow";
         this[1][i++] = "Carolina Chickadee";
         this[1][i++] = "Carolina Chickadee";
         this[1][i++] = "Carolina Chickadee";
         this[1][i++] = "Tufted Titmouse";
         this[1][i++] = "Tufted Titmouse";
         this[1][i++] = "White-breasted Nuthatch";
         this[1][i++] = "White-breasted Nuthatch, male";
         this[1][i++] = "Carolina Wren";
         this[1][i++] = "Carolina Wren";
         this[1][i++] = "Carolina Wren";
         this[1][i++] = "Winter Wren";
         this[1][i++] = "Blue-gray Gnatcatcher";
         this[1][i++] = "Blue-gray Gnatcatcher";
         this[1][i++] = "Eastern Bluebird, male";
         this[1][i++] = "Eastern Bluebird";
         this[1][i++] = "American Robin";  
         this[1][i++] = "American Robin";  
         this[1][i++] = "Gray Catbird";
         this[1][i++] = "Gray Catbird";
         this[1][i++] = "Northern Mockingbird";
         this[1][i++] = "European Starling";
         this[1][i++] = "European Starling, juvenile";
         this[1][i++] = "Cedar Waxwing";
         this[1][i++] = "Cedar Waxwing";
         this[1][i++] = "Cedar Waxwing";
         this[1][i++] = "Yellow-rumped Warbler";
         this[1][i++] = "Common Yellowthroat, male";
         this[1][i++] = "Palm Warbler";
         this[1][i++] = "Palm Warbler";
         this[1][i++] = "Prothonotary Warbler";
         this[1][i++] = "Prothonotary Warbler, female";
         this[1][i++] = "Prothonotary Warbler, female";
         this[1][i++] = "Swamp Sparrow";
         this[1][i++] = "Song Sparrow";
         this[1][i++] = "Song Sparrow";
         this[1][i++] = "White-throated Sparrow";
         this[1][i++] = "White-throated Sparrow";
         this[1][i++] = "Dark-eyed Junco, male, slate-colored form";
         this[1][i++] = "Northern Cardinal, female";
         this[1][i++] = "Northern Cardinal, male";
         this[1][i++] = "Indigo Bunting, male";
         this[1][i++] = "Indigo Bunting, male";
         this[1][i++] = "Red-winged Blackbird, male";
         this[1][i++] = "Common Grackle";
         this[1][i++] = "Common Grackle";
         this[1][i++] = "Orchard Oriole, female";
         this[1][i++] = "Orchard Oriole, female";
         this[1][i++] = "Baltimore Oriole, male";
         this[1][i++] = "Baltimore Oriole, male";
         this[1][i++] = "House Finch, female";
         this[1][i++] = "American Goldfinch, female";
         this[1][i++] = "American Goldfinch, male";
    }

    adddate(this);
}
 
//web counter info
var sc_project   = 1818758; 
var sc_invisible = 1; 
var sc_partition = 13; 
var sc_security  = "382e0c58"; 
//-->
