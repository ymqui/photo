<!--
//Created by Album Builder Program Sun Sep 10 12:28:04 2006
var info_url   = "http://www.kennedy-center.org/";
var title      = "Dancing on the River Terrace at the Kennedy Center";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0609dance/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Bamboleo.mid";
var midi_cr    = new Array("Salsa Music","http://www.esto.es/salsa/menumidi.htm");
 
if(window.usechinese){
    title      = "肯尼迪中心露天舞蹈";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0609dance_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "夏夜，在星光下起舞，没有比这更好的消遣了。";
        this[1][10] = "乐队是从波多黎各来的。";
        this[1][12] = "肯尼迪中心的屋顶阳台。";
    }else{
        this[1][0] = "Dancing the night away at Kennedy Center is a great way to spend a summer night.";
        this[1][10] = "The band is Puerto Rico's Plena Libre.";
        this[1][12] = "Roof terrace of the Kennedy Center.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
