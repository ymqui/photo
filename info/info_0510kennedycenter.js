<!--
//Created by Album Builder Program Sun Oct 02 12:32:06 2005
var info_url   = "http://www.kennedy-center.org/";
var title      = "The Festival of China in Kennedy Center";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0510kennedycenter/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "ChineseMelody.mid";
var midi_cr    = new Array("Midi Chateau","http://www.geocities.com/Nashville/Rodeo/7463/abc.html");
var whitebackground = true;
 
if(window.usechinese){
    title      = "肯尼迪中心中国文化节";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<32;i++){
        this[0][i] = "0510kennedycenter__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "华盛顿的肯尼迪中心在十月份举办中国文化节。";
        this[1][1] = "这期间有各种各样的表演和展览。";
        this[1][2] = "肯尼迪中心外的波多马各河上十一晚将有焰火表演。";
        this[1][3] = '"迷人的北京"'+"摄影展。";
        this[1][4] = "秦始皇兵马俑。";
        this[1][5] = "秦始皇兵马俑。";
        this[1][6] = "与肯尼迪中心一街之隔的水门宾馆。";
        this[1][7] = "仿北京庙会。";
        this[1][8] = "现场表演的扎中国结。";
        this[1][9] = "空竹示范。";
        this[1][10] = "中心内的肯尼迪头像。";
        this[1][11] = "等待舞狮表演的人群。可惜舞狮不让拍照。";
        this[1][12] = "夜幕下的喷水池。";
        this[1][13] = "灯火通明的波多马各河。";
        this[1][14] = "由拖船上燃放的焰火。";
        this[1][15] = "焰火。";
        this[1][16] = "焰火。";
        this[1][17] = "焰火。";
        this[1][18] = "焰火。";
        this[1][19] = "焰火。";
        this[1][20] = "艺术家蔡国强设计的焰火表演，看看象不象龙卷风。可惜曝光过渡了。";
        this[1][21] = "好友。";
        this[1][23] = "好友。";
        this[1][24] = "好友。下面的精彩照片是他们拍的。所用的相机是佳能A95。";
        this[1][25] = "焰火。";
        this[1][26] = "焰火。";
        this[1][27] = "焰火。";
        this[1][28] = "焰火。";
        this[1][29] = "焰火。";
        this[1][30] = "焰火。";
        this[1][31] = "焰火。国庆快乐！";
    }else{
        this[1][0] = "The Kennedy Center in Washington DC is hosting the Festival of China.";
        this[1][1] = "Performances, exhibitions, and other events are held throughout October.";
        this[1][2] = "Potomac river is the stage for tonight's fireworks show.";
        this[1][3] = "Charming Beijing: Photographs of the Chinese Capital.";
        this[1][4] = "The Terra Cotta Warriors of the Emperor Qin Shihuang.";
        this[1][5] = "The Terra Cotta Warriors.";
        this[1][6] = "The nearby Watergate hotel.";
        this[1][7] = '"Enjoy Beijing"'+" open air marketplace.";
        this[1][8] = "A folk artist demonstrates how to make a Chinese knot.";
        this[1][9] = "Diabolo performance.";
        this[1][10] = "John F. Kennedy bust in the Kennedy Center.";
        this[1][11] = "A thronging crowd waiting for the lion dance performance at the Millennium Stage.";
        this[1][12] = "A fountain outside the Kennedy Center.";
        this[1][13] = "Potomac river.";
        this[1][14] = "Fireworks on the Potomac river.";
        this[1][15] = "Fireworks on the Potomac river.";
        this[1][16] = "Fireworks on the Potomac river.";
        this[1][17] = "Fireworks on the Potomac river.";
        this[1][18] = "Fireworks on the Potomac river.";
        this[1][19] = "Fireworks on the Potomac river.";
        this[1][20] = '"Tornado"'+", orchestrated by artist Cai Guo-Qiang, is the climax of tonight's fireworks show.";
        this[1][21] = "My friends.";
        this[1][22] = "My friends and I.";
        this[1][23] = "My friends.";
        this[1][24] = "My friends.The photos from here on are shot by them with a Canon A95 camera.";
        this[1][25] = "Fireworks on the Potomac river.";
        this[1][26] = "Fireworks on the Potomac river.";
        this[1][27] = "Fireworks on the Potomac river.";
        this[1][28] = "Fireworks on the Potomac river.";
        this[1][29] = "Fireworks on the Potomac river.";
        this[1][30] = "Fireworks on the Potomac river.";
        this[1][31] = "Fireworks. Happy 56th National Day!";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
