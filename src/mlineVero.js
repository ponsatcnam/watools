
'use strict';

/*
  
  A short lib to acces text line in a bloc element (mainly p,li or div)
  allow to mark it for  coloration or other properties... 
*/

/*table of colors to be alternated */

function markline(){

	//=========================================
	// empty elements
	//=========================================
	//=========================================
	const emptyElements = ["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];
	
	//=========================================
	// check if pElt is empty
	//=========================================
	//=========================================
	function isEmptyElement(pElt){
		return emptyElements.indexOf(pElt.nodeName.toLowerCase()) != -1 ;
	}

	//===================================================================
	// restore initial innerHTML content (saved in init when modified)
	//===================================================================
	//===================================================================
	function restore(ps_selectors){
		const ls_selectors = ps_selectors || "p"; //default is paragraph
		//get all marked and restore them

		for (let lElt of document.querySelectorAll(ls_selectors)) {
			// console.log('ooooooooooooooooooooooooooooooooo')
			if(lElt.init){
				lElt.innerHTML = lElt.init;
				lElt.init = false;
			}
		}
    }

	//=========================================
	// "permanent" variables
	//=========================================
	//=========================================
	const gRange = document.createRange();
	let gArrayNode_toProcess = [];

	//=========================================
	// check if on same line
	//=========================================
	//=========================================
	function sameLine(p_boundingBox1, p_boundingBox2){
		// return p_boundingBox1.left < p_boundingBox2.left;
		return ! ( p_boundingBox1.bottom < p_boundingBox2.top || p_boundingBox2.bottom < p_boundingBox1.top );
	}

	//===============================================
	// an auxiliary function to surround visual lines
	//===============================================
	//===============================================
	function surroundVisualLine(pNode_embedder){
		
		// contenu
		//--------
		const lFragment_visualLine = gRange.extractContents(); // suppression !!
		const ls_texte = lFragment_visualLine.textContent;
		// console.log('=====> add : W' + ls_texte + 'W ' + ps_log);
		const lArray_lineParts = [].map.call(lFragment_visualLine.childNodes, function(x){
			if (x.constructor.name=="string") {
				return document.createTextNode(x)
			}else{
				return x;
			}
		});
		
		// embedder
		//---------
		const lNode_embedder = pNode_embedder || document.createElement("span");
		lNode_embedder.classList.add("p-line-00-33"); //add class
		
		lArray_lineParts.forEach( x => lNode_embedder.appendChild(x) );
		if (lNode_embedder.innerHTML == '') return;
		gRange.insertNode(lNode_embedder); // reconstitution !!
	}

	//=========================================
	// process line
	//=========================================
	//=========================================
	function processVisualLine(pNode_start, pn_startItem, pNode_end, pn_endItem){
		gRange.setStartBefore(pNode_start, pn_startItem);
		gRange.setEnd(pNode_end, pn_endItem);
		surroundVisualLine();
	}

	//=========================================
	// process next node
	//=========================================
	//=========================================
	function processNextNode(pNode_start, pNode_current, i, p_lastBoundingRect){
		const lNode_nextToProcess = gArrayNode_toProcess.shift();
		if(lNode_nextToProcess){
			loop(pNode_start, lNode_nextToProcess, 0, p_lastBoundingRect);
		}
		else{
			const ls_result = processVisualLine(pNode_start, 0, pNode_current, i);
			return ls_result;
		}
	}

	//=========================================
	// the main loop
	//=========================================
	//=========================================
	function loop(pNode_start, pNode_current, i, p_lastBoundingRect){
		//-------------
		// text node
		//-------------
	    if (pNode_current.nodeType == 3){
		//avoid empty textnode
		if(pNode_current.textContent.length<0){	processNextNode(pNode_start, pNode_current, i, p_lastBoundingRect);return}
			//non empty text node
			try{
				gRange.setStart(pNode_current, i);
				gRange.setEnd(pNode_current, i+1);
				const boundRect = gRange.getBoundingClientRect();
				if(boundRect.y===0){return;} //for a strange bug in some version safari
				if(p_lastBoundingRect && ! sameLine(p_lastBoundingRect, boundRect)){
					//this is an end line in text
					processVisualLine(pNode_start, 0, pNode_current, i);
					
					loop(pNode_current, pNode_current, 0, boundRect);
				}
				else{
					loop(pNode_start, pNode_current, i+1, boundRect);
				}
			}//fin try text
			catch(exception){
				processNextNode(pNode_start, pNode_current, i, p_lastBoundingRect);
			} //end catch
		} //end if text node
		
		//-------------
		// element node
		//-------------
		else{
			console.log("Element " + pNode_current.nodeName);
			
		    var childs = false;
		    if(["TEXTAREA","VIDEO","AUDIO","CANVAS","SCRIPT"].indexOf(pNode_current.nodeName) ===-1){
		    childs=pNode_current.childNodes;
		    }
			if(childs && childs.length > 0){
				const copyChilds = [].slice.call(childs);
			    gArrayNode_toProcess = copyChilds.concat(gArrayNode_toProcess);
			    console.log(" gArrayNode_toProcess :", gArrayNode_toProcess.map(x=>x.nodeName).join("#"));
			}
			
			processNextNode(pNode_start, pNode_current, i, p_lastBoundingRect);
		}
	}

	//manage a block element (mainly p)
	/* RESTRICTION: the bloc itself should not contain block elements
	   or  we would lose the line notion
	*/
	//=========================================
	// cut pElt by marking lines with span
	//=========================================
	//=========================================
	function markElement(pElt){
		//save initial value or quit if still done
		if(pElt.init) { return } else { pElt.init = pElt.innerHTML }

		const lNodeList_directChilds = pElt.childNodes;
		if(lNodeList_directChilds.length >= 1){
			lNodeList_directChilds.forEach(
				lNode_directChild => gArrayNode_toProcess.push(lNode_directChild)
			);
			// console.log(gArrayNode_toProcess);
			const lNode_firstDirectChild = gArrayNode_toProcess.shift();
			
			loop(lNode_firstDirectChild, lNode_firstDirectChild, 0, null);
			
			pElt.classList.add("lineMarked-00-33");
		}
	}

	//=========================================
	/* mark all selector */
	//=========================================
	//=========================================
	function mark(ps_selectors){
		const ls_selectors = ps_selectors || "p";//default is paragraph
		//mark all selected node
		for(let elt of document.querySelectorAll(ls_selectors)) {
			gArrayNode_toProcess = [];
			elt.innerHTML = elt.innerHTML.replace(/\s+/g," ");
			elt.innerHTML = elt.innerHTML.replace(/\s+$/,"");
			markElement(elt);
		}
	}

	//=========================================
	// temporized resise
	// restore initial state and recompute line
	//=========================================
	//=========================================
	function onResize(){
		
		try{clearTimeout(this.t)}catch(exception){
			console.log('--> clearTimeout exception');
			console.log(exception);
		};
		this.t = setTimeout(function() {
			nbcolor = 0;
			restore(".lineMarked-00-33");
			mark(".lineMarked-00-33");
			try{deco()}catch(exception){
				console.log('--> deco() exception');
				console.log(exception);
			};    
		}, 500);
	}


	return {markElement:markElement,mark:mark,onResize:onResize};
}


const dys = markline();

document.addEventListener('onresize', dys.onResize);
document.addEventListener('resize', dys.onResize);
window.onresize=dys.onResize;
