/*
Some generals functions
*/


/* get  current computed value of a givent property */
    function getComputeddValue (element,property) {
	var cStyle = window.getComputedStyle(element, ""); 
	return cStyle.getPropertyValue(property);
    }

/* copy the computed style on another element */
    function copyComputedStyles(source,target) {
	var cs = window.getComputedStyle(source,null);
	var len = cs.length;
	for (var i=0;i<len;i++) {
	    var style = cs[i];
	    var v=cs.getPropertyValue(style);
	    target.style[style]=v;
	}
	
    }


/* set style given as an object */
function setStyles(el,o){
    for(p in o){
        el.style[p]=o[p];
    }
}


   

  //surround range even if  splits a non-Text node with only one of its boundary points.
function mysurround(range,node,className){
    var className = className ||"p-line-00-33";//
	var newNode=node || document.createElement("span");
	newNode.classList.add(className);//add class 
	var f=range.extractContents()
	var b=[].map.call(f.childNodes,function(x){
	    if (x.constructor.name=="string") {
		return document.createTextNode(x)}
	    else {return x;}});
	b.forEach((x)=>newNode.appendChild(x));
	range.insertNode(newNode)
    }
