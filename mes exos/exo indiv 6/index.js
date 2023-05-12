let tripToParse = "Perdita 8 10 8"

// MAPS
var tripMapR = new Map();
tripMapR.set("client", "Roger");
tripMapR.set("start", 0);
tripMapR.set("duration", 5);
tripMapR.set("price", 10);
var tripMapPe = new Map();
tripMapPe.set("client", "Perdita");
tripMapPe.set("start", 8);
tripMapPe.set("duration", 10);
tripMapPe.set("price", 8);
var tripMapPo = new Map();
tripMapPo.set("client", "Pongo");
tripMapPo.set("start", 3);
tripMapPo.set("duration", 7);
tripMapPo.set("price", 14);
var tripMapAn = new Map();
tripMapAn.set("client", "Anita");
tripMapAn.set("start", 16);
tripMapAn.set("duration", 3);
tripMapAn.set("price", 7);

// ETAPE 0
function printMap(map){
  console.log("MAP : ")
  for (var [key, value] of map) {
    console.log(key + " : " + value);
  }
}

// ETAPE 1

// fonction qui renvoie un tableau à partir
// d'une string
function parseTripTab(trip){
  let tab = trip.split(" ");
  return tab
}

// fonction qui renvoie une map à partir d'un tableau trip
function parseTrip(tripTab){
console.log(tripTab);
var tripMap = new Map();
tripMap.set("client", tripTab[0]);
tripMap.set("start", tripTab[1]);
tripMap.set("duration", tripTab[2]);
tripMap.set("price", tripTab[3]);
for (var [key, value] of tripMap) {
console.log(key + " : " + value);
}
return tripMap
}

//result = parseTrip(parseTripTab(tripToParse))


// ETAPE 2
let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

function parseTrips(trips) {
const result = []
	for (let i=0; i<trips.length;i++){
    let trip = trips[i] // "Roger 0 5 10"
    let tripTab = parseTripTab(trip) // ["Roger","0","5","10"]
    let tripMap = parseTrip(tripTab) // map contenant les clés/valeurs "client : Roger", "start: 0", etc.
    result.push(tripMap)
}
console.log(result)
return result
}

let myMaps = parseTrips(tripsToParse)

// ETAPE 3

// retourne la somme des prix d'un tableau de voyages au format Map
function getTripsPrice(voyages){
let sum = 0
for (let i=0; i<voyages.length; i++){
    let elemMap = voyages[i] // map contenant les clés/valeurs "client : Roger", "start: 0", etc.
    console.log(elemMap.get("price"))
    sum += Number(elemMap.get("price"))
}
return sum
}

console.log("Somme des prix : " + getTripsPrice(myMaps))

// ETAPE 4

// renvoie vrai si tripA et tripB sont compatibles, soit si (start + duration) de tripA est bien < à start de tripB
function checkCompatibility(tripA, tripB) {
let endTripA = Number(tripA.get("start")) + Number(tripA.get("duration"))
let startTripB = Number(tripB.get("start"))
return (endTripA < startTripB)
}

console.log(checkCompatibility(tripMapR,tripMapPo))
console.log(checkCompatibility(tripMapR,tripMapPe))

// ETAPE 5

// renvoie un tableau des voyages compatibles dans
// trips qui est un tableau de Maps
function findCompatibilities(trips){
let result = []
  // je parcours le tableau trips
for (let i=0; i<trips.length; i++){
    // pour chaque element de trips, je le compare à tous les elements du tableau
    for (let j=0; j<trips.length; j++){
    if (i == j) {
        // result.push([trips[i]])
    } else if (checkCompatibility(trips[i],trips[j])) {
        console.log("COMPATIBLES :")
        printMap(trips[i])
        printMap(trips[j])
        result.push([trips[i],trips[j]])
    }
    }
}
return result
}

console.log(findCompatibilities(myMaps))

// ETAPE 6

// renvoie la meilleure combinaison sous forme de tableau de Maps, selon un tableau de Maps, trips, passé en argument. Il faudra chercher, parmi les voyages compatibles, lesquels sont les plus rentables, càd la somme de prices la plus élevée.
function findBestPrices(trips) {
let maxPrice = 0
let bestTripsCombo = []
let tripsCompatibles = findCompatibilities(trips)
  // je parcours le tableau tripsCompatibles
for (let i=0; i<tripsCompatibles.length; i++){
    let price = getTripsPrice(tripsCompatibles[i])
    if (price > maxPrice){
    maxPrice = price
    bestTripsCombo = tripsCompatibles[i]
    }
}
console.log("maxPrice : " + maxPrice)
console.log("TRIPS : ")
printMap(bestTripsCombo[0])
printMap(bestTripsCombo[1])
}

findBestPrices(myMaps)