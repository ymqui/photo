<!--
//Created by Album Builder Program Fri Dec 09 20:32:13 2005
var info_url   = "http://www.nps.gov/anti/index.htm";
var title      = "Snow";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0512snow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "Cavatina.mid";
var midi_cr    = new Array("Midi Files","http://www.ic.sunysb.edu/Staff/ejohnfel/midi/");
 
if(window.usechinese){
    title      = "雪景";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<22;i++){
        this[0][i] = "0512snow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "昨晚的雪有5-6厘米厚。";
        this[1][1] = "草坪和邻居的屋顶上都披上了一层雪。";
        this[1][2] = "雪后的天特蓝。";
        this[1][3] = "天很冷。";
        this[1][4] = "不时还刮起大风。";
        this[1][5] = "枝头上的果实更红了。";
        this[1][6] = "成熟了依然留恋枝头。";
        this[1][7] = "寒冬里依然充满了生机。";
        this[1][8] = "杉树上的雪结成了冰。";
        this[1][9] = "阳光透射过枝头上的冰。";
        this[1][10] = "安提坦内战战场占地12平方英里。";
        this[1][11] = "1862年9月17日在这进行的战役，美国南北双方死伤达23,110人。";
        this[1][12] = "现在的小孩是很难体会当时血淋淋的场景。";
        this[1][13] = "古战场上现在遍布各式的纪念碑。";
        this[1][14] = "枪炮早已沉寂。";
        this[1][15] = "观望台默默地守卫着这片布满创伤的田野。";
        this[1][16] = "普通居民的坟场。";
        this[1][17] = "内战士兵的一排排坟墓。";
        this[1][18] = "小炮成了历史最好的见证。";
        this[1][19] = "坡顶的游客中心。";
        this[1][20] = "游客中心。";
        this[1][21] = "排炮。";
    }else{
        this[1][0] = "About two inches of snow accumulated during last night's snow.";
        this[1][1] = "The roof of neighbor's house is covered with snow.";
        this[1][2] = "The sky is briskly clean after the snow.";
        this[1][3] = "The air is cold and dry.";
        this[1][4] = "Sometimes a gust of wind sweeps through the snow field.";
        this[1][5] = "The color of dogwood berrys are even more brilliant after the snow.";
        this[1][7] = "Winter is not the end;  new buds are waiting to burgeon in the coming spring.";
        this[1][8] = "Snow turns into ice in the fir branches.";
        this[1][9] = "Sunlight shines through the ice and needles.";
        this[1][10] = "The battle fought at Antietam on 9/17/1862 was the bloodiest in the civil war.";
        this[1][11] = "Federal losses were 12,410, Confederate losses 10,700.";
        this[1][12] = "Emmanuel no longer feels the dreadful human sacrifice of the war.";
        this[1][13] = "Many monuments like this one were erected in the battlefield.";
        this[1][14] = "Cannons are still scattered in the corn field.";
        this[1][15] = "The observation tower stands guard of this haunted ground.";
        this[1][16] = "The nearby mountain view cemetery.";
        this[1][17] = "The remains of 4,776 Federal soldiers are buried in the Antietam National Cemetery.";
        this[1][18] = "Silent witness of the bloody battle.";
        this[1][19] = "Visitor center.";
        this[1][20] = "Visitor center.";
        this[1][21] = "Battlefield.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
