<!--
var info_url   = ["https://www.visartscenter.org/","https://dc.madscience.org/"];
var info_sep   = 0;
var title      = (["2025 Summer Camp","2025夏令营"])[cn_ind];
var dir        = maindir+"pics/2025camp/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var last2first = true;
var makeface   = new Array();
var url        = "";
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    j = 0;
    this[0][i]    = "20250618_1";
    this[1][i++]  = (["Woodworking at VisArts summer camp","VisArts夏令营的木工课"])[cn_ind];
    this[0][i]    = "20250618_2";
    this[1][i++]  = (["Making fiber arts at VisArts summer camp","在VisArts夏令营制作纤维艺术"])[cn_ind];
    this[0][i]    = "20250619_1";
    this[1][i++]  = (["Painting at VisArts summer camp","在VisArts夏令营画画"])[cn_ind];
    this[0][i]    = "20250619_2";
    this[1][i++]  = (["Making flower embroidery at VisArts summer camp","在VisArts夏令营制作花卉刺绣"])[cn_ind];
    this[0][i]    = "20250620_1";
    this[1][i++]  = (["Woodworking at VisArts summer camp","VisArts夏令营的木工课"])[cn_ind];
    this[0][i]    = "20250620_2";
    this[1][i++]  = (["Cleaning up","课后清洗"])[cn_ind];
    this[0][i]    = "20250622";
    this[1][i++]  = (["Fiber arts made at VisArts summer camp","在VisArts夏令营制作的纤维艺术"])[cn_ind];
    this[0][i]    = "20250623_1";
    this[1][i++]  = (["Making fiber arts at VisArts summer camp","在VisArts夏令营制作纤维艺术"])[cn_ind];
    this[0][i]    = "20250624_1";
    this[1][i++]  = (["Making clay figures at VisArts summer camp","在VisArts夏令营捏泥人"])[cn_ind];
    this[0][i]    = "20250625_1";
    this[1][i++]  = (["Woodworking at VisArts summer camp","VisArts夏令营的木工课"])[cn_ind];
    this[0][i]    = "20250625_2";
    this[1][i++]  = (["Making a puppet","在VisArts夏令营制作木偶"])[cn_ind];
    this[0][i]    = "20250626_1";
    this[1][i++]  = (["Making a mixed media","在VisArts夏令营制作组合艺术品"])[cn_ind];
    this[0][i]    = "20250701_1";
    this[1][i++]  = (["Making shelves in woodworking at VisArts summer camp","VisArts夏令营的木工课上制作架子"])[cn_ind];
    this[0][i]    = "20250703_1";
    this[1][i++]  = (["Woodworking at VisArts summer camp","VisArts夏令营的木工课"])[cn_ind];
    this[0][i]    = "20250707_1";
    this[1][i++]  = (["Woodworking at VisArts summer camp","VisArts夏令营的木工课"])[cn_ind];
    this[0][i]    = "20250710_1";
    this[1][i++]  = (["A painting made at VisArts summer camp","在VisArts夏令营画的画"])[cn_ind];
    info_sep      = i;    //madscience starts
    this[0][i]    = ["20250714_1","20250714_2"];
    this[1][i++]  = (["Looking a little bit disappointed at the Mad Science summer camp on the first day","第一天参加疯狂科学夏令营，看起来有点失望"])[cn_ind];


    adddate(this);
}

//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
