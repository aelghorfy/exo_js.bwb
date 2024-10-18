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


    let age = parseInt(document.getElementById('age').value);              
    let anneesPermis = parseInt(document.getElementById('licenceYears').value);       
    let accident = parseInt(document.getElementById('accident').value);     
    let anneesAssure = parseInt(document.getElementById('insuredYears').value);


    let tarif = proposerTarifAssurance(age, anneesPermis, accident, anneesAssure);


    document.getElementById('result').textContent = 'Vous bénéficierez du ' + tarif + '!';
});

function proposerTarifAssurance(age, anneesPermis, accident, anneesAssure) {
    let tarif = "";


    if (age < 25 && anneesPermis < 2) {
        tarif = "Tarif D";
    } else if (age > 25 || anneesPermis < 2) {
        tarif = "Tarif C";
    } else if (age >= 25 && anneesPermis >= 2) {
        tarif = "Tarif B";
    }

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
} */
 

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
    } else if (copie > 10 && copie <= 30) {
        totalprix = 10 * dizaine + (copie - 10) * vingtaine;
    } else if (copie > 30) {
        totalprix = 10 * dizaine + 10 * vingtaine + (copie - 30) * audela;
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
} 
 */
    
    
    //s, d, e = source, destination, extra
    
    function tourDeHanoi(s, d, e, n) {

        if (n <= 0) {
            return
        }
    
    tourDeHanoi(s, e, d, n - 1)
    console.log(`Deplacer disque-${n} De ${s} vers ${d}`);

    tourDeHanoi(e, d, s, n - 1);
}
tourDeHanoi('s', 'd', 'e', 3) 

     /* function genererMotif() {
       
        const nombreLignes = parseInt(prompt("Entrez le nombre de lignes à générer : "));
        
       

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
    
    genererMotif(); */
     

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

  
 /*  function genererRire(n){
  let text = "mouah";
  let text2 = "ah";
  let resultat = text2.repeat(n);
  console.log(text + resultat);
}

  let n = window.prompt("Intensité du rire diabolique :");
  
  genererRire(n) */

 /*  function calculerFrais() {
    const tarifDeBase = 0.6;
    const reduction = 0.5;

    let km = parseFloat(window.prompt("Entrez le nombre de km :"));

    let nbPassagers = parseInt(window.prompt("Entrez le nombre de passagers :"));

    if (nbPassagers <= 0) {
        console.log("Qui va conduire même?!");
        return;
    }

    let montantTotal = km * tarifDeBase - (reduction * nbPassagers);

    let prixParPassager = montantTotal / nbPassagers
    
    console.log("Montant total des frais : " + montantTotal.toFixed(2) + " €");
    console.log("Prix par passager : " + prixParPassager.toFixed(2) + " €");

    for (let i = 1; i <= nbPassagers; i++) {
        console.log("Prix pour le passager " + i + " : " + prixParPassager.toFixed(2) + " €");
    }

  } 

  calculerFrais(); */

 
 
 /*  function trieBulleinverse(etudiants) {
    let n = etudiants.length;
    let swapped;

    do {
        swapped = false;

        for (let i = n - 1; i > 0; i--) {
            if (etudiants[i].nom.toLowerCase() < etudiants[i - 1].nom.toLowerCase()) {
                [etudiants[i], etudiants[i - 1]] = [etudiants[i - 1], etudiants[i]];
                swapped = true;
            }
        }
       
    } while (swapped);

    return etudiants;
}

function filtrerEtudiants(etudiants) {
    let etudiantsFiltres = [];
    let sommeNotes = 0;
    let compteur = 0;

   // note sup à 15 
    for (let i = 0; i < etudiants.length; i++) {
        if (etudiants[i].note > 15) {
            etudiantsFiltres.push(etudiants[i]);
            sommeNotes += etudiants[i].note;
            compteur++;
        }
    }

   // trie orde alpha 
    etudiantsFiltres = trieBulleinverse(etudiantsFiltres);

    // moyenne notes 
    let moyenne = (compteur > 0) ? (sommeNotes / compteur) : 0;

    // resultats 
    console.log("Notes supérieure à 15 :");
    for (let i = 0; i < etudiantsFiltres.length; i++) {
        console.log(etudiantsFiltres[i].nom + " : " + etudiantsFiltres[i].note);
    }

    console.log("Moyenne des notes : " + moyenne.toFixed(2));
}

// liste 
let etudiants = [
    { nom: 'Agathe', note: 14 },
    { nom: 'Wlad', note: 17 },
    { nom: 'Yohann', note: 16 },
    { nom: 'Laureline', note: 17 },
    { nom: 'Christian', note: 12 },
    { nom: 'Yannick', note: 19 },
    { nom: 'Kaique', note: 17 },
    { nom: 'Angélique', note: 18 },
    { nom: 'Dorian', note: 15 },
    { nom: 'emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
];


filtrerEtudiants(etudiants);
 */





/* function estImposable() { 
    let civilité = window.prompt("Veuillez entrer votre civilité (homme ou femme):").toLowerCase();
    let age = parseInt(window.prompt("Veuillez entrer votre âge:"));
    
    let tauxImposition;

    if (civilité === 'homme') {
        if (age > 18) {
            tauxImposition = 0.10 * age;
            console.log("Imposable");
            console.log("Taux d'imposition: " + tauxImposition.toFixed(2) + "%");
        } else {
            console.log("Non imposable");
        }

    } else if (civilité === 'femme') {
        if (age >= 18) {
            if (age < 25) {
                tauxImposition = 0.08 * age; 
            } else {
                tauxImposition = 0.05 * age;
            }
            console.log("Imposable");
            console.log("Taux d'imposition: " + tauxImposition.toFixed(2) + "%");
        } else {
            console.log("Non imposable");
        }
    } else {
        console.log("Non imposable");
    }
}

estImposable(); */  
