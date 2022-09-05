function Mamifero(nombre) {
  this.nombre = nombre;
  this.descendencia = [];
}
Mamifero.prototype.saludar = function () {
  return "Hola, mi nombre es " + this.nombre;
};
Mamifero.prototype.nuevoHijo = function () {
  var hijo = new Mamifero(this.nombre + " Jr");
  this.descendencia.push(hijo);
  return hijo;
};
function Gato(nombre, color) {
  //con call heredamos las propiedades de Mamifero
  Mamifero.call(this, nombre);
  this.color = color;
}
//usamos esto para que exista la herencia, si no no hereadaria los metodos de mamifero
//usamos Object.create creas una nueva instancia, y no apuntan al mismo objeto en memoria
//seria como crear una copia de mamifero
Gato.prototype = Object.create(Mamifero.prototype);
//si no hacemos esto, el constructor de gato seria mamifero
Gato.prototype.constructor = Gato;
Gato.prototype.nuevoHijo = function (color) {
  this.color = color;
  var hijo = new Gato(this.nombre + " Jr", this.color);
  this.descendencia.push(hijo);
  return hijo;
};
