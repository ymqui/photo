<!--
    var googledrive = (window.location.href.search("github")!=-1);
    var cellphone = (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i));
    if(window.usechinese){
        if (googledrive){
           homeurl = "https://ymqui.github.io/zhaopian/";
        }else{
           homeurl = "http://www.pha.jhu.edu/~qiuym/zhaopian/";
        }
    }else{
        if (googledrive){
           homeurl = "https://ymqui.github.io/photo/";  
        }else{
           homeurl = "http://www.pha.jhu.edu/~qiuym/photo/";
        }  
    }
    var maindir = "https://ymqui.github.io/photo/";
    window.onerror = function(msg,url,line)
    {   
        if (window.usechinese) {
           if(googledrive) {
              window.location.href = "https://ymqui.github.io/zhaopian/error.html";
           }else{
              window.location.href = "http://www.pha.jhu.edu/~qiuym/zhaopian/error.html";
           }
        }else{
           if(googledrive){
              window.location.href = "https://ymqui.github.io/photo/error.html?"+msg+' at line '+line;
           }else{
              window.location.href = "http://www.pha.jhu.edu/~qiuym/photo/error.html?"+msg+' at line '+line;
           }
        }
    }
//-->
