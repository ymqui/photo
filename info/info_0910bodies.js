<!--
//Created by Album Builder Program Sun Oct 04 15:49:46 2009
var info_url   = "http://www.velocitydc.org/index.php/artists/bodies-startpoint/";
var title      = "Bodies in Urban Spaces";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0910bodies/";
//var dir        = csdpdir+"pics/0910bodies/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ColorsOfTheWind.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "街头人体雕塑";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<33;i++){
        this[0][i] = "0910bodies_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "城市人体雕塑是由奥地利艺术家Willi Dorner创造设计的。";
        this[1][1] = "在一个小时的时间里，舞蹈演员们在华盛顿市区搭出好多新奇的人体雕塑。";
        this[1][32] = "很成功的表演。";
    }else{
        this[1][0] = '"Bodies in Urban Spaces"'+" is designed and choreographed by Austrian art director Willi Dorner.";
        this[1][1] = "In an hour of time, the dancers formed human sculptures all over downtown DC.";
        this[1][32] = "Well done!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
