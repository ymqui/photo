<!--
//Created by Album Builder Program Tue May 02 21:42:43 2006
var info_url   = "";
var title      = "Touring DC with my Uncle";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0605dc/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MelodyInAMajor.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/pre_50s/pre_50s_1.html");
 
if(window.usechinese){
    title      = "给姨丈当导游";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<24;i++){
        this[0][i] = "0605dc_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "和姨丈在国会大厦前。";
        this[1][1] = "姨丈拍录像。";
        this[1][3] = "姨丈在植物园前。";
        this[1][4] = "姨丈和同事。";
        this[1][5] = "国会山。";
        this[1][7] = "保安警察。";
        this[1][9] = "姨丈在国会大厦前。";
        this[1][11] = "姨丈在杰佛逊纪念堂前。";
        this[1][12] = "林肯纪念堂。";
        this[1][13] = "姨丈拍正在林肯纪念堂前演奏的一个德州的乐队。";
        this[1][14] = "德州来的某高中乐队。";
        this[1][16] = "姨丈在林肯纪念堂前。";
        this[1][17] = "姨丈在反光池前。";
        this[1][18] = "反光池和华盛顿纪念碑。";
        this[1][19] = "姨丈在林肯雕像前。";
        this[1][20] = "林肯纪念堂。";
        this[1][21] = "越战纪念碑。";
        this[1][22] = "姨丈在越战纪念碑前。";
        this[1][23] = "饭店禁烟，姨丈只好出去过过瘾。";
    }else{
        this[1][0] = "In front of the Capitol with my Uncle.";
        this[1][1] = "My uncle shooting videos.";
        this[1][3] = "Uncle in front of the botanic garden.";
        this[1][4] = "Uncle and his colleague.";
        this[1][5] = "The Capitol.";
        this[1][7] = "A Capitol policeman.";
        this[1][8] = "The Capitol dome.";
        this[1][9] = "Uncle in front of the Capitol.";
        this[1][11] = "Uncle in front of the Jefferson Memorial.";
        this[1][12] = "The Lincoln Memorial.";
        this[1][13] = "Uncle shooting videos of a Texas band playing in front of the Lincoln Memorial.";
        this[1][14] = "A high school band from Texas.";
        this[1][16] = "Uncle in front of the Lincoln Memorial.";
        this[1][17] = "Uncle in front of the reflection pool.";
        this[1][18] = "The reflection pool and the Washington Monument.";
        this[1][19] = "Uncle in front of the statue of Lincoln.";
        this[1][20] = "The Lincoln Memorial.";
        this[1][21] = "The Vietnam War Memorial.";
        this[1][22] = "Uncle in front of the Vietnam War Memorial.";
        this[1][23] = "Uncle smoking outside a restaurant.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
