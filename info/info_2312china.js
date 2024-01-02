<!--
//Created by Album Builder Program Tue Jan 02 05:17:26 2024
var info_url   = "";
var title      = "Visiting families in China";
var cam_img    = "";
var dir        = maindir+"pics/2312china/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "回中国探亲";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<34;i++){
        this[0][i] = "2312china_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "东京羽田机场看富士山。";
        this[1][1] = "在东京羽田机场吃拉面。";
        this[1][2] = "参观北京天安门。";
        this[1][3] = "乘北京前往杭州的高铁。";
        this[1][4] = "乘杭州前往龙岩的高铁。";
        this[1][5] = "和外国玩锤子剪刀布。";
        this[1][6] = "在龙岩的一个庙里许愿。";
        this[1][7] = "在龙岩的一个庙里上香许愿。";
        this[1][8] = "和龙岩姑妈在一起。";
        this[1][9] = "和奶奶和姑妈在一起。";
        this[1][10] = "雾气腾腾的龙岩山谷。";
        this[1][11] = "在爸爸老家龙岩逛街。";
        this[1][12] = "在爸爸老家和爷爷奶奶合影。";
        this[1][13] = "龙岩的全家福。";
        this[1][14] = "伯父抱着去参观永定土楼。";
        this[1][15] = "和妈妈在振成楼前。";
        this[1][16] = "和奶奶，姑妈和伯父在振成楼前。";
        this[1][17] = "和奶奶，姨婆，姑妈和伯父在振成楼前。";
        this[1][18] = "和妈妈，外公外婆在振成楼前。";
        this[1][19] = "振成楼内景。";
        this[1][20] = "在一个方形土楼里。";
        this[1][21] = "和渲表哥和妈妈一起爬仙霞关。";
        this[1][22] = "浙江的仙霞关。";
        this[1][23] = "仙霞关。";
        this[1][24] = "游浙江的廿八都古镇。";
        this[1][25] = "游浙江的廿八都古镇。";
        this[1][26] = "在廿八都的一个老衙门里面。";
        this[1][27] = "在廿八都文昌阁的孔子雕像前。";
        this[1][28] = "逛廿八都的青石板小巷。";
        this[1][29] = "和果冻抱在一起。";
        this[1][30] = "和外公外婆在妈妈老家江山。";
        this[1][31] = "江山的彩虹桥前合影。";
        this[1][32] = "江山的彩虹桥前合影。";
        this[1][33] = "参观北京大学。";
    }else{
        this[1][0] = "Mount Fuji viewed from Tokyo Haneda Airport.";
        this[1][1] = "Enjoying a bowl of Ramen at Tokyo Haneda Airport.";
        this[1][2] = "Visiting Tiananmen in Beijing.";
        this[1][3] = "On the train from Beijing to Hangzhou.";
        this[1][4] = "On the train from Hangzhou to Longyan.";
        this[1][5] = "Playing rock paper scissors with Grandpa.";
        this[1][6] = "Praying at a temple in Longyan.";
        this[1][7] = "Praying at a temple in Longyan.";
        this[1][8] = "With Aunt.";
        this[1][9] = "With Grandma and Aunt.";
        this[1][10] = "Foggy mountains.";
        this[1][11] = "Walking along the street in Longyan.";
        this[1][12] = "With grandparents.";
        this[1][13] = "Longyan family photo.";
        this[1][14] = "Visiting Yongding Tulou with Uncle's help.";
        this[1][15] = "Visiting Yongding Tulou in Fujian province.";
        this[1][16] = "In front of Zhenchenglou with Grandma, Aunt, and Uncle.";
        this[1][17] = "In front of Zhenchenglou with Grandma, Great-aunt, Aunt, and Uncle.";
        this[1][18] = "In front of Zhenchenglou with grandparents and Mom.";
        this[1][19] = "Inside Zhenchenglou.";
        this[1][20] = "Inside a square tulou.";
        this[1][21] = "Climbing Xianxiaguan trail with cousin Xuan and Mom.";
        this[1][22] = "Xianxiaguan in Zhejiang province.";
        this[1][23] = "Xianxiaguan.";
        this[1][24] = "Visiting Nianbadu in Zhejiang province.";
        this[1][25] = "Visiting Nianbadu with cousin Xuan and Mom.";
        this[1][26] = "Inside an old government administrative office at Nianbadu.";
        this[1][27] = "In front of a statue of Confucius at Nianbadu's Wenchangge.";
        this[1][28] = "Walking the stone alleys of Nianbadu.";
        this[1][29] = "Hugging niece Eva.";
        this[1][30] = "With grandparents in Jiangshan.";
        this[1][31] = "Family photo in front of Rainbow bridge in Jiangshan.";
        this[1][32] = "Family photo in front of Rainbow bridge in Jiangshan.";
        this[1][33] = "Visiting Peking University in Beijing.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
