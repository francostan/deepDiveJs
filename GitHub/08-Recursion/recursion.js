function factorialIterativo(n) {
  var resultado = 1;
  for (var i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

var acumulador = 1;
function factorial(n) {
  if (n === 0) {
    return acumulador;
  }
  acumulador *= n;
  n -= 1;
  return factorial(n);
}
//FACTORIAL REPASO PREP
function factorial(n) {
  //caso base
  if (!n//es lo mismoque igualar a 0
  ) {return 1}
  //caso recursivo
  return n * factorial(n-1)
}


function fib(n) {
  //REPASO PREP
  if (n<=1)  return 1;
  return fib(n - 1) + fib(n - 2);
}


function factores(n) {
  if (n % bandFact(n) !== 0 || bandFact(n) === n) {
    return [n];
  }else{
    return [bandFact(n)].concat(factores(n / bandFact(n)));
  } 
}

function bandFact(n) {
  for (var i = 2; i <= n; i++) {
    if (n % i === 0) {
      return i;
    }
  }
}
