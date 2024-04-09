<!--
//Created by Album Builder Program Mon Jan 02 21:18:01 2012
var info_url   = "";
var title      = "Birding in Florida";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1112flbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "FirstDayOfMyLife.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "佛罗里达观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<32;i++){
        this[0][i] = "1112flbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "红腹啄木鸟，雌性。";
        this[1][1] = "蛇鹈，雄性。";
        this[1][2] = "黑头鹮鹳。";
        this[1][3] = "食螺鸢，雌性。";
        this[1][4] = "小蓝鹭，未成年。";
        this[1][5] = "美洲黑水鸡。";
        this[1][6] = "双冠鸬鹚。";
        this[1][7] = "蛇鹈，雄性。";
        this[1][8] = "黑头鹮鹳。";
        this[1][9] = "蛇鹈，雌性。";
        this[1][10] = "鹗。";
        this[1][12] = "蛇鹈。";
        this[1][13] = "小蓝鹭。";
        this[1][14] = "白鹮。";
        this[1][15] = "紫青水鸡。";
        this[1][16] = "黑头鹮鹳。";
        this[1][17] = "三色鹭。";
        this[1][18] = "双冠鸬鹚。";
        this[1][19] = "雪鹭，未成年。";
        this[1][20] = "红肩隼。";
        this[1][21] = "粉红琵鹭。";
        this[1][22] = "白鹮。";
        this[1][23] = "巨翅鵟，未成年。";
        this[1][24] = "美洲骨顶。";
        this[1][25] = "宽尾拟八哥，未成年。";
        this[1][26] = "粉红琵鹭和一只白色型的红鹭。";
        this[1][27] = "美洲骨顶。";
        this[1][28] = "短嘴半蹼鹬。";
        this[1][29] = "粉红琵鹭。";
        this[1][30] = "褐胸反嘴鹬。";
        this[1][31] = "佛罗里达丛鸦。";
    }else{
        this[1][0] = "Female Red-bellied Woodpecker.";
        this[1][1] = "Male Anhinga.";
        this[1][2] = "Wood Stork.";
        this[1][3] = "Female Snail Kite.";
        this[1][4] = "Juvenile Little Blue Heron.";
        this[1][5] = "Common Gallinule.";
        this[1][6] = "Double-crested Cormorant.";
        this[1][7] = "Male Anhinga.";
        this[1][8] = "Wood Stork.";
        this[1][9] = "Female Anhinga.";
        this[1][10] = "Osprey.";
        this[1][12] = "Anhinga.";
        this[1][13] = "Little Blue Heron.";
        this[1][14] = "White Ibis.";
        this[1][15] = "Purple Gallinule.";
        this[1][16] = "Wood Stork.";
        this[1][17] = "Tricolored Heron.";
        this[1][18] = "Double-crested Cormorant.";
        this[1][19] = "Juvenile Snowy Egret.";
        this[1][20] = "Red-shouldered Hawk.";
        this[1][21] = "Roseate Spoonbill.";
        this[1][22] = "White Ibis.";
        this[1][23] = "Juvenile Broad-winged Hawk.";
        this[1][24] = "American Coot.";
        this[1][25] = "Juvenile Boat-tailed Grackle.";
        this[1][26] = "Roseate Spoonbills and a white-formed Reddish Egret.";
        this[1][27] = "American Coot.";
        this[1][28] = "Short-billed Dowitcher.";
        this[1][29] = "Roseate Spoonbill.";
        this[1][30] = "American Avocet.";
        this[1][31] = "Florida Scrub-Jay.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->