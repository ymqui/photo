<!--
//////////////////////////////////
//  6/2004 Yiming Qiu           //
//////////////////////////////////
var winWidth      = 800;            //window width for old browser
var winHeight     = 6000;            //window height for old browser
var currentWidth  = 0;              //actual image width
var currentHeight = 0;              //actual image height
var hiddenWidth   = 0;		    //actual hidden image width
var hiddenHeight  = 0;		    //actual hidden image height
var fittowindow   = true;           //flag for fitting the image to the window
var midiOn        = true;           //flag for midi music
var waitcounter   = 0;
var opacity       = 0.99;
var transtimerOn  = false;
var hiddenimg;

var slidetimerID = null;
var slidetimerOn = false;

var swaptimerID  = null;
var swaptimerOn  = false;
var swapinterval = 500;



if(window.blocksave){
    document.onmousedown=function(event){
        if (!event) var event = window.event;
        if (event.button==2){
           if (window.usechinese){
              alert('该网页上的照片受版权保护，欲使用请联系ymqui@yahoo.com。');
           }else{
              alert('The photograph is copyright protected. Please contact ymqui@yahoo.com for more information.');
           }
        }
    }
}

if(!window.index){
    var index = 0;      //default starting from file 0
}

function init(){
    window.focus();
    try{
        photoalbum = new initAlbum();
    }catch(er){      //in case the album name is wrong
        location.href = "";
    }
    num = photoalbum[0].length;
    face_yn  = new Array(num);
    for (var i=0;i<num;i++) face_yn[i] = false;
    if (window.makeface) {
        for (var i=0;i<makeface.length;i++) {
          face_yn[makeface[i]] = true;
        }
    }
    duration = 1.5;
    anstr = new Array();
    if(Math.floor(Math.random()*2)==0){
        anstr[0] = "progid:DXImageTransform.Microsoft.gradientWipe(duration="+duration.toString()+")"; //GradientWipe
    }else{
        anstr[0] = "blendTrans(duration="+duration.toString()+")";                                     //fade in
    }
    anstr[1] = "revealTrans(duration="+duration.toString()+",transition=2)";                           //circile in
    anstr[2] = "revealTrans(duration="+duration.toString()+",transition=3)";                           //circle out
    anstr[3] = "progid:DXImageTransform.Microsoft.Wheel(duration="+duration.toString()+",spokes=10)";  //Wheel
    if(index==-1){
        index = num-1;
        getCamera();
    }else{
        if(index<0) index  = 0;
        if(index>num-1) index = num-1;
        index--;
        loadHidden();
	if (slideshow){
           slideShow();
        }else{
           index++;
           swap(false);
        }
    }
}

function resize(ishidden){
    var tmpW = currentWidth;
    var tmpH = currentHeight;
    if(fittowindow){
       try{
          if(document.body && typeof(document.body.clientWidth)=='number'){
              //Gecko 1.0(Netscape 7) and IE5+
              winWidth  = document.body.clientWidth-20;
              winHeight = document.body.clientHeight-38;
          }else if(typeof(window.innerWidth)=='number'){
              //Navigator 4.x, Netscape 6.x, CompuServe 7 and Opera  
              winWidth  = window.innerWidth-30;
              winHeight = window.innerHeight-40;
          }else if(document.body&&typeof(document.body.offsetWidth)=='number'){
              //IE4
              winWidth  = document.body.offsetWidth-50;
              winHeight = document.body.offsetHeight-40;
          }else{ 
              winWidth  = 640;
              winHeight = 480;
          }
       }catch(er){
          winWidth  = 640;
          winHeight = 480;
       }
       winHeight = winHeight-40;  //allow space for text
       if (tmpW>winWidth){
          tmpW = winWidth;
          tmpH = currentHeight*winWidth/currentWidth;
       }
       if (tmpH>winHeight){
          tmpH = winHeight;
          tmpW = currentWidth*winHeight/currentHeight;
       }
    }
    if(document.images){
       document.images["visible"].width  = tmpW;
       document.images["visible"].height = tmpH;
    }else if(document.getElementById){
       var tmp = document.getElementById("visible");
       tmp.width  = tmpW;
       tmp.height = tmpH;
    }
}

function loadHidden(){
    var tmp = index+1;
    if (tmp>num-1){
        tmp = 0;
    }
    hiddenimg = new Image();
    hiddenimg.src = dir+photoalbum[0][tmp]+ext;
}

function showmesg(mesg){
    divcontent("text",mesg);
}

function reform(mesg){
    var tmpmesg='';
    var tmpchar='';
    var skip = false;
    for(var i=0;i<mesg.length;i++){
	tmpchar=mesg.charAt(i);
	if(tmpchar=='<'){
		skip = true;
		tmpmesg = tmpmesg+' ';
	}
	if(skip){
		if(tmpchar=='>') skip = false;
	}else{
		tmpmesg = tmpmesg+tmpchar;
	}
    }
    return tmpmesg;
}


function fadeout(){
    if(opacity>0.1){
        opacity-=0.98;//0.06;
        if(opacity<=0){opacity = 0.01;}        
        document.images["visible"].style.MozOpacity = opacity;
        transtimerOn = true;
        transtimerID = setTimeout('fadeout()',30); 
    }else{
	document.images["visible"].src = hiddenimg.src;
        currentWidth  = hiddenimg.width;
        currentHeight = hiddenimg.height;
        resize();
        loadHidden();
        try{
	    //opacity = 0.05;
            fadein();
        }catch(er){}
    }
}

function fadein(){
    if(opacity<0.99){
        opacity+=0.98;//0.06;
        if(opacity>=1){opacity=0.99;}        
        document.images["visible"].style.MozOpacity = opacity;
        transtimerID = setTimeout('fadein()',30); 
    }
}

function swap(iscamera){
    if (hiddenimg.complete){
       var tmp_cap = "";
       var tmp_alt = "";
       var tmp_ani = true;
       if(iscamera){
           tmp_cap = "[0/"+num.toString()+"]  "+cam_tit;
           tmp_alt = cam_tit;
       }else{
           tmp_cap = "["+(index+1).toString()+"/"+num.toString()+"]  "+photoalbum[1][index];
           tmp_alt = photoalbum[1][index];
       }
       showmesg("");
       try{
           var anim_id = 0;
           if (index==0)    {anim_id = 2;}
           if (index==num-1){anim_id = 1;}
           if (iscamera)    {anim_id = 3;}
           document.images["visible"].style.filter=anstr[anim_id];
           document.images["visible"].filters[0].Apply();
       }catch(er){
           tmp_ani = false;
       }
       document.images["visible"].alt = tmp_alt;
       if(tmp_ani){
	     document.images["visible"].src = hiddenimg.src;
           currentWidth  = hiddenimg.width;
           currentHeight = hiddenimg.height;
           resize();
           try{
              document.images["visible"].filters[0].Play();
           }catch(er){}
           loadHidden();
       }else{
           opacity = 0.99;
           try{
              if(transtimerOn){
                  clearTimeout(transtimerID);
                  transtimerOn = false;
              }
              fadeout();
           }catch(er){
              document.images["visible"].src = hiddenimg.src;
              document.images["visible"].alt = tmp_alt;
              currentWidth  = hiddenimg.width;
              currentHeight = hiddenimg.height;
              resize();
              loadHidden();
           }
       }
       window.status = reform(tmp_cap);
       showmesg(tmp_cap);
       if (face_yn[index] &&(!iscamera)) {  //check make face
           for(var i=0;i<4;i++) {
               var tmp = "face_"+i.toString();
               document.images[tmp].width  = 15;
               document.images[tmp].height = 15;
           }
       }else{
           for(var i=0;i<4;i++) {
               var tmp = "face_"+i.toString();
               document.images[tmp].width  = 0;
               document.images[tmp].height = 0;
           }
       }
       if(swaptimerOn){
           clearTimeout(swaptimerID);
           swaptimerOn = false;
       }
       waitcounter = 0;
       if(slidetimerOn){
           clearTimeout(slidetimerID);
           slidetimerID = setTimeout('slideShow()',interval);
       }
    }else{
       waitcounter++;
       if(window.usechinese){
          if(waitcounter>10){
              if(waitcounter>20){
                 if((waitcounter>100)&&slidetimerOn){
                     window.status = "可能卡住了，请关掉和重开自动放映。";
                 }else{
                     window.status = "晕倒，还得等...";
                 }
              }else{
                  window.status = "怎么传得这么慢，等吧...";
              }
          }else{
              window.status = "上载照片，请稍候...";
          }
       }else{
          if((waitcounter>100)&&slidetimerOn){
              window.status = "Please try turning off and on the slide show.";
          }else{
              window.status = "loading image...";
          }
       }
       swaptimerOn = true;
       if(iscamera){
          swaptimerID = setTimeout('swap(true)',swapinterval);
       }else{
          swaptimerID = setTimeout('swap(false)',swapinterval);
       }
    }
}

function getNext(){
    stopShow();
    index += 1;
    if (index > (num-1)){
       index = 0;
    }
    swap(false);
}

function getPrev(){
    stopShow();
    for(var j=0;j<2;j++){
        index--;
        if (index<0){
            index = num-1;
        }
    }
    loadHidden();
    index++;
    if (index>(num-1)){
       index = 0;
    }
    swap(false);
}

function getFirst(){
    stopShow();
    index = -1;
    loadHidden();
    index = 0;
    swap(false);
}

function getLast(){
    stopShow();
    index = (num-2);
    loadHidden();
    index = (num-1);
    swap(false);
}

function getCamera(){
    stopShow();
    hiddenimg = new Image();
    hiddenimg.src = thumb_dir+cam_img;
    swap(true);
}


function slideShow(){
    if(!slidetimerOn){
        document.images["slideimg"].src = slideshowimg[1].src;
        try{
           document.images["slideimg"].onmouseover = switchmesg2;
        }catch(er){}
    }
    slidetimerOn = true;
    if (!swaptimerOn){
        index++;
        if (index>(num-1)){
            index = 0;
        }
        swap(false);
    }
}

function stopShow(){
    if(transtimerOn){
       clearTimeout(transtimerID);
       transtimerOn = false;
    }
    if(slidetimerOn){
       clearTimeout(slidetimerID);
       slidetimerOn = false;
       document.images["slideimg"].src = slideshowimg[0].src;
    }
    try{
        document.images["slideimg"].onmouseover = switchmesg2;
    }catch(er){}
}

function moreInfo(){
    var wattr = 'width=750,height=730,left=100,top=10,directories=yes,location=yes,';
    wattr  = wattr+'menubar=yes,resizable=yes,scrollbars=yes,status=yes,titlebar=yes,';
    wattr  = wattr+'toolbar=yes';
    newWin = window.open(info_url,'newWin',wattr);
    newWin.focus();
}

function backhome(url){
    newWin = window;
    try{
        if(!window.opener.closed){
             newWin = window.opener;
        }
        if(newWin.location.href!=url){ 
             newWin.location.href = url;
        }
    }catch(er){
        newWin = window;
        if(newWin.location.href!=url){ 
             newWin.location.href = url;
        }
    }
    newWin.focus();
}

function refit(){
    fittowindow = !fittowindow;
    if(fittowindow){
        document.images["refitimg"].src = sizeimg[0].src;
    }else{
        document.images["refitimg"].src = sizeimg[1].src; 
    }
    try{
        document.images["refitimg"].onmouseover = switchmesg1;
    }catch(er){}
    resize();
    if(fittowindow) resize();
}

function switchmesg1(){
    if(fittowindow){
        if(window.usechinese){
            mesg = "照片本来大小";
        }else{
            mesg = "Actual Photo Size";
        }
    }else{
        if(window.usechinese){
            mesg = "照片恰当大小";
        }else{
            mesg = "Fit to Browser Window";
        }
    }
    borderit(this,color_1);
    popupmesg(mesg);
}

function startstopShow(){
    if(!slidetimerOn){
       slideShow();
    }else{
       stopShow();
    }
}

function switchmesg2(){
    if(slidetimerOn){
        if(window.usechinese){
            mesg = "停止放映/按F11全屏显示";
        }else{
            mesg = "Stop Slide Show/Press F11 Full Screen";
        }
    }else{
        if(window.usechinese){
            mesg = "自动放映/按F11全屏显示";
        }else{
            mesg = "Start Slide Show/Press F11 Full Screen";
        }
    }
    borderit(this,color_1);
    popupmesg(mesg);
}

function startstopMidi(){
    midiOn = !midiOn;
    try{
        document.images["midiimg"].onmouseover = switchmesg3;
    }catch(er){}
    if(!midiOn){
        document.images["midiimg"].src = musicimg[0].src;
        stopmidi();
    }else{
        document.images["midiimg"].src = musicimg[1].src;
        playmidi();
    }
}

function switchmesg3(){
    if(midiOn){
        if(window.usechinese){
            mesg = "停止音乐";
        }else{
            mesg = "Stop Music";
        }
    }else{
        if(window.usechinese){
            mesg = "播放音乐";
        }else{
            mesg = "Play Music";
        }
    }
    borderit(this,color_1);
    popupmesg(mesg);
}

function switchlang(){
    stopShow();
    var tmpdir = "";
    if(window.usechinese){
        tmpdir = "../photo/";
    }else{
        tmpdir = "../zhaopian/";
    }
    if(window.friendalbum){
        tmpdir = "../"+tmpdir+"friend/";
    }else if(window.yunalbum){
        tmpdir = "../"+tmpdir+"yun/";
    }else if(window.familyalbum){
	tmpdir = "../"+tmpdir+"family/";
    }else if(window.birdalbum){
        tmpdir = "../"+tmpdir+"birds/";
    }
    location.href = tmpdir+"showphoto.html?"+window.location.search.substring(1);
}
//-->
