<!--
//Created by Album Builder Program Tue Jan 03 21:59:50 2012
var info_url   = "http://www.yelp.com/biz/rivers-edge-new-orleans";
var title      = "River's Edge Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1112riversedge/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HeavyOnMyHeart.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "河边餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1112riversedge_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "地处法国街区的河边餐馆专营路易斯安那州南方特色饮食。";
        this[1][1] = "小龙虾炖饭。";
        this[1][2] = "汤饭。";
        this[1][3] = "餐馆精选组合菜： 虾饭， 红豆，和什锦饭。";
        this[1][4] = "布丁甜点。";
    }else{
        this[1][0] = "River's Edge is located in French Quarter, serving traditional cajun and creole food.";
        this[1][1] = "Crawfish Etouffee. Etouffee literally means smothered.";
        this[1][2] = "Chicken Gumbo served with the River's Edge Sampler.";
        this[1][3] = "River's Edge Sampler: Shrimp Creole, Red Beans, and Jambalaya.";
        this[1][4] = "Bread Pudding served with the River's Edge Sampler.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
