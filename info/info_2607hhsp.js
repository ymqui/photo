<!--
//Created by Album Builder Program Sun Jul 05 20:45:39 2026
var info_url   = "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/hocking-hills-state-park";
var title      = "Hocking Hills State Park";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2607hhsp/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
var blocksave  = false;
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "霍金山州立公园";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "2607hhsp_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "上瀑布。";
        this[1][1] = "峡谷岩壁上到处都是砂岩洞穴。";
        this[1][2] = "走过横跨“魔鬼浴缸”上方的石桥。";
        this[1][3] = "峡谷岩壁上到处都是砂岩洞穴。";
        this[1][4] = "横跨峡谷的A型框架桥。";
        this[1][5] = "老人洞，相传18世纪末曾有一位隐居者住在这里。";
        this[1][6] = "老人洞。";
        this[1][7] = "球球拍的爸爸和妈妈的照片。";
        this[1][8] = "老人洞。";
        this[1][9] = "老人洞。";
        this[1][10] = "下瀑布。";
        this[1][11] = "球球帮妈妈登上有点滑的石阶。";
        this[1][12] = "穿过在岩石中开凿出的隧道。";
        this[1][13] = "从A形桥俯瞰下方的峡谷。";
        this[1][14] = "灰岩洞，俄亥俄州最大的凹进式洞穴。";
        this[1][15] = "灰岩洞，俄亥俄州最大的凹进式洞穴。";
        this[1][16] = "灰岩洞得名于早期定居者在岩洞里发现的巨大灰烬堆。";
        this[1][17] = "在一块大石头上做劈叉动作。";
        this[1][18] = "一道瀑布悬挂在灰岩洞上方。";
        this[1][19] = "球球用嘴接水滴。";
        this[1][20] = "灰岩洞瀑布。";
        this[1][21] = "灰岩洞。";
    }else{
        this[1][0] = "Upper Falls.";
        this[1][1] = "Sandstone caves on the wall of the gorge.";
        this[1][2] = "Walking across the stone bridge over the Devil's Bathtub.";
        this[1][3] = "Sandstone caves on the wall of the gorge.";
        this[1][4] = "A-Frame Bridge over the gorge.";
        this[1][5] = "Old Man's Cave.";
        this[1][6] = "Old Man's Cave.";
        this[1][7] = "Photo of Daddy and Mommy by Nathan.";
        this[1][8] = "Old Man's Cave.";
        this[1][9] = "Old Man's Cave.";
        this[1][10] = "Lower Falls.";
        this[1][11] = "Nathan helped Mommy walk up the slippery stairs.";
        this[1][12] = "Walking through a tunnel carved in the stone.";
        this[1][13] = "The Gorge seen below the A-Frame Bridge.";
        this[1][14] = "Ash Cave, the largest recess cave in Ohio.";
        this[1][15] = "Ash Cave, the largest recess cave in Ohio.";
        this[1][16] = "Ash Cave is named after the huge pile of ashes found under the shelter by early settlers.";
        this[1][17] = "Doing a split on top of a boulder.";
        this[1][18] = "A waterfall cascading into Ash Cave.";
        this[1][19] = "Catching water drops with his mouth.";
        this[1][20] = "The waterfall at Ash Cave.";
        this[1][21] = "Ash Cave.";
    }
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
