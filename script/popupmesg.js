//based upon www.steves-digicams.com
<!--
var update = "";
document.write('<DIV ID="popup" style="POSITION:absolute; VISIBILITY:hidden; Z-INDEX:200"> </DIV>');

var xoffset = -10;
var yoffset = 25;
var hidepop = true;

function dividobj(divid){
    var divobj=null;
    if(document.getElementById){
        //browser implements part of W3C DOM HTML
        //Gecko, IE5+, Opera 5+
        divobj = document.getElementById(divid);
    }else if(document.all){
        //IE4 or Opera with IE user agent
        divobj = document.all[divid];
    }else if(document.layers){
        //Navigator 4
        divobj = document.layers[divid];
    }
    return divobj;
}

function divcontent(divid,content){
    var divobj = dividobj(divid);
    if(divobj){
       try{
            divobj.innerHTML = content;
            if (divobj.style){
                try{
                    divobj.style.display = '';
                }catch(er){}
            }
        }catch(er){
            try{
                divobj.document.write(content);
                divobj.document.close();
                if(divobj.visibility){
                    divobj.visibility = "visible"; 
                }
            }catch(er){}
        }
    }
}

function divhide(divid){
    var divobj = dividobj(divid);
    if(divobj){
        if(divobj.style){
            try{
                divobj.style.display = "none";
            }catch(er){}
        }else if(divobj.visibility){
            try{
                divobj.visibility = "hidden"; 
            }catch(er){}
        }
    }
}

function divshow(divid){
    var divobj = dividobj(divid);
    if(divobj){
       if(document.layers) { 
          if(divobj.visibility){
             divobj.visibility = "visible";
          }
       }else{
          if(divobj.style){
             divobj.style.visibility = "visible";
             divobj.style.display = "";
          }
       }
    }
}

function borderit(which,color){
    if(which.style){
       try{
         which.style.borderColor = color;
       }catch(er){}
    }
}

function backgroundit(which,color){
    currentclickobj = which;
    if(which.style){
       try{
         which.style.background = color;
         if (color !='none'){
             setTimeout('backgroundit(currentclickobj,"none")',500);
         }
       }catch(er){}
    }
}

function borderstr(mesg){
    //replace any ' with &prime; to avoid error
    mesg = mesg.replace(/'/g,"&prime;");
    if (!window.color_0) color_0 = "#1A2020";
    if (!window.color_1) color_1 = "#E0E0E0";
    if (!window.color_2) color_2 = "#888888";
    var bstr = ' class="borderimage" onMouseover="borderit(this,';
    bstr = bstr+"'"+color_1+"');popupmesg('"+mesg+"'"+');" onMouseout="borderit(this,';
    bstr = bstr+"'"+color_0+"');killpopup();"+'" onMousedown="backgroundit(this,';
    bstr = bstr+"'"+color_2+"');killpopup();"+'" onMouseup="backgroundit(this,';
    bstr = bstr+"'none')"+'"';
    return bstr;
}

function popupmesg(mesg){
    var content = '<TABLE BORDER=1 BORDERCOLOR=black CELLPADDING=2 CELLSPACING=-1 ';
    content = content+'BGCOLOR=#f6f6dc style="max-width:270px;"><TD ALIGN=left bordercolor=#f6f6dc>';
    content = content+'<FONT FACE="Verdana,Arial,Helvetica,sans-serif" COLOR=black SIZE=2>';
    content = content+mesg+'</FONT></TD></TABLE>';
    hidepop = false;
    divcontent("popup",content);
}

function get_mouse(e){
    var x = 0;
    var y = 0;
    try{
	  if(typeof(e.pageX)=='number'){
            x = e.pageX;
            y = e.pageY;
        }
    }catch(er){
        try{
            if(typeof(event.x)=='number'){
                x = event.x;
                y = event.y;
                if(typeof(document.body.scrollLeft)=='number'){
                   x = x+document.body.scrollLeft;
                   y = y+document.body.scrollTop;
                }
            }
        }catch(er){}
    }
    if(Math.abs(y+yoffset)>window.innerHeight){
       xoffset = -6;
       yoffset = -30;
    }else{
       xoffset = -10;
       yoffset = 25;
    }
    x = x+xoffset;
    if (hidepop){ 
       y = y-3000;
    }else{
       y = y+yoffset;
    }
    var divobj = dividobj("popup");
    if(divobj){
        if(divobj.style){
            if(typeof(divobj.style.left)=='number'){
                divobj.style.left = x;
                divobj.style.top  = y;
            }else{
                divobj.style.left = x+'px';
                divobj.style.top  = y+'px';
            }
        }else if(typeof(divobj.left)=='number'){
            divobj.left = x;
            divobj.top  = y;
        }
    }
}

function killpopup(){
    hidepop = true;
    divhide("popup");
}

if(document.layers) { 
    document.captureEvents(Event.MOUSEMOVE); 
}

divshow("popup");

document.onmousemove = get_mouse;
//-->
