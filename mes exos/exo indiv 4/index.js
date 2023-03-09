function getLatinCharacterList(text) {

 console.log(text.split(""))
return text.split("")
// tableau = []
 // for (let element = 0; element < text.length; element++) {
  //  tableau.push(text[element])
   // console.log(tableau)
   //}
}

   const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function translateLatinCharacter(param) {
    return latinToMorse[param]
}
let resultat = translateLatinCharacter("B")
console.log(resultat)

//Ajouter une nouvelle fonction encode qui prend en paramètre du texte
// et qui va utiliser la fonction de l’étape 1, pour chaque caractère, 
//appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

function encode(text){
  let tabl = getLatinCharacterList(text) 
  let tablMorse =[]
  for (let index = 0; index < tabl.length; index++) {
   console.log(tabl[index])
   tablMorse[index] = translateLatinCharacter(tabl[index])
  }
    console.log(tablMorse)
}
encode("FRANCOIS")

//Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait 
//pour le encode pour créer une fonction decode. Dans cet exercice, 
//on admettra que les lettres en morse sont séparées par un espace, 
//et les mots par des “/” (slash).

//Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }
  
  let txtMorse = ".--- ./... ..- .. .../.- -.. .-"

function getmorseCharacterList(morseString){
  let splitWords = []
  let splitString = morseString.split("/")

  for (const element of splitString) {
    splitWords.push(element.split(" "))
  }

  return splitWords
}

function translateMorseCharacter(arraySplit){ 
  let translatedString = ""

  for (const word of arraySplit) {
    for (const letter of word) {
      translatedString += morseToLatin[letter]
    }   
    translatedString += " "
  }
  
  return translatedString
}

function decode(morseString){
  let split = getmorseCharacterList(morseString)
  let translate = translateMorseCharacter(split)
  return translate
}

console.log(decode(txtMorse))