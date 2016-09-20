<!--
//Created by Album Builder Program Sat Jan 17 11:41:15 2015
var info_url   = "";
var title      = "Puerto Rican Eats";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1501preats/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AllForLove.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "吃在波多黎各";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<25;i++){
        this[0][i] = "1501preats_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "林孔的沉船酒吧餐馆。";
        this[1][1] = "鲷鱼三明治。";
        this[1][2] = "金枪鱼卷。";
        this[1][3] = "庞塞的皮托海鲜餐馆。";
        this[1][5] = "箱鲀鱼馅饼。";
        this[1][6] = "各种开胃菜。";
        this[1][7] = "烧烤海鲜。";
        this[1][8] = "法哈多的加油站餐馆。这里原来是个加油站。";
        this[1][10] = "烤猪肉串。这里周末的烤全猪特别好吃。";
        this[1][11] = "烤虾串。";
        this[1][12] = "加勒比鸡翅。";
        this[1][13] = "烤箭鱼。";
        this[1][14] = "老圣胡安的El Punto餐馆。";
        this[1][16] = "水果冰沙。";
        this[1][17] = "烤牛肉条。";
        this[1][18] = "油炸全红鲷鱼。";
        this[1][19] = "圣胡安谢拉顿酒店的选择餐馆。";
        this[1][20] = "柠檬橙汁拌金枪鱼。";
        this[1][21] = "柠檬橙汁拌金枪鱼。";
        this[1][22] = "鸭肉丝。";
        this[1][23] = "煎饺。";
        this[1][24] = "鳄梨沙司。";
    }else{
        this[1][0] = "Shipwreck Bar & Grill in Rincon.";
        this[1][1] = "Snapper sandwich.";
        this[1][2] = "Asian tuna wrap.";
        this[1][3] = "Pito's Seafood Cafe & Restaurant in Ponce.";
        this[1][5] = "Empanadillas de Chapin: trunkfish turnovers.";
        this[1][6] = "Appetizer sampler.";
        this[1][7] = "Parrillada de Mariscos: seafood from the grill.";
        this[1][8] = "La Estacion restaurant in Fajardo.";
        this[1][10] = "Pork loin pinchos.";
        this[1][11] = "Jumbo shrimp pinchos.";
        this[1][12] = "Caribbean chicken wings.";
        this[1][13] = "Swordfish steak.";
        this[1][14] = "Cafe El Punto in Old San Juan.";
        this[1][16] = "Fruit smoothie.";
        this[1][17] = "Skirt steak.";
        this[1][18] = "Whole fried red snapper.";
        this[1][19] = "Choices restaurant in San Juan Sheraton.";
        this[1][20] = "Tuna ceviche.";
        this[1][21] = "Tuna ceviche.";
        this[1][22] = "Duck ropa vieja.";
        this[1][23] = "Guavate dumpling.";
        this[1][24] = "Avocado salsa with Aji dusted chips.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
