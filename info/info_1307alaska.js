<!--
//Created by Album Builder Program Sun Jul 28 23:23:46 2013
var info_url   = "";
var title      = "Alaska";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1307alaska/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "LoveDoesntHaveToHurt.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "阿拉斯加";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<33;i++){
        this[0][i] = "1307alaska_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "麦金利峰，北美最高峰。";
        this[1][1] = "德纳利国家公园。";
        this[1][2] = "德纳利国家公园里的山谷冰川。";
        this[1][11] = "飞机在冰川上登陆。";
        this[1][12] = "Matansuka冰川。";
        this[1][13] = "Matansuka冰川。";
        this[1][14] = "阿拉斯加的格伦公路。";
        this[1][15] = "棕熊在卡特迈国家公园的布鲁克斯瀑布捕鱼。";
        this[1][25] = "钓鱼的人和棕熊和睦相处。";
        this[1][26] = "出口冰川。";
        this[1][31] = "母驼鹿和小驼鹿。";
        this[1][32] = "安克雷奇外的波特沼泽。";
    }else{
        this[1][0] = "Mt. Mckinley, the highest mountain peak in North America.";
        this[1][1] = "Denali National Park.";
        this[1][2] = "Valley glacier in the Denali National Park.";
        this[1][11] = "Plane carrying tourists landing on the glacier.";
        this[1][12] = "Matansuka glacier.";
        this[1][13] = "Matansuka glacier.";
        this[1][14] = "Glenn highway.";
        this[1][15] = "Brown bears catching salmons at Brooks Falls in Katmai National Park & Preserve.";
        this[1][25] = "Anglers and brown bear.";
        this[1][26] = "Exit glacier.";
        this[1][31] = "Mother moose and calves.";
        this[1][32] = "Potter marsh outside Anchorage.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
