<!--
//Created by Album Builder Program Thu Jan 02 07:23:00 2025
var info_url   = "";
var title      = "Birding in Florida";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2412flbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Birding in Florida";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<35;i++){
        this[0][i] = "2412flbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "20241225_001_Vaux'sSwift_FLOcalaWetlandRechargePark.JPG";
        this[1][1] = "20241225_002_Vaux'sSwift_FLOcalaWetlandRechargePark.JPG";
        this[1][2] = "20241226_005_FloridaScrub-Jay_FLShamrockPark.JPG";
        this[1][3] = "20241226_006_LoggerheadShrike_FLShamrockPark.JPG";
        this[1][4] = "20241227_010_ForidaScrub-Jay_FLShamrockPark.JPG";
        this[1][5] = "20241227_013_CommonGroundDove(M)_FLShamrockPark.JPG";
        this[1][6] = "20241227_014_CommonGroundDove(F)_FLShamrockPark.JPG";
        this[1][7] = "20241227_015_Groove-billedAni_FLShamrockPark.JPG";
        this[1][8] = "20241227_017_Groove-billedAni_FLShamrockPark.JPG";
        this[1][9] = "20241228_020_SpottedSandpiper_FLBlackPointPark.JPG";
        this[1][10] = "20241228_022_CommonMyna_FLHomesteadMcDoanld's.JPG";
        this[1][11] = "20241228_025_Blue-and-yellowMacaw_FLLuckyHammock.JPG";
        this[1][12] = "20241228_026_Great-crestedFlycatcher_FLLuckyHammock.JPG";
        this[1][13] = "20241228_030_Cooper'sHawk_FLLuckyHammock.JPG";
        this[1][14] = "20241228_031_AmericanKestrel_FLFrogPondWMA.JPG";
        this[1][15] = "20241228_036_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][16] = "20241228_039_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][17] = "20241228_040_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][18] = "20241228_041_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][19] = "20241228_043_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][20] = "20241228_044_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][21] = "20241228_045_Boat-tailedGrackle_FLFrogPondWMA.JPG";
        this[1][22] = "20241228_047-Red-shoulderedHawk_FLFrogPondWMA.JPG";
        this[1][23] = "20241228_048-Red-shoulderedHawk_FLFrogPondWMA.JPG";
        this[1][24] = "20241228_049_GreatEgret_FLFrogPondWMA.JPG";
        this[1][25] = "20241228_050_MitredParakeet_FLKendallBaptistHospital.JPG";
        this[1][26] = "20241228_051_MitredParakeet_FLKendallBaptistHospital.JPG";
        this[1][27] = "20241228_053_AmericanRedstart_FLBrewerPark.JPG";
        this[1][28] = "20241228_054_WhiteIbis_FLBrewerPark.JPG";
        this[1][29] = "20241228_055_EurasianCollared-Dove_FLBrewerPark.JPG";
        this[1][30] = "20241228_056_AmericanKestrel_FLBiltmoreHotel.JPG";
        this[1][31] = "20241228_058_Parakeets_FLBiltmoreHotel.JPG";
        this[1][32] = "20241228_060_Red-maskedParakeet_FLBiltmoreHotel.JPG";
        this[1][33] = "20241228_061_Red-maskedParakeet_FLBiltmoreHotel.JPG";
        this[1][34] = "20241228_062_NorthernMockingbird_FLBiltmoreHotel.JPG";
    }else{
        this[1][0] = "20241225_001_Vaux'sSwift_FLOcalaWetlandRechargePark.JPG";
        this[1][1] = "20241225_002_Vaux'sSwift_FLOcalaWetlandRechargePark.JPG";
        this[1][2] = "20241226_005_FloridaScrub-Jay_FLShamrockPark.JPG";
        this[1][3] = "20241226_006_LoggerheadShrike_FLShamrockPark.JPG";
        this[1][4] = "20241227_010_ForidaScrub-Jay_FLShamrockPark.JPG";
        this[1][5] = "20241227_013_CommonGroundDove(M)_FLShamrockPark.JPG";
        this[1][6] = "20241227_014_CommonGroundDove(F)_FLShamrockPark.JPG";
        this[1][7] = "20241227_015_Groove-billedAni_FLShamrockPark.JPG";
        this[1][8] = "20241227_017_Groove-billedAni_FLShamrockPark.JPG";
        this[1][9] = "20241228_020_SpottedSandpiper_FLBlackPointPark.JPG";
        this[1][10] = "20241228_022_CommonMyna_FLHomesteadMcDoanld's.JPG";
        this[1][11] = "20241228_025_Blue-and-yellowMacaw_FLLuckyHammock.JPG";
        this[1][12] = "20241228_026_Great-crestedFlycatcher_FLLuckyHammock.JPG";
        this[1][13] = "20241228_030_Cooper'sHawk_FLLuckyHammock.JPG";
        this[1][14] = "20241228_031_AmericanKestrel_FLFrogPondWMA.JPG";
        this[1][15] = "20241228_036_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][16] = "20241228_039_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][17] = "20241228_040_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][18] = "20241228_041_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][19] = "20241228_043_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][20] = "20241228_044_Swainson'sHawk_FLFrogPondWMA.JPG";
        this[1][21] = "20241228_045_Boat-tailedGrackle_FLFrogPondWMA.JPG";
        this[1][22] = "20241228_047-Red-shoulderedHawk_FLFrogPondWMA.JPG";
        this[1][23] = "20241228_048-Red-shoulderedHawk_FLFrogPondWMA.JPG";
        this[1][24] = "20241228_049_GreatEgret_FLFrogPondWMA.JPG";
        this[1][25] = "20241228_050_MitredParakeet_FLKendallBaptistHospital.JPG";
        this[1][26] = "20241228_051_MitredParakeet_FLKendallBaptistHospital.JPG";
        this[1][27] = "20241228_053_AmericanRedstart_FLBrewerPark.JPG";
        this[1][28] = "20241228_054_WhiteIbis_FLBrewerPark.JPG";
        this[1][29] = "20241228_055_EurasianCollared-Dove_FLBrewerPark.JPG";
        this[1][30] = "20241228_056_AmericanKestrel_FLBiltmoreHotel.JPG";
        this[1][31] = "20241228_058_Parakeets_FLBiltmoreHotel.JPG";
        this[1][32] = "20241228_060_Red-maskedParakeet_FLBiltmoreHotel.JPG";
        this[1][33] = "20241228_061_Red-maskedParakeet_FLBiltmoreHotel.JPG";
        this[1][34] = "20241228_062_NorthernMockingbird_FLBiltmoreHotel.JPG";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
