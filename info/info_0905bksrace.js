<!--
//Created by Album Builder Program Tue May 05 22:11:45 2009
var info_url   = "http://www.kineticbaltimore.com/";
var title      = "Baltimore Kinetic Sculpture Race";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0905bksrace/";
//var dir        = csdpdir+"pics/0905bksrace/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ComeMonday.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "巴尔的摩人力雕塑赛车";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<33;i++){
        this[0][i] = "0905bksrace_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "前来参加巴尔的摩人力雕塑赛车的一位女士。";
        this[1][1] = "人力雕塑是为比赛特别设计的水陆双栖，人力推动的艺术品。";
        this[1][2] = "赛程有24公里，大部分在街道上，但得下海湾，过沙地，越烂泥。";
        this[1][4] = "马力强劲的鸭嘴兽。";
        this[1][7] = "静静的巴尔的摩港。";
        this[1][18] = "唯一翻车的。";
        this[1][21] = "过沙地。";
        this[1][23] = "过泥地。";
        this[1][28] = "这个女孩精神可嘉，不用别人帮，自己挣扎着花了10几分钟才闯过去。";
        this[1][32] = "呼！总算过来了。";
    }else{
        this[1][0] = "Each year, dozens of teams participate in the Baltimore Kinetic Sculpture Race.";
        this[1][1] = "Kinetic Sculptures are amphibious, human powered works of art custom built for the race.";
        this[1][2] = "The race is 15 miles long, mostly on pavement, but also including a trip into the Chesapeake Bay and through mud and sand.";
        this[1][4] = "Platypus won this year's People's Choice award.";
        this[1][7] = "Quiet Baltimore Harbor.";
        this[1][18] = "The only vehicle that capsized in the water race.";
        this[1][21] = "The sand obstacle.";
        this[1][23] = "The mud obstacle.";
        this[1][28] = "It took the girl quite a long time to pass the mud obstacle without any push.";
    }
    makeface = new Array();
    makeface[0] = 12;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
