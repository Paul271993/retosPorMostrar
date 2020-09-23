"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    // Metodo que convierte a texto las coordenadas del punto
    Punto.prototype.toString = function () {
        return "( " + this.x + " , " + this.y + " )";
    };
    // Getters y Setters de los atributos
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    // Metodo que calcula 
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt(Math.pow(0 - this.x, 2) + Math.pow(0 - this.y, 2));
    };
    Punto.prototype.calcularDistancia = function (otherPunto) {
        return Math.sqrt(Math.pow(otherPunto.x - this.x, 2) + Math.pow(otherPunto.y - this.y, 2));
    };
    // Metodo que devuelve el cuadrante en el que se encuentra el punto
    Punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    Punto.prototype.calculoMasCercano = function (points) {
        var cercano = new Punto(0, 0);
        var distanciaCercano = 1000;
        for (var i = 0; i < points.length; i++) {
            var distanciaPunto = this.calcularDistancia(points[i]);
            if (distanciaPunto < distanciaCercano) {
                distanciaCercano = distanciaPunto;
                cercano = points[i];
            }
        }
        return cercano;
    };
    return Punto;
}());
exports.Punto = Punto;
