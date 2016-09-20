<!--
//Created by Album Builder Program Mon May 28 15:25:07 2007
var info_url   = "http://www.rollingthunder1.com/";
var title      = "Rolling Thunder Motorcycle Rally";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0705rollingthunder/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CattleCall.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "滚雷摩托集会";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0705rollingthunder_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "一早，全国各地的摩托车手蜂拥进城准备参加第20届的滚雷集会。";
        this[1][1] = "这些还只是不参加游行的摩托车。";
        this[1][3] = "集会的目的主要是让大众关注战俘和失踪士兵的问题。";
    }else{
        this[1][0] = "Thousands of bikers from around the country came to the rally on May 27.";
        this[1][1] = "A glimpse of nonparticipating motorcycles.";
        this[1][3] = "The rally is to bring attention to the public about POW and MIA issues.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
