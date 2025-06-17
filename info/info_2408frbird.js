<!--
//Created by Album Builder Program Sun Sep 01 15:58:01 2024
var info_url   = "";
var title      = "Birding in France";
var cam_img    = "camera_canon_r6.jpg";
var cam_tit    = "Canon EOS R6, 20.2 Mega Pixels.";
var dir        = maindir+"pics/2408frbird/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "";
//var midi_cr    = new Array("","");
 
if(window.usechinese){
    title      = "法国观鸟";
    cam_tit    = "佳能EOS R6相机，2020万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<63;i++){
        this[0][i] = "2408frbird_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "黑顶林莺，雌性，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][1] = "林鹨，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][2] = "水鹨，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][3] = "赤胸朱顶雀，雌性/未成年，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][4] = "赭红尾鸲，雌性，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][5] = "赭红尾鸲，雌性，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][6] = "白背矶鸫，雌性，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][7] = "白背矶鸫，雌性，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][8] = "林鹨，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][9] = "林鹨，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][10] = "穗䳭，未成年，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][11] = "赤胸朱顶雀，雄性，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][12] = "赤胸朱顶雀，雌性，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][13] = "胡兀鹫，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][14] = "黄嘴山鸦，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省科隆比耶山隘。";
        this[1][15] = "短趾雕，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省大博尔南恰尼永镇。";
        this[1][16] = "岩燕，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省大博尔南恰尼永镇。";
        this[1][17] = "黄嘴山鸦，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省夏蒙尼市南针峰。";
        this[1][18] = "黄嘴山鸦，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省夏蒙尼市南针峰。";
        this[1][19] = "西方毛脚燕，奥弗涅-罗纳-阿尔卑斯大区上萨瓦省夏蒙尼市南针峰。";
        this[1][20] = "西牛背鹭，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][21] = "宽尾树莺，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][22] = "红隼，雌性，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][23] = "乌灰鹞，未成年，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][24] = "寒鸦，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][25] = "黄爪隼，雄性，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][26] = "黄爪隼，雌性，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][27] = "棕扇尾莺，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][28] = "白腰草鹬，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省库苏尔斯德克劳自然保护区。";
        this[1][29] = "家燕，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][30] = "大红鹳，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][31] = "大红鹳，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][32] = "红嘴鸥，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][33] = "苍鹭，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][34] = "黑翅长脚鹬，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][35] = "黑翅长脚鹬，未成年，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][36] = "白琵鹭，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][37] = "彩鹮，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][38] = "鹤鹬，未成年，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][39] = "鹤鹬，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][40] = "青脚鹬，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][41] = "白鹭，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][42] = "金眶鸻，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][43] = "白额燕鸥，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][44] = "崖沙燕，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][45] = "红嘴鸥，未成年，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][46] = "白鹳，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][47] = "灰斑鸠，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][48] = "青山雀，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省圣马丁德克罗镇桤木池塘。";
        this[1][49] = "凤头䴙䴘，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省圣马丁德克罗镇桤木池塘。";
        this[1][50] = "北长尾山雀，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省圣马丁德克罗镇桤木池塘。";
        this[1][51] = "小斑啄木鸟，雌性，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省圣马丁德克罗镇桤木池塘。";
        this[1][52] = "斑姬鹟，雌性，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][53] = "黑尾塍鹬，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][54] = "反嘴鹬，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省蓬德高鸟类公园。";
        this[1][55] = "黄腿银鸥，未成年，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省马赛市守护圣母圣殿。";
        this[1][56] = "黄腿银鸥，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省马赛市守护圣母圣殿。";
        this[1][57] = "蓝胸佛法僧，普罗旺斯-阿尔卑斯-蓝色海岸大区罗纳河口省阿尔勒市滨海圣玛丽路。";
        this[1][58] = "疣鼻天鹅，巴黎市布洛涅森林。";
        this[1][59] = "雀鹰，雌性，巴黎市布洛涅森林。";
        this[1][60] = "小嘴乌鸦，巴黎市布洛涅森林。";
        this[1][61] = "叽喳柳莺，巴黎市布洛涅森林。";
        this[1][62] = "斑尾林鸽，巴黎市布洛涅森林。";
    }else{
        this[1][0] = "Eurasian Blackcap, female, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][1] = "Tree Pipit, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][2] = "Water Pipit, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][3] = "Eurasian Linnet, female/immature, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][4] = "Black Redstart, female, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][5] = "Black Redstart, female, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][6] = "Common Rock Thrush, female, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][7] = "Common Rock Thrush, female, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][8] = "Tree Pipit, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][9] = "Tree Pipit, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][10] = "Northern Wheatear, juvenile, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][11] = "Eurasian Linnet, male, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][12] = "Eurasian Linnet, female, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][13] = "Bearded Vulture, Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][14] = "Alpine Chough (Yellow-billed Chough), Col de la Colombière, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][15] = "Short-toed Snake Eagle, Grand-Bornand Chinaillon, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][16] = "Eurasian Crag-Martin, Grand-Bornand Chinaillon, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][17] = "Alpine Chough (Yellow-billed Chough), Aiguille du Midi, Chamonix, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][18] = "Alpine Chough (Yellow-billed Chough), Aiguille du Midi, Chamonix, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][19] = "Western House-Martin, Chamonix, Haute-Savoie, Auvergne-Rhône-Alpes.";
        this[1][20] = "Western Cattle Egret, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][21] = "Cetti's Warbler, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][22] = "Eurasian Kestrel, female, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][23] = "Montagu's Harrier, juvenile, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][24] = "Eurasian Jackdaw, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][25] = "Lesser Kestrel, male, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][26] = "Lesser Kestrel, female, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][27] = "Zitting Cisticola, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][28] = "Green Sandpiper, Réserve Naturelle des Coussouls de Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][29] = "Barn Swallow, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][30] = "Greater Flamingo, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][31] = "Greater Flamingo, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][32] = "Black-headed Gull, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][33] = "Gray Heron, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][34] = "Black-winged Stilt, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][35] = "Black-winged Stilt,  juvenile, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][36] = "Eurasian Spoonbill, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][37] = "Glossy Ibis, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][38] = "Spotted Redshank, juvenile, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][39] = "Spotted Redshank, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][40] = "Common Greenshank, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][41] = "Little Egret, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][42] = "Little Ringed Plover, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][43] = "Little Tern, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][44] = "Bank Swallow, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][45] = "Black-headed Gull, juvenile, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][46] = "White Stork, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][47] = "Eurasian Collared-Dove, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][48] = "Eurasian Blue Tit, Etang des Aulnes, Saint-Martin-de-Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][49] = "Great Crested Grebe, Etang des Aulnes, Saint-Martin-de-Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][50] = "Long-tailed Tit, Etang des Aulnes, Saint-Martin-de-Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][51] = "Lesser Spotted Woodpecker, female, Etang des Aulnes, Saint-Martin-de-Crau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][52] = "European Pied Flycatcher, female, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][53] = "Black-tailed Godwit, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][54] = "Pied Avocet, Parc Ornithologique du Pont de Gau, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][55] = "Yellow-legged Gull, juvenile, Notre-Dame de la Garde, Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][56] = "Yellow-legged Gull, Notre-Dame de la Garde, Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][57] = "European Roller, Rte des Saintes Maries de la Mer, Arles, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur.";
        this[1][58] = "Mute Swan, Bois de Boulogne, Paris.";
        this[1][59] = "Eurasian Sparrowhawk, female, Bois de Boulogne, Paris.";
        this[1][60] = "Carrion Crow, Bois de Boulogne, Paris.";
        this[1][61] = "Common Chiffchaff, Bois de Boulogne, Paris.";
        this[1][62] = "Common Wood Pigeon, Bois de Boulogne, Paris.";
    }
}
 
//web counter info
var sc_project   = 1818758;
var sc_invisible = 1;
var sc_partition = 13;
var sc_security  = "382e0c58";
//-->
