function Mamifero(nombre) {
  this.nombre = nombre;
  this.descendencia = [];
}
Mamifero.prototype.saludar = function() {
  return "Hola, mi nombre es " + this.nombre;
}
Mamifero.prototype.nuevoHijo = function() {
    var hijo = new Mamifero(this.nombre + " Jr");
    this.descendencia.push(hijo);
    return hijo;
    }
function Gato(nombre, color) {
    Mamifero.call(this, nombre);
    this.color = color;
    
    }
Gato.prototype = Object.create(Mamifero.prototype);
Gato.prototype.constructor = Gato;
Gato.prototype.nuevoHijo = function(color) {
    this.color = color;
    var hijo = new Gato(this.nombre + " Jr", this.color);
    this.descendencia.push(hijo);
    return hijo;
    }
