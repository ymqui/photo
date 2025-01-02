<!--
//Created by Album Builder Program Thu Jan 02 07:23:00 2025
var info_url   = "";
var title      = "Birding in Florida";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2412flbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "Birding in Florida";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<35;i++){
        this[0][i] = "2412flbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "沃氏雨燕，奥卡拉湿地公园。";
        this[1][1] = "沃氏雨燕，奥卡拉湿地公园。";
        this[1][2] = "丛鸦，三叶草公园。";
        this[1][3] = "呆头伯劳，三叶草公园。";
        this[1][4] = "丛鸦，三叶草公园。";
        this[1][5] = "地鸠，雄性，三叶草公园。";
        this[1][6] = "地鸠，雌性，三叶草公园。";
        this[1][7] = "沟嘴犀鹃，三叶草公园。";
        this[1][8] = "沟嘴犀鹃，三叶草公园。";
        this[1][9] = "斑腹矶鹬，冬羽，黑角公园及码头。";
        this[1][10] = "家八哥，霍姆斯特德市比斯坎大道。";
        this[1][11] = "蓝黄金刚鹦鹉，幸运硬木丛。";
        this[1][12] = "大冠蝇霸鹟，幸运硬木丛。";
        this[1][13] = "库氏鹰，未成年，幸运硬木丛。";
        this[1][14] = "美洲隼，雌性，蛙塘野生动物管理区。";
        this[1][15] = "斯氏鵟，蛙塘野生动物管理区。";
        this[1][16] = "斯氏鵟，蛙塘野生动物管理区。";
        this[1][17] = "斯氏鵟，蛙塘野生动物管理区。";
        this[1][18] = "斯氏鵟，蛙塘野生动物管理区。";
        this[1][19] = "斯氏鵟，蛙塘野生动物管理区。";
        this[1][20] = "斯氏鵟，蛙塘野生动物管理区。";
        this[1][21] = "宽尾拟八哥，蛙塘野生动物管理区。";
        this[1][22] = "赤肩鵟，蛙塘野生动物管理区。";
        this[1][23] = "赤肩鵟，蛙塘野生动物管理区。";
        this[1][24] = "大白鹭，蛙塘野生动物管理区。";
        this[1][25] = "红耳绿鹦哥，肯德尔浸信会医院。";
        this[1][26] = "红耳绿鹦哥，肯德尔浸信会医院。";
        this[1][27] = "橙尾鸲莺，布如尔公园。";
        this[1][28] = "美洲白鹮，布如尔公园。";
        this[1][29] = "灰斑鸠，布如尔公园。";
        this[1][30] = "美洲隼，雌性，比特摩尔酒店。";
        this[1][31] = "鹦哥，比特摩尔酒店。";
        this[1][32] = "红头鹦哥，比特摩尔酒店。";
        this[1][33] = "红头鹦哥，比特摩尔酒店。";
        this[1][34] = "小嘲鸫，比特摩尔酒店。";
    }else{
        this[1][0] = "Vaux's Swift, Ocala Wetland Recharge Park.";
        this[1][1] = "Vaux's Swift, Ocala Wetland Recharge Park.";
        this[1][2] = "Florida Scrub-Jay, Shamrock Park & Nature Center.";
        this[1][3] = "Loggerhead Shrike, Shamrock Park & Nature Center.";
        this[1][4] = "Florida Scrub-Jay, Shamrock Park & Nature Center.";
        this[1][5] = "Common Ground Dove, male, Shamrock Park & Nature Center.";
        this[1][6] = "Common Ground Dove, female, Shamrock Park & Nature Center.";
        this[1][7] = "Groove-billed Ani, Shamrock Park & Nature Center.";
        this[1][8] = "Groove-billed Ani, Shamrock Park & Nature Center.";
        this[1][9] = "Spotted Sandpiper, winter plumage, Black Point Park & Marina.";
        this[1][10] = "Common Myna, Biscayne Drive, Homestead.";
        this[1][11] = "Blue-and-yellow Macaw, Lucky Hammock.";
        this[1][12] = "Great-crested Flycatcher, Lucky Hammock.";
        this[1][13] = "Cooper's Hawk, juvenile, Lucky Hammock.";
        this[1][14] = "American Kestrel, female, Frog Pond WMA.";
        this[1][15] = "Swainson's Hawk, Frog Pond WMA.";
        this[1][16] = "Swainson's Hawk, Frog Pond WMA.";
        this[1][17] = "Swainson's Hawk, Frog Pond WMA.";
        this[1][18] = "Swainson's Hawk, Frog Pond WMA.";
        this[1][19] = "Swainson's Hawk, Frog Pond WMA.";
        this[1][20] = "Swainson's Hawk, Frog Pond WMA.";
        this[1][21] = "Boat-tailed Grackle, Frog Pond WMA.";
        this[1][22] = "Red-shouldered Hawk, Frog Pond WMA.";
        this[1][23] = "Red-shouldered Hawk, Frog Pond WMA.";
        this[1][24] = "Great Egret, Frog Pond WMA.";
        this[1][25] = "Mitred Parakeet, Kendall Baptist Hospital.";
        this[1][26] = "Mitred Parakeet, Kendall Baptist Hospital.";
        this[1][27] = "American Redstart, Brewer Park.";
        this[1][28] = "White Ibis, Brewer Park.";
        this[1][29] = "Eurasian Collared-Dove, Brewer Park.";
        this[1][30] = "American Kestrel, female, Biltmore Hotel.";
        this[1][31] = "Parakeets, Biltmore Hotel.";
        this[1][32] = "Red-masked Parakeet, Biltmore Hotel.";
        this[1][33] = "Red-masked Parakeet, Biltmore Hotel.";
        this[1][34] = "Northern Mockingbird, Biltmore Hotel.";    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
