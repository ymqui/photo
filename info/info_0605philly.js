<!--
//Created by Album Builder Program Wed May 31 23:54:37 2006
var info_url   = "";
var title      = "Visiting Grand Uncle & Aunt in the Memorial Day Weekend";
var cam_img    = "camera_canon_rebel.jpg";
var cam_tit    = "Canon SLR Digital Rebel EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0605philly/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "FieldsOfGold.mid";
var midi_cr    = new Array("Amazing Midis","http://www.hullsurfer.karoo.net/Amazing_Midis/");
 
if(window.usechinese){
    title      = "周末看望舅公舅婆";
    cam_tit    = "佳能单镜头反光式 Digital Rebel EOS 300D，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<51;i++){
        this[0][i] = "0605philly_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "舅婆和Alice。";
        this[1][1] = "普林斯顿大学Firestone图书馆。";
        this[1][2] = "舅公在拍录像。";
        this[1][3] = "舅婆在普林斯顿大学Firestone图书馆前。";
        this[1][4] = "Alice聚精会神地在校园里拍照。";
        this[1][5] = "阿姨和Eric在普林斯顿校园里。";
        this[1][6] = "普林斯顿大学Chancellor Green楼。";
        this[1][7] = "普林斯顿校园里的一尊塑像。";
        this[1][8] = "普林斯顿大学Alexander楼。";
        this[1][9] = "舅婆和阿姨。";
        this[1][10] = "舅公和舅婆。";
        this[1][11] = "普林斯顿大学Blair楼。";
        this[1][12] = "Alice。";
        this[1][13] = "Eric和Alice。";
        this[1][14] = "阿姨。";
        this[1][15] = "Alice在普林斯顿艺术博物馆外。";
        this[1][16] = "普林斯顿艺术博物馆里的一幅画。";
        this[1][17] = "Alice在普林斯顿艺术博物馆里。";
        this[1][18] = "舅公在普林斯顿艺术博物馆里。";
        this[1][19] = "舅公和舅婆在普林斯顿艺术博物馆里。";
        this[1][20] = "Alice在普林斯顿大学的一个花园里。";
        this[1][21] = "Eric和Alice在花园里。";
        this[1][22] = "Eric在花园里。";
        this[1][23] = "Alice在花园的水池边。";
        this[1][24] = "芍药花。";
        this[1][25] = "Alice拍照片。";
        this[1][26] = "舅婆在普林斯顿大学。";
        this[1][27] = "普林斯顿大学Robertson楼。";
        this[1][28] = "小憩。";
        this[1][29] = "可爱的Alice。";
        this[1][30] = "舅公一家。";
        this[1][31] = "舅婆和舅公在费城。";
        this[1][32] = "舅婆和阿姨。";
        this[1][33] = "舅婆在费城。";
        this[1][34] = "费城艺术博物馆。";
        this[1][35] = "Alice在费城艺术博物馆外的喷水池边。";
        this[1][36] = "舅公和舅婆在欣赏凡高的向日葵花。";
        this[1][37] = "小岩阿姨在博物馆内。";
        this[1][38] = "Alice在费城艺术博物馆内。";
        this[1][39] = "费城艺术博物馆内的一个展厅。";
        this[1][40] = "费城艺术博物馆内的一尊大理石雕塑。";
        this[1][41] = "费城艺术博物馆内的戴安娜雕塑。";
        this[1][42] = "舅公和舅婆在宾夕法尼亚大学校园外。";
        this[1][43] = "宾夕法尼亚大学的一个图书馆。";
        this[1][44] = "舅婆和阿姨在宾夕法尼亚大学校园内。";
        this[1][45] = "Eric。";
        this[1][46] = "舅婆在宾夕法尼亚大学的Perelman四角院。";
        this[1][47] = "费城贵格会聚会房里的解说员。";
        this[1][48] = "费城街头的马车。";
        this[1][49] = "费城独立厅。";
        this[1][50] = "费城街头。";
    }else{
        this[1][0] = "Grand Aunt and Alice.";
        this[1][1] = "Princeton Firestone Library.";
        this[1][2] = "Grand Uncle shooting videos on the Princeton campus.";
        this[1][3] = "Grand Aunt in front of the Princeton Firestone Library.";
        this[1][4] = "Alice taking photos on the Princeton campus.";
        this[1][5] = "Aunt and Eric at the entrance of the East Pyne Hall in Princeton.";
        this[1][6] = "Princeton Chancellor Green.";
        this[1][7] = "A bronze sculpture on the Princeton campus.";
        this[1][8] = "Princeton Alexander Hall.";
        this[1][9] = "Grand Aunt and Aunt.";
        this[1][10] = "Grand Aunt and Grand Uncle.";
        this[1][11] = "Princeton Blair Hall.";
        this[1][12] = "Alice on the Princeton campus.";
        this[1][13] = "Eric and Alice.";
        this[1][14] = "Aunt.";
        this[1][15] = "Alice in front of the Princeton Art Museum.";
        this[1][16] = "A painting in the Princeton Art Museum.";
        this[1][17] = "Alice inside the Princeton Art Museum.";
        this[1][18] = "Grand Uncle inside the Princeton Art Museum.";
        this[1][19] = "Grand Uncle and Grand Aunt inside the Princeton Art Museum.";
        this[1][20] = "Alice in a Princeton garden.";
        this[1][21] = "Eric and Alice.";
        this[1][22] = "Eric.";
        this[1][23] = "Alice.";
        this[1][24] = "Peony.";
        this[1][25] = "Alice taking photos.";
        this[1][26] = "Grand Aunt.";
        this[1][27] = "Princeton Robertson Hall.";
        this[1][28] = "Resting in front of the Robertson Hall.";
        this[1][29] = "Alice.";
        this[1][30] = "In front of the house.";
        this[1][31] = "Grand Aunt and Grand Uncle in Philadelphia.";
        this[1][32] = "Grand Aunt and Aunt in front of the Philadelphia Museum of Art.";
        this[1][33] = "Grand Aunt in Philadelphia.";
        this[1][34] = "The Philadelphia Museum of Art.";
        this[1][35] = "Alice in front of the Philadelphia Museum of Art.";
        this[1][36] = "Grand Uncle and Grand Aunt studying van Gogh's Sunflowers.";
        this[1][37] = "Aunt taking a rest in the museum.";
        this[1][38] = "Alice in the museum.";
        this[1][39] = "An exhibition room inside the Philadelphia Museum of Art.";
        this[1][40] = "A marble sculpture.";
        this[1][41] = "The entrance stairs with Diana by Augustus Saint-Gaudens.";
        this[1][42] = "Grand Uncle and Grand Aunt outside the University of Pennsylvania.";
        this[1][43] = "The Fisher Fine Arts Library in U. Penn.";
        this[1][44] = "Grand Aunt and Aunt on the campus of U. Penn.";
        this[1][45] = "Eric.";
        this[1][46] = "Grand Aunt at the Perelman Quadrangle in U. Penn.";
        this[1][47] = "An actor in the Quaker Meeting House in Philadelphia.";
        this[1][48] = "Horse and buggy.";
        this[1][49] = "The Independence Hall in Philadelphia.";
        this[1][50] = "Philadelphia street.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
