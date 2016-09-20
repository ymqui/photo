<!--
//Created by Album Builder Program Thu Jul 27 22:25:47 2006
var info_url   = "http://www.mykonosgrill.com/CONTACT.asp";
var title      = "Tatiana's Dinner Party";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0607dinner/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "EyesOfLove.mid";
var midi_cr    = new Array("The Boss's Midi Favorites","http://www.afcsat.com/midi_fav.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "送别晚餐";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0607dinner_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
    }else{
        this[1][0] = "Mykonos Grill restaurant.";
        this[1][1] = "Gianluca and Tatiana.";
        this[1][3] = "Tatiana and Mylene.";
        this[1][4] = "Jing and Vicky.";
        this[1][5] = "Georg, Jason, and William.";
        this[1][6] = "William.";
        this[1][7] = "Larry and Antonio.";
        this[1][8] = "Mylene.";
        this[1][9] = "Tatiana.";
        this[1][10] = "Antonio and Dee.";
        this[1][11] = "Jason.";
        this[1][12] = "Toast for Tatiana.";
        this[1][13] = "Gianluca and Tatiana.";
        this[1][15] = "Tatiana, wish you the best in HMI.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
