const winNumber = 22
const min = 0
const max = 50    
function askNumber(){
  // let givenNumber = parseInt(window.prompt("Please enter your number", "fill in this box"))
  // console.log(givenNumber) 
  return parseInt(prompt("Entre un chiffre stp"))
}

function defineWinningNumber() {

    let numberFromPlayerOne;

    do {
        numberFromPlayerOne = parseInt(window.prompt("Joueur 1, entrez votre nombre" + " " + min + " < ? < " + max, 0))
    }
    while (numberFromPlayerOne < min || numberFromPlayerOne > max || isNaN(numberFromPlayerOne));

    return numberFromPlayerOne
}


// Function called by player two to guess the number defined by player one.
function guessNumberDefinedByPlayerOne() {
    return parseInt(prompt("Devine un chiffre, stp"))
}


function didIWin(givenNumber, correctNumber) {
    if (givenNumber == correctNumber) {
        alert("Bravo, tu as gagné")
        return true
    }
    else if (givenNumber < correctNumber) {
        alert("C'est plus grand")
    }
    else {
        alert("C'est plus petit")
    }
    return false
}

    
function didIWin(number) {
    
  if (number == winNumber) {
    alert("Bravo, tu as gagné")
    return true
  }
  else if (number < winNumber) {
    alert("Ecris plus grand")
  }
  else{
    alert("Ecris plus petit")
  }
  return false
}
function defineWinningNumber() {

    let numberFromPlayerOne;

    do {
        numberFromPlayerOne = parseInt(window.prompt("Joueur 1, entrez votre nombre" + " " + min + " < ? < " + max, 0))
    }
    while (numberFromPlayerOne < min || numberFromPlayerOne > max || isNaN(numberFromPlayerOne));

    return numberFromPlayerOne
}


// Function called by player two to guess the number defined by player one.
function guessNumberDefinedByPlayerOne() {
    return document.getElementById("guess").value
}


function didIWin(givenNumber, correctNumber) {
    if (givenNumber == correctNumber) {
        document.getElementById("game").innerHTML = "Bravo, tu as gagné"
        return true
    }
    else if (givenNumber < correctNumber) {
        alert("C'est plus grand")
    }
    else {
        alert("C'est plus petit")
    }
    return false
}

let tryNumber = 0
let winningNumber = defineWinningNumber()


function gamePlay() {
    const guessedNumber = guessNumberDefinedByPlayerOne()
    const isWinning = didIWin(guessedNumber, winningNumber)

    if (!isWinning) {
        tryNumber++
        document.getElementById("tries").innerHTML = tryNumber
    }
   
}


gamePlay()

