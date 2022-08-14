<!--
//Created by Album Builder Program Sun Aug 14 10:52:37 2022
var info_url   = "";
var title      = "Vacationing in Arizona";
var cam_img    = "";
var dir        = maindir+"pics/2208arizona/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "亚利桑那州度假";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<15;i++){
        this[0][i] = "2208arizona_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "机场等飞机时画画。";
        this[1][1] = "参观图森市的亚利桑那-索诺拉沙漠博物馆。";
        this[1][2] = "参观图森市的亚利桑那-索诺拉沙漠博物馆。";
        this[1][3] = "在酒店餐厅吃晚饭。";
        this[1][4] = "逛图森市中心。";
        this[1][5] = "逛图森市中心。";
        this[1][6] = "在图桑市郊爬山。";
        this[1][7] = "在图桑市郊爬山。";
        this[1][8] = "在图桑市郊爬山。;
        this[1][9] = "观看塞多纳的大教堂岩。";
        this[1][10] = "在塞多纳吃午饭。";
        this[1][12] = "参观斯科茨代尔的 McCormick-Stillman 铁路公园。";
        this[1][13] = "凤凰城的沙尘暴。";
        this[1][14] = "在飞机上睡着了。";
    }else{
        this[1][0] = "Drawing while waiting for the flight in BWI airport.";
        this[1][1] = "Visiting the Arizona-Sonora Desert Musuem in Tucson.";
        this[1][2] = "Visiting the Arizona-Sonora Desert Musuem in Tucson.";
        this[1][3] = "Having dinner at the hotel restaurant.";
        this[1][4] = "Visiting downtown Tucson.";
        this[1][5] = "Visiting downtown Tucson.";
        this[1][6] = "Walking a trail in Tucson.";
        this[1][7] = "Walking a trail in Tucson.";
        this[1][8] = "Walking a trail in Tucson.";
        this[1][9] = "Visiting the Cathedral Rock in Sedona.";
        this[1][10] = "Having lunch in Sedona.";
        this[1][12] = "Visiting the McCormick-Stillman Railroad Park in Scottsdale.";
        this[1][13] = "Dust storm in Phoenix.";
        this[1][14] = "Napping in the aireplane.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
