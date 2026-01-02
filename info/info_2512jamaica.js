<!--
//Created by Album Builder Program Thu Jan 01 19:30:58 2026
var info_url   = "";
var title      = "Vacationing in Jamaica";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2512jamaica/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Vacationing in Jamaica";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<38;i++){
        this[0][i] = "2512jamaica_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "20251225_001_ChristmasGift.JPG";
        this[1][1] = "20251225_004_NathanFeedingHummingbird_Rocklands.JPG";
        this[1][2] = "20251225_005_MaoFeedingHummingbird_Rocklands.JPG";
        this[1][3] = "20251225_007_MaoFeedingHummingbird_Rocklands.JPG";
        this[1][4] = "20251225_009_NathanFeedingHummingbird_Rocklands.JPG";
        this[1][5] = "20251225_010_NathanFeedingHummingbird_Rocklands.JPG";
        this[1][6] = "20251225_011_MaoFeedingHummingbird_Rocklands.JPG";
        this[1][7] = "20251225_014_FritzFeedingHummingbird_Rocklands.JPG";
        this[1][8] = "20251225_015_MontegoBay.JPG";
        this[1][9] = "20251225_016_MontegoBay.JPG";
        this[1][10] = "20251225_017_MontegoBayHarmonyBeachPark.JPG";
        this[1][11] = "20251226_018_Dunn'sRiverFalls.JPG";
        this[1][12] = "20251226_019_Dunn'sRiverFalls.JPG";
        this[1][13] = "20251226_020_MaoDunn'sRiverFalls.JPG";
        this[1][14] = "20251226_021_Dunn'sRiverFalls.JPG";
        this[1][15] = "20251226_022_Dunn'sRiverFalls.JPG";
        this[1][16] = "20251226_023_Dunn'sRiverFalls.JPG";
        this[1][17] = "20251226_024_Dunn'sRiverFallsZipline.JPG";
        this[1][18] = "20251226_025_Dunn'sRiverFallsZipline.JPG";
        this[1][19] = "20251226_026_Dunn'sRiverFallsZipline.JPG";
        this[1][20] = "20251226_027_Dunn'sRiverFallsZipline.JPG";
        this[1][21] = "20251226_028_Dunn'sRiverFallsZipline.JPG";
        this[1][22] = "20251226_029_Dunn'sRiverFallsZipline.JPG";
        this[1][23] = "20251226_030_Dunn'sRiverFallsZipline.JPG";
        this[1][24] = "20251226_032_Dunn'sRiverFallsZipline.JPG";
        this[1][25] = "20251226_033_Dunn'sRiverFallsZipline.JPG";
        this[1][26] = "20251226_034_LFJunglRetreat.JPG";
        this[1][27] = "20251226_035_BlueMountains.JPG";
        this[1][28] = "20251227_036_RioGrandeRafting.JPG";
        this[1][29] = "20251227_037_RioGrandeRafting.jpeg";
        this[1][30] = "20251227_038_RioGrandeRafting.jpeg";
        this[1][31] = "20251227_039_SteveRioGrandeRafting.jpeg";
        this[1][32] = "20251227_040_RioGrandeRafting.jpeg";
        this[1][33] = "20251228_041_LabubuBag.JPG";
        this[1][34] = "20251229_042_DevonHouseIceCream.JPG";
        this[1][35] = "20251229_043_DevonHouseIceCream.JPG";
        this[1][36] = "20251229_044_DevonHouse.JPG";
        this[1][37] = "20251230_045_HolywellPark.JPG";
    }else{
        this[1][0] = "20251225_001_ChristmasGift.JPG";
        this[1][1] = "20251225_004_NathanFeedingHummingbird_Rocklands.JPG";
        this[1][2] = "20251225_005_MaoFeedingHummingbird_Rocklands.JPG";
        this[1][3] = "20251225_007_MaoFeedingHummingbird_Rocklands.JPG";
        this[1][4] = "20251225_009_NathanFeedingHummingbird_Rocklands.JPG";
        this[1][5] = "20251225_010_NathanFeedingHummingbird_Rocklands.JPG";
        this[1][6] = "20251225_011_MaoFeedingHummingbird_Rocklands.JPG";
        this[1][7] = "20251225_014_FritzFeedingHummingbird_Rocklands.JPG";
        this[1][8] = "20251225_015_MontegoBay.JPG";
        this[1][9] = "20251225_016_MontegoBay.JPG";
        this[1][10] = "20251225_017_MontegoBayHarmonyBeachPark.JPG";
        this[1][11] = "20251226_018_Dunn'sRiverFalls.JPG";
        this[1][12] = "20251226_019_Dunn'sRiverFalls.JPG";
        this[1][13] = "20251226_020_MaoDunn'sRiverFalls.JPG";
        this[1][14] = "20251226_021_Dunn'sRiverFalls.JPG";
        this[1][15] = "20251226_022_Dunn'sRiverFalls.JPG";
        this[1][16] = "20251226_023_Dunn'sRiverFalls.JPG";
        this[1][17] = "20251226_024_Dunn'sRiverFallsZipline.JPG";
        this[1][18] = "20251226_025_Dunn'sRiverFallsZipline.JPG";
        this[1][19] = "20251226_026_Dunn'sRiverFallsZipline.JPG";
        this[1][20] = "20251226_027_Dunn'sRiverFallsZipline.JPG";
        this[1][21] = "20251226_028_Dunn'sRiverFallsZipline.JPG";
        this[1][22] = "20251226_029_Dunn'sRiverFallsZipline.JPG";
        this[1][23] = "20251226_030_Dunn'sRiverFallsZipline.JPG";
        this[1][24] = "20251226_032_Dunn'sRiverFallsZipline.JPG";
        this[1][25] = "20251226_033_Dunn'sRiverFallsZipline.JPG";
        this[1][26] = "20251226_034_LFJunglRetreat.JPG";
        this[1][27] = "20251226_035_BlueMountains.JPG";
        this[1][28] = "20251227_036_RioGrandeRafting.JPG";
        this[1][29] = "20251227_037_RioGrandeRafting.jpeg";
        this[1][30] = "20251227_038_RioGrandeRafting.jpeg";
        this[1][31] = "20251227_039_SteveRioGrandeRafting.jpeg";
        this[1][32] = "20251227_040_RioGrandeRafting.jpeg";
        this[1][33] = "20251228_041_LabubuBag.JPG";
        this[1][34] = "20251229_042_DevonHouseIceCream.JPG";
        this[1][35] = "20251229_043_DevonHouseIceCream.JPG";
        this[1][36] = "20251229_044_DevonHouse.JPG";
        this[1][37] = "20251230_045_HolywellPark.JPG";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
