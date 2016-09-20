<!--
//Created by Album Builder Program Tue May 22 08:34:03 2007
var info_url   = "http://www.jsoh.org/";
var title      = "2007 Air Show at Andrews Air Force Base";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0705airshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "RainyNight.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy1.html");
 
if(window.usechinese){
    title      = "2007年安德鲁斯空军基地飞行表演";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<39;i++){
        this[0][i] = "0705airshow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "看什么呢？";
        this[1][1] = "空中打字。";
        this[1][8] = "CH-46直升飞机。";
        this[1][10] = "AV-8B鹞式飞机表演垂直起降。";
        this[1][11] = "带喷气引擎的赛车。";
        this[1][12] = "A-10。";
        this[1][15] = "F4U。";
        this[1][16] = "F18起飞。";
        this[1][18] = "F15C。";
        this[1][19] = "F22起飞。";
        this[1][21] = "Pitts S2B。";
        this[1][23] = "F117起飞。";
        this[1][27] = "雷鸟飞行表演队。";
    }else{
        this[1][1] = "Skytypers.";
        this[1][5] = "Sean Tucker.";
        this[1][8] = "CH-46.";
        this[1][10] = "AV-8B Harrier II maneuvering a vertical landing.";
        this[1][11] = "Jet car.";
        this[1][12] = "A-10 Thunderbolt II.";
        this[1][14] = "Michael Hunter flight for diabetes.";
        this[1][15] = "F4U Corsair taking off.";
        this[1][16] = "F18 Hornet taking off.";
        this[1][18] = "F15C Eagle.";
        this[1][19] = "F22 Raptor taking off.";
        this[1][21] = "Jill Long Ragged Edge Pitts S2B.";
        this[1][22] = "Heritage flight.";
        this[1][23] = "F117 Nighthawk taking off.";
        this[1][27] = "Thunderbirds crew.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
