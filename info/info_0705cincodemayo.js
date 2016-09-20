<!--
//Created by Album Builder Program Sun May 06 20:00:17 2007
var info_url   = "http://www.marumontero.com/cinco.htm";
var title      = "2007 National Cinco de Mayo Festival";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0705cincodemayo/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MexicanGirl.mid";
var midi_cr    = new Array("Moose Midi","http://www.aelgviskare.net/midi/midi.htm/");
 
if(window.usechinese){
    title      = "2007墨西哥五月五节";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<44;i++){
        this[0][i] = "0705cincodemayo_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Cinco de Mayo(西班牙语五月五)是纪念1862年在Puebla战役中墨西哥人打败法国人。";
        this[1][1] = "这个节日在美国比在墨西哥还隆重，主要是为了褒扬墨西哥文化。";
    }else{
        this[1][0] = "Cinco de Mayo("+'"The Fifth of May"'+" in Spanish) is a holiday commemorating the victory <br>of Mexican force over French in the battle of Puebla on May 5, 1862.";
        this[1][1] = "Cinco de Mayo is widely celebrated in the United States to recognize the Mexican heritage of many immigrants.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
