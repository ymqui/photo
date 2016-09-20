<!--
//Created by Album Builder Program Mon May 22 21:10:07 2006
var info_url   = "http://www.jsoh.org/";
var title      = "2006 Joint Service Open House Air Show in Andrews AFB";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0605airshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AFuegoLento.mid";
var midi_cr    = new Array("Midi All The Best","http://midiallthebest.50webs.com/");
 
if(window.usechinese){
    title      = "2006安德鲁斯空军基地飞行表演";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<43;i++){
        this[0][i] = "0605airshow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "F-117。";
        this[1][1] = "U-2。";
        this[1][2] = "MH-60。";
        this[1][3] = "金爵跳伞队。";
        this[1][4] = "T-6。";
        this[1][5] = "T-6。";
        this[1][6] = "T-6和T-6 II。";
        this[1][7] = "AV-8B垂直降落。";
        this[1][8] = "AV-8B。";
        this[1][9] = "F-15。";
        this[1][10] = "F-15。";
        this[1][11] = "John Klatt的S-300D表演。";
        this[1][12] = "John Klatt的S-300D表演。";
        this[1][13] = "警卫。";
        this[1][14] = "加拿大雪鸟飞行表演队。";
        this[1][15] = "雪鸟飞行表演队。";
        this[1][16] = "雪鸟飞行表演队。";
        this[1][17] = "雪鸟飞行表演队。";
        this[1][18] = "雪鸟飞行表演队。";
        this[1][19] = "雪鸟飞行表演队。";
        this[1][20] = "雪鸟飞行表演队。";
        this[1][21] = "雪鸟飞行表演队。";
        this[1][22] = "第82空降师。";
        this[1][23] = "F-117。";
        this[1][24] = "F-117。";
        this[1][25] = "F-16。";
        this[1][26] = "F-16。";
        this[1][27] = "Frank Ryder的表演。";
        this[1][28] = "米格17。";
        this[1][29] = "米格17。";
        this[1][30] = "F-86。";
        this[1][31] = "F-86。";
        this[1][32] = "F-22，F-15，F-4和P-51。";
        this[1][33] = "F-4。";
        this[1][34] = "P-51。";
        this[1][35] = "F-22。";
        this[1][36] = "喷气引擎赛车，比飞机还快。";
        this[1][37] = "利马利马飞行表演队。";
        this[1][38] = "利马利马飞行表演队。";
        this[1][39] = "海军的蓝天使飞行表演队。";
        this[1][40] = "蓝天使飞行表演队。";
        this[1][41] = "蓝天使飞行表演队。";
        this[1][42] = "蓝天使飞行表演队。";
    }else{
        this[1][0] = "F-117 Night Hawk.";
        this[1][1] = "U-2 Dragon Lady.";
        this[1][2] = "MH-60 Knighthawk.";
        this[1][3] = "Golden Knights Parachute Team.";
        this[1][4] = "T-6 Texan.";
        this[1][5] = "T-6 Texan.";
        this[1][6] = "T-6 Texan & T-6 Texan II.";
        this[1][7] = "AV-8B Harrier.";
        this[1][8] = "AV-8B Harrier.";
        this[1][9] = "F-15 Strike Eagle.";
        this[1][10] = "F-15 Strike Eagle.";
        this[1][11] = "John Klatt's S-300D Staudacher.";
        this[1][12] = "John Klatt's S-300D Staudacher.";
        this[1][13] = "Air force base guards.";
        this[1][14] = "Canadian Snowbirds.";
        this[1][15] = "Canadian Snowbirds.";
        this[1][16] = "Canadian Snowbirds.";
        this[1][17] = "Canadian Snowbirds.";
        this[1][18] = "Canadian Snowbirds.";
        this[1][19] = "Canadian Snowbirds.";
        this[1][20] = "Canadian Snowbirds.";
        this[1][21] = "Canadian Snowbirds.";
        this[1][22] = "82nd Airborne Division Mass Jump.";
        this[1][23] = "F-117 Night Hawk.";
        this[1][24] = "F-117 Night Hawk.";
        this[1][25] = "F-16 Falcon.";
        this[1][26] = "F-16 Falcon.";
        this[1][27] = "Frank Ryder's Oreck XL Cyclone.";
        this[1][28] = "MIG-17.";
        this[1][29] = "MIG-17.";
        this[1][30] = "F-86 Super Sabre.";
        this[1][31] = "F-86 Super Sabre.";
        this[1][32] = "Heritage Flight: F-22, F-15, F-4, and P-51.";
        this[1][33] = "F-4 Phantom.";
        this[1][34] = "P-51 Mustang.";
        this[1][35] = "F-22 Raptor.";
        this[1][36] = "Jet Car.";
        this[1][37] = "Lima Lima Flight Team.";
        this[1][38] = "Lima Lima Flight Team.";
        this[1][39] = "Blue Angels.";
        this[1][40] = "Blue Angels.";
        this[1][41] = "Blue Angels.";
        this[1][42] = "Blue Angels.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
