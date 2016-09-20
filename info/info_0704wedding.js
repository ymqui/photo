<!--
//Created by Album Builder Program Wed Apr 18 21:37:20 2007
var info_url   = "";
var title      = "Xiaohua and Weidong's Wedding";
var cam_img    = "camera_canon_all.jpg";
var cam_tit    = "Canon SLR EOS 20D, 8.2 Mega Pixels; EOS 300D, 6.3 Mega Pixels.";
var dir        = maindir+"pics/0704wedding/";
var thumb_dir  = maindir+"thumbnail/";
var interval   = 5000;
var ext        = ".jpg";
var midi_file  = "SometimesWhenWeTouch.mid";
var midi_cr    = new Array("Midi Heaven","http://www.fortunecity.com/tinpan/newbonham/651/midiheaven.htm");
var blocksave  = false;
 
if(window.usechinese){
    title      = "卫东和晓华的婚礼";
    cam_tit    = "佳能单镜头反光式20D相机，820万像素；300D相机，630万像素。";
}
 
document.title = title;
 
function initAlbum(){
    this.length = 2;
    this[0] = new Array();  //store file names
    this[1] = new Array();  //store file infos,shown as browser status
    for (var i=0;i<85;i++){
        this[0][i] = "0704wedding_"+(i+1).toString();
        this[1][i] = "";
    }
    if(window.usechinese){
        this[1][0] = "女方家长代表进入教堂。";
        this[1][1] = "男方家长代表点燃蜡烛。";
        this[1][2] = "新郎等候新娘的到来。";
        this[1][4] = "新娘步入教堂。";
        this[1][5] = "迈入婚姻的殿堂, 是喜悦？是紧张？";
        this[1][6] = "终于找到了你。";
        this[1][7] = "仰望神，心中有说不出的感恩，是他把他俩带到一起。";
        this[1][8] = '合唱：“奇异恩典，何等甘甜...”';
        this[1][9] = "Tim: 以弗所书５章，你们做丈夫的要爱自己的妻子...你们做妻子的也当敬重她的丈夫。";
        this[1][10] = '张牧师：我想用神的话来勉励这对新人，“爱是恒久忍耐，又有恩慈，爱是...”';
        this[1][11] = '伴娘: “神的话就是有智慧”<br>花童: “虽然我现在还不太明白，可我还是要把神的话先记住！”';
        this[1][12] = '“我们爱，因为神先爱我们...”';
        this[1][13] = "感谢神！";
        this[1][14] = '张牧师：“一男一女，一夫一妻，一生一世”';
        this[1][15] = '张牧师："祝愿你们..."';
        this[1][17] = "牢记神的话！";
        this[1][19] = '杜牧师：“婚姻是神所设立的和祝福的..."';
        this[1][20] = "新娘父母代表。";
        this[1][21] = "新郎父母代表。";
        this[1][22] = '“感谢神，感谢你的恩典！”';
        this[1][24] = "“我愿意。”";
        this[1][25] = '新郎：“小小指环，做为我们婚姻的记号...”';
        this[1][26] = "执子之手，与子偕老!";
        this[1][27] = '新娘：“小小指环，做为我们婚姻的记号...”';
        this[1][28] = '新娘："我要爱你到永远..."';
        this[1][29] = "1+1=1";
        this[1][30] = "点同心烛。";
        this[1][33] = "牵手一世情。";
        this[1][34] = "Ring bearer: 我今天也很帅！";
        this[1][38] = '诗班："因你与我同行, 我就不会孤寂..."';
        this[1][39] = "PP伴娘。";
        this[1][41] = "杜牧师祝福祷告。";
        this[1][42] = "在神，人面前签署婚约。";
        this[1][48] = "新郎亲吻新娘。";
        this[1][49] = "我们走啦：）";
        this[1][50] = "何先生，何太太～～～";
        this[1][51] = "钢琴师。";
        this[1][52] = "与最可爱的人（帮忙的众兄弟姐妹）留影。";
        this[1][54] = '与新娘的属灵“妈妈”留影。';
        this[1][55] = "鲜花，美女...";
        this[1][57] = "与婚礼策划Yin 一家留影。";
        this[1][58] = "与外州来的朋友留影。";
        this[1][59] = "与新娘的教授及同学们留影。";
        this[1][60] = '与“真理”团契留影。';
        this[1][61] = '与“青年”团契留影。';
        this[1][62] = '与“丰收教会”留影。';
        this[1][63] = '与“马大查经班”留影。';
        this[1][64] = '与“乐道堂”留影。';
        this[1][69] = '“我们结婚啦！”';
        this[1][70] = "我们的帅帅伴郎。";
        this[1][71] = '"新娘新郎来啦！”';
        this[1][72] = "回眸一笑。";
        this[1][73] = "肚子都笑疼了。";
        this[1][75] = "新娘的教授致辞。";
        this[1][76] = "David 致辞勉励。";
        this[1][77] = "修大哥总是那么幽默。";
        this[1][78] = '看修大哥还有什么“花招”。';
        this[1][79] = '新娘：“我嫁卫东，是因为..."';
        this[1][80] = '新郎："我娶晓华，是因为...”';
        this[1][81] = "喜在心头，乐在眉梢。";
        this[1][83] = "结婚蛋糕。";
        this[1][84] = "祝新郎新娘白头偕老！";
    }else{  
        this[1][0] = "The Representative of Bride's Mom entered the Church.";
        this[1][1] = "The Representative of Groom's Mom lighted the candle.";
        this[1][2] = "The Groom and bestmen waiting for the Bride.";
        this[1][3] = "Flower girls.";
        this[1][4] = "The Bride entering the Church.";
        this[1][5] = "Walking into the palace of marriage, are you joyful, or nervous?";
        this[1][6] = "Finally, I've found you.";
        this[1][7] = "Look upon God with THANKS, it is He who brought them together.";
        this[1][8] = '"Amazing grace, how precious..."';
        this[1][9] = 'Tim: "Husbands, love your wives...and the wife must respect her husband."(Ephesians chapter 5)';
        this[1][10] = 'Pastor Zhang: I would like to encourage this new couple with words from Bible, "Love is patience, love is kindness, love is..."';
        this[1][11] = 'Bridesmaids: "God'+"'"+'s words sound wise."<br>Flower girls: "Although I can'+"'"+'t follow now, yet I should memorize it."';
        this[1][12] = '"We love because God loves us first."';
        this[1][13] = '"Thank you, Lord!"';
        this[1][14] = '"One man and one woman, one husband and one wife for life long marriage."';
        this[1][15] = 'Pastor Zhang: "Bless you two..."';
        this[1][17] = "Obey God's words!";
        this[1][19] = 'Pastor To: "Marriage is set and blessed by our God..."';
        this[1][20] = "Representatives of the Bride's parents.";
        this[1][21] = "Representatives of the Groom's parents.";
        this[1][22] = '"Thank you Lord for your Grace!"';
        this[1][24] = '"Yes, I do."';
        this[1][25] = 'Groom: "This ring is the sign of our marriage..."';
        this[1][26] = 'Groom: "Let'+"'"+'s hold hands forever..."';
        this[1][27] = 'Bride: "This ring is the sign of our marriage..."';
        this[1][28] = 'Bride: "I will love you forever..."';
        this[1][29] = '1+1=1';
        this[1][30] = "Lighting the unity candle.";
        this[1][33] = "Forever.";
        this[1][34] = "Ring bearer: let me look more handsome!";
        this[1][38] = 'Choir: "Because you walk along with me, I will not be alone..."';
        this[1][39] = "Pretty bridesmaids.";
        this[1][41] = "Pastor To blesses and prays for the new couple.";
        this[1][42] = "Signing the marriage covenant before God and people.";
        this[1][48] = "Kissing the Bride.";
        this[1][49] = "Bye...";
        this[1][50] = "Mr. and Mrs. He.";
        this[1][51] = "Pianist.";
        this[1][52] = "Photo with the nice helpers.";
        this[1][54] = "Photo with the Bride's spiritual mother.";
        this[1][55] = "Flower, beauties...";
        this[1][57] = "Photo with Yin's family.";
        this[1][58] = "Photo with friends from out of town.";
        this[1][59] = "Photo with the Bride's professors and colleagues.";
        this[1][60] = 'Photo with "Truth" fellowship.';
        this[1][61] = 'Photo with "Young Adult" fellowship.';
        this[1][62] = "Photo with members from Harvest Church.";
        this[1][63] = "Photo with members from Maryland Chinese Bible Study Group.";
        this[1][64] = "Photo with members from Chinese Bible Church at College Park.";
        this[1][69] = '"We are married!"';
        this[1][70] = "Cool groomsmen.";
        this[1][71] = '"Here they come!"';
        this[1][72] = "Smile.";
        this[1][73] = "Laugh, laugh, and laugh...";
        this[1][75] = "Bride's Professor.";
        this[1][76] = "David offers advice to the newlyweds.";
        this[1][77] = "Brother Xiu is so humorous.";
        this[1][78] = "Let's see what is the next trick.";
        this[1][79] = 'Bride: "I married Weidong, it is because..."';
        this[1][80] = 'Groom: "I married Xiaohua, it is because..."';
        this[1][81] = "Rejoice.";
        this[1][83] = "Wedding cake.";
        this[1][84] = "Xiaohua and Weidong, wish you a lifetime of happiness together.";
    }
}
 
//web counter info
var sc_project   = 613905;
var sc_invisible = 1;
var sc_partition = 3;
var sc_security  = "f5cfdd4f";
//-->
