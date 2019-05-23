<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "";
var title      = "Trip to Mexico";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1905mexico/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
//var midi_cr    = new Array("","");
var pagelist   = [["1905mxbird","5/2019 Birding in Mexico","5/2019 墨西哥观鸟"]]
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "游墨西哥";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<24;i++){
        this[0][i] = "1905mexico_"+(i+1).toString();
        this[1][i] = "";
    }
    i = 0;
    this[1][i++] = (["Waiting for the metro train in Mexico City.","在墨西哥城等地铁。"])[cn_ind];

    this[1][i++] = (["Visiting the UNAM Botanical Garden in Mexico City.","球球和妈妈在墨西哥城的国立自治大学植物园陪爸爸观鸟。"])[cn_ind];

    this[1][i++] = (["Strolling the Zocalo in Mexico City.","在墨西哥城逛市中心的宪法广场。"])[cn_ind];

    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿，总统的办公地点和象征墨西哥政府的建筑。"])[cn_ind];

    this[1][i++] = (["Alleys in Guanajuato City.","瓜纳华托城的小巷。"])[cn_ind];

    this[1][i++] = (["Tunnel streets in Guanajuato City.","瓜纳华托城可以行车的地下隧道。"])[cn_ind];
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
