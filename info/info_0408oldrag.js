<!--
var info_url   = "http://www.nps.gov/shen/";
var title      = "Old Rag Mountain";
var cam_img    = "camera_canon_a80.jpg"
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels."
var dir        = maindir+"pics/0408oldrag/"; //directory where pics are
var interval   = 5000;                       //interval for slide show in millisecond
var thumb_dir  = maindir+"thumbnail/";       //thumbnail directory
var ext        = ".jpg";                     //extension of the pic files
var midi_file  = "Mbira.mid";
var midi_cr    = new Array("John Kwasnik","http://members.accessbee.com/jkwasnik/midfiles.html");
//Nhemamusasa - a traditional Shona mbira piece, as transcribed by Paul Berliner 
//in his The Soul of Mbira (UC Press, 1978). For two mbiras and percussion. (1995)

if(window.usechinese){
    cam_tit    = "佳能Powershot A80, 400万像素。";
    title      = "老破布山";
}

document.title = title;

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos, shown as browser status
    for (var i=0;i<43;i++){
        this[0][i] = "0408oldrag_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0]  = "Yiming, William, Ying, 和 Owen";
        this[1][29] = "山顶";
    }else{
        this[1][0]  = "Yiming, William, Ying, and Owen";
        this[1][29] = "Old Rag Mountain Summit";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
