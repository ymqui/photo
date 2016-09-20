<!--
//Created by Album Builder Program Sat May 20 22:21:24 2006
var info_url   = "http://www.baltimore.org/baltimore_inner_harbor.htm";
var title      = "Baltimore Inner Harbor";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0605innerharbor/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ComunqueBella.mid";
var midi_cr    = new Array("Midi All The Best","http://midiallthebest.50webs.com/");
 
if(window.usechinese){
    title      = "巴尔的摩内港夜景";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<13;i++){
        this[0][i] = "0605innerharbor_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "街头表演。";
        this[1][1] = "街头表演。";
        this[1][2] = "街头表演。";
        this[1][3] = "街头表演。";
        this[1][4] = "一艘海岸警卫队的船在内港巡逻。";
        this[1][5] = "内港。";
        this[1][6] = "内港水面。";
        this[1][7] = "内港水面。";
        this[1][8] = "内港水面。";
        this[1][9] = "今晚的热气球是用来庆祝明天的Preakness赛马。";
        this[1][10] = "巴尔的摩的高楼。";
        this[1][11] = "内港夜空。";
        this[1][12] = "内港里拴船的木桩。";
    }else{
        this[1][0] = "Street performance.";
        this[1][1] = "Street performance.";
        this[1][2] = "Street performance.";
        this[1][3] = "Street performance.";
        this[1][4] = "A costal guard boat patrolling the inner harbor";
        this[1][5] = "Inner harbor.";
        this[1][6] = "Inner harbor.";
        this[1][7] = "Inner harbor.";
        this[1][8] = "Inner harbor.";
        this[1][9] = "The balloons are here for the celebration of the next day's Preakness horse race.";
        this[1][10] = "Inner harbor and the downtown skyline.";
        this[1][11] = "Inner harbor.";
        this[1][12] = "Inner harbor.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
