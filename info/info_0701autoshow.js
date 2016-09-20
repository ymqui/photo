<!--
//Created by Album Builder Program Fri Jan 26 21:18:20 2007
var info_url   = "http://www.washingtonautoshow.com/";
var title      = "2007 Washington Auto Show";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0701autoshow/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "GreenLeaves.mid";
var midi_cr    = new Array("Popular and Rock Music","http://www.gstarcher.150m.com/indexrp.htm");
 
if(window.usechinese){
    title      = "2007华盛顿车展";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<46;i++){
        this[0][i] = "0701autoshow_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "车展上的吉普试驾。";
        this[1][1] = "Jeep Rubicon。";
        this[1][2] = "Honda RDX。";
        this[1][3] = "Honda RDX。";
        this[1][4] = "Honda CRV。";
        this[1][5] = "Honda CRV。";
        this[1][6] = "Porsche。";
        this[1][7] = "Volkswagen。";
        this[1][8] = "Audi R8。";
        this[1][9] = "Mini Cooper。";
        this[1][10] = "Mini Cooper。";
        this[1][11] = "Mini Cooper。";
        this[1][12] = "BMW。";
        this[1][13] = "Lamborghini。";
        this[1][14] = "Lamborghini。";
        this[1][15] = "Lamborghini。";
        this[1][16] = "Lamborghini。";
        this[1][17] = "Bentley。";
        this[1][18] = "Ferrari。";
        this[1][19] = "Ferrari。";
        this[1][20] = "Ferrari。";
        this[1][21] = "Ferrari。";
        this[1][22] = "加长Hummer。";
        this[1][23] = "Hummer。";
        this[1][24] = "Scion。";
        this[1][25] = "Chevrolet。";
        this[1][26] = "Chevrolet Camaro。";
        this[1][27] = "Chevy Corvette。";
        this[1][28] = "Saab。";
        this[1][29] = "Pontiac Solstice。";
        this[1][30] = "Pontiac Solstice。";
        this[1][31] = "Pontiac Solstice。";
        this[1][32] = "Pontiac。";
        this[1][33] = "Land Rover。";
        this[1][34] = "Jaguar。";
        this[1][35] = "Jaguar。";
        this[1][36] = "福特氢电两用车。";
        this[1][37] = "Ford Interceptor。";
        this[1][38] = "Ford。";
        this[1][39] = "Ford。";
        this[1][40] = "Mercury。";
        this[1][41] = "Lincoln。";
        this[1][42] = "Cadillac。";
        this[1][43] = "一级方程式赛车。";
        this[1][44] = "Mercedes-Benz。";
        this[1][45] = "Lexus。";
    }else{
        this[1][0] = "Jeep Camp.";
        this[1][1] = "Jeep Rubicon.";
        this[1][2] = "Honda RDX.";
        this[1][3] = "Honda RDX.";
        this[1][4] = "Honda CRV.";
        this[1][5] = "Honda CRV.";
        this[1][6] = "Porsche.";
        this[1][7] = "Volkswagen.";
        this[1][8] = "Audi R8.";
        this[1][9] = "Mini Cooper.";
        this[1][10] = "Mini Cooper.";
        this[1][11] = "Mini Cooper.";
        this[1][12] = "BMW.";
        this[1][13] = "Lamborghini.";
        this[1][14] = "Lamborghini.";
        this[1][15] = "Lamborghini.";
        this[1][16] = "Lamborghini.";
        this[1][17] = "Bentley.";
        this[1][18] = "Ferrari.";
        this[1][19] = "Ferrari.";
        this[1][20] = "Ferrari.";
        this[1][21] = "Ferrari.";
        this[1][22] = "Hummer.";
        this[1][23] = "Hummer.";
        this[1][24] = "Scion.";
        this[1][25] = "Chevrolet.";
        this[1][26] = "Chevrolet Camaro.";
        this[1][27] = "Chevy Corvette.";
        this[1][28] = "Saab.";
        this[1][29] = "Pontiac Solstice.";
        this[1][30] = "Pontiac Solstice.";
        this[1][31] = "Pontiac Solstice.";
        this[1][32] = "Pontiac.";
        this[1][33] = "Land Rover.";
        this[1][34] = "Jaguar.";
        this[1][35] = "Jaguar.";
        this[1][36] = "Ford hydroelectric car.";
        this[1][37] = "Ford Interceptor.";
        this[1][38] = "Ford.";
        this[1][39] = "Ford.";
        this[1][40] = "Mercury.";
        this[1][41] = "Lincoln.";
        this[1][42] = "Cadillac.";
        this[1][43] = "Formula 1.";
        this[1][44] = "Mercedes-Benz.";
        this[1][45] = "Lexus.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
