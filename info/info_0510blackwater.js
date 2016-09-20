<!--
//Created by Album Builder Program Sun Oct 23 22:14:44 2005
var info_url   = "http://www.blackwaterfalls.com/";
var title      = "Blackwater Falls";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0510blackwater/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "FourInTheMorning.mid";
var midi_cr    = new Array("Midi Database","http://country.mididb.com/faronyoung/");
 
if(window.usechinese){
    title      = "黑水瀑布";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<17;i++){
        this[0][i] = "0510blackwater_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "马里兰州的斜岭山过山道。";
        this[1][1] = "层林尽染的马里兰山区。";
        this[1][2] = "马里兰州的深溪湖。";
        this[1][3] = "枫叶。";
        this[1][4] = "不知名的小红果。";
        this[1][5] = "黑水瀑布，有18米高。";
        this[1][6] = "黑水瀑布。";
        this[1][7] = "黑水瀑布。水的颜色是由落叶染成的。";
        this[1][8] = "黑水瀑布观望台。";
        this[1][9] = "黑水瀑布。";
        this[1][10] = "长在瀑布边的枫树。";
        this[1][11] = "瀑布顶。这条河就叫黑水河。";
        this[1][12] = "瀑布顶。";
        this[1][13] = "瀑布底顽强的大石。";
        this[1][14] = "红叶。";
        this[1][15] = "落叶知秋。";
        this[1][16] = "秋色。";
    }else{
        this[1][0] = "Sideling Hill rocky gap along I-68.";
        this[1][1] = "Beautiful fall color in Garrett county, MD.";
        this[1][2] = "Deep creek lake in Garrett county, MD.";
        this[1][3] = "Maple leaves.";
        this[1][4] = "Unknown red berry.";
        this[1][5] = "Blackwater falls. The waterfall is 60 feet high.";
        this[1][6] = "Blackwater falls.";
        this[1][7] = 'Blackwater falls. The "black" water is a result of tannic acid from fallen hemlock and red spruce needles.';
        this[1][8] = "Observation deck.";
        this[1][9] = "Blackwater falls.";
        this[1][10] = "A maple tree near the waterfall.";
        this[1][11] = "Blackwater falls.";
        this[1][12] = "Blackwater falls.";
        this[1][13] = "Bottom of the waterfall.";
        this[1][14] = "Fall color.";
        this[1][15] = "Fall foliage.";
        this[1][16] = "Golden season.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
