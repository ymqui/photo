<!--
//Created by Album Builder Program Mon Nov 14 22:05:07 2005
var info_url   = "";
var title      = "Chrysanthemums in Zhongshan Park";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0511mum/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Chrysanthemum.mid";
var midi_cr    = new Array("Colin M. Johnson's Midi Opera","http://www.halhkmusic.com/chrysanth.html");
 
if(window.usechinese){
    title      = "中山公园赏菊";
    cam_tit    = "佳能Powershot A80, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "0511mum_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "每年的金秋，龙岩中山公园都举办菊花展。";
        this[1][1] = "龙腾，";
        this[1][2] = "虎跃。";
        this[1][3] = "姐想要回归自然。";
        this[1][4] = "哥和干女儿。";
        this[1][5] = "菊花。";
        this[1][6] = "琦琦和小妹妹。";
        this[1][7] = "琦琦";
        this[1][8] = "琦琦。";
        this[1][9] = "造型。";
        this[1][10] = "菊花。";
        this[1][11] = "菊花。";
        this[1][12] = "千手观音。";
        this[1][13] = "开屏。";
        this[1][14] = "菊花。";
        this[1][15] = "菊花。";
        this[1][16] = "菊花。";
        this[1][17] = "菊花。";
        this[1][18] = "菊花。";
    }else{
        this[1][0] = "Zhongshan Park hosts this year's chrysanthemum show.";
        this[1][1] = "The show features all kinds of chrysanthemums and artistic floral arrangements.";
        this[1][2] = 'This garden is titled "returning to nature".';
        this[1][3] = "My sister.";
        this[1][4] = "My brother and his goddaughter.";
        this[1][5] = "Chrysanthemum.";
        this[1][6] = "Qiqi and her little sister.";
        this[1][7] = "Qiqi.";
        this[1][8] = "Qiqi in front of a floral topiary.";
        this[1][9] = "Posing as a thousand-hand Bodhisattva.";
        this[1][10] = "Chrysanthemum.";
        this[1][11] = "Chrysanthemum.";
        this[1][12] = "Posing as a thousand-hand Bodhisattva.";
        this[1][13] = "Qiqi.";
        this[1][14] = "Chrysanthemum.";
        this[1][15] = "Chrysanthemum.";
        this[1][16] = "Chrysanthemum.";
        this[1][17] = "Chrysanthemum.";
        this[1][18] = "Chrysanthemum.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
