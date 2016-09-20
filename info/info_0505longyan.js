<!--
//Created by Album Builder Program Wed May 04 23:22:19 2005
var info_url   = "";
var title      = "My hometown Longyan";
var cam_img    = "camera_canon_a80.jpg";
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels.";
var dir        = maindir+"pics/0505longyan/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "RecuerdosDeLaAlhambra.mid";
var midi_cr    = new Array("Jack","http://members.fortunecity.com/ajsmidi/easy/easy3.html");
 
if(window.usechinese){
    title      = "美丽的故乡龙岩";
    cam_tit    = "佳能Powershot A80, 400万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<34;i++){
        this[0][i] = "0505longyan_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0]  = "龙岩市人民检察院，现在在曹溪。";
        this[1][1]  = "龙岩市公安局，现在在莲花山。";
        this[1][2]  = "富健新村";
        this[1][3]  = "人民广场，我都不知道在哪里。";
        this[1][4]  = "琦琦和楠楠";
        this[1][5]  = "风动厂现貌";
        this[1][6]  = "城市花园";
        this[1][7]  = "水韵华都";
        this[1][8]  = "闽西交易城大门";
        this[1][9]  = "龙岩行政服务中心（交易城内）";
        this[1][10] = "交易城街道";
        this[1][11] = "龙岩别墅";
        this[1][12] = "新房子（这儿就是原来的龙马公司）";
        this[1][13] = "一中体育馆";
        this[1][14] = "一中新教学楼";
        this[1][15] = "母校二中大门";
        this[1][16] = "二中操场，都不认识了。";
        this[1][17] = "二中教学楼";
        this[1][18] = "二中教学楼";
        this[1][19] = "二中教学楼";
        this[1][20] = "KFC和麦当劳";
        this[1][21] = "新华书店";
        this[1][22] = "酒厂现貌";
        this[1][23] = "酒厂现貌";
        this[1][24] = "母校大同小学，原校址已被五中占去。";
        this[1][25] = "大同小学操场";
        this[1][26] = "大同小学";
        this[1][27] = "大同小学大门";
        this[1][28] = "五中大门，楠楠上的中学。";
        this[1][29] = "五中2幢教学楼";
        this[1][30] = "五中新操场";
        this[1][31] = "体育中心";
        this[1][32] = "家门口的家乐园";
        this[1][33] = "家乐园内";
    }else{
        this[1][0] = "People's Procuratorate building.";
        this[1][1] = "Police headquarters.";
        this[1][3] = "City square.";
        this[1][4] = "My lovely niece and nephew.";
        this[1][5] = "The site of the old bike factory.";
        this[1][8] = "Trade center.";
        this[1][10] = "Trade center.";
        this[1][13] = "The gym of No. 1 middle school.";
        this[1][14] = "No. 1 middle school.";
        this[1][15] = "My alma mater, No. 2 middle school.";
        this[1][16] = "School playground.";
        this[1][17] = "No. 2 middle school.";
        this[1][18] = "No. 2 middle school.";
        this[1][19] = "No. 2 middle school.";
        this[1][20] = "There's even McDonald's and KFC now in the city.";
        this[1][21] = "Xinhua bookstore.";
        this[1][22] = "The site of the old winery. I used to walk past here every day to go to school.";
        this[1][23] = "The site of the old winery.";
        this[1][24] = "My alma mater, Datong primary school.";
        this[1][25] = "School playground.";
        this[1][26] = "Datong primary school.";
        this[1][27] = "Front gate of the primary school.";
        this[1][28] = "No. 5 middle school. My nephew is attending this school now.";
        this[1][29] = "No. 5 middle school.";
        this[1][30] = "School playground.";
        this[1][31] = "City stadium.";
        this[1][32] = "A supermarket right across the street from my house.";
        this[1][33] = "Inside the supermarket.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
