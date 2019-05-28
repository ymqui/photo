<!--
var cn_ind     = window.usechinese?1:0;
var info_url   = "";
var title      = "Trip to Mexico";
var cam_img    = "camera_canon_6d.jpg";
var cam_tit    = "Canon SLR EOS 6D, 20.2 Mega Pixels.";
var dir        = maindir+"pics/1905mexico/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".JPG";
var midi_file  = "";
//var midi_cr    = new Array("","");
var pagelist   = [["1905mxbird","5/2019 Birding in Mexico","5/2019 墨西哥观鸟"]]
homeurl        = homeurl+"showphoto.html?qiuqiu";
 
if(window.usechinese){
    title      = "游墨西哥";
    cam_tit    = "佳能单镜头反光式6D相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<58;i++){
        this[0][i] = "1905mexico_"+(i+1).toString();
        this[1][i] = "";
    }
    i = 0;
    this[1][i++] = (["Visiting the Teotihucan Pyramids north of Mexico City.","参观墨西哥城东北的特奥蒂瓦坎古城金字塔。这里是印第安文明的重要遗址，建于公元1世纪至7世纪。"])[cn_ind];
    this[1][i++] = (["Visiting the Teotihucan Pyramids north of Mexico City.","参观墨西哥城东北的特奥蒂瓦坎古城金字塔。"])[cn_ind];
    this[1][i++] = (["Visiting the Teotihucan Pyramids north of Mexico City.","参观墨西哥城东北的特奥蒂瓦坎古城金字塔。"])[cn_ind];
    this[1][i++] = (["Nathan is interested in the trinket stand in the pyramids.","球球对卖纪念品的小摊点很感兴趣。"])[cn_ind];
    this[1][i++] = (["Taking a break outside the pyramids.","午间休息。"])[cn_ind];
    this[1][i++] = (["Lunch.","午餐。"])[cn_ind];
    this[1][i++] = (["In front of the Pyramid of the Sun.","在太阳金字塔前。太阳金字塔是古印第安人祭祀太阳神的地方。"])[cn_ind];
    this[1][i++] = (["On the bus back to Mexico City.","乘长途汽车回墨西哥城。"])[cn_ind];
    this[1][i++] = (["Visiting the UNAM Botanical Garden in Mexico City.","球球和妈妈在墨西哥城的国立自治大学植物园"+pagelink("1905mxbird","陪爸爸观鸟")+"。"])[cn_ind];
    this[1][i++] = (["Wandering the alleys in Guanajuato City.","逛瓜纳华托城的小巷。瓜纳华托城景色优美，为旅游胜地。"])[cn_ind];
    this[1][i++] = (["At the entrance to a tunnel street in Guanajuato City.","瓜纳华托城可以行车的地下隧道入口。这些隧道以前是用于防洪的，现在它们是主要的汽车交通通道。"])[cn_ind];
    this[1][i++] = (["Inside a tunnel street in Guanajuato City.","瓜纳华托城可以行车的地下隧道。"])[cn_ind];
    this[1][i++] = (["Inside a tunnel street in Guanajuato City.","瓜纳华托城可以行车的地下隧道。"])[cn_ind];
    this[1][i++] = (["Inside a tunnel street in Guanajuato City.","瓜纳华托城可以行车的地下隧道。"])[cn_ind];
    this[1][i++] = (["Inside a tunnel street in Guanajuato City.","瓜纳华托城可以行车的地下隧道。"])[cn_ind];
    this[1][i++] = (["Wandering the alleys in Guanajuato City.","逛瓜纳华托城的小巷。山上的建筑物是索道缆车。"])[cn_ind];
    this[1][i++] = (["In the Jardin de la Union in Guanajuato City.","在瓜纳华托城的联盟花园。"])[cn_ind];
    this[1][i++] = (["In the Jardin de la Union in Guanajuato City.","在瓜纳华托城的联盟花园。"])[cn_ind];
    this[1][i++] = (["Wandering the alleys in Guanajuato City.","逛瓜纳华托城的小巷。"])[cn_ind];
    this[1][i++] = (["Wandering the alleys in Guanajuato City.","逛瓜纳华托城的小巷。"])[cn_ind];
    this[1][i++] = (["Inside an art gallery in Guanajuato City. The two mojigangas characters are famous artist Diego Rivera and Frida Kahlo.","在瓜纳华托城的一个画廊里欣赏图片。背后的两个人偶是墨西哥著名画家迭戈·里维拉和弗里达·卡罗夫妇。"])[cn_ind];
    this[1][i++] = (["A wall sculpture in Guanajuato City.","墙上的名人纪念雕塑。"])[cn_ind];
    this[1][i++] = (["Inside a crafts market in Guanajuato City.","瓜纳华托城的一个艺术品市场。"])[cn_ind];
    this[1][i++] = (["Wandering the alleys in Guanajuato City.","逛瓜纳华托城的小巷。"])[cn_ind];
    this[1][i++] = (["Alleys in Guanajuato City.","瓜纳华托城的小巷。"])[cn_ind];
    this[1][i++] = (["Lunch.","午餐。球球在吃鳄梨酱。"])[cn_ind];
    this[1][i++] = (["Nathan loves fries.","球球很喜欢吃炸薯条，没人教就会自己蘸番茄酱。"])[cn_ind];
    this[1][i++] = (["Alleys in Guanajuato City.","瓜纳华托城的小巷。"])[cn_ind];
    this[1][i++] = (["View of Guanajuato City.","瓜纳华托城景。"])[cn_ind];
    this[1][i++] = (["View of Guanajuato City.","在山上拍瓜纳华托城景。"])[cn_ind];
    this[1][i++] = (["Photo with the grim reaper in Guanajuato City.","和骷髅人合影。"])[cn_ind];
    this[1][i++] = (["Riding the funicular in Guanajuato City.","乘坐瓜纳华托城的缆车。"])[cn_ind];
    this[1][i++] = (["Enjoying the street performance in Guanajuato City.","在瓜纳华托城看街头表演。"])[cn_ind];
    this[1][i++] = (["At the Mexico City's historic center.","在墨西哥城中心逛大街。"])[cn_ind];
    this[1][i++] = (["The Zocalo of Mexico City.","墨西哥城市中心的宪法广场。"])[cn_ind];
    this[1][i++] = (["The Zocalo of Mexico City.","墨西哥城市中心的宪法广场。"])[cn_ind];
    this[1][i++] = (["Breakfast.","早餐。"])[cn_ind];
    this[1][i++] = (["Aztec dancer.","阿兹特克舞者。"])[cn_ind];
    this[1][i++] = (["Spiritual cleansing from an elder.","墨西哥当地的驱邪仪式。"])[cn_ind];
    this[1][i++] = (["Visiting the Templo Mayor in Mexico City.","参观墨西哥城的大神庙遗址。这里是古阿兹特克帝国的主要庙宇。"])[cn_ind];
    this[1][i++] = (["Visiting the Templo Mayor in Mexico City.","参观墨西哥城的大神庙遗址。"])[cn_ind];
    this[1][i++] = (["Visiting the Templo Mayor in Mexico City.","参观墨西哥城的大神庙遗址。"])[cn_ind];
    this[1][i++] = (["Visiting the Templo Mayor in Mexico City.","参观墨西哥城的大神庙遗址。"])[cn_ind];
    this[1][i++] = (["Monolith of Tlaltecuhtli at Templo Mayor in Mexico City.","大神庙遗址博物馆里的大地丰收女神石板。"])[cn_ind];
    this[1][i++] = (["Visiting the Templo Mayor in Mexico City.","参观墨西哥城的大神庙遗址。"])[cn_ind];
    this[1][i++] = (["Strolling the Zocalo in Mexico City.","在墨西哥城逛市中心的宪法广场。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿，这里是总统的办公地点和象征墨西哥政府的建筑。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿。"])[cn_ind];
    this[1][i++] = (["The History of Mexico mural by Diego Rivera at the National Palace in Mexico City.","墨西哥城国家宫殿的迭戈·里维拉的墨西哥历史壁画。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿。"])[cn_ind];
    this[1][i++] = (["Visiting the National Palace in Mexico City.","参观墨西哥城的国家宫殿。"])[cn_ind];
    this[1][i++] = (["Aztec dances.","阿兹特克舞蹈。"])[cn_ind];
    this[1][i++] = (["Aztec dances.","阿兹特克舞蹈。"])[cn_ind];
}
 
//web counter info
var sc_project   = 9592725;
var sc_invisible = 1;
var sc_security  = "8084e75a";
//-->
