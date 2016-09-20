<!--
//Created by Album Builder Program Sun Mar 02 10:45:19 2008
var info_url   = "";
var title      = "Beijing";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0802beijing/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "IAskForPeace.mid";
var midi_cr    = new Array("Haunting Melodies","http://www.amaranthpublishing.com/haunting.htm");
 
if(window.usechinese){
    title      = "我眼中的北京";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<25;i++){
        this[0][i] = "0802beijing_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "北京胡同。";
        this[1][1] = "胡同里的三轮车。";
        this[1][2] = "藏族女孩。";
        this[1][3] = "吹出来的糖猪。";
        this[1][4] = "遛狗的男子。";
        this[1][6] = "胡同里挂着的鸟笼。";
        this[1][7] = "胡同里兜售卫生纸的小贩。";
        this[1][8] = "三轮车。";
        this[1][9] = "打牌的三轮车夫。";
        this[1][10] = "冰面上的父女。";
        this[1][11] = "溜冰的男子。";
        this[1][12] = "溜冰的小女孩。";
        this[1][13] = "午后的什刹海。";
        this[1][14] = "胡同。";
        this[1][15] = "骑自行车的年轻人。";
        this[1][16] = "胡同里放焰火的孩子。";
        this[1][17] = "长安街。";
        this[1][18] = "天安门前的卫士。";
        this[1][19] = "紫禁城外。";
        this[1][21] = "故宫大门。";
        this[1][23] = "北京除夕。";
        this[1][24] = "地坛庙会。";
    }else{
        this[1][0] = "A Beijing alley.";
        this[1][1] = "Pedicabs for tourists in the alley.";
        this[1][2] = "A Tibetan girl.";
        this[1][3] = "Pig blown from boiled sugar.";
        this[1][4] = "A man walking his dog.";
        this[1][5] = "A woman walking in the alley.";
        this[1][6] = "Bird cage.";
        this[1][7] = "A toilet paper peddler in the alley.";
        this[1][8] = "Pedicabs.";
        this[1][9] = "Pedicab drivers playing poker game.";
        this[1][10] = "A dad dragging his daughter on the frozen pond.";
        this[1][11] = "A man skating.";
        this[1][12] = "A girl skating.";
        this[1][13] = "Frozen Shi Cha Hai in the afternoon sun.";
        this[1][14] = "An alley.";
        this[1][15] = "A young man riding a bike.";
        this[1][16] = "Children lighting fireworks in the alley.";
        this[1][17] = "Chang An Street in front of the Forbidden City.";
        this[1][18] = "A guard.";
        this[1][19] = "Sidewalks outside the Forbidden City.";
        this[1][21] = "Gate to the Forbidden City.";
        this[1][23] = "New year's eve in Beijing.";
        this[1][24] = "Di Tan Temple Fair.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
