<!--
//Created by Album Builder Program Sun Apr 10 00:49:31 2005
var info_url   = "http://www.nationalcherryblossomfestival.org/";
var title      = "2005 National Cherry Blossom Festival Parade";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0504sakura/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Endless.mid";       //midi file name
var midi_cr    = new Array("Ted","http://www.tedscho.com/midi.html/");
 
if(window.usechinese){
    title      = "2005樱花节游行";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<74;i++){
        this[0][i] = "0504sakura__"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "杰佛逊纪念馆。沿着这个小湖边上种满了樱桃树。";
        this[1][1] = "华盛顿纪念碑。";
        this[1][3] = "游行开始了。";
        this[1][11] = "米老鼠是今年游行的总指挥。";
        this[1][12] = "卡通人物阿瑟。";
        this[1][17] = "加菲猫。";
        this[1][43] = "横穿马路被警察当场围住。";
        this[1][68] = "“给我们照一张好吗？”";
    }else{
        this[1][0] = "Jefferson Memorial along the Tidal Basin.";
        this[1][1] = "Washington Monument.";
        this[1][3] = "Parade started.";
        this[1][6] = "Best view on  daddy's shoulder.";
        this[1][11] = "Mickey Mouse is this year's Grand Marshal.";
        this[1][12] = "Flying Arthur.";
        this[1][13] = "Marching band from Eastern High.";
        this[1][17] = "Garfield the cat.";
        this[1][18] = "Hello Kitty from Sanrio.";
        this[1][19] = "Hello Kitty.";
        this[1][20] = "Brookfield East High School marching band from Brookfield, Wisconsin.";
        this[1][22] = '"Hey, you."';
        this[1][23] = '"Hi."';
        this[1][25] = "Cherry Blossom Queens.";
        this[1][28] = "Severna Park High School marching band.";
        this[1][29] = "The Pride of Newark marching band from Newark, Ohio.";
        this[1][34] = "Bob the builder.";
        this[1][35] = "Bob the builder.";
        this[1][43] = "Jaywalking caught in action.";
        this[1][58] = "Tamagawa University taiko drummers.";
        this[1][68] = '"Would you like to take a picture of us?"';
    }
    makeface = new Array();
    makeface[0] = 43;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
