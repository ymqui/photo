<!--
//Created by Album Builder Program Tue Jul 31 21:01:40 2012
var info_url   = "http://www.cafesabarsky.com/";
var title      = "Café Sabarsky";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1207sabarsky/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "LikeWeNeverHadBrokenHeart.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "萨巴斯基奥地利餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "1207sabarsky_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "萨巴斯基奥地利餐厅位于第五大道的德国奥地利艺术博物馆Neue Galerie里面。";
        this[1][1] = "南非的Rooibos茶。";
        this[1][2] = "黄瓜柠檬汁。";
        this[1][3] = "烤香肠配德国泡菜，烤土豆，和第戎芥末醬。";
        this[1][4] = "燻香肠配德国泡菜，烤土豆，和第戎芥末醬。";
        this[1][5] = "匈牙利菜炖牛肉。";
        this[1][6] = "配乳酪鸡蛋面。";
        this[1][7] = "苹果馅饼。";
        this[1][8] = "芝士蛋糕。";
        this[1][9] = "维也纳杏仁巧克力蛋糕。";
    }else{
        this[1][0] = "Located in Neue Galerie, Café Sabarsky is a high-minded Viennese café on upper Fifth Avenue.";
        this[1][1] = "Rooibos tea, a South African herbal tea.";
        this[1][2] = "Cucumber juice with sparkling lemonade.";
        this[1][3] = "Roasted bratwurst with Riesling sauerkraut, roasted potatoes, and Dijon sauce.";
        this[1][4] = "Smoked bratwurst stuffed with Cheddar cheese, served with sauerkraut, roasted potatoes, and Dijon sauce.";
        this[1][5] = "Hungarian beef goulash.";
        this[1][6] = "Served with fresh herbed quark spatzle.";
        this[1][7] = "Apple strudel.";
        this[1][8] = "Quark cheese cake.";
        this[1][9] = "Viennese dark chocolate cake with house made apricot confiture.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
