<!--
document.write('<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" width="100%" height="114">');
document.write('<tr>');

if(window.usechinese){
   var nam = new Array("¶«À¶ğ¶","±±ÃÀ°××ìÑ¼/°×¹Ú¼¦","ºÚ¶¥Ò¹ğØ","À¶»Òò¸ğÓ","×ØğÃğÉ",
		        "¿¨ÂŞÀ´ÄÉÉ½È¸","¸çË¹´ï·äÄñ","ÈŞÃ«×ÄÄ¾Äñ","¶«·Æ±È°Ôûl","´ó°×ğØ","ÒøÅ¸",
			  "±±ÃÀºìÈ¸","ºì¹ÚºÚ×ÄÄ¾Äñ","À¶³á»ÆÉ­İº","»·×ìÅ¸","·ÛºìÅığØ",
			  "ºìûq","Òø×ìÌÆÄÉÈ¸","¹ÂğÖ","Ğ¡Ìì¶ì","°×Õíº×","ÁÖÑ¼/ÁÖÔ§Ñì","»Æ¸¹×ÄÄ¾Äñ","»ÆÑüÁøİº");
}else{
   var nam = new Array("Eastern Blue Bird","American Coot","Black-crowned Night Heron","Blue-gray Gnatcatcher","Brown Pelican",
		        "Carolina Chickadee","Costa's Hummingbird","Downy Woodpecker","Eastern Phoebe","Great Egret","Herring Gull",
			  "Northern Cardinal","Pileated Woodpecker","Prothonotary Warbler","Ring-billed Gull","Roseate Spoonbill",
			  "Scarlet Ibis","Silver-beaked Tanager","Solitary Sandpiper","Tundra Swan","White-naped Crane","Wood Duck",
			  "Yellow-bellied Sapsucker","Yellow-rumped Warbler");
}
var rand=Math.floor(Math.random()*16);
for(var i=0;i<7;i++){
   document.write('<td height="90" align="center"><img border="0" src="'+mdir+'thumbnail/bird_'+(rand+i).toString()+'.jpg" height="75" alt="'+nam[rand+i]+'"></td>');
} 

document.write('</tr></table>');
//-->

