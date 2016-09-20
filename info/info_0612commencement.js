<!--
//Created by Album Builder Program Sun Dec 24 00:58:34 2006
var info_url   = "http://www.commencement.umd.edu/gallery/";
var title      = "Huigang at 2006 UMD Commencement";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0612commencement/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Ipanema.mid";
var midi_cr    = new Array("Midi Collection","http://www.jadierose.com/midicollection.html");
var blocksave  = false;
 
if(window.usechinese){
    title      = "汇钢的博士毕业典礼";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<45;i++){
        this[0][i] = "0612commencement_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "汇钢父母和小韵在等待毕业典礼的开始。";
        this[1][3] = "小米乖乖地睡着。";
        this[1][5] = "汇钢。";
        this[1][7] = "教务长发言。";
        this[1][8] = "特邀嘉宾发言。";
        this[1][14] = "汇钢朝家人方向望去。";
        this[1][15] = "陈爸爸妈妈向儿子挥手。";
        this[1][16] = "陈博士。";
        this[1][19] = "陈博士一家。";
        this[1][21] = "和导师合影。";
        this[1][25] = "和同学合影。";
        this[1][30] = "父母多自豪呀。";
        this[1][32] = "一家子今天真高兴。";
    }else{
        this[1][0] = "Yun and Huigang's parents.";
        this[1][3] = "Xiao Mi slept through the commencement.";
        this[1][5] = "Huigang.";
        this[1][7] = "The Dean.";
        this[1][8] = "Invited speaker.";
        this[1][14] = "Huigang looking at family members in the audience.";
        this[1][15] = "Excited parents.";
        this[1][16] = "Dr. Chen.";
        this[1][21] = "Huigang and his advisor.";
        this[1][25] = "With classmate.";
        this[1][30] = "With proud parents.";
        this[1][32] = "With wife and daughter.";
        this[1][35] = "Yuanzhen, Qing, and Xiao Mi.";
        this[1][37] = "Yun, Huigang, Xiao Mi, Tiebing, and Yufeng.";
        this[1][42] = "Tiebing and Huigang.";
        this[1][44] = "Congratulations!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
