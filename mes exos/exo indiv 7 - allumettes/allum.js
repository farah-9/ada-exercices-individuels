//Etape 1
// On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, 
// (ou tout autre objet : cailloux, jetons, . . .). Chacun à son tour, 
// les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. 
// Celui qui ôte la dernière allumette gagne.

//Etape 2
// Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a 
// des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ.

function jouerAllumettes() {
    let tasAllumettes = 50; // le nombre initial d'allumettes
    let joueurCourant = 1; // le joueur qui commence
    while (tasAllumettes > 0) {
    console.log("Il y a", tasAllumettes, "allumettes dans le tas.");
    let nbAllumettes = Number(prompt("Joueur " + joueurCourant + ", combien d'allumettes voulez-vous enlever ? (entre 1 et 6)"));
    if (nbAllumettes >= 1 && nbAllumettes <= 6 && nbAllumettes <= tasAllumettes) {
        tasAllumettes -= nbAllumettes;
        console.log("Le joueur", joueurCourant, "a enlevé", nbAllumettes, "allumettes.");
        joueurCourant = joueurCourant === 1 ? 2 : 1; // on change de joueur
    } else {
        console.log("Erreur: nombre d'allumettes invalide !");
    }
    }
    console.log("Le joueur", joueurCourant, "a gagné !");
    alert("Le joueur " + joueurCourant + " a gagné !")
}
jouerAllumettes()


