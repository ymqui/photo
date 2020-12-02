<!--
//Created by Album Builder Program Tue Jul 14 21:30:38 2015
var info_url   = "";
var title      = "Birding West";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1507birdingwest/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "JustGiveMeAReason_Piano.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "美西观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<50;i++){
        this[0][i] = "1507birdingwest_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "黄胸大鵖莺，玉米溪沙漠国家野生动物保护区，内华达州。";
        this[1][1] = "黑腹翎鹑，雌性，玉米溪沙漠国家野生动物保护区，内华达州。";
        this[1][2] = "库氏鹰，未成年，玉米溪沙漠国家野生动物保护区，内华达州。";
        this[1][3] = "棕腹长尾霸鹟，玉米溪沙漠国家野生动物保护区，内华达州。";
        this[1][4] = "棕腹长尾霸鹟，玉米溪沙漠国家野生动物保护区，内华达州。";
        this[1][5] = "黑丝鹟，雌性，玉米溪沙漠国家野生动物保护区，内华达州。";
        this[1][6] = "安氏蜂鸟，未成年，波特兰海登岛，俄勒冈州。";
        this[1][7] = "北美鸊鷉，波特兰海登岛，俄勒冈州。";
        this[1][8] = "北美鸊鷉，波特兰海登岛，俄勒冈州。";
        this[1][9] = "黄腹鹨，奥林匹克国家公园飓风脊，华盛顿州。";
        this[1][10] = "黄腹鹨，奥林匹克国家公园飓风脊，华盛顿州。";
        this[1][11] = "斯氏夜鸫，奥林匹克国家公园玛莉密瀑布小道，华盛顿州。";
        this[1][12] = "暗冠蓝鸦，奥林匹克国家公园玛莉密瀑布小道，华盛顿州。";
        this[1][13] = "暗冠蓝鸦，奥林匹克国家公园玛莉密瀑布小道，华盛顿州。";
        this[1][14] = "灰翅鸥，尼亚湾夫拉特角，华盛顿州。";
        this[1][15] = "海鸽，尼亚湾夫拉特角，华盛顿州。";
        this[1][16] = "海鸽，尼亚湾夫拉特角，华盛顿州。";
        this[1][17] = "北美蛎鹬，尼亚湾夫拉特角，华盛顿州。";
        this[1][18] = "海鸬鹚，尼亚湾夫拉特角，华盛顿州。";
        this[1][19] = "太平洋鹪鹩，尼亚湾夫拉特角，华盛顿州。";
        this[1][20] = "左边三趾鸥，右边加州鸥，尼亚湾Hobuck海滩，华盛顿州。";
        this[1][21] = "红嘴灰鸥，尼亚湾Hobuck海滩，华盛顿州。";
        this[1][22] = "北美乌鸦，尼亚湾Hobuck海滩，华盛顿州。";
        this[1][23] = "暗眼灯草鹀(俄勒冈形)，雄性，尼亚湾Hobuck海滩，华盛顿州。";
        this[1][24] = "白冠带鹀，尼亚湾Hobuck海滩，华盛顿州。";
        this[1][25] = "簇羽海鹦，卡农海滩，俄勒冈州。";
        this[1][26] = "崖海鸦，卡农海滩，俄勒冈州。";
        this[1][27] = "红嘴巨鸥，卡农海滩，俄勒冈州。";
        this[1][28] = "橙冠虫森莺，卡农海滩，俄勒冈州。";
        this[1][29] = "安氏蜂鸟，波因特阿里纳，加利福尼亚州。";
        this[1][30] = "棕煌蜂鸟，雌性，波因特阿里纳，加利福尼亚州。";
        this[1][31] = "安氏蜂鸟，未成年，波因特阿里纳，加利福尼亚州。";
        this[1][32] = "西美鸥，莫罗湾州立公园，加利福尼亚州。";
        this[1][33] = "北美蛎鹬，莫罗湾州立公园，加利福尼亚州。";
        this[1][34] = "西美鸥，幼鸟，莫罗湾州立公园，加利福尼亚州。";
        this[1][35] = "加州鸬鹚，莫罗湾州立公园，加利福尼亚州。";
        this[1][36] = "橡树啄木鸟，雄性，贝克斯菲尔德市约库特公园，加利福尼亚州。";
        this[1][37] = "蓝头黑鹂，雌性，贝克斯菲尔德市约库特公园，加利福尼亚州。";
        this[1][38] = "蓝头黑鹂，雄性，贝克斯菲尔德市约库特公园，加利福尼亚州。";
        this[1][39] = "布氏拟鹂，雌性，贝克斯菲尔德市约库特公园，加利福尼亚州。";
        this[1][40] = "科氏蜂鸟，未成年雄性，贝克斯菲尔德市约库特公园，加利福尼亚州。";
        this[1][42] = "灰喉蝇霸鹟，贝克斯菲尔德市约库特公园，加利福尼亚州。";
        this[1][43] = "白胸鳾，贝克斯菲尔德市比尔公园，加利福尼亚州。";
        this[1][44] = "灰斑鸠，贝克斯菲尔德市比尔公园，加利福尼亚州。";
        this[1][45] = "西王霸鹟，贝克斯菲尔德市比尔公园，加利福尼亚州。";
        this[1][46] = "红领绿鹦鹉，雌性，贝克斯菲尔德市比尔公园，加利福尼亚州。";
        this[1][47] = "红领绿鹦鹉，雌性，贝克斯菲尔德市比尔公园，加利福尼亚州。";
        this[1][48] = "红领绿鹦鹉，雄性，贝克斯菲尔德市比尔公园，加利福尼亚州。";
        this[1][49] = "红领绿鹦鹉，雄性，贝克斯菲尔德市比尔公园，加利福尼亚州。";
    }else{
        this[1][0] = "Yellow-breasted Chat, Desert NWR, Corn Creek, Nevada.";
        this[1][1] = "Gambel's Quail, female, Desert NWR, Corn Creek, Nevada.";
        this[1][2] = "Cooper's Hawk, immature, Desert NWR, Corn Creek, Nevada.";
        this[1][3] = "Say's Phoebe, Desert NWR, Corn Creek, Nevada.";
        this[1][4] = "Say's Phoebe, Desert NWR, Corn Creek, Nevada.";
        this[1][5] = "Phainopepla, female, Desert NWR, Corn Creek, Nevada.";
        this[1][6] = "Anna's Hummingbird, immature, Hayden Island, Portland, Oregon.";
        this[1][7] = "Western Grebe, Hayden Island, Portland, Oregon.";
        this[1][8] = "Western Grebe, Hayden Island, Portland, Oregon.";
        this[1][9] = "American Pipit, Hurricane Ridge, Olympic National Park, Washington.";
        this[1][10] = "American Pipit, Hurricane Ridge, Olympic National Park, Washington.";
        this[1][11] = "Swainson's Thrush, Marymere Falls Trail, Olympic National Park, Washington.";
        this[1][12] = "Steller's Jay, Marymere Falls Trail, Olympic National Park, Washington.";
        this[1][13] = "Steller's Jay, Marymere Falls Trail, Olympic National Park, Washington.";
        this[1][14] = "Glaucous-winged Gull, Cape Flattery, Neah Bay, Washington.";
        this[1][15] = "Pigeon Guillemot, Cape Flattery, Neah Bay, Washington.";
        this[1][16] = "Pigeon Guillemot, Cape Flattery, Neah Bay, Washington.";
        this[1][17] = "Black Oystercatcher, Cape Flattery, Neah Bay, Washington.";
        this[1][18] = "Pelagic Cormorant, Cape Flattery, Neah Bay, Washington.";
        this[1][19] = "Pacific Wren, Cape Flattery, Neah Bay, Washington.";
        this[1][20] = "Black-legged Kittiwake on the left, California Gull on the right, Hobuck Beach, Neah Bay, Washington.";
        this[1][21] = "Heermann's Gull, Hobuck Beach, Neah Bay, Washington.";
        this[1][22] = "Northwestern Crow, Hobuck Beach, Neah Bay, Washington.";
        this[1][23] = "Dark-eyed Junco (Oregon form), male, Hobuck Beach, Neah Bay, Washington.";
        this[1][24] = "White-crowned Sparrow, Hobuck Beach, Neah Bay, Washington.";
        this[1][25] = "Tufted Puffin, Cannon Beach, Oregon.";
        this[1][26] = "Common Murre, Cannon Beach, Oregon.";
        this[1][27] = "Caspian Tern, Cannon Beach, Oregon.";
        this[1][28] = "Orange-crowned Warbler, Cannon Beach, Oregon.";
        this[1][29] = "Anna's Hummingbird, Point Arena, California.";
        this[1][30] = "Rufous Hummingbird, female, Point Arena, California.";
        this[1][31] = "Anna's Hummingbird, immature, Point Arena, California.";
        this[1][32] = "Western Gull, Morro Bay State Park, California.";
        this[1][33] = "Black Oystercatcher, Morro Bay State Park, California.";
        this[1][34] = "Western Gull, hatchling, Morro Bay State Park, California.";
        this[1][35] = "Brandt's Cormorant, Morro Bay State Park, California.";
        this[1][36] = "Acorn Woodpecker, male, Yokuts Park, Bakersfield, California.";
        this[1][37] = "Brewer's Blackbird, female, Yokuts Park, Bakersfield, California.";
        this[1][38] = "Brewer's Blackbird, male, Yokuts Park, Bakersfield, California.";
        this[1][39] = "Bullock's Oriole, female, Yokuts Park, Bakersfield, California.";
        this[1][40] = "Costa's Hummingbird, immature male, Yokuts Park, Bakersfield, California.";
        this[1][42] = "Ash-throated Flycatcher, Yokuts Park, Bakersfield, California.";
        this[1][43] = "White-breasted Nuthatch, Beale Park, Bakersfield, California.";
        this[1][44] = "Eurasian Collared-Dove, Beale Park, Bakersfield, California.";
        this[1][45] = "Western Kingbird, Beale Park, Bakersfield, California.";
        this[1][46] = "Rose-ringed Parakeet, female, Beale Park, Bakersfield, California.";
        this[1][47] = "Rose-ringed Parakeet, female, Beale Park, Bakersfield, California.";
        this[1][48] = "Rose-ringed Parakeet, male, Beale Park, Bakersfield, California.";
        this[1][49] = "Rose-ringed Parakeet, male, Beale Park, Bakersfield, California.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
