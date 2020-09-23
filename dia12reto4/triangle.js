"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.getVertice1 = function () {
        return this.vertice1;
    };
    Triangulo.prototype.setVertice1 = function (newVertice1) {
        this.vertice1 = newVertice1;
    };
    Triangulo.prototype.getVertice2 = function () {
        return this.vertice2;
    };
    Triangulo.prototype.setVertice2 = function (newVertice2) {
        this.vertice2 = newVertice2;
    };
    Triangulo.prototype.getVertice3 = function () {
        return this.vertice3;
    };
    Triangulo.prototype.setVertice3 = function (newVertice3) {
        this.vertice3 = newVertice3;
    };
    Triangulo.prototype.calcularLongitudLados = function () {
        var lados = [];
        lados[0] = this.vertice1.calcularDistancia(this.vertice2);
        lados[1] = this.vertice2.calcularDistancia(this.vertice3);
        lados[2] = this.vertice3.calcularDistancia(this.vertice1);
        return lados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
