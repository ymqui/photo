<!--
//Created by Album Builder Program Tue Feb 26 18:44:44 2008
var info_url   = "";
var title      = "With My Family in China";
var cam_img    = "camera_canon_20d.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels.";
var dir        = maindir+"pics/0712family/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SaveTheBestForLast.mid";
var midi_cr    = new Array("Magic Man","http://www.wtv-zone.com/MagicMan/Tunes-Midi/Midi.html");
 
if(window.usechinese){
    title      = "我的亲人";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<39;i++){
        this[0][i] = "0712family_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "妈妈和姐姐。";
        this[1][1] = "母亲。";
        this[1][2] = "姐姐。";
        this[1][3] = "母亲。";
        this[1][4] = "外甥女琦琦放学了。";
        this[1][5] = "琦琦。";
        this[1][6] = "姐和琦琦。";
        this[1][7] = "母亲和琦琦。";
        this[1][8] = "放学回家路上。";
        this[1][9] = "琦琦。";
        this[1][10] = "父亲。";
        this[1][11] = "姐和父亲。";
        this[1][12] = "姐和父亲。";
        this[1][13] = "父亲。";
        this[1][14] = "父母亲。";
        this[1][15] = "姐和母亲。";
        this[1][16] = "姐和姐夫。";
        this[1][18] = "我和爸爸妈妈。";
        this[1][19] = "侄儿楠楠。";
        this[1][20] = "一家人吃火锅。";
        this[1][21] = "哥哥。";
        this[1][22] = "村美叔叔。";
        this[1][23] = "村美阿姨。";
        this[1][24] = "哥哥。";
        this[1][25] = "一家人合影。";
        this[1][26] = "一家人合影。";
        this[1][27] = "哥和姐。";
        this[1][28] = "姐。";
        this[1][29] = "父亲。";
        this[1][30] = "哥姐和妈妈合影。";
        this[1][31] = "和姐合影。";
        this[1][32] = "琦琦。";
        this[1][33] = "琦琦。";
        this[1][34] = "姐和琦琦母女俩。";
        this[1][35] = "琦琦。";
        this[1][36] = "琦琦。";
        this[1][37] = "琦琦和父母合影。";
        this[1][38] = "琦琦和小舅合影。";
    }else{
        this[1][0] = "My mother and sister.";
        this[1][1] = "My mother.";
        this[1][2] = "My sister.";
        this[1][3] = "My mother.";
        this[1][4] = "My niece Qiqi after school.";
        this[1][5] = "Qiqi.";
        this[1][6] = "Qiqi with her mom.";
        this[1][7] = "Qiqi with her grandma.";
        this[1][8] = "Qiqi on her way home after school.";
        this[1][9] = "Qiqi.";
        this[1][10] = "My father.";
        this[1][11] = "My father and sister.";
        this[1][12] = "My father and sister.";
        this[1][13] = "My father.";
        this[1][14] = "My parents.";
        this[1][15] = "My mother and sister.";
        this[1][16] = "My sister and brother-in-law.";
        this[1][18] = "With my parents.";
        this[1][19] = "My nephew Nannan.";
        this[1][20] = "Family at lunch.";
        this[1][21] = "My brother.";
        this[1][22] = "My uncle.";
        this[1][23] = "My aunt.";
        this[1][24] = "My brother.";
        this[1][25] = "Family photo.";
        this[1][26] = "Family photo.";
        this[1][27] = "My sister and brother.";
        this[1][28] = "My sister.";
        this[1][29] = "My father.";
        this[1][30] = "My brother, mother, and sister.";
        this[1][31] = "With my sister.";
        this[1][32] = "Qiqi.";
        this[1][33] = "Qiqi.";
        this[1][34] = "Qiqi with her mom.";
        this[1][35] = "Qiqi.";
        this[1][36] = "Qiqi.";
        this[1][37] = "Qiqi with her parents.";
        this[1][38] = "Qiqi with me.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
