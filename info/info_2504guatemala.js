<!--
//Created by Album Builder Program Fri Apr 25 06:50:37 2025
var info_url   = "";
var title      = "Spring Break in Guatemala";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2504guatemala/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "Spring Break in Guatemala";
    cam_tit    = "ä½³èƒ½å•é•œå¤´åå…‰å¼6Dç›¸æœºï¼Œ2020ä¸‡åƒç´ ã€‚";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<63;i++){
        this[0][i] = "2504guatemala_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "20250412_000_Airplane.JPG";
        this[1][1] = "20250412_001_NathanFloresIguana.JPG";
        this[1][2] = "20250412_003_FloresRestaurant.JPG";
        this[1][3] = "20250412_005_Flores.JPG";
        this[1][4] = "20250413_006_Tikal.JPG";
        this[1][5] = "20250413_007_TikalCeibaTree.JPG";
        this[1][6] = "20250413_008_Tikal.JPG";
        this[1][7] = "20250413_010_Tikal.JPG";
        this[1][8] = "20250413_012_Tikal.JPG";
        this[1][9] = "20250413_013_Tikal.JPG";
        this[1][10] = "20250413_014_Tikal.JPG";
        this[1][11] = "20250413_015_TikalTempleI.JPG";
        this[1][12] = "20250413_016_TikalViewfromTempleIV.JPG";
        this[1][13] = "20250413_017_Tikal.JPG";
        this[1][14] = "20250413_018_TikalTempleIV.JPG";
        this[1][15] = "20250413_020_Tikal.JPG";
        this[1][16] = "20250413_021_SpiderMonkey_TikalNP.JPG";
        this[1][17] = "20250413_023_TikalTempleV.JPG";
        this[1][18] = "20250413_024_FloresStreetJuggler.JPG";
        this[1][19] = "20250413_025_FloresSunsetLakePet¨¦nItz¨¢.JPG";
        this[1][20] = "20250414_026_Yaxh¨¢.JPG";
        this[1][21] = "20250414_027_Yaxh¨¢.JPG";
        this[1][22] = "20250414_030_Yaxh¨¢RainGod.JPG";
        this[1][23] = "20250414_032_Yaxh¨¢GuideNeftaliEscobar.JPG";
        this[1][24] = "20250414_033_HowlerMonkey_YaxhaNP.JPG";
        this[1][25] = "20250414_034_SpiderMonkey_YaxhaNP.JPG";
        this[1][26] = "20250415_035_Boat.JPG";
        this[1][27] = "20250415_036_FloresLakePet¨¦nItz¨¢.JPG";
        this[1][28] = "20250416_037_MundoMayaAirport.JPG";
        this[1][29] = "20250417_038_AntiguaGuatemala.JPG";
        this[1][30] = "20250417_039_AntiguaMacDonald's.JPG";
        this[1][31] = "20250417_040_AntiguaStarbucks.JPG";
        this[1][32] = "20250417_041_AntiguaStarbucks.JPG";
        this[1][33] = "20250417_044_Antigua.JPG";
        this[1][34] = "20250417_046_AntiguaSwimmingPool.JPG";
        this[1][35] = "20250417_047_AntiguaAlfombras.JPG";
        this[1][36] = "20250417_048_AntiguaAlfombras.JPG";
        this[1][37] = "20250417_049_AntiguaProcession.JPG";
        this[1][38] = "20250417_051_AntiguaProcession.JPG";
        this[1][39] = "20250417_053_Antigua.JPG";
        this[1][40] = "20250417_054_AntiguaProcession.JPG";
        this[1][41] = "20250417_055_AntiguaProcession.JPG";
        this[1][42] = "20250417_056_AntiguaProcession.JPG";
        this[1][43] = "20250417_057_AntiguaProcession.JPG";
        this[1][44] = "20250417_058_AntiguaProcession.JPG";
        this[1][45] = "20250417_059_AntiguaProcession.JPG";
        this[1][46] = "20250417_063_Antigua.JPG";
        this[1][47] = "20250417_064_AntiguaAguaVolcano.JPG";
        this[1][48] = "20250417_065_Pacaya.JPG";
        this[1][49] = "20250417_066_AntiguaPacayaVolcano.JPG";
        this[1][50] = "20250417_068_AntiguaPacayaVolcano.JPG";
        this[1][51] = "20250417_069_AntiguaPacayaVolcano.JPG";
        this[1][52] = "20250417_070_AntiguaPacayaVolcano.JPG";
        this[1][53] = "20250417_072_AntiguaPacayaVolcano.JPG";
        this[1][54] = "20250417_073_AntiguaPacayaVolcano.JPG";
        this[1][55] = "20250418_073_HotelHammock.JPG";
        this[1][56] = "20250418_074_AntiguaProcession.JPG";
        this[1][57] = "20250418_075_AntiguaFuegoVolcano.JPG";
        this[1][58] = "20250419_077_AntiguaArcoDeSantaCatalina.JPG";
        this[1][59] = "20250419_079_AntiguaArcoDeSantaCatalina.JPG";
        this[1][60] = "20250419_082_AntiguaCerroDeLaCruz.JPG";
        this[1][61] = "20250419_083_AntiguaCerroDeLaCruz.JPG";
        this[1][62] = "20250420_084_Airport.JPG";
    }else{
        this[1][0] = "20250412_000_Airplane.JPG";
        this[1][1] = "20250412_001_NathanFloresIguana.JPG";
        this[1][2] = "20250412_003_FloresRestaurant.JPG";
        this[1][3] = "20250412_005_Flores.JPG";
        this[1][4] = "20250413_006_Tikal.JPG";
        this[1][5] = "20250413_007_TikalCeibaTree.JPG";
        this[1][6] = "20250413_008_Tikal.JPG";
        this[1][7] = "20250413_010_Tikal.JPG";
        this[1][8] = "20250413_012_Tikal.JPG";
        this[1][9] = "20250413_013_Tikal.JPG";
        this[1][10] = "20250413_014_Tikal.JPG";
        this[1][11] = "20250413_015_TikalTempleI.JPG";
        this[1][12] = "20250413_016_TikalViewfromTempleIV.JPG";
        this[1][13] = "20250413_017_Tikal.JPG";
        this[1][14] = "20250413_018_TikalTempleIV.JPG";
        this[1][15] = "20250413_020_Tikal.JPG";
        this[1][16] = "20250413_021_SpiderMonkey_TikalNP.JPG";
        this[1][17] = "20250413_023_TikalTempleV.JPG";
        this[1][18] = "20250413_024_FloresStreetJuggler.JPG";
        this[1][19] = "20250413_025_FloresSunsetLakePet¨¦nItz¨¢.JPG";
        this[1][20] = "20250414_026_Yaxh¨¢.JPG";
        this[1][21] = "20250414_027_Yaxh¨¢.JPG";
        this[1][22] = "20250414_030_Yaxh¨¢RainGod.JPG";
        this[1][23] = "20250414_032_Yaxh¨¢GuideNeftaliEscobar.JPG";
        this[1][24] = "20250414_033_HowlerMonkey_YaxhaNP.JPG";
        this[1][25] = "20250414_034_SpiderMonkey_YaxhaNP.JPG";
        this[1][26] = "20250415_035_Boat.JPG";
        this[1][27] = "20250415_036_FloresLakePet¨¦nItz¨¢.JPG";
        this[1][28] = "20250416_037_MundoMayaAirport.JPG";
        this[1][29] = "20250417_038_AntiguaGuatemala.JPG";
        this[1][30] = "20250417_039_AntiguaMacDonald's.JPG";
        this[1][31] = "20250417_040_AntiguaStarbucks.JPG";
        this[1][32] = "20250417_041_AntiguaStarbucks.JPG";
        this[1][33] = "20250417_044_Antigua.JPG";
        this[1][34] = "20250417_046_AntiguaSwimmingPool.JPG";
        this[1][35] = "20250417_047_AntiguaAlfombras.JPG";
        this[1][36] = "20250417_048_AntiguaAlfombras.JPG";
        this[1][37] = "20250417_049_AntiguaProcession.JPG";
        this[1][38] = "20250417_051_AntiguaProcession.JPG";
        this[1][39] = "20250417_053_Antigua.JPG";
        this[1][40] = "20250417_054_AntiguaProcession.JPG";
        this[1][41] = "20250417_055_AntiguaProcession.JPG";
        this[1][42] = "20250417_056_AntiguaProcession.JPG";
        this[1][43] = "20250417_057_AntiguaProcession.JPG";
        this[1][44] = "20250417_058_AntiguaProcession.JPG";
        this[1][45] = "20250417_059_AntiguaProcession.JPG";
        this[1][46] = "20250417_063_Antigua.JPG";
        this[1][47] = "20250417_064_AntiguaAguaVolcano.JPG";
        this[1][48] = "20250417_065_Pacaya.JPG";
        this[1][49] = "20250417_066_AntiguaPacayaVolcano.JPG";
        this[1][50] = "20250417_068_AntiguaPacayaVolcano.JPG";
        this[1][51] = "20250417_069_AntiguaPacayaVolcano.JPG";
        this[1][52] = "20250417_070_AntiguaPacayaVolcano.JPG";
        this[1][53] = "20250417_072_AntiguaPacayaVolcano.JPG";
        this[1][54] = "20250417_073_AntiguaPacayaVolcano.JPG";
        this[1][55] = "20250418_073_HotelHammock.JPG";
        this[1][56] = "20250418_074_AntiguaProcession.JPG";
        this[1][57] = "20250418_075_AntiguaFuegoVolcano.JPG";
        this[1][58] = "20250419_077_AntiguaArcoDeSantaCatalina.JPG";
        this[1][59] = "20250419_079_AntiguaArcoDeSantaCatalina.JPG";
        this[1][60] = "20250419_082_AntiguaCerroDeLaCruz.JPG";
        this[1][61] = "20250419_083_AntiguaCerroDeLaCruz.JPG";
        this[1][62] = "20250420_084_Airport.JPG";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
