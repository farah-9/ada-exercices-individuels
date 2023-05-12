/* Etape 1
Conçu pour diminuer la barrière d’entrée

Créer une fonction decoupeChaine qui prend en paramètre une string et renvoie la même string dans laquelle les caractères successifs non identiques sont séparés par un espace.

Ex :

decoupeChaine("ab")     // renvoie "a b"
decoupeChaine("aabbca") // renvoie "aa bb c a"`
*/

function decoupeChaine(chaine) {
    let resultat = chaine[0];
    for (let i = 1; i < chaine.length; i++) {
        if (chaine[i] !== chaine[i - 1]) {
        resultat += " " + chaine[i];
    } else {
        resultat += chaine[i];
        }
    }
    console.log(resultat);
    return resultat;
}
decoupeChaine("aabb")