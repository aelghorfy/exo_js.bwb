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
    
   /*  function tourDeHanoi(s, d, e, n) {

        if (n <= 0) {
            return
        }
    
    tourDeHanoi(s, e, d, n - 1)
    console.log(`Deplacer disque-${n} De ${s} vers ${d}`);

    tourDeHanoi(e, d, s, n - 1);
}
tourDeHanoi('s', 'd', 'e', 3)  */





     /* function genererMotif() {
       
        const nombreLignes = parseInt(window.prompt("Entrez le nombre de lignes à générer : "));
        
       

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
        let a = 'a'.charCodeAt(0);
        let z = 'z'.charCodeAt(0);

        if (code >= a && code <= z) {
            code = ((code - a + n) % 26) + a;
        }
        return String.fromCharCode(code);
    }

    let resultat = '';
    for (let i = 0; i < mot.length; i++) {
        resultat += decaleLettre(mot[i], n);
    }
    return resultat;
}

let mot = window.prompt("Entrer un mot :");
let n = parseInt(prompt("Entrer le nombre de décalage :"));

console.log(decaleMot(mot, n)); */ 


/* function afficheEtoilesSansRepeat() {
   
    for (let i = 9; i >= 1; i--) {
      let ligne = ""; 
      for (let j = 0; j < i; j++) {
        ligne += "* "; 
      }
      
      console.log(ligne);
    }
  }
  
  afficheEtoilesSansRepeat();  */


 /*  function afficheEtoilesSansRepeat() {
   
    for (let i = 1; i <= 9; i++) {
      let ligne = ""; 
      
     
      for (let j = 0; j < i; j++) {
        ligne += "* "; 
      }
      
      console.log(ligne);
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

    /* function calculerFrais() {
    

    let km = parseFloat(window.prompt("Entrez le nombre de km :"));

    let nbPassagers = parseInt(window.prompt("Entrez le nombre de passagers :"));

    

    let montantTotal = km * 0.6 

    let prixParPassager = montantTotal / nbPassagers - ( 0.5);

    console.log("Montant total des frais : " + montantTotal.toFixed(2) + " €");
   

    for (let i = 1; i <= nbPassagers; i++) {
        console.log("Prix pour le passager " + i + " : " + prixParPassager.toFixed(2) + " €");
    }

  } 

  calculerFrais();  */

 
  // liste 
/* let etudiants = [
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

function comparerNomsAvecOrdreDefinit(nomA, nomB, ordre) {
    let i = 0;
    let length = Math.min(nomA.length, nomB.length);

    while (i < length) {
        let charA = nomA[i];
        let charB = nomB[i];


        let positionA = -1;
        let positionB = -1;

        for (let i = 0; i< ordre.length; i++) {
            if (ordre[i] === charA) {
                positionA = i;
            }
            if (ordre[i] === charB) {
                positionB = i;
            }

            if (positionA !== -1 && positionB !== -1){
                break;
            }
        }

      
        if (positionA !== positionB) {
            return positionA - positionB;
        }

        i++;
    }

    return nomA.length - nomB.length;
}

function trieBulleinverse(etudiants) {
    let n = etudiants.length;
    let swapped;

  
    let ordre = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

    do {
        swapped = false;

        for (let i = n - 1; i > 0; i--) {
            if (comparerNomsAvecOrdreDefinit(etudiants[i].nom, etudiants[i - 1].nom, ordre) < 0) {
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

   // trie ordre alpha 
    etudiantsFiltres = trieBulleinverse(etudiantsFiltres);

    // moyenne des notes 
    let moyenne = (compteur > 0) ? (sommeNotes / compteur) : 0;

    // resultats 
    console.log("Notes supérieure à 15 :");
    for (let i = 0; i < etudiantsFiltres.length; i++) {
        console.log(etudiantsFiltres[i].nom + " : " + etudiantsFiltres[i].note);
    }

    console.log("Moyenne des notes : " + moyenne.toFixed(2));
}




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








const tableau = [
    { nom: "Alice", note: 85 },
    { nom: "benjamin", note: 92 },
    { nom: "Claire", note: 78 },
    { nom: "david", note: 88 },
    { nom: "Emma", note: 95 },
    { nom: "fabien", note: 67 },
    { nom: "Gabriel", note: 90 },
    { nom: "helene", note: 73 },
    { nom: "Isabelle", note: 82 },
    { nom: "jacques", note: 76 },
    { nom: "Kevin", note: 89 },
    { nom: "laura", note: 91 },
    { nom: "Marc", note: 84 },
    { nom: "nathalie", note: 79 },
    { nom: "Olivier", note: 87 },
    { nom: "pierre", note: 93 },
    { nom: "Quentin", note: 80 },
    { nom: "roxane", note: 77 },
    { nom: "Sophie", note: 94 },
    { nom: "thomas", note: 86 },
    { nom: "Ulysse", note: 81 },
    { nom: "valerie", note: 75 },
    { nom: "William", note: 83 },
    { nom: "xavier", note: 70 },
    { nom: "Yann", note: 88 },
    { nom: "zoe", note: 92 },
    { nom: "Adrien", note: 85 },
    { nom: "brigitte", note: 78 },
    { nom: "Camille", note: 89 },
    { nom: "damien", note: 91 },
    { nom: "Elise", note: 87 },
    { nom: "françois", note: 76 },
    { nom: "Gaëlle", note: 84 },
    { nom: "hugo", note: 93 },
    { nom: "Ingrid", note: 79 },
    { nom: "julien", note: 88 },
    { nom: "Karine", note: 82 },
    { nom: "lucas", note: 90 },
    { nom: "Mathilde", note: 95 },
    { nom: "nicolas", note: 77 },
    { nom: "Océane", note: 86 },
    { nom: "paul", note: 80 },
    { nom: "Quentin", note: 83 },
    { nom: "rachel", note: 75 },
    { nom: "Samuel", note: 92 },
    { nom: "thibault", note: 89 },
    { nom: "Ursula", note: 78 },
    { nom: "vincent", note: 91 },
    { nom: "Wendy", note: 87 },
    { nom: "xena", note: 76 },
    { nom: "Yasmine", note: 84 },
    { nom: "zacharie", note: 93 },
    { nom: "Amélie", note: 79 },
    { nom: "bruno", note: 88 },
    { nom: "Chloé", note: 82 },
    { nom: "dylan", note: 90 },
    { nom: "Estelle", note: 95 },
    { nom: "fabrice", note: 77 },
    { nom: "Géraldine", note: 86 },
    { nom: "henri", note: 80 },
    { nom: "Inès", note: 83 },
    { nom: "jean", note: 75 },
    { nom: "Kévin", note: 92 },
    { nom: "léa", note: 89 },
    { nom: "Mélanie", note: 78 },
    { nom: "nathan", note: 91 },
    { nom: "Ophélie", note: 87 },
    { nom: "patrick", note: 76 },
    { nom: "Quentin", note: 84 },
    { nom: "rémi", note: 93 },
    { nom: "Sarah", note: 79 },
    { nom: "théo", note: 88 },
    { nom: "Ugo", note: 82 },
    { nom: "valentin", note: 90 },
    { nom: "Wendy", note: 95 },
    { nom: "xavier", note: 77 },
    { nom: "Yohan", note: 86 },
    { nom: "zoé", note: 80 },
    { nom: "Antoine", note: 83 },
    { nom: "bernadette", note: 75 },
    { nom: "Cédric", note: 92 },
    { nom: "diane", note: 89 },
    { nom: "Élodie", note: 78 },
    { nom: "franck", note: 91 },
    { nom: "Guillaume", note: 87 },
    { nom: "hélène", note: 76 },
    { nom: "Isabelle", note: 84 },
    { nom: "jules", note: 93 },
    { nom: "Kevin", note: 79 },
    { nom: "laetitia", note: 88 },
    { nom: "Maxime", note: 82 },
    { nom: "nadine", note: 90 },
    { nom: "Olivier", note: 95 },
    { nom: "pascal", note: 77 },
    { nom: "Quentin", note: 86 },
    { nom: "romain", note: 80 },
    { nom: "Stéphanie", note: 83 },
    { nom: "thomas", note: 75 },
    { nom: "Ulysse", note: 92 },
    { nom: "valérie", note: 89 }
];

function comparerNoms(nomA, nomB) {
    let minLength = Math.min(nomA.length, nomB.length);
    
    for (let i = 0; i < minLength; i++) {
        let charA = nomA[i];
        let charB = nomB[i];

        if (charA === 'é') charA = 'e';
        if (charB === 'é') charB = 'e';
        if (charA === 'É') charA = 'E';
        if (charB === 'É') charB = 'E';


        if (charA < charB) {
            return -1;
        }
        if (charA > charB) {
            return 1;
        }
    }

    
    return nomA.length - nomB.length;
}


function trieBulle(tableau) {
    let n = tableau.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (comparerNoms(tableau[i].nom, tableau[i + 1].nom) > 0) {
                [tableau[i], tableau[i + 1]] = [tableau[i + 1], tableau[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return tableau;
}


let tableauTrie = trieBulle(tableau);


for (let i = 0; i < tableauTrie.length; i++) {
    console.log(tableauTrie[i].nom + " : " + tableauTrie[i].note);
}