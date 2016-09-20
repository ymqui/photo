<!--
var info_url   = "http://www.nmai.si.edu";
var title      = "First Americans Festival";
var cam_img    = "camera_canon_a80.jpg"
var cam_tit    = "Canon Powershot A80, 4.0 Mega Pixels."
var dir        = maindir+"pics/0409festival/"; //directory where pics are
var interval   = 5000;                         //interval for slide show in millisecond
var thumb_dir  = maindir+"thumbnail/";         //thumbnail directory
var ext        = ".jpg";                       //extension of the pic files
var midi_file  = "Indian_BuffaloDance.mid";
var midi_cr    = new Array("Elan Michaels","http://www.angelfire.com/md/elanmichaels/MIDI.html");

if(window.usechinese){
    cam_tit    = "佳能Powershot A80, 400万像素。";
    title      = "印第安人节";
}

document.title = title;

function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos, shown as browser status
    for (var i=0;i<45;i++){
        this[0][i] = "0409festival_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0]  = "印第安人博物馆, 9/21/2004开放。";
        this[1][1]  = "印第安人节，庆祝印第安人博物馆正式开放, 于9/21/2004-9/26/2004举行。";
        this[1][2]  = "爱斯基摩制鼓人。";
        this[1][3]  = "那娃惑部落草篮舞。";
        this[1][4]  = "那娃惑部落草篮舞。";
        this[1][5]  = "那娃惑部落草篮舞。";
        this[1][6]  = "那娃惑部落草篮舞。";
        this[1][7]  = "那娃惑部落弓箭舞。";
        this[1][8]  = "那娃惑部落弓箭舞。";
        this[1][9]  = "木笛表演，有如天籁。";
        this[1][10] = "那娃惑部落彩带舞。";
        this[1][11] = "那娃惑部落彩带舞。";
        this[1][12] = "那娃惑部落彩带舞。";
        this[1][13] = "那娃惑部落彩带舞。";
        this[1][14] = "年轻的那娃惑舞蹈演员。";
        this[1][15] = "那娃惑舞蹈演员。";
        this[1][16] = "他们是哪个星球来的? --夏威夷原著舞蹈团。";
        this[1][17] = "夏威夷舞蹈。";
        this[1][18] = "夏威夷舞蹈。";
        this[1][19] = "夏威夷舞蹈。";
        this[1][20] = "夏威夷舞蹈。";
        this[1][21] = "夏威夷舞蹈。";
        this[1][22] = "夏威夷舞蹈。";
        this[1][23] = "夏威夷舞蹈。";
        this[1][24] = "夏威夷舞蹈。";
        this[1][25] = "夏威夷舞蹈。";
        this[1][26] = "夏威夷舞蹈。";
        this[1][27] = "夏威夷舞蹈。";
        this[1][28] = "夏威夷舞蹈。";
        this[1][29] = "夏威夷舞蹈演员。";
        this[1][30] = "鼓手姐妹: Pualani Kanahele 和 Nalani Kanak'ole, 她们是舞蹈团领队。";
        this[1][31] = "秘鲁Taquile岛来的客出娃部落舞蹈团。";
        this[1][32] = "客出娃部落舞蹈。";
        this[1][33] = "客出娃部落舞蹈。";
        this[1][34] = "客出娃部落舞蹈。";
        this[1][35] = "客出娃部落舞蹈。";
        this[1][36] = "客出娃部落耕作舞蹈。";
        this[1][37] = "客出娃部落耕作舞蹈。";
        this[1][38] = "印第安人博物馆。";
        this[1][39] = "印第安人博物馆。";
        this[1][40] = "印第安人博物馆。";
        this[1][41] = "印第安人博物馆。";
        this[1][42] = "印第安人博物馆。";
        this[1][43] = '印第安人博物馆：主题为“我们的生活”的展览。';
        this[1][44] = "印第安人博物馆: 阿兰.豪瑟创作的雕塑。";
    }else{
        this[1][0]  = "National Museum of the American Indian, opened on Septempber 21, 2004.";
        this[1][1]  = "First Americans Festival celebrating the grand opening of the National Museum of the American Indian.";
        this[1][2]  = "Eskimo drum maker.";
        this[1][3]  = "Basket dance performed by young Dine Tah Navajo dancers.";
        this[1][4]  = "Navajo basket dance.";
        this[1][5]  = "Navajo basket dance.";
        this[1][6]  = "Navajo basket dance.";
        this[1][7]  = "Navajo bow and arrow dance.";
        this[1][8]  = "Navajo bow and arrow dance.";
        this[1][9]  = "Navajo flute performance, just beautiful.";
        this[1][10] = "Navajo ribbon dance.";
        this[1][11] = "Navajo ribbon dance.";
        this[1][12] = "Navajo ribbon dance.";
        this[1][13] = "Navajo ribbon dance.";
        this[1][14] = "Navajo dancers.";
        this[1][15] = "Navajo dancers.";
        this[1][16] = "Who the hell are they? Halau O Kekuhi, native Hawaiian dancers.";
        this[1][17] = "Hawaiian hula(dance).";
        this[1][18] = "Hawaiian hula.";
        this[1][19] = "Hawaiian hula.";
        this[1][20] = "Hawaiian hula.";
        this[1][21] = "Hawaiian hula.";
        this[1][22] = "Hawaiian hula.";
        this[1][23] = "Hawaiian hula.";
        this[1][24] = "Hawaiian hula.";
        this[1][25] = "Hawaiian hula.";
        this[1][26] = "Hawaiian hula.";
        this[1][27] = "Hawaiian hula.";
        this[1][28] = "Hawaiian hula.";
        this[1][29] = "Hawaiian hula dancer.";
        this[1][30] = "Drum sisters: Pualani Kanahele and Nalani Kanak'ole, leader of the dance group.";
        this[1][31] = "Los Nativos de la Isla Taquile, a Quechua dance group from Peru.";
        this[1][32] = "Not sure what this dance is, probably a carnival dance.";
        this[1][33] = "Quechua dance.";
        this[1][34] = "Quechua dance.";
        this[1][35] = "Quechua dance.";
        this[1][36] = "Quechua agricultural dance.";
        this[1][37] = "Quechua agricultural dance.";
        this[1][38] = "National Museum of the American Indian.";
        this[1][39] = "National Museum of the American Indian.";
        this[1][40] = "National Museum of the American Indian.";
        this[1][41] = "National Museum of the American Indian.";
        this[1][42] = "National Museum of the American Indian.";
        this[1][43] = "National Museum of the American Indian: Our Lives exhibitiion.";
        this[1][44] = "National Museum of the American Indian: Sculpture by Allan Houser.";
    }
    makeface = new Array(); //make funny faces here
    makeface[0] = 16;
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
