<!--
//Created by Album Builder Program Sun Dec 04 21:19:21 2005
var info_url   = "http://www.mnh.si.edu/";
var title      = "Dinosaurs in the Natural History Museum";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0512dinosaur/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "MaryHay.mid";
var midi_cr    = new Array("Scottish Midi Page","http://www.pagebiz.com/banjo/scott/");
 
if(window.usechinese){
    title      = "自然博物馆的恐龙化石";
    cam_tit    = "佳能单镜头反光式20D相机, 820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<16;i++){
        this[0][i] = "0512dinosaur_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "华盛顿特区国家自然博物馆的恐龙化石展厅。最前面的是一只脖子特长的双棘龙。";
        this[1][1] = "二角龙。和三角龙很相似，但鼻子上无角。";
        this[1][2] = "三角龙，一种草食龙。";
        this[1][3] = "三角龙。第三只角长在鼻子上。";
        this[1][4] = "霸王龙，最凶猛的食肉龙。";
        this[1][5] = "霸王龙拥有恐龙里最大的牙齿。";
        this[1][6] = "霸王龙。";
        this[1][7] = "双棘龙是种脖子很长的大型草食恐龙。";
        this[1][8] = "异特龙是一种凶狠的食肉龙。";
        this[1][9] = "异特龙。";
        this[1][10] = "剑龙，草食动物，背上有17块板状的骨头，尾尖端还有长刺。";
        this[1][11] = "剑龙脑袋很小，可能很笨。";
        this[1][12] = "非洲大象。";
        this[1][13] = "非洲大象。";
        this[1][14] = "希望钻石，重45.52克拉。";
        this[1][15] = "博物馆旁的第十二大街。";
    }else{
        this[1][0] = "View of the exhibition hall. In the front is a Diplodocus, a long-necked dinosaur.";
        this[1][1] = "Diceratops. It is similar to Triceratops, the main difference being that it doesn't have a nose horn.";
        this[1][2] = "Triceratops. It was a herbivore.";
        this[1][3] = "Triceratops. Its main predator was most likely T. rex.";
        this[1][4] = "Head of a Tyrannosaurus rex. T. rex was probably the fiercest carnivore.";
        this[1][5] = "T. rex had the biggest teeth of all dinosaurs.";
        this[1][6] = "T. rex.";
        this[1][7] = "Diplodocus was a giant long-necked plant-eater.";
        this[1][8] = "Allosaurus was a ferocious carnivore.";
        this[1][9] = "Head of a Allosaurus.";
        this[1][10] = "Stegosaurus was a herbivore, with unique plates along its back.";
        this[1][11] = "Stegosaurus had a very small brain.";
        this[1][12] = "An African Elephant.";
        this[1][13] = "Trunk and tusks of the elephant.";
        this[1][14] = "The Hope Diamond. It weighs 45.52 carats.";
        this[1][15] = "View of the 12th Street.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
