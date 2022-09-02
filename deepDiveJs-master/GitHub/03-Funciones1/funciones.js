function crearCalculadora() {
  var valor = 0;
  return {
    valor: function() {
      return valor;
    },
    sumar: function(n) {
      valor += n;
    },
    restar: function(n) {
      valor -= n;
    },
    reset: function() {
      valor = 0;
    }
  };
}