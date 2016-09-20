<!--
//Created by Album Builder Program Thu Sep 10 23:21:04 2009
var info_url   = "";
var title      = "894 Xiamen Reunion";
var cam_img    = "";
var dir        = maindir+"pics/0908reunion/";
//var dir        = csdpdir+"pics/0908reunion/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MakeTheWorldGoAway.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "龙岩二中89届四班毕业二十周年厦门聚会";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<32;i++){
        this[0][i] = "0908reunion_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
    }else{
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
