<!--
//Created by Album Builder Program Sat Aug 24 09:54:09 2013
var info_url   = "http://www.kintaro4649.net/";
var title      = "Kintaro Japanese Restaurant";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1308kintaro/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MakeMePure.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "金太郎日本餐馆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<6;i++){
        this[0][i] = "1308kintaro_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "金太郎地处华盛顿的乔治镇。";
        this[1][1] = "酱汤拉面。";
        this[1][3] = "烤鰤鱼颈。肉鲜美多汁。";
        this[1][4] = "寿司。鱼很新鲜。三文鱼入口即化。";
    }else{
        this[1][0] = "Kintaro is located in Gerogetown.";
        this[1][1] = "Shoyu ramen.";
        this[1][3] = "Buri Kama: grilled yellowtail collar. The meat is juicy and delicious.";
        this[1][4] = "Assorted sushi. Fish is very fresh. The salmon literally melts in your mouth.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
