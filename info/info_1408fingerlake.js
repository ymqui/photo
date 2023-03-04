<!--
//Created by Album Builder Program Sat Sep 13 09:12:12 2014
var info_url   = "http://www.fingerlakes.com/activities/birding";
var title      = "Birding in the Finger Lake Region";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1408fingerlake/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Blessed.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "指形湖区观鸟";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "1408fingerlake_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "美洲金翅雀，雌性，啄木鸟树林保护区。";
        this[1][1] = "黑顶山雀，啄木鸟树林保护区。";
        this[1][2] = "冠蓝鸦，啄木鸟树林保护区。";
        this[1][3] = "绿头鸭，蚀羽雄性，啄木鸟树林保护区。";
        this[1][4] = "绒啄木鸟，雄性，啄木鸟树林保护区。";
        this[1][5] = "玫胸白斑翅雀，雌性，鲑鱼河路。";
        this[1][6] = "东绿霸鹟，鲑鱼河路。";
        this[1][7] = "小黄脚鹬，麦尔斯公园。";
        this[1][8] = "美洲黑水鸡，未成年，蒙特祖玛国家野生动物保护区。";
        this[1][9] = "双冠鸬鹚，蒙特祖玛国家野生动物保护区。";
        this[1][10] = "美洲绿鹭，蒙特祖玛国家野生动物保护区。";
        this[1][11] = "斑嘴巨鸊鷉，未成年，蒙特祖玛国家野生动物保护区。";
        this[1][12] = "林鸳鸯，蚀羽雄性，蒙特祖玛国家野生动物保护区。";
        this[1][13] = "雪雁，蒙特祖玛国家野生动物保护区。";
        this[1][14] = "大蓝鹭，蒙特祖玛国家野生动物保护区。";
        this[1][15] = "美洲金翅雀，89号公路。";
        this[1][16] = "黑顶山雀，啄木鸟树林保护区。";
        this[1][17] = "绒啄木鸟，雌性，啄木鸟树林保护区。";
        this[1][18] = "普通拟八哥，啄木鸟树林保护区。";
    }else{
        this[1][0] = "American goldfinch, female, Sapsucker Woods Sanctuary.";
        this[1][1] = "Black-capped Chickadee, Sapsucker Woods Sanctuary.";
        this[1][2] = "Blue jay, Sapsucker Woods Sanctuary.";
        this[1][3] = "Mallard, eclipse male, Sapsucker Woods Sanctuary.";
        this[1][4] = "Downy woodpecker, male, Sapsucker Woods Sanctuary.";
        this[1][5] = "Rose-breasted Grosbeak, female, Salmon Creek Road.";
        this[1][6] = "Eastern wood-pewee, Salmon Creek Road.";
        this[1][7] = "Lesser yellowlegs, Myers Park.";
        this[1][8] = "Common gallinue, juvenile, Montezuma National Wildlife Refuge.";
        this[1][9] = "Double-crested cormorant, Montezuma National Wildlife Refuge.";
        this[1][10] = "Green heron, Montezuma National Wildlife Refuge.";
        this[1][11] = "Pie-billed grebe, juvenile, Montezuma National Wildlife Refuge.";
        this[1][12] = "Wood duck, eclipse male, Montezuma National Wildlife Refuge.";
        this[1][13] = "Snow goose, Montezuma National Wildlife Refuge.";
        this[1][14] = "Great blue heron, Montezuma National Wildlife Refuge.";
        this[1][15] = "American goldfinch, Rt 89.";
        this[1][16] = "Black-capped chickadee, Sapsucker Woods Sanctuary.";
        this[1][17] = "Downy woodpecker, female, Sapsucker Woods Sanctuary.";
        this[1][18] = "Common grackle, Sapsucker Woods Sanctuary.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->