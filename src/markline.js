/*
  
  A short lib to acces text line in a bloc element (mainly p,li or div)
  allow to mark it for  coloration or other properties... 
*/

/*table of colors to be alternated */

function markline(){
   
    /*empty elements */
    var emptyElements =["area","base","br","col", "embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];
    function isEmptyElement(e){return emptyElements.indexOf(e.nodeName.toLowerCase()) != -1}



    /* restore initial innerHTML content (saved in init when modified) */
    function restore(selectors){
	var selectors=selectors||"p";//default is paragraph
	//get all marked and restore them

	[].forEach.call(document.querySelectorAll(selectors), function(p) {
	    if(p.init){
	
		p.innerHTML=p.init;
		p.init=false;
		//	p.classList.remove("lineColorMarked");
	    }
	    
	});
    }



    //manage a block element (mainly p)
    /* RESTRICTION: the bloc itself should not contain block elements
       or  we would lose the line notion
    */


    //an auxiliary function to surround framents
    function surroundFragments(f,node){
	
	console.log("surrounding A"+f.textContent+"A");
	
	var newNode=node || document.createElement("span");
	newNode.classList.add("p-line-00-33");//add class
	
	var b=[].map.call(f.childNodes,function(x){
	    if (x.constructor.name=="string") {
		return document.createTextNode(x)}
	    else {return x;}});
	b.forEach((x)=>newNode.appendChild(x));
	range.insertNode(newNode);
    }

    var fragments=[];
    var range=document.createRange();
    var contexts=[];


    /* cut p by marking line with span */
    function markElement(p){
	 //save initial value or quit if still done
        if(p.init) {return} else {p.init=p.innerHTML}

	var childs=p.childNodes;
	if(childs.length<1){return}else{
	    childs.forEach((x)=>contexts.push(x));
	    var first=contexts.shift();
	    loop(first,first,range,0,0);
	    
	    fragments.reverse().forEach((x)=>surroundFragments(x));
	    p.classList.add("lineMarked-00-33");
	    
	}
    }

    //the main loop
    function loop(start,current,range,i,lastValue){
	console.log("loop");
	if (current.nodeType==3){
	    //text node
	    try{
		range.setStart(current, i);
		range.setEnd(current, i+1);
		var r=range.getBoundingClientRect().y;
		if(r===0){return;} //for a strange bug in some version safari
		if((lastValue && r-lastValue >2) ||r===0){
		    //this is an end line in text
		    range.setStart(start,0 );
		    range.setEnd(current, i);
		    var f=range.extractContents();
		    fragments.push(f);
		    
		    loop(current,current,range,0,r);
		}else{
		    //no an end line in text
		    loop(start,current,range,i+1,r);
		}
		
		
	    }//fin try text
	    catch(e){
		
		
		console.log("depiler ???"+ contexts);
		var top=contexts.shift();
		if(top){
		    loop(start,top,range,0,lastValue);
		}else{
		    range.setStart(start,0 );
		    range.setEnd(current, i);
		    var f=range.extractContents();
		    console.log("extracted2 "+f.textContent);
		    fragments.push(f);
		    
		    console.log("fin");
		    //fragments.forEach((x)=>surroundFragments(x))
		    
		}
		//
		//empty stack,this is the end....
		
	    } //end catch
	} //end if text node
	else{
	    //element
	    console.log("Element "+current.nodeName);
	    if(isEmptyElement(current)){
		//empty element mainly img et br)
		console.log("Eempty element")
		if(current.nodeName.toLowerCase()=="br"){
		    //this is a new line....
		}
		else {
		    if(current.nodeName.toLowerCase()=="img"){
			if(current.getBoundingClientRect().y  -lastValue >2){
			    //line change
			    range.setStart(start,0 );
			    range.setEnd(current, i+1);
			    var f=range.extractContents();
			    fragments.push(f);
			    var top=contexts.shift();
			    if(top){
				loop(top,top,range,0,0);
			    }
			    
			}
			else{
			    var top=contexts.shift();
			    if(top){
				loop(start,top,range,0,lastValue);
			    }
			}
		    }
		    else{}
		}
		//for all
		
	    } else{
		var childs=current.childNodes;
		if(childs.length>0){var c=[];
				    childs.forEach((x)=>{c.push(x);
							 
							 
							});
				    var top=c.shift();
				    contexts=c.concat(contexts);
				    loop(start,top,range,0,lastValue);
				   }else{
				       //no childs
				       var top=contexts.pop();
				       if(top){
					   loop(start,top,range,0,lastValue);
				       }else{
					   range.setStart(start,0 );
					   range.setEnd(current, i);
					   var f=range.extractContents();
					   fragments.push(f);
					   
					   console.log("end of the text, this is this end...");
				       }
				   }
		
	    }
	}    
    }
    
    
    

    /* mark all selector */
    function mark(selectors){
	var selectors=selectors||"p";//default is paragraph
	//mark all sected node
	[].forEach.call(document.querySelectorAll(selectors), function(e) {
	    contexts=[];fragments=[];
	    e.innerHTML=e.innerHTML.replace(/\s+/g," ");
	    e.innerHTML=e.innerHTML.replace(/\s+$/,"");
	    markElement(e);
	});
    }


    //temporized resise
    //restore initial state and recompute line
    function onResize(){
	
	try{clearTimeout(t)}catch(e){};
	this.t = setTimeout(function() {
	   
	    nbcolor=0;
	    restore(".lineMarked-00-33");
	    mark(".lineMarked-00-33");
            try{deco()}catch(e){};	    
	}, 500);
	

    }

    
    return {markElement:markElement,mark:mark,onResize:onResize};
}
var dys=markline();

document.addEventListener('onresize', dys.onResize);
document.addEventListener('resize', dys.onResize);
window.onresize=dys.onResize;
