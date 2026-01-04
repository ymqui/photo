<!--
//Created by Album Builder Program Sun Jan 04 15:25:58 2026
var info_url   = "https://fatbirder.com/world-birding/central-america/jamaica/";
var title      = "Birding in Jamaica";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2512jmbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "牙买加观鸟";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<59;i++){
        this[0][i] = "2512jmbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "20251225_001_AmericanKestrel(M)_OldHospitalPark.JPG";
        this[1][1] = "20251225_007_JamaicanWoodpecker(M)_RocklandsBirdSanctuary.JPG";
        this[1][2] = "20251225_008_JamaicanWoodpecker(M)_RocklandsBirdSanctuary.JPG";
        this[1][3] = "20251225_009_Orangequit(F)_RocklandsBirdSanctuary.JPG";
        this[1][4] = "20251225_010_Orangequit(M)_RocklandsBirdSanctuary.JPG";
        this[1][5] = "20251225_011_Orangequit_RocklandsBirdSanctuary.JPG";
        this[1][6] = "20251225_012_Red-billedStreamertail_RocklandsBirdSanctuary.JPG";
        this[1][7] = "20251225_013_Red-billedStreamertail_RocklandsBirdSanctuary.JPG";
        this[1][8] = "20251225_014_Red-billedStreamertail_RocklandsBirdSanctuary.JPG";
        this[1][9] = "20251225_015_Red-billedStreamertail_RocklandsBirdSanctuary.JPG";
        this[1][10] = "20251225_016_JamaicanOriole_RocklandsBirdSanctuary.JPG";
        this[1][11] = "20251225_020_JamaicanMango_RocklandsBirdSanctuary.JPG";
        this[1][12] = "20251225_021_JamaicanMango_RocklandsBirdSanctuary.JPG";
        this[1][13] = "20251225_023_JamaicanMango_RocklandsBirdSanctuary.JPG";
        this[1][14] = "20251225_024_Yellow-facedGrassquit(M)_RocklandsBirdSanctuary.JPG";
        this[1][15] = "20251225_026_CommonGroundDove_RocklandsBirdSanctuary.JPG";
        this[1][16] = "20251225_028_CaribbeanDove_RocklandsBirdSanctuary.JPG";
        this[1][17] = "20251225_029_CaribbeanDove_RocklandsBirdSanctuary.JPG";
        this[1][18] = "20251226_033_AntilleanPalmSwift_OldHospitalPark.JPG";
        this[1][19] = "20251226_034_AntilleanPalmSwift_OldHospitalPark.JPG";
        this[1][20] = "20251226_037_Yellow-throatedWarbler_OldHospitalPark.JPG";
        this[1][21] = "20251226_040_JamaicanCrow_Dunn'sRiverFalls.JPG";
        this[1][22] = "20251226_041_LittleBlueHeron_Dunn'sRiverFalls.JPG";
        this[1][23] = "20251226_042_JamaicanSpindalis(F)_LFJungleRetreatHotel.JPG";
        this[1][24] = "20251226_044_White-chinnedThrush_LFJungleRetreatHotel.JPG";
        this[1][25] = "20251226_046_Black-billedStreamertail_LFJungleRetreatHotel.JPG";
        this[1][26] = "20251226_048_White-crownedPigeon_LFJungleRetreatHotel.JPG";
        this[1][27] = "20251226_049_VervainHummingbird_LFJungleRetreatHotel.JPG";
        this[1][28] = "20251227_052_SadFlycatcher_LFJungleRetreatHotel.JPG";
        this[1][29] = "20251227_053_LoggerheadKingbird_LFJungleRetreatHotel.JPG";
        this[1][30] = "20251227_054_LoggerheadKingbird_LFJungleRetreatHotel.JPG";
        this[1][31] = "20251227_055_GreaterAntilleanGrackle_LFJungleRetreatHotel.JPG";
        this[1][32] = "20251227_057_Bananaquit_LFJungleRetreatHotel.JPG";
        this[1][33] = "20251227_058_Black-throatedBlueWarbler(F)_LFJungleRetreatHotel.JPG";
        this[1][34] = "20251227_059_Black-billedStreamertail(F)_LFJungleRetreatHotel.JPG";
        this[1][35] = "20251227_060_JamaicanLizardCuckoo_LFJungleRetreatHotel.JPG";
        this[1][36] = "20251227_062_Rufous-tailedFlycatcher_SanSan.JPG";
        this[1][37] = "20251227_064_JamaicanElaenia_SanSan.JPG";
        this[1][38] = "20251227_065_JamaicanElaenia_SanSan.JPG";
        this[1][39] = "20251227_066_ArrowheadWarbler(I)_SanSan.JPG";
        this[1][40] = "20251227_068_Chestnut-belliedCuckoo_SanSan.JPG";
        this[1][41] = "20251227_069_JamaicanSpindalis(M)_SanSan.JPG";
        this[1][42] = "20251227_070_Ring-tailedPigeon_LFJungleRetreatHotel.JPG";
        this[1][43] = "20251227_071_Black-billedStreamertail_LFJungleRetreatHotel.JPG";
        this[1][44] = "20251227_072_Black-billedStreamertail_LFJungleRetreatHotel.JPG";
        this[1][45] = "20251227_073_Black-billedStreamertail_LFJungleRetreatHotel.JPG";
        this[1][46] = "20251227_074_JamaicanWoodpecker(F)_LFJungleRetreatHotel.JPG";
        this[1][47] = "20251227_076_JamaicanTody_LFJungleRetreatHotel.JPG";
        this[1][48] = "20251227_077_JamaicanTody_LFJungleRetreatHotel.JPG";
        this[1][49] = "20251227_081_Bananaquit(N)_LFJungleRetreatHotel.JPG";
        this[1][50] = "20251229_092_Yellow-napedAmazon_HopeBotanicalGarden.JPG";
        this[1][51] = "20251230_094_AmericanKestrel(F)_HolywellPark.JPG";
        this[1][52] = "20251230_095_AmericanKestrel(M)_HolywellPark.JPG";
        this[1][53] = "20251230_097_Black-billedAmazon_HopeBotanicalGarden.JPG";
        this[1][54] = "20251230_099_Yellow-billedAmazon_HopeBotanicalGarden.JPG";
        this[1][55] = "20251230_100_Smooth-billedAni_HopeBotanicalGarden.JPG";
        this[1][56] = "20251230_104_Olive-throatedParakeet_HopeBotanicalGarden.JPG";
        this[1][57] = "20251230_105_Olive-throatedParakeet_HopeBotanicalGarden.JPG";
        this[1][58] = "20251230_106_CapeMayWarbler_HopeBotanicalGarden.JPG";
    }else{
        this[1][0] = "20251225_001_AmericanKestrel(M)_OldHospitalPark.JPG";
        this[1][1] = "20251225_007_JamaicanWoodpecker(M)_RocklandsBirdSanctuary.JPG";
        this[1][2] = "20251225_008_JamaicanWoodpecker(M)_RocklandsBirdSanctuary.JPG";
        this[1][3] = "20251225_009_Orangequit(F)_RocklandsBirdSanctuary.JPG";
        this[1][4] = "20251225_010_Orangequit(M)_RocklandsBirdSanctuary.JPG";
        this[1][5] = "20251225_011_Orangequit_RocklandsBirdSanctuary.JPG";
        this[1][6] = "20251225_012_Red-billedStreamertail_RocklandsBirdSanctuary.JPG";
        this[1][7] = "20251225_013_Red-billedStreamertail_RocklandsBirdSanctuary.JPG";
        this[1][8] = "20251225_014_Red-billedStreamertail_RocklandsBirdSanctuary.JPG";
        this[1][9] = "20251225_015_Red-billedStreamertail_RocklandsBirdSanctuary.JPG";
        this[1][10] = "20251225_016_JamaicanOriole_RocklandsBirdSanctuary.JPG";
        this[1][11] = "20251225_020_JamaicanMango_RocklandsBirdSanctuary.JPG";
        this[1][12] = "20251225_021_JamaicanMango_RocklandsBirdSanctuary.JPG";
        this[1][13] = "20251225_023_JamaicanMango_RocklandsBirdSanctuary.JPG";
        this[1][14] = "20251225_024_Yellow-facedGrassquit(M)_RocklandsBirdSanctuary.JPG";
        this[1][15] = "20251225_026_CommonGroundDove_RocklandsBirdSanctuary.JPG";
        this[1][16] = "20251225_028_CaribbeanDove_RocklandsBirdSanctuary.JPG";
        this[1][17] = "20251225_029_CaribbeanDove_RocklandsBirdSanctuary.JPG";
        this[1][18] = "20251226_033_AntilleanPalmSwift_OldHospitalPark.JPG";
        this[1][19] = "20251226_034_AntilleanPalmSwift_OldHospitalPark.JPG";
        this[1][20] = "20251226_037_Yellow-throatedWarbler_OldHospitalPark.JPG";
        this[1][21] = "20251226_040_JamaicanCrow_Dunn'sRiverFalls.JPG";
        this[1][22] = "20251226_041_LittleBlueHeron_Dunn'sRiverFalls.JPG";
        this[1][23] = "20251226_042_JamaicanSpindalis(F)_LFJungleRetreatHotel.JPG";
        this[1][24] = "20251226_044_White-chinnedThrush_LFJungleRetreatHotel.JPG";
        this[1][25] = "20251226_046_Black-billedStreamertail_LFJungleRetreatHotel.JPG";
        this[1][26] = "20251226_048_White-crownedPigeon_LFJungleRetreatHotel.JPG";
        this[1][27] = "20251226_049_VervainHummingbird_LFJungleRetreatHotel.JPG";
        this[1][28] = "20251227_052_SadFlycatcher_LFJungleRetreatHotel.JPG";
        this[1][29] = "20251227_053_LoggerheadKingbird_LFJungleRetreatHotel.JPG";
        this[1][30] = "20251227_054_LoggerheadKingbird_LFJungleRetreatHotel.JPG";
        this[1][31] = "20251227_055_GreaterAntilleanGrackle_LFJungleRetreatHotel.JPG";
        this[1][32] = "20251227_057_Bananaquit_LFJungleRetreatHotel.JPG";
        this[1][33] = "20251227_058_Black-throatedBlueWarbler(F)_LFJungleRetreatHotel.JPG";
        this[1][34] = "20251227_059_Black-billedStreamertail(F)_LFJungleRetreatHotel.JPG";
        this[1][35] = "20251227_060_JamaicanLizardCuckoo_LFJungleRetreatHotel.JPG";
        this[1][36] = "20251227_062_Rufous-tailedFlycatcher_SanSan.JPG";
        this[1][37] = "20251227_064_JamaicanElaenia_SanSan.JPG";
        this[1][38] = "20251227_065_JamaicanElaenia_SanSan.JPG";
        this[1][39] = "20251227_066_ArrowheadWarbler(I)_SanSan.JPG";
        this[1][40] = "20251227_068_Chestnut-belliedCuckoo_SanSan.JPG";
        this[1][41] = "20251227_069_JamaicanSpindalis(M)_SanSan.JPG";
        this[1][42] = "20251227_070_Ring-tailedPigeon_LFJungleRetreatHotel.JPG";
        this[1][43] = "20251227_071_Black-billedStreamertail_LFJungleRetreatHotel.JPG";
        this[1][44] = "20251227_072_Black-billedStreamertail_LFJungleRetreatHotel.JPG";
        this[1][45] = "20251227_073_Black-billedStreamertail_LFJungleRetreatHotel.JPG";
        this[1][46] = "20251227_074_JamaicanWoodpecker(F)_LFJungleRetreatHotel.JPG";
        this[1][47] = "20251227_076_JamaicanTody_LFJungleRetreatHotel.JPG";
        this[1][48] = "20251227_077_JamaicanTody_LFJungleRetreatHotel.JPG";
        this[1][49] = "20251227_081_Bananaquit(N)_LFJungleRetreatHotel.JPG";
        this[1][50] = "20251229_092_Yellow-napedAmazon_HopeBotanicalGarden.JPG";
        this[1][51] = "20251230_094_AmericanKestrel(F)_HolywellPark.JPG";
        this[1][52] = "20251230_095_AmericanKestrel(M)_HolywellPark.JPG";
        this[1][53] = "20251230_097_Black-billedAmazon_HopeBotanicalGarden.JPG";
        this[1][54] = "20251230_099_Yellow-billedAmazon_HopeBotanicalGarden.JPG";
        this[1][55] = "20251230_100_Smooth-billedAni_HopeBotanicalGarden.JPG";
        this[1][56] = "20251230_104_Olive-throatedParakeet_HopeBotanicalGarden.JPG";
        this[1][57] = "20251230_105_Olive-throatedParakeet_HopeBotanicalGarden.JPG";
        this[1][58] = "20251230_106_CapeMayWarbler_HopeBotanicalGarden.JPG";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
