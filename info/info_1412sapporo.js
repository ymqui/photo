<!--
//Created by Album Builder Program Sun Dec 07 16:16:45 2014
var info_url   = "http://www.sapporo-nyc.com/";
var title      = "Sapporo Ramen Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1412sapporo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DaydreamBeliever.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "纽约市札幌拉面馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<3;i++){
        this[0][i] = "1412sapporo_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "面店的招牌拉面。";
        this[1][1] = "盐味拉面。";
        this[1][2] = "面条很不错。";
    }else{
        this[1][0] = "Sapporo Special Ramen. I don't like the taste of the soup.";
        this[1][1] = "Shio Ramen.";
        this[1][2] = "Shio Ramen. The noodle is very good.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
