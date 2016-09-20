<!--
//Created by Album Builder Program Sun Jun 17 20:29:00 2007
var info_url   = "http://www.bmdc.org";
var title      = "Bowen McCauley Dance";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0706bmd/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "AGirlLikeYou.mid";
var midi_cr    = new Array("Gabe's Best Midi Collection","http://smokeys-trail.com/Sound/midi.html");
 
if(window.usechinese){
    title      = "Bowen McCauley Dance舞蹈团演出";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<36;i++){
        this[0][i] = "0706bmd_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "这个舞蹈表现的是两兄弟之间的手足之情。";
        this[1][1] = "儿童的天真幻想。";
        this[1][2] = "年轻人的热情。";
        this[1][11] = "观众中的儿童被邀上舞台一起跳。";
        this[1][12] = "压轴舞，名字怪怪的，叫扁桃核，脑里的一个结构，跟情感有关。";
        this[1][35] = "团长Lucy Bowen McCauley。";
    }else{
        this[1][0] = "The title of this dance is "+'"Hand Me Down Trousers"'+".";
        this[1][1] = "The title of this dance is "+'"Is It Any Wonder"'+".";
        this[1][2] = "The title of this dance is "+'"Step It Up"'+".";
        this[1][9] = "The title of this dance is "+'"Mambozart"'+".";
        this[1][11] = "Children in the audience are invited to the stage.";
        this[1][12] = "The title of the last dance is "+'"Amygdala"'+", which is a primitive brain structure essntial for emotions.";
        this[1][35] = "Lucy Bowen McCauley, the director of Bowen McCauley Dance.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
