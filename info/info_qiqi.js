<!--
//Created by Album Builder Program Mon Nov 14 22:05:07 2005
var info_url   = "";
var title      = (["Qiqi's Photo","琦琦的照片"])[cn_ind];
var dir        = maindir+"pics/other/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StrangeLandsPeople.mid";
var midi_cr    = new Array("Mfiles","http://www.mfiles.co.uk/midi-files.htm");
var pagelist   = [["0410picnic","10/2004 Barbecuing at Dongxiao Forest Park","10/2004 龙岩东肖森林公园烧烤"],["0505zhangping","5/2005 Visiting Zhangping","5/2005 游漳平"],
                  ["0507tongbo","7/2005 Visiting Tongbo","7/2005 游铜钵"],["0511mum","11/2005 Chrysanthemums in Zhongshan Park","11/2005 中山公园赏菊"],
                  ["0605qiqi","5/2006 9th Birthday","5/2006 9岁生日"],["0510xiamen","10/2005 Visting Xiamen","10/2005 国庆游厦门"],
                  ["0712family","12/2007 Family Photos","12/2007 家人照片"],["nannan","Nannan's Photos","楠楠的照片"],["pipi","Pipi's Photos","皮皮的照片"]];
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    let rose = [0,0]
    i = 0;
    this[0][i]   = ["0410picnic/0410picnic_3","200410"];
    this[1][i++] = pagelink("0410picnic",(["Barbecuing at Dongxiao Forest Park, Longyan, Fujian","在福建龙岩东肖森林公园烧烤"])[cn_ind]);
    this[0][i]   = ["200501_qiqi_1","200501"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩天马山公园"])[cn_ind];
    this[0][i]   = ["200501_qiqi_2","200501"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩天马山公园"])[cn_ind];
    this[0][i]   = ["200502_qiqi","200502"];
    this[1][i++] = (["Spring Festival, Longyan, Fujian","春节，福建龙岩"])[cn_ind];
    this[0][i]   = ["200504_qiqi";
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["0505zhangping/0505zhangping__13","200505"];
    this[1][i++] = pagelink("0505zhangping",(["Visiting Jiupengxi, Zhangping, Fujian","游福建漳平九鹏溪"])[cn_ind]);
    this[0][i]   = ["0507tongbo/0507tongbo_10","200507"];
    this[1][i++] = pagelink("0507tongbo",(["Visiting Tongbo, Longyan, Fujian","游福建龙岩铜钵村美水库"])[cn_ind]);
    this[0][i]   = ["0510xiamen/0510xiamen_42","200510"];
    this[1][i++] = pagelink("0510xiamen",(["Visiting Gulangyu, Xiamen, Fujian","国庆游福建厦门鼓浪屿"])[cn_ind]);
    this[0][i]   = ["0511mum/0511mum_8","200511"];
    this[1][i++] = pagelink("0511mum",(["Visiting Zhongshan Park, Longyan, Fujian","福建龙岩中山公园赏菊"])[cn_ind]);
    this[0][i]   = "200601_qiqi";
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["0605qiqi/0605qiqi_5","200605"];
    this[1][i++] = pagelink("0605qiqi",(["9th Birthday, Longyan, Fujian","9岁生日，福建龙岩"])[cn_ind]);
    this[0][i]   = "200702_qiqi";
    this[1][i++] = (["Zhongshan Park, Longyan, Fujian","福建龙岩中山公园"])[cn_ind];
    this[0][i]   = ["0712family/0712family_5","200712"];
    this[1][i++] = pagelink("0712family",(["Songtao Elementary School, Longyan, Fujian","福建龙岩松涛小学"])[cn_ind]);
    this[0][i]   = ["0712family/0712family_37","200712"];
    this[1][i++] = pagelink("0712family",(["Children's Palace, Longyan, Fujian","福建龙岩青少年宫"])[cn_ind]);
    this[0][i]   = "200807_qiqi";
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = "201103_qiqi";
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = "201202_qiqi";
    this[1][i++] = (["Yongfu Tea Plantation, Zhangping, Fujian","福建漳平永福茶园"])[cn_ind];
    this[0][i]   = ["201906_Qiqi_1","201906_Qiqi_2"];
    this[1][i++] = (["Xiamen University, Xiamen, Fujian","大学毕业了，福建厦门大学"])[cn_ind];
    rose[0]      = i;
    this[0][i]   = "20240923_Qiqi_1";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];
    this[0][i]   = ["20240923_Qiqi_2","20240923_Qiqi_3"];
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];
    this[0][i]   = "20240923_Qiqi_4";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];
    this[0][i]   = "20240923_Qiqi_5";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];
    rose[1]      = i;
    this[0][i]   = ["20240923_Qiqi_6","20240923_Qiqi_7"];
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼，福建龙岩"])[cn_ind];

    adddate(this);
    
    for (let j=rose[0];j<=rose[1];j++){
        this[1][j] = this[1][j]+'<br><center><img src="'+thumb_dir+'rose.gif" style="border:0px"></img></center>';
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->