<!--
//Created by Album Builder Program Thu Feb 25 22:04:50 2010
var info_url   = "http://reigakusha.com/";
var title      = "Sukeyasu Shiba's Gagaku Universe";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/1002gagaku/";
//var dir        = csdpdir+"pics/1002gagaku/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "FukuJuSo.mid";
var midi_cr    = new Array("	Tom Potter","	http://daisyfield.com/music/japan.htm");
 
if(window.usechinese){
    title      = "芝祐靖的伶乐舍表演的日本雅乐";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<5;i++){
        this[0][i] = "1002gagaku_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "伶乐舍创始人芝祐靖的龙笛表演。";
        this[1][1] = "伶乐舍的表演。";
        this[1][3] = "随乐起舞。";
    }else{
        this[1][0] = "Sukeyasu Shiba playing a ryuteki.";
        this[1][1] = "Performance by the Reigakusha ensemble.";
        this[1][3] = "Gagaku ensemble and dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
