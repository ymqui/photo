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
 
if(window.usechinese){
    title      = "琦琦的照片";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]   = "0410picnic/0410picnic_3";
    this[1][i++] = "10/2004 Dongxiao Forest Park, Longyan, Fujian";
    this[0][i]   = "other/200501_qiqi_1";
    this[1][i++] = "1/2005 Longyan, Fujian";
    this[0][i]   = "other/200501_qiqi_2";
    this[1][i++] = "1/2005 Longyan, Fujian";
    this[0][i]   = "other/200502_qiqi";
    this[1][i++] = "2/2005 Spring Festival, Longyan, Fujian";
    this[0][i]   = "other/200504_qiqi";
    this[1][i++] = "4/2005 Longyan, Fujian";
    this[0][i]   = "0505zhangping/0505zhangping__13";
    this[1][i++] = "5/2005 Jiupengxi, Zhangping, Fujian";
    this[0][i]   = "0507tongbo/0507tongbo_10";
    this[1][i++] = "7/2005 Tongbo, Longyan, Fujian";
    this[0][i]   = "0510xiamen/0510xiamen_42";
    this[1][i++] = "10/2005 Gulangyu, Xiamen, Fujian";
    this[0][i]   = "0511mum/0511mum_8";
    this[1][i++] = "11/2005 Zhongshan Park, Longyan, Fujian";
    this[0][i]   = "other/200601_qiqi";
    this[1][i++] = "1/2006 Longyan, Fujian";
    this[0][i]   = "0605qiqi/0605qiqi_5";
    this[1][i++] = "5/2006 Birthday, Longyan, Fujian";
    this[0][i]   = "other/200702_qiqi";
    this[1][i++] = "2/2007 Zhongshan Park, Longyan, Fujian";
    this[0][i]   = "0712family/0712family_5";
    this[1][i++] = "12/2007 Songtao Elementary School, Longyan, Fujian";
    this[0][i]   = "0712family/0712family_37";
    this[1][i++] = "12/2007 Children's Palace, Longyan, Fujian";
    this[0][i]   = "other/200807_qiqi";
    this[1][i++] = "7/2008 Longyan, Fujian";
    this[0][i]   = "other/201103_qiqi";
    this[1][i++] = "3/2011 Longyan, Fujian";
    this[0][i]   = "other/201202_qiqi";
    this[1][i++] = "2/2012 Yongfu Tea Plantation, Zhangping, Fujian";
    if(window.usechinese){
        i = 0;
        this[1][i++] = "10/2004 福建龙岩东肖森林公园";
        this[1][i++] = "1/2005 福建龙岩天马山公园";
        this[1][i++] = "1/2005 福建龙岩天马山公园";
        this[1][i++] = "2/2005 春节，福建龙岩";
        this[1][i++] = "4/2005 福建龙岩";
        this[1][i++] = "5/2005 福建漳平九鹏溪";
        this[1][i++] = "7/2005 福建龙岩铜钵村美水库";
        this[1][i++] = "10/2005 福建厦门鼓浪屿";
        this[1][i++] = "11/2005 福建龙岩中山公园";
        this[1][i++] = "1/2006 福建龙岩";
        this[1][i++] = "5/2006 9岁生日，福建龙岩";
        this[1][i++] = "2/2007 福建龙岩中山公园";
        this[1][i++] = "12/2007 福建龙岩松涛小学";
        this[1][i++] = "12/2007 福建龙岩青少年宫";
        this[1][i++] = "7/2008 福建龙岩";
        this[1][i++] = "3/2011 福建龙岩";
	this[1][i++] = "2/2012 福建漳平永福茶园";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->