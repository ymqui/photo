<!--
//Created by Album Builder Program Sun Jul 08 18:28:52 2007
var info_url   = "http://www.cowtownrodeo.com/";
var title      = "Cowtown Rodeo";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0707rodeo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Thai_Konjai.mid";
var midi_cr    = new Array("Thai Song MIDI","http://www2.neweb.ne.jp/wc/kyanara/thaimidi.html");
 
if(window.usechinese){
    title      = "牛镇马术竞赛会";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<35;i++){
        this[0][i] = "0707rodeo_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "开场唱国歌。";
        this[1][1] = "骑牛比赛。";
        this[1][2] = "得骑满8秒，否则不算，按牛和骑手的表现打分。";
        this[1][3] = "牛肚上绑的绳子使牛更加暴躁。";
        this[1][12] = "沮丧的牛仔。";
        this[1][13] = "摔小牛比赛。";
        this[1][16] = "当地的摄影师Susie。";
        this[1][17] = "德州牛仔Jack Fullbright表演一些小把戏。";
        this[1][19] = "骑光背马比赛，马肚子上照例勒了东西。";
        this[1][21] = "看你还敢不敢骑我！";
        this[1][22] = "套小牛比赛。";
        this[1][28] = "双人套牛，一个套头，一个套脚。";
        this[1][32] = "女牛仔骑马绕桶比赛。得绕三个桶，看谁最快。";
        this[1][33] = "最后的冲刺。";
    }else{
        this[1][0] = "The rodeo starts with the national anthem.";
        this[1][1] = "Bull riding.";
        this[1][3] = "The rope tied at the belly helps to anger the bull.";
        this[1][12] = "A frustrated cowboy.";
        this[1][13] = "Steer wrestling.";
        this[1][16] = "Local photographer Susie.";
        this[1][17] = "Jack Fullbright from Texas.";
        this[1][19] = "Bareback riding.";
        this[1][22] = "Tie down roping.";
        this[1][28] = "Team roping.";
        this[1][32] = "Cowgirl barrel racing.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
