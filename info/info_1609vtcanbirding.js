<!--
//Created by Album Builder Program Wed Sep 21 08:33:17 2016
var info_url   = "http://bryanpfeiffer.com/2013/05/26/birding-vermonts-moose-bog/";
var title      = "Birding North";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1609vtcanbirding/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "DancesWithWolves.mid";
var midi_cr    = new Array("Leigh Ann's MIDI World","http://www.angelfire.com/mo/NeverKnowWhat/MidiWorld.html");
 
if(window.usechinese){
    title      = "Birding North";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<20;i++){
        this[0][i] = "1609vtcanbirding_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Moose bog in Vermont.";
        this[1][1] = "Gray Jay.";
        this[1][2] = "Hermit Thrush.";
        this[1][3] = "Black-backed Woodpecker, female.";
        this[1][4] = "Black-backed Woodpecker, female.";
        this[1][5] = "Yellow-bellied Sapsucker, immature.";
        this[1][6] = "Red-breasted Nuthatch.";
        this[1][7] = "Red-breasted Nuthatch.";
        this[1][8] = "Black-throated Green Warbler, female.";
        this[1][9] = "Ruffed Grouse.";
        this[1][10] = "Black-capped Chickadee, Domaine de Maizerets, Quebec City, Canada.";
        this[1][11] = "Hairy Woodpecker, male.";
        this[1][12] = "Sharp-shinned Hawk.";
        this[1][13] = "Least Flycatcher, Cap Tourmente National Wildlife Area, Canada.";
        this[1][14] = "Blue-headed Vireo.";
        this[1][15] = "Merlin, female.";
        this[1][16] = "Bald Eagle, immature.";
        this[1][17] = "American Bittern.";
        this[1][18] = "American Bittern.";
        this[1][19] = "North American Porcupine.";
    }else{
        this[1][0] = "Moose bog in Vermont.";
        this[1][1] = "Gray Jay.";
        this[1][2] = "Hermit Thrush.";
        this[1][3] = "Black-backed Woodpecker, female.";
        this[1][4] = "Black-backed Woodpecker, female.";
        this[1][5] = "Yellow-bellied Sapsucker, immature.";
        this[1][6] = "Red-breasted Nuthatch.";
        this[1][7] = "Red-breasted Nuthatch.";
        this[1][8] = "Black-throated Green Warbler, female.";
        this[1][9] = "Ruffed Grouse.";
        this[1][10] = "Black-capped Chickadee, Domaine de Maizerets, Quebec City, Canada.";
        this[1][11] = "Hairy Woodpecker, male.";
        this[1][12] = "Sharp-shinned Hawk.";
        this[1][13] = "Least Flycatcher, Cap Tourmente National Wildlife Area, Canada.";
        this[1][14] = "Blue-headed Vireo.";
        this[1][15] = "Merlin, female.";
        this[1][16] = "Bald Eagle, immature.";
        this[1][17] = "American Bittern.";
        this[1][18] = "American Bittern.";
        this[1][19] = "North American Porcupine.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
