
var moncartable={police:"arial, sans-serif",size:"30px",interline:"3",intermot:"130%"};

//font-familly
//font-size
//line-height 
//word-spacing: 

function setFont(el,cartable){//
	el.style.cssText +='font-fammilly:'+moncartable.police+' !important';
	el.style.cssText +='font-size:'+moncartable.size+' !important';
	el.style.cssText +='line-height:'+moncartable.interligne+' !important';
	el.style.cssText +='line-height:'+moncartable.intermot+' !important';
}

function setBodyFont(cartable){
	var body=document.body;
	setFont(body,cartable);
}
