<!--
//Created by Album Builder Program Sun Oct 16 22:18:10 2011
var info_url   = "http://www.officialbridgeday.com/";
var title      = "Bridge Day";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1110bridgeday/";
//var dir        = csdpdir+"pics/1110bridgeday/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "WholeAgain.mid";
var midi_cr    = new Array("Electrofresh ","http://electrofresh.com/");
 
if(window.usechinese){
    title      = "跳桥日";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<21;i++){
        this[0][i] = "1110bridgeday_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "新河峡谷大桥，跳桥日的地点。";
        this[1][1] = "新河，在桥下267米处流过。";
        this[1][3] = "跳桥日是每年唯一允许跳伞的时候。";
        this[1][4] = "举办时间在10月份第三个星期六，总能吸引大量参与者和观众。";
        this[1][5] = "跳伞的报名者排队等着跳桥。";
        this[1][6] = "“我来了。。。”";
        this[1][7] = "“主呀，今天您千万不要召见我。”";
        this[1][8] = "没办法，腿软了。";
        this[1][9] = "深情的一跳。";
        this[1][10] = "难兄难弟。";
        this[1][12] = "空中芭蕾。";
    }else{
        this[1][0] = "The New River Gorge Bridge, where the annual Bridge Day is held.";
        this[1][1] = "The New River.";
        this[1][3] = "Bridge Day is the only day of the year people are allowed to BASE jump off the 876 feet tall bridge.";
        this[1][4] = "Bridge Day is held on the third Saturday in October, attracting a large crowd.";
        this[1][5] = "BASE jumpers line up for the jump.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
