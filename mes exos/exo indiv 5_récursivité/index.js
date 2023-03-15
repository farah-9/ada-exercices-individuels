function sum1(tableau) {
    let sum = 0;
    for (let i = 0; i < tableau.length; i++) {
      sum += tableau[i] ;
    }
    //console.log(sum)
    return sum;
  }
  sum1([1,2,4])

  function sum2(array) {
    // Cas de base : si le tableau est vide, la somme est 0
    if (array.length === 0) {
      return 0;
  }
    let table = array.shift()
    return table + sum2(array)
}
  //sum2([1,2,3,4])
 console.log(sum2([1,2,3,4]))