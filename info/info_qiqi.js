<!--
//Created by Album Builder Program Mon Nov 14 22:05:07 2005
var info_url   = "";
var title      = "Qiqi's Photo";
var dir        = maindir+"pics/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "StrangeLandsPeople.mid";
var midi_cr    = new Array("Mfiles","http://www.mfiles.co.uk/midi-files.htm");
var pagelist   = [["nannan","Nannan's Photos","楠楠的照片"],["pipi","Pipi's Photos","皮皮的照片"]];

if(window.usechinese){
    title      = "琦琦的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    let rose = [0,0]
    i = 0;
    this[0][i]   = ["0410picnic/0410picnic_3","200410"];
    this[1][i++] = (["Dongxiao Forest Park, Longyan, Fujian","福建龙岩东肖森林公园"])[cn_ind];
    this[0][i]   = ["other/200501_qiqi_1","200501"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩天马山公园"])[cn_ind];
    this[0][i]   = ["other/200501_qiqi_2","200501"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩天马山公园"])[cn_ind];
    this[0][i]   = ["other/200502_qiqi","200502"];
    this[1][i++] = (["Spring Festival, Longyan, Fujian","春节，福建龙岩"])[cn_ind];
    this[0][i]   = ["other/200504_qiqi","200504"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["0505zhangping/0505zhangping__13","200505"];
    this[1][i++] = (["Jiupengxi, Zhangping, Fujian","福建漳平九鹏溪"])[cn_ind];
    this[0][i]   = ["0507tongbo/0507tongbo_10","200507"];
    this[1][i++] = (["Tongbo, Longyan, Fujian","福建龙岩铜钵村美水库"])[cn_ind];
    this[0][i]   = ["0510xiamen/0510xiamen_42","200510"];
    this[1][i++] = (["Gulangyu, Xiamen, Fujian","福建厦门鼓浪屿"])[cn_ind];
    this[0][i]   = "[0511mum/0511mum_8","200511"];
    this[1][i++] = (["Zhongshan Park, Longyan, Fujian","福建龙岩中山公园"])[cn_ind];
    this[0][i]   = ["other/200601_qiqi","200601"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["0605qiqi/0605qiqi_5","200605"];
    this[1][i++] = (["9th Birthday, Longyan, Fujian","9岁生日，福建龙岩"])[cn_ind];
    this[0][i]   = ["other/200702_qiqi","200702"];
    this[1][i++] = (["Zhongshan Park, Longyan, Fujian","福建龙岩中山公园"])[cn_ind];
    this[0][i]   = ["0712family/0712family_5","200712"];
    this[1][i++] = (["Songtao Elementary School, Longyan, Fujian","福建龙岩松涛小学"])[cn_ind];
    this[0][i]   = ["0712family/0712family_37","200712"];
    this[1][i++] = (["Children's Palace, Longyan, Fujian","福建龙岩青少年宫"])[cn_ind];
    this[0][i]   = ["other/200807_qiqi","200807"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["other/201103_qiqi","201103"];
    this[1][i++] = (["Longyan, Fujian","福建龙岩"])[cn_ind];
    this[0][i]   = ["other/201202_qiqi","201202"];
    this[1][i++] = (["Yongfu Tea Plantation, Zhangping, Fujian","福建漳平永福茶园"])[cn_ind];
    this[0][i]   = ["other/201906_Qiqi_1","other/201906_Qiqi_2","201906"];
    this[1][i++] = (["Xiamen University, Xiamen, Fujian","大学毕业了，福建厦门大学"])[cn_ind];
    rose[0]      = i;
    this[0][i]   = "other/20240923_Qiqi_1";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼, 福建龙岩"])[cn_ind];
    this[0][i]   = ["other/20240923_Qiqi_2","other/20240923_Qiqi_3"];
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼, 福建龙岩"])[cn_ind];
    this[0][i]   = "other/20240923_Qiqi_4";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼, 福建龙岩"])[cn_ind];
    this[0][i]   = "other/20240923_Qiqi_5";
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼, 福建龙岩"])[cn_ind];
    rose[1]      = i;
    this[0][i]   = ["other/20240923_Qiqi_6","other/20240923_Qiqi_7"];
    this[1][i++] = (["Wedding, Longyan, Fujian","婚礼, 福建龙岩"])[cn_ind];

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