
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
    n-=1;
    return factorial(n);
}
function fib(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
var i = 2;

function factores (n){ 
    
}