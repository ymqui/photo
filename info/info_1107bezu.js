<!--
//Created by Album Builder Program Tue Jul 26 21:12:52 2011
var info_url   = "http://www.bezurestaurant.com/";
var title      = "Bezu Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1107bezu/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SomeoneLikeYou.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "Bezu餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1107bezu_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Bezu名字源于法语的亲吻。";
        this[1][1] = "西红柿色拉和新鲜的意大利奶酪。";
        this[1][2] = "凉蔬菜汤。";
        this[1][3] = "烤鳐鱼翅。";
        this[1][4] = "烤牛排。";
        this[1][5] = "水果冰沙。";
        this[1][6] = "柠檬薄烤饼和萨芭雍甜点。";
    }else{
        this[1][0] = "Bezu takes its name from the French term for kiss.";
        this[1][1] = "Tomato salad with sherry vinaigrette, and fresh Burrata cheese.";
        this[1][2] = "Gazpacho, a cold tomato based vegetable soup.";
        this[1][3] = "Pan seared skate wing.";
        this[1][4] = "Seared flat iron steak.";
        this[1][5] = "Sorbet.";
        this[1][6] = "Lemon crepes with sabayon.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
