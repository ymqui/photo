<!--
//Created by Album Builder Program Sun Jul 05 20:45:39 2026
var info_url   = "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/hocking-hills-state-park";
var title      = "Hocking Hills State Park";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2607hhsp/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Hocking Hills State Park";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "2607hhsp_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "UpperFalls.";
        this[1][1] = "Caves.";
        this[1][2] = "Devil'sBathtub.";
        this[1][3] = "Caves.";
        this[1][4] = "A-FrameBridge.";
        this[1][5] = "OldMan'sCave.";
        this[1][6] = "OldMan'sCave.";
        this[1][7] = "OldMan'sCave.";
        this[1][8] = "OldMan'sCave.";
        this[1][9] = "OldMan'sCave.";
        this[1][10] = "LowerFalls.";
        this[1][11] = "Trail.";
        this[1][12] = "Tunnel.";
        this[1][13] = "Gorge.";
        this[1][14] = "AshCave.";
        this[1][15] = "AshCave.";
        this[1][16] = "AshCave.";
        this[1][17] = "AshCave.";
        this[1][18] = "AshCave.";
        this[1][19] = "AshCave.";
        this[1][20] = "AshCave.";
        this[1][21] = "AshCave.";
    }else{
        this[1][0] = "UpperFalls.";
        this[1][1] = "Caves.";
        this[1][2] = "Devil'sBathtub.";
        this[1][3] = "Caves.";
        this[1][4] = "A-FrameBridge.";
        this[1][5] = "OldMan'sCave.";
        this[1][6] = "OldMan'sCave.";
        this[1][7] = "OldMan'sCave.";
        this[1][8] = "OldMan'sCave.";
        this[1][9] = "OldMan'sCave.";
        this[1][10] = "LowerFalls.";
        this[1][11] = "Trail.";
        this[1][12] = "Tunnel.";
        this[1][13] = "Gorge.";
        this[1][14] = "AshCave.";
        this[1][15] = "AshCave.";
        this[1][16] = "AshCave.";
        this[1][17] = "AshCave.";
        this[1][18] = "AshCave.";
        this[1][19] = "AshCave.";
        this[1][20] = "AshCave.";
        this[1][21] = "AshCave.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
