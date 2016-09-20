<!--
//Created by Album Builder Program Sun May 11 21:01:21 2008
var info_url   = "http://www.cathedral.org/cathedral/";
var title      = "National Cathedral: Lighting to Unite";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0805cathedral/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "GuitarSolo.mid";
var midi_cr    = new Array("The High Quality Midi Archive","http://home.swipnet.se/~w-54954/midi.htm");
 
if(window.usechinese){
    title      = "国家大教堂投影彩装";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<27;i++){
        this[0][i] = "0805cathedral_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "华盛顿国家大教堂百周年庆，特邀瑞士照明艺术家Gerry Hofstetter来用光装点教堂。";
        this[1][1] = "投影的主题是人类团结。";
        this[1][25] = "教堂南侧。";
        this[1][26] = "观众的影子。";
    }else{
        this[1][0] = "Swiss lighting artist Gerry Hofstetter illuminates the Washington National Cathedral to celebrate its centennial.";
        this[1][1] = "The illumination is titled Lighting to Unite.";
        this[1][25] = "South side of the church.";
        this[1][26] = "Shadows of visitors.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
