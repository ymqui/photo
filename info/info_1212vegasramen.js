<!--
//Created by Album Builder Program Thu Jan 03 19:41:29 2013
var info_url   = "http://www.yelp.com/search?find_desc=Ramen&find_loc=Las+Vegas%2C+NV";
var title      = "Ramen Restaurants in Las Vegas";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1212vegasramen/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "TurnMeOn.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "拉斯维加斯吃面";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "1212vegasramen_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "28Go餐馆。";
        this[1][1] = "猪肉小三明治。";
        this[1][2] = "排骨酱汤面，汤太甜，不合口味。";
        this[1][3] = "Fukumimi面馆。";
        this[1][4] = "炸鸡。";
        this[1][5] = "担担面，汤里放了很多芝麻酱。";
        this[1][6] = "猪骨汤面，漂着黑色的大蒜油。";
        this[1][7] = "Monta面馆。";
        this[1][9] = "猪骨汤面。";
        this[1][10] = "猪骨酱汤面。";
        this[1][11] = "Sora面馆。";
        this[1][12] = "咸汤面，感觉是拉斯维加斯最好吃的一碗面。";
        this[1][13] = "辣酱汤面，也很不错。";
        this[1][14] = "酱汤面。";
        this[1][15] = "特辣面，要把汤全喝完有点难度。";
        this[1][16] = "芒果米团。";
        this[1][17] = "芝麻米团。";
    }else{
        this[1][0] = "28Go Restaurant.";
        this[1][1] = "Trinity sliders.";
        this[1][2] = "Shoyu ribs ramen. The soup is too sweet to my taste.";
        this[1][3] = "Fukumimi Ramen.";
        this[1][4] = "Karaage: fried chicken.";
        this[1][5] = "Tantan men.";
        this[1][6] = "Tonkotsu ramen, with black garlic oil floating on top.";
        this[1][7] = "Monta Japanese noodle house.";
        this[1][9] = "Tonkotsu ramen.";
        this[1][10] = "Tonkotsu-shoyu ramen.";
        this[1][11] = "Ramen Sora.";
        this[1][12] = "Shio ramen, my favorite bowl in Vegas.";
        this[1][13] = "Spicy shoyu ramen, also very good.";
        this[1][14] = "Shoyu ramen.";
        this[1][15] = "Killer spicy shio ramen, very spicy.";
        this[1][16] = "Mango mochi.";
        this[1][17] = "Kurogoma dango.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
