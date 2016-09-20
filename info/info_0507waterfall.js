<!--
//Created by Album Builder Program Sun Jul 31 09:53:32 2005
var info_url   = "http://www.dcnr.state.pa.us/stateparks/parks/rickettsglen.aspx";
var title      = "Waterfalls in Ricketts Glen State Park, PA";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0507waterfall/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "BehindTheWaterfall.mid";
var midi_cr    = new Array("Dolphin's Dream","http://d21c.com/dolphinsdream/quietude.html");

if(window.usechinese){
    title      = "Ricketts Glen 公园观瀑布";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D, 630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<41;i++){
        this[0][i] = "0507waterfall___"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "密林小道。";
        this[1][1] = "Mohawk 瀑布。";
        this[1][2] = "参天大树。";
        this[1][3] = "Oneida 瀑布。";
        this[1][4] = "Cayuga 瀑布。";
        this[1][5] = "Cayuga 瀑布。";
        this[1][6] = "Ganoga 瀑布。";
        this[1][7] = "瀑布山道。";
        this[1][8] = "Delaware 瀑布。";
        this[1][9] = "小阶梯瀑布。";
        this[1][10] = "Mohican 瀑布。";
        this[1][11] = "水帘。";
        this[1][12] = "瀑布山道。";
        this[1][13] = "Tuscarora 瀑布。";
        this[1][14] = "小阶梯瀑布。";
        this[1][15] = "Erie 瀑布顶部。";
        this[1][16] = "Erie 瀑布。";
        this[1][17] = "小溪流水。";
        this[1][18] = "Harrison Wright 瀑布。";
        this[1][19] = "Harrison Wright 瀑布。";
        this[1][20] = "小阶梯瀑布。";
        this[1][21] = "Sheldon Reynolds 瀑布顶部。";
        this[1][22] = "Sheldon Reynolds 瀑布。";
        this[1][23] = "Murray Reynolds 瀑布。";
        this[1][24] = "Murray Reynolds 瀑布。";
        this[1][25] = "Murray Reynolds 瀑布。";
        this[1][26] = "小阶梯瀑布。";
        this[1][27] = "Wyandot 瀑布。";
        this[1][28] = "B. Reynolds 瀑布。";
        this[1][29] = "R.B. Ricketts 瀑布底部。";
        this[1][30] = "R.B. Ricketts 瀑布顶部。";
        this[1][31] = "R.B. Ricketts 瀑布顶部。";
        this[1][32] = "小阶梯瀑布。";
        this[1][33] = "Ozone 瀑布。";
        this[1][34] = "Huron 瀑布。";
        this[1][35] = "Huron 瀑布。";
        this[1][36] = "Shawnee 瀑布。";
        this[1][37] = "Shawnee 瀑布。";
        this[1][38] = "F.L. Ricketts 瀑布。";
        this[1][39] = "Onondaga 瀑布。";
        this[1][40] = "Onondaga 瀑布。";
    }else{
        this[1][0] = "Falls Trail.";
        this[1][1] = "Mohawk Falls.";
        this[1][2] = "Canopy.";
        this[1][3] = "Oneida Falls.";
        this[1][4] = "Cayuga Falls.";
        this[1][5] = "Cayuga Falls.";
        this[1][6] = "Ganoga Falls.";
        this[1][7] = "Falls Trail.";
        this[1][8] = "Delaware Falls.";
        this[1][9] = "Cascades.";
        this[1][10] = "Mohican Falls.";
        this[1][11] = "Cascades.";
        this[1][12] = "Falls Trail.";
        this[1][13] = "Tuscarora Falls.";
        this[1][14] = "Cascades.";
        this[1][15] = "Top portion of Erie Falls.";
        this[1][16] = "Erie Falls.";
        this[1][17] = "Creek.";
        this[1][18] = "Harrison Wright Falls.";
        this[1][19] = "Harrison Wright Falls.";
        this[1][20] = "Cascades.";
        this[1][21] = "Top portion of Sheldon Reynolds Falls.";
        this[1][22] = "Sheldon Reynolds Falls.";
        this[1][23] = "Murray Reynolds Falls.";
        this[1][24] = "Murray Reynolds Falls.";
        this[1][25] = "Murray Reynolds Falls.";
        this[1][26] = "Cascades.";
        this[1][27] = "Wyandot Falls.";
        this[1][28] = "B. Reynolds Falls.";
        this[1][29] = "Lower portion of R. B. Ricketts Falls.";
        this[1][30] = "Top portion of R. B. Ricketts Falls.";
        this[1][31] = "Top portion of R. B. Ricketts Falls.";
        this[1][32] = "Cascades.";
        this[1][33] = "Ozone Falls.";
        this[1][34] = "Huron Falls.";
        this[1][35] = "Huron Falls.";
        this[1][36] = "Shawnee Falls.";
        this[1][37] = "Shawnee Falls.";
        this[1][38] = "F.L. Ricketts Falls.";
        this[1][39] = "Onondaga Falls.";
        this[1][40] = "Onondaga Falls.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
