<!--
//Created by Album Builder Program Wed Jul 09 21:02:02 2014
var info_url   = "";
var title      = "Michigan Birding";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1407mibird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DoYouRemember.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "密西根州观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "1407mibird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "东绿霸鹟，画石国家湖岸。";
        this[1][1] = "东绿霸鹟。";
        this[1][2] = "东绿霸鹟。";
        this[1][3] = "渡鸦，画石国家湖岸。";
        this[1][5] = "东王霸鹟，神泥国家野生动物保护区。";
        this[1][6] = "黑嘴天鹅，神泥国家野生动物保护区。";
        this[1][7] = "家燕，麦基诺市。";
        this[1][8] = "家燕，麦基诺市。";
        this[1][9] = "环嘴鸥，麦基诺岛。";
        this[1][10] = "欧椋鸟，未成年，麦基诺岛。";
        this[1][11] = "普通秋沙鸭，麦基诺岛。";
        this[1][12] = "环嘴鸥，麦基诺岛。";
        this[1][13] = "黑顶山雀，麦基诺岛。";
        this[1][14] = "普通燕鸥，麦基诺岛。";
        this[1][15] = "普通燕鸥。";
        this[1][16] = "雪松太平鸟，麦基诺岛。";
        this[1][17] = "双领鸻，麦基诺岛。";
        this[1][18] = "双领鸻。";
        this[1][19] = "橙尾鸲莺，雄性，麦基诺岛。";
    }else{
        this[1][0] = "Eastern Wood-Pewee, Pictured Rocks National Lakeshore.";
        this[1][1] = "Eastern Wood-Pewee.";
        this[1][2] = "Eastern Wood-Pewee.";
        this[1][3] = "Common Raven, Pictured Rocks National Lakeshore.";
        this[1][5] = "Eastern Kingbird, Seney National Wildlife Refuge.";
        this[1][6] = "Trumpeter Swan, Seney National Wildlife Refuge.";
        this[1][7] = "Barn Swallow, Mackinaw City.";
        this[1][8] = "Barn Swallow, Mackinaw City.";
        this[1][9] = "Ring-billed Gull, Mackinac Island.";
        this[1][10] = "European Starling, Juvenile, Mackinac Island.";
        this[1][11] = "Common Merganser, Mackinac Island.";
        this[1][12] = "Ring-billed Gull, Mackinac Island.";
        this[1][13] = "Black-capped Chickadee, Mackinac Island.";
        this[1][14] = "Common Tern, Mackinac Island.";
        this[1][15] = "Common Tern.";
        this[1][16] = "Cedar Waxwing, Mackinac Island.";
        this[1][17] = "Killdeer, Mackinac Island.";
        this[1][18] = "Killdeer.";
        this[1][19] = "American Redstart, Male, Mackinac Island.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
