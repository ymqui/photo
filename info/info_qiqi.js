<!--
//Created by Album Builder Program Mon Nov 14 22:05:07 2005
var info_url   = "";
var title      = (["Qiqi's Photo","琦琦的照片"])[cn_ind];
var dir        = maindir+"pics/other/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StoryOfMyLife.mid";
var midi_cr    = new Array("Piano It All","http://www.pianoitall.com");
var addrose    = new Array();
var addbday    = new Array();
var pagelist   = [["0410picnic","10/2004 Barbecuing at Forest Park","10/2004 森林公园烧烤"],["0505zhangping","5/2005 Visiting Zhangping","5/2005 游漳平"],
                  ["0507tongbo","7/2005 Visiting Tongbo","7/2005 游铜钵"],["0511mum","11/2005 Chrysanthemums in Zhongshan Park","11/2005 中山公园赏菊"],
                  ["0605qiqi","5/2006 9th Birthday","5/2006 9岁生日"],["0510xiamen","10/2005 Visting Xiamen","10/2005 国庆游厦门"],
                  ["0712family","12/2007 Family Photos","12/2007 家人照片"],["nannan","Nannan's Photos","楠楠的照片"],["pipi","Pipi's Photos","皮皮的照片"]];
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]   = ["0410picnic/0410picnic_3","20041002"];
    this[1][i++] = pagelink("0410picnic",(["Barbecuing at Dongxiao Forest Park, Longyan, Fujian","在福建龙岩东肖森林公园烧烤"])[cn_ind]);
    this[0][i]   = ["200501_qiqi_1","20050121"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩天马山公园"])[cn_ind];
    this[0][i]   = ["200501_qiqi_2","20050121"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩天马山公园"])[cn_ind];
    this[0][i]   = ["200502_qiqi","20050207"];
    this[1][i++] = (["Spring Festival, Longyan, Fujian","春节，福建龙岩"])[cn_ind];
    this[0][i]   = ["200504_qiqi","20050403"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["0505zhangping/0505zhangping__13","20050502"];
    this[1][i++] = pagelink("0505zhangping",(["Visiting Jiupengxi, Zhangping, Fujian","游福建漳平九鹏溪"])[cn_ind]);
    this[0][i]   = ["0507tongbo/0507tongbo_10","20050717"];
    this[1][i++] = pagelink("0507tongbo",(["Visiting Tongbo, Longyan, Fujian","游福建龙岩铜钵村美水库"])[cn_ind]);
    this[0][i]   = ["0510xiamen/0510xiamen_42","200510"];
    this[1][i++] = pagelink("0510xiamen",(["Visiting Gulangyu, Xiamen, Fujian","国庆游福建厦门鼓浪屿"])[cn_ind]);
    this[0][i]   = ["0511mum/0511mum_8","200511"];
    this[1][i++] = pagelink("0511mum",(["Visiting Zhongshan Park, Longyan, Fujian","福建龙岩中山公园赏菊"])[cn_ind]);
    this[0][i]   = ["200601_qiqi","20060131"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    addbday.push(i);
    this[0][i]   = ["0605qiqi/0605qiqi_5","20060514"];
    this[1][i++] = pagelink("0605qiqi",(["9th Birthday, Longyan, Fujian","9岁生日，福建龙岩"])[cn_ind]);
    this[0][i]   = ["200702_qiqi","20070223"];
    this[1][i++] = (["Zhongshan Park, Longyan, Fujian","福建龙岩中山公园"])[cn_ind];
    this[0][i]   = ["0712family/0712family_5","20071219"];
    this[1][i++] = pagelink("0712family",(["Songtao Elementary School, Longyan, Fujian","福建龙岩松涛小学"])[cn_ind]);
    this[0][i]   = ["0712family/0712family_37","20071229"];
    this[1][i++] = pagelink("0712family",(["Children's Palace, Longyan, Fujian","福建龙岩青少年宫"])[cn_ind]);
    this[0][i]   = ["200807_qiqi","20080717"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["201103_qiqi","20110326"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["201202_qiqi","20120212"];
    this[1][i++] = (["Yongfu Tea Plantation, Zhangping, Fujian","福建漳平永福茶园"])[cn_ind];
    this[0][i]   = ["201906_Qiqi_1","201906_Qiqi_2"];
    this[1][i++] = (["Xiamen University, Xiamen, Fujian","大学毕业了，福建厦门大学"])[cn_ind];
    addrose.push(i);
    this[0][i]   = "20240923_Qiqi_1";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];
    addrose.push(i);
    this[0][i]   = ["20240923_Qiqi_2","20240923_Qiqi_3"];
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];
    addrose.push(i);
    this[0][i]   = "20240923_Qiqi_4";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];
    addrose.push(i);
    this[0][i]   = "20240923_Qiqi_5";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];
    addrose.push(i);
    this[0][i]   = ["20240923_Qiqi_6","20240923_Qiqi_7"];
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];

    adddate(this);
}
 
//web counter info
var sc_project=13166693;
var sc_invisible=1;
var sc_security="ed762a8c";
//-->