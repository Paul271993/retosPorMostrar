"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var point1 = new point_1.Punto(3, 5);
var point2 = new point_1.Punto(-6, -12);
var point3 = new point_1.Punto(-10, 0);
var point4 = new point_1.Punto(6, 12);
var points = new Array(point1, point2, point3);
var triangle1 = new triangle_1.Triangulo(point1, point2, point3);
console.log(point1.toString());
point1.setX(14);
console.log(point1.getX());
console.log(point1.distanciaAlOrigen());
console.log(point2.calcularCuadrante());
console.log(point3.calcularCuadrante());
console.log(point4.calculoMasCercano(points));
console.log(triangle1.calcularLongitudLados());
//Funcion con el número más bajo de un array
function lowest(arrayN) {
    var low = arrayN[0];
    for (var i = 0; i < arrayN.length; i++) {
        if (arrayN[i] < low) {
            low = arrayN[i];
        }
    }
    return low;
}
var test = new Array(3, 1, 90, 1, 7);
console.log(lowest(test));
