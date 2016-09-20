<!--
//Created by Album Builder Program Sun Jan 30 10:33:49 2011
var info_url   = "http://www.plungemd.com/";
var title      = "2011 Maryland Polar Bear Plunge";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1101polarplunge/";
//var dir        = csdpdir+"pics/1101polarplunge/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Enigma.mid";
var midi_cr    = new Array("Jadie Rose","http://www.jadierose.com/midicollection.html");
 
if(window.usechinese){
    title      = "冬泳";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "1101polarplunge_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "切瑟匹克湾大桥。冬泳就在大桥附近的州立公园举行。";
        this[1][1] = "冬泳是为特殊奥林匹克运动会进行筹款的活动。";
    }else{
        this[1][0] = "Bay bridge seen from Sandy Point State Park, where the polar bear plunge is held.";
        this[1][1] = "The plunge is a fund rasing event benefiting the Special Olympics.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
