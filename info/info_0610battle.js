<!--
//Created by Album Builder Program Sun Oct 22 22:07:42 2006
var info_url   = "http://www.cedarcreekbattlefield.org/reenact/";
var title      = "The 142nd Anniversary Reenactment of the Battle of Cedar Creek";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0610battle/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Somebody.mid";
var midi_cr    = new Array("Moonfairye","http://www.moonfairye.com/midicollection/midi2.htm");
 
if(window.usechinese){
    title      = "内战再演";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<38;i++){
        this[0][i] = "0610battle_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "兵营。";
        this[1][2] = "操练。";
        this[1][3] = "操练。";
        this[1][5] = "操练。";
        this[1][6] = "金色童年。";
        this[1][7] = "操练。";
        this[1][8] = "操练。";
        this[1][9] = "操练。";
        this[1][10] = "操练。";
        this[1][12] = "小憩。";
        this[1][14] = "骑兵演习。";
        this[1][15] = "演习中的步兵。";
        this[1][16] = "演习中的步兵。";
        this[1][17] = "演习中的步兵。";
        this[1][18] = "骑兵演习。";
        this[1][19] = "骑兵演习。";
        this[1][20] = "骑兵演习。";
        this[1][22] = "炮兵操练。";
        this[1][26] = "正式上演内战时的第三温切斯特战役。雪松溪战役重演第二天进行。";
        this[1][28] = "左边是南部联盟军，右边是北方联军。";
        this[1][37] = "最后是北军得胜。";
    }else{
        this[1][0] = "Camp.";
        this[1][2] = "Battalion drills.";
        this[1][3] = "Battalion drills.";
        this[1][5] = "Battalion drills.";
        this[1][7] = "Battalion drills.";
        this[1][8] = "Battalion drills.";
        this[1][9] = "Battalion drills.";
        this[1][10] = "Battalion drills.";
        this[1][12] = "Rest.";
        this[1][14] = "Cavalry demonstration.";
        this[1][15] = "Cavalry demonstration.";
        this[1][16] = "Cavalry demonstration.";
        this[1][17] = "Cavalry demonstration.";
        this[1][18] = "Cavalry demonstration.";
        this[1][19] = "Cavalry demonstration.";
        this[1][20] = "Cavalry demonstration.";
        this[1][22] = "Artillery demonstration.";
        this[1][26] = "Start of the battle of third Winchester. Reenactment of the battle of Cedar Creek is on the next day.";
        this[1][28] = "On the left are the Confederate soldiers; the Union are on the right.";
        this[1][37] = "The Union won the battle at the end.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
