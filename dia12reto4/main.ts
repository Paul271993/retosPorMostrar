import { Punto } from "./point";
import { Triangulo } from "./triangle";

let point1: Punto = new Punto(3, 5);
let point2: Punto = new Punto(-6, -12);
let point3: Punto = new Punto(-10, 0);
let point4: Punto = new Punto(6, 12);
let points: Punto[] = new Array(point1, point2, point3);
let triangle1: Triangulo = new Triangulo(point1, point2, point3);

console.log(point1.toString());
point1.setX(14);
console.log(point1.getX());
console.log(point1.distanciaAlOrigen());
console.log(point2.calcularCuadrante());
console.log(point3.calcularCuadrante());
console.log(point4.calculoMasCercano(points));
console.log(triangle1.calcularLongitudLados());


//Funcion con el número más bajo de un array

function lowest(arrayN: number[]) {
  let low = arrayN[0];
  for (let i = 0; i < arrayN.length; i++) {
    if (arrayN[i] < low) {
      low = arrayN[i];
    }
  }
  return low;
}

let test: number[] = new Array(3, 1, 90, 1, 7);
console.log(lowest(test));
