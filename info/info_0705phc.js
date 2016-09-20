<!--
//Created by Album Builder Program Mon May 07 23:18:43 2007
var info_url   = "http://potomachorse.com/";
var title      = "Potomac Horse Center Open House";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0705phc/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Disperata.mid";
var midi_cr    = new Array("Folk Midis","http://www.saturn-soft.net/Music/Music1/MIDI/Folk2/Menu.htm");
 
if(window.usechinese){
    title      = "波多马各马术中心对外开放日";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "0705phc_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "波多马各马术中心每年春季和秋季都会举办一次开放日，让大众参观。";
        this[1][1] = "该马术中心享有很高的国际声誉。";
    }else{
        this[1][0] = "Potomac Horse Center holds two open houses annually, one in Spring and the other in Fall.";
        this[1][1] = "PHC is a premier international equestrian center.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
