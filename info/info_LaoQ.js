<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "";
var title      = (["LaoQ birding","老Q拍鸟"])[cn_ind];
var dir        = maindir+"pics/LaoQ/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
var last2first = true;
document.title = title;
var tmpDate    = new Date();    //current date
var statDate   = tmpDate.toISOString();
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]    = "20150105_HumacaoNR";
    this[1][i++]  = (["Humacao Nature Preserve, Puerto Rico, USA","美国波多黎各乌马考自然保护区"])[cn_ind];
    this[0][i]    = "20160424_ChimneyRockSP";
    this[1][i++]  = (["Chimney Rock State Park, North Carolina, USA","美国北卡罗来纳州烟囱岩州立公园"])[cn_ind];
    this[0][i]    = "20181205_ArenalLodge";
    this[1][i++]  = (["Arenal Observatory Lodge, Alajuela, Costa Rica","哥斯达黎加阿拉胡埃拉省阿雷纳火山观测台山林小屋"])[cn_ind];
    this[0][i]    = "20201228_HuntleyMeadows";
    this[1][i++]  = (["Huntley Meadows Park, Virginia, USA","美国弗吉尼亚州亨特利湿地公园"])[cn_ind];
    this[0][i]    = "20210516_VABirding";
    this[1][i++]  = (["Cub Run Stream Valley Park, Virginia, USA","美国弗吉尼亚州熊崽溪谷公园"])[cn_ind];
    this[0][i]    = "20220430_KeyWest;
    this[1][i++]  = (["Key West, Florida, USA","美国佛罗里达州西礁岛"])[cn_ind];

   
    adddate(this);
}

//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->