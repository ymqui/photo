<!--
//Created by Album Builder Program Sat Aug 08 22:22:18 2009
var info_url   = "";
var title      = "A Place Called Home";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0908house/";
//var dir        = csdpdir+"pics/0908house/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "CanIHaveThisDance.mid";
var midi_cr    = new Array("Jerry","http://wilstar.com/jukebox.htm");
 
if(window.usechinese){
    title      = "温馨的家";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<30;i++){
        this[0][i] = "0908house_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "房子正面。";
        this[1][1] = "厨房的凸窗。";
        this[1][2] = "门。";
        this[1][3] = "厨房的凸窗。";
        this[1][4] = "厨房。";
        this[1][5] = "厨房。";
        this[1][6] = "电磁炉和烤箱。";
        this[1][7] = "冰箱。";
        this[1][8] = "起居室和门廊。";
        this[1][9] = "起居室。";
        this[1][10] = "房子后的露天平台。";
        this[1][11] = "房子后面。";
        this[1][12] = "卧室一。";
        this[1][13] = "卧室一。";
        this[1][14] = "卧室二。";
        this[1][15] = "卧室二。";
        this[1][16] = "主卧室。";
        this[1][17] = "主卧室。";
        this[1][18] = "主卧室里的衣橱。";
        this[1][19] = "主卧室的卫生间。";
        this[1][20] = "有壁炉的起居室。";
        this[1][21] = "卧室三。";
        this[1][22] = "卧室三。";
        this[1][23] = "卫生间。";
        this[1][24] = "杂物间里的洗衣机和烘干机。";
        this[1][25] = "杂物间里的热水器和空调通气管。";
        this[1][26] = "房子侧面。";
        this[1][27] = "后院。";
        this[1][28] = "后院。";
        this[1][29] = "房子对面的小学。";
    }else{
        this[1][0] = "Front of the house.";
        this[1][1] = "Kitchen bay window.";
        this[1][2] = "Door.";
        this[1][3] = "Kitchen bay window.";
        this[1][4] = "Kitchen.";
        this[1][5] = "Kitchen.";
        this[1][6] = "Electric stove.";
        this[1][7] = "Refrigerator.";
        this[1][8] = "Living room and foyer.";
        this[1][9] = "Living room.";
        this[1][10] = "Deck.";
        this[1][11] = "Back of the house.";
        this[1][12] = "Bedroom one.";
        this[1][13] = "Bedroom one.";
        this[1][14] = "Bedroom two.";
        this[1][15] = "Bedroom two.";
        this[1][16] = "Master bedroom.";
        this[1][17] = "Master bedroom.";
        this[1][18] = "Walk-in closet in the master bedroom.";
        this[1][19] = "Bathroom.";
        this[1][20] = "Family room.";
        this[1][21] = "Bedroom three.";
        this[1][22] = "Bedroom three.";
        this[1][23] = "Bathroom.";
        this[1][24] = "Washer and dryer in the utility room.";
        this[1][25] = "Water heater and air-conditioning duct in the utility room.";
        this[1][27] = "Backyard and deck.";
        this[1][28] = "Backyard.";
        this[1][29] = "An elementary school right across the street from the house.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
