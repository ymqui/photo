<!--
//Created by Album Builder Program Tue May 21 20:25:24 2019
var info_url   = "";
var title      = "Birding in Mexico";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1905mxbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
 
if(window.usechinese){
    title      = "墨西哥观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<35;i++){
        this[0][i] = "1905mxbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "墨西哥鸭，雄性，墨西哥城查普尔特佩克公园。";
        this[1][1] = "墨西哥鸭，雌性，墨西哥城查普尔特佩克公园。";
        this[1][2] = "绿蜂鸟，墨西哥城查普尔特佩克公园。";
        this[1][3] = "紫冠蜂鸟，雌性，墨西哥城国立自治大学植物园。";
        this[1][4] = "弯嘴嘲鸫，墨西哥城国立自治大学植物园。";
        this[1][5] = "绿蜂鸟，墨西哥城国立自治大学植物园。";
        this[1][6] = "大蜂鸟，雌性，墨西哥城国立自治大学植物园。";
        this[1][7] = "紫冠蜂鸟，雌性，墨西哥城国立自治大学植物园。";
        this[1][8] = "棕顶猛雀鹀，墨西哥城国立自治大学植物园。";
        this[1][9] = "黄胸纹霸鹟，墨西哥城国立自治大学植物园。";
        this[1][10] = "黄胸纹霸鹟，墨西哥城国立自治大学植物园。";
        this[1][11] = "纳氏黄喉地莺，雄性，墨西哥城国立自治大学植物园。";
        this[1][12] = "纳氏黄喉地莺，雄性，墨西哥城国立自治大学植物园。";
        this[1][13] = "短嘴长尾山雀，雄性，墨西哥城国立自治大学植物园。";
        this[1][14] = "棕喉唧鹀，墨西哥城国立自治大学植物园。";
        this[1][15] = "黑头白斑翅雀，雄性，墨西哥城国立自治大学植物园。";
        this[1][16] = "大蜂鸟，雄性，墨西哥城国立自治大学植物园。";
        this[1][17] = "森莺，墨西哥城国立自治大学植物园。";
        this[1][18] = "家朱雀，雄性和雌性，墨西哥城国立自治大学植物园。";
        this[1][19] = "比氏苇鹪鹩，墨西哥城国立自治大学植物园。";
        this[1][20] = "歌带鹀，墨西哥城国立自治大学植物园。";
        this[1][21] = "铜色牛鹂，雄性，墨西哥城国立自治大学植物园。";
        this[1][22] = "原鸽，瓜纳华托城。";
        this[1][23] = "阔嘴蜂鸟，雌性，瓜纳华托城。";
        this[1][24] = "黄头金雀，瓜纳华托城。";
        this[1][25] = "卡氏王霸鹟，瓜纳华托城。";
        this[1][26] = "卡氏王霸鹟，瓜纳华托城。";
        this[1][27] = "比氏苇鹪鹩，瓜纳华托城。";
        this[1][28] = "比氏苇鹪鹩，瓜纳华托城。";
        this[1][29] = "卡氏王霸鹟，瓜纳华托城。";
        this[1][30] = "棕背鸲鸫，墨西哥城阿拉米达中央公园。";
        this[1][31] = "阔嘴蜂鸟，雌性，墨西哥城阿拉米达中央公园。";
        this[1][32] = "弯嘴嘲鸫，成年和幼鸟，墨西哥城阿拉米达中央公园。";
        this[1][33] = "印加地鸠，墨西哥城阿拉米达中央公园。";
        this[1][34] = "比氏苇鹪鹩，墨西哥城阿拉米达中央公园。";
    }else{
        this[1][0] = "Mexican Duck, male, Bosque de Chapultepec, Mexico City.";
        this[1][1] = "Mexican Duck, female, Bosque de Chapultepec, Mexico City.";
        this[1][2] = "Berylline Hummingbird, Bosque de Chapultepec, Mexico City.";
        this[1][3] = "Violet-crowned Hummingbird, female, UNAM Botanical Garden, Mexico City.";
        this[1][4] = "Curve-billed Thrasher, UNAM Botanical Garden, Mexico City.";
        this[1][5] = "Berylline Hummingbird, UNAM Botanical Garden, Mexico City.";
        this[1][6] = "Rivoli's Hummingbird, female, UNAM Botanical Garden, Mexico City.";
        this[1][7] = "Violet-crowned Hummingbird, female, UNAM Botanical Garden, Mexico City.";
        this[1][8] = "Rufous-crowned Sparrow, UNAM Botanical Garden, Mexico City.";
        this[1][9] = "Buff-breasted Flycatcher, UNAM Botanical Garden, Mexico City.";
        this[1][10] = "Buff-breasted Flycatcher, UNAM Botanical Garden, Mexico City.";
        this[1][11] = "Hooded Yellowthroat, male, UNAM Botanical Garden, Mexico City.";
        this[1][12] = "Hooded Yellowthroat, male, UNAM Botanical Garden, Mexico City.";
        this[1][13] = "Bushtit, male, UNAM Botanical Garden, Mexico City.";
        this[1][14] = "Canyon Towhee, UNAM Botanical Garden, Mexico City.";
        this[1][15] = "Black-headed Grosbeak, male, UNAM Botanical Garden, Mexico City.";
        this[1][16] = "Rivoli's Hummingbird, male, UNAM Botanical Garden, Mexico City.";
        this[1][17] = "Warbler, UNAM Botanical Garden, Mexico City.";
        this[1][18] = "House Finch, male and female, UNAM Botanical Garden, Mexico City.";
        this[1][19] = "Bewick's Wren, UNAM Botanical Garden, Mexico City.";
        this[1][20] = "Song Sparrow, UNAM Botanical Garden, Mexico City.";
        this[1][21] = "Bronzed Cowbird, male, UNAM Botanical Garden, Mexico City.";
        this[1][22] = "Rock Pigen, Guanajuato City.";
        this[1][23] = "Broad-billed Hummingbird, female, Guanajuato City.";
        this[1][24] = "Verdin, Guanajuato City.";
        this[1][25] = "Cassin's Kingbird, Guanajuato City.";
        this[1][26] = "Cassin's Kingbird, Guanajuato City.";
        this[1][27] = "Bewick's Wren, Guanajuato City.";
        this[1][28] = "Bewick's Wren, Guanajuato City.";
        this[1][29] = "Cassin's Kingbird, Guanajuato City.";
        this[1][30] = "Rufous-backed Thrush, Alameda Central, Mexico City.";
        this[1][31] = "Broad-billed Hummingbird, female, Alameda Central, Mexico City.";
        this[1][32] = "Curve-billed Thrasher, adult and immature, Alameda Central, Mexico City.";
        this[1][33] = "Inca Dove, Alameda Central, Mexico City.";
        this[1][34] = "Bewick's Wren, Alameda Central, Mexico City.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
