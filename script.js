let etoiles = '*';
let lineDroite = '';
let lineGauche = '';
let espacement = ' ';

// Afficher la pointe du sapin
const afficherPointeSapin = (hauteur) => {
    console.log('+')
    for(let i = 0; i < hauteur; i++){
        console.log('|');
    }
};

//afficherPointeSapin(4);

// // Etape 1.1
// const afficherEtoiles = (n) => {
//     let nbrEtoile = etoiles.repeat(n);
//     console.log(nbrEtoile);
//     //return nbrEtoile
// };

// Etape 1.2
const afficherRectangle = (hauteur, largeur) => {
    for(let j = 0; j < hauteur; j++){
       afficherEtoiles(largeur) 
    }
};

//afficherRectangle(5, 5);

// Etape 1.3
const afficherTriangleDroite = (n) =>{
    console.log('\\')
    for(let k = 0; k < n - 1; k++){
        lineDroite += etoiles
        console.log(lineDroite + '\\')
    }
}

//afficherTriangleDroite(5);

// Etape 1.4
const afficherTriangleGauche = (n) => {
    console.log(espacement.repeat(n - 1) + ' /');
    for(let k = 0; k < n - 1; k++){
        lineGauche += etoiles;
        console.log(espacement.repeat(n - k - 1) + '/' + lineGauche)
    }
}
afficherTriangleGauche(5);

const afficherSapin = (etages, hauteur_etage) => {

}

afficherPointeSapin(1);
afficherPointeSapin(2);
afficherPointeSapin(3);


