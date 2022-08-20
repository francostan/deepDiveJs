function CalculadoraNPI () {
    this.valores = [];
    
    this.restar = function () {
        for(var i = 0; i < this.valores.length; i++) {
            this.valor -= this.valores[i];
        }
        return this.valor;
    }
    this.multiplicar = function () {
        for(var i = 0; i < this.valores.length; i++) {
            this.valor *= this.valores[i];
        }
        return this.valor;
    }
    this.dividir = function () {
        for(var i = 0; i < this.valores.length; i++) {
            this.valor /= this.valores[i];
        }
        return this.valor;
    }
}
CalculadoraNPI.prototype.valor = function () {
    return this.valor;
}
CalculadoraNPI.prototype.agregar = function (valor) {
    this.valores.push(valor);
}
CalculadoraNPI.prototype.sumar = function () {
    for(var i = 0; i < this.valores.length; i++) {
        this.valor += this.valores[i];
    }
    return this.valor;
}

