<!--
//Created by Album Builder Program Sun Aug 26 21:06:38 2012
var info_url   = "http://www.jaleo.com/";
var title      = "Jaleo";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1208jaleo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DearLie.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Jaleo西班牙餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "1208jaleo_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "华盛顿的Jaleo餐馆在唐人街附近。";
        this[1][2] = "拌了金枪鱼的土豆色拉。";
        this[1][3] = "菊苣上盛羊酪，桔子，和杏仁。";
        this[1][4] = "油炸鸡卷。";
        this[1][5] = "香蒜虾。";
        this[1][6] = "烤三文鱼。";
        this[1][7] = "猪排配烤洋葱。";
        this[1][8] = "西班牙奶油冻。";
        this[1][9] = "黑巧克力慕斯配可可蛋糕和榛子冰激凌。";
    }else{
        this[1][0] = "Jaleo DC.";
        this[1][2] = "Potato salad with tuna.";
        this[1][3] = "Endive with goat cheese, orange, and almond.";
        this[1][4] = "Chicken fritter.";
        this[1][5] = "Shrimp tapa.";
        this[1][6] = "Seared salmon.";
        this[1][7] = "Pork loin with roasted onion and cabrales sauce.";
        this[1][8] = "Spanish custard with Catalan cream and orange.";
        this[1][9] = "Dark chocolate mousse with a cocoa sponge cake and hazelnut ice cream.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
