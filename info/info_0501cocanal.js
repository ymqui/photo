<!--
//Created by Album Builder Program Sun Jan 16 20:35:51 2005
var info_url   = "http://www.nps.gov/choh/index.htm";
var title      = "C&O Canal";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0501cocanal/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Gigue.mid";
var midi_cr    = new Array("John Kwasnik","http://members.accessbee.com/jkwasnik/midfiles.html");
//Gigue in A minor. 
 
if(window.usechinese){
    title      = "C&O 运河";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0501canal_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "C&O 运河，靠近Swains闸门。";
        this[1][1] = "苍鹭。";
        this[1][2] = "运河。";
        this[1][3] = "运河。";
        this[1][4] = "枯藤，老树。。。";
        this[1][5] = "野鸭。";
        this[1][6] = "大瀑布。波多马各河在此有较大的落差。";
        this[1][7] = "大瀑布。对面是维吉尼亚州。";
        this[1][8] = "湍流。";
        this[1][9] = "大瀑布游客中心。";
        this[1][10] = "运河边的树林。";
        this[1][11] = "运河小道，原来是给骡子拉船用的，现在成了锻炼的好地方。";
        this[1][12] = "波多马各河。";
        this[1][13] = "运河雪景，在Pennyfield闸门。";
        this[1][14] = "运河雪景。";
        this[1][15] = "运河雪景。";
    }else{
        this[1][0] = "C&O Canal, near Swains lock.";
        this[1][1] = "A resting great blue heron.";
        this[1][2] = "C&O canal towpath between Pennyfield lock and Violettes lock .";
        this[1][3] = "C&O Canal, near Swains lock.";
        this[1][4] = "Vying for the sky.";
        this[1][5] = "Mallards.";
        this[1][6] = "Great Falls in the Potomac river.";
        this[1][7] = "A helicopter hovering over the river.";
        this[1][8] = "Great Falls, Maryland side.";
        this[1][9] = "Great Falls Tavern visitor center.";
        this[1][10] = "Canal.";
        this[1][11] = "Canal and towpath between Swains lock and Great Falls.";
        this[1][12] = "Potomac River.";
        this[1][13] = "First snow in Pennyfield lock.";
        this[1][14] = "Canal and towpath between Pennyfield lock and Swains lock.";
        this[1][15] = "Frozen canal at Pennyfield lock.";
    }
}

//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
