<!--
//Created by Album Builder Program Tue Jun 12 23:54:02 2007
var info_url   = "http://www.capitalpride.org/";
var title      = "2007 DC Capital Pride Parade";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0706capitalpride/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "16Miles.mid";
var midi_cr    = new Array("Moose Midi","http://www.aelgviskare.net/midi/midi.htm");
 
if(window.usechinese){
    title      = "华盛顿2007同性恋大游行";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<52;i++){
        this[0][i] = "0706capitalpride_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "游行吸引了众多观众。";
        this[1][1] = "游行美其名曰“首都的骄傲”。";
        this[1][2] = "惠特曼诊所在治疗艾滋病患者方面做了不少实事。";
        this[1][4] = "“我爱我的爸爸和爸爸。”";
        this[1][5] = "“我爱我的爸爸们。”";
        this[1][7] = "一家三口来游行。";
        this[1][8] = "市长。";
        this[1][10] = "民主党比较支持同性恋者，希拉里也派了幅画像来游行。";
        this[1][15] = "SMYAL是个青少年同性恋关怀组织。";
        this[1][27] = "水手清凉装。";
        this[1][44] = "牧师。";
        this[1][45] = "教会的旗子。";
        this[1][46] = "“不要相信谎言，上帝确实是爱你的。”";
    }else{
        this[1][0] = "The parade attracts quite a large crowd.";
        this[1][8] = "DC Mayor Adrian Fenty.";
        this[1][15] = "SMYAL - Sexual Minority Youth Assistance League";
        this[1][44] = "Priests.";
    }
    makeface = new Array();
    makeface[0] = 29;
    makeface[1] = 49;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
