<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "";
var title      = "Vacationing in Florida";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1908florida/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "佛罗里达度假";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "1908florida_"+(i+1).toString();
        this[1][i] = "";
    }
    i = 0;
    this[1][i++] = (["In the hotel.","在旅馆里。"])[cn_ind];
    this[1][i++] = (["Playing with Adele.","和小希姐姐一起玩。"])[cn_ind];
    this[1][i++] = (["Playing with Adele and James.","和小希姐姐和小凡哥哥一起玩。"])[cn_ind];
    this[1][i++] = (["Playing with Adele.","和小希姐姐一起玩。"])[cn_ind];
    this[1][i++] = (["In Disney's parking lot.","和妈妈在迪士尼乐园的停车场。"])[cn_ind];
    this[1][i++] = (["In front of the Cinderella Castle in Disney's Magic Kingdom.","和妈妈在迪士尼乐园魔幻王国的公主城堡前。"])[cn_ind];
    this[1][i++] = (["Enjoying a lollipop.","吃棒棒糖。"])[cn_ind];
    this[1][i++] = (["Enjoying a lollipop while shopping with Mommy.","边吃棒棒糖边陪妈妈逛商店。"])[cn_ind];
    this[1][i++] = (["Sharing a lollipop with Adele.","和小希姐姐一起吃棒棒糖。"])[cn_ind];
    this[1][i++] = (["At the Kennedy Space Center's Rocket Garden.","和妈妈在肯尼迪航天中心的火箭花园。"])[cn_ind];
    this[1][i++] = (["At Kennedy Space Center.","在肯尼迪航天中心。"])[cn_ind];
    this[1][i++] = (["At the Kennedy Space Center's IMAX theater.","在肯尼迪航天中心看3D电影。"])[cn_ind];
    this[1][i++] = (["At Kennedy Space Center.","在肯尼迪航天中心。"])[cn_ind];
    this[1][i++] = (["At Kennedy Space Center.","在肯尼迪航天中心。"])[cn_ind];
    this[1][i++] = (["At Kennedy Space Center.","在肯尼迪航天中心。"])[cn_ind];
    this[1][i++] = (["Apollo lunar landing module.","在阿波罗登月舱前。"])[cn_ind];
    this[1][i++] = (["Saturn V rocket.","阿波罗登月计划中使用的土星5号运载火箭。"])[cn_ind];
    this[1][i++] = (["Amazed by the huge Saturn V rocket.","土星5号运载火箭真大。"])[cn_ind];
    this[1][i++] = (["Space shuttle Atlantis.","亚特兰蒂斯号航天飞机。"])[cn_ind];
    this[1][i++] = (["Space shuttle Atlantis.","亚特兰蒂斯号航天飞机。"])[cn_ind];
    this[1][i++] = (["Space shuttle Atlantis.","在亚特兰蒂斯号航天飞机前。"])[cn_ind];
    this[1][i++] = (["Swimming with Daddy's help in the hotel swimming pool.","爸爸抱着在旅馆的游泳池里游泳。"])[cn_ind];
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
