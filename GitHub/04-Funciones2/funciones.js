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
    return function(num) {
        return num + incremento;
    }
  }

  function invocacionUnica(funcion) {
    let invocado = false;
    return function() {
        if(invocado) {
            return;
        }
        //dentro de este scope ya que seteado invocado como true
        invocado = true;
        return funcion.call(this, arguments);
    }
  }
  function objetoConClousure() {
    let obj={
        incremento: creadorDeIncrementos(1),
        incrementoPor10: creadorDeIncrementos(10),
        pedirValor: function() {
            return this.valor;
        },
        cambiarValor: function(nuevoValor) {
            this.valor = nuevoValor;
        }
    }
    return obj;
  }
  function ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto) {
    var funciones = [];
    for(var i = 0; i < arregloInvitados.length; i++) {
        funciones.push(function(codigo) {
            if(codigo === codigoSecreto) {
                return arregloInvitados[i];
            }
            return "código secreto: invalido";
        });
    }
    return funciones;
  }

  function armarListaDeInvitados (a,b){
    let array= [];

    for(let i = 0; i < a.length; i++){
        if(b === 404) {
            array.push(a[i].toString());
        }else{         
        console.log( "código secreto: invalido");
        }
    };
    return array;
  }
