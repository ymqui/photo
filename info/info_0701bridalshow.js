<!--
//Created by Album Builder Program Wed Jan 31 20:44:11 2007
var info_url   = "http://www.bridalshowcase.com/";
var title      = "2007 Bridal Show and Wedding Expo in Washington, DC";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0701bridalshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "EverythingIDo.mid";
var midi_cr    = new Array("Bryan Adams MIDI Files","http://www.midi4u.com/artists/b/bryan_adams/index.html");
 
if(window.usechinese){
    title      = "2007年华盛顿婚展";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<60;i++){
        this[0][i] = "0701bridalshow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "婚展上有各种婚姻服务的展示和服装表演。";
        this[1][3] = "服装表演前的歌手演唱。";
        this[1][4] = "一名观众上台同舞。";
        this[1][59] = "泰裔服装设计师Joy Houston。";
    }else{
        this[1][0] = "The bridal show and expo featured exhibits of wedding services and fashion shows.";
        this[1][3] = "Singing performance before the fashion show.";
        this[1][4] = "A girl in the audience joined the fun on stage.";
        this[1][59] = "Designer Joy Houston.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
