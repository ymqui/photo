<!--
//Created by Album Builder Program Sat Apr 08 17:45:10 2017
var info_url   = "";
var title      = "Birding in Longyan, China";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1704longyan/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "在福建龙岩观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "1704longyan_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "红尾水鸲，雄性和未成年雌性，龙岩登高公园。";
        this[1][1] = "灰背鸫，雄性，龙岩登高公园。";
        this[1][2] = "黑短脚鹎，龙岩登高公园。";
        this[1][3] = "黄眉姬鹟，雄性，龙岩登高公园。";
        this[1][4] = "红耳鹎，龙岩登高公园。";
        this[1][5] = "山斑鸠，龙岩登高公园。";
        this[1][6] = "家燕，龙岩龙门镇内坂村。";
        this[1][7] = "领雀嘴鹎，龙岩龙门镇内坂村。";
        this[1][8] = "黄腹鹪莺，龙岩龙门镇内坂村。";
        this[1][9] = "山鹪莺，龙岩龙门镇内坂村。";
        this[1][10] = "山鹪莺，龙岩龙门镇内坂村。";
        this[1][11] = "环颈雉，雌性，龙岩龙门镇内坂村。";
        this[1][12] = "暗绿绣眼鸟，龙岩登高公园。";
        this[1][13] = "赤红山椒鸟，雌性，龙岩登高公园。";
        this[1][14] = "赤红山椒鸟，雌性，龙岩登高公园。";
        this[1][15] = "黄眉柳莺，龙岩登高公园。";
        this[1][16] = "黄眉柳莺，龙岩登高公园。";
        this[1][17] = "画眉，龙岩登高公园。";
        this[1][18] = "红尾水鸲，雄性，龙岩登高公园。";
    }else{
        this[1][0] = "Plumbeous Water Redstart, male and immature female, Denggao Park.";
        this[1][1] = "Grey-backed Thrush, male, Denggao Park.";
        this[1][2] = "Black Bulbul, Denggao Park.";
        this[1][3] = "Narcissus Flycatcher, male, Denggao Park.";
        this[1][4] = "Red-whiskered Bulbul, Denggao Park.";
        this[1][5] = "Oriental Turtle Dove, Denggao Park.";
        this[1][6] = "Barn Swallow, Neiban Village.";
        this[1][7] = "Collared Finchbill, Neiban Village.";
        this[1][8] = "Yellow-bellied Prinia, Neiban Village.";
        this[1][9] = "Hill Prinia, Neiban Village.";
        this[1][10] = "Hill Prinia, Neiban Village.";
        this[1][11] = "Ring-necked Pheasant, female, Neiban Village.";
        this[1][12] = "Warbling White-eye, Denggao Park.";
        this[1][13] = "Scarlet Minivet, female, Denggao Park.";
        this[1][14] = "Scarlet Minivet, female, Denggao Park.";
        this[1][15] = "Yellow-browed Warbler, Denggao Park.";
        this[1][16] = "Yellow-browed Warbler, Denggao Park.";
        this[1][17] = "Chinese Hwamei, Denggao Park.";
        this[1][18] = "Plumbeous Water Redstart, male, Denggao Park.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
