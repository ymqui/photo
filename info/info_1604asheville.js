<!--
//Created by Album Builder Program Mon Apr 25 21:05:36 2016
var info_url   = "http://www.romanticasheville.com/birds.htm";
var title      = "Asheville Birding";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1604asheville/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "EmailMyHeart.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "阿什维尔观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "1604asheville_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "火鸡，雌性，蓝岭公路。";
        this[1][1] = "蓝头莺雀，蓝岭公路。";
        this[1][2] = "蓝头莺雀，蓝岭公路。";
        this[1][3] = "橙胸林莺，雄性，蓝岭公路。";
        this[1][4] = "黑喉绿林莺，雄性，蓝岭公路。";
        this[1][5] = "褐头鳾，路尔湖摩士公园。";
        this[1][6] = "褐头鳾，未成年，路尔湖摩士公园。";
        this[1][7] = "黄腰白喉林莺，雄性，路尔湖摩士公园。";
        this[1][8] = "棕榈林莺，路尔湖摩士公园。";
        this[1][9] = "圃拟鹂，雌性，路尔湖摩士公园。";
        this[1][10] = "圃拟鹂，雄性，路尔湖摩士公园。";
        this[1][11] = "卡罗苇鹪鹩，路尔湖摩士公园。";
        this[1][12] = "黄腰白喉林莺，雌性，烟囱岩州立公园。";
        this[1][13] = "灰冠虫森莺，烟囱岩州立公园。";
        this[1][14] = "食虫莺，烟囱岩州立公园。";
        this[1][15] = "主红雀，雄性，烟囱岩州立公园。";
        this[1][16] = "黑枕威森莺，雄性，烟囱岩州立公园。";
        this[1][17] = "黑枕威森莺，雄性，烟囱岩州立公园。";
    }else{
        this[1][0] = "Wild turkey, female, Blue Ridge Parkway.";
        this[1][1] = "Blue-headed Vireo, Blue Ridge Parkway.";
        this[1][2] = "Blue-headed Vireo, Blue Ridge Parkway.";
        this[1][3] = "Blackburnian Warbler, male, Blue Ridge Parkway.";
        this[1][4] = "Black-throated Green Warbler, male, Blue Ridge Parkway.";
        this[1][5] = "Brown-headed Nuthatch, Morse Park, Lake Lure.";
        this[1][6] = "Brown-headed Nuthatch, immature, Morse Park, Lake Lure.";
        this[1][7] = "Yellow-rumped Warbler, male, Morse Park, Lake Lure.";
        this[1][8] = "Palm Warbler, Morse Park, Lake Lure.";
        this[1][9] = "Orchard Oriole, female, Morse Park, Lake Lure.";
        this[1][10] = "Orchard Oriole, male, Morse Park, Lake Lure.";
        this[1][11] = "Carolina Wren, Morse Park, Lake Lure.";
        this[1][12] = "Yellow-rumped Warbler, female, Chimney Rock State Park.";
        this[1][13] = "Tennessee Warbler, Chimney Rock State Park.";
        this[1][14] = "Worm-eating Warbler, Chimney Rock State Park.";
        this[1][15] = "Northern Cardinal, male, Chimney Rock State Park.";
        this[1][16] = "Hooded Warbler, male, Chimney Rock State Park.";
        this[1][17] = "Hooded Warbler, male, Chimney Rock State Park.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
