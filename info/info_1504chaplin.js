<!--
//Created by Album Builder Program Sat Apr 11 15:07:49 2015
var info_url   = "http://www.chaplinrestaurantdc.com/";
var title      = "Chaplin's Restaurant & Bar";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1504chaplin/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AfterTheLoveIsGone.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "卓别林餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1504chaplin_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "卓别林餐馆是家1920年主题的日本餐馆。";
        this[1][1] = "很好吃的割包。";
        this[1][2] = "辣味拉面，汤辣得正好。";
        this[1][3] = "辣味拉面。";
        this[1][4] = "卓别林招牌拉面。猪骨汤加黑芝麻酱调味，很鲜。";
        this[1][5] = "卓别林招牌拉面。";
    }else{
        this[1][0] = "Chaplin’s Restaurant is a 1920’s themed Japanese Restaurant and Cocktail Bar.";
        this[1][1] = "Chaplin's Bun.";
        this[1][2] = "Stamina Spicy Ramen.";
        this[1][3] = "Stamina Spicy Ramen.";
        this[1][4] = "Chaplin's Ramen. Tonkotsu flavor with black sesame paste.";
        this[1][5] = "Chaplin's Ramen.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
