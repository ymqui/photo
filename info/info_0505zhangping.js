<!--
//Created by Album Builder Program Fri Jul 07 22:37:19 2006
var info_url   = "";
var title      = "Sis's trip to Zhangping";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0505zhangping/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Hawaiian.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy2.html");
 
if(window.usechinese){
    title      = "姐游漳平";
    cam_tit    = "佳能Powershot A80, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<32;i++){
        this[0][i] = "0505zhangping__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "新火车站";
        this[1][1] = "琦琦在火车站";
        this[1][2] = "我们喜欢这部车";
        this[1][3] = "琦琦爱看书";
        this[1][4] = "抱着书和爸爸在漳平的街上";
        this[1][5] = "姐夫和他开的车";
        this[1][6] = "摸到鹰嘴了";
        this[1][7] = "九鹏山地图";
        this[1][8] = "琦琦";
        this[1][9] = "石头山上有九鹏";
        this[1][11] = "进口";
        this[1][12] = "琦琦旁有个音箱";
        this[1][13] = "美女和徐霞客";
        this[1][14] = "《徐霞客游记》";
        this[1][15] = "游乐";
        this[1][16] = "大树盆景";
        this[1][17] = "美女花屋";
        this[1][18] = "茶馆";
        this[1][19] = "湖景";
        this[1][20] = "湖景";
        this[1][21] = "穿上救生衣";
        this[1][22] = "大石头地图";
        this[1][23] = "琦琦和妈妈歇息";
        this[1][24] = "茶园";
        this[1][25] = "杜鹃花开";
        this[1][26] = "采茶女";
        this[1][27] = "奏乐欢迎宾客";
        this[1][28] = "琦琦荡秋千";
        this[1][29] = "跷跷板";
        this[1][31] = "鱼儿在游戏";
    }else{
        this[1][0] = "Captions in Chinese version only.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
