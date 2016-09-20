<!--
//////////////////////////////////
//  9/2004 Yiming Qiu           //
//////////////////////////////////
var tnimage    = new Array(); //save preloaded thumbnails
var currentid  = new Array(); //save current thumbnail id
var opacity    = new Array(); //save fadein opacity
var filterid   = 3;//0;
var odd        = 0;           //every filter pattern will repeat twice
var is_thumb   = true;	      //indicate that the page is thumbnail style
var filtername = new Array();
filtername[0]  = "progid:DXImageTransform.Microsoft.Wheel(duration=3,spokes=10)";
filtername[1]  = "revealTrans(duration=2,transition=3)";
filtername[2]  = "revealTrans(duration=2,transition=2)";
filtername[3]  = "progid:DXImageTransform.Microsoft.gradientWipe(duration=3)";
var duration   = new Array(1350,900,900,1350);

function fadeout(imgid){
    if(opacity[imgid]>0.2){
        opacity[imgid]-=0.03;        
        document.images[info[0][imgid]].style.MozOpacity = opacity[imgid];
        setTimeout('fadeout('+imgid.toString()+')',35); 
    }else{
        document.images[info[0][imgid]].src = tnimage[imgid][currentid[imgid]].src;
        try{
            fadein(imgid);
        }catch(er){}
    }
}

function fadein(imgid){
    if(opacity[imgid]<0.99){
        opacity[imgid]+=0.03;        
        document.images[info[0][imgid]].style.MozOpacity = opacity[imgid];
        setTimeout('fadein('+imgid.toString()+')',35); 
    }
}

function image_refresh(i){
    if (i==start_tnind) {
 //       if(odd &&(end_tnind>start_tnind)){
 //           var tmpid = Math.floor(Math.random()*filtername.length);
 //           while(tmpid==filterid){
 //               tmpid = Math.floor(Math.random()*filtername.length);
 //           }
 //           filterid = tmpid;
 //       }
 //       odd = 1-odd;
        for(var j=start_tnind;j<=end_tnind;j++) {
            currentid[j] = currentid[j]+1;
            if (currentid[j]==info[1][j]) currentid[j] = 0;
        }
    }
    var next = i+1;
    if (next>end_tnind) next = start_tnind;
    var image_timerID = setTimeout('image_refresh('+next.toString()+')',duration[filterid]);
    try{
        document.images[info[0][i]].style.filter=filtername[filterid];
        document.images[info[0][i]].filters[0].Apply();
        document.images[info[0][i]].src = tnimage[i][currentid[i]].src;
        document.images[info[0][i]].filters[0].Play();
    }catch(er){
        opacity[i] = 0.99;	//use 0.99 to avoid flickering
        duration = new Array(3000,3000,3000,3000);
        if (start_tnind==end_tnind) duration[0] = 5000;
        try{
            fadeout(i);
        }catch(er){
            document.images[info[0][i]].src = tnimage[i][currentid[i]].src;
        }
    }
}

function refresh(){
    for (var i=start_tnind;i<=end_tnind;i++){
        currentid[i] = 0;
        opacity[i]   = 0.99;
        tnimage[i]   = new Array(info[1][i]);
        for (var j=0;j<info[1][i];j++){
            tnimage[i][j] = new Image();
            if ((info[0][i].charAt(0)>="1")&&(info[0][i].charAt(0)<="9")){
               tnimage[i][j].src = maindir+"thumbnail"+info[0][i].charAt(0)+"/"+info[0][i]+'_'+j.toString()+info[6]; 
            }else{
               tnimage[i][j].src = info[5]+info[0][i]+'_'+j.toString()+info[6];
            }
        }
    }
    if (end_tnind==start_tnind) {
        duration[0] = 5000;
    }else if(end_tnind==start_tnind+1){
        duration = new Array(2400,1900,1900,2400);
    }else if(end_tnind==start_tnind+2){
        duration = new Array(2000,1500,1500,2000);
    }
    image_refresh(start_tnind);
}
//-->
