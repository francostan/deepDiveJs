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
function fib(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
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
