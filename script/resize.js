<!--
var initX = 0;
var initY = 0;
var repos = 0;
if(!window.setWidth)  setWidth  =  900;   //default width
if(!window.setHeight) setHeight =  950;   //default height
if(window.outerWidth && window.outerHeight){
   if(window.outerWidth>setWidth){
      setWidth = window.outerWidth;
      repos = repos+1;
   }
   if(window.outerHeight>setHeight){
      setHeight = window.outerHeight;
      repos = repos+1;
   }
}else {
   repos = 2;
}

if(screen.availWidth>setWidth){
    initX = Math.floor((screen.availWidth-setWidth)/2.);
}else{
    setWidth = screen.availWidth;
}
if(screen.availHeight>setHeight){
    initY = Math.floor((screen.availHeight-setHeight)/2.);
}else{
    setHeight = screen.availHeight;
}
if(repos!=2){
   try{
       window.moveTo(initX,initY);
   }catch(er){}//ignore possible javascript error here
   try{
       window.resizeTo(setWidth,setHeight);
   }catch(er){
       try{
           if(window.outerHeight!=setHeight){
              window.outerHeight = setHeight;
           }  
           if(window.outerWidth!=setWidth){
              window.outerWidth  = setWidth;
           }
       }catch(er){}
   }
}
//-->
