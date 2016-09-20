<!--
//Created by Album Builder Program Sat Aug 28 20:51:35 2010
var info_url   = "http://www.metmuseum.org/works_of_art/the_cloisters";
var title      = "New York's Central Park and the Cloisters";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1008newyork/";
//var dir        = csdpdir+"pics/1008newyork/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "PianoSpirit.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
 
if(window.usechinese){
    title      = "纽约中央公园和修道院博物馆";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "1008newyork_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
	this[1][0] = "纽约中央公园的草莓园。";
        this[1][1] = "修道院博物馆，大都会博物馆的一个分馆。";
        this[1][2] = "被关的独角兽-修道院博物馆里的七幅独角兽挂毯之一。";
        this[1][3] = "围捕独角兽。";
        this[1][4] = "小教堂里的十字架。";
        this[1][5] = "小教堂里的壁画。";
        this[1][6] = "彩色玻璃窗。";
        this[1][12] = "圣母和圣子。";
    }else{
        this[1][0] = "Strawberry field in Central Park.";
        this[1][1] = "The Cloisters, a branch of the Metropolitan Museum of Art.";
        this[1][2] = "The Unicorn in captivity.";
        this[1][3] = "The hunt of the unicorn.";
        this[1][4] = "The crucifix in the Fuentiduena Chapel.";
        this[1][5] = "A fresco in the Fuentiduena Chapel.";
        this[1][6] = "Stained glass window in the Cloisters.";
        this[1][12] = "Virgin and child.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
