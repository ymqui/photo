<!--
//Created by Album Builder Program Mon Mar 24 19:18:49 2025
var info_url   = "https://www.nps.gov/stli/index.htm";
var title      = "Statue of Liberty";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2503liberty/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    info_url   = "https://baike.baidu.com/item/%E8%87%AA%E7%94%B1%E5%A5%B3%E7%A5%9E%E5%83%8F";
    title      = "自由女神像";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<18;i++){
        this[0][i] = "2503liberty_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "乘渡轮去参观埃利斯岛和自由女神像。";
        this[1][1] = "乘渡轮去参观埃利斯岛和自由女神像。";
        this[1][2] = "高楼林立的纽约曼哈顿。";
        this[1][3] = "埃利斯岛。";
        this[1][4] = "自由岛。";
        this[1][5] = "乘渡轮去参观埃利斯岛和自由女神像。";
        this[1][6] = "埃利斯岛上的移民检查站大厅。";
        this[1][7] = "看泰坦尼克号船展示。";
        this[1][8] = "在埃利斯岛。";
        this[1][9] = "在埃利斯岛。";
        this[1][10] = "乘渡轮去自由女神像所在的自由岛。";
        this[1][11] = "自由女神像。";
        this[1][12] = "自由女神像。";
        this[1][13] = "自由女神像。";
        this[1][14] = "参观自由女神像博物馆。";
        this[1][15] = "参观自由女神像博物馆。";
        this[1][16] = "自由女神像脸部的的全尺寸复制品。";
        this[1][17] = "坐在自由女神像脚的全尺寸复制品上。";
    }else{
        this[1][0] = "Taking a ferry to visit the Ellis Island and the Statue of Liberty.";
        this[1][1] = "Taking a ferry to visit the Ellis Island and the Statue of Liberty.";
        this[1][2] = "Skyscrapers in Manhaton, New York.";
        this[1][3] = "Ellis Island.";
        this[1][4] = "Liberty Island.";
        this[1][5] = "Taking a ferry to visit the Ellis Island and the Statue of Liberty.";
        this[1][6] = "The Registry Room on Ellis Island.";
        this[1][7] = "Watching the Titanic display.";
        this[1][8] = "On the Ellis Island.";
        this[1][9] = "On the Ellis Island.";
        this[1][10] = "Taking a ferry to the Liberty Island.";
        this[1][11] = "Statute of Liberty.";
        this[1][12] = "Statute of Liberty.";
        this[1][13] = "Statute of Liberty.";
        this[1][14] = "Visiting the Statute of Liberty Museum.";
        this[1][15] = "Visiting the Statute of Liberty Museum.";
        this[1][16] = "A full scale face replica of the Statute of Liberty.";
        this[1][17] = "Sitting on a full scale replica of the foot of the Statute of Liberty.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
