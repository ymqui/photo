<!--
//Created by Album Builder Program Mon Feb 27 22:37:06 2006
var info_url   = "";
var title      = "Wind & Willow";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0602willow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Dreams.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "风●柳";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "0602willow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这棵柳树位於波多马各河边，靠近林肯纪念堂。";
        this[1][1] = "原片是彩色的。";
        this[1][2] = "拍时光圈调到最小的f/22，多云天效果可能会更好些。";
        this[1][3] = "这是原来的彩色片。";
        this[1][4] = "用了圆偏振片，天蓝得不很均匀。";
        this[1][5] = "风中的柳树。";
    }else{
        this[1][0] = "This willow tree is located at the bank of Potomac river, close to Lincoln memorial.";
        this[1][1] = "The photos were shot in color, with the aperture stopped down to f/22.";
        this[1][2] = "A better effect could have been achieved if the sky were not so bright.";
        this[1][3] = "Here is the color version.";
        this[1][4] = "A circular polarizer was used.";
        this[1][5] = "Willow in the wind.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->