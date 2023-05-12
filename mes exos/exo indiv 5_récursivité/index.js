  /* 
        Étape 1

    Écrire une fonction `sum1` 
    qui prend un tableau d'entiers 
    à additionner entre eux.
    
    */


    function sum1(numbers){
      let result = 0;
      for (let number of numbers){
          result += number;
      }
      return result;
  }

  console.log('sum1',sum1([1,2,3]));

/* 
   Étape 2

      Même exercice, 
      mais avec une fonction récursive. 
      On appellera la fonction `sum2`.
  */

  function sum2(numbers){
      if(numbers.length === 0){
          return 0;
      }
      return numbers[0] + sum2(numbers.slice(1));
  }
  console.log('sum2',sum2([1,2,3]));

/*
   Étape 3

  On appelle factoriel le produit des entiers 
  inférieurs ou égaux à un nombre donné.
  Exemple : factoriel de 3 = 1x2x3 = 6

  Écrire une fonction `factorial` qui prend un entier 
  en paramètre et calcule son factoriel récursivement.
*/

  function factorial(n){
      if(n ===1){
          return 1;
      }
      return n * factorial(n-1);
  }


  console.log('factorial',factorial(3));

  /*
      **Étape 4**

  En mathématiques, la **suite de Fibonacci** est une 
  suite de nombres entiers dont chaque terme successif 
  représente la somme des deux termes précédents, et 
  qui commence par 0 et 1. Ainsi, les dix premiers 
  termes qui la composent sont 
  0, 1, 1 (0+1), 2 (1+1), 3 (1+2), 5 (2+3), 8 (3+5), 13 (5+8), 21 (8+13) et 34 (13+21).

  Écrire une fonction `fibonacci` qui prend un entier `x` 
  en paramètre et résoud la suite de Fibonacci.
*/

  function fibonacci(n){
      if (n < 2){
          return n;
      }
      return fibonacci(n-1) + fibonacci(n-2);
  }



  function fibo(x,tab = [0,1]){
      if (x < 2){
          return tab;
      }
      tab.push(tab[tab.length-1]+tab[tab.length-2])
      return fibo(x-1,tab);
  }

  console.log('fibonacci',fibonacci(6));
  console.log('fibonacci',fibo(6));