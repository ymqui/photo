//based upon www.steves-digicams.com
<!--
var update = "";
document.write('<DIV ID="popup" style="POSITION:absolute; VISIBILITY:hidden; Z-INDEX:200"> </DIV>');
var xoffset = -10;
var yoffset = 23;
var yyy     = -3000;

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

function popupmesg(mesg){
    var content = '<TABLE BORDER=1 BORDERCOLOR=black CELLPADDING=2 CELLSPACING=-1 ';
    content = content+'BGCOLOR=#f6f6dc style="max-width:270px;"><TD ALIGN=left bordercolor=#f6f6dc>';
    content = content+'<FONT FACE="Verdana,Arial,Helvetica,sans-serif" COLOR=black SIZE=2>';
    content = content+mesg+'</FONT></TD></TABLE>';
    yyy = yoffset;
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
            }
        }catch(er){}
    }
    if(document.body){
        try{
            if(typeof(document.body.scrollLeft)=='number'){
                x = x+document.body.scrollLeft;
                y = y+document.body.scrollTop;
            }
        }catch(er){}
    }
    x = x+xoffset;
    y = y+yyy;
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
    yyy = -3000;
    divhide("popup");
}

var popupobj = dividobj("popup");

if(document.layers) { 
    document.captureEvents(Event.MOUSEMOVE); 
    if(popupobj.visibility){
        popupobj.visibility = "visible";
    }
}else{
    if(popupobj.style){
        popupobj.style.visibility = "visible";
        popupobj.style.display = "none";
    }
}

document.onmousemove = get_mouse;
//-->
