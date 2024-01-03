<!--
//Created by Album Builder Program Wed Jan 03 06:33:26 2024
var info_url   = "";
var title      = "Birding in China & Japan";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.1 Mega Pixels.";
var dir        = maindir+"pics/2312cnbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Birding in China & Japan";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<145;i++){
        this[0][i] = "2312cnbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "20231214_004_ChineseGrosbeak(F)_BeijingTaorantingPark.JPG";
        this[1][1] = "20231214_006_Large-billedCrow_BeijingTaorantingPark.JPG";
        this[1][2] = "20231214_008_MandarinDuck(F)_BeijingTaorantingPark.JPG";
        this[1][3] = "20231214_009_MandarinDuck(M)_BeijingTaorantingPark.JPG";
        this[1][4] = "20231215_011_Light-ventedBulbul_BeijingOlympicForestPark.JPG";
        this[1][5] = "20231215_012_SwanGoose_BeijingOlympicForestPark.JPG";
        this[1][6] = "20231215_013_RockPigeon_BeijingOlympicForestPark.JPG";
        this[1][7] = "20231215_014_MarshTit_BeijingOlympicForestPark.JPG";
        this[1][8] = "20231215_015_Azure-wingedMagpie_BeijingOlympicForestPark.JPG";
        this[1][9] = "20231215_017_Long-tailedTit_BeijingOlympicForestPark.JPG";
        this[1][10] = "20231215_018_Silver-throatedBushtit_BeijingOlympicForestPark.JPG";
        this[1][11] = "20231215_020_WaterPipit_BeijingOlympicForestPark.JPG";
        this[1][12] = "20231215_022_EurasianTreeSparrow_BeijingOlympicForestPark.JPG";
        this[1][13] = "20231215_024_ReedParrotbill_BeijingOlympicForestPark.JPG";
        this[1][14] = "20231215_025_Vinous-throatedParrotbill_BeijingOlympicForestPark.JPG";
        this[1][15] = "20231215_027_Grey-headedWoodpecker(M)_BeijingOlympicForestPark.JPG";
        this[1][16] = "20231215_028_Grey-headedWoodpecker(F)_BeijingOlympicForestPark.JPG";
        this[1][17] = "20231215_030_CommonMoorhen_BeijingOlympicForestPark.JPG";
        this[1][18] = "20231215_031_CommonMoorhen(I)_BeijingOlympicForestPark.JPG";
        this[1][19] = "20231216_033_EurasianSiskin_HangzhouBotanicalGarden.JPG";
        this[1][20] = "20231216_035_LittleGrebe_HangzhouBotanicalGarden.JPG";
        this[1][21] = "20231216_039_EasternSpot-billedDuck_HangzhouBotanicalGarden.JPG";
        this[1][22] = "20231216_042_Red-billedBlueMagpie_HangzhouBotanicalGarden.JPG";
        this[1][23] = "20231216_044_ChineseBlackbird_HangzhouBotanicalGarden.JPG";
        this[1][24] = "20231216_048_Brownish-flankedBushWarbler_HangzhouBotanicalGarden.JPG";
        this[1][25] = "20231216_052_ChestnutBulbul_HangzhouBotanicalGarden.JPG";
        this[1][26] = "20231216_053_ChestnutBulbul_HangzhouBotanicalGarden.JPG";
        this[1][27] = "20231218_056_Grey-chinnedMinivet(M)_LongyanChunmeiLodge.JPG";
        this[1][28] = "20231218_061_DaurianRedstart(F)_LongyanShuimeirenFarmstead.JPG";
        this[1][29] = "20231218_066_BlackEagle_LongyanShuimeirenFarmstead.JPG";
        this[1][30] = "20231218_067_BlackEagle_LongyanShuimeirenFarmstead.JPG";
        this[1][31] = "20231218_071_ChineseGrosbeak_LongyanShuimeirenFarmstead.JPG";
        this[1][32] = "20231218_075_Long-tailedShrike_LongyanNeibanVillage.JPG";
        this[1][33] = "20231218_076_Stejneger'sStonechat(F)_LongyanNeibanVillage.JPG";
        this[1][34] = "20231219_078_HouseSwift_LongyanDenggaoshanPark.JPG";
        this[1][35] = "20231219_082_Fork-tailedSunbird(F)_LongyanDenggaoshanPark.JPG";
        this[1][36] = "20231219_087_Red-rumpedSwallow_LongyanDenggaoshanPark.JPG";
        this[1][37] = "20231219_104_Fire-breastedFlowerpecker(M)_LongyanLianhuashanPark.JPG";
        this[1][38] = "20231219_106_BlackBulbul_LongyanLianhuashanPark.JPG";
        this[1][39] = "20231220_108_Fork-tailedSunbird(M)_LongyanDenggaoshanPark.JPG";
        this[1][40] = "20231220_110_AshyDrongo_LongyanDenggaoshanPark.JPG";
        this[1][41] = "20231220_111_MountainBulbul_LongyanLianhuashanPark.JPG";
        this[1][42] = "20231220_112_Yellow-browedWarbler_LongyanLianhuashanPark.JPG";
        this[1][43] = "20231220_114_Fire-breastedFlowerpecker(F)_LongyanLianhuashanPark.JPG";
        this[1][44] = "20231220_116_MountainHawk-Eagle_LongyanLianhuashanPark.JPG";
        this[1][45] = "20231221_122_HouseSwift_YongdingTulou.JPG";
        this[1][46] = "20231221_125_Red-whiskeredBulbul_YongdingTulou.JPG";
        this[1][47] = "20231221_130_PlumbeousWaterRedstart(M)_YongdingTulou.JPG";
        this[1][48] = "20231221_131_LittleEgret_YongdingTulou.JPG";
        this[1][49] = "20231221_134_CommonTailorbird_YongdingTulou.JPG";
        this[1][50] = "20231221_135_Fork-tailedSunbird(M)_YongdingTulou.JPG";
        this[1][51] = "20231221_137_ScarletMinivet(M)_YongdingTulou.JPG";
        this[1][52] = "20231221_139_CommonKingfisher_YongdingTulou.JPG";
        this[1][53] = "20231221_142_ScarletMinivet(F)_YongdingTulou.JPG";
        this[1][54] = "20231222_144_BlackBulbul_JiangshanXujiangPark.JPG";
        this[1][55] = "20231222_145_Pallas'sLeafWarbler_JiangshanXujiangPark.JPG";
        this[1][56] = "20231222_148_OrientalMagpie-Robin_JiangshanXujiangPark.JPG";
        this[1][57] = "20231223_153_WhiteWagtail_JiangshanXujiangPark.JPG";
        this[1][58] = "20231223_154_Red-flankedBluetail(M)_JiangshanXujiangPark.JPG";
        this[1][59] = "20231223_157_CommonKingfisher(M)_JiangshanXujiangPark.JPG";
        this[1][60] = "20231223_158_CommonKingfisher(F)_JiangshanXujiangPark.JPG";
        this[1][61] = "20231223_159_Black-crownedNightHeron_JiangshanXujiangPark.JPG";
        this[1][62] = "20231223_160_JapaneseTit_JiangshanXujiangPark.JPG";
        this[1][63] = "20231223_164_Grey-backedThrush(F)_JiangshanWanyaoReservoir.JPG";
        this[1][64] = "20231223_166_WhiteWagtail_JiangshanWanyaoReservoir.JPG";
        this[1][65] = "20231223_169_CommonSandpiper_Jiangshangang.JPG";
        this[1][66] = "20231223_171_Black-throatedBushtit_Jiangshangang.JPG";
        this[1][67] = "20231223_172_Black-throatedBushtit_Jiangshangang.JPG";
        this[1][68] = "20231223_175_Swinhoe'sWhite-eye_Jiangshangang.JPG";
        this[1][69] = "20231223_180_DuskyThrush_Jiangshangang.JPG";
        this[1][70] = "20231223_182_Black-facedBunting_Jiangshangang.JPG";
        this[1][71] = "20231223_184_Red-billedStarling_Jiangshangang.JPG";
        this[1][72] = "20231223_186_Scaly-breastedMunia_Jiangshangang.JPG";
        this[1][73] = "20231223_187_DuskyWarbler_Jiangshangang.JPG";
        this[1][74] = "20231224_189_EasternBuzzard_JiangshanXiakouzhen.JPG";
        this[1][75] = "20231224_191_Orange_belliedLeafbird(M)_JiangshanXianxiaguan.JPG";
        this[1][76] = "20231224_192_Orange_belliedLeafbird(F)_JiangshanXianxiaguan.JPG";
        this[1][77] = "20231224_195_Rufous-facedWarbler_JiangshanXianxiaguan.JPG";
        this[1][78] = "20231224_197_Red-flankedBluetail(F)_JiangshanXianxiaguan.JPG";
        this[1][79] = "20231224_198_Olive-backedPipit_JiangshanNianbadu.JPG";
        this[1][80] = "20231224_199_CrestedMyna_JiangshanNianbadu.JPG";
        this[1][81] = "20231224_201_White-crownedForktail_JiangshanNianbadu.JPG";
        this[1][82] = "20231224_202_White-crownedForktail_JiangshanNianbadu.JPG";
        this[1][83] = "20231224_203_PlumbeousWaterRedstart(F)_JiangshanNianbadu.JPG";
        this[1][84] = "20231224_206_GreyWagtail_JiangshanNianbadu.JPG";
        this[1][85] = "20231224_209_BrownCrake_JiangshanG205Guxiqiao.JPG";
        this[1][86] = "20231225_214_Grey-cappedGreenfinch(F)_JiangshanXishanPark.JPG";
        this[1][87] = "20231225_220_Vinous-throatedParrotbill_JiangshanXishanPark.JPG";
        this[1][88] = "20231225_228_MountainBulbul_JiangshanXishanPark.JPG";
        this[1][89] = "20231225_230_Grey-chinnedMinivet(M)_JiangshanXishanPark.JPG";
        this[1][90] = "20231225_232_CollaredFinchbill_JiangshanXishanPark.JPG";
        this[1][91] = "20231225_233_Streak-breastedScimitarBabbler_JiangshanXishanPark.JPG";
        this[1][92] = "20231225_234_Streak-breastedScimitarBabbler_JiangshanXishanPark.JPG";
        this[1][93] = "20231225_236_DaurianRedstart(M)_JiangshanXishanPark.JPG";
        this[1][94] = "20231225_237_Pallas'sLeafWarbler_JiangshanXishanPark.JPG";
        this[1][95] = "20231225_238_DaurianRedstart(M)_Jiangshangang.JPG";
        this[1][96] = "20231227_244_Naumann'sThrush_BeijingBotanicalGarden.JPG";
        this[1][97] = "20231227_247_OrientalTurtleDove_BeijingBotanicalGarden.JPG";
        this[1][98] = "20231227_248_BohemainWaxwing_BeijingBotanicalGarden.JPG";
        this[1][99] = "20231227_250_Black-throatedThrush_BeijingBotanicalGarden.JPG";
        this[1][100] = "20231227_252_JapaneseWaxwing_BeijingBotanicalGarden.JPG";
        this[1][101] = "20231227_254_Red-billedBlueMagpie_BeijingBotanicalGarden.JPG";
        this[1][102] = "20231227_255_GreatSpottedWoodpecker_BeijingBotanicalGarden.JPG";
        this[1][103] = "20231227_257_Yellow-belliedTit(M)_BeijingBotanicalGarden.JPG";
        this[1][104] = "20231227_258_Yellow-belliedTit(F)_BeijingBotanicalGarden.JPG";
        this[1][105] = "20231227_264_PlainLaughingthrush_BeijingBotanicalGarden.JPG";
        this[1][106] = "20231227_267_BeijingBabbler_BeijingBotanicalGarden.JPG";
        this[1][107] = "20231227_269_Brambling(M)_BeijingBotanicalGarden.JPG";
        this[1][108] = "20231227_270_ChineseNuthatch(F)_BeijingBotanicalGarden.JPG";
        this[1][109] = "20231227_274_EurasianGoshawk(I)_BeijingBotanicalGarden.JPG";
        this[1][110] = "20231227_275_EurasianGoshawk(I)_BeijingBotanicalGarden.JPG";
        this[1][111] = "20231227_278_SpottedDove_BeijingBotanicalGarden.JPG";
        this[1][112] = "20231227_280_Red-throatedThrush_BeijingBotanicalGarden.JPG";
        this[1][113] = "20231227_281_EurasianSiskin(F)_BeijingBotanicalGarden.JPG";
        this[1][114] = "20231227_282_ChineseNuthatch(M)_BeijingBotanicalGarden.JPG";
        this[1][115] = "20231227_284_RedCrossbill(F)_BeijingBotanicalGarden.JPG";
        this[1][116] = "20231227_285_RedCrossbill(M)_BeijingBotanicalGarden.JPG";
        this[1][117] = "20231228_287_White-cheekedStarling_BeijingYuanmingyuan.JPG";
        this[1][118] = "20231228_294_OrientalMagpie_BeijingYuanmingyuan.JPG";
        this[1][119] = "20231228_295_Hawfinch_BeijingYuanmingyuan.JPG";
        this[1][120] = "20231228_296_Hawfinch_BeijingYuanmingyuan.JPG";
        this[1][121] = "20231228_299_Brambling(F)_BeijingYuanmingyuan.JPG";
        this[1][122] = "20231228_300_WillowTit_BeijingYuanmingyuan.JPG";
        this[1][123] = "20231228_302_EurasianCoot_BeijingYuanmingyuan.JPG";
        this[1][124] = "20231228_303_BlackSwan_BeijingYuanmingyuan.JPG";
        this[1][125] = "20231228_305_MandarinDuck(M)_BeijingYuanmingyuan.JPG";
        this[1][126] = "20231229_308_Brown-earedBulbul_TokyoHanedaAirport.JPG";
        this[1][127] = "20231229_309_ReedBunting_TokyoHanedaAirport.JPG";
        this[1][128] = "20231229_310_ReedBunting_TokyoHanedaAirport.JPG";
        this[1][129] = "20231229_311_WhiteWagtail_TokyoHanedaAirport.JPG";
        this[1][130] = "20231229_314_EurasianWigeon_TokyoHanedaAirport.JPG";
        this[1][131] = "20231229_315_Gadwall_TokyoHanedaAirport.JPG";
        this[1][132] = "20231229_316_White-cheekedStarling_TokyoHanedaAirport.JPG";
        this[1][133] = "20231229_317_DaurianRedstart(F)_TokyoHanedaAirport.JPG";
        this[1][134] = "20231229_320_Bull-headedShrike_TokyoHanedaAirport.JPG";
        this[1][135] = "20231229_321_VegaGull_TokyoHanedaAirport.JPG";
        this[1][136] = "20231229_322_BlueRock-Thrush(F)_TokyoHanedaAirport.JPG";
        this[1][137] = "20231229_323_EurasianTreeSparrow_TokyoHanedaAirport.JPG";
        this[1][138] = "20231229_324_LittleEgret_TokyoHanedaAirport.JPG";
        this[1][139] = "20231229_325_Slaty-backedGull_TokyoHanedaAirport.JPG";
        this[1][140] = "20231229_326_GreatCrestedGrebe_TokyoHanedaAirport.JPG";
        this[1][141] = "20231229_327_EurasianCoot_TokyoHanedaAirport.JPG";
        this[1][142] = "20231229_329_GreyHeron_TokyoHanedaAirport.JPG";
        this[1][143] = "20231229_331_GreatCormorant_TokyoHanedaAirport.JPG";
        this[1][144] = "20231229_332_Black-headedGull_TokyoHanedaAirport.JPG";
    }else{
        this[1][0] = "20231214_004_ChineseGrosbeak(F)_BeijingTaorantingPark.JPG";
        this[1][1] = "20231214_006_Large-billedCrow_BeijingTaorantingPark.JPG";
        this[1][2] = "20231214_008_MandarinDuck(F)_BeijingTaorantingPark.JPG";
        this[1][3] = "20231214_009_MandarinDuck(M)_BeijingTaorantingPark.JPG";
        this[1][4] = "20231215_011_Light-ventedBulbul_BeijingOlympicForestPark.JPG";
        this[1][5] = "20231215_012_SwanGoose_BeijingOlympicForestPark.JPG";
        this[1][6] = "20231215_013_RockPigeon_BeijingOlympicForestPark.JPG";
        this[1][7] = "20231215_014_MarshTit_BeijingOlympicForestPark.JPG";
        this[1][8] = "20231215_015_Azure-wingedMagpie_BeijingOlympicForestPark.JPG";
        this[1][9] = "20231215_017_Long-tailedTit_BeijingOlympicForestPark.JPG";
        this[1][10] = "20231215_018_Silver-throatedBushtit_BeijingOlympicForestPark.JPG";
        this[1][11] = "20231215_020_WaterPipit_BeijingOlympicForestPark.JPG";
        this[1][12] = "20231215_022_EurasianTreeSparrow_BeijingOlympicForestPark.JPG";
        this[1][13] = "20231215_024_ReedParrotbill_BeijingOlympicForestPark.JPG";
        this[1][14] = "20231215_025_Vinous-throatedParrotbill_BeijingOlympicForestPark.JPG";
        this[1][15] = "20231215_027_Grey-headedWoodpecker(M)_BeijingOlympicForestPark.JPG";
        this[1][16] = "20231215_028_Grey-headedWoodpecker(F)_BeijingOlympicForestPark.JPG";
        this[1][17] = "20231215_030_CommonMoorhen_BeijingOlympicForestPark.JPG";
        this[1][18] = "20231215_031_CommonMoorhen(I)_BeijingOlympicForestPark.JPG";
        this[1][19] = "20231216_033_EurasianSiskin_HangzhouBotanicalGarden.JPG";
        this[1][20] = "20231216_035_LittleGrebe_HangzhouBotanicalGarden.JPG";
        this[1][21] = "20231216_039_EasternSpot-billedDuck_HangzhouBotanicalGarden.JPG";
        this[1][22] = "20231216_042_Red-billedBlueMagpie_HangzhouBotanicalGarden.JPG";
        this[1][23] = "20231216_044_ChineseBlackbird_HangzhouBotanicalGarden.JPG";
        this[1][24] = "20231216_048_Brownish-flankedBushWarbler_HangzhouBotanicalGarden.JPG";
        this[1][25] = "20231216_052_ChestnutBulbul_HangzhouBotanicalGarden.JPG";
        this[1][26] = "20231216_053_ChestnutBulbul_HangzhouBotanicalGarden.JPG";
        this[1][27] = "20231218_056_Grey-chinnedMinivet(M)_LongyanChunmeiLodge.JPG";
        this[1][28] = "20231218_061_DaurianRedstart(F)_LongyanShuimeirenFarmstead.JPG";
        this[1][29] = "20231218_066_BlackEagle_LongyanShuimeirenFarmstead.JPG";
        this[1][30] = "20231218_067_BlackEagle_LongyanShuimeirenFarmstead.JPG";
        this[1][31] = "20231218_071_ChineseGrosbeak_LongyanShuimeirenFarmstead.JPG";
        this[1][32] = "20231218_075_Long-tailedShrike_LongyanNeibanVillage.JPG";
        this[1][33] = "20231218_076_Stejneger'sStonechat(F)_LongyanNeibanVillage.JPG";
        this[1][34] = "20231219_078_HouseSwift_LongyanDenggaoshanPark.JPG";
        this[1][35] = "20231219_082_Fork-tailedSunbird(F)_LongyanDenggaoshanPark.JPG";
        this[1][36] = "20231219_087_Red-rumpedSwallow_LongyanDenggaoshanPark.JPG";
        this[1][37] = "20231219_104_Fire-breastedFlowerpecker(M)_LongyanLianhuashanPark.JPG";
        this[1][38] = "20231219_106_BlackBulbul_LongyanLianhuashanPark.JPG";
        this[1][39] = "20231220_108_Fork-tailedSunbird(M)_LongyanDenggaoshanPark.JPG";
        this[1][40] = "20231220_110_AshyDrongo_LongyanDenggaoshanPark.JPG";
        this[1][41] = "20231220_111_MountainBulbul_LongyanLianhuashanPark.JPG";
        this[1][42] = "20231220_112_Yellow-browedWarbler_LongyanLianhuashanPark.JPG";
        this[1][43] = "20231220_114_Fire-breastedFlowerpecker(F)_LongyanLianhuashanPark.JPG";
        this[1][44] = "20231220_116_MountainHawk-Eagle_LongyanLianhuashanPark.JPG";
        this[1][45] = "20231221_122_HouseSwift_YongdingTulou.JPG";
        this[1][46] = "20231221_125_Red-whiskeredBulbul_YongdingTulou.JPG";
        this[1][47] = "20231221_130_PlumbeousWaterRedstart(M)_YongdingTulou.JPG";
        this[1][48] = "20231221_131_LittleEgret_YongdingTulou.JPG";
        this[1][49] = "20231221_134_CommonTailorbird_YongdingTulou.JPG";
        this[1][50] = "20231221_135_Fork-tailedSunbird(M)_YongdingTulou.JPG";
        this[1][51] = "20231221_137_ScarletMinivet(M)_YongdingTulou.JPG";
        this[1][52] = "20231221_139_CommonKingfisher_YongdingTulou.JPG";
        this[1][53] = "20231221_142_ScarletMinivet(F)_YongdingTulou.JPG";
        this[1][54] = "20231222_144_BlackBulbul_JiangshanXujiangPark.JPG";
        this[1][55] = "20231222_145_Pallas'sLeafWarbler_JiangshanXujiangPark.JPG";
        this[1][56] = "20231222_148_OrientalMagpie-Robin_JiangshanXujiangPark.JPG";
        this[1][57] = "20231223_153_WhiteWagtail_JiangshanXujiangPark.JPG";
        this[1][58] = "20231223_154_Red-flankedBluetail(M)_JiangshanXujiangPark.JPG";
        this[1][59] = "20231223_157_CommonKingfisher(M)_JiangshanXujiangPark.JPG";
        this[1][60] = "20231223_158_CommonKingfisher(F)_JiangshanXujiangPark.JPG";
        this[1][61] = "20231223_159_Black-crownedNightHeron_JiangshanXujiangPark.JPG";
        this[1][62] = "20231223_160_JapaneseTit_JiangshanXujiangPark.JPG";
        this[1][63] = "20231223_164_Grey-backedThrush(F)_JiangshanWanyaoReservoir.JPG";
        this[1][64] = "20231223_166_WhiteWagtail_JiangshanWanyaoReservoir.JPG";
        this[1][65] = "20231223_169_CommonSandpiper_Jiangshangang.JPG";
        this[1][66] = "20231223_171_Black-throatedBushtit_Jiangshangang.JPG";
        this[1][67] = "20231223_172_Black-throatedBushtit_Jiangshangang.JPG";
        this[1][68] = "20231223_175_Swinhoe'sWhite-eye_Jiangshangang.JPG";
        this[1][69] = "20231223_180_DuskyThrush_Jiangshangang.JPG";
        this[1][70] = "20231223_182_Black-facedBunting_Jiangshangang.JPG";
        this[1][71] = "20231223_184_Red-billedStarling_Jiangshangang.JPG";
        this[1][72] = "20231223_186_Scaly-breastedMunia_Jiangshangang.JPG";
        this[1][73] = "20231223_187_DuskyWarbler_Jiangshangang.JPG";
        this[1][74] = "20231224_189_EasternBuzzard_JiangshanXiakouzhen.JPG";
        this[1][75] = "20231224_191_Orange_belliedLeafbird(M)_JiangshanXianxiaguan.JPG";
        this[1][76] = "20231224_192_Orange_belliedLeafbird(F)_JiangshanXianxiaguan.JPG";
        this[1][77] = "20231224_195_Rufous-facedWarbler_JiangshanXianxiaguan.JPG";
        this[1][78] = "20231224_197_Red-flankedBluetail(F)_JiangshanXianxiaguan.JPG";
        this[1][79] = "20231224_198_Olive-backedPipit_JiangshanNianbadu.JPG";
        this[1][80] = "20231224_199_CrestedMyna_JiangshanNianbadu.JPG";
        this[1][81] = "20231224_201_White-crownedForktail_JiangshanNianbadu.JPG";
        this[1][82] = "20231224_202_White-crownedForktail_JiangshanNianbadu.JPG";
        this[1][83] = "20231224_203_PlumbeousWaterRedstart(F)_JiangshanNianbadu.JPG";
        this[1][84] = "20231224_206_GreyWagtail_JiangshanNianbadu.JPG";
        this[1][85] = "20231224_209_BrownCrake_JiangshanG205Guxiqiao.JPG";
        this[1][86] = "20231225_214_Grey-cappedGreenfinch(F)_JiangshanXishanPark.JPG";
        this[1][87] = "20231225_220_Vinous-throatedParrotbill_JiangshanXishanPark.JPG";
        this[1][88] = "20231225_228_MountainBulbul_JiangshanXishanPark.JPG";
        this[1][89] = "20231225_230_Grey-chinnedMinivet(M)_JiangshanXishanPark.JPG";
        this[1][90] = "20231225_232_CollaredFinchbill_JiangshanXishanPark.JPG";
        this[1][91] = "20231225_233_Streak-breastedScimitarBabbler_JiangshanXishanPark.JPG";
        this[1][92] = "20231225_234_Streak-breastedScimitarBabbler_JiangshanXishanPark.JPG";
        this[1][93] = "20231225_236_DaurianRedstart(M)_JiangshanXishanPark.JPG";
        this[1][94] = "20231225_237_Pallas'sLeafWarbler_JiangshanXishanPark.JPG";
        this[1][95] = "20231225_238_DaurianRedstart(M)_Jiangshangang.JPG";
        this[1][96] = "20231227_244_Naumann'sThrush_BeijingBotanicalGarden.JPG";
        this[1][97] = "20231227_247_OrientalTurtleDove_BeijingBotanicalGarden.JPG";
        this[1][98] = "20231227_248_BohemainWaxwing_BeijingBotanicalGarden.JPG";
        this[1][99] = "20231227_250_Black-throatedThrush_BeijingBotanicalGarden.JPG";
        this[1][100] = "20231227_252_JapaneseWaxwing_BeijingBotanicalGarden.JPG";
        this[1][101] = "20231227_254_Red-billedBlueMagpie_BeijingBotanicalGarden.JPG";
        this[1][102] = "20231227_255_GreatSpottedWoodpecker_BeijingBotanicalGarden.JPG";
        this[1][103] = "20231227_257_Yellow-belliedTit(M)_BeijingBotanicalGarden.JPG";
        this[1][104] = "20231227_258_Yellow-belliedTit(F)_BeijingBotanicalGarden.JPG";
        this[1][105] = "20231227_264_PlainLaughingthrush_BeijingBotanicalGarden.JPG";
        this[1][106] = "20231227_267_BeijingBabbler_BeijingBotanicalGarden.JPG";
        this[1][107] = "20231227_269_Brambling(M)_BeijingBotanicalGarden.JPG";
        this[1][108] = "20231227_270_ChineseNuthatch(F)_BeijingBotanicalGarden.JPG";
        this[1][109] = "20231227_274_EurasianGoshawk(I)_BeijingBotanicalGarden.JPG";
        this[1][110] = "20231227_275_EurasianGoshawk(I)_BeijingBotanicalGarden.JPG";
        this[1][111] = "20231227_278_SpottedDove_BeijingBotanicalGarden.JPG";
        this[1][112] = "20231227_280_Red-throatedThrush_BeijingBotanicalGarden.JPG";
        this[1][113] = "20231227_281_EurasianSiskin(F)_BeijingBotanicalGarden.JPG";
        this[1][114] = "20231227_282_ChineseNuthatch(M)_BeijingBotanicalGarden.JPG";
        this[1][115] = "20231227_284_RedCrossbill(F)_BeijingBotanicalGarden.JPG";
        this[1][116] = "20231227_285_RedCrossbill(M)_BeijingBotanicalGarden.JPG";
        this[1][117] = "20231228_287_White-cheekedStarling_BeijingYuanmingyuan.JPG";
        this[1][118] = "20231228_294_OrientalMagpie_BeijingYuanmingyuan.JPG";
        this[1][119] = "20231228_295_Hawfinch_BeijingYuanmingyuan.JPG";
        this[1][120] = "20231228_296_Hawfinch_BeijingYuanmingyuan.JPG";
        this[1][121] = "20231228_299_Brambling(F)_BeijingYuanmingyuan.JPG";
        this[1][122] = "20231228_300_WillowTit_BeijingYuanmingyuan.JPG";
        this[1][123] = "20231228_302_EurasianCoot_BeijingYuanmingyuan.JPG";
        this[1][124] = "20231228_303_BlackSwan_BeijingYuanmingyuan.JPG";
        this[1][125] = "20231228_305_MandarinDuck(M)_BeijingYuanmingyuan.JPG";
        this[1][126] = "20231229_308_Brown-earedBulbul_TokyoHanedaAirport.JPG";
        this[1][127] = "20231229_309_ReedBunting_TokyoHanedaAirport.JPG";
        this[1][128] = "20231229_310_ReedBunting_TokyoHanedaAirport.JPG";
        this[1][129] = "20231229_311_WhiteWagtail_TokyoHanedaAirport.JPG";
        this[1][130] = "20231229_314_EurasianWigeon_TokyoHanedaAirport.JPG";
        this[1][131] = "20231229_315_Gadwall_TokyoHanedaAirport.JPG";
        this[1][132] = "20231229_316_White-cheekedStarling_TokyoHanedaAirport.JPG";
        this[1][133] = "20231229_317_DaurianRedstart(F)_TokyoHanedaAirport.JPG";
        this[1][134] = "20231229_320_Bull-headedShrike_TokyoHanedaAirport.JPG";
        this[1][135] = "20231229_321_VegaGull_TokyoHanedaAirport.JPG";
        this[1][136] = "20231229_322_BlueRock-Thrush(F)_TokyoHanedaAirport.JPG";
        this[1][137] = "20231229_323_EurasianTreeSparrow_TokyoHanedaAirport.JPG";
        this[1][138] = "20231229_324_LittleEgret_TokyoHanedaAirport.JPG";
        this[1][139] = "20231229_325_Slaty-backedGull_TokyoHanedaAirport.JPG";
        this[1][140] = "20231229_326_GreatCrestedGrebe_TokyoHanedaAirport.JPG";
        this[1][141] = "20231229_327_EurasianCoot_TokyoHanedaAirport.JPG";
        this[1][142] = "20231229_329_GreyHeron_TokyoHanedaAirport.JPG";
        this[1][143] = "20231229_331_GreatCormorant_TokyoHanedaAirport.JPG";
        this[1][144] = "20231229_332_Black-headedGull_TokyoHanedaAirport.JPG";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
