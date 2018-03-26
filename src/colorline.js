


//default
var colors=["red","blue","green"];
var bgcolors=["yellow","gray"];
var nbcolor=0;

    //add colors 
function addColor(selector,option){
    var selector=selector ||"p-line-00-33";
    var option=option ||{};
    var color=option.colors||colors;
    var modColor=color.length;
    var nbcolor=0;
    var line=document.getElementsByClassName(selector);
	[].forEach.call(line,(x)=>{x.style.color=color[(nbcolor++)%modColor];})
    }

    //add background colors and change to bloc (for a 100% widht)
    //
function addBgColor(selector,option){
    var selector=selector ||"p-line-00-33";
    var option=option ||{};
    var colors=option.colors||bgcolors;
    var modColor=colors.length;
    var nbcolor=0;
    var display=option.display || "block";
    var lines=document.getElementsByClassName(selector);
    [].forEach.call(lines,(x)=>{x.style.backgroundColor=bgcolors[(nbcolor++)%modColor];x.style.display=display}) //block ou pas
    }


    


//adding gradient
//1 color   
    
    //to avoid problems with background-clip: text;  we enrich the styleSheet
    //this return a function to clean the sheet.
    //https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
function addGradientColors(selector,option){
    var selector=selector ||"p-line-00-33";
    var option=option ||{};
   
    var color=option.colors||colors;
    
    var modColor=color.length;
    var nbcolor=0;
    
    var lines=document.getElementsByClassName(selector);
	[].forEach.call(lines,(x)=>{x.classList.add("grad-00-33----"+nbcolor++%modColor);});
    var index=[];
    if(document.styleSheets.length<1){
	var s=document.createElement("style");
	s.id="added-00-33"
	     document.body.appendChild(s);
	 }
    var sheet =document.styleSheets[0];
    for(var i=0;i<modColor;i++){
	    index.push(sheet.cssRules.length);
	var cstart =color[(nbcolor+i)%modColor];
	var cend =color[(nbcolor+i+1)%modColor];
	console.log(modColor);
	   // var sheet = window.document.styleSheets[0];
	    var rule=".grad-00-33----"+i+
		" {background: linear-gradient(to right, "+cstart+" 0% ,"+cend+" 100%);"+
		"color:transparent;-webkit-background-clip: text;background-clip: text;   }";
	sheet.insertRule(rule, sheet.cssRules.length);
	console.log("add"+ rule);
	    
	}
    return function(index,sheet){
	()=>
	    index.forEach((x)=>sheet.deleteRule(x));
	}(index,sheet);
}
 //2 background
function addBgGradientColors(selector,option){
    var selector=selector ||"p-line-00-33";
    var option=option ||{};
    var color=option.colors||colors;
    var modColor=color.length;
    var nbcolor=0;
    var display=option.display || "block";
    
    var lines=document.getElementsByClassName("p-line-00-33");
    [].forEach.call(lines,(x)=>{
	var cstart =color[nbcolor%3];
	var cend =color[(nbcolor++)%3];
	x.style.background="linear-gradient(45deg,"+cstart+","+ cend+")";    
	x.style.display=display}) ;//block ou pas
}




