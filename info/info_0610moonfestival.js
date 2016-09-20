<!--
//Created by Album Builder Program Wed Oct 11 01:50:09 2006
var info_url   = "http://dolphin.upenn.edu/~cssap1/index.html";
var title      = "U Penn Mid-autumn Festival Gala Evening";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0610moonfestival/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AngelOfTheMorning.mid";
var midi_cr    = new Array("Moonfairye","http://www.moonfairye.com/midicollection/midi2.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "费城学侨界2006中秋联欢晚会";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<57;i++){
        this[0][i] = "0610moonfestival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][2] = "DJ。";
        this[1][4] = "主持人。";
        this[1][7] = "舞蹈：谁不说俺家乡好。";
        this[1][8] = "清唱。";
        this[1][9] = "儿童舞蹈：小白鸽。演员：Hellen Wu。";
        this[1][10] = "主持人。";
        this[1][11] = "戏曲联唱。";
        this[1][12] = "戏曲联唱。";
        this[1][13] = "朗诵：<<项链>>";
        this[1][14] = "抽奖。";
        this[1][15] = "舞蹈：雨的旋律。";
        this[1][16] = "舞蹈：雨的旋律。";
        this[1][17] = "舞蹈：雨的旋律。";
        this[1][18] = "Yuling Sun讲羊肉串的故事。";
        this[1][19] = "时装表演。";
        this[1][20] = "时装表演。";
        this[1][21] = "时装表演。";
        this[1][22] = "时装表演。";
        this[1][23] = "时装表演。";
        this[1][24] = "时装表演。";
        this[1][25] = "时装表演。";
        this[1][26] = "时装表演。";
        this[1][27] = "时装表演。";
        this[1][28] = "时装表演。";
        this[1][29] = "时装表演。";
        this[1][30] = "时装表演。";
        this[1][31] = "时装表演。";
        this[1][32] = "时装表演。";
        this[1][33] = "古筝：边疆舞曲，表演者：Catherine Tsai。";
        this[1][34] = "舞蹈。";
        this[1][35] = "京剧：玉堂春三堂会审，表演者：Youping Fang。";
        this[1][36] = "太极表演：陈式太极，表演者：Jiangbin Ye。";
        this[1][37] = "又一轮抽奖。";
        this[1][38] = "歌曲联唱。";
        this[1][39] = "歌曲联唱。";
        this[1][40] = "朗诵：水调歌头，表演者：Changchun Zhang。";
        this[1][41] = "舞蹈：月光下的凤尾竹。";
        this[1][44] = "女主持人。";
        this[1][45] = "艺术体操：二泉映月，表演者：Bonnie。";
        this[1][50] = "摇滚乐队：溟火。";
        this[1][56] = "全体演职员谢幕。";
    }else{
        this[1][2] = "DJ.";
        this[1][4] = "Hosts.";
        this[1][7] = "Dance: My Homeland.";
        this[1][8] = "Acappella.";
        this[1][9] = "Child Dance: Dove. By Hellen Wu.";
        this[1][10] = "Host.";
        this[1][11] = "Opera.";
        this[1][12] = "Opera.";
        this[1][13] = "Recitation: Necklace.";
        this[1][14] = "Raffle.";
        this[1][15] = "Dance: Rhythm of the Falling Rain.";
        this[1][16] = "Dance performed by Pan-Asian Dance Troupe.";
        this[1][18] = "Story by Yuling Sun.";
        this[1][19] = "Fashion show.";
        this[1][20] = "Fashion show.";
        this[1][21] = "Fashion show.";
        this[1][22] = "Fashion show.";
        this[1][23] = "Fashion show.";
        this[1][24] = "Fashion show.";
        this[1][25] = "Fashion show.";
        this[1][26] = "Fashion show.";
        this[1][27] = "Fashion show.";
        this[1][28] = "Fashion show.";
        this[1][29] = "Fashion show.";
        this[1][30] = "Fashion show.";
        this[1][31] = "Fashion show.";
        this[1][32] = "Fashion show.";
        this[1][33] = "Gu Zheng by Catherine Tsai.";
        this[1][34] = "Dance by Pan-Asian Dance Troupe.";
        this[1][35] = "Peking Opera by Youping Fang.";
        this[1][36] = "Tai Chi by Jiangbin Ye.";
        this[1][37] = "Raffle.";
        this[1][38] = "Singing.";
        this[1][39] = "Singing.";
        this[1][40] = "Poem Recitation by Changchun Zhang.";
        this[1][41] = "Dance: Bamboo under the Moonlight.";
        this[1][44] = "Hostess.";
        this[1][45] = "Art Gymnastics by Bonnie: Er Quan Ying Yue.";
        this[1][50] = "Rock Band: Mindfire.";
        this[1][56] = "The End.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
