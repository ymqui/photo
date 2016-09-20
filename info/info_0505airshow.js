<!--
//Created by Album Builder Program Sat Jan 14 08:37:14 2006
var info_url   = "http://public.andrews.amc.af.mil/jsoh/";
var title      = "2005 Air Show in Andrews AFB.";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0505airshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "InTheMorningLight.mid";
var midi_cr    = new Array("Bennie's MIDI Page","http://bennieshepherd.com/");
 
if(window.usechinese){
    title      = "2005安德鲁斯空军基地飞行表演。";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<53;i++){
        this[0][i] = "0505airshow__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "直升机可能是UH-1N。";
        this[1][1] = "AH-64 阿帕奇直升机。";
        this[1][2] = "著名的二战Spitfire(喷火)飞机。";
        this[1][3] = "金爵跳伞表演。";
        this[1][4] = "金爵跳伞表演。";
        this[1][5] = "金爵跳伞表演。";
        this[1][6] = "空中打字员飞行表演队。";
        this[1][7] = "空中打字员飞行表演队。";
        this[1][8] = "空中打字员飞行表演队。";
        this[1][9] = "空中打字员飞行表演队。";
        this[1][10] = "空中打字员飞行表演队。";
        this[1][11] = "空中打字员飞行表演队。";
        this[1][12] = "女飞行员Nancy Lynn的表演。";
        this[1][13] = "女飞行员Nancy Lynn的表演。";
        this[1][14] = "AV-8 鹞式歼击机。";
        this[1][15] = "AV-8 靠两股下喷气流悬在空中。";
        this[1][16] = "AV-8 垂直降落。";
        this[1][17] = "C-17 运输机。";
        this[1][18] = "C-17 运输机。";
        this[1][19] = "B-1B 轰炸机。";
        this[1][20] = "B-1B 轰炸机。";
        this[1][21] = "凑巧看到总统专机起飞。";
        this[1][22] = "第82空降兵表演。";
        this[1][23] = "第82空降兵表演。";
        this[1][24] = "第82空降兵表演。";
        this[1][25] = "先进的 F-22 战斗机。";
        this[1][26] = "F-117 隐形战斗机。";
        this[1][27] = "F-117 隐形战斗机。";
        this[1][28] = "C-130 大力神运输机。";
        this[1][29] = "F-15 战斗机。";
        this[1][30] = "F-15 战斗机。";
        this[1][31] = "F-15 战斗机。";
        this[1][32] = "F-15 战斗机。";
        this[1][33] = "F-86， F-15， F-4， 和 A-10 列队飞行。";
        this[1][34] = "A-10 飞机。";
        this[1][35] = "B-2 悄悄地飞来了。";
        this[1][36] = "B-2 隐形轰炸机。";
        this[1][37] = "B-2 隐形轰炸机。";
        this[1][38] = "B-2 隐形轰炸机。";
        this[1][39] = "B-2 隐形轰炸机。";
        this[1][40] = "F-18 战斗机。";
        this[1][41] = "F-18 战斗机。";
        this[1][42] = "F-18 战斗机。";
        this[1][43] = "F-18 战斗机。";
        this[1][44] = "Frank Ryder 的 Oreck XL 表演。";
        this[1][45] = "Frank Ryder 的 Oreck XL 表演。";
        this[1][46] = "雷鸟发动引擎。";
        this[1][47] = "雷鸟飞行表演，这些飞机是F-16战斗机。";
        this[1][48] = "雷鸟飞行表演。";
        this[1][49] = "雷鸟飞行表演。";
        this[1][50] = "雷鸟飞行表演。";
        this[1][51] = "雷鸟飞行表演。";
        this[1][52] = "雷鸟飞行表演。";
    }else{
        this[1][0] = "In front of a helicopter, probably a UH-1N.";
        this[1][1] = "AH-64 Apache.";
        this[1][2] = "Supermarine Spitfire.";
        this[1][3] = "Golden Knights.";
        this[1][4] = "Golden Knights.";
        this[1][5] = "Golden Knights formation jump.";
        this[1][6] = "Sky Typers.";
        this[1][7] = "Sky Typers.";
        this[1][8] = "Sky Typers.";
        this[1][9] = "Sky Typers.";
        this[1][10] = "Sky Typers.";
        this[1][11] = "Sky Typers.";
        this[1][12] = "Nancy Lynn flying her Extra-300.";
        this[1][13] = "Nancy Lynn flying her Extra-300.";
        this[1][14] = "AV-8 Harrier.";
        this[1][15] = "AV-8 Harrier stationary in the air.";
        this[1][16] = "AV-8 Harrier vertical landing.";
        this[1][17] = "C-17 Globemaster.";
        this[1][18] = "C-17 Globemaster.";
        this[1][19] = "B-1B Lancer.";
        this[1][20] = "B-1B Lancer.";
        this[1][21] = "The flying oval office - Air Force One.";
        this[1][22] = "82nd Airborne Mass Jump.";
        this[1][23] = "82nd Airborne Mass Jump.";
        this[1][24] = "82nd Airborne Mass Jump.";
        this[1][25] = "F-22 Raptor.";
        this[1][26] = "F-117 Nighthawk.";
        this[1][27] = "F-117 Nighthawk.";
        this[1][28] = "C-130 Hercules.";
        this[1][29] = "F-15 Eagle.";
        this[1][30] = "F-15 Eagle.";
        this[1][31] = "F-15 Eagle.";
        this[1][32] = "F-15 Eagle.";
        this[1][33] = "Heritage flight: F-86, F-15, F-4, and A-10.";
        this[1][34] = "A-10 Thunderbolt.";
        this[1][35] = "Here comes the B-2 Spirit.";
        this[1][36] = "B-2 Spirit.";
        this[1][37] = "B-2 Spirit.";
        this[1][38] = "B-2 Spirit.";
        this[1][39] = "B-2 Spirit.";
        this[1][40] = "F-18 Super Hornet.";
        this[1][41] = "F-18 Super Hornet.";
        this[1][42] = "F-18 Super Hornet.";
        this[1][43] = "F-18 Super Hornet.";
        this[1][44] = "Frank Ryder flying the Oreck XL, a classic Super Chipmunk.";
        this[1][45] = "Frank Ryder flying the Oreck XL, a classic Super Chipmunk.";
        this[1][46] = "Engine test of the Thunder Birds.";
        this[1][47] = "Thunder Birds. The planes are F-16.";
        this[1][48] = "Thunder Birds.";
        this[1][49] = "Thunder Birds.";
        this[1][50] = "Thunder Birds.";
        this[1][51] = "Thunder Birds.";
        this[1][52] = "Thunder Birds.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
