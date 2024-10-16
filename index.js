// constante
/* let monCanard ="Donald";
const nombreDePattes=2;
const nombreDAiles=2;
// letiable
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






  
/* document.getElementById('insuranceForm').addEventListener('submit', function(event) {
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
 */

/* document.getElementById('PrixPhotocopie').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let copie = parseInt(document.getElementById('copie').value);

    let tarif = calculate(copie, dizaine, vingtaine, audela);

    document.getElementById('result').textContent = "Le montant s'élève à " + tarif + '€';
})

const dizaine = 0.10;
const vingtaine = 0.09;
const audela = 0.08;

function calculate(copie, dizaine, vingtaine, audela) {
    let totalprix = 0;
    if (copie <= 10) {
        totalprix = copie * dizaine;
    } else if (copie > 10 && copie <= 20) {
        totalprix = 10 * dizaine + (copie - 10) * vingtaine;
    } else if (copie > 30) {
        totalprix = 10 * dizaine + 10 * vingtaine + (copie - 20) * audela;
    }
    totalprix = Math.round(totalprix*100)/100;
    return totalprix;
} */

    /* function estImposable() {

        let civilité = window.prompt("Veuillez entrer votre civilité (homme ou femme):").toLowerCase();
    
        let age = parseInt(window.prompt("Veuillez entrer votre âge:"));
    
        if (civilité === 'homme') {
            if (age > 18) {
                alert("Imposable");
            } else {
                alert("Non imposable");
            }
        } else if (civilité === 'femme') {
            if (age >= 18 && age <= 35) {
                alert("Imposable");
            } else {
                alert("Non imposable");
            }
        } else {
            alert("Non imposable");
        }
    }
    estImposable(); */
    









    /* function pyramid(n) {

        for(let i=n; i>= 0; i--){
      
          let star2 = '*'. repeat(i)

       
          console.log(star2);
      
        }
  
      }
      

let n = window.prompt("Nombre d'etages");
pyramid(n); */

/* function pyramid(n) {
    for(let i=0; i<=n; i++){
        let star2 = '*'.repeat(i)

        console.log(star2);
    }
}

let n = window.prompt("Nombre d'etages");
pyramid(n); */


      
/* function trieBulleinverse(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i= n - 1; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {

                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(trieBulleinverse(arr)); */


/* function estPalindrome(mot) {
    mot = mot.toLowerCase()

    let motInverse = mot.split('').reverse().join('');

    return mot === motInverse;
}

let motUtilisateur = prompt ("Entrez un mot :")
if (estPalindrome(motUtilisateur)) {
    console.log("true");
} else {
    console.log("false");
} */

    /* let n = 3;

    function hanoi(n, a=1, b=2, c=3) {
        if (n > 0) {
            
            hanoi(n - 1, a, c, b);
            
            
            document.write("Déplacer le disque " + n + " de la tour " + a + " vers la tour " + c + "<br/>");
            
           
            hanoi(n - 1, b, a, c);
        }
    }
    
    hanoi(n);
    
     */

    /* function genererMotif() {
       
        const nombreLignes = parseInt(prompt("Entrez le nombre de lignes à générer : "));
        
       
        if (isNaN(nombreLignes) || nombreLignes <= 0) {
            console.log("Veuillez entrer un nombre valide.");
            return;
        }

        const motif1 = "#*#*#*#*#*";
        const motif2 = "*#*#*#*#*#";
    
        for (let i = 0; i < nombreLignes; i++) {
            if (i % 2 === 0) {
                console.log(motif1);
            } else {
                console.log(motif2);
            }
        }
    }
    
    genererMotif();
     */

    /* let indices = [];
let tableau = ["f", "q", "x", "e", "x", "g"];
let élément = "x";
let idx = tableau.indexOf(élément);
while (idx != -1) {
  indices.push(idx);
  idx = tableau.indexOf(élément, idx + 1);
}
console.log(indices);
 */


/* function decaleMot (mot, n) {

    function decaleLettre(lettre, n) {
    lettre = lettre.toLowerCase();

    let code = lettre.charCodeAt(0);

    if (code>= 97 && code <= 122) {
        code = ((code -97 + n) % 26) + 97;

    }
    return String.fromCharCode(code);

}

let resultat = '';
for (let i = 0; i<mot.length; i++) {
    resultat += decaleLettre(mot[i], n);
}
return resultat;
}

let mot = window.prompt("Entrer un mot :");

let n = parseInt(prompt("Entrer le nombre de décalage :"), 10);

console.log("Le mot est :" + decaleMot(mot, n)); */

/* function afficheEtoilesSansRepeat() {
   
    for (let i = 9; i >= 1; i--) {
      let ligne = ""; 
      
     
      for (let j = 0; j < i; j++) {
        ligne += "* "; 
      }
      
      console.log(ligne.trim());
    }
  }
  
  afficheEtoilesSansRepeat(); */


 /*  function afficheEtoilesSansRepeat() {
   
    for (let i = 1; i <= 9; i++) {
      let ligne = ""; 
      
     
      for (let j = 0; j < i; j++) {
        ligne += "* "; 
      }
      
      console.log(ligne.trim());
    }
  }
  
  afficheEtoilesSansRepeat(); */

  
  function genererRire(n){
  let text = "mouah";
  let text2 = "ah";
  let resultat = text2.repeat(n);
  console.log(text + resultat);
}

  let n = window.prompt("Intensité du rire diabolique :");
  
  genererRire(n)