<!--
//Created by Album Builder Program Mon Nov 14 22:05:07 2005
var info_url   = "";
var title      = "Nannan's Photo";
var dir        = maindir+"pics/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "M2M_TDYWA.mid";
var midi_cr    = new Array("CMIDI","http://www.cmidi.com");
 
if(window.usechinese){
    title      = "楠楠的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]   = "0410picnic/0410picnic_7";
    this[1][i++] = "10/2004 Dongxiao Forest Park, Longyan, Fujian";
    this[0][i]   = "0510xiamen/0510xiamen_13";
    this[1][i++] = "10/2005 SeaWorld, Gulangyu, Xiamen, Fujian";
    this[0][i]   = "0712family/0712family_20";
    this[1][i++] = "12/2007 Longyan, Fujian";
    if(window.usechinese){
        i = 0;
        this[1][i++] = "10/2004 福建龙岩东肖森林公园";
        this[1][i++] = "10/2005 福建厦门鼓浪屿海底世界";
        this[1][i++] = "12/2007 福建龙岩";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->