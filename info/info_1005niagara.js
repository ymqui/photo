<!--
//Created by Album Builder Program Sat Jun 05 13:16:46 2010
var info_url   = "http://en.wikipedia.org/wiki/Niagara_Falls";
var title      = "Niagara Falls";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1005niagara/";
//var dir        = csdpdir+"pics/1005niagara/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Raindrops.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
 
if(window.usechinese){
    title      = "尼亚加拉大瀑布";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
    info_url   = "http://baike.baidu.com/view/9728.htm";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<12;i++){
        this[0][i] = "1005niagara_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "马蹄铁瀑布上的大彩虹。";
        this[1][1] = "连接美国和加拿大的彩虹大桥。";
        this[1][2] = "美国瀑布和最右边的新娘面纱瀑布。";
        this[1][3] = "雾中少女号游船让乘客近距离领略瀑布的魅力。";
        this[1][4] = "加拿大马蹄铁瀑布。";
        this[1][5] = "尼亚加拉河上的湍流。";
        this[1][6] = "马蹄铁瀑布夜景。";
        this[1][7] = "马蹄铁瀑布。";
        this[1][8] = "马蹄铁瀑布。";
        this[1][9] = "美国瀑布。";
    }else{
        this[1][0] = "Rainbow over the Horseshoe Falls.";
        this[1][1] = "The rainbow bridge connecting Canada and USA.";
        this[1][2] = "The American Falls and the Bridal Veil Falls.";
        this[1][3] = "Maid of the Mist boat brings visitors close to the falls.";
        this[1][4] = "The Canadian Horseshoe Falls.";
        this[1][5] = "The Niagara River gorge.";
        this[1][6] = "The Horseshoe Falls at night.";
        this[1][7] = "The Horseshoe Falls.";
        this[1][8] = "The Horseshoe Falls.";
        this[1][9] = "The American Falls.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
