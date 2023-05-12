// ## Étape 1

// Commençons avec une version simplifiée du jeu.

// Nous imposerons la combinaison à deviner. Elle doit être composée de 2 pions de couleurs différentes.

// Le joueur a donc 12 essais pour trouver la bonne combinaison.

// 4 choix de couleurs possibles.

// Vous devez écrire au moins 3 fonctions pour gérer :

// - Si la proposition est bien composée uniquement par les 4 couleurs possibles et rien d’autre
// - Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
// - Une fonction qui gère la partie (continuer tant que/fin si gagné)


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomColour(colours) {
    let searchCode = []
    for (i = 0; i < 4; i++) {
        let index = getRandomInt(8)
        searchCode.push(colours[index])
    }
    return searchCode
}


//Demande quel code l'utilisateur souhaite proposer
function askCode(arrayToFind) {
    let array = []
    
    for (let i = 0; i < arrayToFind.length; i++) {
        let colour = prompt(`Color n°${i + 1} :`)
        while (!checkColor(colour, code)) {
            colour = prompt("A valid colour plz")
        }
        array.push(colour)
    }
    console.log("Tableau proposer par user", array)
    return array
}

//Demande si les couleurs proposées sont valides
function checkColor(colour, code) {
    let expect = code.includes(colour)
    return expect
}

//Check la place que la couleur proposer occupe dans le code a trouver
function checkPlace(arrayUser, array) {
    let badPlaced = 0
    let goodPlaced = 0
    let missed = 0
    for (let i = 0; i < arrayUser.length; i++) {
        if(array.includes(arrayUser[i])){
            if (arrayUser[i] === array[i]) {
                goodPlaced ++
            } else {
                badPlaced ++
            }
        } else {
            missed ++
        }
    }
    if(goodPlaced === 4){
        return true
    }
    alert("Good : "+ goodPlaced + "\nNot good : "+ badPlaced + "\nManqué : " + missed)
    console.log("Good : "+ goodPlaced + "\nNot good : "+ badPlaced + "\nManqué : " + missed)
}

//Verification si code proposé correspond au code exact
function codeOk(proposition, arrayToGuess) {
    for (let i = 0; i < proposition.length; i++) {
        if (proposition[i] !== arrayToGuess[i]) {
            return false
        }
    }
    return true
}

//Execution du code limité a 12 fois
function nbRound(code) {
    const arrayToGuess = randomColour(code)
    for (let i = 0; i < 12; i++) {
        console.log("Tableau souhaité", arrayToGuess)
        let prop = askCode(arrayToGuess)
        if (checkPlace(prop,arrayToGuess) === true) {
            alert("You win this game, you're so strong!")
            return
        }
        checkPlace(prop, arrayToGuess)
        alert("Make an other proposition please")
    }
    alert("You lose...")
}

function play() {
    const code = ["blue", "red", "yellow", "green", "black", "pink", "purple", "white"]
    nbRound(code)
}

play()