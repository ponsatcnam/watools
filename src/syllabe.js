/*
   cut french word in syllabe (approximatively)
   rule from :https://www.bertrandboutin.ca/Folder_151_Grammaire/P_b_division.htm
 */

function cutInSylabe(thetext) {
    console.log("traitement "+thetext);
    function loop(text){
	   
	var orig=text;
	var vowel = "aàâeëéèêiïîouùy";
	var consonant = "bcçdfghjklmnpqrstvwxyz";
	var punctuation = ",;:!?.";
	
	//unbreakable:  ch, ph, gn  th  et bl, cl,fl, gl, pl, br, cr, dr, fr, gr, pr, tr, vr
	var unbreakable ="[cpg]h|[bcfgp]l|[bcdfgptv]r"
	//texte = texte.replace(reg,"|$1");

	//a dash separates two words
	var dash=new RegExp("-","gi");
	text = text.replace(dash,"-|");
	
	//a consonant between two  vowels start a new syllabe
	var reg=new RegExp("(["+vowel+"])(["+consonant+"]|"+unbreakable+")(["+vowel+"])", "gi");
	
	text = text.replace(reg,"$1|$2$3");
	//two  consonants between vowels;
	//the first is part of the previous syllabe the second of the next one
	reg=new RegExp("(["+vowel+"])(["+consonant+"])(["+consonant+"]|"+unbreakable+")(["+vowel+"])", "gi");
	text = text.replace(reg,"$1$2|$3$4");
	//three consonants, in most case the two first are the end of the current syllabe
	//and the last is the beginning of the new syllabe
	
	reg=new RegExp("(["+vowel+"])(["+consonant+"])(["+consonant+"])(["+consonant+"])(["+vowel+"])", "gi");
	
	text = text.replace(reg,"$1$2$3|$4$5");
	//replaces blancs with  |
	reg=new RegExp("([ ]+)","gi");
	text = text.replace(reg,"$1|");
	text = text.replace(new RegExp("(\n[ ]*)","gi"),"$1|");
	
	
	

	    

	    // replace(new RegExp("(["+punctuation+"])","gi"),
	    //	"<span class='punctuation'>$1</span>");
           console.log("TEXT "+text+" ORIG "+orig);
	return text;
	if(text===orig){return text;}else{return loop(text);}
    }
    var result=loop(thetext) ;
    var res2= result.split("|");
    var text2=res2.map((x)=>"<span class='syllabe'>"+x+"</span>").join("");
    return text2;
}
/*
diarese
*/
