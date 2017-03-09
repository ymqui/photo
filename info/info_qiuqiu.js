<!--
var info_url   = "";
var title      = "Qiuqiu's Photo";
var dir        = maindir+"pics/qiuqiu/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
 
if(window.usechinese){
    title      = "球球的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]   = "20170128_001_OvulationTest";
    this[1][i++] = "1/28/2017 Ovulation test.";
    this[0][i]   = "20170215_002_PregnancyTest";
    this[1][i++] = "2/15/2017 Pregnancy test.";
    //this[0][i]   = "20170215_002_PregnancyTest";
    //this[1][i++] = "3/9/2017 Sonogram at MedStar Montgomery Medical Center.";
    if(window.usechinese){
        i = 0;
        this[1][i++] = "1/28/2017 排卵测试。";
        this[1][i++] = "2/15/2017 怀孕测试。";
        //this[1][i++] = "3/9/2017 在蒙哥马利医疗中心做超声波检查，看到和听到了胎儿的心跳。";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->