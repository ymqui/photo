<!--
//Created by Album Builder Program Sun Mar 12 16:35:14 2006
var info_url   = "http://www.marylandorchids.org/annual_show.html";
var title      = "Maryland Orchid Society's Annual Spring Show";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0603orchid/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BodyAndSoul.mid";
var midi_cr    = new Array("Just Jazz","http://www.geocities.com/BourbonStreet/1114/justjaz2.htm");
 
if(window.usechinese){
    title      = "马里兰兰花协会的兰花展";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素, 300D相机, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<62;i++){
        this[0][i] = "0603orchid_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "展台。";
        this[1][1] = "麻栗坡兜兰。";
        this[1][2] = "活火托鞋兰。";
        this[1][3] = "硬叶兜兰。";
        this[1][4] = "杂交托鞋兰。";
        this[1][5] = "苹果大师兜兰。";
        this[1][6] = "查里先生兜兰。";
        this[1][7] = "展翅雄鹰兜兰。";
        this[1][8] = "华丽拖鞋兰。";
        this[1][9] = "华丽拖鞋兰。";
        this[1][10] = "贝尔皇家兜兰。";
        this[1][11] = "夜影兜兰。";
        this[1][12] = "夜豹兜兰。";
        this[1][13] = "腾飞凤凰拖鞋兰。";
        this[1][14] = "唐.温伯拖鞋兰。";
        this[1][15] = "杂交兜兰。";
        this[1][21] = "黄穗兰。";
        this[1][25] = "三色雪利宝贝钩瓣兰。";
        this[1][26] = "嘉年华盛装钩瓣兰。";
        this[1][28] = "花蜘蛛兰。";
        this[1][29] = "雪利宝贝钩瓣兰。";
        this[1][30] = "酷酷钩瓣兰。";
        this[1][31] = "'J&L'钩瓣兰。";
        this[1][34] = "蝴蝶兰。";
        this[1][35] = "杂交蝴蝶兰。";
        this[1][39] = "微笑蝴蝶兰。";
        this[1][40] = "珍珠蝴蝶兰。";
        this[1][41] = "沉睡巨人蝴蝶兰。";
        this[1][42] = "仙南兜之火蝴蝶兰。";
        this[1][43] = "公主樱桃蝴蝶兰。";
        this[1][44] = "奇奇鬼怪蝴蝶兰。";
        this[1][45] = "杂交蝴蝶兰。";
        this[1][46] = "蝴蝶兰。";
        this[1][47] = "金色太阳蝴蝶兰。";
        this[1][48] = "杂交蝴蝶兰。";
        this[1][49] = "姬蝴蝶兰。"
        this[1][50] = "卡珊德拉蝴蝶兰。"
        this[1][51] = "杂交蝴蝶兰。";
        this[1][52] = "杂交蝴蝶兰。";
        this[1][53] = "荷兰小姐蝴蝶兰。";
        this[1][54] = "金桃蝴蝶兰。";
        this[1][55] = "万花筒蝴蝶兰。";
        this[1][56] = "杂交五唇蝴蝶兰。";
        this[1][57] = "杂交五唇蝴蝶兰。";
        this[1][58] = "杂交五唇蝴蝶兰。";
        this[1][59] = "杂交铜天使-马格利特马司德娃利亚兰。";
        this[1][61] = "杂交星兰。";
    }else{
        this[1][0] = "Orchid display.";
        this[1][1] = "Paph Malipoense.";
        this[1][2] = "Phrag Living Fire.";
        this[1][3] = "Paph Micranthum.";
        this[1][4] = "Phrag La Rosiere x Phrag Robert Palm.";
        this[1][5] = "Paph Apple Master 'Cerritos'.";
        this[1][6] = "Paph Mr. Charlie 'Sphere'.";
        this[1][7] = "Paph Invincible 'Spread Eagle'.";
        this[1][8] = "Phrag Grande.";
        this[1][9] = "Phrag Grande.";
        this[1][10] = "Paph Bel Royal.";
        this[1][11] = "Paph Night Shadow 'Blackout'.";
        this[1][12] = "Paph Night Leopard 'King'.";
        this[1][13] = "Phrag Jason Fisher 'Phoenix Rising'.";
        this[1][14] = "Phrag Don Wimber.";
        this[1][15] = "Paph Sandra Mary 'Empire' x Paph Venustum.";
        this[1][16] = "Var Latifolia 'Harford'.";
        this[1][21] = "Dendrochilum Cobbianum.";
        this[1][25] = "Onc Sharry Baby 'Tricolor'.";
        this[1][26] = "Onc Carnival Costume.";
        this[1][28] = "Ren Bella.";
        this[1][29] = "Onc Sharry Baby.";
        this[1][30] = "Onc Kukoo.";
        this[1][31] = "Onc Viperinum 'J&L'.";
        this[1][34] = "Phal Yu Pin Lover.";
        this[1][35] = "Phal Taisuco Bright x Phal Equestris.";
        this[1][39] = "Phal Taisuco Smile.";
        this[1][40] = "Phal Taisuco Pearl.";
        this[1][41] = "Phal Sleeping Giant.";
        this[1][42] = "Phal Shenandoah Fire.";
        this[1][43] = "Phal Princess Cherry.";
        this[1][44] = "Phal 'Kiekie Monster'.";
        this[1][45] = "Phal Jordan's Pixie 'Sweetheart' x Phal Zumas.";
        this[1][46] = "Phal Hilolip 'Cheryl Oliff'.";
        this[1][47] = "Phal Golden Sun.";
        this[1][48] = "Phal Golden Bells x Phal Pink Fusion.";
        this[1][49] = "Phal Equestris 'Hana Nguyen'.";
        this[1][50] = "Phal Cassandra.";
        this[1][51] = "Phal Taisuco FireBird x Phal Leopard Punco.";
        this[1][52] = "Phal Taisuco FireBird x Phal Leopard Punco.";
        this[1][53] = "Phal Dutch Lady.";
        this[1][54] = "Phal Brother Sara Gold 'Peach'.";
        this[1][55] = "Phal Baldwin's Kaleidoscope.";
        this[1][56] = "Dtps Paddington 'Brendon'.";
        this[1][57] = "Dtps I-Hsin Black Jack 'Montclair'.";
        this[1][58] = "Dtps Chain Xen Pearl 'Raspberry Delight'.";
        this[1][59] = "Masd Copper Angel x Masd Marguerite.";
        this[1][61] = "Epi Sun Valley x Epi Pacific Vista.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
