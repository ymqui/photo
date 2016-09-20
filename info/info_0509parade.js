<!--
//Created by Album Builder Program Mon Sep 05 23:44:25 2005
var info_url   = "http://www.gaithersburgmd.gov/";
var title      = "Gaithersburg 2005 Labor Day Parade";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0509parade/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MagicTravels.mid";
var midi_cr    = new Array("Dolphin's Dream","http://d21c.com/dolphinsdream/quietude.html");
 
if(window.usechinese){
    title      = "盖城2005年劳动节游行";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<54;i++){
        this[0][i] = "0509parade__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "盖城老市区。";
        this[1][1] = "盖城老市区。";
        this[1][2] = "幽默表演。";
        this[1][3] = "游行开始了。";
        this[1][4] = "盖城高中乐队。";
        this[1][5] = "开心星气球。";
        this[1][6] = "骑警。";
        this[1][7] = "美国参议员Paul Sarbanes。";
        this[1][8] = "美国众议员Chris Van Hollen。";
        this[1][9] = "游行街道。";
        this[1][10] = "争抢糖果。";
        this[1][11] = "Quince果园高中乐队。";
        this[1][12] = "Quince果园高中乐队。";
        this[1][13] = "啦啦队。";
        this[1][15] = "舞狮。";
        this[1][18] = "大蜜蜂。";
        this[1][20] = "Seneca谷高中乐队。";
        this[1][21] = "三只熊。";
        this[1][22] = "上“政”父子兵。";
        this[1][23] = "童子军。";
        this[1][24] = "小舞蹈家。";
        this[1][25] = "美国的龙。";
        this[1][26] = "小蜜蜂。";
        this[1][27] = "铜管乐队。";
        this[1][28] = "为卡特琳那飓风受灾者募捐。";
        this[1][29] = "Margruder高中乐队。";
        this[1][30] = "聚精会神。";
        this[1][31] = "老兵。";
        this[1][32] = "多姿多彩的民族舞蹈。";
        this[1][34] = "马里兰小姐。";
        this[1][36] = "西北高中乐队。";
        this[1][37] = "小鸟气球。";
        this[1][38] = "南部内战时期着装。";
        this[1][45] = "巴尔的摩市长，未来的州长候选人。";
        this[1][46] = "小马里兰小姐。";
        this[1][47] = "亚裔参政。";
        this[1][48] = "看我多神气。";
        this[1][49] = "邻居城市石头城警察。";
        this[1][50] = "老城的一家餐馆。";
        this[1][51] = "盖城老城区。";
        this[1][52] = "火车站。";
        this[1][53] = "火车站路口。";
    }else{
        this[1][0] = "Parade route - East Diamond Avenue in olde towne Gaithersburg.";
        this[1][1] = "Parade route - Cross of Summit Avenue and East Diamond Avenue in olde towne Gaithersburg.";
        this[1][2] = "Clowns entertaining the waiting crowd.";
        this[1][3] = "Labor Day Parade Banner.";
        this[1][4] = "Gaithersburg High School Marching Band.";
        this[1][5] = "Happy Star Balloon.";
        this[1][6] = "Maryland National Capital Park Police Honor Guard.";
        this[1][7] = "U.S. Senator Paul Sarbanes.";
        this[1][8] = "U.S. Representative Chris Van Hollen.";
        this[1][9] = "Parade route.";
        this[1][10] = "Kids running for candies.";
        this[1][11] = "Quince Orchard High School Marching Band.";
        this[1][12] = "Quince Orchard High School Marching Band.";
        this[1][13] = "Ultimate Spirit Athletics cheer and dance team.";
        this[1][15] = "Lion Dance.";
        this[1][16] = "Character Counts Float.";
        this[1][17] = "Costumed Character.";
        this[1][18] = "Honey Bee Balloon.";
        this[1][19] = "YMCA Adventure Princesses.";
        this[1][20] = "Seneca Valley High School Marching Band.";
        this[1][21] = "Goldilocks and Three Bears.";
        this[1][22] = "Pop and Baby politicians.";
        this[1][23] = "Cub Scout.";
        this[1][24] = "Miss Chianti's Dance School.";
        this[1][25] = "Dragon Balloon.";
        this[1][26] = "Country Buffet Bee.";
        this[1][27] = "Harmony Cornet Band.";
        this[1][29] = "Magruder High School Marching Band.";
        this[1][30] = "A girl watching the parade.";
        this[1][31] = "Korean War Veteran.";
        this[1][32] = "Alma Boliviana-Tinkus.";
        this[1][33] = "Alma Boliviana-Tinkus.";
        this[1][34] = "Miss Maryland Teen 2005.";
        this[1][36] = "Northwest High School Marching Band.";
        this[1][37] = "Toucan Balloon.";
        this[1][38] = "Sons of Confederate Veterans.";
        this[1][39] = "Anwar Temple.";
        this[1][40] = "Zoo Crew Kids.";
        this[1][41] = "Alma Boliviana Caporales.";
        this[1][42] = "Alma Boliviana Caporales.";
        this[1][43] = "Teelin Irish Dancers.";
        this[1][44] = "Brownie Troop 418.";
        this[1][45] = "Baltimore mayor Martin O'Malley.";
        this[1][46] = "Miss Maryland State Hostess Princess.";
        this[1][47] = "Josephine Wang for City Council.";
        this[1][48] = "United Horsemen.";
        this[1][49] = "Rockville Police.";
        this[1][50] = "Summit Station Restaurant & Brewery.";
        this[1][51] = "Olde Towne Gaithersburg.";
        this[1][52] = "Summit Station.";
        this[1][53] = "Railroad Crossing.";
    }
    makeface = new Array();
    makeface[0] = 25;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
