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

/* const lettres="ABCDEFGHJKLMNPQRSTUVWXYZ";
const nombres="0123456789";



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

genererPlaques(); */

/* let plaque = generateLetter() + generateNumber() + generateLetter ();

for (let i=0;i<nbplaque;i++)
    stockplaque.push(plaque);

console.log(stockplaque) */
  
document.getElementById('insuranceForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get the values from the form inputs
    let age = parseInt(document.getElementById('age').value);              
    let anneesPermis = parseInt(document.getElementById('licenceYears').value);       
    let accident = parseInt(document.getElementById('accident').value);     
    let anneesAssure = parseInt(document.getElementById('insuredYears').value);

    // Call the function to calculate the insurance tariff
    let tarif = proposerTarifAssurance(age, anneesPermis, accident, anneesAssure);

    // Display the result
    document.getElementById('result').textContent = 'Vous bénéficierez du ' + tarif + '!';
});

function proposerTarifAssurance(age, anneesPermis, accident, anneesAssure) {
    let tarif = "";

    // Logic for calculating the tariff based on the inputs
    if (age < 25 && anneesPermis < 2) {
        tarif = "Tarif D";
    } else if (age > 25 || anneesPermis < 2) {
        tarif = "Tarif C";
    } else if (age >= 25 && anneesPermis >= 2) {
        tarif = "Tarif B";
    }
//If the client have one accident, he get downgraded, if more he get refused
    if (accident > 1) {
        if (tarif === "Tarif D") {
            tarif = "Tarif Refusé";
        } else if (tarif === "Tarif C") {
            tarif = "Tarif D";
        } else if (tarif === "Tarif B") {
            tarif = "Tarif C";
        }
         } else if (tarif === "Tarif B") {
            tarif = "Tarif C";
    }

    if (accident > 2) {
        tarif = "Refusé"
    }

//If the client have insurence for more or equal a year, his programm get upgrated 
    if (anneesAssure >= 1 ) {
        if (tarif === "Tarif D") {
            tarif = "Tarif C";
        } else if (tarif === "Tarif C") {
            tarif = "Tarif B";
        } else if (tarif === "Tarif B") {
            tarif = "Tarif A";
        }
    }

    return tarif; 
}
