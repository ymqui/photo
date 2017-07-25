<!--
var info_url   = "";
var title      = "Nathan's Photos";
var dir        = maindir+"pics/qiuqiu/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
 
if(window.usechinese){
    title      = "棉花球的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]   = "20170128_001_OvulationTest";
    this[1][i++] = "Positive ovulation test, 1/28/2017.";
    this[0][i]   = "20170215_002_PregnancyTest";
    this[1][i++] = "Positive pregnancy test, 2/15/2017.";
    this[0][i]   = "20170309_003_Sonogram";
    this[1][i++] = "Sonogram at MedStar Montgomery Medical Center. Our greatest joy to hear the baby's heartbeat for the first time, 3/9/2017.";
    this[0][i]   = "20170602_007_AnatomySonogram";
    this[1][i++] = "Anatomy ultrasoud at MedStar Montgomery Medical Center. The baby is healthy and strong, 6/2/2017.";
    this[0][i]   = "20170721_008_Sonogram";
    this[1][i++] = "Nathan's cute little face, MedStar Montgomery Medical Center, 7/21/2017.";


    if(window.usechinese){
        i = 0;
        this[1][i++] = "排卵测试显阳性，1/28/2017。";
        this[1][i++] = "怀孕测试显阳性，2/15/2017。";
        this[1][i++] = "在蒙哥马利医疗中心做超声波检查。无比幸福地看到和听到胎儿的心跳，3/9/2017。";
        this[1][i++] = "在蒙哥马利医疗中心做解剖结构超声波检查，胎儿很健康，6/2/2017。";
        this[1][i++] = "小宝宝的脸蛋，蒙哥马利医疗中心，7/21/2017。";

    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->