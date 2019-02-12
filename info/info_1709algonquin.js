<!--
//Created by Album Builder Program Wed Sep 06 06:40:41 2017
var info_url   = "http://www.ofo.ca/ofo-docs/Mizzy.pdf";
var title      = "Birding in Algonquin Park";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1709algonquin/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "阿岗昆公园观鸟";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<15;i++){
        this[0][i] = "1709algonquin_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "黄喉虫森莺。";
        this[1][1] = "纹胸林莺，雌性。";
        this[1][2] = "红胸䴓。";
        this[1][4] = "红冠戴菊。";
        this[1][5] = "黑顶山雀。";
        this[1][6] = "枞树镰翅鸡，它们一点都不怕人。";
        this[1][7] = "枞树镰翅鸡，雌性。";
        this[1][8] = "枞树镰翅鸡，雄性在做求爱展示。";
        this[1][9] = "枞树镰翅鸡，雄性。";
        this[1][10] = "黄喉地莺，雌性。";
        this[1][11] = "棕榈林莺。";
        this[1][12] = "黄腰白喉林莺，雄性。";
        this[1][13] = "灰噪鸦。";
        this[1][14] = "巨翅鵟。";
    }else{
        this[1][0] = "Nashville Warbler.";
        this[1][1] = "Magnolia Warbler, female.";
        this[1][2] = "Red-breasted Nuthatch.";
        this[1][4] = "Ruby-crowned Kinglet.";
        this[1][5] = "Black-capped Chickadee.";
        this[1][6] = "Spruce Grouse. These birds are very tame.";
        this[1][7] = "Spruce Grouse, female.";
        this[1][8] = "Spruce Grouse, male in courtship display.";
        this[1][9] = "Spurce Grouse, male.";
        this[1][10] = "Common Yellowthroat, female.";
        this[1][11] = "Palm Warbler.";
        this[1][12] = "Yellow-rumped Warbler, male.";
        this[1][13] = "Canada Jay.";
        this[1][14] = "Broad-winged Hawk.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
