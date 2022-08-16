function setPropsOnObj(obj) {
  obj.p = 5;
  obj.plataforma = 5;
  obj.proximo = function(num) {
    return num + 1;
  }
  obj.la = {
    clave: {
      secreta: {
        es: 404
      }
    }
  }
}

function setPropsOnArr(arr) {
  arr.hola = function() {
    return "Hola!";
  }
  arr.river = "plate";
  arr[0] = 5;
  arr.doble = function(num) {
    return num * 2;
  }
}
function setPropsOnFunc(func) {
  func.year = new Date().getFullYear();
  func.mitad = function(num) {
    return num / 2;
  }
  func.prototype.helloWorld = function() {
    return "Hello World";
  }
}
function functionObject() {
  return function() {
    return "Soy una función con propiedades!";
  }
}