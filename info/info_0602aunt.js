<!--
//Created by Album Builder Program Sun Feb 12 22:54:16 2006
var info_url   = "";
var title      = "My Uncle's Family";
var cam_img    = "camera_samsung_a40.jpg";
var cam_tit    = "Samsung Digimax A40, 4 Mega Pixels.";
var dir        = maindir+"pics/0602aunt/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CloudWhisper.mid";
var midi_cr    = new Array("Yahoo Group","http://groups.yahoo.com/group/americasmostbeautifulmusic");
 
if(window.usechinese){
    title      = "叔叔一家过新年";
    cam_tit    = "三星Digimax A40数码相机, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<11;i++){
        this[0][i] = "0602aunt_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "阿姨和孙子小晨晨。";
        this[1][1] = "小晨晨和大白狗。";
        this[1][2] = "大姐给晨晨红包。";
        this[1][3] = "小红和晨晨。";
        this[1][4] = "大姐的儿子忠彬。";
        this[1][5] = "大姐的大儿子忠诚。";
        this[1][6] = "作宝和晨晨。";
        this[1][7] = "作宝和素英一家。";
        this[1][8] = "作宝和他的女朋友。";
        this[1][9] = "山寮风光。";
        this[1][10] = "阿姨养的鸡。";
    }else{
        this[1][0] = "Captions in Chinese only.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->