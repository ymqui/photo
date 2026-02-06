<!--
  var fsize   = "100%;";
  var n_brk   = 6;
  var m_size  = 28; //midi image size
  var use_url = false;
  var use_cam = false;
  var use_mid = false;
  var use_cr  = false;
  var prefix  = "b_";
  var color_0 = "#1A2020";
  var color_1 = "#E0E0E0";
  var color_2 = "#888888";
  var color_3 = "#E0E0E0";
  var color_4 = "#282828";
  var loadgif = "loading2.gif";
  var cr_str  = "loading";
  if (window.whitebackground){
     prefix  = "";		//prefix of the thumbnail button names
     color_0 = "white";	//background color
     color_1 = "dimgray";	//frame color
     color_2 = "#E9E9E9";	//frame background color
     color_3 = "black";	//caption color
     color_4 = "#F6F6F6";	//hidden text colors
     cr_str  = "loading_white";
  }
  if (Math.floor(Math.random()*3)==0){
     loadgif = cr_str+".gif";
  }else if (Math.floor(Math.random()*2)==0){
     loadgif = cr_str+"1.gif";
  }
  if (cellphone) {
     prefix = "c_";
     fsize  = "300%;";
     n_brk  = 9;
     m_size = 70; 
  }

  document.bgColor = color_0;
     
  document.write('<DIV ID="loading" style="POSITION:absolute; LEFT:0; TOP:0; VISIBILITY:hidden; Z-INDEX:200"><img src="'+thumb_dir+loadgif+'"></img></DIV>');

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
 
  if(window.info_url){
     if (info_url.length>0) use_url = true;
  }
  if(window.cam_img){
     if (cam_img.length>0) use_cam = true;
  }
  if(window.midi_file){
     use_mid = true;
     if (midi_file.length==0) use_mid=false;
     if(use_mid){
         if(window.midi_cr){
             if(midi_cr.length!=0) use_cr=true;
             if(!Array.isArray(midi_cr))midi_cr=[midi_cr];
         }
     }
  }

  if(cellphone) document.write('<br>');

  document.write('<A onclick="getFirst()"><IMG SRC="'+thumb_dir+prefix+'first.png"'+borderstr((['First','第一张'])[cn_ind])+'></A>');
  document.write('<A onclick="getPrev()"><IMG SRC="'+thumb_dir+prefix+'previous.png"'+borderstr((['Previous or Click on the Left Side of the Photo','前一张或点击照片左侧'])[cn_ind])+'></A>');
  document.write('<A onclick="getNext()"><IMG SRC="'+thumb_dir+prefix+'next.png"'+borderstr((['Next or Click on the Right Side of the Photo','下一张或点击照片右侧'])[cn_ind])+'></A>');
  document.write('<A onclick="getLast()"><IMG SRC="'+thumb_dir+prefix+'last.png"'+borderstr((['Last','最后一张'])[cn_ind])+'></A>');
  document.write('<IMG SRC="'+thumb_dir+prefix+'vbar.png" style="margin-bottom:2px">');
  document.write('<A onclick="startstopShow()"><IMG name="slideimg" id="slideimg" SRC="'+thumb_dir+prefix+'slideshow.png"'+borderstr((['Start Slide Show/Press F11 Full Screen','自动放映/按F11全屏显示'])[cn_ind])+'></A>');
  if(use_mid){
     document.write('<A onclick="startstopMidi()"><IMG name="midiimg" id="midiimg" SRC="'+thumb_dir+prefix+'midi.png" width="0" height="0"'+borderstr((['Play Music','播放音乐'])[cn_ind])+'></A>');
  }
  document.write('<A onclick="refit()"><IMG name="refitimg" id="refitimg" SRC="'+thumb_dir+prefix+'size_actual.png"'+borderstr((['Actual Photo Size','照片本来大小'])[cn_ind])+'></A>');
  document.write('<IMG SRC="'+thumb_dir+prefix+'vbar.png" style="margin-bottom:2px">');
  if(use_cam){
     document.write('<A onclick="getCamera()"><IMG SRC="'+thumb_dir+prefix+'camera.png"'+borderstr((['Camera','照相机'])[cn_ind])+'></A>');
  }
  if(use_url){
     document.write('<A onclick="moreInfo()"><IMG SRC="'+thumb_dir+prefix+'info.png"'+borderstr((['More Info','其它信息'])[cn_ind])+'></A>');
  }
  document.write('<A onclick="switchlang()"><IMG SRC="'+thumb_dir+prefix+(['chinese','english'])[cn_ind]+'_v.png"'+borderstr((['Chinese Version/中文版','英文版/English Version'])[cn_ind])+'></A>');
  document.write('<A onclick="backhome(homeurl)"><IMG SRC="'+thumb_dir+prefix+'home.png"'+borderstr((['Photo Album Home','相册主页'])[cn_ind])+'></A>');
  if(typeof addbday !== "undefined"){
     document.write('<A onclick="switchbirthday()"><IMG name="bdayimg" SRC="'+thumb_dir+prefix+'birthday.png"'+borderstr((['Birthday Photos','生日照片'])[cn_ind])+'></A>');
  }

  var click = ' onclick="mouseclick(event)"';
  if(window.blocksave && (!cellphone)){click = click+' oncontextmenu="rightclick(event)"';}
  document.write('<p>&nbsp;');
  document.write('<p>');
  document.write('<IMG'+click+' name="visible" id="visible" SRC="'+thumb_dir+'blank.png" BORDER="0px" width=0 height=0>');
  document.write('<p style="margin-top:6px;">');
  document.write('<p>&nbsp;');
  document.write('<div id="text" style="font-size: '+fsize+' color:'+color_3+';">&nbsp;</div>');
    
  //extra link list
  if (window.pagelist){
     for (var i=0;i<n_brk;i++) document.write('<p>&nbsp;');
     document.write('<p style="font-size: '+fsize+' color:'+color_3+';">');
     if (window.usechinese){document.write('相关照片');}else{document.write('Related Photos');}
     document.write('<p><img src="'+thumb_dir+'branch.png">');
     document.write('<p style="margin-top:6px; font-size: '+fsize+'">');
     for (var i=pagelist.length-1;i>=0;i--){
         document.write(pagelink(pagelist[i][0],pagelist[i][1+cn_ind]));
         if (!cellphone){
            document.write('<font color='+link_color+'>'+((i==0)?'.':',')+'</font>');
         }
         document.write('&nbsp;');
         if (i%3==0||cellphone){document.write('<br>');}else{document.write('&nbsp;&nbsp;');}
     }  
  }

  //web counter
  if (window.sc_project){
     var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
     document.write('<p>&nbsp;<p>');
     document.write('<script type="text/javascript" language="javascript" async src="'+scJsHost+'statcounter.com/counter/counter.js"></script>');
  }

  //credit the source of the midi file
  if(use_cr){
     if(typeof sc_project === 'undefined') document.write('<p>&nbsp;<p>');
     document.write('<div id="midicr"> </div>');
     cr_str = midi_cr[0];
     if(midi_cr.length==2){
         cr_str = '<A style="color:'+color_4+'" target="newWin" href="'+midi_cr[1]+'">'+cr_str+'</A>';
     }
     cr_str = '<font color='+color_4+'>&copy; '+(['The MIDI file is from ','MIDI文件由 '])[cn_ind]+cr_str+(['.',' 提供。'])[cn_ind]+'</font>';
  }

  if(use_mid){
     var mymidi  = new Audio(mididir+midi_file);
     mymidi.loop = true;

     mymidi.addEventListener("canplaythrough", (event) => {
         // the audio is now playable; show music icon
         canplay = true;
         document.images["midiimg"].width  = m_size;
         document.images["midiimg"].height = m_size;
         if(use_cr) divcontent("midicr",cr_str);
     });
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
