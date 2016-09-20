<!--
var info_url   = "http://www.nps.gov/cato/";
var title      = "Catoctin Mountain Park";
var cam_img    = "camera_canon_a80.jpg"
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels."
var dir        = maindir+"pics/0410catoctin/"; //directory where pics are
var interval   = 5000;                         //interval for slide show in millisecond
var thumb_dir  = maindir+"thumbnail/";         //thumbnail directory
var ext        = ".jpg";                       //extension of the pic files
var midi_file  = "AcrossTheUniverse.mid";
var midi_cr    = new Array("The Beatles","http://www.karmoyped.no/kjolaf/beatles/html/Let%20It%20Be.html");

if(window.usechinese){
    cam_tit    = "佳能Powershot A80, 400万像素。";
    title      = "卡拓克亭山";
}

document.title = title;

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos, shown as browser status
    for (var i=0;i<19;i++){
        this[0][i] = "0410catoctin_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] ="前往烟囱岩的山道。" ;
        this[1][1] ="狼岩。" ;
        this[1][2] ="烟囱岩。" ;
        this[1][3] ="烟囱岩。" ;
        this[1][4] ="烟囱岩山景。" ;
        this[1][5] ="大猎溪。";
        this[1][6] ="雾山木屋。";
        this[1][7] ="雾山木屋。";
        this[1][8] ="浓浓秋色。";
        this[1][9] ="这大概是通往神秘的戴维营的公路。";
        this[1][10] ="水力锯木坊。";
        this[1][11] ="欧文溪。";
        this[1][12] ="欧文溪上的木桥。";
        this[1][13] ="通往咖柠憾瀑布的山道。";
        this[1][14] ="咖柠憾瀑布。";
        this[1][15] ="咖柠憾瀑布。";
        this[1][16] ="猎溪湖。";
        this[1][17] ="猎溪湖。";
        this[1][18] ="秋色。";
    }else{
        this[1][0] ="Hiking trail from park central road to Chimney Rock." ;
        this[1][1] ="Wolf Rock." ;
        this[1][2] ="Chimney Rock." ;
        this[1][3] ="Chimney Rock." ;
        this[1][4] ="Views from Chimney Rock." ;
        this[1][5] ="Big Hunting Creek.";
        this[1][6] ="Misty Mountain Cabins.";
        this[1][7] ="Misty Mountain Cabins.";
        this[1][8] ="Gorgeous fall color.";
        this[1][9] ="Camp #3...is this Camp David?";
        this[1][10] ="Saw Mill.";
        this[1][11] ="Owens Creek.";
        this[1][12] ="Trail bridge over Owens Creek.";
        this[1][13] ="Cliff Trail leading to Cunningham Falls.";
        this[1][14] ="Cunningham Falls.";
        this[1][15] ="Cunningham Falls.";
        this[1][16] ="Hunting Creek Lake.";
        this[1][17] ="Hunting Creek Lake.";
        this[1][18] ="Fall color.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
