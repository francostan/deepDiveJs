
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
var resultado = [];
function factores (n){    
    if(n%i!==0){
        resultado.push(n)
        return resultado;
    }
    if (n % i === 0) {
            resultado.push(i);
            n /= i;
        } else {
            i++;
        }
    if(n===0){
        return resultado;
    }
    return factores(n);
    }