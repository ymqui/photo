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
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    i = 0;
    this[0][i]    = "20150105_HumacaoNR";
    this[1][i++]  = (["Humacao Nature Preserve, Puerto Rico, USA","美国波多黎各乌马考自然保护区"])[cn_ind];
    this[0][i]    = "20160424_ChimneyRockSP";
    this[1][i++]  = (["Chimney Rock State Park, North Carolina, USA","美国北卡罗来纳州烟囱岩州立公园"])[cn_ind];
    this[0][i]    = "20201228_HuntleyMeadows";
    this[1][i++]  = (["Huntley Meadows Park, Virginia, USA","美国弗吉尼亚州亨特利湿地公园"])[cn_ind];
    this[0][i]    = ["LaoQ/Stat","202101"];
    this[1][i++]  = (["Stats","统计图"])[cn_ind];

   
    for (var i=0;i<this[0].length;i++){
        if (this[0][i].constructor != Array){ 
           this[1][i] = getdate(this[0][i],this[1][i]);
        }else{
           this[1][i] = getdate(this[0][i][1],this[1][i]);
           this[0][i] = "../"+this[0][i][0];
        }
    }  
}

//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->