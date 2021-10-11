<!--
var mididir = "http://www.pha.jhu.edu/~qiuym/photo/midi/";
if (googledrive) mididir = "https://ymqui.github.io/photo/midi/"; 
if(window.friendalbum){
    homeurl = homeurl+"friend/";
}
if(window.yunalbum){
    homeurl = homeurl+"yun/";
}
if(window.restalbum){
    homeurl = homeurl+"restaurant/";
}
if(window.familyalbum){
    homeurl = homeurl+"family/";
}
if(window.birdalbum){
    homeurl = homeurl+"birds/";
}
csdpdir = "http://www.ugrad.cs.jhu.edu/~quiym/";

var albumid = window.location.search.substring(1);
var showall = /showall/.test(albumid);
var cn_ind  = window.usechinese?1:0;
var slideshow = true;
var blocksave = true;

if (showall){
   homeurl     = homeurl+"showphoto.html?qiuqiu";
}

if (albumid.length==0){
    location.href = "";
}else{
    var substr = albumid.split('&');
    if (substr.length>1){
       albumid = substr[0];
       try{
          index = Math.floor(substr[1]);
          if(index>0){
             index--;
             slideshow = false;
          }else if (index==0){
             index = -1;	//show camera
             slideshow = false;
          }else{
             index = 0;
          }
       }catch(er){
          index = 0;
       }
    }     
}
document.write('<SCRIPT TYPE="text/javascript" LANGUAGE="javascript" SRC="'+maindir+'info/info_'+albumid+'.js"></SCRIPT>');
//-->
