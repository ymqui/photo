<!--
  if (window.whitebackground){
     var prefix  = "";		//prefix of the thumbnail button names
     var color_0 = "white";	//background color
     var color_1 = "dimgray";	//frame color
     var color_2 = "#E9E9E9";	//frame background color
     var color_3 = "black";	//caption color
     var color_4 = "#F6F6F6";	//hidden text colors
     if (Math.floor(Math.random()*3)==0){
        var loadgif = "loading_white.gif";
     }else{
        if (Math.floor(Math.random()*2)==0){
           var loadgif = "loading_white1.gif";
        }else{
           var loadgif = "loading2.gif";
        }
     }
  }else{
     var prefix  = "b_";
     var color_0 = "#1A2020";
     var color_1 = "#E0E0E0";
     var color_2 = "#888888";
     var color_3 = "#E0E0E0";
     var color_4 = "#282828";
     if (Math.floor(Math.random()*2)==0){
        var loadgif = "loading.gif";
     }else{
        if (Math.floor(Math.random()*2)==0){
           var loadgif = "loading1.gif";
        }else{
           var loadgif = "loading2.gif";
        }
     }
  }
  if (cellphone) prefix = "c_";

  document.bgColor = color_0;
     
  document.write('<DIV ID="loading" style="POSITION:absolute; LEFT:0; TOP:0; VISIBILITY:hidden; Z-INDEX:200"><img src="'+thumb_dir+loadgif+'"></img></DIV>');
 
  function playmidi(){
    try{
       document.midi.play();
    }catch(er){
       try{
           divcontent("mididiv",midistr);
       }catch(er){
           showmesg('Error occurred in playing midi. Please try Internet Explorer or Netscape.');
           startstopMidi();
       }
    }
  }

  function stopmidi(){
    try{
       document.midi.pause();
    }catch(er){
       try{
           divcontent("mididiv","");
       }catch(er){
           showmesg('Error occurred in stopping midi. Please try Internet Explorer or Netscape.');
           startstopMidi();
       }
    }
  }

  document.write('<style type="text/css">');
  document.write('<!--');
  document.write('p{padding:0px; border:0px;margin:0px}');
  document.write('.borderimage{');
  document.write('  border:1px solid '+color_0+';');
  document.write('  margin-bottom:1px;');
  document.write('}');
  document.write('-->');
  document.write('</style>');

  document.write('<center>');
  var use_url = false;
  var use_cam = false;
  var use_mid = false;
  var use_obj = true;
  var use_cr  = false;
 
  if(window.info_url){
     if (info_url.length>0) use_url = true;
  }
  if(window.cam_img){
     if (cam_img.length>0) use_cam = true;
  }
  if(window.midi_file){
     use_mid = true;
     var agt = navigator.userAgent.toLowerCase();
     if((agt.indexOf("msie")!=-1)&&(agt.indexOf("opera")==-1)){
         use_obj = false;
     }
     if (midi_file.length==0) use_mid=false;
     if(use_mid){
         if(window.midi_cr){
             if(midi_cr.length!=0) use_cr=true;
         }
     }
  }
  if(cellphone) document.write('<br>');
  if(window.usechinese){
     document.write('<A onclick="getFirst()"><IMG SRC="'+thumb_dir+prefix+'first.png"'+borderstr('第一张')+'></A>');
     document.write('<A onclick="getPrev()"><IMG SRC="'+thumb_dir+prefix+'previous.png"'+borderstr('前一张或点击照片左侧')+'></A>');
     document.write('<A onclick="getNext()"><IMG SRC="'+thumb_dir+prefix+'next.png"'+borderstr('下一张或点击照片右侧')+'></A>');
     document.write('<A onclick="getLast()"><IMG SRC="'+thumb_dir+prefix+'last.png"'+borderstr('最后一张')+'></A>');
     document.write('<IMG SRC="'+thumb_dir+prefix+'vbar.png" style="margin-bottom:2px">');
     document.write('<A onclick="startstopShow()"><IMG name="slideimg" id="slideimg" SRC="'+thumb_dir+prefix+'slideshow.png"'+borderstr('自动放映/按F11全屏显示')+'></A>');
     if(use_mid){
        document.write('<A onclick="startstopMidi()"><IMG name="midiimg" id="midiimg" SRC="'+thumb_dir+prefix+'stopmidi.png"'+borderstr('停止音乐')+'></A>');
     }
     document.write('<A onclick="refit()"><IMG name="refitimg" id="refitimg" SRC="'+thumb_dir+prefix+'size_actual.png"'+borderstr('照片本来大小')+'></A>');
     document.write('<IMG SRC="'+thumb_dir+prefix+'vbar.png" style="margin-bottom:2px">');
     if(use_cam){
        document.write('<A onclick="getCamera()"><IMG SRC="'+thumb_dir+prefix+'camera.png"'+borderstr('照相机')+'></A>');
     }
     if(use_url){
        document.write('<A onclick="moreInfo()"><IMG SRC="'+thumb_dir+prefix+'info.png"'+borderstr('其它信息')+'></A>');
     }
     document.write('<A onclick="switchlang()"><IMG SRC="'+thumb_dir+prefix+'english_v.png"'+borderstr('英文版/English Version')+'></A>');
     document.write('<A onclick="backhome(homeurl)"><IMG SRC="'+thumb_dir+prefix+'home.png"'+borderstr('相册主页')+'></A>');
  }else{
     document.write('<A onclick="getFirst()"><IMG SRC="'+thumb_dir+prefix+'first.png"'+borderstr('First')+'></A>');
     document.write('<A onclick="getPrev()"><IMG SRC="'+thumb_dir+prefix+'previous.png"'+borderstr('Previous or Click on the Left Side of the Photo')+'></A>');
     document.write('<A onclick="getNext()"><IMG SRC="'+thumb_dir+prefix+'next.png"'+borderstr('Next or Click on the Right Side of the Photo')+'></A>');
     document.write('<A onclick="getLast()"><IMG SRC="'+thumb_dir+prefix+'last.png"'+borderstr('Last')+'></A>');
     document.write('<IMG SRC="'+thumb_dir+prefix+'vbar.png" style="margin-bottom:2px">');
     document.write('<A onclick="startstopShow()"><IMG name="slideimg" id="slideimg" SRC="'+thumb_dir+prefix+'slideshow.png"'+borderstr('Start Slide Show/Press F11 Full Screen')+'></A>');
     if(use_mid){
        document.write('<A onclick="startstopMidi()"><IMG name="midiimg" id="midiimg" SRC="'+thumb_dir+prefix+'stopmidi.png"'+borderstr('Stop Music')+'></A>');
     }
     document.write('<A onclick="refit()"><IMG name="refitimg" id="refitimg" SRC="'+thumb_dir+prefix+'size_actual.png"'+borderstr('Actual Photo Size')+'></A>');
     document.write('<IMG SRC="'+thumb_dir+prefix+'vbar.png" style="margin-bottom:2px">');
     if(use_cam){
        document.write('<A onclick="getCamera()"><IMG SRC="'+thumb_dir+prefix+'camera.png"'+borderstr('Camera')+'></A>');
     }
     if(use_url){
        document.write('<A onclick="moreInfo()"><IMG SRC="'+thumb_dir+prefix+'info.png"'+borderstr('More Info')+'></A>');
     }
     document.write('<A onclick="switchlang()"><IMG SRC="'+thumb_dir+prefix+'chinese_v.png"'+borderstr('Chinese Version/中文版')+'></A>');
     document.write('<A onclick="backhome(homeurl)"><IMG SRC="'+thumb_dir+prefix+'home.png"'+borderstr('Photo Album Home')+'></A>');
  }
  if(cellphone){
     fsize = "200%;";
  }else{
     fsize = "100%;";
     
  }
  document.write('<p>&nbsp;');
  document.write('<p>');
  document.write('<IMG onclick="mouseclick(event)" name="visible" id="visible" SRC="'+thumb_dir+prefix+'blank.png" BORDER="0px" width=0 height=0>');
  document.write('<p style="margin-top:6px;">');
  document.write('<p>&nbsp;');
  document.write('<div id="text" style="font-size: '+fsize+' color:'+color_3+';">&nbsp;</div>');
  document.write('<img name="face_0" src="'+thumb_dir+'face_0.gif" width=0 height=0>');
  document.write(' <img name="face_1" src="'+thumb_dir+'face_1.gif" width=0 height=0>');
  document.write(' <img name="face_2" src="'+thumb_dir+'face_2.gif" width=0 height=0>');
  document.write(' <img name="face_3" src="'+thumb_dir+'face_3.gif" width=0 height=0>');
    
  //web counter
  if (window.sc_project){
     document.write('<p>&nbsp;<p>');
     document.write('<script type="text/javascript" language="javascript" src="http://www.statcounter.com/counter/counter.js"></script>');
  }

  //credit the source of the midi file
  if(use_cr){
     if(window.sc_project){
         document.write('<div><font color='+color_4+'>&copy; ');
     }else{
         document.write('<p>&nbsp;<p><div><font color='+color_4+'>&copy; ');
     }
     if(midi_cr.length==2){
        if(window.usechinese){
           document.write('MIDI文件由 <a style="color:'+color_4+'" target="newWin" href="'+midi_cr[1]+'">'+midi_cr[0]+'</A> 提供。');
        }else{
           document.write('The MIDI file is from <a style="color:'+color_4+'" target="newWin" href="'+midi_cr[1]+'">'+midi_cr[0]+'</A>.');
        }
     }else{
        if(window.usechinese){
           document.write('MIDI文件由 '+midi_cr[0]+' 提供。');
        }else{
           document.write('The MIDI file is from '+midi_cr[0]+'.');
        }        
     }
     document.write('</font></div>');
  }

  //background midi music
  if(use_mid){
     document.write('<div id="mididiv" style="position:absolute;visibility:show;z-index:5;">');
     if(use_obj){
          var midistr = '<object name="midi" ';
          midistr=midistr+'  type="application/x-oleobject"';
          midistr=midistr+'  classid="CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95"';
          midistr=midistr+'  codebase="<http://activex.microsoft.com/activex/controls/mplayer/en/nsmp>2inf.cab#Version=6,4,7,1112"'; 
          midistr=midistr+'  standby="Loading Windows Media Player components..."';
          midistr=midistr+'>';
          midistr=midistr+'<param name="FileName" value="'+mididir+midi_file+'">';
          midistr=midistr+'<param name="autostart" value="true">';
          midistr=midistr+'<param name="playcount" value="1000">';
          midistr=midistr+'<param name="ShowStatusBar" value="false">';
          midistr=midistr+'<embed id="midi" src="'+mididir+midi_file+'" type="application/x-mplayer2" ';
          midistr=midistr+'       width="0" height="1"  autostart="true" playcount="1000"></embed>';
	  midistr=midistr+'</object>';
          document.write(midistr);
     }else{
          document.write('<embed id="midi" name="midi" src="'+mididir+midi_file+'" type="application/x-mplayer2" ');
          document.write('       width="0" height="1"  autostart="true" loop="true"></embed>');
          document.write('<noembed><bgsound name="midi" src="'+mididir+midi_file+'" loop="infinite"></noembed>');
     }
     document.write('</div>');
  }
  slideshowimg        = new Array(2); 
  slideshowimg[0]     = new Image();
  slideshowimg[0].src = thumb_dir+prefix+"slideshow.png";
  slideshowimg[1]     = new Image();
  slideshowimg[1].src = thumb_dir+prefix+"stopslideshow.png";
  sizeimg             = new Array(2);
  sizeimg[0]          = new Image();
  sizeimg[0].src      = thumb_dir+prefix+"size_actual.png";
  sizeimg[1]          = new Image();
  sizeimg[1].src      = thumb_dir+prefix+"size_fit.png";
  musicimg            = new Array(2); 
  musicimg[0]         = new Image();
  musicimg[0].src     = thumb_dir+prefix+"midi.png";
  musicimg[1]         = new Image();
  musicimg[1].src     = thumb_dir+prefix+"stopmidi.png";
//-->
