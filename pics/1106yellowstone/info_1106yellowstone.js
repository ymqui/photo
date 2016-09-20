<!--
//Created by Album Builder Program Sun Jul 10 22:32:21 2011
var info_url   = "http://www.nps.gov/";
var title      = "Trip to the West";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/1106yellowstone/";
//var dir        = csdpdir+"pics/1106yellowstone/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Trip to the West";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<36;i++){
        this[0][i] = "1106yellowstone_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Grand Teton National Park.";
        this[1][1] = "Jenny Lake in the Grand Teton National Park.";
        this[1][2] = "Grand Teton National Park.";
        this[1][4] = "Grand Teton National Park.";
        this[1][5] = "Lower Falls in the Yellowstone National Park.";
        this[1][6] = "Artist Point in the Yellowstone National Park.";
        this[1][7] = "Upper Falls in the Yellowstone National Park.";
        this[1][8] = "West Thumb Geyser Basin in the Yellowstone National Park.";
        this[1][9] = "A thermal pool in the Yellowstone National Park.";
        this[1][10] = "Yellowstone Lake.";
        this[1][11] = "Yellowstone Lake.";
        this[1][12] = "Old Faithful geyser in the Yellowstone National Park.";
        this[1][13] = "Chromatic Pool in the Yellowstone National Park.";
        this[1][14] = "Grotto Geyser in the Yellowstone National Park.";
        this[1][16] = "A geyser in the Yellowstone National Park.";
        this[1][17] = "Excelsior geyser in the Yellowstone National Park.";
        this[1][18] = "Grand Prismatic Spring in the Yellowstone National Park.";
        this[1][19] = "An Elk in Yellowstone.";
        this[1][20] = "A bison in Yellowstone.";
        this[1][21] = "Bisons crossing the road in Grand Teton.";
        this[1][22] = "Bisons roaming in Grand Teton.";
        this[1][23] = "A grizzly bear in Yellowstone.";
        this[1][25] = "Lake McDonald in Glacier National Park.";
        this[1][26] = "Lower Two Medicine Lake in Glacier National Park.";
        this[1][29] = "Baring Falls in Glacier National Park.";
        this[1][30] = "Swiftcurrent Lake in Glacier National Park.";
        this[1][31] = "Many Glacier Hotel in Glacier National Park.";
        this[1][32] = "Glacier National Park.";
        this[1][33] = "Lake Sherburne in Glacier National Park.";
        this[1][34] = "Mount Rushmore.";
        this[1][35] = "Fireworks in Waterloo, IA.";
    }else{
        this[1][0] = "Grand Teton National Park.";
        this[1][1] = "Jenny Lake in the Grand Teton National Park.";
        this[1][2] = "Grand Teton National Park.";
        this[1][4] = "Grand Teton National Park.";
        this[1][5] = "Lower Falls in the Yellowstone National Park.";
        this[1][6] = "Artist Point in the Yellowstone National Park.";
        this[1][7] = "Upper Falls in the Yellowstone National Park.";
        this[1][8] = "West Thumb Geyser Basin in the Yellowstone National Park.";
        this[1][9] = "A thermal pool in the Yellowstone National Park.";
        this[1][10] = "Yellowstone Lake.";
        this[1][11] = "Yellowstone Lake.";
        this[1][12] = "Old Faithful geyser in the Yellowstone National Park.";
        this[1][13] = "Chromatic Pool in the Yellowstone National Park.";
        this[1][14] = "Grotto Geyser in the Yellowstone National Park.";
        this[1][16] = "A geyser in the Yellowstone National Park.";
        this[1][17] = "Excelsior geyser in the Yellowstone National Park.";
        this[1][18] = "Grand Prismatic Spring in the Yellowstone National Park.";
        this[1][19] = "An Elk in Yellowstone.";
        this[1][20] = "A bison in Yellowstone.";
        this[1][21] = "Bisons crossing the road in Grand Teton.";
        this[1][22] = "Bisons roaming in Grand Teton.";
        this[1][23] = "A grizzly bear in Yellowstone.";
        this[1][25] = "Lake McDonald in Glacier National Park.";
        this[1][26] = "Lower Two Medicine Lake in Glacier National Park.";
        this[1][29] = "Baring Falls in Glacier National Park.";
        this[1][30] = "Swiftcurrent Lake in Glacier National Park.";
        this[1][31] = "Many Glacier Hotel in Glacier National Park.";
        this[1][32] = "Glacier National Park.";
        this[1][33] = "Lake Sherburne in Glacier National Park.";
        this[1][34] = "Mount Rushmore.";
        this[1][35] = "Fireworks in Waterloo, IA.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
