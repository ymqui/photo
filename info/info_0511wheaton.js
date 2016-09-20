<!--
//Created by Album Builder Program Sun Nov 06 02:11:45 2005
var info_url   = "http://www.mc-mncppc.org/parks/brookside/";
var title      = "Brookside Gardens in Wheaton Regional Park";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0511wheaton/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Polonaise.mid";
var midi_cr    = new Array("Classical Guitar Midi Archives","http://www.classicalguitarmidi.com/top20.html");
 
if(window.usechinese){
    title      = "溪边花园赏菊";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<60;i++){
        this[0][i] = "0511wheaton_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "可可在拍谁呢？";
        this[1][1] = "汇钢和小韵。";
        this[1][2] = "合影。";
        this[1][3] = "可可。";
        this[1][4] = "采蜜。";
        this[1][5] = "小黄菊。";
        this[1][6] = "可可的表情特丰富。";
        this[1][7] = "小韵。";
        this[1][8] = "张雯。";
        this[1][9] = "瞧这小俩口多开心。";
        this[1][10] = "我自己。";
        this[1][11] = "不知名的小花花。";
        this[1][12] = "名叫“午夜”的墨西哥鼠尾草。";
        this[1][13] = "锦伟一家。";
        this[1][14] = "拍摄中。";
        this[1][15] = "菊花。";
        this[1][16] = "小韵和汇钢。";
        this[1][17] = "锦伟一家。";
        this[1][18] = "菊花。";
        this[1][19] = "菊花。";
        this[1][20] = "不知名的黄花。";
        this[1][21] = "小韵和汇钢。";
        this[1][22] = "墨西哥鼠尾草。";
        this[1][23] = "可可和爸爸。";
        this[1][24] = "大伙查看拍摄效果。";
        this[1][25] = "我自己。";
        this[1][26] = "锦伟和我都十年没见了。";
        this[1][27] = "锦伟张雯夫妇俩。";
        this[1][28] = "香蕉花。";
        this[1][29] = "可可。";
        this[1][30] = "可可。";
        this[1][31] = "小韵。";
        this[1][32] = "天堂鸟花。";
        this[1][33] = "小韵。";
        this[1][34] = "可可。";
        this[1][35] = "母女。";
        this[1][36] = "菊花。";
        this[1][37] = "菊花。";
        this[1][38] = "菊花。";
        this[1][39] = "小韵。";
        this[1][40] = "汇钢。";
        this[1][41] = "汇钢。";
        this[1][42] = "菊花。";
        this[1][43] = "菊花。";
        this[1][44] = "菊花。";
        this[1][45] = "小花。";
        this[1][46] = "汇钢和小韵。";
        this[1][47] = "可可。";
        this[1][48] = "小韵。";
        this[1][49] = "小兰果。";
        this[1][50] = "小红果。";
        this[1][51] = "小韵和汇钢。";
        this[1][52] = "开心的一家。";
        this[1][53] = "集体照。";
        this[1][54] = "好奇的可可。";
        this[1][55] = "木结构的茶棚。";
        this[1][56] = "木桥观鱼。";
        this[1][57] = "汇钢和小韵。";
        this[1][58] = "小韵和汇钢。";
        this[1][59] = "锦伟一家。";
    }else{
        this[1][0] = "Who is Keke taking pictures of?";
        this[1][1] = "Huigang and Yun.";
        this[1][2] = "Yun, Huigang, Jinwei, Wen, Keke, and Yiming";
        this[1][3] = "Keke.";
        this[1][4] = "Bee and mums.";
        this[1][5] = "Chrysanthemums.";
        this[1][6] = "Keke.";
        this[1][7] = "Yun.";
        this[1][8] = "Wen.";
        this[1][9] = "Yun and Huigang having fun.";
        this[1][10] = "Yiming sweating under the thick clothes.";
        this[1][11] = "Beautiful flower.";
        this[1][12] = "A Mexican sage named "+'"Midnight"'+".";
        this[1][13] = "Jinwei family.";
        this[1][14] = "Yun is busy taking photos.";
        this[1][15] = "Chrysanthemums.";
        this[1][16] = "Yun and Huigang.";
        this[1][17] = "Jinwei family.";
        this[1][18] = "Chrysanthemum.";
        this[1][19] = "Chrysanthemum.";
        this[1][20] = "A yellow flower.";
        this[1][21] = "Yun and Huigang.";
        this[1][22] = '"Midnight"'+" sage.";
        this[1][23] = "Keke held by dad.";
        this[1][24] = '"That'+"'"+'s a great shot."';
        this[1][25] = "Yiming.";
        this[1][26] = "Jinwei and Yiming met after 10 years.";
        this[1][27] = "Jinwei and Wen.";
        this[1][28] = "Banana flower.";
        this[1][29] = "Keke.";
        this[1][30] = '"I'+"'"+'ve found the battery."';
        this[1][31] = "Yun posing beside a bird of paradise flower.";
        this[1][32] = "Bird of paradise.";
        this[1][33] = "Yun.";
        this[1][34] = "Keke is never short of expressions.";
        this[1][35] = "Wen and Keke.";
        this[1][36] = "Chrysanthemum.";
        this[1][37] = "Chrysanthemum.";
        this[1][38] = "Chrysanthemum.";
        this[1][39] = "Yun is posing for ...";
        this[1][40] = "Huigang.";
        this[1][41] = "Huigang.";
        this[1][42] = "Chrysanthemums.";
        this[1][43] = "Chrysanthemum.";
        this[1][44] = "A bush of chrysanthemums near the parking lot.";
        this[1][45] = "Flower and bee.";
        this[1][46] = "Huigang and Yun.";
        this[1][47] = "Keke eating a SaQiMa.";
        this[1][48] = "Yun waiting for leaves to drop.";
        this[1][49] = "Beautyberry.";
        this[1][50] = "Some red berry.";
        this[1][51] = "Yun and Huigang.";
        this[1][52] = "Jinwei family.";
        this[1][53] = "Group photo.";
        this[1][54] = "A curious Keke.";
        this[1][55] = "Japanese tea house.";
        this[1][56] = "Looking for fish in the pond.";
        this[1][57] = "Huigang and Yun.";
        this[1][58] = "Yun and Huigang.";
        this[1][59] = "Jinwei, Wen, and Keke.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
