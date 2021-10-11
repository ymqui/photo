<!--
//Created by Album Builder Program Sun Oct 10 20:27:29 2021
var info_url   = "https://longwoodgardens.org/";
var title      = "Longwood Gardens";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2110longwood/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr  = new Array("","");
var blocksave  = false;
var showall    = /showall/.test(window.location.search.substring(1));;
var cn_ind     = window.usechinese?1:0;
if (showall){
   homeurl     = homeurl+"showphoto.html?qiuqiu";
}
 
if(window.usechinese){
    title      = "游览长木公园";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    if (showall){
       for (var i=0;i<52;i++){
           this[0][i] = "2110longwood_"+(i+1).toString();
           this[1][i] = "";
       }
       i = 0;
       this[1][i++]  = (["Nathan and James in front of the pumpkin display.","球球和James哥哥在南瓜展前。"])[cn_ind];
       this[1][i++]  = (["Maomao and Houzi.","毛毛和候子。"])[cn_ind];
       this[1][i++]  = (["Nathan playing in the tree house.","球球在树屋里吹喇叭。"])[cn_ind];
       this[1][i++]  = (["James playing in the tree house.","James在树屋里吹喇叭。"])[cn_ind];
       this[1][i++]  = (["Nathan and James.","球球和James哥哥。"])[cn_ind];
       this[1][i++]  = (["Nathan and James.","球球和James哥哥。"])[cn_ind];
       this[1][i++]  = (["Tree house.","树屋。"])[cn_ind];
       this[1][i++]  = (["James up on the tree house.","James在树屋上。"])[cn_ind];
       this[1][i++]  = (["Maomao.","毛毛。"])[cn_ind];
       this[1][i++]  = (["Nathan.","球球。"])[cn_ind];
       this[1][i++]  = (["Nathan and James watching the garden railway.","球球和James哥哥看小火车。"])[cn_ind];
       this[1][i++]  = (["Nathan and James watching the garden railway.","球球和James哥哥看小火车。"])[cn_ind];
       this[1][i++]  = (["Nathan and James watching the garden railway.","球球和James哥哥看小火车。"])[cn_ind];
       this[1][i++]  = (["James and Nathan playing with pine needles.","球球和James哥哥玩落叶。"])[cn_ind];
       this[1][i++]  = (["Nathan playing with water toys.","球球玩水。"])[cn_ind];
       this[1][i++]  = (["Nathan and James brushing the wall with water.","球球和James哥哥在墙上刷水。"])[cn_ind];
       this[1][i++]  = (["Maomao and Houzi.","毛毛和候子。"])[cn_ind];
       this[1][i++]  = (["Nathan ringing the bell.","球球敲钟。"])[cn_ind];
       this[1][i++]  = (["Nathan and James.","球球和James哥哥。"])[cn_ind];
    }else{
       for (var i=0;i<33;i++){
           this[0][i] = "2110longwood_"+(i+20).toString();
           this[1][i] = "";
       }
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
if (showall){
   sc_project   = 9592725;
   sc_invisible = 1;
   sc_security  = "8084e75a";
}
//-->
