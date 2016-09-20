<!--
//Created by Album Builder Program Sun May 25 22:47:53 2008
var info_url   = "http://www.jsoh.org/index1.html";
var title      = "2008 Andrews AFB Air Show";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0805airshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Alone.mid";
var midi_cr    = new Array("Kel's Midi Page","http://members.tripod.com/~ellisbell/midi.html");
 
if(window.usechinese){
    title      = "2008安德鲁斯空军基地飞行表演";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<31;i++){
        this[0][i] = "0805airshow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "空中打字员。";
        this[1][1] = "John Klatt S-300D。";
        this[1][3] = "Oracle表演队。";
        this[1][7] = "P-51。";
        this[1][8] = "C-17。";
        this[1][9] = "AV-8B垂直降落。";
        this[1][10] = "空中打字员飞行表演。";
        this[1][14] = "B-2。";
        this[1][15] = "F-104。";
        this[1][16] = "Sean Tucker的Oracle飞行表演。";
        this[1][19] = "F-15E。";
        this[1][20] = "F-22A。";
        this[1][24] = "F-22A, P-51, F-4, 和F-15。";
        this[1][25] = "蓝天使飞行表演队。";
    }else{
        this[1][0] = "Skytypers.";
        this[1][1] = "John Klatt S-300D.";
        this[1][3] = "Team Oracle.";
        this[1][7] = "P-51.";
        this[1][8] = "C-17.";
        this[1][9] = "AV-8B vertical landing.";
        this[1][10] = "Skytypers.";
        this[1][14] = "B-2.";
        this[1][15] = "Starfighters F-104.";
        this[1][16] = "Sean Tucker and the Oracle Bi-plane.";
        this[1][19] = "F-15E.";
        this[1][20] = "F-22A.";
        this[1][24] = "Heritage flight: F-22A, P-51, F-4, and F-15E.";
        this[1][25] = "Blue Angels.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
