// constante
/* let monCanard ="Donald";
const nombreDePattes=2;
const nombreDAiles=2;
// variable
function canard(nombreDePattes,nombreDAiles){
let maCanette="Daisy";
let mesCanards=maCanette+=monCanard;
return nombreDePattes+nombreDAiles;
}
console.log(canard(nombreDePattes,nombreDAiles)) */

/*let x=1;
function f(){
let x=2
console.log(x);

}
console.log(x);
f();*/

const lettres="ABCDEFGHJKLMNPQRSTUVWXYZ";
const nombres="0123456789";


let nbplaque=prompt("jsp");
let stockplaque=[];

function generateLetter(){
    let plaque="";
    for ( i=0;i<2;i++){
        plaque+=lettres.charAt(Math.floor(Math.random()*(lettres.length)));
        
    }
    
   return plaque;
}

function generateNumber(){
    let plaque="-";
    for ( i=0;i<3;i++){
        plaque+=nombres.charAt(Math.floor(Math.random()*(nombres.length)));
    }

return plaque += "-";
}

function genererPlaques(){
    let i=0;
    while (i<50)
    {
        console.log(generateLetter()+generateNumber()+generateLetter());
        i++;
        console.log(i);
    }

}

genererPlaques();

/* let plaque = generateLetter() + generateNumber() + generateLetter ();

for (let i=0;i<nbplaque;i++)
    stockplaque.push(plaque);

console.log(stockplaque) */