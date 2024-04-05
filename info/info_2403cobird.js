<!--
//Created by Album Builder Program Fri Apr 05 19:38:15 2024
var info_url   = "";
var title      = "Birding in Denver, Colorado";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.1 Mega Pixels.";
var dir        = maindir+"pics/2403cobird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Birding in Denver, Colorado";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<53;i++){
        this[0][i] = "2403cobird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "Belted Kingfisher, female, Clear Creek Trail.";
        this[1][1] = "Double-crested Cormorant, Clear Creek Trail.";
        this[1][2] = "Green-winged Teal, male, Clear Creek Trail.";
        this[1][3] = "Gadwall, male, Clear Creek Trail.";
        this[1][4] = "Spotted Towhee, female, Clear Creek Trail.";
        this[1][5] = "Spotted Towhee, male, Clear Creek Trail.";
        this[1][6] = "American Pipit, Clear Creek Trail.";
        this[1][7] = "Bushtit, Clear Creek Trail.";
        this[1][8] = "Black-capped Chickadee, Clear Creek Trail.";
        this[1][9] = "American Dipper, Clear Creek Trail.";
        this[1][10] = "American Dipper, Clear Creek Trail.";
        this[1][11] = "American Dipper, Clear Creek Trail.";
        this[1][12] = "American Dipper, Clear Creek Trail.";
        this[1][13] = "Dark-eyed Junco, pink-sided, St. Mary's.";
        this[1][14] = "Dark-eyed Junco, male, cismontanus, St. Mary's.";
        this[1][15] = "Dark-eyed Junco, gray-headed, St. Mary's.";
        this[1][16] = "Mountain Chickadee, St. Mary's.";
        this[1][17] = "Gray-crowned Rosy-Finch, Hepburn's, St. Mary's.";
        this[1][18] = "Brown-capped Rosy-Finch, St. Mary's.";
        this[1][19] = "Brown-capped Rosy-Finch, St. Mary's.";
        this[1][20] = "Brown-capped Rosy-Finch, immature, St. Mary's.";
        this[1][21] = "Steller's Jay, St. Mary's.";
        this[1][22] = "White-breasted Nuthatch, St. Mary's.";
        this[1][23] = "Clark's Nutcracker, St. Mary's.";
        this[1][24] = "Woodhouse's Scrub-Jay, Red Rocks Park.";
        this[1][25] = "Northern Flicker, male, red-shafted, Red Rocks Park.";
        this[1][26] = "House Finch, Red Rocks Park.";
        this[1][27] = "Peregrine Falcon, immature, Red Rocks Park.";
        this[1][28] = "Peregrine Falcon, Red Rocks Park.";
        this[1][29] = "Spotted Towhee, male, Red Rocks Park.";
        this[1][30] = "Say's Phoebe, Bear Creek Lake Park.";
        this[1][31] = "Northern Flicker, male, red-shafted, Bear Creek Lake Park.";
        this[1][32] = "Killdeer, Bear Creek Lake Park.";
        this[1][33] = "Cackling Goose, Bear Creek Lake Park.";
        this[1][34] = "White-crowned Sparrow, immature, Bear Creek Lake Park.";
        this[1][35] = "Black-billed Magpie, Bear Creek Lake Park.";
        this[1][36] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][37] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][38] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][39] = "Merlin, Waterton Canyon.";
        this[1][40] = "Downy Woodpecker, male, Waterton Canyon.";
        this[1][41] = "Rock Wren, Waterton Canyon.";
        this[1][42] = "Woodhouse's Scrub-Jay, Waterton Canyon.";
        this[1][43] = "Townsend's Solitaire, Waterton Canyon.";
        this[1][44] = "Wild Turkey, Waterton Canyon.";
        this[1][45] = "Pygmy Nuthatch, Genesee Mountain Park.";
        this[1][46] = "Pygmy Nuthatch, Genesee Mountain Park.";
        this[1][47] = "Red-tailed Hawk, Harlan's, Rocky Mountain Arsenal NWR.";
        this[1][48] = "Red-tailed Hawk, Rocky Mountain Arsenal NWR.";
        this[1][49] = "Ferruginous Hawk, Rocky Mountain Arsenal NWR.";
        this[1][50] = "Northern Harrier, Rocky Mountain Arsenal NWR.";
        this[1][51] = "Great Horned Owl, Rocky Mountain Arsenal NWR.";
        this[1][52] = "American Kestrel, male, Rocky Mountain Arsenal NWR.";
    }else{
        this[1][0] = "Belted Kingfisher, female, Clear Creek Trail.";
        this[1][1] = "Double-crested Cormorant, Clear Creek Trail.";
        this[1][2] = "Green-winged Teal, male, Clear Creek Trail.";
        this[1][3] = "Gadwall, male, Clear Creek Trail.";
        this[1][4] = "Spotted Towhee, female, Clear Creek Trail.";
        this[1][5] = "Spotted Towhee, male, Clear Creek Trail.";
        this[1][6] = "American Pipit, Clear Creek Trail.";
        this[1][7] = "Bushtit, Clear Creek Trail.";
        this[1][8] = "Black-capped Chickadee, Clear Creek Trail.";
        this[1][9] = "American Dipper, Clear Creek Trail.";
        this[1][10] = "American Dipper, Clear Creek Trail.";
        this[1][11] = "American Dipper, Clear Creek Trail.";
        this[1][12] = "American Dipper, Clear Creek Trail.";
        this[1][13] = "Dark-eyed Junco, pink-sided, St. Mary's.";
        this[1][14] = "Dark-eyed Junco, male, cismontanus, St. Mary's.";
        this[1][15] = "Dark-eyed Junco, gray-headed, St. Mary's.";
        this[1][16] = "Mountain Chickadee, St. Mary's.";
        this[1][17] = "Gray-crowned Rosy-Finch, Hepburn's, St. Mary's.";
        this[1][18] = "Brown-capped Rosy-Finch, St. Mary's.";
        this[1][19] = "Brown-capped Rosy-Finch, St. Mary's.";
        this[1][20] = "Brown-capped Rosy-Finch, immature, St. Mary's.";
        this[1][21] = "Steller's Jay, St. Mary's.";
        this[1][22] = "White-breasted Nuthatch, St. Mary's.";
        this[1][23] = "Clark's Nutcracker, St. Mary's.";
        this[1][24] = "Woodhouse's Scrub-Jay, Red Rocks Park.";
        this[1][25] = "Northern Flicker, male, red-shafted, Red Rocks Park.";
        this[1][26] = "House Finch, Red Rocks Park.";
        this[1][27] = "Peregrine Falcon, immature, Red Rocks Park.";
        this[1][28] = "Peregrine Falcon, Red Rocks Park.";
        this[1][29] = "Spotted Towhee, male, Red Rocks Park.";
        this[1][30] = "Say's Phoebe, Bear Creek Lake Park.";
        this[1][31] = "Northern Flicker, male, red-shafted, Bear Creek Lake Park.";
        this[1][32] = "Killdeer, Bear Creek Lake Park.";
        this[1][33] = "Cackling Goose, Bear Creek Lake Park.";
        this[1][34] = "White-crowned Sparrow, immature, Bear Creek Lake Park.";
        this[1][35] = "Black-billed Magpie, Bear Creek Lake Park.";
        this[1][36] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][37] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][38] = "Western Meadowlark, Bear Creek Lake Park.";
        this[1][39] = "Merlin, Waterton Canyon.";
        this[1][40] = "Downy Woodpecker, male, Waterton Canyon.";
        this[1][41] = "Rock Wren, Waterton Canyon.";
        this[1][42] = "Woodhouse's Scrub-Jay, Waterton Canyon.";
        this[1][43] = "Townsend's Solitaire, Waterton Canyon.";
        this[1][44] = "Wild Turkey, Waterton Canyon.";
        this[1][45] = "Pygmy Nuthatch, Genesee Mountain Park.";
        this[1][46] = "Pygmy Nuthatch, Genesee Mountain Park.";
        this[1][47] = "Red-tailed Hawk, Harlan's, Rocky Mountain Arsenal NWR.";
        this[1][48] = "Red-tailed Hawk, Rocky Mountain Arsenal NWR.";
        this[1][49] = "Ferruginous Hawk, Rocky Mountain Arsenal NWR.";
        this[1][50] = "Northern Harrier, Rocky Mountain Arsenal NWR.";
        this[1][51] = "Great Horned Owl, Rocky Mountain Arsenal NWR.";
        this[1][52] = "American Kestrel, male, Rocky Mountain Arsenal NWR.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
