<!--
//Created by Album Builder Program Sun Jul 22 20:20:14 2007
var info_url   = "http://www.asianfestivaldc.com";
var title      = "Asian Festival in Reston, VA";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0707asianfestival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Thai_PhidPaiLeaw.mid";
var midi_cr    = new Array("Thai Song MIDI","http://www2.neweb.ne.jp/wc/kyanara/thaimidi.html");
 
if(window.usechinese){
    title      = "亚洲节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<24;i++){
        this[0][i] = "0707asianfestival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "周家少林堂的舞狮。";
        this[1][1] = "印度舞蹈。";
        this[1][4] = "蒙古舞蹈。";
        this[1][6] = "斯里兰卡舞蹈。";
        this[1][8] = "印度舞蹈。";
        this[1][10] = "中国腰鼓舞。";
        this[1][12] = "泰国舞蹈。";
        this[1][13] = "缅甸舞蹈。";
        this[1][14] = "缅甸舞蹈。";
        this[1][15] = "泰国长鼓舞。";
        this[1][18] = "台湾舞蹈。";
        this[1][19] = "菲律宾舞蹈。";
        this[1][20] = "菲律宾竹竿舞。";
        this[1][21] = "印度舞。";
    }else{
        this[1][0] = "Chinese lion dance.";
        this[1][1] = "Indian dance.";
        this[1][4] = "Mongolian dance.";
        this[1][6] = "Sri Lankan dance.";
        this[1][8] = "Indian dance.";
        this[1][10] = "Chinese waist drum dance.";
        this[1][12] = "Thai Dance.";
        this[1][13] = "Burmese dance.";
        this[1][14] = "Burmese dance.";
        this[1][15] = "Thai long drum dance.";
        this[1][18] = "Taiwanese dance.";
        this[1][19] = "Philippine dance.";
        this[1][20] = "Philippine bamboo dance.";
        this[1][21] = "Indian dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
