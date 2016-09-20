<!--
//Created by Album Builder Program Mon Oct 08 12:11:09 2007
var info_url   = "http://dreamcatcherrally.com/";
var title      = "Dreamcatcher Rally in Ripken Stadium";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0710dreamcatcher/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "FineAsFineCanBe.mid";
var midi_cr    = new Array("The Melodious MIDI","http://www.fortunecity.com/tinpan/lennon/351/index.html");
 
if(window.usechinese){
    title      = "追梦人摩托集会";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "0710dreamcatcher_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "集会上展示了很多漂亮的定制的摩托车。";
        this[1][4] = "我的午餐。";
        this[1][5] = "一个巴尔的摩的乡村和蓝调乐队。";
        this[1][6] = "名叫Motorocket的摇滚乐队。";
        this[1][7] = "另外一个乐队。";
        this[1][9] = "G Gordon Liddy，一个著名的保守派电台主持人。";
        this[1][12] = "潇洒的马里兰州警。";
        this[1][13] = "开着机动酒吧座椅的壮汉。";
        this[1][14] = "戴红头巾的女子。";
        this[1][15] = "文静的女孩。";
        this[1][16] = "穿皮裤的漂亮女郎。";
        this[1][21] = "穿短裙的漂亮女郎。";
        this[1][25] = "黑白的完美搭配。";
        this[1][28] = "漂亮的眼睛。";
        this[1][29] = "边看书边喝啤酒的女孩。";
    }else{
        this[1][0] = "The rally features a lot of custom made motorcycles.";
        this[1][4] = "My lunch.";
        this[1][5] = "A Baltimore native country and bluegrass band.";
        this[1][6] = "Motorocket rock band.";
        this[1][7] = "Marvin James band.";
        this[1][9] = "G Gordon Liddy, a famous conservative radio talk show host.";
        this[1][10] = "A cool young biker.";
        this[1][12] = "A Maryland state trooper.";
        this[1][13] = "A man riding a powered bar stool.";
        this[1][14] = "A lady wearing red bandanna.";
        this[1][15] = "A lovely young lady.";
        this[1][16] = "Two beautiful young ladies in leather pants.";
        this[1][19] = "A lady from Victory Cycle.";
        this[1][22] = "Just beautiful.";
        this[1][25] = "Beautiful match of black skirt with white shirt.";
        this[1][28] = "Pretty eyes.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
