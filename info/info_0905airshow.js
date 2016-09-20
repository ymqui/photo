<!--
//Created by Album Builder Program Mon May 18 22:26:26 2009
var info_url   = "http://www.jsoh.org";
var title      = "2009 Joint Service Open House Air Show";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0905airshow/";
//var dir        = csdpdir+"pics/0905airshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Aubrey.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "2009安德鲁斯空军基地空展";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0905airshow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "第82空降师跳伞演示。";
        this[1][1] = "空军一号。奥巴马总统前往Notre Dame大学。";
        this[1][2] = "国务卿希拉里在这架飞机上。";
        this[1][3] = "Sean Tucker和伙伴们的飞行表演。";
        this[1][5] = "F-18F。";
        this[1][6] = "空中打字机飞行表演队。";
        this[1][8] = "黑鹰直升机。";
        this[1][9] = "Sean Tucker驾驶他的双翼飞机做高难表演。";
        this[1][10] = "A-10。";
        this[1][11] = "二战时的P-51。";
        this[1][12] = "F-22。";
        this[1][13] = "雷鸟飞行表演队。";
    }else{
        this[1][0] = "Demo by the 82nd Airborne Division.";
        this[1][1] = "Air Force One. President Obama is en route to University of Notre Dame.";
        this[1][2] = "Hillary is on board this plane.";
        this[1][3] = "Sean Tucker and the Collaborators.";
        this[1][5] = "F-18F.";
        this[1][6] = "Geico Skytypers.";
        this[1][8] = "UH-60 Black Hawk.";
        this[1][9] = "Sean Tucker and the Oracle biplane.";
        this[1][10] = "A-10.";
        this[1][11] = "P-51 Mustang.";
        this[1][12] = "F-22.";
        this[1][13] = "Thunderbirds.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
