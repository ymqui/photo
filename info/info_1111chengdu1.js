<!--
//Created by Album Builder Program Mon Nov 14 22:05:09 2011
var info_url   = "http://www.chengdu1.com/";
var title      = "Chengdu 1";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1111chengdu1/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BlasphemousRumours.mid";
var midi_cr    = new Array("Cool Midi","http://www.cool-midi.com/");
 
if(window.usechinese){
    title      = "成都一品";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<10;i++){
        this[0][i] = "1111chengdu1_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "免费小菜。";
        this[1][1] = "芋头煎饼。";
        this[1][2] = "麻辣小笼包。";
        this[1][3] = "川味鸭。";
        this[1][4] = "火爆腰花。";
        this[1][5] = "蒜苗腊肉。";
        this[1][6] = "蒜苗香肠。";
        this[1][7] = "香辣蟹。";
        this[1][8] = "成都干烧鱼。";
        this[1][9] = "蒜炒青菜。";
    }else{
        this[1][0] = "Free appetizer: pickled broccoli stem.";
        this[1][1] = "Sweet Taro Pancake.";
        this[1][2] = "Hot & Spicy Meat Bun.";
        this[1][3] = "Spicy Duck.";
        this[1][4] = "Stir Fried Pig's Kidney.";
        this[1][5] = "Sauteed Cured Pork with Leeks.";
        this[1][6] = "Sauteed Homemade Sausage with Leeks.";
        this[1][7] = "Hot & Spicy Crab.";
        this[1][8] = "Chengdu Braised Whole Fish.";
        this[1][9] = "Sauteed Vegetable with Garlic.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
