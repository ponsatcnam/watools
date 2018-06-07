
/*
This create a header windows, for the watools.
all this takes inspiration  from "le-ruban-word" of the "cartablefantastique"
https://www.cartablefantastique.fr/outils-pour-compenser/le-ruban-word/
*/


function line3Color(){
    dys.mark("p");
    addColor();var deco=addColor;
    console.log("switched to 3 color");
    
}

document.addEventListener('keyup', (event) => {
     const nomTouche = event.key;
     
     //console.log(event);

     if (event.ctrlKey && nomTouche.toLowerCase()==="o") {
            // Même si event.key n'est pas 'Control' (par ex., 'a' is pressed),
            // event.ctrlKey peut être true si la touche Ctrl est pressée à cet instant.
         console.log(`Combinaison de ctrlKey + ${nomTouche} on colorie`);
	 line3Color();
                 } else {
            //console.log("else" +nomTouche.toLowerCase() + "rrr"+event.ctrlKey);
            
        }

    }, true);





/*
function onResizeCartable(){alert('aaa');};

window.onresize = onResizeCartable;
document.addEventListener('onresize', onResizeCartable);
document.addEventListener('resize', onResizeCartable);
console.log("eeeeee");
*/
