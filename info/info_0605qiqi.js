<!--
//Created by Album Builder Program Sun May 14 22:23:38 2006
var info_url   = "";
var title      = "Qiqi's Birthday";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0605qiqi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "HappyBirthday.mid";
var midi_cr    = new Array("PSALM","http://www.angelfire.com/sk2/scotland/PSALMSOUND/Midis.html");
 
if(window.usechinese){
    title      = "琦琦过生日";
    cam_tit    = "佳能Powershot A80，400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "0605qiqi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小寿星琦琦。";
        this[1][1] = "姐和姐夫，这张是琦琦拍的。";
        this[1][2] = "琦琦。";
        this[1][3] = "生日蛋糕。";
        this[1][4] = "琦琦，祝你生日快乐！";
    }else{
        this[1][0] = "Qiqi.";
        this[1][1] = "My sister and brother-in-law.";
        this[1][2] = "Qiqi.";
        this[1][3] = "Birthday cake.";
        this[1][4] = "Happy birthday, Qiqi.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->