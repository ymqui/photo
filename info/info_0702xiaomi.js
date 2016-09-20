<!--
//Created by Album Builder Program Mon Feb 19 12:27:27 2007
var info_url   = "";
var title      = "Two and a half months old Xiaomi";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0702xiaomi/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AllOutOfLove.mid";
var midi_cr    = new Array("Bob's Mighty Midi","http://www.mightymidi.com/songs2.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "两个半月大的小米过除夕";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<31;i++){
        this[0][i] = "0702xiaomi_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "小米两个半月大了。";
        this[1][2] = "小米和妈妈。";
        this[1][4] = "全家人围着小米荡秋千。";
        this[1][8] = "爸爸哄小米。";
        this[1][13] = "小米和妈妈。";
        this[1][17] = "小米和爸爸妈妈跳舞。";
        this[1][18] = "小米和奶奶。";
        this[1][20] = "小米，奶奶和爸爸。";
        this[1][21] = "小米和奶奶。";
        this[1][22] = "小米和爷爷奶奶。";
        this[1][23] = "小米和舅舅爸爸在一起。";
        this[1][24] = "小米和舅舅。";
        this[1][26] = "全家福。";
        this[1][27] = "全家福。";
        this[1][28] = "小米的第一次年夜饭。";
        this[1][29] = "爷爷奶奶给小米包了个大红包。";
        this[1][30] = "小米穿着裙子多漂亮。";
    }else{
        this[1][0] = "Xiaomi is two and a half months old now.";
        this[1][2] = "Xiaomi with Mom.";
        this[1][4] = "Xiaomi lying in the swing.";
        this[1][8] = "Xiaomi playing with Dad.";
        this[1][13] = "Xiaomi with Mom.";
        this[1][14] = "Xiaomi with Dad and Mom.";
        this[1][17] = "Dancing with Dad and Mom.";
        this[1][18] = "Xiaomi with Grandma.";
        this[1][20] = "Xiaomi with Grandma and Dad.";
        this[1][21] = "Xiaomi with Grandma.";
        this[1][22] = "Xiaomi with Grandpa and Grandma.";
        this[1][23] = "Xiaomi with Uncle and Dad.";
        this[1][24] = "Xiaomi with Uncle.";
        this[1][28] = "Xiaomi's first New Year's Eve dinner.";
        this[1][29] = "A very happy Xiaomi after Grandpa and Grandma gave her a big Hong Bao.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
