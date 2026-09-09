<!--
//Created by Album Builder Program Wed Sep 09 08:08:25 2026
var info_url   = "";
var title      = "Rhode Island Trip";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2609rhodeisland/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Rhode Island Trip";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "2609rhodeisland_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Nathan&Mom@BlockIsland.";
        this[1][1] = "Nathan&Mom@BlockIsland.";
        this[1][2] = "Nathan&Mom@BlockIsland.";
        this[1][3] = "Nathan&Mom@BlockIslandSoutheastLighthouse.";
        this[1][4] = "Nathan@BlockIslandSoutheastLighthouse.";
        this[1][5] = "Nathan@BlockIslandSoutheastLighthouse.";
        this[1][6] = "BlockIslandMoheganBluffs.";
        this[1][7] = "Nathan&Mom@BlockIslandMoheganBluffs.";
        this[1][8] = "Nathan&Mom@BlockIslandMoheganBluffs.";
        this[1][9] = "Nathan&Mom@BlockIslandMoheganBluffs.";
        this[1][10] = "BlockIslandMoheganBluffs.";
        this[1][11] = "Nathan@BlockIslandFerry.";
        this[1][12] = "Nathan@NewportCliffWalk.";
        this[1][13] = "NewportCliffWalk.";
        this[1][14] = "Nathan&Mom@NewportCliffWalk.";
        this[1][15] = "Nathan&Mom@PointJudith.";
        this[1][16] = "PointJudithMilkyWay.";
    }else{
        this[1][0] = "Nathan&Mom@BlockIsland.";
        this[1][1] = "Nathan&Mom@BlockIsland.";
        this[1][2] = "Nathan&Mom@BlockIsland.";
        this[1][3] = "Nathan&Mom@BlockIslandSoutheastLighthouse.";
        this[1][4] = "Nathan@BlockIslandSoutheastLighthouse.";
        this[1][5] = "Nathan@BlockIslandSoutheastLighthouse.";
        this[1][6] = "BlockIslandMoheganBluffs.";
        this[1][7] = "Nathan&Mom@BlockIslandMoheganBluffs.";
        this[1][8] = "Nathan&Mom@BlockIslandMoheganBluffs.";
        this[1][9] = "Nathan&Mom@BlockIslandMoheganBluffs.";
        this[1][10] = "BlockIslandMoheganBluffs.";
        this[1][11] = "Nathan@BlockIslandFerry.";
        this[1][12] = "Nathan@NewportCliffWalk.";
        this[1][13] = "NewportCliffWalk.";
        this[1][14] = "Nathan&Mom@NewportCliffWalk.";
        this[1][15] = "Nathan&Mom@PointJudith.";
        this[1][16] = "PointJudithMilkyWay.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
