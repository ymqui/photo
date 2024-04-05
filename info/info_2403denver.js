<!--
//Created by Album Builder Program Thu Apr 04 19:38:47 2024
var info_url   = "";
var title      = "Spring Break in Denver";
var cam_img    = "";
var dir        = maindir+"pics/2403denver/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "在丹佛度春假";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<24;i++){
        this[0][i] = "2403denver_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "在前往丹佛的途中，在堪萨斯州遇到冰雹。";
        this[1][1] = "天寒地冻。";
        this[1][2] = "在科罗拉多州丹佛市的Grammy's Goodies意大利餐厅吃晚饭。";
        this[1][3] = "在旅馆的泳池里游泳。";
        this[1][4] = "游科罗拉多州丹佛市西部历史悠久的矿业小镇爱达荷斯普林斯。";
        this[1][5] = "参观爱达荷斯普林斯的阿尔戈金矿。";
        this[1][6] = "参观爱达荷斯普林斯的阿尔戈金矿。";
        this[1][7] = "游科罗拉多州丹佛市的红石公园。";
        this[1][8] = "红石公园。";
        this[1][9] = "“我喜欢寿司。”";
        this[1][10] = "游沃特顿峡谷步道。";
        this[1][11] = "沃特顿峡谷的大角羊。";
        this[1][12] = "逛科罗拉多州丹佛市郊区的阿瓦达老城。";
        this[1][13] = "逛阿瓦达老城。";
        this[1][14] = "在丹佛联合火车站。";
        this[1][15] = "在丹佛Jinya拉面馆吃拉面。";
        this[1][16] = "阿瓦达清晨。";
        this[1][17] = "落基山阿森纳国家野生动物保护区的一只草原土拨鼠。";
        this[1][18] = "落基山阿森纳国家野生动物保护区的一头野牛。";
        this[1][19] = "汽车陷在堪萨斯州乡村小路的泥里，只好叫拖车把它拖出来。";
        this[1][20] = "参观密苏里州圣路易斯市的拱门国家公园。";
        this[1][22] = "参观密苏里州圣路易斯市的拱门国家公园。";
        this[1][23] = "参观密苏里州圣路易斯市的拱门国家公园。";
    }else{
        this[1][0] = "Encountering a hail storm in Kansas.";
        this[1][1] = "Icy morning drive.";
        this[1][2] = "Having dinner at Grammy's Goodies italian restaurant in Denver, Colorado.";
        this[1][3] = "Swimming in the hotel pool.";
        this[1][4] = "Visiting Idaho Springs, a historic mining town west of Denver, Colorado.";
        this[1][5] = "Visiting Argo gold mine in Idaho Springs.";
        this[1][6] = "Visiting Argo gold mine in Idaho Springs.";
        this[1][7] = "Visiting Red Rocks Park in Denver, Colorado.";
        this[1][8] = "Red Rocks Park.";
        this[1][9] = '"I love Sus(hi)."';
        this[1][10] = "Hiking the Waterton Canyonn trail.";
        this[1][11] = "A bighorn sheep at Waterton Canyon.";
        this[1][12] = "Strolling Olde Town Arvada, a suburb of Denver, Colorado.";
        this[1][13] = "Strolling Olde Town Arvada.";
        this[1][14] = "At Denver Union Station.";
        this[1][15] = "Eating ramen at Denver Jinya restaurant.";
        this[1][16] = "Arvada sunrise.";
        this[1][17] = "A prairie dog at Rocky Mountain Arsenal National Wildlife Refuge.";
        this[1][18] = "A bison at Rocky Mountain Arsenal National Wildlife Refuge.";
        this[1][19] = "Treacherous Kansas county road.";
        this[1][20] = "Visiting the Gateway Arch National Park in St. Louis, Missouri.";
        this[1][22] = "Visiting the Gateway Arch National Park in St. Louis, Missouri.";
        this[1][23] = "Visiting the Gateway Arch National Park in St. Louis, Missouri.";
    }
    makeface = new Array();
    makeface[0] = 19;
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
