function concatenar (){
    var args = Array.prototype.slice.call(arguments);
    return args.join("");
}
function invocarFunciones(){
    var args = Array.prototype.slice.call(arguments);
    var result = "";
    for(var i = 0; i < args.length; i++){
        result += args[i]();
    }
    return result;
}
function creadorDeIncrementos(incremento) {
    return function(nombre) {
        return nombre + incremento;
    }
  }
invocacionUnica = function(nombre){
    return nombre + "1";
}

