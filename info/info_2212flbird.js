<!--
//Created by Album Builder Program Thu Dec 29 19:22:10 2022
var info_url   = "";
var title      = "Birding in Florida";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.1 Mega Pixels.";
var dir        = maindir+"pics/2212flbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "佛罗里达观鸟";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "2212flbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "茶色树鸭，阿波普卡湖野生动物观赏车道。";
        this[1][1] = "茶色树鸭，阿波普卡湖野生动物观赏车道。";
        this[1][2] = "南达锥尾鹦鹉，南皮尼拉斯湾道。";
        this[1][3] = "南达锥尾鹦鹉，南皮尼拉斯湾道。";
        this[1][4] = "雪鸻，德索托堡公园。";
        this[1][5] = "雪鸻，德索托堡公园。";
        this[1][6] = "雪鸻，德索托堡公园。";
        this[1][7] = "雪鸻，德索托堡公园。";
        this[1][8] = "雪鸻，德索托堡公园。";
        this[1][9] = "橙嘴凤头燕鸥，德索托堡公园。";
        this[1][10] = "美洲隼，德索托堡公园。";
        this[1][11] = "美洲隼，德索托堡公园。";
        this[1][12] = "鹗，德索托堡公园。";
        this[1][13] = "大蓝鹭，德索托堡公园。";
        this[1][14] = "黄腰林莺，萨拉索塔郡芹菜田观鸟区。";
        this[1][15] = "姬滨鹬，坦帕市柏树点公园。";
        this[1][16] = "三趾滨鹬，坦帕市柏树点公园。";
    }else{
        this[1][0] = "Fulvous Whistling-Duck, Lake Apopka Wildlife Drive.";
        this[1][1] = "Fulvous Whistling-Duck, Lake Apopka Wildlife Drive.";
        this[1][2] = "Nanday Parakeet, Pinellas Bayway South.";
        this[1][3] = "Nanday Parakeet, Pinellas Bayway South.";
        this[1][4] = "Snowy Plover, Fort De Soto Park.";
        this[1][5] = "Snowy Plover, Fort De Soto Park.";
        this[1][6] = "Snowy Plover, Fort De Soto Park.";
        this[1][7] = "Snowy Plover, Fort De Soto Park.";
        this[1][8] = "Snowy Plover, Fort De Soto Park.";
        this[1][9] = "Royal Tern, Fort De Soto Park.";
        this[1][10] = "American Kestrel, Fort De Soto Park.";
        this[1][11] = "American Kestrel, Fort De Soto Park.";
        this[1][12] = "Osprey, Fort De Soto Park.";
        this[1][13] = "Great Blue Heron, Fort De Soto Park.";
        this[1][14] = "Yellow-rumped Warbler, the Celery Field, Sarasota.";
        this[1][15] = "Least Sandpiper, Cypress Point Park, Tampa.";
        this[1][16] = "Sanderling, Cypress Point Park, Tampa.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
