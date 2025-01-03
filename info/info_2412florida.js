<!--
//Created by Album Builder Program Thu Jan 02 19:38:59 2025
var info_url   = "";
var title      = "Winter vacation in Florida";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2412florida/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Winter vacation in Florida";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "2412florida_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "20241225_001_ChristmasPresent.JPG";
        this[1][1] = "20241226_002_WeekiWacheeBoatTour.JPG";
        this[1][2] = "20241226_004_WeekiWacheeBoatTour.JPG";
        this[1][3] = "20241226_009_WeekiWacheeMermaidShow.JPG";
        this[1][4] = "20241226_010_WeekiWacheeMermaidShow.JPG";
        this[1][5] = "20241226_013_WeekiWacheeMermaidShow.JPG";
        this[1][6] = "20241226_014_WeekiWacheeMermaidShow.JPG";
        this[1][7] = "20241226_016_WeekiWacheeMermaidShow.JPG";
        this[1][8] = "20241226_019_WeekiWacheeMermaid.JPG";
        this[1][9] = "20241226_020_TampaElectricManateeViewing.JPG";
        this[1][10] = "20241226_021_TampaElectricManateeViewing.JPG";
        this[1][11] = "20241226_022_TampaElectricManateeViewing.JPG";
        this[1][12] = "20241228_024_LooseTooth.JPG";
        this[1][13] = "20241229_025_LosingFirstTooth.JPG";
        this[1][14] = "20241229_026_KeyWestHemingwayHome.JPG";
        this[1][15] = "20241229_027_KeyWestHemingwayHome.JPG";
        this[1][16] = "20241229_028_KeyWestHemingwayHome.JPG";
        this[1][17] = "20241229_029_KeyWestHemingwayHome.JPG";
        this[1][18] = "20241229_032_KeyWestHemingwayHome.JPG";
        this[1][19] = "20241230_033_Crocheting.JPG";
        this[1][20] = "20241230_034_Crocheting.JPG";
        this[1][21] = "20241230_035_SavannahSteps.JPG";
        this[1][22] = "20241230_038_SavannahSplit.JPG";
        this[1][23] = "20241230_040_SavannahRiverStreet.JPG";
        this[1][24] = "20241230_041_SavannahRiverStreet.JPG";
        this[1][25] = "20241230_043_SavannahRiverStreet.JPG";
        this[1][26] = "20241230_044_SavannahMarket.JPG";
        this[1][27] = "20241230_046_SavannahMarket.JPG";
        this[1][28] = "20241230_048_SavannahRestaurant.JPG";
        this[1][29] = "20241230_049_SavannahRestaurant.JPG";
    }else{
        this[1][0] = "20241225_001_ChristmasPresent.JPG";
        this[1][1] = "20241226_002_WeekiWacheeBoatTour.JPG";
        this[1][2] = "20241226_004_WeekiWacheeBoatTour.JPG";
        this[1][3] = "20241226_009_WeekiWacheeMermaidShow.JPG";
        this[1][4] = "20241226_010_WeekiWacheeMermaidShow.JPG";
        this[1][5] = "20241226_013_WeekiWacheeMermaidShow.JPG";
        this[1][6] = "20241226_014_WeekiWacheeMermaidShow.JPG";
        this[1][7] = "20241226_016_WeekiWacheeMermaidShow.JPG";
        this[1][8] = "20241226_019_WeekiWacheeMermaid.JPG";
        this[1][9] = "20241226_020_TampaElectricManateeViewing.JPG";
        this[1][10] = "20241226_021_TampaElectricManateeViewing.JPG";
        this[1][11] = "20241226_022_TampaElectricManateeViewing.JPG";
        this[1][12] = "20241228_024_LooseTooth.JPG";
        this[1][13] = "20241229_025_LosingFirstTooth.JPG";
        this[1][14] = "20241229_026_KeyWestHemingwayHome.JPG";
        this[1][15] = "20241229_027_KeyWestHemingwayHome.JPG";
        this[1][16] = "20241229_028_KeyWestHemingwayHome.JPG";
        this[1][17] = "20241229_029_KeyWestHemingwayHome.JPG";
        this[1][18] = "20241229_032_KeyWestHemingwayHome.JPG";
        this[1][19] = "20241230_033_Crocheting.JPG";
        this[1][20] = "20241230_034_Crocheting.JPG";
        this[1][21] = "20241230_035_SavannahSteps.JPG";
        this[1][22] = "20241230_038_SavannahSplit.JPG";
        this[1][23] = "20241230_040_SavannahRiverStreet.JPG";
        this[1][24] = "20241230_041_SavannahRiverStreet.JPG";
        this[1][25] = "20241230_043_SavannahRiverStreet.JPG";
        this[1][26] = "20241230_044_SavannahMarket.JPG";
        this[1][27] = "20241230_046_SavannahMarket.JPG";
        this[1][28] = "20241230_048_SavannahRestaurant.JPG";
        this[1][29] = "20241230_049_SavannahRestaurant.JPG";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
