<!--
//Created by Album Builder Program Sat Nov 26 23:06:38 2011
var info_url   = "http://www.billsseafoodrestaurant.com/";
var title      = "Bill's Seafood Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1111billseafood/";
//var dir        = csdpdir+"pics/1111billseafood/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AMomentLikeThis.mid";
var midi_cr    = new Array("Cool Midi","");
 
if(window.usechinese){
    title      = "比尔的海鲜餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1111billseafood_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "餐馆已经装点了节日的彩灯。";
        this[1][1] = "涂了蜂蜜的烤面包。";
        this[1][2] = "热带虾色拉，里头的水果很好吃。";
        this[1][3] = "油炸条纹鲈（rockfish)，配苹果酱。";
        this[1][4] = "帝皇烤蟹，配掺了培根和火腿肉的土豆泥。";
    }else{
        this[1][0] = "The restaurant is already decorated for the holidays.";
        this[1][1] = "Honey glazed bread.";
        this[1][2] = "Tropical shrimp salad.";
        this[1][3] = "Pan fried rockfish with chunky applesauce on the side.";
        this[1][4] = "Crab imperial: crab meat baked with hollandaise sauce. The side is mashed potato with ham and bacon.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
