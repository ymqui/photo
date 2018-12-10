<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "";
var title      = "Costa Rica";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1812costarica/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "游哥斯达黎加";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<24;i++){
        this[0][i] = "1812costarica_"+(i+1).toString();
        this[1][i] = "";
    }
    i = 0;
    this[1][i++] = (["On the plane.","在飞机上。"])[cn_ind];
    this[1][i++] = (["On the plane.","在飞机上。"])[cn_ind];
    this[1][i++] = (["At the Culture Plaza in San Jose.","在圣何塞的文化广场。"])[cn_ind];
    this[1][i++] = (["At a street corner in San Jose.","在圣何塞街头。"])[cn_ind];
    this[1][i++] = (["Sipping juice in a restaurant.","在一家餐馆喝果汁。"])[cn_ind];
    this[1][i++] = (["Street concert in San Jose.","圣何塞的街头音乐会。"])[cn_ind];
    this[1][i++] = (["Enjoying the street concert.","欣赏街头音乐会。"])[cn_ind];
    this[1][i++] = (["Enjoying the street concert.","欣赏街头音乐会。"])[cn_ind];
    this[1][i++] = (["Enjoying the street performance.","欣赏街头表演。"])[cn_ind];
    this[1][i++] = (["At Arenal Observatory Lodge.","在阿雷纳火山观测台山林小屋。"])[cn_ind];
    this[1][i++] = (["At Arenal Observatory Lodge.","在阿雷纳火山观测台山林小屋。"])[cn_ind];
    this[1][i++] = (["Enjoying the jacuzzi at Arenal Observatory Lodge.","在阿雷纳火山观测台山林小屋泡热水澡。"])[cn_ind];
    this[1][i++] = (["At Arenal Observatory Lodge.","在阿雷纳火山观测台山林小屋。"])[cn_ind];
    this[1][i++] = (["At Arenal Observatory Lodge. The Arenal Vocano is still alive.","在阿雷纳火山观测台山林小屋。阿雷纳火山仍然是一座活火山。"])[cn_ind];
    this[1][i++] = (["At Arenal Observatory Lodge.","在阿雷纳火山观测台山林小屋。"])[cn_ind];
    this[1][i++] = (["At Arenal Observatory Lodge.","在阿雷纳火山观测台山林小屋。"])[cn_ind];
    this[1][i++] = (["At Arenal Observatory Lodge.","在阿雷纳火山观测台山林小屋。"])[cn_ind];
    this[1][i++] = (["An orchid flower.","兰花。"])[cn_ind];
    this[1][i++] = (["Geoffroy's Spider Monkey.","蜘蛛猴。"])[cn_ind];
    this[1][i++] = (["Red-eyed Tree Frog.","红眼树蛙。"])[cn_ind];
    this[1][i++] = (["Brilliant Forest Frog.","沃氏林蛙。"])[cn_ind];
    this[1][i++] = (["A tree lizard.","树蜥蜴。"])[cn_ind];
    this[1][i++] = (["Coati.","长鼻浣熊。"])[cn_ind];
    this[1][i++] = (["Agouti.","刺豚鼠。"])[cn_ind];
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
