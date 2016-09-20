<!--
//Created by Album Builder Program Tue Apr 04 20:00:18 2006
var info_url   = "http://www.nps.gov/colo/";
var title      = "Jamestown: the First English Colonization in North America";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0604jamestown/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BlackOrpheus.mid";
var midi_cr    = new Array("Just Jazz","http://www.geocities.com/BourbonStreet/1114/justjaz2.htm");
 
if(window.usechinese){
    title      = "詹姆士镇：英国在北美的第一个殖民地";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<14;i++){
        this[0][i] = "0604jamestown_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "詹姆士镇殖民地博物馆。1607年，由船长约翰.史密斯带领的104人在此建立了第一个北美殖民地。";
        this[1][1] = "通往古镇的木桥。";
        this[1][2] = "1907年纪念詹姆士镇300周年的纪念碑。";
        this[1][3] = "教堂原址上于1907年修建的纪念教堂。";
        this[1][4] = "当地印第安部落公主的铜像。";
        this[1][5] = "船长约翰.史密斯的铜像。";
        this[1][6] = "古镇的木栅栏。";
        this[1][7] = "古镇上的老房基。";
        this[1][8] = "边上的詹姆士河。";
        this[1][9] = "废弃的老宅。";
        this[1][10] = "古镇现貌。";
        this[1][11] = "仿古的玻璃作坊。";
        this[1][12] = "仿古的玻璃作坊。";
        this[1][13] = "仿制的移民者当年乘坐的木船。";
    }else{
        this[1][0] = "Jamestown Settlement museum. In 1607, 104 colonists led by Capt. John Smith established the first settlement here.";
        this[1][1] = "Footbridge connecting the visitor center and the historic Jamestowne.";
        this[1][2] = "Tercentenary monument erected in 1907 for the 300th anniversary of Jamestown.";
        this[1][3] = "The Memorial Church stands on the ground of the original church.";
        this[1][4] = "Pocahontas statue. Pocahontas was the princess of the local Powhatan Indian tribe.";
        this[1][5] = "Captain John Smith statue.";
        this[1][6] = "Fort palisades.";
        this[1][7] = "Foundations on the old town site.";
        this[1][8] = "The nearby James River.";
        this[1][9] = "The Ambler Mansion Ruins.";
        this[1][10] = "The old town site is now scattered with trees.";
        this[1][11] = "The glasshouse, where artisans still practice the craft of 17th-century glassblowing.";
        this[1][12] = "The glasshouse.";
        this[1][13] = "Full-size replicas of the three ships that carried the settlers.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
