<!--
//Created by Album Builder Program Thu Feb 18 22:56:35 2010
var info_url   = "http://www.si.edu/";
var title      = "Treasures of the Smithsonian";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1001smithsonian/";
//var dir        = csdpdir+"pics/1001smithsonian/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "NoSeManana.mid";
var midi_cr    = new Array("Luli's midi collection","http://www.rhost.it/Luli/my_music.htm");
 
if(window.usechinese){
    title      = "史密森尼博物院的馆藏";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<7;i++){
        this[0][i] = "1001smithsonian_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "华盛顿纪念碑。";
        this[1][1] = "日本瓷器。";
        this[1][2] = "印度佛像。";
        this[1][3] = "印度佛像。";
        this[1][4] = "印度佛像。";
        this[1][5] = "希望蓝钻石。";
        this[1][6] = "绿宝石。";
    }else{
        this[1][0] = "Washington Monument.";
        this[1][1] = "A Japanese jar.";
        this[1][2] = "Indian Bodhisattva.";
        this[1][3] = "Indian Bodhisattva.";
        this[1][4] = "Indian Bodhisattva.";
        this[1][5] = "Hope diamond.";
        this[1][6] = "An emerald.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
